import getDrink from '@/lib/getDrink'

export default async function page({ params }: any) {
  const drinkData: Promise<any> = getDrink(params.drink_Id)

  let drink = await drinkData

  return (
    <section className="w-full flex flex-col justify-center items-center mt-3 px-3">
      <article className="w-full flex justify-center gap-4 bg-[#1b1b1b] p-5 h-[100%] rounded-xl">
        <img
          src={drink.drinks[0].strDrinkThumb}
          alt=""
          className="w-[450px] h-[400px] object-cover rounded-lg"
        />
        <div className="">
          <p className="text-6xl font-bold text-[#54f399]">
            {drink.drinks[0].strDrink}
          </p>
          <div className="w-[700px] mt-3">
            <p>{drink.drinks[0].strInstructions}</p>
          </div>
          {/* <div className="mt-5">
            {tags.map((tag: string) => {
              return (
                <button
                  key={tag}
                  className="py-3 px-5 bg-[#6260608c] rounded-lg ml-2 text-[#54f399]"
                >
                  {tag}
                </button>
              )
            })}
          </div> */}
        </div>
      </article>
    </section>
  )
}
