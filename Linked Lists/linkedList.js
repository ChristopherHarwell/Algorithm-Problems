class Node {
    constructor(data, next = null ) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    };

    // insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // insert last node
    insertLast(data) {
        let node = new Node(data);
        let currentNode;

        // if empty, make head
        if(!this.head) {
            this.head = node;
        } else {
            currentNode = this.head;

            while(currentNode.next){
                currentNode = currentNode.next;
            };

            currentNode.next = node;
        };
        
        this.size++;
    };

    getLast() {
        if(!this.head) {
            return null;
        };

        let currentNode = this.head;
        while(currentNode) {
            if(!currentNode.next) {
                return currentNode;
            };
            currentNode = currentNode.next;
        }
    }

    // insert at index
    insertAt(data, index) {
        // if index is out of range
        if(index > 0 && index > this.size) {
            return;
        };

        // if first index
        if(index === 0) {
            this.head = new Node(data, this.head);
            return;
        };

        const node = new Node(data);
        let currentNode, previousNode;

        //set currentNode to first node
        currentNode = this.head;
        let count = 0;

        while(count < index) {
            previousNode = currentNode; // Node before index
            count++;
            currentNode = currentNode.next;

            this.size++;
        };

        node.next = currentNode;
        previousNode.next = node;

    }
    // get at index
    getAt(index) {
        let currentNode = this.head;
        let count = 0;

        while(currentNode) {
            if(count === index) {
                console.log(currentNode.data);
            };
            count++;
            currentNode = currentNode.next;
        }
        return null;
    }
    // remove at index
    removeAt(index) {
        if(index > 0 && index > this.size) {
            return;
        };

        let currentNode = this.head;
        let previousNode;
        let count = 0;

        // remove first
        if(index === 0) {
            this.head = currentNode.next;
        } else {
            while(count < index) {
                count++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            };

            previousNode.next = currentNode.next;
        };

        this.size--;
    }
    // clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }

    // print list data
    printListData() {
        let currentNode = this.head;

        while(currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }

    // get length
    getLength() {
        return this.size;
    }
}

// const ll = new LinkedList();

// ll.insertFirst(100);
// ll.insertFirst(200);
// ll.insertFirst(300);
// ll.insertFirst(400);
// ll.insertFirst(500);

// ll.getLength()
// console.log(ll.getLast());

module.exports = {LinkedList};