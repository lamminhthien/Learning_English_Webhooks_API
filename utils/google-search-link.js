export const makeGoogleSearchLink = (query) => {
  return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
};
