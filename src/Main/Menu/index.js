import {useState, useContext} from "react"
import { MainContext} from ".."

const menuList = require("../../datas/Food_list.json")


export const Menu = () => {
  const { setFoods } = useContext(MainContext);
  const [menuQuantities, setMenuQuantities] = useState({});
  const [pickMenu,setPickMenu] = useState({})
  const changeQuantity = (menu, amount) => {
    setMenuQuantities(prevQuantities => {
      const newQuantity = (prevQuantities[menu] || 0) + amount;
      return { ...prevQuantities, [menu]: newQuantity >= 0 ? newQuantity : 0 };
    });
  };
  const checkMenu = (menu, amount) => {
    // pickMenu 업데이트
    setPickMenu(prevMenu => {
      const updatedMenu = { ...prevMenu, [menu]: (prevMenu[menu] || 0) + amount };
      return updatedMenu;
    });
  
    // foods 업데이트
    setFoods(prevFood => {
      const newAmount = (menuQuantities[menu] || 0) + (prevFood[menu] || 0);
      return { ...prevFood, [menu]: newAmount >= 0 ? newAmount : 0 };
    });
  
    // menuQuantities 초기화
    setMenuQuantities(prevQuantities => ({
      ...prevQuantities,
      [menu]: 0
    }));
  };

  return (
    <div>
      <h1>메뉴판</h1>
      <div>
        현재 고른 메뉴판
        <ul>
          {Object.keys(pickMenu).map((smallMenu,index) => <li key={index}>{smallMenu}</li>)}
        </ul>
      </div>
      <div>
        {Object.keys(menuList).map((type, index) => (
          <ul key={index}>
            <li><strong>{type}</strong></li>
            {Object.entries(menuList[type]).map(([menu, price], idx) => (
              <li key={idx}>
                {menu}: {price}원
                <div>
                  <button onClick={() => changeQuantity(menu, -1)}>-</button>
                  {menuQuantities[menu] || 0}
                  <button onClick={() => changeQuantity(menu, +1)}>+</button>
                  <button onClick={() => checkMenu(menu,menuQuantities[menu])}>추가</button>
                </div>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
