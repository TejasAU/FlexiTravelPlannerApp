import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    const checkUserExists = async () => {
      const user = await AsyncStorage.getItem('user');
      setUserExists(user !== null);
    };

    checkUserExists();
  }, []);

  return (
    <UserContext.Provider value={{ userExists, setUserExists }}>
      {children}
    </UserContext.Provider>
  );
};
