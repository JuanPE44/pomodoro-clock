import ContainerSection from "../ui/ContainerSection";
import { useWorldClock } from "../../hooks/useWorldClock";
import { useEffect, useState } from "react";

export function WorldClock() {
  const [continente, setContinente] = useState()
  const [pais, setPais] = useState()
  const [provincia, setProvincia] = useState()
 
  const { obtenerHora } = useWorldClock()
  
  const obtenerContinente = () => {

    const continente = event.target.value
    setContinente(continente)
  }

  const obtenerPais = () => {

    const pais = event.target.value
    setPais(pais)
  }

  const obtenerProvincia = () => {

    const provincia = event.target.value
    setProvincia(provincia)
  }

  const ejecutarBusqueda = () => {
    const zonaHoraria = `${continente}/${pais}/${provincia}`
    obtenerHora(zonaHoraria)
  }
  

  return (
    <ContainerSection>
      <div>
        <form action="" className="flex flex-col">
          <label htmlFor="">Ingrese Continente</label>
          <input type="text" onChange={() => obtenerContinente()}/>
          <label htmlFor="">Ingrese Continente</label>
          <input type="text" onChange={() => obtenerPais()}/>
          <label htmlFor="">Ingrese Continente</label>
          <input type="text" onChange={() => obtenerProvincia()}/>
          
        </form>
        <button onClick={() => ejecutarBusqueda()}>
          Click
        </button>
      </div>
    </ContainerSection>
      );
}
 
  
  

