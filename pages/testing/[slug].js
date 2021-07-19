import { API_URL } from '../../config/index';
import { useRouter } from 'next/router';
export default function DealPage({ deal }) {

  console.log("IN DEAL PAGE..")

  console.log("deal...");
  console.log(deal)
  const router = useRouter()
  console.log(router.query) 

  return (
   <div className="container">

       {deal?deal.Title:"hey"}

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
 

  const paths = alldeals.map((deal) => ({
    params: { slug: deal.urlname },
  }))


  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {

    
  
    const res = await fetch(`${API_URL}/deals?_where[urlname]=${slug}`)
    const deals = await res.json()
  return {
    props: {
      deal: deals[0],
    },
  
  }
}
