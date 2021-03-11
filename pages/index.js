import { useState, useEffect } from 'react';
import Head from 'next/head'

import { getHello } from '../lib/hello'

import styles from '../styles/Home.module.css'

export default function Home({ hello }) {
  const [msg, setMsg] = useState();

  useEffect(() => {
    async function run() {
      const hello = await getHello();
      setMsg(hello);
    }
    run();
  }, [])

  console.log('')
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Server</h3>
            <p>{ JSON.stringify(hello) }</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Client</h3>
            <p>{ JSON.stringify(msg) }</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      hello: await getHello()
    }
  }
}