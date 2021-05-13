const Node = require('./Node.js')

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtTail(data) {
        let node = new Node(data);

        if(this.isEmpty()) {
            this.head = node;
            return;
        }

        let current = this.head;
        while(current.next != null) {
            current = current.next;
        }

        current.next = node;
        return;
    }

    insertAtHead(data) {
        let newHead = new Node(data);
        if (this.isEmpty()) {
            this.head = newHead;
            return;
        }
        
        newHead.next = this.head;
        this.head = newHead;
    }

    delete(data) {
        if(this.isEmpty()) return false;

        let current = this.head;

        if (current.data == data) {
            this.deleteAtHead();
            return true;
        }

        while (current.next != null ) {
            if (current.next.data == data) {
                current.next = current.next.next;
                return true;
            }

            current = current.next;
        }
            
        return false;
    }

    deleteAtHead() {
        if(this.isEmpty()) return false;
        this.head = this.head.next;
    }

    deleteAtTail() {
        // check for the case when linked list is empty
        if (this.isEmpty()) {
          return;
        }
        //if linked list is not empty, get the pointer to first node
        let firstNode = this.head;
        //check for the corner case when linked list has only one element
        if (firstNode.nextElement == null) {
          this.deleteAtHead();
          return;
        }
        //otherwise traverse to reach second last node
        while (firstNode.nextElement.nextElement != null) {
          firstNode = firstNode.nextElement;
        }
        //since you have reached second last node, just update its nextElement pointer to point at null, skipping the last node
        firstNode.nextElement = null;
        return;
      }


    search(data) {
        if (this.isEmpty()) return false;

        let current = this.head;
        while (current != null) {
            if (current.data == data) 
                return true;

            current = current.next;
        }

        return false;
    }

    findMid() {
        let midNode = null; 
        if (this.isEmpty()) return midNode;
        if (this.head.next == null) return this.head;

        let slow = this.head,
            fast = this.head;
        
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    isEmpty() {
        return this.head == null;
    }
}