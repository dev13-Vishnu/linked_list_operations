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
        console.log(elements.join('<->'));
    }

    printListBackward() {
        let elements = [];
        let current = this.tail;

        while(current !== null){
            elements.push(current.data);
            current = current.prev;
        }
        console.log(elements.join('<->'));
    }

    removeFirst(){
        if(!this.head) {
            console.log("List is empty");
            return;
        }
        if(this.head === this.tail){
            this.head = this.tail = null;
        }else{
            this.head = this.head.next;
            this.head.prev = null;
        }
    }


    removeLast(){
        if(!this.head){
            console.log("List is empty");
            return;
        }
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
    }

    find(value){
        let current = this.head;
        while(current) {
            if(current.data === value) {
                return current.data;
            }
            current = current.next;
        }
        return "not found";
    }
}

let dll  = new DoublyLinkedLIst();

dll.addAtBeginnig(10);
dll.addAtEnd(20);
dll.addAtBeginnig(50);
dll.addAtEnd(32);
dll.addAtEnd(56); 
dll.printListForward();
dll.printListBackward();
dll.printListForward();
dll.removeLast();
dll.printListForward();
console.log(dll.find(5));
