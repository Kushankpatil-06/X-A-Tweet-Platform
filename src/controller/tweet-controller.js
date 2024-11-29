import TweetService from '../services/tweet-service.js';
const service = new TweetService();
export const create = async (req,res)=>{
    try {
        const response = await service.create(req.body);
            res.status(201).json({
            success:true,
            message:"Succesfully Created Tweet",
            data:response,
            err:{}

            });
        } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something Went wrong while Creating Tweet",
            data:{},
            err:error
           })
    }
}
