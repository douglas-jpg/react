import { useEffect, useState } from 'react';

const Timer = () => {
const [segundos, setSegundos] = useState(0)

// setInterval e setTimeout 
useEffect(() => {
    const interval = setInterval(() => {
        setSegundos((prevSegundos) => prevSegundos + 1)
    }, 1000);

    // limpeza de estado 
    return () => clearInterval(interval)
}, []) // array de dependencias vazio esse é o valor observado
  return (
    <div>Timer: {segundos} segundos</div>
  )
}

export default Timer