import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const Timelines = () => {
  const classes = [
    {
      startTime: '09:00',
      endTime: '10:30',
      title: 'Place 1',
      category: 'Restauraunt',
      
    },
    {
      startTime: '10:30',
      endTime: '11:00',
      title: 'Place 2',
      category: 'Beach',
      
    },
    {
      startTime: '11:00',
      endTime: '11:30',
      title: 'Place 3',
      category: 'Market',
      
    },
    {
      startTime: '11:30',
      endTime: '12:30',
      title: 'Place 4',
      category: 'Beach',
      
    },
    // Add more classes as needed
  ];

  const renderClassItem = ({ item }) => (
    <View style={styles.classItem}>
      <View style={styles.timelineContainer}>
        <View style={styles.timelineDot} />
        <View style={styles.timelineLine} />
      </View>

      <View style={styles.classContent}>
        <View style={styles.classHours}>
          <Text style={styles.startTime}>{item.startTime}</Text>
          <Text style={styles.endTime}>{item.endTime}</Text>
        </View>

        <View style={[styles.card,{backgroundColor:"black"}]}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardCategory}>Category: {item.category}</Text>
          
        </View>
      </View>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Itinerary 1</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Day 1</Text>
        </View>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timeline for itinerary is displayed here</Text>

      <FlatList
      contentContainerStyle={{paddingHorizontal:16}}
        data={classes}
        ListHeaderComponent={renderHeader}
        renderItem={renderClassItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginLeft:16
  },
  card: {
    flex:1,
    backgroundColor: 'orange',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 16,
    padding: 16,
  },
  header: {
    marginBottom: 8,
  },
  headerTitle: {
    color:'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 12,
    color:'#ffffff',
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 8,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#ffffff',
  },
  userRole: {
    fontSize: 12,
    color:'#ffffff',
  },
  classItem: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  timelineContainer: {
    width: 30,
    alignItems: 'center',
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'orange',
    marginBottom: 8,
  },
  timelineLine: {
    flex: 1,
    width: 2,
    backgroundColor: 'black',
  },
  classContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  classHours: {
    marginRight: 8,
    alignItems: 'flex-end',
  },
  startTime: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  endTime: {
    fontSize: 16,
  },
  cardTitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 4,
  },
  cardCategory: {
    fontSize: 12,
    color: 'white',
    marginBottom: 8,
  },
  
  
});

export default Timelines;

                    