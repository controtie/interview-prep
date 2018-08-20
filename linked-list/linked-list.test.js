const LinkedList = require('./singly-linked-list');
const { getKthElement } = require('./linked-list');

// 1. Remove the k-th to last element in a singly linked list

describe('linked-lists', () => {
  describe('get k-th to last element', () => {
    it('should retrieve the 2nd to last element, when k = 2', () => {
      const linkedList = new LinkedList();
      const node1 = {text: 'first'};
      const node2 = {text: 'second'};
      const node3 = {text: 'third'};
      const node4 = {text: 'fourth'};

      linkedList.add(node1);
      linkedList.add(node2);
      linkedList.add(node3);
      linkedList.add(node4);

      const output = getKthElement(linkedList, 2);

      const expectedOutput = 'third';

      expect(output && output.text).toBe(expectedOutput);
    });

    it('should retrieve the 4th to last element, when k = 4', () => {
      const linkedList = new LinkedList();
      const node1 = {text: 'first'};
      const node2 = {text: 'second'};
      const node3 = {text: 'third'};
      const node4 = {text: 'fourth'};

      linkedList.add(node1);
      linkedList.add(node2);
      linkedList.add(node3);
      linkedList.add(node4);

      const output = getKthElement(linkedList, 4);

      const expectedOutput = 'first';

      expect(output && output.text).toBe(expectedOutput);
    });

    it('should not retrieve elements, when k is greater than list length', () => {
      const linkedList = new LinkedList();
      const node1 = {text: 'first'};
      const node2 = {text: 'second'};
      const node3 = {text: 'third'};
      const node4 = {text: 'fourth'};

      linkedList.add(node1);
      linkedList.add(node2);
      linkedList.add(node3);
      linkedList.add(node4);

      const output = getKthElement(linkedList, 5);

      const expectedOutput = null;

      expect(output).toBe(expectedOutput);
    });
  });
});


