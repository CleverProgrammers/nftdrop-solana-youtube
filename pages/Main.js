import Head from "next/head";
import { Header, NFTDisplay, Hero } from '../components'
import { useEffect, useState } from "react";
import { Toaster } from 'react-hot-toast';
import toast from "react-hot-toast"

const styles = {
  wrapper: 'flex h-[100vh] w-[100vw] bg-[#1d1d1d] text-gray-200',
  container:
    'flex flex-col lg:flex-row flex-1 p-5 pb-20 lg:p-10 space-y-10 lg:space-y-0 ',
  buttonContainer: 'flex flex-col lg:flex-row flex-1 pt-5  space-y-10',
  infoSection: 'lg:w-2/3 px-10',
  mobileDisplaySection: 'h-[300px] flex w-full lg:hidden lg:w-1/3 mt-4',
  desktopDisplaySection: 'hidden lg:flex flex-1 lg:w-1/3',
  mintButton:
    'rounded-xl border border-gray-100 bg-transparent px-8 py-4 font-semibold text-gray-100 transition-all hover:bg-gray-100 hover:text-[#1d1d1d]',
}


export default function Main() {

  return (
    <div className={styles.wrapper}>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Head>
        <title>Home | Solana Monkey Business NFT</title>
      </Head>

      <div className={styles.container}>
        <section className={styles.infoSection}>
          <Header />
          <div className={styles.mobileDisplaySection}>
            <NFTDisplay />
          </div>

          <Hero />
          <div>
            {/* Candymachine states will go here! */}
          </div>
        </section>

        <section className={styles.desktopDisplaySection}>
          <NFTDisplay />
        </section>
      </div>
    </div>
  )

}


