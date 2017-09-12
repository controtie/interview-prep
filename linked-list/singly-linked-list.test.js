const LinkedList = require('./singly-linked-list');

describe('singly-linked-list.js', () => {
  let List;
  beforeEach(() => {
    List = new LinkedList;
  });
  it('LinkdeList can be imported', () => {
    expect(LinkedList).not.toEqual({});
  });
  it('Has head, tail, length properties', () => {
    expect(List.head).toBe(null);
    expect(List.tail).toBe(null);
    expect(List.length).toBe(0);
  });
  describe('LinkedList add', () => {
    it('First node added becomes tail and head props, length increases by 1', () => {
      const node = {text: 'first'};
      expect(List.length).toBe(0);
      List.add(node);
      expect(List.head).toBe(node);
      expect(List.tail).toBe(node);
      expect(List.length).toBe(1);
    });
    it('Second node becomes .next of tail, becomes new tail, length + 1', () => {
      const first = {text: 'first'};
      List.add(first);
      const second = {text: 'second'};
      List.add(second);
      expect(List.head).toBe(first);
      expect(List.tail).toBe(second);
      expect(List.length).toBe(2);
    });
    it('Third node becomes .next of tail, becomes new tail, length + 1, is .next.next of head', () => {
      const first = {text: 'first'};
      List.add(first);
      const second = {text: 'second'};
      List.add(second);
      const third = {text: 'third'};
      List.add(third);
      expect(List.head).toBe(first);
      expect(List.tail).toBe(third);
      expect(List.length).toBe(3);
      expect(List.head.next.next).toBe(third);
    });
  });
  describe('LinkedList remove', () => {
    describe('LinkedList.removeTail', () => {
      it('cannot remove an empty LinkedList', () => {
        List.removeTail();
        expect(List.head).toBe(null);
        expect(List.tail).toBe(null);
        expect(List.length).toBe(0);
      });
      it('removeTail on a single entried list returns to initial state', () => {
        const node = {text: 'node'};
        List.add(node);
        expect(List.head).toBe(node);
        expect(List.tail).toBe(node);
        expect(List.length).toBe(1);
        List.removeTail();
        expect(List.head).toBe(null);
        expect(List.tail).toBe(null);
        expect(List.length).toBe(0);
      });
      it('removeTail on a multi-entried list sets tail to 2nd to last node', () => {
        const first = {text: 'first'};
        List.add(first);
        const second = {text: 'second'};
        List.add(second);
        const third = {text: 'third'};
        List.add(third);
        List.removeTail();
        expect(List.tail).toBe(second);
        expect(List.length).toBe(2);
        expect(List.tail.next).toBe(undefined);
      });
    });
    describe('LinkedList.removeHead', () => {
      it('removeHead on a single entried list returns to initial state', () => {
        const node = {text: 'node'};
        List.add(node);
        expect(List.head).toBe(node);
        expect(List.tail).toBe(node);
        expect(List.length).toBe(1);
        List.removeHead();
        expect(List.head).toBe(null);
        expect(List.tail).toBe(null);
        expect(List.length).toBe(0);
      });
      it('removeHead on a multi-entried list sets head to head.next', () => {
        const first = {text: 'first'};
        List.add(first);
        const second = {text: 'second'};
        List.add(second);
        List.removeHead();
        expect(List.head).toBe(second);
        expect(List.tail).toBe(second);
        expect(List.length).toBe(1);
      });
    });
    describe('LinkedList.removeByIndex', () => {
      it('removeByIndex doesn\'t operate on non-numbers', () => {
        const first = {text: 'first'};
        List.add(first);
        const second = {text: 'second'};
        List.add(second);
        List.removeByIndex('test');
        List.removeByIndex('1');
        expect(List.length).toBe(2);
      });
      it('removeByIndex doesn\'t operate on indexes larger or smaller than the list', () => {
        const first = {text: 'first'};
        List.add(first);
        const second = {text: 'second'};
        List.add(second);
        List.removeByIndex(2);
        List.removeByIndex(-1);
        expect(List.length).toBe(2);
      });
      it('removes heads and tails appropriately', () => {
        const first = {text: 'first'};
        List.add(first);
        List.removeByIndex(0);
        expect(List.head).toBe(null);
        expect(List.tail).toBe(null);
        expect(List.length).toBe(0);

        List.add(first);
        const second = {text: 'second'};
        List.add(second);
        List.removeByIndex(1);
        expect(List.head).toBe(first);
        expect(List.tail).toBe(first);
        expect(List.length).toBe(1);
      });
      it('remove arbitrary indexes appropriately', () => {
        const first = {text: 'first'};
        List.add(first);
        const second = {text: 'second'};
        List.add(second);
        const third = {text: 'third'};
        List.add(third);
        List.removeByIndex(1);
        expect(List.head).toBe(first);
        expect(List.tail).toBe(third);
        expect(List.head.next).toBe(third);
        expect(List.length).toBe(2);
      });
    });
  });
});

