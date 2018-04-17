module.exports = {
        add: function(num1, num2){
            console.log(`${num1} + ${num2} = ${num1 + num2}`)
        },
        multiply: function(num1, num2) {
            console.log(`${num1} x ${num2} = ${num1 * num2}`)
        },
        square: function(num1) {
            console.log(`${num1} squared is ${num1 * num1}`)
        },
        random: function(num1, num2) {
            console.log(`Your random number between ${num1} and ${num2} is ${Math.floor(Math.random() * (num2 - num1 + 1)) + num1}`)
        }
    
}