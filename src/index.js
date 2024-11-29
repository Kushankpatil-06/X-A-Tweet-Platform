import express from 'express';
import bodyParser from 'body-parser';
import {connect} from './config/database.js';
import {HashtagRepository }from './repository/index.js';
import TweetService from './services/tweet-service.js';
import apiRoutes from "./routes/index.js"
import {UserRepository }from './repository/index.js';
import LikeService from './services/like-service.js';
import {TweetRepository} from './repository/index.js';



const app = express();

app.listen(3000, async () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    console.log('Server Is Running');
    await connect();
    console.log('MongoDb connected');

    const userRepo = new UserRepository();
    const tweetRepo = new TweetRepository();
    const tweetService = new TweetService();
    const likeService = new LikeService();

    const tweets = await tweetRepo.getAll(0, 10);

    app.use('/api', apiRoutes);

    const user = await userRepo.getAll()
        // await likeService.toggleLike(tweets[0].id, 'Tweet', user[0].id);
});
