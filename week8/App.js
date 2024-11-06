import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { getPosts } from './services/axios';

export default function App({ navigation }) {
  const [posts, setPosts] = useState([]);

  const getAllPosts = () => {
    getPosts().then((res) => {
      if (res.status === 200) {
        console.log('Posts fetched:', res.data); // Log fetched posts
        setPosts(res.data);
      }
    });
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => {
      console.log('Navigating to Forms with post:', item); // Log navigation
      navigation.navigate('Forms', { post: item });
    }}>
      <View style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text>Moch. Bima - 00000045997</Text>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button
        title="Go to Forms"
        onPress={() => navigation.navigate('Forms', { post: { title: 'Test', body: 'This is a test post.' } })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
    color: '#333',
  },
});
