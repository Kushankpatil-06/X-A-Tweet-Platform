import express from 'express';
import {connect} from './config/database.js';
import HashtagRepository from './repository/hashtag-repository.js';
import TweetService from './services/tweet-service.js';

const app = express();

app.listen(3000,async()=>{
    console.log('Server Is Running');
    await connect();
    console.log('MongoDb connected')
    let service= new TweetService();
    let tweet =  await service.create({
        content:"I am Really #excited to begin this #new #journey with #netflix as a #software #engineer"
    })
   console.log(tweet);
})