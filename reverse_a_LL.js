class Node {
    constructor (value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;

    }

    reverse(){
        let next = null 
        let current = this.head;
        let prev = null;

        while(current){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    append(value){
        const newNode = new Node(value);

        if(this.head === null){
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }

        current.next = newNode;

    }

    printList(){

        let result =[];
        let current = this.head;
        while(current){
            result.push(current.value );
            current = current.next;

        }
        console.log(result.join('->'));
    }

}


const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.printList();
list.reverse();
list.printList();