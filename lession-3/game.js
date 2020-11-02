import {Queue} from './Queue.js'

function Games(nameList,num){
	let queue = new Queue();

	for(let i = 0 ;i < nameList.length;i++){
		queue.enqueue(queue.dequeue());
	}

	let elimited = '';

	while(queue.size() > 0) {
		for(let i = 0; i< num; i++){
			queue.enqueue(queue.dequeue())
		}
		elimited = queue.dequeue();
		console.log(`Phan tu bi loai la: ${elimited}`);
	}
	return queue.store;
}

let arr = [1,2,3,4,5]
let game = new Games(arr,2);

console.log(game);