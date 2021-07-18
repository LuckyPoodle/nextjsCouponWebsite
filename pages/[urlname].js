import Image from 'next/image'


import { API_URL } from '../config/index'

export default function DealPage({ deal }) {
 

  return (
   <div>

       {deal.Title}

   </div>
  )
}


////CHANGE TO GETSTATICPROPS


// export async function getServerSideProps(context) {
//     const {params} =context;
  
//     const res = await fetch(`${API_URL}/deals?_where[urlname]=${params.specificdeal}`)
//     const deals = await res.json()

//   return {
//     props: {
//       deal: deals[0],
//     },
//   }
// }

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/deals`)
  const alldeals = await res.json();
  console.log(alldeals)

  const paths = alldeals.map((deal) => ({
    params: { urlname: deal.urlname },
  }))

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params: { urlname } }) {

    
  console.log(urlname)
    const res = await fetch(`${API_URL}/deals?_where[urlname]=${urlname}`)
    const deals = await res.json()
  return {
    props: {
      deal: deals[0],
    },
  
  }
}