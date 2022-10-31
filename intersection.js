const intersection = (a, b) => {
    // todo
    const matching = []

    const newSet = new Set(a)

    for (let i = 0; i < b.length; i++) {
        let curr = b[i]
        if (newSet.has(curr)) matching.push(curr)
    }

    return matching

};