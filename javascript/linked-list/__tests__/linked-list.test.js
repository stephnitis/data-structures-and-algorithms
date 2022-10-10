'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('Can successfully instantiate an empty linked list', () => {
    let list = new LinkedList();
    expect(list).toBeInstanceOf(LinkedList);
    expect(list.head).toBeNull();
  });

  it('Can properly insert into the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(1);
    // expect.objectContaining({value: 1});
  });

  it('The head property will properly point to the first node in the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    expect(list.head.value).toEqual(1);
    list.insert(2);
    expect(list.head.value).toEqual(2);
    list.insert(3);
    expect(list.head.value).toEqual(3);
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(1);
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    let list = new LinkedList();
    list.insert(2);
    expect(list.includes(2)).toEqual(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    let list = new LinkedList();
    list.insert(2);
    expect(list.includes(42)).toEqual(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    let listCollection = list.toString();
    expect(listCollection).toEqual('{ 3 } ->{ 2 } ->{ 1 } ->NULL');
  });

  it('Can successfully add a node to the end of the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.add(2);
    expect(list.head.next.value).toEqual(2);
  });

  // it('Can successfully add multiple nodes to the end of a linked list', () => {
  //   let list = new LinkedList();
  //   expect(list.head.next.next).toBeFalsy();
  // });

  it('Can successfully insert a node before a node located i the middle of a linked list', () => {
    let list = new LinkedList();
    list.insert(2);
    list.insert(4);
    list.insert(5);
    list.insertBefore(2, 3);

    expect(list.head.next.value).toEqual(4);
    expect(list.head.next.next.value).toEqual(3);
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    let list = new LinkedList();
    list.insert(2);
    list.insertBefore(2, 1);
    expect(list.head.value).toEqual(1);
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    let list = new LinkedList();
    list.insert(2);
    list.insert(4);
    list.insert(5);
    list.insertAfter(4, 3);

    expect(list.head.next.value).toEqual(4);
    expect(list.head.next.next.value).toEqual(3);

  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    let list = new LinkedList();
    list.insert(3);
    list.insert(4);
    list.insertAfter(3, 2);

    expect(list.head.next.value).toEqual(3);
    expect(list.head.next.next.value).toEqual(2);
  });

  it('Where k is greater than the length of the linked list', () => {
    let list = new LinkedList();
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);
    let testCase = list.kthFromEnd(6);
    expect(testCase).toEqual('Exception');
  });

  it('Where k and the length of the list are the same', () => {
    let list = new LinkedList();
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);
    let testCase = list.kthFromEnd(4);
    expect(testCase).toEqual('Exception');
  });

  it('Where k is not a positive integer', () => {
    let list = new LinkedList();
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);
    let testCase = list.kthFromEnd(-6);
    expect(testCase).toEqual('Exception');
  });

  it('Where the linked list is of a size 1', () => {
    let list = new LinkedList();
    list.insert(1);
    let testCase = list.kthFromEnd(1);
    expect(testCase).toEqual('Exception');
  });

  it('Happy Path where k is not at the end, but somewhere in the middle of the linked list', () => {
    let list = new LinkedList();
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);
    let testCase = list.kthFromEnd(2);
    expect(testCase).toEqual(4);
  });

  // it('', () => {
  //   let list = new LinkedList();
  //   list.insert();
  //   expect().toEqual();
  // });
});
