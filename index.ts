import { List } from "./List";
import { ListNode } from "./ListNode";

type myType = {
    id: number;
    name: string;
    lastname: string;
}

let obj: myType = { id: 1234, name: 'Albert', lastname: 'Smith' };

const list = new List(undefined, [1,'a','v',5, true, obj]);

console.log('lista vacia: ' + list.isEmpty);
console.log('primer elemento: ' + list.first);
console.log(list.last);
console.log('tamaño de la lista: ' + list.size);

list.printList();

// list.append(8);

// console.log(list.isEmpty);
// console.log(list.size); 
// list.printList();

console.log('ok');

