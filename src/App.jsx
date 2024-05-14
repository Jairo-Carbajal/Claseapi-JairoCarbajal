import { useEffect, useState } from 'react'


function App() {
  const url ="https://jsonplaceholder.typicode.com/todos"

  const [data, setData] = useState([]);

  const [loading,setloading] =useState(true);

  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(res=> {
      setData(res)
      setloading(false)
    })

  },[])

  return (
    <>
    {
      loading ? <h1>Cargando...</h1> : (

      data.map(item =>(
        <div key={item.id}> 
          <h2>{item.title}</h2>
        </div>
        )
      )
    )
    }

    </>
  )
}

export default App
