import Head from "next/head";

export default function HeadArea({ title, description }) {

  return (<>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* <meta name="viewport" content="width=430, height:932, initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
        rel="stylesheet"
      /> */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" hrefLang="x-default" />
      <link rel="icon" href="/favicon.ico" hrefLang="en" />
      <link rel="icon" href="/favicon.ico" hrefLang="zh" />
    </Head>
  </>)
}