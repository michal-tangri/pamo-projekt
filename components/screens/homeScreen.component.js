import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { readSaveFile, createSaveFile } from '../storage';

/**
 * Character selection and list screen.
 *
 * Shows a list of characters as well as button for creating a new character.
 *
 * @version 1.0.1
 * @author Sebastian Czajkowski - s19378
 */
export class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      characterData: null
    }
  }

  loadCharacterData = async () => {
    const characerData = await readSaveFile();
    this.setState({ characterData: characerData });
  }

  createFile = async () => {
    /* This line here creates a save file for the app during it's first run */
    await createSaveFile();
  }

  componentDidMount() {
    this.createFile();
    this.loadCharacterData();
  }

  render() {
    if (!this.state.characterData) {
      return (
        <SafeAreaView>
          <StatusBar />
          <ScrollView>
            <View>
              <Text>No characters found</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    }
    return (
      <SafeAreaView>
        <StatusBar />
        <ScrollView>
          {this.state.characterData.characters.map((character) => (
            <View key={character.name} style={styles.mainArea}>
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
