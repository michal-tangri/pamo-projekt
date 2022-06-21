import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Button } from 'react-native';

export class DiceScreen extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <SafeAreaView>
        <StatusBar />
        <ScrollView>
          <View> </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeText: {
    fontSize: 48,
    color: '#000',
  },
});
