import { API_URL } from '../config/index'
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useState, useEffect } from 'react';

export default function DealPage() {

  console.log("IN DEAL PAGE..")
  const [deal,setDeal]=useState()

  console.log(deal)
  const router = useRouter()
  const {urlname}=router.query; 
  console.log(`${API_URL}/deals?_where[urlname]=${urlname}`);
  const { data, error } = useSWR(`${API_URL}/deals?_where[urlname]=${urlname}`,{  revalidateOnFocus: false,
    revalidateOnMount:false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0});

    if (error) {
      return <p>Failed to load.</p>;
    }
  

  useEffect(() => {

    console.log(error)

   console.log('in useeffect');
   if(data && data.length>0){
     console.log('has data!!!!!!!!!!!!!!!!!!');
     console.log(data)
    setDeal(data[0])
   }
  }, [data])

  return (
   <div className="container">

     {data?
     (data.length>0?
     <div>{data[0].Title}</div>
     
     
     
     :<div>Page Not Found</div>):<div>Loading</div>}




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


//below 2 is a set

// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/deals`)
//   const alldeals = await res.json();
 

//   const paths = alldeals.map((deal) => ({
//     params: { urlname: deal.urlname },
//   }))


//   return {
//     paths,
//     fallback: false,
//   }
// }

// export async function getStaticProps({ params: { urlname } }) {

    
  
//     const res = await fetch(`${API_URL}/deals?_where[urlname]=${urlname}`)
//     const deals = await res.json()
//   return {
//     props: {
//       deal: deals[0],
//     },
  
//   }
// }