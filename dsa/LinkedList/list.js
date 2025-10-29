
class Node {
    constructor(head) {
        this.data = head;
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    addnode(newNode) {
        let node = this.head;

        while (node == null) {
            this.head = newNode;
            return
        }

        while (node.next) {
            node = node.next;
        }
        node.next = newNode
    }
    lenght() {
        let curr = this.head;
        let count = 0;
        while (curr !== null) {
            count++;
            curr = curr.next;
        }
        return count
    }
    printNode() {
        let curr = this.head;
        while (curr !== null) {
            console.log(curr.data);
            curr = curr.next
        }
    }
    search(data) {
        let point = this.head
        while (point !== null) {
            if (point.data == data) {
                return true;
            }
            point = point.next;
        } return false;
    }
    reverse() {
        let temp = this.head;
        let prev = null;
        let next = null;
        while (temp != null) {

        }
    }
}

let link = new LinkedList()
let node = new Node(12)
link.addnode(node)
link.addnode(new Node(123))
link.addnode(new Node(73))
link.addnode(new Node(13))
link.addnode(new Node(34))
link.addnode(new Node(78))
let x = link.lenght()
console.log(`The length of the array is ${x} node`)
link.printNode()
let m = link.search(123)
console.log(m)
let h = reverse(link)
console.log(h)