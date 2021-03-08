import React, { Fragment } from "react";
import useIncrement from "./hooks/useIncrement";
import styles from "./styles/app.module.scss";

function App() {
  const [counter, increaseCounter] = useIncrement();
  return (
    <Fragment>
      <div className={styles.div}>{counter}</div>
      <button onClick={increaseCounter}>+ Count</button>
    </Fragment>
  );
}

export default App;
