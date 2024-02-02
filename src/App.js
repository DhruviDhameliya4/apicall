import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        console.log(response.data.results)
        setdata(response.data.results)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <div className="App">
      <h1 className='title'>The Rick and Morty API</h1>

      <div className='main flex'>
        {
          data.map((ele, ind) => {
            return (
              <>
                <div className='cnt-div' key={ind}>
                  <div className='image'>
                    <img src={ele.image}></img>
                  </div>
                  <div className='text'>
                    <h2 className='orange'>{ele.name}</h2>
                    <p className='sts'>{ele.status}-{ele.species}</p>

                    <div className='sec'>
                      <div className='section'>
                        <p className='p-gray'>Last known location:</p>
                        <p className='p-light orange'>{ele.origin.name}</p>
                      </div>

                      <div className='section'>
                        <p className='p-gray'>First seen in:</p>
                        <p className='p-light orange'>{ele.location.name}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </>
            )
          })
        }

      </div>
    </div>
  );
}

export default App;