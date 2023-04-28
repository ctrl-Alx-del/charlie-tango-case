import Head from "next/head";
import styles from "./Home.module.css";
import { useState } from "react";

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
              <GetSelected />
            </label>
            <button className={styles.button}>Find potential buyers</button>
          </form>
        </div>
      </div>
    </>
  );
}

function GetSelected() {
  const [selectedValue, setSelectedValue] = useState("Villa");

  function handleChange(event) {
    setSelectedValue(event.target.value);
  }

  return (
    <>
      <select
        name="houseTypes"
        value={selectedValue}
        onChange={handleChange}
        className={styles.select}
      >
        <option value="Villa">Villa</option>
        <option value="Apartment">Apartment</option>
        <option value="Terraced house">Terraced house</option>
      </select>
    </>
  );
}

function GetInput() {}
