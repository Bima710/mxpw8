import React from 'react';
import { ScrollView, TouchableOpacity, View, Text, Image, Animated } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import userData from './data.json';
import styles from './styles';

type UserListProps = {
  navigation: NavigationProp<any>;
};

const UserList = ({ navigation }: UserListProps) => {
  return (
    <ScrollView style={styles.scrollView}>
      {userData.map((user, index) => {
        const animatedValue = new Animated.Value(0);

        // Define the animation
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 500,
          delay: index * 100, // Different delay for each user
          useNativeDriver: true,
        }).start();

        // Define the animated style
        const animatedStyle = {
          opacity: animatedValue,
          transform: [
            {
              translateY: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0], // Slide in from bottom
              }),
            },
          ],
        };

        return (
          <Animated.View style={[styles.userList, animatedStyle]} key={user.email}>
            <TouchableOpacity 
              style={styles.card}
              onPress={() =>
                navigation.navigate("Profile", { userName: user.name, userEmail: user.email, userPhoto: user.photo_url })
              }
            >
              <Image
                source={{ uri: user.photo_url }}
                style={styles.avatar}
              />
              <View>
                <Text style={styles.title}>{user.name}</Text>
                <Text>{user.email}</Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
        );
      })}
    </ScrollView>
  );
};

export default UserList;
