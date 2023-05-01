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
          <p className={styles.p}>
            Here you can search after buyers for your property and sell it to
            the potential buyer.
          </p>

          <form action="/buyers" method="GET" className={styles.form}>
            <label>
              <span className={styles.label}>Zip Code</span>
              <input className={styles.inputs} name="zipCode" required />
            </label>
            <label>
              <span className={styles.label}>Price</span>
              <input className={styles.inputs} name="price" required />
            </label>
            <label>
              <span className={styles.label}>Size</span>
              <input className={styles.inputs} name="size" required />
            </label>
            <label>
              <span className={styles.label}>Estate type</span>
              <select className={styles.SelectType} name="estateType" required>
                <option value="1">Villa</option>
                <option value="2">Villalejlighed</option>
                <option value="3">Rækkehus</option>
                <option value="4">Ejerlejlighed</option>
                <option value="5">Fritidshus</option>
                <option value="6">Fritidsgrund</option>
                <option value="7">Helårsgrund</option>
                <option value="8">Andelsbolig</option>
                <option value="9">Landejendom</option>
              </select>
            </label>
            <button className={styles.button}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
