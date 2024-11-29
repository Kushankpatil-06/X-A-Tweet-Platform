import express from 'express';
import {create} from "../../controller/tweet-controller.js"
import { toggleLike } from '../../controller/like-controller.js';


const router = express.Router();


router.post('/tweets',create)
router.post('/toggle/like',toggleLike)

export default router;