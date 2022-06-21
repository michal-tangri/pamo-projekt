import React from 'react';
import { Text, View, Button } from 'react-native';

export class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Go to health" onPress={() => this.props.navigation.navigate('Health')} />
      </View>
    );
  }
}
