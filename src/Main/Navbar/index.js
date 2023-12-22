import {Link} from "react-router-dom"
import { useContext } from "react"
import { MainContext } from ".."

export const Navbar = () => {
  const {username,money,foods} = useContext(MainContext)
  const foodKeys = Object.keys(foods)
  return (
    <nav>
      <Link to="/">홈페이지</Link>
      <Link to="/menu/">메뉴판</Link>
      <Link to="/contact/">주문창</Link>
      <p>유저이름: {username}</p>
      <p>금액: {money}</p>
      <ul>
        장바구니:
        {foodKeys.map((food,index) => <li key={index}>{food}:{foods[food]}</li>)}
      </ul>
    </nav>
  )
}