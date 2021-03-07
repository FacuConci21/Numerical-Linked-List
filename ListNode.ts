export class ListNode {

    value: any;
    next: ListNode | undefined;

    constructor(_value: any, _next?: ListNode ) {
        this.value = _value;
        this.next = _next;
    }
}