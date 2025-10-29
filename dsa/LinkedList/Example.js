


class Node{
  constructor(head){
    this.data = head;
    this.next = null;
  }
}

class BobbleList{
   constructor(head=null){
      this.head = head;
   }
   addnode(newNode){
      let node = this.head;
      while(node==null){
        this.head = newNode;
        return newNode
      }
      while(node.next){
         node = node.next;
      }
      node.next = newNode;
   }
   length(){
      let print = this.head;
      let count = 0;
      while(print!=null){
          count++;
          print = print.next;
      }
      return count
   }

   
   printNode(){
      let temp = this.head;
      while(temp!=null){
         console.log(temp.data);
         temp = temp.next;
      }
   }
}



let list =  new BobbleList()
let dist =  new Node(68)
list.addnode(dist)
list.addnode(new Node(54))
list.printNode()
let x = list.length()
console.log(x)