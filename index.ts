import { List } from "./List";
import { ListNode } from "./ListNode";

const list = new List();

console.log(list.isEmpty);
console.log(list.first);
console.log(list.last); 
list.printList();

list.append(8);

console.log(list.isEmpty);
console.log(list.size); 
list.printList();

console.log('ok');

