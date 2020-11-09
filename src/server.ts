import * as express from 'express';
import maxProfit_1 from './execise/best-time-buy-sell-iii';
import longestConsecutive from './execise/longest-consecutive-sequence';
import lengthOfLongestSubstring2 from './execise/longest-substring-without-repeating-characters';
import maxSubArray from './execise/max-sub-array-sum';
import rotateString from './execise/rotate-string';



const app: express.Application = express.default();
const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log('result:', rotateString('abcde','cdeab'));
    console.log(`Listening at http://localhost:${port}/`);
    
});