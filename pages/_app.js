import '../styles/globals.scss';

import HeaderThree from '../components/headerthree';
import Footertwo from '../components/footertwo';
import  'bootstrap/dist/css/bootstrap.min.css';
function MyApp({ Component, pageProps }) {
  return (
    <>
    <HeaderThree />
    <Component {...pageProps} />
    <Footertwo />

    </>

  )

}

export default MyApp
