import express from 'express';
import {authRouter} from "./routes/auth.router.js";
import {postRouter} from "./routes/post.router.js";

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`===============${port} Server Start!!`)
})

app.use('/posts', postRouter);
app.use('/auth', authRouter);