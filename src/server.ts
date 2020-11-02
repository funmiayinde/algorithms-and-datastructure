import * as express from 'express';
import maxProfit_1 from './execise/best-time-buy-sell-iii';


const app: express.Application = express.default();
const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log('maxProfit-1:', maxProfit_1([3,3,5,0,0,3,1,4]));
    console.log(`Listening at http://localhost:${port}/`);
    
});