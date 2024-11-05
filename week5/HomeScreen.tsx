import React from 'react';
import { View, Text } from 'react-native';
import UserList from './UserList'; // Adjust the path as necessary
import styles from './styles';
import { NavigationProp } from '@react-navigation/native';

type HomeScreenProps = {
  navigation: NavigationProp<any>;
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>User List</Text>
      <UserList navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
