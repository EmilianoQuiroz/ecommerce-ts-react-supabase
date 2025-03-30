import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/shared/navbar/Navbar"
import Footer from "../components/shared/footer/Footer"
import { Banner } from "../components/home/banner/Banner"
import { NewsLetter } from "../components/home/newsletter/NewsLetter"

 
const RootLayout = () => {

  const { pathname } = useLocation()
  
  return (
    <div className="h-screen flex flex-col">
        <Navbar />
        {
            pathname === '/' && <Banner />
        }
        <main className="container m-8 mx-auto flex-1">
            <Outlet />
        </main>
        {
            pathname === '/' && <NewsLetter />
        }
        <Footer />
    </div>
  )
}

export default RootLayout
