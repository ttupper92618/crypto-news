const rem = (px: number, base = 8): string => {
    if (base < 1) {
        return `${px}px`;
    }
    return `${px * base}rem`;
}

export default rem;