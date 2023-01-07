const scoreDolphins = (97 + 122 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) /3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas >= 100) {
    console.log('dolphins win the trophy 🏆');
}else if ( scoreKoalas > scoreDolphins >= 100){
    console.log('loalas win the trophy 🏆');
}else if (scoreDolphins === scoreKoalas >= 100) {
    console.log('both win the trophy!');
}else{
    console.log('No one win the trophy');
}