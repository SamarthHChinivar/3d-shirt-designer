import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import { Configuration, OpenAIApi} from 'openai'

dotenv.config();

const router = express.Router();
