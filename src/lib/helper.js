
// const baseURL = "http://127.0.0.1:3000/api/posts"
// const baseURL = "https://blog-next-js-6p3x.vercel.app/api/posts"

const baseURL = "/api/posts"

export default async function GetPost(id){
    const res = await fetch(`${baseURL}`)
    const posts = await res.json()

    if(id){
        return posts.find(value => value.id == id)
    }

    return posts;
}

