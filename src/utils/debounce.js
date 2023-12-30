const debounce = (fn, wait = 100) => {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, wait)
    }
}

export default debounce;
