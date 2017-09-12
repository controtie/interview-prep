const BinaryTree = require('./binary-tree');

describe('binary-tree.js', () => {
  let Tree;
  beforeEach(() => {
    Tree = BinaryTree();
  });
  it('can be imported', () => {
    expect(BinaryTree).not.toEqual({});
  });
  it('initializes with an empty root node', () => {
    expect(Tree.root).toBe(null);
  });
  describe('BinaryTree add', () => {
    it('adds the first node as root', () => {
      const node = { value: 5, left: null, right: null };
      Tree.add(node);
      expect(Tree.root).toBe(node);
    });
    it('rejects duplicate \'value\' entries', () => {
      const node = { value: 5, left: null, right: null };
      const duplicate = { value: 5, left: null, right: null };
      Tree.add(node);
      Tree.add(duplicate);
      expect(Tree.root).toBe(node);
      expect(Tree.root.left).toBe(null);
      expect(Tree.root.right).toBe(null);
    })
    it('adds subsequent nodes in the binary tree pattern', () => {
      const five = { value: 5, left: null, right: null };
      const four = { value: 4, left: null, right: null };
      const seven = { value: 7, left: null, right: null };
      const six = { value: 6, left: null, right: null };
      const eight= { value: 8, left: null, right: null };
      Tree.add(five);
      Tree.add(four);
      expect(Tree.root.right).toBe(null);
      expect(Tree.root.left).toBe(four);
      Tree.add(seven);
      expect(Tree.root.right).toBe(seven);
      Tree.add(six);
      expect(Tree.root.right.left).toBe(six);
      Tree.add(eight);
      expect(Tree.root.right.right).toBe(eight);
    });
    it('handles negative number entries correctly', () => {
      const zero = { value: 0, left: null, right: null };
      const one = { value: 1, left: null, right: null };
      const negOne = { value: -1, left: null, right: null };
      const negTwo = { value: -2, left: null, right: null };
      const negThree = { value: -3, left: null, right: null };
      Tree.add(zero);
      Tree.add(one);
      Tree.add(negTwo);
      Tree.add(negOne);
      Tree.add(negThree);
      expect(Tree.root).toBe(zero);
      expect(Tree.root.right).toBe(one);
      expect(Tree.root.left).toBe(negTwo);
      expect(Tree.root.left.right).toBe(negOne);
      expect(Tree.root.left.left).toBe(negThree);

    });
  });
  describe('BinaryTree search', () => {
    it('returns true for found results in a Binary tree', () => {
      const five = { value: 5, left: null, right: null };
      const four = { value: 4, left: null, right: null };
      const seven = { value: 7, left: null, right: null };
      const six = { value: 6, left: null, right: null };
      const eight= { value: 8, left: null, right: null };
      Tree.add(five);
      Tree.add(four);
      Tree.add(seven);
      Tree.add(six);
      Tree.add(eight);
      expect(Tree.find(5)).toBe(five);
      expect(Tree.find(4)).toBe(four);
      expect(Tree.find(7)).toBe(seven);
      expect(Tree.find(6)).toBe(six);
      expect(Tree.find(8)).toBe(eight);
    });
    it('returns false for not-found results in a Binary tree', () => {
      const five = { value: 5, left: null, right: null };
      const four = { value: 4, left: null, right: null };
      Tree.add(five);
      Tree.add(four);
      expect(Tree.find(5)).toBe(five);
      expect(Tree.find(4)).toBe(four);
      expect(Tree.find(7)).toBe(false);
    });
  });
  describe('BinaryTree remove', () => {
    it('cannot remove empty Binary trees, will reset Binary tree when removing root', () => {
      const five = { value: 5, left: null, right: null };
      const four = { value: 4, left: null, right: null };
      const seven = { value: 7, left: null, right: null };
      const six = { value: 6, left: null, right: null };
      const eight= { value: 8, left: null, right: null };
      Tree.remove();
      expect(Tree.root).toBe(null);
      Tree.add(five);
      Tree.remove(5);
      expect(Tree.root).toBe(null);
    });
    it('removes binary tree nodes correctly', () => {
      const five = { value: 5, left: null, right: null };
      const four = { value: 4, left: null, right: null };
      const seven = { value: 7, left: null, right: null };
      const six = { value: 6, left: null, right: null };
      const eight= { value: 8, left: null, right: null };
      Tree.add(five);
      Tree.add(four);
      Tree.add(seven);
      Tree.add(six);
      Tree.add(eight);
      Tree.remove(7);
      expect(Tree.find(7)).toBe(false);
      expect(Tree.root.right).toBe(six);
      expect(Tree.root.right.right).toBe(eight);
    });
  });
});
