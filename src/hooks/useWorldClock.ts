import axios from "axios";


export function useWorldClock(){

    

    async function obtenerHora(zona: string) {
        console.log("llego esto", zona)
        try {
          const apiKey = "EGDDNKPNY1FX";
          const url = `http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=zone&zone=${zona}`;
      
          const respuesta = await axios.get(url);
      
          console.log("Respuesta completa:", respuesta.data); // Debugging
      
          if (respuesta.data && respuesta.data.formatted) {
            const hora = respuesta.data.formatted.split(" ")[1];
            console.log(`Hora en ${zona}: ${hora}`);
          } else {
            console.error("Error: No se encontró la clave 'formatted' en la respuesta.");
          }
        } catch (error) {
          console.error("Error al obtener la hora:", error.message);
        }
      }
      return{
        obtenerHora
      }
}




