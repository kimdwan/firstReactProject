import {useContext} from "react"
import {MainContext} from "../index"

const menus = require("../../datas/Food_list.json")

export const Contact = () => {
  const {foods,setFoods,setMoney} = useContext(MainContext)
   const totalCost = Object.keys(foods).reduce((total, food) => {
    const foodType = Object.keys(menus).find(type => menus[type][food]);
    const pricePerItem = menus[foodType][food];
    return total + (pricePerItem * foods[food]);
  }, 0);

  const checkCard = (totalCosts) => {
    setMoney(prevMoney => {
      if (prevMoney > Number(totalCost)) {
        setFoods({})
        alert("구매해주셔서 감사합니다.")
        return prevMoney - Number(totalCost)
      }
      else {
        alert("잔액이 부족합니다.")
        return prevMoney
      }
    })
  } 

  return (
    <div>
      <h1>주문하는장소</h1>
      <ul>
        {Object.keys(foods).map((food, index) => (
          <li key={index}>{food} x {foods[food]}</li>
        ))}
      </ul>
      <h1>총가격: {totalCost}원</h1>
      <p />
      <button onClick={() => {checkCard(totalCost)}}>거래</button>
    </div>
  );
};