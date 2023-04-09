import Footer from "@/components/footer"
import Header from "@/components/header"
import Head from "next/head"


function Format({children}) {
  return (
    <>
    <Head>
      <title>Blogs</title> 
    </Head>

      <Header/>
      <main>
         {children}
      </main>
      <Footer/>
    </>
  )
}

export default Format