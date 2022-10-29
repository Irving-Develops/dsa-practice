const anagrams = (s1, s2) => {
    // todo
    if (s1.length != s2.length) return false

    const obj1 = {}
    const obj2 = {}

    for (let i = 0; i < s1.length; i++) {
        let curr1 = s1[i]
        let curr2 = s2[i]
        obj1[curr1] ? obj1[curr1] += 1 : obj1[curr1] = 1
        obj2[curr2] ? obj2[curr2] += 1 : obj2[curr2] = 1
    }


    for (let key in obj1) {
        let count = 0;
        if (obj2[key]) {
            count = obj1[key]
            while (count > 0) {
                count -= 1
                obj1[key] -= 1
                obj2[key] -= 1
            }
        } else {
            return false
        }
    }
    console.log(obj1, obj2)

    for (let key in obj2) {
        if (obj2[key] !== 0) return false
    }

    for (let key in obj1) {
        if (obj1[key] !== 0) return false
    }

    return true

};

console.log(anagrams('paper', 'reapa'))

module.exports = {
    anagrams,
};
