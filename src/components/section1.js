import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import Fetcher from "@/lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";


export default function section1() {
    SwiperCore.use([Autoplay])
    const { data, isLoading, isError } = Fetcher('api/trending')
    if(isLoading) return <Spinner />
    if(isError) return <Error />
  
    const bg = {
      background: "url('/images/banner.png') no-repeat",
      backgroundPosition: "right"
    }
  return (
    <section className="py-16"  style={bg}>
        <div className="container mx-auto md:px-20">
            <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

            <Swiper slidesPerView={1} autoplay={{delay:2000}}
             loop={true}
            >
              {
              data.map((value, index)=>(
                <SwiperSlide key={index}>
                   <Slide data={value} key={index} />
                </SwiperSlide>
               ))
              }
            </Swiper>

        </div>
    </section>
  )
}

function Slide({data})
{
  const { id, title, category, img, published, description ,author } = data;

    return (
      <div className="grid md:grid-cols-2">
        <div className="image">
            <Link href={`/posts/${id}`}><Image src={img || "/"} width={600} height={600} alt="" /></Link>
        </div>
        <div className="info flex justify-center flex-col p-4">
            <div className="cat">
                <Link href={`/posts/${id}`} className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</Link>
                <Link href={`/posts/${id}`} className="text-gray-800 hover:text-gray-600">- {published || "Unknown"}</Link>
            </div>
            <div className="title">
                <Link href={`/posts/${id}`} className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">{title || "Unknown"}</Link>
            </div>
            <p className="text-gray-500 py-3">
                {description || "description"}
            </p>
            { author ? <Author {...author}/> : <></>}
        </div>
      </div>
    )
}