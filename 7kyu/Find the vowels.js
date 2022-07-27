function vowelIndices(word) {
    return [...word].reduce((acc, e, i) => /[aeiouy]/.test(e.toLowerCase()) ? [...acc, i + 1] : acc, []);
};