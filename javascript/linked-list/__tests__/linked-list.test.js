'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('Can successfully instantiate an empty linked list', () => {
    expect(new LinkedList()).toBeInstanceOf(LinkedList);
  });

  it('Can properly insert into the linked list', () => {
    let list = new LinkedList();
    list.add(1);
    expect.objectContaining({value: 1});
  });

});

// Can successfully instantiate an empty linked list
// Can properly insert into the linked list
// The head property will properly point to the first node in the linked list
// Can properly insert multiple nodes into the linked list
// Will return true when finding a value within the linked list that exists
// Will return false when searching for a value in the linked list that does not exist
// Can properly return a collection of all the values that exist in the linked list


//toBeInstanceOf(Class) <<
