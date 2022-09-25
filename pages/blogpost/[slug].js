import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogItem.module.css'
import { useState, useEffect } from 'react'
import * as fs from 'fs';

const Slug = (props) => {

    const [blog, setBlog] = useState(props.myBlog);
    
    // const router = useRouter();
    // useEffect(() => {
    //     if (!router.isReady) return;
    //     const { slug } = router.query;
    //     fetch(`http://localhost:3000/api/getBlog?slug=${slug}`).then((a) => {
    //         return a.json()
    //     }).then((parsed) => {
    //         setBlog(parsed)
    //     })
    // }, [router.isReady])

    function createMarkup(c) {
      return {__html: c};
    }

    return (
        <>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h2>Title : {blog?.title}</h2>
                    <div dangerouslySetInnerHTML={createMarkup(blog?.content)}></div>
                </main>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    return {
      paths: [
        { params: { slug : "how-to-become-mvp"} },
        { params: { slug : "how-to-become-sniper"} },
        { params: { slug : "how-to-become-topfragger"} }
      ],
      fallback: true
    };
  }

// export async function getServerSideProps(context) {
//     const { slug } = context.query;
//     const response = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
//     const myBlog = await response.json();
//     return {
//       props: { myBlog },
//     }
//   }


  export async function getStaticProps(context) {
    const { slug } = context.params;
    let response = await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8');
    const myBlog = await JSON.parse(response);
    return {
      props: { myBlog },
    }
  }
  

export default Slug;