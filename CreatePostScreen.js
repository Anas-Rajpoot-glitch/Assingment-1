import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CreatePostScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handlePost = () => {
    console.log('New Post:', title, desc);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Skill Title</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Text style={styles.label}>Description</Text>
      <TextInput style={styles.input} value={desc} onChangeText={setDesc} multiline />
      <Button title="Post" onPress={handlePost} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { marginTop: 10, fontWeight: 'bold' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginTop: 5 }
});
