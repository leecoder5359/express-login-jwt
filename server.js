import express from "express";
import {authRouter} from "./routes/auth.router.js";
import {postRouter} from "./routes/post.router.js";
import * as dotenv from "dotenv";
import {getEnvConfig} from "./config/envConfig.js";

const app = express();

app.use(express.json());
dotenv.config({ path: getEnvConfig() });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`===============${port} Server Start!!`)
})

app.use('/posts', postRouter);
app.use('/auth', authRouter);