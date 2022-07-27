function isAllPossibilities(x) {
    return x.sort().filter((f, i) => f === i).length === x.length && x.length > 0;
}