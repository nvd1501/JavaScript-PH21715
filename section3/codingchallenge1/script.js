
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolhins, avgKoalas){
    if (avgDolhins >= 2 + avgKoalas) {
        console.log(`Dolphins win 🏆 (${avgKoalas} vs ${avgDolhins})`);
    }else if (avgKoalas >= 2 * avgDolhins) {
        console.log(`kolas win 🏆 (${avgKoalas} vs. ${avgDolhins})`);
    }else{
        console.log('no team win...');
    }
}
checkWinner(scoreDolphins, scoreKoalas);

 scoreDolphins = calcAverage(85, 54, 41);
 scoreKoalas = calcAverage(23, 34, 27);
 console.log(scoreDolphins, scoreKoalas);

 checkWinner(scoreDolphins, scoreKoalas);
