import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./Buyers.module.css";
import Buyer from "@/components/Buyers/Buyer";

export default function Buyers({ data }) {
  const { query } = useRouter();
  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Potential buyers</h1>
        <p>
          On this page you get the <code>`query`</code> params like{" "}
          <code>`zipCode`</code>, and can use them to fetch a list of buyers
          from the API.
        </p>
        <p>
          Make sure to read the docs on how to fetch data on a page - There are
          multiple ways of doing it, and you should choose the one that fits
          your solution best.
        </p>
        <ul>
          <li>
            <a
              href="https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props"
              target="_blank"
            >
              next.js - Data fetching
            </a>
          </li>
          <li>
            <a
              href="https://react.dev/learn/synchronizing-with-effects#fetching-data"
              target="_blank"
            >
              react.dev - Fetching data
            </a>
          </li>
        </ul>
        <div className={styles.content}>
          <h2>Query params:</h2>
          <div className={styles.home}>
            {data.map((product) => (
              <Buyer key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  // Get data from api
  const res = await fetch(
    "http://localhost:3000/api/find-buyers?zipCode" +
      ctx.query.zipCode +
      "&price=" +
      ctx.query.price +
      "&size=" +
      ctx.query.size +
      "&estateType=" +
      ctx.query.estateType
  );
  const data = await res.json();
  // Return the data inside props
  return {
    props: {
      data,
    },
  };
}
