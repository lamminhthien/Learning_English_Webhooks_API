import translate  from 'translate-google';

export const translateToVietnamese = async (word) => {
  const result = await translate(word,{from: 'en', to: 'vi'});
  return result;
}
