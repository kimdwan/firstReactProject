import { useContext,useState } from "react"
import { MainContext } from ".."

export const Home = () => {
  const [newusername, setNewUserName] = useState("")
  const [newMoney,setNewMoney] = useState(0)
  const {money,setUserName,setMoney} = useContext(MainContext)

  const writeName = (event) => {
    setNewUserName(event.target.value)
  }
  const choiceName = () => {
    setUserName(newusername)
    document.querySelector("#nameInput").value = ""
  }
  const clickBtnMinus = (event) => {
    const target =  Number(event.target.value);
    if (!isNaN(target)) {
      let money = newMoney - target; // 숫자 변환
      money = money < 0 ? 0 : money; // 결과 할당
      setNewMoney(money);
    }
  };
  
  const clickBtnPlus = (event) => {
    const target = Number(event.target.value);
    if (!isNaN(target)) {
      let money = newMoney + target; // 숫자 변환
      setNewMoney(money);
    }
  };
  const choiceMoney = () => {
    const totalMoney = money + newMoney
    if (!isNaN(totalMoney)) {
      setMoney(totalMoney)
      setNewMoney(Number(0))
    }
  }

  return (
    <div>
      <h1>홈페이지</h1>
      <div>
        <p>이름 입력창</p>
        <input id="nameInput" placeholder="이름을 입력하시오." onChange={writeName} />
        <button onClick={choiceName} >확정</button>
      </div>
      <div>
        <p>돈입금</p>
        <div onClick={clickBtnMinus}>
          <button value={10000}>-10000</button>
          <button value={1000}>-1000</button>
          <button value={100}>-100</button>
          <button value={10}>-10</button>
          <button value={1}>-1</button>
        </div>
        <h2 >{newMoney}</h2>
        <div onClick={clickBtnPlus}>
          <button value={10000}>+10000</button>
          <button value={1000}>+1000</button>
          <button value={100}>+100</button>
          <button value={10}>+10</button>
          <button value={1}>+1</button>
        </div>
        <p />
        <button onClick={choiceMoney}>입금 완료</button>
      </div>
    </div>
  )
}