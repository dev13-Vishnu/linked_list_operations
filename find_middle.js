class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

function findMiddle(head){
    if (!head){
        return null;
    }

    let slow = head;
    let fast = head;

    while( fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow.value;
}

function createLinkedList (arr){
    if(arr.length === 0){
        return null;
    }
    let head = new Node(arr[0]);
    let current = head;

    for(let i = 1;i < arr.length; i ++){
        current.next  = new Node(arr[i]);
        current = current.next;
    }
    return head;

}
const arr = [1, 2, 3, 4, 5];  
const head = createLinkedList(arr);
console.log("Middle element of the list:", findMiddle(head));  

const arrEven = [1, 2, 3, 4, 5, 6];  
const headEven = createLinkedList(arrEven);
console.log("Middle element of the list:", findMiddle(headEven));  