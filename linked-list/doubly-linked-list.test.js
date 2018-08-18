const {
  DoublyLinkedList,
  Node,
} = require('./doubly-linked-list');

describe('doubly-linked-list', () => {
  let linkedList;
  beforeEach(() => {
    linkedList = new DoublyLinkedList();
  });

  it('should initialize with no head, or tail nodes', () => {
    expect(linkedList.head).toBe(null);
    expect(linkedList.tail).toBe(null);
  });

  it('should populate head and tail on first node addition', () => {
    linkedList.addNode(5);
    expect(linkedList.head.value).toBe(5);
    expect(linkedList.tail.value).toBe(5);
  });

  it('should add to tail on adding nodes', () => {
    linkedList.addNode(5);
    linkedList.addNode(10);
    expect(linkedList.head.value).toBe(5);
    expect(linkedList.tail.value).toBe(10);
  });

  it('should add to tail upon calling addToHead', () => {
    linkedList.addToHead(5);
    linkedList.addToHead(10);
    expect(linkedList.head.value).toBe(10);
    expect(linkedList.tail.value).toBe(5);
    expect(linkedList.tail.prev.value).toBe(10);
    expect(linkedList.head.next.value).toBe(5);
  });

  it('should have both prev and next pointers on nodes', () => {
    linkedList.addNode(5);
    linkedList.addNode(10);
    linkedList.addNode(15);
    expect(linkedList.head.prev).toBe(null);
    expect(linkedList.head.next.value).toBe(10);
    expect(linkedList.head.next.next.value).toBe(15);

    expect(linkedList.tail.next).toBe(null);
    expect(linkedList.tail.prev.value).toBe(10);
    expect(linkedList.tail.prev.prev.value).toBe(5);
  });

  it('should find nodes of a given value', () => {
    linkedList.addNode(5);
    linkedList.addNode(10);
    linkedList.addNode(15);
    const output = linkedList.findValue(10);
    const output2 = linkedList.findValue(20);

    expect(output).not.toBe(false);
    expect(output2).toBe(false);
  });

  it('should remove all nodes of a given value', () => {
    linkedList.addNode(5);
    linkedList.addNode(10);
    linkedList.addNode(15);
    linkedList.addNode(10);

    const output1 = linkedList.findValue(10);
    const removedNodes = linkedList.removeNodes(10);
    const output2 = linkedList.findValue(10);

    expect(output1).not.toBe(false);
    expect(output2).toBe(false);
  });
});
