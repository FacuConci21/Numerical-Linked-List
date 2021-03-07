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

// ADD AN ELEMENT TO THE END
list.append(8);
list.append('master');
list.append([1,2,3]);

list.printList();

// SEARCHES
console.log('\n' + list.find('a'));
console.log(list.find(5));
console.log(list.find(obj));
console.log(list.find('no existe'));

// SEARCH WITH RETURN TYPE LISTNODE
console.log();
console.log(list.findNode('a'));
console.log(list.findNode(5));
console.log(list.findNode(obj));
console.log(list.findNode([1,2,3])); // con los arreglos no funciona intuitivamente.
console.log(list.findNode('no existe'));

// INSERT ELEMENTS

list.insert(new ListNode('str', list.findNode(obj)), 3);
list.printList();
console.log(list.findNode('str'));

list.insert(new ListNode({ x: 100, y: 102, z: 243 }, list.findNode('master')), 6);
list.printList();
console.log(list.findNode({ x: 100, y: 102, z: 243 }));

let obj2: myType = { id: 23, name: 'adfasdf', lastname: 'sdfa'};
list.insert(new ListNode(obj2, list.findNode('master')), 6);
list.printList();
console.log(list.findNode(obj2));

list.insert(new ListNode(new ListNode(1), list.findNode('master')), 1);
list.printList(); // Es un nodo con un nodo adentro... como lo buscas y visualizas? no tengo idea...

// REMOVE ELEMENTS

console.log();
list.remove('v');
list.printList();

console.log();

list.remove(true);
list.remove(obj2);
list.printList();

console.log('\nok');

