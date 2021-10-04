import styles from '../src/styles/index.module.css';

import Head from 'next/head';
import Header from '../src/Components/Header';
import PATH from '../src/constants/path';

const DetailPage = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" type="icon" href="/images/favicon.ico" />

        <title>제주도 항공권</title>
      </Head>
      <Header currentPath={PATH.DETAIL} />
      <main>
        <h1 className={styles.page_top_hidden__heading}>우테코 항공</h1>
        <h2>제주도 항공권</h2>
        <h3>일자 : 2021. 10. 10</h3>
      </main>
    </>
  );
};

export default DetailPage;
