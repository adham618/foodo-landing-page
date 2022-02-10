/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import About from "../common/components/About/About";
import Contact from "../common/components/Contact/Contact";
import Download from "../common/components/Download/Download";
import Service from "../common/components/Service/Service";
import TopContainer from "../common/components/TopContainer/TopContainer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FOODO - Landign Page</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        ></link>
      </Head>

      <TopContainer />
      <Service />
      <About />
      <Download />
      <Contact />

      <footer className="footer">
        <h5>Foodo &copy; themukherjee</h5>
        <script
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossOrigin={"" as string}
        ></script>

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossOrigin={"" as string}
        ></script>

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossOrigin={"" as string}
        ></script>
      </footer>
    </div>
  );
}