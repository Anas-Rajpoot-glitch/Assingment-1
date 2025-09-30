import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const user = {
  name: 'Your Name',
  skills: ['React Native', 'Guitar', 'Photography'],
  bio: 'A passionate developer and musician looking to share my skills with the world.',
};

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user.name}</Text>
      <Text style={styles.subtitle}>Skills: {user.skills.join(', ')}</Text>
      <Text>{user.bio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 18, marginBottom: 10 }
});
