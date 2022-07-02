import React from 'react';
import { Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import { SpellComponent } from '../spell.component';
import * as spellsData from '../../data/spells';

/**
 * Screen (component) to display a list of spells with a search bar to allow
 * easy filtering. After clicking one of the spells, it shows it's description
 * and other useful information about it.
 *
 * @version 1.0.1
 * @author Michał Tangri - 18505
 * @see SpellComponent
 */
export class SpellsScreen extends React.Component {
  constructor() {
    super();
    /**
     * This class' state.
     *
     * Modified when a spell is selected from the list.
     * Modified when value of search bar text input changes.
     *
     * @type {object}
     * @property {string}   selectedSpell Name of a spell to display additional information, or empty string.
     * @property {string[]} spellNames List of spell names to display the list.
     * */
    this.state = {
      selectedSpell: '',
      spellNames: [...Object.keys(spellsData)],
    };
  }

  /**
   * Method used to reset the list of spell names after filtration has been applied.
   * and to reset the selected spell to 'go back' to the list of spells.
   *
   * Called when 'go back' button is pressed.
   * @public
   * */
  resetSearch = () => {
    this.setState({ selectedSpell: '', spellNames: [...Object.keys(spellsData)] });
  };

  /**
   * Method used to filter through the list of spells using a string provided
   * in the search bar.
   *
   * Used whenever the value of the search bar changes.
   * @param {string} text Current value of the search bar text input.
   * @public
   * */
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
          <TouchableOpacity style={styles.goBackButton} onPress={this.resetSearch}>
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
