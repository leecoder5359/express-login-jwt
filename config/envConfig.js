import path from 'path';
const __dirname = path.resolve();
console.log(__dirname);
export const getEnvConfig = () => {
    switch (process.env.NODE_ENV) {
        case "prod":
            return `${__dirname}/env/.env.prod`;
        case "dev":
            return `${__dirname}/env/.env.dev`;
        default:
            return `${__dirname}/env/.env.dev`;
    }
}