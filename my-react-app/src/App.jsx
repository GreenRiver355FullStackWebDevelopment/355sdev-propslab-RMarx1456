import './App.css'
import { recipes as recipes } from "./data.js";

import RecipeContainer from "./components/RecipeContainer.jsx";

function App() {
  return (
    <>
      <h1>Recipes</h1>
      <RecipeContainer recipes={recipes} />
    </>
  )
}

export default App
