import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [state, setState] = useLocalStorage("dark-mode");
    return [state, setState]
}