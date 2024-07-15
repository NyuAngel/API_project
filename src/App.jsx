import { useState, useEffect } from "react";

function App() {
  const URI = "https://api.thecatapi.com/v1/images/search?limit=10";
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  
  

  useEffect(() => {
    const fetchData = () =>
      fetch(URI)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));

    fetchData();
  }, []);


  if(isLoading){
    return <div>Loading...</div>
  }

  return (
     
      <div className="container">
        {data?.map((cat) => (
          <div key={cat.id}>
            <img src={cat.url} alt="cat" />
            </div>
          
        ))}
      </div>
    
  );
}
export default App;
