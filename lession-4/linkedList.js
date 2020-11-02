function LinkList() {
    this.head = null;
    let length = 0;

    let Node = function(data) {
        this.data = data;
        this.next = null;
    };

    this.add = function(data) {
        let node = new Node(data);
        let currentNode = null;

        if (this.head === null) { // chua co node
            this.head = node;
        } else { // co nhieu hon 1  node
            currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        length++;
    };
    this.remove = function(data) {
        let currentNode = null;
        let prev = null;
    };
}

let myList = new LinkList();

myList.add('abcabvc');
myList.add('abcabv');
myList.add('abcab');
myList.add('abca');
myList.add('abc');

console.log(myList);