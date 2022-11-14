const LinkedList = require('../index');

// Floyd’s cycle finding algorithm or Hare-Tortoise algorithm is a pointer algorithm that uses only two pointers, moving through the sequence at different speeds. This algorithm is used to find a loop in a linked list. It uses two pointers one moving twice as fast as the other one. The faster one is called the faster pointer and the other one is called the slow pointer.

// How Does Floyd’s Cycle Finding Algorithm Work?

// While traversing the linked list one of these things will occur-

// The Fast pointer may reach the end (NULL) this shows that there is no loop in the linked list.
// The Fast pointer again catches the slow pointer at some time therefore a loop exists in the linked list.

function tortoiseAndHare(list){
  let fast = list.head;
  let slow = list.head;

  while(fast.next){
    fast = fast.next.next;
    slow = slow.next;
  }
  console.log(slow.value);
  return fast;
}
let list = new LinkedList();

list.add(5);
list.add(1);
list.add(4);
list.add(6);
list.add(7);

console.log(tortoiseAndHare(list));
