import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>data ficta</time>
            <strong> Titulo Post</strong>
            <p>Descrição do texto titulo</p>
          </a>
          <a href='#'>
            <time>data ficta2</time>
            <strong> Titulo Post</strong>
            <p>Descrição do texto titulo</p>
          </a>
          <a href='#'>
            <time>data ficta3</time>
            <strong> Titulo Post</strong>
            <p>Descrição do texto titulo</p>
          </a>
        </div>
      </main>
    </>
  )
}