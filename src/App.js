import { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import './App.css';
import MealsAndIngredients from './Components/MealsAndIngredients';
import MyList from './Components/MyList';
import gsap from "gsap";

function App() {
  const [selectedDay, setSelectedDay] = useState(false);
  const [mealPlans, setMealPlans] = useState(localStorage.mealPlans ? JSON.parse(localStorage.mealPlans) : []);

  useEffect(() => {
    gsap.fromTo('.whole-plan', {y: 40, opacity: 0}, {y: 0, opacity: 1, duration: 2})
  }, [selectedDay])

  useEffect(() => {
    gsap.fromTo('.meal', {opacity: 0}, {opacity: 1, stagger: 0.1, duration: 2})
  }, [mealPlans])

  useEffect(() => {
    localStorage.setItem('mealPlans', JSON.stringify(mealPlans))
  }, [mealPlans])

  const addMeal = () => {
    const newMeal = {
      title: 'Today is ...',
      id: uuid(),
      mealForADay: '',
      ingredients: ''
    }
    setMealPlans([newMeal, ...mealPlans])
  }

  const deleteDay = (mealId) => {
    setMealPlans(mealPlans.filter(({ id }) => id !== mealId));
  }

  const updateDay = (myUpdatedMeal) => {
    const updatedMeals = mealPlans.map((mealPlan) => {
      if (mealPlan.id === myUpdatedMeal.id) {
        return myUpdatedMeal;
      }
      return mealPlan;
    })
    setMealPlans(updatedMeals)
  }

  const getActiveMeal = () => {
    return mealPlans.find(({ id }) => id === selectedDay);
  }


  return (
    <div className='App'>
      <MyList addMeal={addMeal} mealPlans={mealPlans} deleteDay={deleteDay} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <MealsAndIngredients selectedDay={getActiveMeal()} updateDay={updateDay} />
    </div>
  );
}

export default App;
