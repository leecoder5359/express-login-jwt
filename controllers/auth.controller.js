import jwt from "jsonwebtoken";

export const login = (req, res) => {
    const userName = req.body.userName;
    const user = { name: userName};

    const accessToken = jwt.sign(user, process.env.JWT_ACCESS_TOKEN_SECRET, {
        expiresIn: '30s'
    });

    const refreshToken = jwt.sign(user, process.env.JWT_REFRESH_TOKEN_SECRET, {
        expiresIn: '30s'
    });
    res.json({accessToken});
}