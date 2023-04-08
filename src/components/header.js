import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { ImFacebook, ImYoutube, ImTwitter } from "react-icons/im";


export default function Header() {
  const [search, setValue] = useState()
  const {push} = useRouter()

  const formSubmit = (e) =>{
    e.preventDefault()
    push(`/search/${search}`)
  }

  return (
    <header className="bg-gray-50 pt-8">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
            <form onSubmit={formSubmit} className="md:flex w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0    bg-white border border-slate-300 rounded-full text-sm shadow-sm placeholder-slate-500
fucus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500">
                <select onChange={(e)=>{setValue(e.target.value)}} type="text" className="rounded-full block w-60 px-3 py-2 bg-white  outline-none border-none" placeholder="Search...">
                  <option value="">Search ...</option>
                  <option  value="trending">Trending</option>
                  <option value="popular">Popular</option>
                  <option value="posts">Post</option>
                </select>
                <button type="submit" disabled={!search} className="text-red-600">Search</button>
            </form>
            <div className="shrink w-80 sm:order-2">
              <Link className="font-bold uppercase text-3xl" href={"/"}>
                  KBlog
              </Link>
            </div>
            <div className="order-3 w-96 flex justify-center">
              <div className="flex gap-6">
                <Link href={"/"}>
                  <ImFacebook color="#888888" />
                </Link>
                <Link href={"/"}>
                  <ImTwitter color="#888888"/>
                </Link>
                <Link href={"/"}>
                  <ImYoutube color="#888888"/>
                </Link>
              </div>
            </div>
        </div>
    </header>
  )
}
