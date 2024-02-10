import { useState, useEffect } from 'react';

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        // função que altera os valores
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // evento que dispara a função
        window.addEventListener('resize', handleResize);

        handleResize();

        // Limpeza de memoria
        return () => removeEventListener('resize', handleResize);
    }, []);

    return windowSize
}
