import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Button } from 'react-native';

export class HealthScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      stats: [
        { key: 'healthPoints', label: 'HP', value: 0 },
        { key: 'strength', label: 'STR', value: 0 },
        { key: 'dexterity', label: 'DEX', value: 0 },
        { key: 'constitution', label: 'CON', value: 0 },
        { key: 'intelligence', label: 'INT', value: 0 },
        { key: 'wisdom', label: 'WIS', value: 0 },
        { key: 'charisma', label: 'CHA', value: 0 },
      ]
    };
  }

  addStat = (statName, amount = 1) => {
    let matchingStat = this.state.stats.find(stat => stat.key === statName);
    this.setState({ [statName]: matchingStat.value += amount });
  }
  subtractStat = (statName, amount = 1) => {
    let matchingStat = this.state.stats.find(stat => stat.key === statName);
    this.setState({ [statName]: matchingStat.value -= amount });
  }

  render() {
    return (
      <SafeAreaView>
        <StatusBar />
        <ScrollView>

          {this.state.stats.map((stat) => (
            <View style={styles.row}>
              <View style={styles.statsBackground}>
                <Text style={styles.statsText}>{stat.label}:{stat.value}</Text>
              </View>
              <View style={styles.statsButton}>
                <Button title="+" onPress={() => this.addStat(stat.key)} />
              </View>
              <View style={styles.statsButton}>
                <Button title="-" onPress={() => this.subtractStat(stat.key)} />
              </View>
              <View style={styles.statsButton}>
                <Button title="+5" onPress={() => this.addStat(stat.key, 5)} />
              </View>
              <View style={styles.statsButton}>
                <Button title="-5" onPress={() => this.subtractStat(stat.key, 5)} />
              </View>
            </View>
          ))}
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
  statsText: {
    fontSize: 36,
    color: '#000',
  },
  statsBackground: {
    width: '35%',
    alignSelf: 'flex-start',
  },
  statsButton: {
    width: '15%',
    padding: 10,
    alignSelf: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

// render() {
//   return (
//     <SafeAreaView>
//       <StatusBar />
//       <ScrollView>
//         <View style={styles.centered}>
//           <Text style={styles.largeText}>{this.state.healthPoints}</Text>
//         </View>
//         <View>
//           <Button title="+" onPress={this.addHealthPoint} />
//           <Button title="-" onPress={this.subtractHealthPoint} />
//         </View>
//         <View style={{ marginTop: 30 }}>
//           <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }
