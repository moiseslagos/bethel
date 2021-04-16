import { useState } from 'react'

import styles from 'styles/components/frequencies/Frequencies.module.css'

export default function Frequencies ({ frequencies }) {
  const [listFrequencies, setListFrequencies] = useState(frequencies.lima)
  const handleSelectChange = (e) => {
    const departament = e.target.value
    setListFrequencies(frequencies[departament])
  }
  return (
    <section className="blockSection">
      <h2 className="title">Nuestras Frecuencias</h2>
      <h4>Seleccione su departamento</h4>
      <select className={styles.formTag} onChange={handleSelectChange}>
        <option value="lima">Lima</option>
        <option value="amazonas">Amazonas</option>
        <option value="ancash">Ancash</option>
        <option value="apurimac">Apurímac</option>
        <option value="arequipa">Arequipa</option>
        <option value="ayacucho">Ayacucho</option>
        <option value="cajamarca">Cajamarca</option>
        <option value="cusco">Cusco</option>
        <option value="huancavelica">Huancavelica</option>
        <option value="huanuco">Huánuco</option>
        <option value="ica">Ica</option>
        <option value="junin">Junín</option>
        <option value="la_libertad">La Libertad</option>
        <option value="lambayeque">Lambayeque</option>
        <option value="loreto">Loreto</option>
        <option value="madre_de_dios">Madre de Dios</option>
        <option value="moquegua">Moquegua</option>
        <option value="pasco">Pasco</option>
        <option value="piura">Piura</option>
        <option value="puno">Puno</option>
        <option value="san_martin">San Martín</option>
        <option value="tumbes">Tumbes</option>
        <option value="ucayali">Ucayali</option>
      </select>
      <table className={styles.tableFrecuencies}>
        <thead >
          <tr>
            <th height="50px">Provincia</th>
            <th height="50px">Lugar</th>
            <th height="50px">Frecuencia</th>
          </tr>
        </thead>
        <tbody>
          {
            listFrequencies.map((list) => {
              return (
                <tr key={list.id}>
                  <td>{list.provincia}</td>
                  <td>{list.lugar}</td>
                  <td>{list.frequencies}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </section>
  )
}
