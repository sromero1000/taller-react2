import React from 'react'


const PeticionApi = () => {
    const [personajes, setPersonajes] = React.useState([])
    const [paginacion, setPaginacion] = React.useState(1)

    const obtenerPersonajes = async() => {
        try {
          const res = await fetch(`https://api.disneyapi.dev/characters?page=${paginacion}`)
          const {data} = await res.json()
          setPersonajes(data)
          console.log(data)
        } catch (error) {
          console.log(error);
        }
      }

    const siguiente= async()  => {
        await setPaginacion(paginacion+1);
        obtenerPersonajes();
    }
    const atras= async() => {
        await setPaginacion(paginacion-1);
        obtenerPersonajes();
    }     
    
   

  return (
    <div>
        <h1>PETICIÓN AL API DE DISNEY</h1>
        <button onClick={obtenerPersonajes}>Traer Personajes</button>
        <button onClick={siguiente}>Siguiente</button>
        <button onClick={atras}>Atras</button>

        {
        
                
            
                personajes.map(({_id, name, imageUrl})=> (
                    <div key = {_id}>
                        <h4 key={_id}> {_id} - {name}</h4>
                        <img src = {imageUrl} alt = {name}/>

                    </div>
                ))
        }
    </div>
  )
}

export default PeticionApi