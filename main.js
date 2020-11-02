let Stack = function() {
    this.storage = [];
    this.index = 0;

    this.push = function(value) {
        this.storage[this.index] = value;
        this.index++;
    };
    this.pop = function() {
        if (this.index === 0) {
            return undefined;
        }
        this.index--;
        let result = this.storage[this.index];
        delete this.storage[this.index];
        return result;
    };
    this.size = function() {
        return this.index;
    };

    this.peek = function() {
        return this.storage[this.index - 1];
    };
}; 

let myStack = new Stack();

myStack.push('1');
myStack.push('2');
myStack.push('3');
myStack.push('4');

console.log(myStack);

myStack.pop();

console.log(myStack.peek());