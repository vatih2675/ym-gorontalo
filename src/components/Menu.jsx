import { NavLink } from "react-router-dom"
import { dataMenu } from "../constants/Data"


const Menu = () => {
  return (
    <nav className="flex justify-center items-center">
      {dataMenu.map((menu, index) => (
        <NavLink key={index} className="hover:bg-purple-600 hover:text-white text-purple-500 transition-all duration-300 p-4 text-lg" to={menu.to}><i className={`${menu.icon} me-2`}></i>{menu.title}</NavLink>
      ))}
    </nav>
  )
}

export default Menu
