import React from 'react'
import { ScrollReveal } from 'reveal-on-scroll-react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <ScrollReveal.div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[280px] h-[280]' />
      <ScrollReveal.div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} alt="rating" width={25} height={24}/>
        <p className='font-montserrat text-xl leading-normal  text-slate-gray'>(4.5)</p>

      </ScrollReveal.div>
      <ScrollReveal.h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        {name}
      </ScrollReveal.h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>{price}</p>
    </ScrollReveal.div>
  )
}

export default PopularProductCard