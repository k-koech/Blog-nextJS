import Footer from "@/components/footer"
import Header from "@/components/header"
import Head from "next/head"


function format({children}) {
  return (
    <>
    <Head>
      <title>Blog</title> 
    </Head>

      <Header/>
      <main>
         {children}
      </main>
      <Footer/>
    </>
  )
}

export default format