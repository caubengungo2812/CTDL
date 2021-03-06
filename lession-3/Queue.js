const Queue = function(){
    this.store = [];
    this.enqueue = function(value){
        this.store.push(value)
    }
    this.dequeue = function(){
        this.store.shift();
    }
    this.print = function(){
        return this.store 
    }
    this.isEmpty = function(){
        return this.store.length === 0;
    }

    this.size = function(){
        return this.store.length
    }

}

let myQueue = new Queue();

myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.enqueue(4)
myQueue.enqueue(5)

console.log(myQueue)

myQueue.dequeue();

console.log(myQueue)

myQueue.print();
console.log(myQueue)

export default Queue;