import ContainerSection from "../ui/ContainerSection";
import { useWorldClock } from "../../hooks/useWorldClock";
import { useEffect } from "react";

export function WorldClock() {
  useEffect(() => {
      obtenerHora()
  }, []);

  const { obtenerHora } = useWorldClock()
  
  const obtenerZonaHoraria = () => {

  }
  

  return (
    <ContainerSection>
      <div>
        <form action="" className="flex flex-col">
          <label htmlFor="">Ingrese Continente</label>
          <input type="text" />
          <label htmlFor="">Ingrese Continente</label>
          <input type="text" />
          <label htmlFor="">Ingrese Continente</label>
          <input type="text" />
        </form>

      </div>
    </ContainerSection>
      );
}
 
  
  

