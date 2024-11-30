import express from 'express';
import {create,getTweets} from "../../controller/tweet-controller.js"
import { toggleLike } from '../../controller/like-controller.js';
import { createComment,  } from '../../controller//comment-controller.js'
import { signup,login } from '../../controller/auth-controller.js';
import { authenticate } from '../../config/authenticate.js';

const router = express.Router();


router.post('/tweets',authenticate,create)
router.post('/toggle/like',authenticate,toggleLike)
router.post('/comments', authenticate,createComment);
router.get('/tweets/:id',getTweets );
router.post('/signUp',signup)
router.post('/login', login);

export default router;