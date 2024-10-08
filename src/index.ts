import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './user/user.controller';

const app = express();
const port = 8080;

app.use(bodyParser.json()); //for parsing application/json header

app.get('/api', (req, res) => {
    res.send('Welcome');
});

app.use('/api/users', userRouter);

app.listen(port, () => {
    console.log('Server running on port ', port);
});