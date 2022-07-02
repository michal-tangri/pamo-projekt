import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as spells from '../data/spells';

/**
 * Component to display a single spell and it's related information and details.
 *
 * @version 1.0.0
 * @author Michał Tangri - 18505
 * @see SpellsScreen
 */
export class SpellComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.spellName}>{this.props.spellName}</Text>
        {spells[this.props.spellName].content.map((content, i) => {
          return (
            <Text key={i} style={styles.spellText}>
              {content}
            </Text>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  spellName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  spellText: {
    marginBottom: 3,
  },
});
