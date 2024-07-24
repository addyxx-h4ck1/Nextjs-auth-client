import getDrinks from '@/lib/getDrinks'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function page() {
  const allDrinks: Promise<any> = getDrinks()

  const data = await allDrinks

  return (
    <>
      <div className="mt-7 text-center w-full border-b-[1px] p-4 border-[white] text-2xl">
        Drinks
      </div>
      <div className="grid gap-3 grid-cols-4 mt-4 mx-4">
        {data.drinks.map((el: any) => {
          return (
            <React.Fragment key={el.idDrink}>
              <div className="w-full rounded-lg mb-3  pb-3 bg-[#1b1b1b]">
                {/* <img
                  src={el.strDrinkThumb}
                  className="rounded-lg object-cover h-[150px] w-full aspect-auto"
                /> */}
                <Image
                  src={el.strDrinkThumb}
                  alt={el.strDrinkThumb}
                  width={500}
                  height={150}
                  className="rounded-lg object-cover h-[150px] w-full aspect-auto"
                />
                <div className="flex justify-between items-center mt-3 px-2">
                  <p>
                    <span className="text-[#717070a8] font-bold">Name:</span>{' '}
                    {el.strDrink}
                  </p>
                  <p>
                    <span className="text-[#717070a8] font-bold line-clamp-5">
                      Category:
                    </span>{' '}
                    {el.strAlcoholic}
                  </p>
                </div>
                <p className="my-2 text-sm text-[#858282ca] px-2 line-clamp-3">
                  {el.strInstructions}
                </p>
                <div className="w-full px-2 mt-3">
                  <Link
                    href={`/playground/${el.idDrink}`}
                    className="w-full text-center py-2 px-5 bg-[#85f0f0] rounded-lg text-black"
                  >
                    see more
                  </Link>
                  {/* <button className="w-full text-center py-2 px-5 bg-[#85f0f0] rounded-lg text-black">
                    Buy now
                  </button> */}
                </div>
              </div>
            </React.Fragment>
          )
        })}
      </div>
    </>
  )
}
