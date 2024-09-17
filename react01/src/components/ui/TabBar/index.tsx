import React from "react";
import styles from "./TabBar.module.scss";
// import '@/commons/variables.scss'

// type Props = {};

const TabBar = () => {
  return (
    <div className="rowGroup">
      <div id="London" className={styles.item}>
        <h2>London</h2>
        <p>London is the capital of England.</p>
      </div>

      <div id="Paris" className={styles.item}>
        <h2>Paris</h2>
        <p>Paris is the capital of France.</p>
      </div>

      <div id="Tokyo" className={styles.item}>
        <h2>Tokyo</h2>
        <p>Tokyo is the capital of Japan.</p>
      </div>
    </div>
  );
};

export default TabBar;
