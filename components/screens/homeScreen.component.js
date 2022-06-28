import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import characterData from '../../characters.json'

export class HomeScreen extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <SafeAreaView>
        <StatusBar />
        <ScrollView>
          {characterData.characters.map((character) => (
            <View style={styles.mainArea}>
              <View style={styles.singleCharacter}>
                <Text>Name: {character.name}</Text>
                <Text>Level: {character.level}</Text>
                <Text>Armor class: {character.armor}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }


}

const styles = StyleSheet.create({
  mainArea: {
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
  },
  singleCharacter: {
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 10,

  }
})
