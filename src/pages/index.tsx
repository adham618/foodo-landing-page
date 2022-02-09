import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../common/components/About/About'
import Contact from '../common/components/Contact/Contact'
import Download from '../common/components/Download/Download'
import Service from '../common/components/Service/Service'
import TopContainer from '../common/components/TopContainer/TopContainer'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Foodo Landing-Page</title>
        <meta name="description" content="Foodo free landing-page for food app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopContainer />
      <Service />
      <About />
      <Download />
      <Contact />
      <footer className="footer">
        <h5>Foodo &copy; <a href="https://adhamtarek.vercel.app/" target="_blank" rel="noreferrer">Adham Tarek </a> </h5>
      </footer>
    </div>
  )
}

export default Home
