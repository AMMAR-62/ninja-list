import Head from "next/head"
import Link from "next/link"
import styles from "../../styles/ninjas.module.css"
export const getStaticProps = async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json()
    return {
        props:{
            ninjas: data
        }
    }
}
const Ninja = ({ninjas}) => {
  return (
    <>
      <Head>
        <title>Ninja List</title>
        <meta name="keywords" content="ninja" />
      </Head>
      <div>
        <h1>All Ninjas</h1>
        {ninjas.map((ninja)=>(
            <Link key={ninja.id} href={`/ninjas/${ninja.id}`}>
                <a className={styles.single}>
                    {ninja.name}
                </a>
            </Link>
        ))}
      </div>
    </>
  );
};

export default Ninja;
