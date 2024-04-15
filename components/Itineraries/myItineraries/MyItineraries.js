import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const MyItineraries = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      title: 'Itinerary for city 1',
      
    },
    {
      id: 2,
      title: 'Itinerary for city 2',
      
    },
    {
      id: 3,
      title: 'Itinerary for city 3',
      
    },
    {
      id: 4,
      title: 'Itinerary for city 4',
      
    },
    {
      id: 5,
      title: 'Itinerary for city 5',
      progress: '60%',
      
    },
    {
      id: 6,
      title: 'Itinerary for city 6',
      
    },
  ]);

  const renderAppointmentCard = ({ item }) => (
    <View style={[styles.card, { backgroundColor: "black", borderTopWidth:4, borderTopColor: "grey"}]}>
      <Text style={[styles.cardTitle, { color: "orange" }]}>{item.title}</Text>
      <View style={styles.cardDates}>
        <Text style={styles.cardDate}>Short Optional description here</Text>
      </View>
      <View style={styles.cardContent}>
        
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>Details</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>Config</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );

  const searchFilter = (item) => {
    const query = searchQuery.toLowerCase();
    return item.title.toLowerCase().includes(query);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Here are your Itineraries</Text>
      
      <FlatList 
        contentContainerStyle={styles.listContainer}
        data={appointments.filter(searchFilter)}
        renderItem={renderAppointmentCard}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop:60,
  },
  listContainer:{
    paddingHorizontal:5
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    borderWidth: 2,
    borderRadius:5,
    borderColor:'#A9A9A9',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  card: {
    flex:1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    marginHorizontal:10,

    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize:18,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  cardDates: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  cardDate: {
    color: '#888',
  },
  cardContent: {
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  attendeesContainer: {
    flexWrap:'wrap',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  attendeeImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginLeft: -10,
    borderWidth:0.5,
    marginTop:3,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  actionButton: {
    marginTop:15,
    backgroundColor: 'orange',
    padding:8,
    borderRadius: 5,
    borderWidth:1,
    borderColor:'orange',
    marginRight: 10,
     
  },
  buttonText: {
    color: '#00008B',
  },
});

export default MyItineraries;
