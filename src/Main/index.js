import {BrowserRouter as Routers,Routes, Route} from "react-router-dom"
import { useState,createContext } from "react"
import {Home} from "./Home/index"
import {Menu} from "./Menu/index"
import {Contact} from "./Contact/index"
import { Navbar } from "./Navbar/index"

export const MainContext = createContext()

export const Main  = () => {
  const [username,setUserName] = useState("")
  const [money,setMoney] = useState(0)
  const [foods, setFoods] = useState({})

  return (
    <div>
      <MainContext.Provider value={{username,setUserName,money,setMoney,foods,setFoods}}>
        <Routers >
          <Navbar />
          <Routes>
            <Route path="/"  element={<Home />}/>
            <Route path="/menu/" element={<Menu />} />
            <Route path="/contact/" element={<Contact />}/>
            <Route path="*" element={<div>이봐 여기는 다른 곳이여</div>} />
          </Routes>
        </Routers>
      </MainContext.Provider>
    </div>
  )
}