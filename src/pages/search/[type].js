import Image from "next/image"
import Link from "next/link"
import Author from "@/components/_child/author"
import fetcher from "@/lib/fetcher"
import Spinner from "@/components/_child/spinner"
import Error from "@/components/_child/error"
import Format from "@/layout/format"
import { useRouter } from "next/router"


export default function Type() 
{
  const router = useRouter()
  const {type} = router.query;
  console.log("YYYYYYYYY ", type)

  const { data, isLoading, isError } = fetcher(`api/${type}`)
  if(isLoading) return <Spinner/>
  if(isError) return <Error />

  return (
    <Format >
      <div className="container mx-auto  flex justify-center">
        <div>
          <h1 className='font-bold text-3xl py-10'>Search Results for {type}</h1>
          <div className="flex flex-col gap-10">
            {
              data.map((value,index)=>(
                  <Post key={index} data={value} />
              ))
            }
          </div>
        </div>
      </div>
    </Format>
  )
}

 


function Post({data}){
    const { id, category,title, img, published ,author } = data;

    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={`/posts/${id}`}><Image src={img || ""} className="rounded" width={300} height={200} alt=""/></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={`/posts/${id}`} className="text-orange-600 hover:text-orange-800">{category || ""}</Link>
                    <Link href={`/posts/${id}`} className="text-gray-800 hover:text-gray-600">- {published || ""}</Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${id}`} className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || ""}</Link>
                </div>
                { author ? <Author {...author}/> : <></>}

            </div>
        </div>
    )
}
 