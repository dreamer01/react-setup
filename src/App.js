import React from 'react';

function App({ message }) {
  return (
    <div>
      {message}
      {console.log(process.env.API_URL)}
    </div>
  );
}

export default App;
