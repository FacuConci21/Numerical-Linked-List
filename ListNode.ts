export class ListNode {

    value: number;
    next: ListNode | undefined;

    constructor(_value: number, _next?: ListNode ) {
        this.value = _value;
        this.next = _next;
    }
}