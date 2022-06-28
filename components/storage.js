import characterData from '../characters.json'

export function saveCharacter(data) {
  console.log(data);
  characterData.characters.push(data);
}

export function getAllCharacters() {
  return characterData.characters;
}
