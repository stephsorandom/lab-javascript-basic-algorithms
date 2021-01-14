// Iteration 1: Names and Input
let hacker1=`Stephanie`
console.log(`The driver's name is ${hacker1}`)
let hacker2=`Mitchell`
console.log(`The navigator's name is ${hacker2}`)


//Iteration 2 : Conditionals
 //Determine which name is longer
 let driverName = hacker1.length;
 console.log(hacker1.length)
 let navigatorName = hacker2.length;
 console.log(hacker2.length)
 
 //Driver = The driver has the longest name, it has XX characters.
 // Navigator = It seems that the navigator has the longest name, XX characters!
 //Both = Wow, you both have equally long names, XX characters!
 if (driverName > navigatorName) {
   console.log(`The driver has the longest name, it has ${driverName} characters.`)
 } else if (driverName < navigatorName) { 
   console.log( `It seems that the navigator has the longest name, it has ${navigatorName} characters.`) 
 } else {
   console.log (`Wow, you both have equally long names, ${driverName} characters!`)
 }


// Iteration 3: Loops
        //PART 1
//Print all characters in driverName
//Separate characters by space and capitalize
//driverName = Stephanie
hacker1 = hacker1.toUpperCase()
driverName = hacker1.split()
console.log(hacker1)

        //PART 2
//Print navigatorName in reverse
navigatorName = hacker2.split(``)
console.log(navigatorName.reverse().join(``));

 //PART 3
//Depending on lexicograhic order, print the following:
//The driver's name goes first.
//Yo, the navigator goes first definitely.
//What?! You both have the same name?
  