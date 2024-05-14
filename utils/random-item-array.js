export const getRandomItem = (arr) => {
  if (arr.length === 0) {
    return null; // or you could throw an error or return undefined
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
const randomItem = getRandomItem(myArray);
console.log(randomItem);
