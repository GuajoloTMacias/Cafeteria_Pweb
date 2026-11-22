import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { useEffect } from 'react'

//const API_URL='http://localhost:3000'

function App() {
  const [categorias, setCategorias]=useState([])
  const [productos, setProductos] = useState([])
  const [error, setError]= useState('')

  useEffect(()=> { //pedimos cosas al back y guadramos en el estado (actu de pnatalla)
    fetch('http://localhost:3000/categorias').then((res)=>res.json()).then((datos)=>setCategorias(datos)).catch(()=> setError('no se pudieron cargar las categorias'))

    fetch('http://localhost:3000/productos').then((res)=>res.json()).then((datos)=>setProductos(datos)).catch(()=> setError('no se pudieron cargar las productos'))

  }, [])


  return (
    <>
      <div className='p-6'>
        <h1 className="text-2xl font-bold mb-4">Menu de cafeteria</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/*Categorias */}
        <div className="flex gap-2 mb-6">
          {categorias.map((cat)=>(
            <button key={cat.id_Cat} className="px-4 py-2 bg-hsla(25, 40%, 41%, 0.5) text-white rounded-lg ">
              {cat.nombre_cat}
            </button>
          )
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {productos.map((prod)=> (
            <div key={prod.id_Produc} className="border p-4 rounded-lg shadow">
              <h3 className="font-bold text-lg">{prod.nombre_P}</h3>
              <p className="text-gray-650 text-sm">{prod.descripcion}</p>
              <p className="text-sm">{prod.dispo ? 'Disponible' : 'Agotado'}</p>
              <p className="font-semibold text-sm">{prod.precio}</p>
            </div>
          )
          )}

        </div>

      </div>
    </>
  )
}

export default App
