class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;

    }
    insertAt(value,position){
        const newNode = new Node (value);
        
        if(!this.head){
            newNode.next= this.head;
            this.head = newNode;
        }

        let previous= null;
        let current = this.head;
        let currentPosition = 1;
        while(current !== null && currentPosition < position ){

            previous = current;
            current = current.next;
            currentPosition++;
        }

        if(previous !== null){
            newNode.next = previous.next;
            previous.next = newNode;    
        }else{
            console.log("the position is out of bounds");
        }
    }

    append(value){
        const newNode = new Node(value);
        if(!this.head){
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current  = this.head;

        while(current.next){
            current = current.next;
        }

        current.next = newNode;

    }
    printList(){
        let current = this.head;
        let result = '';

        while(current !== null){
            result += current.value + '->';
            current= current.next
        }
        console.log(result+'null');
    }
}

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(5);
list.printList();
list.insertAt(4,4);
list.printList();