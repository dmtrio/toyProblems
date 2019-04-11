// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.replace(/\s*$/, '')
//         .split('\n')
//         .map(str => str.replace(/\s*$/, ''));

//     main();
// });
inputString = [
    '6',
    'a b c aa d b',
    '1 2 3 4 5 6',
    '3',
    '1 5 caaab',
    '0 4 xyz',
    '2 4 bcdybc'
]

main();

function readLine() {
    return inputString[currentLine++];
}

function geneSearch(dna, gene, index, matchCount) { 
    const match = dna.indexOf(gene, index);
    console.log('inside', dna, gene, index, matchCount)

    if (match > -1) { 
        return geneSearch(dna, gene, match + 1, matchCount + 1);
    }
    return matchCount
}


function main() {
    let highest, lowest;

    const n = parseInt(readLine(), 10);

    const genes = readLine().split(' ');

    const health = readLine().split(' ').map(healthTemp => parseInt(healthTemp, 10));

    const s = parseInt(readLine(), 10);

    for (let sItr = 0; sItr < s; sItr++) {
        let healthSum = 0;

        const firstLastd = readLine().split(' ');

        const first = parseInt(firstLastd[0], 10);

        const last = parseInt(firstLastd[1], 10);

        const d = firstLastd[2];


        const mapGenes = genes.slice(first, last + 1);
        const mapHealth = health.slice(first, last + 1);


        mapGenes.forEach((gene, index) => {
            const matches = geneSearch(d, gene, 0, 0);
            healthSum = healthSum + mapHealth[index] * matches;
            console.log(matches, healthSum)
        })

        highest = typeof highest === 'undefined' ? healthSum : healthSum > highest ? healthSum : highest

        lowest = typeof lowest === 'undefined' ? healthSum : healthSum < lowest ? healthSum : lowest
    }

    // console.log(highest + ' ' + lowest);
    return lowest + ' ' + highest;
}


// test('Generate parentheses with value 1', () => {
//     const ans = ['()'];
//     expect(main(1)).toEqual(ans);
//   });
  