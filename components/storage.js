import characterData from '../characters.json'
import RNFS from 'react-native-fs'

var saveFilePath = RNFS.DocumentDirectoryPath + '/characters.json';

/**
   * Method used for creating a save file the first time the application starts
   *
   * */
export async function createSaveFile() {
  if (!(await checkIfSaveFileExists())) {
    await RNFS.writeFile(saveFilePath, '{ "characters": []}', 'utf8')
      .then(success => {
        console.log('Save file created!');
      })
      .catch(error => {
        console.log(error.message);
      });
  }
}

/**
   * Method used for reading file contents and returning them as an object.
   *
   * This is used for reading saved characters.
   * */
export async function readSaveFile() {
  const save = await RNFS.readFile(saveFilePath);
  return JSON.parse(save);
}

/**
   * Method used for saving a character
   *
   * @param {object} character Object with character data
   * */
export async function addCharacter(character) {
  var save = await readSaveFile();
  save.characters.push(character);

  await updateFile(save);
}

/**
   * Method used for saving a character.
   *
   * This method first checks whether the character exists or not.
   * If it does then it's updated and if it does not then it's created.
   * @param {object} character Object with character data
   * */
export async function saveCharacter(character) {
  var save = await readSaveFile();
  console.log(save);
  let characterIndex = searchForCharacter(save, character.name);
  if (characterIndex === undefined) {
    await addCharacter(character)
  } else {
    save.characters[characterIndex] = character;
    await updateFile(save);
  }
}

/**
   * Method used for deleting save file.
   *
   * */
export async function wipeSave() {
  return await RNFS.unlink(saveFilePath);
}

/**
   * Method used for saving a character
   *
   * @param {object} save Object with character data
   * @param {string} name Name of the character we are looking for
   * */
function searchForCharacter(save, name) {
  let characters = save.characters;
  for (let i = 0; i < characters.length(); i++) {
    if (characters[i].name === name) {
      return i;
    }
  }
  return undefined;
}

/**
   * Method used for checking if a save file is present on the device.
   *
   * */
async function checkIfSaveFileExists() {
  return await RNFS.exists(saveFilePath)
}

/**
   * Method used updating the save file
   *
   * @param {object} newSaveFile Object with new save data.
   * */
async function updateFile(newSaveFile) {
  await RNFS.writeFile(saveFilePath, newSaveFile);
}
