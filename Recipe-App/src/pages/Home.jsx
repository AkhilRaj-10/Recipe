import React from 'react'
import Veggi from '../components/veggi'
import Popular from '../components/Popular'
function Home() {
  return (
      <div className="HomeContainer d-flex">
        <div className="left-content">
          <div className="">
          <h2><span>Let’s</span> Start
            <br/>Cooking With
            <br/>Best Recipes
          </h2>
          <p>Don't Know Where to Begin with Cooking?<br/>
           We've Got You Covered!</p>
          <div class="button-form">
          <button>Get Start </button>
          <button>Explore More</button>
          </div>
        </div>
        </div>
        <div className="right-image">
          <img src="Images/foode.jpg" name="homeImale"/>
        </div>
        {/* <Veggi/>
        <Popular/> */}
        </div>
    )
}

export default Home