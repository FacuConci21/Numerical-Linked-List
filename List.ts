import { ListNode } from "./ListNode";

export class List {
    
    private head: ListNode;
    private nodes: Array<ListNode> = [];

    constructor(value?: any, values?: Array<any>) {
        if (value) {
            this.head = new ListNode(value);
            this.nodes?.push(this.head);
        }
        else if (values) {
            this.head = new ListNode(values.shift() || 0);
            this.nodes.push(this.head);

            values.forEach( (v) => {
                    this.append(v);
            });
        }
        else {
            this.head = new ListNode(undefined);
        }
    }

    private removeHead(): void {
        const nextHead: ListNode | undefined = this.head.next;

        if (nextHead === undefined) {
            this.nodes = [];
            this.head.value = NaN;
        }
        else {
            this.head = nextHead;
        }
    }

    private log(index: number = 0, ): string { 
        let output: string = '[';
        for (; index < this.nodes.length; index++) {
            output += ' {' + this.nodes[index].value + ', ' + this.nodes[index].next?.value
                + '}';
        }
        return output + ' ]';
    }

    private end( index: number = 0, ): number{

        if (this.nodes[index].next === undefined) return index;
        
        if (index < this.nodes.length) return this.end(index+1);
        
        return -1;
    }

    private search(value: number, index: number = 0): number {
        
        if (index < this.nodes.length) {
            
            if (this.nodes[index].value === value) return index;

            return this.search(value, index+1);
        } 
        else return -1;
    }

    get first(): ListNode | undefined {
        return (!this.head.value) ? undefined : this.head;
    }
    
    get last(): ListNode | undefined {
        return (!this.head.value) ? undefined: this.nodes[this.end()];
    }

    get isEmpty(): boolean {
        return (!(this.head.value) && this.nodes.length === 0 ) ? true : false;
    }

    get size(): number {
        return this.nodes.length;
    }

    append(nodeValue: any ): void {
        let newNode = new ListNode(nodeValue);

        if (!this.isEmpty) {
            let indexLast: number = this.end();
            this.nodes[indexLast].next = newNode;
        }

        this.nodes.push(newNode);
    }

    printList(): void {
        console.log(this.log());
    }

    find(value: any): string {

        if (this.isEmpty) return 'is empty';
        
        let nodeIndex = this.search(value);
        if (nodeIndex >= 0) {
            return `{ ${this.nodes[nodeIndex].value}, ${this.nodes[nodeIndex].next?.value} }`;
        }
        else {
            return 'not found';
        }
    }

    findNode(value: any): ListNode | undefined {

        if (this.isEmpty) return undefined;
        
        let nodeIndex = this.search(value);
        
        if (nodeIndex >= 0) {
            return this.nodes[nodeIndex];
        }
        else {
            return undefined;
        }
    }

    insert(nodeToInsert: ListNode, index: number, 
        options: {isLast?: boolean, isHead?: boolean} = { isLast: false, isHead: false}): void
    {
        if (index < 0 || index > this.nodes.length) throw Error('index out of range');

        if (options.isLast && !(options.isHead)) {
            nodeToInsert.next = undefined;
            this.nodes[this.end()].next = nodeToInsert;
        }
        else if (options.isHead && !(options.isLast)) {
            nodeToInsert.next = this.head;
            this.head = nodeToInsert;
        }
        else if (nodeToInsert.next === undefined) nodeToInsert.next = this.last;

        const nodesHigh = this.nodes.slice(0, index);
        const nodesLow = this.nodes.slice(index,);

        nodesHigh.push(nodeToInsert);

        this.nodes = nodesHigh.concat(nodesLow);
    }

    remove(value: number): void {
        // Buscamos el indice del elemento a remover.
        const toRemoveIndex: number = this.search(value);
        // Almaceno una referencia a dicho elemento.
        const toRemove: ListNode | undefined = this.nodes[toRemoveIndex];
        // Almaceno el elemento siguiente al que apuntaba dicho elemento.
        const nextOfRemove: ListNode | undefined = toRemove.next;
        // Asigno el elemento siguiente al nodo anterior a dicho elemento.
        if (toRemoveIndex > 0) this.nodes[toRemoveIndex-1].next = nextOfRemove;
        else if (toRemoveIndex == 0) {
            this.removeHead();
        }

        // Remuevo el elemento y sobreescribo this.nodes.
        const nodesHigh = this.nodes.slice(0, toRemoveIndex);
        const nodesLow = this.nodes.slice(toRemoveIndex+1,);
        this.nodes = nodesHigh.concat(nodesLow);
    }

}