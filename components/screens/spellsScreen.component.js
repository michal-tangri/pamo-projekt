import React from 'react';
import { Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import { SpellComponent } from '../spell.component';
import * as spellsData from '../../data/spells';

export class SpellsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedSpell: '',
      spellNames: [...Object.keys(spellsData)],
    };
  }

  search = (text) => {
    const filteredSpellNames = [...Object.keys(spellsData)].filter((spellName) => {
      return spellName.toLowerCase().includes(text.toLowerCase());
    });

    this.setState({ spellNames: filteredSpellNames });
  };

  render() {
    if (this.state.selectedSpell) {
      return (
        <ScrollView>
          <SpellComponent spellName={this.state.selectedSpell} />
          <TouchableOpacity style={styles.goBackButton} onPress={() => this.setState({ selectedSpell: '' })}>
            <Text style={styles.whiteCenteredText}>Go back</Text>
          </TouchableOpacity>
        </ScrollView>
      );
    }

    return (
      <ScrollView style={styles.container}>
        <TextInput style={styles.searchBar} onChangeText={(text) => this.search(text)} placeholder="Search by name..." />
        {this.state.spellNames.map((spellName) => {
          return (
            <TouchableOpacity key={spellName} style={styles.spellNameContainer} onPress={() => this.setState({ selectedSpell: spellName })}>
              <Text key={spellName} style={styles.spellName}>
                {spellName}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  spellNameContainer: {
    borderColor: 'gray',
    borderTopWidth: 1,
    paddingHorizontal: 2,
    paddingVertical: 10,
  },
  spellName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  goBackButton: {
    backgroundColor: 'crimson',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  whiteCenteredText: {
    color: 'white',
    textAlign: 'center',
  },
  searchBar: {
    backgroundColor: 'lightgray',
    borderRadius: 40,
    marginBottom: 5,
    maxHeight: 40,
    paddingLeft: 16,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
