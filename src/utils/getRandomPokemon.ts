const MAX_DEX_ID = 5;

export const getRandomPokemon: (notThisOne?: number) => number = (
  notThisOne
) => {
  const pokeDexId = Math.floor(Math.random() * (MAX_DEX_ID - 1));

  if (pokeDexId !== notThisOne) return pokeDexId;
  return getRandomPokemon(notThisOne);
};

export const getOptionsForVote = () => {
  const first = getRandomPokemon();
  const second = getRandomPokemon(first);

  return [first, second];
};
