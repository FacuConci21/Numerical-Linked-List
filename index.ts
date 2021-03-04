import { List } from "./List";
import { ListNode } from "./ListNode";

const list = new List(undefined, [1,3,2,4,5,6,7]);

console.log(list.isEmpty);
console.log(list.size); 
list.printList();

list.insert(new ListNode(8, list.findNode(3)), 5);
list.insert(new ListNode(9, list.findNode(3)), 5);
list.insert(new ListNode(10, list.findNode(3)), 5);

list.printList();

list.removeElement(1);

console.log(list.first);

list.printList();

console.log(list.size);

console.log('ok');

