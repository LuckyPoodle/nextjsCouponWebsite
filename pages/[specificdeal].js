import Image from 'next/image'


import { API_URL } from '../config/index'

export default function DealPage({ deal }) {
 

  return (
   <div>

       {deal.Title}

   </div>
  )
}



export async function getServerSideProps(context) {
    const {params} =context;
  
    const res = await fetch(`${API_URL}/deals?_where[urlname]=${params.specificdeal}`)
    const deals = await res.json()

  return {
    props: {
      deal: deals[0],
    },
  }
}