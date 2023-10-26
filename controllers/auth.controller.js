import jwt from "jsonwebtoken";

process.env.JWT_PRIVATE_KEY = 'lee'; // 예시

export const login = (req, res) => {
    const userName = req.body.userName;
    const user = { name: userName};

    const accessToken = jwt.sign(user, process.env.JWT_PRIVATE_KEY);
    res.json({accessToken});
}