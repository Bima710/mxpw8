import React from 'react';
import { Button, Text, View, Image } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Email: undefined;
  Profile: { userName: string; userEmail: string; userPhoto: string };
};

type ProfileScreenNavigationProp = NavigationProp<RootStackParamList, 'Profile'>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;
};

const Profile = ({ navigation, route }: Props) => {
  const { userName, userEmail, userPhoto } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={{ uri: userPhoto }} style={{ width: 100, height: 100, borderRadius: 50 }} />
      <Text>{userName}'s Profile</Text>
      <Text>Email: {userEmail}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Profile;
