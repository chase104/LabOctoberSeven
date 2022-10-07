"use strict";




// let studentsInClass = 0;

// for (let i=0; i<studentLimit; i++) {
//     // we have not hit limit, add another student to the class
//     studentsInClass++;
//     console.log(studentsInClass);
// }





// if (studentsInClass === studentLimit) {
//     console.log("we have reached our limit!")
// }
// console.log("LOG AFTER LOOP: ", studentsInClass);

// Simple for loop exercise

// let objectivelyBestMovies = ['Cinderella Man', 'Sharknado', 'Titanic']



// objectivelyBestMovies.splice()

// for (var j=0; j<10; j++) {
//     //do something
//     // break;
// }

// let i=0;
// while (i < 10) {
//     let text = "The number is " + i;
//     console.log(text)
//     i++;
//   }





//   var age = 20;

//   // console.log( age+1 )  THIS DOESNT CHANGE MY VARIABLE
//   console.log(age = age+1); // THIS CHANGES 
//   console.log(age)


// const isPrime = num => {
//     for(let i = 2, s = Math.sqrt(num); i <= s; i++)
//         if(num % i === 0) return false; 
//     return num > 1;
// }


// function isPrimeNumber(n) {
//     for (var i = 2; i < n; i++) { // i will always be less than the parameter so the condition below will never allow parameter to be divisible by itself ex. (7 % 7 = 0) which would return true
//       if(n % i === 0) return false; // when parameter is divisible by i, it's not a prime number so return false
//     }
//     return n > 1; // otherwise it's a prime number so return true (it also must be greater than 1, reason for the n > 1 instead of true)
//   }






  /*

  Still not very confident
  write a while loop that runs while i is less than 30
  log the value of i when i is greater than 10


  confident
    write a loop that runs while i is less than 100
    when i is even log i and log i plus 1


  super confident
  write a while loop that runs while i is greather than -5
  log when i is divisible by 6 OR is less than 30

  */



  // write while loop   DONE

  // check if divisible by 5 DONE

  // log i DONE

  // log half of i

//   let i = 0;
//   while (i < 200) {
//     if (i % 5 === 0) {
//         console.log(i);
//         console.log(i/2);
//     }
//     i++;
//   }




// WHAT DO WE NEED TO DO?

// create a loop 

//subtract dollars

// convert remaining dollars to quarters

// subtract

// log how many quarters

// for
// while

// do while  WILL EXECUTE FIRST THEN EVALUATE
// EXECUTE 1 TIME AT LEAST

// do {
// console.log("hello!!!!")
// } while (5<3)


//    =   ASSIGNS VALUE
//    == RETURNS         TRUE OR FALSE     --- soft
//    !=  RETURNS        TRUE OR FALSE     -- soft
//    === RETURNS        TRUE OR FALSE      -- hard
//    !== RETURNS        TRUE OR FALSE      --hard



function logStudentGrade(name, grade) {
   let capitalizedName = name.toUpperCase();
    let statement = capitalizedName + " your grade is " + grade;
    console.log(statement)
}



let myFunction = () => {
    let hello = "hello";

//////////////////////////////////////////////////
    let innerFunction = () => {
        hello = "inner hello";
        console.log("line 158 ", hello)
    }
    innerFunction()
//////////////////////////////////////////////////
    console.log("line 163 ", hello)
}

myFunction()



// let myFunction = () => {
//     var student = "George";

// //////////////////////////////////////////////////
//     if (true) {
//         var student = "Iffy";
//         console.log("IN: ", student);
//     }
// //////////////////////////////////////////////////
//     console.log("OUT: ", student)
// }

// myFunction()



