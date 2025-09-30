import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const dummyOffers = [
  { id: '1', title: 'Python Tutoring', user: 'Ali' },
  { id: '2', title: 'Guitar Lessons', user: 'Fatima' },
  { id: '3', title: 'Drawing Basics', user: 'Ahmed' },
  { id: '4', title: 'Yoga & Meditation', user: 'Sara' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyOffers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>By {item.user}</Text>
          </View>
        )}
      />
      <Button title="Create Post" onPress={() => navigation.navigate('CreatePost')} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: { padding: 15, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, marginBottom: 10 },
  title: { fontSize: 18, fontWeight: 'bold' }
});
