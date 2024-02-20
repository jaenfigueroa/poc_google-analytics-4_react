import React, { useState } from 'react'

interface FormData {
  nombre: string
  email: string
  mensaje: string
}

const Formulario: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    mensaje: '',
  })

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    console.log('Nombre:', formData.nombre)
    console.log('Email:', formData.email)
    console.log('Mensaje:', formData.mensaje)
    // Puedes enviar los datos a través de una llamada a una API, etc.
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nombre:
          <input
            type='text'
            name='nombre'
            value={formData.nombre}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Mensaje:
          <textarea
            name='mensaje'
            value={formData.mensaje}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type='submit'>Enviar</button>
    </form>
  )
}

export default Formulario
