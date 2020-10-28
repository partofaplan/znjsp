import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Zach Perkins' Portfolio</title>
      </Head>
      <section className={utilStyles.headingMd}>
         <p>Welcome to my portfolio website! I'm glad you came!</p>
         <motion.div initial="hidden" animate="visible" variants={{
           hidden: {
             scale: .8,
             opacity: 0
           },
           visible: {
             scale: 1,
             opacity: 1,
             transition: {
               delay: .5
             }
           },
         }}>
        <p>
        Learn more about who I am <a href="/posts/portfolio">inside</a>!
        </p>
        </motion.div>
      </section>
    </Layout>
  )
}
