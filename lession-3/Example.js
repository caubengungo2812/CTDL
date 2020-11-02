function Queue(){
	this.store = [];
	let queueElement = function(el,pos){
		this.el = el;
		this.pos = pos;
	 }

	 this.push = function(ele,pos){
	 	let qElement = new queueElement(ele,pos);
	 	let next = true
	 	if(this.store.length === 0) {
	 	this.store.push(qElement)
	 	}else{
	 	for(let i = 0; i < this.store.length; i++){
	 		if(qElement.pos < this.store[i].pos){
	 			this.store.splice(1, 0, qElement);
	 			next = false
	 			break;
	 		}
	 	}
	 	if(next){
	 		this.store.push(qElement)
	 	}

	 }

	 }

	 
}


let myQueue = new Queue();

myQueue.push('1',1 )
myQueue.push('2',3)
myQueue.push('3',4)
myQueue.push('4',2)

console.log(myQueue)


