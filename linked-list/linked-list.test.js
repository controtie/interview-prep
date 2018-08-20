const LinkedList = require('./singly-linked-list');
const {
  getKthElement,
  sharesIntersection,
} = require('./linked-list');

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

  describe('intersection', () => {
    it('should detect shared nodes between linked lists', () => {
      let firstList = new LinkedList();
      let secondList = new LinkedList();

      const node1 = {text: 'first'};
      const node2 = {text: 'second'};
      const node3 = {text: 'third'};
      const node4 = {text: 'fourth'};

      firstList.add(node1);
      secondList.add(node1);
      secondList.add(node2);
      secondList.add(node3);
      secondList.add(node4);

      const output = sharesIntersection(firstList, secondList);

      expect(output).toBe(true);
    });

    it('should not detect nodes between linked lists with no shared references', () => {
      let firstList = new LinkedList();
      let secondList = new LinkedList();

      const node1 = {text: 'first'};
      const node2 = {text: 'second'};
      const node3 = {text: 'third'};
      const node4 = {text: 'fourth'};

      const nodeSet1 = {text: 'first'};
      const nodeSet2 = {text: 'second'};
      const nodeSet3 = {text: 'third'};
      const nodeSet4 = {text: 'fourth'};

      firstList.add(node1);
      firstList.add(node2);
      firstList.add(node3);
      firstList.add(node4);

      secondList.add(nodeSet1);
      secondList.add(nodeSet2);
      secondList.add(nodeSet3);
      secondList.add(nodeSet4);

      const output = sharesIntersection(firstList, secondList);

      expect(output).toBe(false);
    });
  });
});


