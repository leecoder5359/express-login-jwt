import jwt from "jsonwebtoken";

let refreshTokens = [];
export const login = (req, res) => {
    const userName = req.body.userName;
    const user = { name: userName};

    const accessToken = jwt.sign(user, process.env.JWT_ACCESS_TOKEN_SECRET, {
        expiresIn: '30s'
    });

    const refreshToken = jwt.sign(user, process.env.JWT_REFRESH_TOKEN_SECRET, {
        expiresIn: '1d'
    });

    refreshTokens.push(refreshToken);// 임시

    res.cookie('jwt', refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    });

    res.json({accessToken});
}

export const refresh = (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);

    console.log('refreshTokens', refreshTokens)
    const refreshToken = cookies.jwt;
    if(!refreshTokens.includes(refreshToken)) {
        return res.sendStatus(403);
    }

    jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);

        const accessToken = jwt.sign({
            name: user.name
        }, process.env.JWT_ACCESS_TOKEN_SECRET, {
            expiresIn: '30s'
        });

        res.json({accessToken});
    })
}