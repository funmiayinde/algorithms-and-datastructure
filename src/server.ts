import * as express from 'express';
import maxProfit_1 from './execise/best-time-buy-sell-iii';
import lengthOfLongestSubstring from './execise/longest-substring-without-repeating-characters';
import maxSubArray from './execise/max-sub-array-sum';


const app: express.Application = express.default();
const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log('result:', lengthOfLongestSubstring('pwwkew'));
    console.log(`Listening at http://localhost:${port}/`);
    
});