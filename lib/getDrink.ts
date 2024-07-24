export default async function getDrink(drink: string) {
  let response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink}`
  )
  if (!response.ok) throw new Error('failed to get drink')
  return response.json()
}
