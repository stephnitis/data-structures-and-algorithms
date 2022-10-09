'use strict';

// Require our linked list implementation
const LinkedList = require('../index');
const {zipLists} = require('../zip-lists');

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
    expect(list.includes(42)).toEqual(false);
    expect(list.includes(2)).toEqual(true);
  });

});

describe('Linked-List-Zip', () => {
  let listOne = new LinkedList();
  let listTwo = new LinkedList();
  listOne.insert(3);
  listOne.insert(2);
  listOne.insert(1);
  listTwo.insert(10);
  listTwo.insert(9);
  listTwo.insert(8);
  zipLists(listOne, listTwo).toString();
  expect().stringContaining('{ 1 } ->{ 8 } ->{ 2 } ->{ 9 } ->{ 3 } ->{ 10 } ->NULL');

});

// Can successfully instantiate an empty linked list
// Can properly insert into the linked list
// The head property will properly point to the first node in the linked list
// Can properly insert multiple nodes into the linked list
// Will return true when finding a value within the linked list that exists
// Will return false when searching for a value in the linked list that does not exist
// Can properly return a collection of all the values that exist in the linked list


//toBeInstanceOf(Class) <<
