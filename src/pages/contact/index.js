import Head from "next/head";
import styles from "./Contact.module.css";
import { StoreContext } from "@/contexts/buyerContext";
import { useContext, useRef } from "react";
import Buyer from "@/components/Buyer";
import { estateTypes } from "@/data/estateTypes";

export default function Checkout() {
  const formEl = useRef(null);
  const state = useContext(StoreContext);
  const { basket } = state;
  function submitted(e) {
    e.preventDefault();
    const payload = {
      name: "Jonas",
      email: "jofh@kea.dk",
      basket: basket,
    };
    fetch("/api/add-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <div className={styles.content}></div>
      </div>
      <section>
        <div className="kontakt">
          <div className="container">
            <div className="container_box">
              <form
                ref={formEl}
                onSubmit={submitted}
                action="/confirmation"
                className="left"
              >
                <h2>Contact potential buyers</h2>
                <label>
                  <input
                    placeholder="Name"
                    type="text"
                    className="field"
                    name="Name"
                    required
                  />
                </label>

                <label>
                  <input
                    placeholder="Email"
                    type="email"
                    className="field"
                    name="email"
                    required
                  />
                </label>

                <label>
                  <input
                    placeholder="Phone"
                    type="text"
                    className="field"
                    name="Phone"
                    required
                  />
                </label>

                <label>
                  <input className="checkbox" type="checkbox" />
                  <p>
                    Yes please, EDC may contact me with offers and information
                    related to the real estate market.
                  </p>
                </label>

                <button className={styles.button}>Send</button>
              </form>
              <div className="right">
                {basket.map((item) => (
                  <div key={item.key}>
                    <p>{item.zipCode}</p>
                    <p>{item.price} kr.</p>
                    <p>{item.estateType}</p>
                    <p>{item.size} m²</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
