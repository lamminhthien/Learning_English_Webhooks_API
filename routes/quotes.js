import express from "express";
const router = express.Router();
import { readFileSync } from "fs";
import { randomArrayItem } from "random-array-item";
import { setDefaultHeaders } from "../utils/headers.js";
import { postToGoogleChat } from '../utils/google-chat-webhook.js';
const englishQuotesData  = JSON.parse(readFileSync(new URL("../data/quotes/quotes.json", import.meta.url)));

router.get("/", function (req, res) {
  setDefaultHeaders(res);

  const fetchRandomWord = randomArrayItem(englishQuotesData);

  const content = JSON.stringify(fetchRandomWord, null, 2)
  postToGoogleChat(content)
  res.send(content);
});

export default router;
