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

        if (this.head === null) {
            this.head = node;
        } else {
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