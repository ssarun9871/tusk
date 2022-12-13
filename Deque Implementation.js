class Node {
    constructor() {
        this.value = 0;
        this.next = null;
        this.prev = null;
    }
}

class Deque {
    constructor() {
        this.head = this.tail = null;
    }

    isEmpty() {
        return this.head == null;
    }

    insertFront(x) {
        let element = new Node();
        element.value = x;

        //if x is the first element to be inserted
        if (this.head == null) {
            this.head = this.tail = element
            element.next = element.tail = null;
        }

        else {
            this.head.prev = element;
            element.next = this.head;
            element.prev = null;
            this.head = element;
        }
    }

    inserLast(x) {
        let element = new Node();
        element.value = x;

        if (this.head == null) {
            this.head = this.tail = element
            element.next = element.tail = null;
        }

        else {
            this.tail.next = element;
            element.next = null;
            element.prev = this.tail;
            this.tail = element;
        }

    }

    removeFirst() {
        if (this.isEmpty()) return -1;
        {
            this.head = this.head.next;
            this.head.prev = null;
        }

    }
    removeLast() {
        if (!this.isEmpty()) {
            this.tail = this.tail.prev;
            this.tail.next = null;

            return;
        }
    }
    display() {
        let temp = this.head;
        while (temp != null) {
            console.log(temp.value);
            temp = temp.next;

        }
    }

}


//Implementation of stack usnig Deque
class Stack {
    constructor() {
        this.st = new Deque();
    }

    push(element) {
        this.st.inserLast(element);
    }

    pop() {
        this.st.removeLast();
    }

    display() {
        this.st.display();
    }
}