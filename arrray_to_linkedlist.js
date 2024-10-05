class Node{
    constructor (data){
        this.data =data;
        this.next = null;

    }
}

function arrayToLinkedList(arr) {
    if (arr.length  === 0){
        return null;
    }

    let head = new Node(arr[0]);
    let current = head;
    for(let i = 1; i<arr.length; i++ ){
        current.next = new Node(arr[i]);
        current = current.next;
    }
    return head;
}

function printLinkedList (head){
    let current = head;

    while(current){
        console.log(current.data);
        current = current.next;
    }

}

let arr = [ 2, 4, 6];

let linkedList = arrayToLinkedList(arr);

printLinkedList(linkedList);
