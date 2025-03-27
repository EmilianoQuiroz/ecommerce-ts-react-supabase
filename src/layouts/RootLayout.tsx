import { Outlet } from "react-router-dom"
import Navbar from "../components/shared/navbar/Navbar"

 
const RootLayout = () => {
  return (
    <div className="h-screen flex flex-col">
        <Navbar />
        <main className="container my-8 flex-1">
            <Outlet />
        </main>
        <div>Footer</div>
    </div>
  )
}

export default RootLayout
