import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { saveCharacter } from '../storage';

export class HealthScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      level: 1,
      armor: 0,
      stats: [
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

  updateName = (name) => {
    this.setState({ name: name });
  }

  updateLevel = (level = 1) => {
    this.setState({ level: level });
  }

  updateArmor = (armor = 10) => {
    this.setState({ armor: armor });
  }

  buildCharacterObject = () => {
    let object = {};
    object.name = this.state.name;
    object.level = this.state.level;
    object.armor = this.state.armor;
    let stats = {};
    this.state.stats.forEach(stat => {
      stats[stat.key] = stat.value;
    })
    object.stats = stats;
    return object;
  }

  render() {
    return (
      <SafeAreaView>
        <StatusBar />
        <ScrollView>
          <View style={styles.centered}>
            <Text style={styles.largeText}>Character creation</Text>
          </View>
          <View >
            <TextInput onChangeText={this.updateName} placeholder="Name..." style={styles.statsText} />
            <TextInput onChangeText={this.updateLevel} placeholder="Level..." style={styles.statsText} />
            <TextInput onChangeText={this.updateArmor} placeholder="Armor class..." style={styles.statsText} />
          </View>
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
            <Button title="Save" onPress={() => saveCharacter(this.buildCharacterObject())} />
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
    fontSize: 36,
    color: '#000',
  },
  statsText: {
    fontSize: 24,
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
