const posts = [
    {
        userName: 'lee',
        title: 'post 1'
    },
    {
        userName: 'shin',
        title: 'post 2'
    }
]
export const getPosts = (req , res) => {
    res.json(posts);
}