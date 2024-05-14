import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const postToGoogleChat = (content) => {
  try {
    axios.post(process.env.CHANNEL, {
      text: content
    });
  } catch (error) {
  }
};
