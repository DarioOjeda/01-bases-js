
const characters = ['Goku', 'Vegeta', 'Trunks']


const goku = characters[0]
const trunks = characters[2]

const [ g, v, t, goten = 'No tiene valor'] = characters

console.log(goten)

const returnArray = () => {
    return ['ABC', 123]
}

const returnArrayByArgument = ([letters, numbers]) => {
    return [ letters, numbers ]
}

const [letters, numbers] = returnArray() 
console.log( letters, numbers)

console.log( returnArrayByArgument(['JGKSFDJ',345425]))

