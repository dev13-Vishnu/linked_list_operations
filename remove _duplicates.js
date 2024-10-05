// Write a program to remove duplicates in a sorted singly linked lis
class Node {
    constructor(value){
        this.value = value;
        this. next = null;
    }
}

function removeDuplicate(head){
    let current = head;
    while(current && current.next){
        if(current.value === current.next.value){
            current.next = current.next.next;
        }else{
            current = current.next;
        }
    }
    return head;
}

function createLinkedList(arr) {
    let head = new Node(arr[0]);
    let current = head;
    for(let i = 1; i< arr.length; i++){
        current.next = new Node(arr[i]);
        current = current.next;
    }
    return head;
}

function printList( head){
    let current = head;
    let result = [];
    while(current){
        result.push(current.value);
        current = current.next;
    }
    console.log(result.join('->'));
}

const arr = [1, 1, 2, 3, 3, 4, 4, 5];

const head = createLinkedList(arr);

console.log("orginal list");

printList(head);

removeDuplicate(head);
console.log("List after removing duplicates");

printList(head)