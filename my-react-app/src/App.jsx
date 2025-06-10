import './App.css'
import data from "./data.js";

import RecipeContainer from "./components/RecipeContainer.jsx";

function App() {
  return (
    <>
      <RecipeContainer props={data} />
    </>
  )
}

export default App
