import Head from 'next/head'
import Banner from '../components/Banner';
import Header from '../components/Header';
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb: Holiday Rentals, Cabins, Beach Houses, Unique Homes & Experiences</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
{/* Header */}
<Header></Header>

{/* Banner */}
<Banner/>
    </div>
  )
}
