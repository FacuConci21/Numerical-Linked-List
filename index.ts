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

// Añado un elementos al final
list.append(8);
list.append('master');
list.append([1,2,3]);

list.printList();

// Busquedas
console.log('\n' + list.find('a'));
console.log(list.find(5));
console.log(list.find(obj));
console.log(list.find('no existe'));

// Busqueda con retorno de Objeto ListNode
console.log();
console.log(list.findNode('a'));
console.log(list.findNode(5));
console.log(list.findNode(obj));
console.log(list.findNode([1,2,3])); // con los arreglos no funciona intuitivamente.
console.log(list.findNode('no existe'));

console.log('\nok');

