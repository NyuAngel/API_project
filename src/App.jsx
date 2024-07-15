import { useState, useEffect } from "react";

function App() {
  const URI = "https://api.thecatapi.com/v1/images/search?limit=10";
  const [data, setData] = useState(); // Estado para almacenar los datos de las imágenes
  const [isLoading, setIsLoading] = useState(true); // Estado para indicar si se está cargando
  const [error, setError] = useState(); // Estado para manejar errores
  
  

  useEffect(() => {
    const fetchData = () =>
      fetch(URI)
        .then((res) => res.json())  // Convertir la respuesta a JSON
        .then((data) => setData(data)) // Actualizar el estado de 'data' con los datos obtenidos
        .catch((err) => setError(err)) // Capturar errores y almacenarlos en el estado 'error'
        .finally(() => setIsLoading(false)); // Establecer isLoading a false cuando la solicitud haya finalizado

    fetchData(); // Llamar a la función fetchData al montar el componente ([] como dependencia indica que se ejecuta solo una vez)
  }, []); // [] como dependencia para ejecutar solo una vez al montar el componente


  if(isLoading){
    return <div>Loading...</div>  // Si isLoading es true, mostrar un mensaje de carga
  }

  return (
      <>
        <div>
      <h1 id= "title"> API Proyecto Galería </h1>
    </div>
      <div className="container">
        {data?.map((cat) => (
          <div key={cat.id}>
            <img src={cat.url} alt="cat" />
            
            </div>
          
        ))}
      </div>
      </>
  );
}
export default App;
