import Head from "next/head";
import styles from "./Contact.module.css";

export default function cont() {
  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <div className={styles.content}></div>
      </div>
      <section>
        <from className="kontakt">
          <div className="container">
            <div className="container_box">
              <form action="/confirmation" className="left">
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

                <button className="button">Send</button>
              </form>
              <div className="right"></div>
            </div>
          </div>
        </from>
      </section>
    </>
  );
}
