import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/shared/navbar/Navbar"
import Footer from "../components/shared/footer/Footer"
import { Banner } from "../components/home/banner/Banner"
import { NewsLetter } from "../components/home/newsletter/NewsLetter"
import { Sheet } from "../components/shared/sheet/Sheet"
import { useGlobalStore } from "../store/global/global.store"
import { NavbarMobile } from "../components/shared/navbar-mobile/NavbarMobile"

 
const RootLayout = () => {

  const { pathname } = useLocation()
  const isSheetOpen = useGlobalStore(state => state.isSheetOpen)
  const activeNavMobile = useGlobalStore(state => state.activeNavMobile)

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
        {
          isSheetOpen && <Sheet />
        }
        {
          activeNavMobile && <NavbarMobile />
        }
        <Footer />
    </div>
  )
}

export default RootLayout
