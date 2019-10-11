/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When used on its own outside a function in the global scope this refers to the window object.
* 2. When used inside of an object you created this refers to that object that it is inside.
* 3. When used inside of a constructor function this refers to the object that is being created.
* 4. This can be overided by using .call() and .apply()
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this)
// Principle 2

// code example for Implicit Binding
let exampleObj = {
    thingToSay: "This is Implicit Binding",
    speakIt:function(){
        console.log(this.thingToSay)
    }
}
exampleObj.speakIt();
// Principle 3

// code example for New Binding
function NewMember(memstats) {
    this.name = memstats.name,
    this.position = memstats.position,
    this.active = memstats.active,
    this.introduction = ()=>{
        console.log(`Hi my name is ${this.name} and I work as a ${this.position}`)
    }
}
const jim = new NewMember({name:"jim",position:"Dev",active:true});
jim.introduction();
// Principle 4

// code example for Explicit Binding