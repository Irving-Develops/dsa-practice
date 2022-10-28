const anagrams = (s1, s2) => {
    // todo
    let obj1 = {}
    let obj2 = {}

    let count = 0

    let res = true;


    if (s1.length !== s2.length) return false

    for (let i = 0; i < s1.length; i++) {
        let curr = s1[i]
        let curr2 = s2[i]

        obj1[curr] ? obj1[curr] += 1 : obj1[curr] = count + 1
        obj2[curr2] ? obj2[curr2] += 1 : obj2[curr2] = count + 1
    }

    console.log("here")
    for (let char in obj1) {
        console.log(char, '<=====')
        if (!obj2[char]) return false
        else {
            obj2[char] -= 1
        }
    }
    console.log("here")
    console.log(obj1, obj2)


    for (let char in obj2) {
        console.log(obj2[char])
        if (obj2[char] !== 0) return false
    }
    console.log("here")


    return true

};


console.log(anagrams('monkeyswrite', 'newyorktimes'))

