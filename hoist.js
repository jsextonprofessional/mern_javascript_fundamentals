// 1. DONE
// given:

// console.log(hello);
// var hello = 'world';

// prediction: hello will hoist to top and function will print 'world'
// result: undefined

// ES6 - given:

// console.log(hello);
// let hello = 'world';

// prediction: will draw error
// result: referenceError: cannot access 'hello' before initialization


// 2. DONE
// given:

// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// prediction: function test(){} will hoist above test() and log 'magnet'
// result: logged 'magnet

// ES6 - given:

// let needle = 'haystack';
// test();
// function test(){
//     let needle = 'magnet';
//     console.log(needle);
// }

// prediction: idk
// result: print 'magnet'


// 3. DONE
// given:

// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// prediction: log 'super cool'
// result: correct

// ES6 - given:

// let brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// prediction: log 'super cool'
// result: correct


// 4. DONE
// given:

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// prediction: will log 'chicken';'half-chicken';
// result: correct

// ES6 - given:

// const food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     let food = 'gone';
// }

// prediction: will log 'chicken', 'chicken'
// result: ReferenceError: Cannot access 'food' before initialization


// 5. DONE
// given:

// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// prediction: hoist var mean = function(){} above mean(); runs mean; logs 'chicken','chicken','chicken','chicken'
// result: TypeError: mean is not a function

// ES6 - given:

// mean();
// console.log(food);
// let mean = function() {
//     food = "chicken";
//     console.log(food);
//     let food = "fish";
//     console.log(food);
// }
// console.log(food);

// prediction: TypeError: mean is not a function
// result: ReferenceError: Cannot access 'mean' before initialization



// 6. DONE
// given:

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// prediction: logs 'disco'; 'rock';'r&b';'disco'
// result: logs 'undefined';'rock';'rnb';'disco'

// ES6 - given:

// console.log(genre);
// let genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     let genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// prediction: logs 'undefined';'rock';'rnb';'disco'
// result: ReferenceError: Cannot access 'genre' before initialization



// 7. DONE
// given:

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// prediction: logs 'san jose'; 'seattle'; 'burbank'; 'san jose'
// result: correct

// ES6 - given:

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     let dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// prediction: logs 'san jose'; reference error
// result: correct - logs 'san jose'; ReferenceError: Cannot access 'dojo' before initialization


// 8.
// given:

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// prediction: logs idk
// result: logs '{ name: 'Chicago', students: 65, hiring: true }'; TypeError: Assignment to constant variable.