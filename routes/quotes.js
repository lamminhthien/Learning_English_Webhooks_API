import express from "express";
const router = express.Router();
import { readFileSync } from "fs";
import { randomArrayItem } from "random-array-item";
import { setDefaultHeaders } from "../utils/headers.js";
import { postToGoogleChat } from '../utils/google-chat-webhook.js';
import { makeGoogleSearchLink } from '../utils/google-search-link.js';
import { translateToVietnamese } from '../utils/google-translate.js';
const englishQuotesData  = JSON.parse(readFileSync(new URL("../data/quotes/quotes.json", import.meta.url)));

router.get("/", async function (req, res) {
  setDefaultHeaders(res);

  const fetchRandomWord = randomArrayItem(englishQuotesData);
  fetchRandomWord.link = makeGoogleSearchLink(fetchRandomWord.quote)
  fetchRandomWord.translate = await translateToVietnamese(fetchRandomWord.quote)

  const content = JSON.stringify(fetchRandomWord, null, 2)
  postToGoogleChat(content)
  res.send(content);
});

export default router;
