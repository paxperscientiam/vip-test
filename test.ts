type SuperArr = any[]
type SuperSet = any[]
const isSetsEqual = (a: Set<{}>, b: Set<{}>) => a.size === b.size
    && [...a].every((value) => b.has(value))

const isArraysEqual = (a: number[], b: number[]) => a.length === b.length
    && [...a].every((value, index) => value === b[index])

const arrUniquePairs: SuperArr = []

const arrSets: SuperSet = []

function getAllPairs(arr: number[]) {
    const arrAllPairs: SuperArr = []
    arr.sort()
    arr.forEach((a, i) => {
        arr.forEach((b, j) => {
            arrAllPairs.push(...[[a, b]].filter((E) => {
                return E[0] + E[1] === 10 && i !== j
            }))
        })
    })
    return arrAllPairs
}

function getUniqueArrays(arr: number[]) {
    const pairs = getAllPairs(arr)
    let uniqArrs: SuperArr = []

    pairs.forEach((pair) => {
        if (!uniqArrs.some((element) => isArraysEqual(element, pair))) {
            uniqArrs.push(pair)
        }
    })
    return uniqArrs
}

function getUniqueSets(arr: number[]) {
    const pairs = getAllPairs(arr)
    const uniqSets: SuperSet = []
    let uniqArrs: SuperArr = []
    const setPairs = pairs.map((pair) => new Set(pair))
    setPairs.forEach((sett) => {
        if (!uniqSets.some((element) => isSetsEqual(element, sett))) {
            uniqSets.push(sett)
        }
    })
    uniqArrs = uniqSets.map((element) => {
        const arrr = Array.from(element)
        if (arrr.length === 1) {
            arrr.push(arrr[0])
        }
        return arrr
    })
    return uniqArrs
}

const userInput =  [1, 1, 2, 4, 4, 5, 5, 5, 6, 7, 9]

console.log("Get all pairs that sum to 10 ...")
console.dir(getAllPairs(userInput))
console.log("\n\n\n")

console.log("Get all unique pairs (order doesn't matter)")
console.log(getUniqueSets(userInput))
console.log("\n\n\n")

console.log("Get all unique pairs (order matters)")
console.log(getUniqueArrays(userInput))
