import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { postData } from './services/axios';

export default function Forms({ route, navigation }) {
  const { post } = route.params;
  console.log('Received post in Forms:', post); // Log received post

  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleSubmit = () => {
    const updatedPost = { ...post, title, body };
    console.log('Submitting updated post:', updatedPost); // Log updated post
    postData(updatedPost).then((res) => {
      if (res.status === 200) {
        console.log('Post updated successfully'); // Log success
        navigation.goBack();
      }
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
      />
      <TextInput
        style={styles.input}
        value={body}
        onChangeText={setBody}
        placeholder="Body"
        multiline
      />
      <Button title="Update Post" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
});
