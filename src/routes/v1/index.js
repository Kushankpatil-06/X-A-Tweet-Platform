import express from 'express';
import {create,getTweets} from "../../controller/tweet-controller.js"
import { toggleLike } from '../../controller/like-controller.js';
import { createComment,  } from '../../controller//comment-controller.js'

const router = express.Router();


router.post('/tweets',create)
router.post('/toggle/like',toggleLike)
router.post('/comments', createComment);
router.get('/tweets/:id',getTweets );

export default router;