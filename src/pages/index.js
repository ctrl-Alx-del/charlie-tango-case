import Head from "next/head";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper container">
        <h1 className={styles.headline}>Seller's page</h1>
        <div className={styles.content}>
          <h2 className={styles.h2}>Find a buyer for your property</h2>
          <p>
            Here you can search after buyers for your property and sell it to
            the potential buyer.
          </p>

          <form action="/buyers" method="GET" className={styles.form}>
            <label className="label">
              <span className={styles.label}>Price</span>
              <input name="price" required />
            </label>
            <label className="label">
              <span className={styles.label}>Size of property</span>
              <input name="propertySize"></input>
            </label>
            <label className="label">
              <span className={styles.label}>Zip Code</span>
              <input name="zipCode" required />
            </label>
            <label className="estateType">
              <span className={styles.label}>Estate type</span>
              <select className={styles.select}>
                <option>Villa</option>
                <option>Apartment</option>
                <option>Terraced house</option>
              </select>
            </label>
            <button className={styles.button}>Find potential buyers</button>
          </form>
        </div>
      </div>
    </>
  );
}
