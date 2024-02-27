import gsap from "gsap";
import { useLayoutEffect } from "react";

const MealsAndIngredients = ({ selectedDay, updateDay }) => {

    useLayoutEffect(() => {
        gsap.fromTo('.mealPar', {x: 50, opacity: 0}, {x: 0, opacity: 1, duration: 3})
    }, [])
    
    const editMyMeal = (myInput, value) => {
        updateDay({
            ...selectedDay,
            [myInput]: value
        })
    }

    if(!selectedDay) return <p className="mealPar">Plan yor meal for a day</p>
        
    return (
        <div className="whole-plan">
            <input type='text' className='myInput' placeholder="Today is ..." id="title" value={selectedDay.title} onChange={(e) => editMyMeal('title', e.target.value)} />
            <textarea placeholder="Write your meal plan here ..." id='mealForADay' value={selectedDay.mealForADay} onChange={(e) => editMyMeal('mealForADay', e.target.value)} />
            <textarea placeholder="List of ingredients" id="mealForADay" value={selectedDay.ingredients} onChange={(e) => editMyMeal('ingredients', e.target.value)} />
        </div>
    )
}

export default MealsAndIngredients;