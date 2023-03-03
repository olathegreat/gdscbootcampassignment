import React, {useState} from 'react'
import { FaTrash} from 'react-icons/fa'
import "./App.css"


const Food = ({foods}) => {

    const[foodItems, setFoodItems] = useState(foods);

    const clicked = (item) =>{
        
            setFoodItems(foodItems.filter(foodItem=> foodItem !==item));
        
    }

    const renderFood  = foodItems.map((food)=>(
        <div className='food-item'>
            {food}
            <span onClick={()=>clicked(food)}><FaTrash color='red'/></span>
        </div>
    ))
  return (
    <div>
        {renderFood}
    </div>
  )
}

export default Food