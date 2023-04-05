import Author from '@/components/_child/author'
import Format from '../../layout/format'
import Image from 'next/image'
import Related from '@/components/_child/related'
import getPost from '@/lib/helper'
import Fetcher from '@/lib/fetcher'
import Spinner from '@/components/_child/spinner'
import Error from '@/components/_child/error'
import { useRouter } from 'next/router'
import { SWRConfig } from 'swr'

export default function Page({fallback})
{
  const router = useRouter()
  const {postId} = router.query;

  const {data, isLoading, isError} = Fetcher(`api/posts/${postId}`)

  // if (router.isFallback) return <Spinner />
  // if (router?.isFallback) return <Spinner />

  if(isLoading) return <Spinner />
  if(isError) return <Error />

  return (
    <SWRConfig value={{fallback}}>
          <Article {...data} />
    </SWRConfig>
  )
}

function Article({id, title, subtitle, img, description, published, author }) 
{

  return (
    <Format>
        <section className='container m-auto md:p-3 py-16 w-1/2'>
           <div className='flex justify-center'>
           { author ? <Author></Author> : <></>}

           </div>
           <div className='post py-10'>
            <h1 className='font-bold text-4xl text-center '> {title || "No Title" }</h1>
            <p className='text-gray-500 text-xl text-center'>{subtitle || "No Title" } </p>
            <div className='py-10'>
                <Image src={img || "/"} height={600} width={900} alt=""/>
            </div>
            <div className='content text-gray-600 text-lg flex flex-col gap-4'>
                {description || "No Description"}
            </div>
           </div>
           <Related/>
        </section>
    </Format>
  )
}


// 
export async function getStaticProps( { params } )
{
  const posts = await getPost(params.postId)

  return {
      props :{
        fallback:{'/api/posts':posts }
      } 
  }
}

export async function getStaticPaths()
{
  const posts = await getPost();

  const paths = posts.map(value => {
      return {
          params : {
              postId : value.id.toString()
          }
      }
  })

  return {
      paths,
      fallback : false
  }

}