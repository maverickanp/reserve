import express from 'express';
import http from 'http';
import {getSummary} from './service/index'

const app = express();
app.use(express.json());

const server = http.createServer(app);

const summary = async () => {
  
  await getSummary()
  
}

console.log(summary)
server.listen(7781);