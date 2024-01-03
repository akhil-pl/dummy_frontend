import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use fetch to make the HTTP request
        // Replace 'your-api-endpoint' with the actual API endpoint
        const response = await fetch('http://122.165.80.8/jobs/');

        // Check if the request was successful
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          setError(`Error: ${response.status}`);
        }
      } catch (error) {
        setError(`Error: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Data Details</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataFetcher;
