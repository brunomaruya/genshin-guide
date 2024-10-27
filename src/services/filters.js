export const filterCharacterByName = (characters, name) => {
  console.log(characters);
  return characters.filter((character) =>
    character.includes(name.toLowerCase())
  );
};
