import { TweetRepository, HashtagRepository } from '../repository/index.js'

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data) {
        console.log(data);
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1).toLowerCase()); // this regex extracts hashtags
                        console.log(tags);
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        let titleOfPresenttags = alreadyPresentTags.map(tags => tags.title);
        let newTags = tags.filter(tag => !titleOfPresenttags.includes(tag));
        newTags = newTags.map(tag => {
            return {title: tag, tweets: [tweet.id]}
        });
        const response = await this.hashtagRepository.bulkCreate(newTags);
        console.log(response);
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        });
        return tweet;
    }

  async getTweet(tweetId){
    const res = await this.tweetRepository.getWithComments(tweetId);
    return res;
  }


}
export default TweetService;