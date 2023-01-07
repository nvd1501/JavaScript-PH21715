const mark = {
    fullname : "mark Miller",
    mass : 78,
    height : 1.69,
    calcBMI: function () { 
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullname : "john Smith",
    mass : 92,
    height : 1.95,
    calcBMI: function () { 
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();

john.calcBMI();

console.log(mark.bni, john.bni);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullname}'s BMI (${mark.BMI}) is higher than ${john.fullname}'s BMI ${john.BMI}`)
}else if (mark.bmi > john.bmi){
    console.log(`${john.fullname}'s BMI (${john.BMI}) is higher than ${mark.fullname}'s BMI ${mark.BMI}`)
}