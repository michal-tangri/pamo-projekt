import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';

export class DiceScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedDiceValue: 6,
      rolledValue: null,
    };

    this.diceData = [
      { key: 'd4', label: 'D4', value: 4 },
      { key: 'd6', label: 'D6', value: 6 },
      { key: 'd8', label: 'D8', value: 8 },
      { key: 'd10', label: 'D10', value: 10 },
      { key: 'd12', label: 'D12', value: 12 },
      { key: 'd20', label: 'D20', value: 20 },
      { key: 'd100', label: 'D100', value: 100 },
    ];

    this.diceAnimation = new Animated.Value(1);
    this.setupDiceAnimation();
  }

  setupDiceAnimation() {
    const rotateInterpolate = this.diceAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    styles.diceAnimation = { transform: [{ rotate: rotateInterpolate }] };
  }

  changeSelectedDiceValue = (value) => {
    this.setState({ selectedDiceValue: value });
  };

  rollDice = () => {
    Animated.timing(this.diceAnimation, {
      toValue: 0,
      duration: 430,
      useNativeDriver: true,
    }).start(() => {
      this.diceAnimation.setValue(1);
      this.setState({ rolledValue: Math.floor(Math.random() * this.state.selectedDiceValue) + 1 });
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <Animated.View style={[styles.row, styles.diceAnimation]}>
          <Icon name="dice-d20" size={64} onPress={this.rollDice} />
        </Animated.View>
        <Text style={styles.label}>Press to roll</Text>
        <Text style={styles.resultLabel}>{this.state.rolledValue ? this.state.rolledValue : ''}</Text>

        <Text style={styles.selectedDiceLabel}>Selected: D{this.state.selectedDiceValue}</Text>
        <View style={[styles.row, styles.buttons]}>
          {this.diceData.map((die) => (
            <TouchableOpacity key={die.key} style={styles.diceButton} onPress={() => this.changeSelectedDiceValue(die.value)}>
              <Text style={styles.diceButtonLabel}>{die.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttons: {
    position: 'absolute',
    bottom: 10,
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
  resultLabel: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 48,
  },
  selectedDiceLabel: {
    textAlign: 'left',
    marginBottom: 10,
    fontSize: 16,
    marginLeft: 8,
    position: 'absolute',
    bottom: 40,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
  },
  diceButton: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'crimson',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    width: '12%',
    textAlign: 'center',
  },
  diceButtonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'white',
  },
});
