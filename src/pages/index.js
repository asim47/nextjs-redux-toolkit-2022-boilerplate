import Head from "next/head"
import Footer from "../commonComponets/Footer"
import NavbarComponent from "../commonComponets/Navbar"
import Header from "../components/home/Header"


const index = () => {
  return (
    <>
      <Head>
        <title>Title</title>
      </Head>
      <NavbarComponent />
      <Header />
      <Footer />
    </>
  )
}

export default index
