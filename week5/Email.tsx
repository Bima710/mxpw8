import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Email: undefined;
  Profile: { userName: string; userEmail: string; userPhoto: string };
};

type EmailScreenNavigationProp = NavigationProp<RootStackParamList, 'Email'>;
type EmailScreenRouteProp = RouteProp<RootStackParamList, 'Email'>;

type Props = {
  navigation: EmailScreenNavigationProp;
  route: EmailScreenRouteProp;
};

const Email = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Email List Page</Text>
      <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Email;
