import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
export default function HeadArea({ title, description }) {
  const router = useRouter();
  const backgroundMusicRef = useRef();

  const playBackgroundMusic = () => {
    if (backgroundMusicRef.current && router.pathname != "/AnimalArticle") {
      backgroundMusicRef.current.play();
    }
  }

  useEffect(() => {
    playBackgroundMusic();
  }, []);

  return (<>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" hrefLang="x-default" />
      <link rel="icon" href="/favicon.ico" hrefLang="en" />
      <link rel="icon" href="/favicon.ico" hrefLang="zh" />
    </Head>
            <audio ref={backgroundMusicRef} src='/sound/background2.mp3' />
  </>)
}