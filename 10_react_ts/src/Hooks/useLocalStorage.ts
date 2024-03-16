export default function useLocalStorage<T>(chave: string, valor: T): void {
    localStorage.setItem(chave, JSON.stringify(valor));
}


