import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Button } from 'react-native';

export class HealthScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      healthPoints: 20,
    };
  }

  addHealthPoint = () => {
    this.setState({ healthPoints: ++this.state.healthPoints });
  };

  subtractHealthPoint = () => {
    this.setState({ healthPoints: --this.state.healthPoints });
  };

  render() {
    return (
      <SafeAreaView>
        <StatusBar />
        <ScrollView>
          <View style={styles.centered}>
            <Text style={styles.largeText}>{this.state.healthPoints}</Text>
          </View>
          <View>
            <Button title="+" onPress={this.addHealthPoint} />
            <Button title="-" onPress={this.subtractHealthPoint} />
          </View>
          <View style={{ marginTop: 30 }}>
            <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
          </View>
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
