
// // Stack class
// class Stack {
  
//     // Array is used to implement stack
//     constructor(array)
//     {
//         this.items = array;
//     }
  
//     // Functions to be implemented
//     // push(item)
//     // push function
//      push(element)
//     {
//         // push element into the items
//         this.items.push(element);
//     }

//     // pop()
//     pop()
//     {
//         // return top most element in the stack
//         // and removes it from the stack
//         // Underflow if stack is empty
//         if (this.items.length == 0)
//             return "Underflow";
//         return this.items.pop();
//     }

    
//     peek()
//     {
//         // return the top most element from the stack
//         // but does'nt delete it.
//         return this.items[this.items.length - 1];
//     }
//     // isEmpty function
//     isEmpty()
//     {
//         // return true if stack is empty
//         return this.items.length == 0;
//     }

//     // printStack function
//     printStack()
//     {
//         var str = "";
//         for (var i = 0; i < this.items.length; i++)
//             str += this.items[i] + " ";
//         return str;
//     }

    
// }
// var 

// var init_stack = new Stack("singularity");

// init_stack.item.push("singularity");

// var output =  init_stack.printStack();

// console.log(output);