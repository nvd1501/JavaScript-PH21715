const  massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;



const BMIMark = massMark / heightMark ** 2 ;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn){
    console.log(`mark's BMI (${BMIMark}) is heigher than john's (${BMIJohn})!`)
}else{
    console.log(`mark's BMI (${BMIJohn}) is heigher than john's (${BMIMark})!`)
}
