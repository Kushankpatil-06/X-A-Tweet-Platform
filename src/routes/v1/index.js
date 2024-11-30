import express from 'express';
import {create,getTweets} from "../../controller/tweet-controller.js"
import { toggleLike } from '../../controller/like-controller.js';
import { createComment,  } from '../../controller//comment-controller.js'
import { signup } from '../../controller/auth-controller.js';

const router = express.Router();


router.post('/tweets',create)
router.post('/toggle/like',toggleLike)
router.post('/comments', createComment);
router.get('/tweets/:id',getTweets );
router.post('/signUp',signup)

export default router;