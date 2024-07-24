export default async function getDrinks() {
  const response = await fetch(
    'https://thecocktaildb.com/api/json/v1/1/search.php?f=a'
  )
  if (!response.ok) throw new Error('failed to fetch data')

  return response.json()
}
