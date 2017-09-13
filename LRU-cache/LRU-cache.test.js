const LRUCache = require('./LRU-cache').LRUCache;
const LinkedList = require('./LRU-cache').LinkedList;

describe('LRU Cache', () => {
  let Cache;
  let List;
  beforeEach(() => {
    Cache = LRUCache();
    List = LinkedList(3);
  });

  describe('LinkedList', () => {
    describe('LinkedList add', () => {
      it('correctly adds new values', () => {
        List.add(5);
        expect(List.head.value).toBe(5);
        List.add(2);
        expect(List.head.value).toBe(2);
        expect(List.tail.value).toBe(5);
        expect(List.tail.prev.value).toBe(2);
        expect(List.head.next.value).toBe(5);
      });
    });
    describe('LinkedList remove', () => {
      it('correctly removes new values', () => {
        List.add(3);
        List.add(2);
        List.add(1);
        List.remove(2);
        expect(List.head.value).toBe(1);
        expect(List.tail.value).toBe(3);
        expect(List.head.next.value).toBe(3);
        expect(List.tail.prev.value).toBe(1);
      });
    });
    describe('LinkedList removeTail', () => {
      it('correctly removes new values', () => {
        List.add(3);
        List.add(2);
        List.add(1);
        expect(List.length).toBe(3);
        List.removeTail();
        expect(List.head.value).toBe(1);
        expect(List.tail.value).toBe(2);
        expect(List.tail.prev.value).toBe(1);
        expect(List.tail.next).toBe(null);
        expect(List.length).toBe(2);
        List.removeTail();
        expect(List.head.value).toBe(List.tail.value);
        List.removeTail();
        expect(List.head).toBe(null);
        expect(List.tail).toBe(null);
        expect(List.length).toBe(0);
      });
    });
  });

  it('can be imported', () => {
    expect(LRUCache).not.toBe({});
  });
  describe('LRU Cache initialization', () => {
  });
  describe('LRU Cache addToStorage', () => {
    it('correctly adds new values to storage', () => {
      Cache.addToStorage('a', 'one');
      expect(Cache.storage['a']).toBe('one');
    });
  });
  describe('LRU Cache removeFromStorage', () => {
    it('correctly removes values from storage', () => {
      Cache.addToStorage('a', 'one');
      expect(Cache.storage['a']).toBe('one');
      Cache.removeFromStorage('a');
      expect(Cache.storage['a']).toBe(undefined);
      expect(Cache.removeFromStorage('b')).toBe(false);
    });
  });
  describe('LRU Cache add', () => {
    it('adds new values to storage and queue', () => {
      Cache.add('a', 'one');
      Cache.add('b', 'two');
      Cache.add('c', 'three');
      expect(Cache.storage['a']).toBe('one');
      expect(Cache.storage['b']).toBe('two');
      expect(Cache.storage['c']).toBe('three');
      expect(Cache.list.head.value).toBe('c');
      expect(Cache.list.tail.value).toBe('a');
      expect(Cache.list.head.next.value).toBe('b');
    });
  });

});

