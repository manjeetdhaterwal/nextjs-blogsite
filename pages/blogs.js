import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import * as fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';

const Blogs = (props) => {

  const [blogs, setBlogs] = useState(props.allBlogs);
  // const [count, setCount] = useState(2)

  // data by calling api

  // useEffect(() => {
  //   fetch('http://localhost:3000/api/blogs').then((a) => {
  //     return a.json();
  //   })
  //     .then((parsed) => {
  //       setBlogs(parsed);
  //     })

  // }, [])

  //  for infinity scorll code
  // const fetchData = async ()=>
  // {
  //   let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`)
  //   setCount(count+2)
  //   let data = await d.json();
  //   setBlogs(data);
  // }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.h2}>Popular Blogs</h2>
        <div className={styles.grid}>
            {blogs.map((data) => {
              return (<div key={data.slug}>
                <Link href={`/blogpost/${data.slug}`}><h3>{data.title}</h3></Link>
                <p>{data.metadesc.substr(0, 100)}...</p>
              </div>)
            })}
        </div>
      </main>
    </div>

            // infinity scroll code
    // <div className={styles.container}>
    // <main className={styles.main}>
    //   <h2 className={styles.h2}>Popular Blogs</h2>
    //   <div className={styles.grid}>

    //     <InfiniteScroll
    //       dataLength={blogs.length}
    //       next={fetchData}
    //       hasMore={props.allCount !== blogs.length }
    //       loader={<h3> Loading...</h3>}
    //       endMessage={<h4>Nothing more to show</h4>}>
    //       {blogs.map((data) => {
    //         return (<div key={data.slug}>
    //           <Link href={`/blogpost/${data.slug}`}><h3>{data.title}</h3></Link>
    //           <p>{data.metadesc.substr(0, 100)}...</p>
    //         </div>)
    //       })}
    //       </InfiniteScroll>
    //   </div>
    // </main>
    // </div>
  )
}

// data by serverside props

// export async function getServerSideProps(context) {

//   const response = await fetch('http://localhost:3000/api/blogs');
//   const allBlogs = await response.json();
//   return {
//     props: { allBlogs }, // will be passed to the page component as props
//   }
// }

export async function getStaticProps(context) {

  let dir = await fs.promises.readdir('blogdata');
  let allCount = dir.length;
  let allBlogs = [];
  for (var i = 0; i < dir.length; i++) {
    const file = await fs.promises.readFile(`blogdata/${dir[i]}`);
    allBlogs.push(JSON.parse(file));
  }
  return {
    // props: { allBlogs },
      props: {allBlogs, allCount}
  }
}


export default Blogs