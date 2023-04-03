
const baseURL = "http://127.0.0.1:3000/api/posts"
// endpoint http://127.0.0.1:3000/api/posts 

export default async function GetPost(id){
    const res = await fetch(`${baseURL}`)
    const posts = await res.json()

    if(id){
        return posts.find(value => value.id == id)
    }

    return posts;
}

