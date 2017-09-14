const Trie = require('./trie');

describe('Trie', () => {
  let Tree;
  beforeEach(() => {
    Tree = new Trie;
  });

  it('can be imported', () => {
    expect(Trie).not.toEqual({});
  });
  
  it('constructs a singly linked tree on first word insertion', () => {
    Tree.insert('abc');
    expect(Tree.root.a.letter).toEqual('a');
    expect(Tree.root.a.b.letter).toEqual('b');
    expect(Tree.root.a.b.c.letter).toEqual('c');
    expect(Tree.root.a.b.c.d).toEqual(undefined);
  });
  
  it('constructs multiple words on shared branches', () => {
    Tree.insert('abc');
    Tree.insert('aaa');
    Tree.insert('abd');
    Tree.insert('acb');
    Tree.insert('xyz');
    expect(Tree.root.a.letter).toEqual('a');
    expect(Tree.root.a.a.letter).toEqual('a');
    expect(Tree.root.a.a.a.letter).toEqual('a');
    expect(Tree.root.a.b.letter).toEqual('b');
    expect(Tree.root.a.b.d.letter).toEqual('d');
    expect(Tree.root.a.b.c.letter).toEqual('c');
    expect(Tree.root.a.c.letter).toEqual('c');
    expect(Tree.root.a.c.b.letter).toEqual('b');
    expect(Tree.root.x.letter).toEqual('x');
    expect(Tree.root.x.y.letter).toEqual('y');
    expect(Tree.root.x.y.z.letter).toEqual('z');
  });

  it('correctly searches for stored words', () => {
    Tree.insert('abc');
    Tree.insert('abd');
    Tree.insert('acb');
    Tree.insert('xyz');
    expect(Tree.retrieve('abc')).toBe(true);
    expect(Tree.retrieve('abd')).toBe(true);
    expect(Tree.retrieve('acb')).toBe(true);
    expect(Tree.retrieve('xyz')).toBe(true);
    expect(Tree.retrieve('abb')).toBe(false);
    expect(Tree.retrieve('ccc')).toBe(false);
  });

  it('correctly gives remaining options for words', () => {
    Tree.insert('aaaab');
    Tree.insert('aaaac');
    Tree.insert('aaaaa');
    Tree.insert('aacab');
    expect(Tree.getRemainingOptions('aa')).toEqual(
      ['aaaab', 'aaaac', 'aaaaa', 'aacab']
    );
    
  });
});
