import React, { useEffect,useState } from 'react'

// var apiKey = ;
function Popular() {
  useEffect(() => {
    getPopular();
  }, []
  )
const [popular,setPopular] = useState([]);
  const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=f18800007d8e4f4a8106d8f153082478&number=9`)
    const data = await api.json();
    setPopular(data.recipes)
    console.log(popular)
  }

  return (
    <div>Popular
        {popular.map((recipe)=>(
          <div key={recipe.id} >
            <div> {recipe.title}
            <span className="image">
              <img src={recipe.image}/>
            </span>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Popular