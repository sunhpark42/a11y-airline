import Head from 'next/head';

import styles from '../src/styles/index.module.css';

const HomePage = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" type="icon" href="/images/favicon.ico" />

        <title>우테코 항공</title>
      </Head>
      <main>
        <h1 className={styles.page_top_hidden__heading}>우테코 항공</h1>
        <h2>우테코 항공과 함께 제주도로 떠나보세요 ✈️</h2>
      </main>
    </>
  );
};

export default HomePage;
