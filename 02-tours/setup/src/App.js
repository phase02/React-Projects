import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import Axios from "axios"
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => {
      return tour.id != id
    });
    setTours(newTour);
  }
  const fetchTours = () => {
    setLoading(true);
    // Incase of fetch , make use to response.json and await key word
    Axios.get(url).then(response => {
      setTours(response.data);
      console.log(response.data);
      setLoading(false);
    }).catch(error => {
      setLoading(false);
      console.log("Oops something went wrong");
    })

  }

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (<main>
      <Loading /></main>);
  }

  if (tours.length === 0) {
    return (<main>
      <div className="title">
        <h2>No tours available</h2>
        <button className="btn" onClick={() => fetchTours()}>Refresh</button>
      </div>
    </main>)
  }
  return <main><Tours tours={tours} removeTour={removeTour} /></main>
  return <h2>Tours Project Setup</h2>
}

export default App
