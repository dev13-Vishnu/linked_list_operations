class Node{
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;

    }
}

class DoublyLinkedLIst{
    contructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    addAtBeginnig (data) {

        const  newNode = new Node (data) ;

        if (this.head == null) {
            this.head =  newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    addAtEnd (data) {

        const newNode = new Node (data);

        if(this.head === null) {

            this.head = this.tail = null;

        }else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    printListForward(){
        let elements = [];
        let current = this.head;

        while(current !== null){
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join('->'));
    }

    printListBackward() {
        let elements = [];
        let current = this.tail;

        while(current !== null){
            elements.push(current.data);
            current = current.prev;
        }
        console.log(elements.join('->'));
    }
}

let dll  = new DoublyLinkedLIst();

dll.addAtBeginnig(10);
dll.addAtEnd(20);
dll.addAtBeginnig(50);
dll.printListForward();
dll.printListBackward();
