import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();
export default function Dashboard({ navigation }) {
  return (
    <SafeAreaView>
      <Text style={{ color: '#000' }}>Dashboard (Status da consultoria)</Text>
      <Button
        title="Go to Questions"
        onPress={() => navigation.navigate('Questions')}
      ></Button>
    </SafeAreaView>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Status',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};
