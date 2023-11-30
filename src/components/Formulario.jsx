import { useState } from "react"

const Formulario = () => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    console.log('Enviando Formulario...')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

        <p className="text-lg mt-5 mb-10 text-center">
          Añade Pacientes y {''} 
          <span className="text-indigo-600 font-bold">Adminístralos</span>
        </p>

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
              <div className="mb-5">
                <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                  Nombre Mascota
                </label>
                
                <input 
                  id="mascota"
                  type="text"
                  placeholder="Nombre de la Mascota"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={nombre} 
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              
              <div className="mb-5">
                <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                  Nombre Propietario
                </label>
                
                <input 
                  id="propietario"
                  type="text"
                  placeholder="Nombre del Propietario"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                  value={propietario}
                  onChange={(e) => setPropietario(e.target.value)}
                />
              </div>
              
              <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                  Email
                </label>
                
                <input 
                  id="email"
                  type="email"
                  placeholder="Email Contacto Propietario"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="mb-5">
                <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                  Alta
                </label>
                
                <input 
                  id="alta"
                  type="date"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                />
              </div>
              
              <div className="mb-5">
                <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                  Síntomas
                </label>
                
                <textarea 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                    id="sintomas" 
                    placeholder="Describe los síntomas"
                    value={sintomas}
                    onChange={(e) => setSintomas(e.target.value)}
                />
              </div>

              <input 
                type="submit" 
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                value="Agregar Paciente"
              />
        </form>
    </div>  
  )
}

export default Formulario