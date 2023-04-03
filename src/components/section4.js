import Author from "./_child/author"
import Link from "next/link"
import Image from "next/image"

import Fetcher from '../lib/fetcher'
import Spinner from "./_child/spinner"
import Error from "./_child/error"


export default function section4() {

    const { data, isLoading, isError } = Fetcher('api/popular')
    
    if(isLoading) return <Spinner></Spinner>;
    if(isError) return <Error></Error>

  return (
    <section className="container mx-auto md:px-20 py-16">
        <div className="grid lg:grid-cols-2 gap-3">
            <div className="item">
                <h1 className="font-bold text-4xl py-12">Business</h1>
                <div className="flex flex-col gap-6">
                    {/* posts */}
                    { data[1] ? <Post data={data[1]}></Post> : <></>}
                    { data[2] ? <Post data={data[2]}></Post> : <></>}
                    { data[3] ? <Post data={data[3]}></Post> : <></>}
                </div>
            </div>
            <div className="item">
                <h1 className="font-bold text-4xl py-12">Travel</h1>
                <div className="flex flex-col gap-6">
                    { data[4] ? <Post data={data[4]}></Post> : <></>}
                    { data[5] ? <Post data={data[5]}></Post> : <></>}
                    { data[2] ? <Post data={data[2]}></Post> : <></>}
                </div>
            </div>
        </div>
    </section>
  )
}

function Post({ data }){

    const { id, title, category, img, published, author } = data;

    return (
        <div className="flex gap-5 border rounded-lg p-2">
            <div className="image flex flex-col justify-start">
                <Link href={`/posts/${id}`}>
                    <Image src={img || ""}  className="rounded" width={300} height={250} alt="" />
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={`/posts/${id}`} className="text-orange-600 hover:text-orange-800">{category || "No Category"}</Link>
                    <Link href={`/posts/${id}`} className="text-gray-800 hover:text-gray-600">- {published || ""}</Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${id}`} className="text-l font-bold text-gray-800 hover:text-gray-600">{title || "No Title"}</Link>
                </div>
                { author ? <Author {...author}/> : <></>}
            </div>
        </div>
    )
}