
const url = "api/posts"
// const baseURL = "https://blog-next-js-kappa-ruby.vercel.app/api/posts"

// const baseURL = "/api/posts"

export default async function GetPost(id){
    const res = await fetch(process.env.baseURL+url)
    const posts = await res.json()

    if(id){
        return posts.find(value => value.id == id)
    }

    return posts;
}

