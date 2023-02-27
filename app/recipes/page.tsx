// import { Inter } from 'next/font/google'
import styles from './page.module.scss'
import { Recipe } from '../components/Recipe/Recipe'

type Recipe = {
  id: number,
  name: string,
  image: string
}
type RecipeResponse = {
  results: []
}

async function getRecipes() {
    const res = await fetch('https://rickandmortyapi.com/api/character')
  if(!res.ok){
    throw new Error('Failed to fetch data');
  }
  return res.json();
}


const RecipesPage = async () => {

  const data = await getRecipes();

  return (
    <main className={styles.recipeWrapper}>
      <h1>Hello world</h1>
      <div className={styles.recipeContainer}>
        {data.results.map(({id, name, image}: Recipe) => {
          {console.log(name)}
          <Recipe 
            key={id}
            name={name}
            image={image}
          />
        })}
        <h1>Hello world</h1>
      </div>
    </main>
  )
}

export default RecipesPage
