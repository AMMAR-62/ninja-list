import Head from "next/head"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css"
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Head>
      <title>
        Ninja List | Home
      </title>
      <meta name="keywords" content="ninja"/>
    </Head>
    <div className={styles.container}>
      <h1 className={styles.title}>Hello World</h1>
      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero debitis
        asperiores deserunt, iste hic voluptatum cupiditate fuga assumenda non
        quod tenetur blanditiis numquam iure repudiandae natus, accusamus quo
        harum consequatur?
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero debitis
        asperiores deserunt, iste hic voluptatum cupiditate fuga assumenda non
        quod tenetur blanditiis numquam iure repudiandae natus, accusamus quo
        harum consequatur?
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
    </>
  );
}
