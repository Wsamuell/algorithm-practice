"use strict";
// what is a linked list
// a particular type of data structure with nodes
// so basically a bunch of nodes linked together
// uses head and tail to ideantify the begining and end of the linkedList
// Inherantly ordered list
// in an array  each item is stored in the computers memory
// let arr = [1, 2, 3];
// console.log(arr);
// arr.splice(1, 0, 4);
// console.log(arr);
class Nodes {
    val;
    next;
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const a = new Nodes('A');
const b = new Nodes('B');
const c = new Nodes('C');
const d = new Nodes('D');
const e = new Nodes('E');
a.next = b;
b.next = c;
c.next = d;
d.next = e;
class Nums {
    val;
    next;
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const aa = new Nums(1);
const bb = new Nums(2);
const cc = new Nums(3);
const dd = new Nums(13);
const ee = new Nums(11);
aa.next = bb;
bb.next = cc;
cc.next = dd;
dd.next = ee;
const printLinkedList = (head) => {
    let current = head;
    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
};
// printLinkedList(c);
const reqList = (head) => {
    if (head === null)
        return null;
    console.log(head.val);
    reqList(head.next);
};
// reqList(a);
const linkedListToArray = (head) => {
    let current = head;
    let returnArr = new Array();
    while (current !== null) {
        returnArr.push(current.val);
        current = current.next;
    }
    return returnArr;
};
// linkedListToArray(a);
const fillValues = (head, values) => {
    if (head === null)
        return;
    values.push(head.val);
    fillValues(head.next, values);
};
const reqListToArray = (head) => {
    if (head === null)
        return null;
    let returnArr = [];
    fillValues(head, returnArr);
    console.log(returnArr);
    return returnArr;
};
// reqListToArray(a);
const sumLinkedList = (head) => {
    let sum = 0;
    let current = head;
    while (current !== null) {
        sum += current.val;
        current = current.next;
    }
    console.log(sum);
    return sum;
};
// sumLinkedList(aa);
const reqSum = (head) => {
    if (head === null)
        return 0;
    let sum = reqSum(head.next) + head.val;
    console.log(sum);
    return sum;
};
// reqSum(aa);
const findLinkList = (head, target) => {
    let currentVal = head;
    while (currentVal !== null) {
        if (currentVal.val === target) {
            return true;
        }
        currentVal = currentVal.next;
    }
    return false;
};
// console.log(findLinkList(aa, 4));
const findReq = (head, target) => {
    if (head === null)
        return false;
    if (head.val === target)
        return true;
    return findReq(head.next, target);
};
// console.log(findReq(aa, 2));
const findIndexLinkedList = (head, index) => {
    let currentIndex = 0;
    let current = head;
    while (current !== null) {
        if (currentIndex === index) {
            return current.val;
        }
        else {
            current = current.next;
            currentIndex++;
        }
    }
    return null;
};
// console.log(findIndexLinkedList(aa, 2));
const recFindIndex = (head, index) => {
    if (head === null)
        return null;
    if (index === 0)
        return head.val;
    return recFindIndex(head.next, index - 1);
};
// console.log(recFindIndex(aa, 2));
// COMMON INTERVIEW QUESTION
const reverseLinkedList = (head) => {
    let currChar = head;
    let previous = null;
    while (currChar !== null) {
        const next = currChar.next;
        previous = currChar;
        currChar.next = previous;
        currChar = next;
    }
    return previous;
};
const reverserecLinkedList = (head, previous = null) => {
    if (head === null)
        return previous;
    const next = head.next;
    head.next = previous;
    return reverserecLinkedList(next, head);
};
const reversedLinkedListPractice = (head) => {
    let current = head;
    let previous = null;
    while (current !== null) {
        const next = current.next;
        previous = current;
        current.next = previous;
        current = next;
    }
    return previous;
};
// ZIPPERLIST
const zipperlist = (head1, head2) => {
    let current1 = head1;
    let current2 = head2;
    let count = 0;
    let tail = new Nums(0);
    let current = tail;
    while (current1 !== null && current2 !== null) {
        if (count % 2 === 0) {
            current.next = current2;
            current2 = current2.next;
        }
        else {
            current.next = current1;
            current1 = current2?.next;
        }
        current = current.next;
        count++;
    }
    if (current1 !== null)
        current.next = current1;
    if (current2 !== null)
        current.next = current2;
    return tail.next;
};
const returnUserInfo = (data) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(data);
        }, 2000);
    });
};
const returndata = async () => {
    try {
        const data = await returnUserInfo('async await here');
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
};
// Back to UDEMY
// Linkedlist is a bunch of values and elements that consist of head, tail and length
// Push
class LinkListNode {
    value;
    next;
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class SinglyLinkedList {
    head;
    tail;
    length;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new LinkListNode(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        let current = this.head;
        let newtail = current;
        if (this.head === null)
            return null;
        while (current?.next !== null) {
            newtail = current;
            current = current.next;
        }
        this.tail = newtail;
        this.tail.next = null;
        if (this.head === null) {
            this.head = null;
            this.tail = null;
        }
        this.length--;
        return current;
    }
    shift() {
        let current = this.head;
        if (this.head === null) {
            return null;
        }
        this.head = current.next;
        // this.tail = next;
        this.length--;
        return current;
    }
    unshift(value) {
        let newNode = new LinkListNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            newNode.next = this.head;
            this.tail = this.head;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length)
            return null;
        let current = this.head;
        let counter = 0;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, value) {
        let valueToChange = this.get(index);
        if (valueToChange !== null) {
            valueToChange.value = value;
            return this.get(index);
        }
        return 'No Value found at index';
    }
    insert(index, value) {
        if (index < 0 || index > this.length)
            return 'Index not found please try another operation';
        if (index === this.length)
            this.push(value);
        if (index === 0)
            this.push(value);
        let newNode = new LinkListNode(value);
        let previous = this.get(index - 1);
        let current = previous.next;
        previous.next = newNode;
        newNode.next = current;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index > this.length)
            return 'Value doesnt exist at this index';
        if (index === length - 1)
            this.pop();
        if (index === 0)
            this.shift();
        let valueToRemove = this.get(index);
        let previousValue = this.get(index - 1);
        previousValue.next = valueToRemove.next;
        length--;
        return valueToRemove;
    }
    // Reverse might be on there for sure
    reverse() {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let previous = null;
        let next;
        // for (let i = 0; i < this.length; i++) {
        while (current !== null) {
            console.log(current, previous, next);
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        return this;
    }
    // the print is just to see the result of reverse in a single line so i know it works
    print() {
        let arr = new Array();
        let current = this.head;
        while (current !== null) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }
}
const list = new SinglyLinkedList();
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// list.push(5);
// list.unshift(2);
// list.get(0);
// list.set(1, 'Yansh boy');
// list.insert(2, 'Naija Man');
// list.get(2);
// list.remove(16);
// console.log(list.print());
// console.log(list.reverse());
// console.log(list.print());
// call back function practice
const printGracefully = (resultText, result) => {
    return `${resultText}: ${result}`;
};
const callBackMultiply = (value1, value2, print) => {
    return print('Multiplication Result', value1 * value2);
};
// console.log(callBackMultiply(2, 2, printGracefully));
// return promise
const myPromise = (secret) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(secret);
        }, 4000);
    });
};
// myPromise('I am interviewing for Narrable')
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   });
// async practice
const asyncPractice = async (string) => {
    try {
        const data = await myPromise(string);
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
};
// asyncPractice('Practiced Async');
