import React from 'react';

import styles from "./app.css"

function App({ message }) {
  return (
    <div className={styles.app}>
      {message}
      {console.log(process.env.API_URL)}
    </div>
  );
}

export default App;
