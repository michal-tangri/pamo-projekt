import characterData from '../characters.json'
import RNFS from 'react-native-fs'

var saveFilePath = RNFS.DocumentDirectoryPath + '/characters.json';

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

export async function readSaveFile() {
  const save = await RNFS.readFile(saveFilePath);
  return JSON.parse(save);
}

export async function addCharacter(object) {
  var save = await readSaveFile();
  save.characters.push(object);

  await updateFile(save);
}

export async function saveCharacter(object) {
  var save = await readSaveFile();
  console.log(save);
  let characterIndex = searchForCharacter(save, object.name);
  if (characterIndex === undefined) {
    await addCharacter(object)
  } else {
    save.characters[characterIndex] = object;
    await updateFile(save);
  }
}

export async function wipeSave() {
  return await RNFS.unlink(saveFilePath);
}

function searchForCharacter(object, name) {
  let characters = object.characters;
  for (let i = 0; i < characters.length(); i++) {
    if (characters[i].name === name) {
      return i;
    }
  }
  return undefined;
}

async function checkIfSaveFileExists() {
  return await RNFS.exists(saveFilePath)
}

async function updateFile(newSaveFile) {
  await RNFS.writeFile(saveFilePath, newSaveFile);
}
