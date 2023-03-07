//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string,alist){    
    for (let word of alist){
        if (string.includes(word)){
            return 'Matched dog_name'
        }else{
            return 'No Matches'
        }
    }
}

// //Call method here with parameters
console.log(findWords(dog_string,dog_names))


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i +=2){
        arr.splice(i,1,"even index")
    }
    return arr
}

console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

let fav = 1
let fav2 = 4
let fav3 = 7
let fav4 ="1"
let fav5 = "h"

function evenOrOdd(number) {
    if (abs(number % 2) === 0){
        return "Even"
    }else if (abs(number % 2) === 1){
        return "Odd"
    }else{
        return "Thats not a number"
    }
}


// # Your job here is to write a function  which takes a sorted array ary and a value val, 
// # and returns the lowest index where you could insert val to maintain the sorted-ness of the array. 
// # The input array will always be sorted in ascending order. It may contain duplicates.
// # Do not modify the input.
// # Some examples:

// # keep_order([1, 2, 3, 4, 7], 5) #=> 4
// #                     #   ^(index 4)
// # keep_order([1, 2, 3, 4, 7], 0) #=> 0
// #         #   ^(index 0)
// # keep_order([1, 1, 2, 2, 2], 2) #=> 2
// #                 # ^(index 2)

function insertNum (aList, val){
    if (val == 0){
        return 0
    }else if (!val == 0){
        for (let i in aList){
            if (val <= aList[i]){
                return i
            }
        }
    }return aList.length
}

console.log(insertNum([1, 2, 3, 4, 7], 8))
