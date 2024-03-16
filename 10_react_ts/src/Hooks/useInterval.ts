import { useEffect, useRef } from 'react';

export default function useInterval(callback: () => void, delay: number): void {
    const saveCallback = useRef<() => void>();

    useEffect(() => {
        saveCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            saveCallback.current!();
        }

        if (delay !== null) {
            const id: number = setInterval(tick, delay);

            return () => clearInterval(id);
        }
    }, [delay]);
}
