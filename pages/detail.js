import { useEffect, useState } from 'react';
import styles from '../src/styles/index.module.css';

import Head from 'next/head';

const DetailPage = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" type="icon" href="/images/favicon.ico" />

        <title>제주도 항공권</title>
      </Head>
      <main>
        <h1 className={styles.page_top_hidden__heading}>우테코 항공</h1>
        <h2>제주도 항공권</h2>
        <h3>일자 : 2021. 10. 10</h3>
      </main>
    </>
  );
};

export default DetailPage;
