import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <title>Ife Akande | Data Engineer & ML Solutions Architect</title>
      <meta name="description" content="Data Engineering professional with 5+ years of experience architecting end-to-end data solutions." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Ife Akande | Data Engineer & ML Solutions Architect" />
      <meta property="og:description" content="Data Engineering professional with 5+ years of experience architecting end-to-end data solutions." />
      <meta property="og:image" content="/og-image.jpg" />
      <meta property="og:url" content="https://your-domain.com" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Ife Akande | Data Engineer & ML Solutions Architect" />
      <meta name="twitter:description" content="Data Engineering professional with 5+ years of experience architecting end-to-end data solutions." />
      <meta name="twitter:image" content="/og-image.jpg" />
    </Head>
  )
} 