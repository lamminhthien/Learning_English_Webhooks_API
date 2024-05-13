import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const postToGoogleChat = async (content) => {
  try {
    const response = await axios.post(process.env.CHANNEL, {
      text: content
    });
    console.log('Message sent to Google Chat:', response.data);
  } catch (error) {
    console.error('Failed to send message to Google Chat:', error);
  }
};
