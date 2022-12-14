import '../styles/globals.css'
import style from '../styles/Navbar.module.css'
import Link from 'next/link'
import Head from "next/head";
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
        // crossorigin="anonymous"
      />
    </Head>
    <nav className={style.mainnavbar}>
      <ul >
        <Link href='/'><a><li>Home</li></a></Link>
        <Link href='/about'><a><li>About</li></a></Link>
        <Link href='/blogs'><a><li>Blogs</li></a></Link>
        <Link href='/contact'><a><li>Contact</li></a></Link>
      </ul>
    </nav>
    <Script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
      crossorigin="anonymous" />
    <Component {...pageProps} />
  </>


}

export default MyApp
