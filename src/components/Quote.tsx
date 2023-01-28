import React, { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://usu-quotes-mimic.vercel.app/');
      const data = await response.json();
      console.log(data);
      setQuote(data);
    }
    fetchData();
    
  }, []);

  return (
    <div>
      {quote ? (
        <>
          <p>Quote: {quote}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Quote;
