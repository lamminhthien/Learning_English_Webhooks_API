import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const postToGoogleChat = async (content) => {
  try {
    await axios.post(process.env.CHANNEL, {
      text: content
    });
  } catch (error) {
  }
};
