import Head from 'next/head'
import styles from '../styles/Home.module.css'
import style1  from '../styles/Navbar.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <h1 className={styles.center}>
          Welcome to Gaming Hunter
        </h1>

        <p className={styles.description}>
          A Blog for Noobs to become a Pro
        </p>

        <img src="favicon.ico" alt="icon"  className={styles.img}/>

        <div className={styles.grid}>
         <div className="blogs">
          <h2>How to play a sniper role in a squad game ?</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias corporis culpa nulla fuga distinctio officia illo, recusandae quos provident deleniti necessitatibus sequi saepe perferendis eius aliquam consequatur doloremque sit sed.</p>
         </div>
         <div className="blogs">
          <h2>How to play a sniper role in a squad game ?</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias corporis culpa nulla fuga distinctio officia illo, recusandae quos provident deleniti necessitatibus sequi saepe perferendis eius aliquam consequatur doloremque sit sed.</p>
         </div>
         <div className="blogs">
          <h2>How to play a sniper role in a squad game ?</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias corporis culpa nulla fuga distinctio officia illo, recusandae quos provident deleniti necessitatibus sequi saepe perferendis eius aliquam consequatur doloremque sit sed.</p>
         </div>
        </div>
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
