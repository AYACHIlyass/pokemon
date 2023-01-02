export const isBottom = () => {
    return (
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight
    );
};