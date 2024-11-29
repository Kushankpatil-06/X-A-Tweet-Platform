import express from 'express';
import bodyParser from 'body-parser';
import {connect} from './config/database.js';
import HashtagRepository from './repository/hashtag-repository.js';
import TweetService from './services/tweet-service.js';
import apiRoutes from "./routes/index.js"

const app = express();

app.listen(3000,async()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    console.log('Server Is Running');
    await connect();
    console.log('MongoDb connected')
    let service= new TweetService();
    app.use('/api',apiRoutes);
})