import { useLayoutEffect } from "react";
import gsap from "gsap";

const MyList = ({ addMeal, mealPlans, deleteDay, selectedDay, setSelectedDay }) => {

    useLayoutEffect(() => {
        gsap.fromTo('.header', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 3 })
        gsap.fromTo('.btn-add', {x: -50, opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 1})
    }, [])

    return (
        <div>
            <h1 className="header">Weekly meal plan ideas</h1>
            <button className="btn-add" onClick={addMeal}>ADD</button>
            {mealPlans.map(({ title, id, mealForADay }, index) => (
                <div key={index} className={`meal ${id === selectedDay ? 'selected' : 'default'}`} onClick={() => setSelectedDay(id)}>
                    <p>{title}</p>
                    <p>{mealForADay.substring(0, 60)}</p>
                    <button className="btn-delete" onClick={() => deleteDay(id)}>DELETE</button>
                </div>
            ))}
        </div>
    )
}

export default MyList;