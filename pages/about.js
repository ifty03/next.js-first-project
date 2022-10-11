import React from "react";
import styles from "../styles/about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Ashiks world</a>
        </h1>

        <p className={styles.description}>Get started With ashikul islam </p>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs"
            className={`${styles.card} ${styles.bgr}`}
          >
            <h2>Students &rarr;</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              obcaecati perspiciatis quis? Voluptatum aspernatur nostrum nisi,
              autem sequi laudantium quas!
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className={`${styles.card} ${styles.bgb}`}
          >
            <h2>Jobs &rarr;</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              obcaecati perspiciatis quis? Voluptatum aspernatur nostrum nisi,
              autem sequi laudantium quas!
            </p>
          </a>
          <a
            href="https://nextjs.org/learn"
            className={`${styles.card} ${styles.bgb}`}
          >
            <h2>Jobs &rarr;</h2>
            <p>ctrl+space dile intalijence er auto suggestion chole ashe</p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default About;
