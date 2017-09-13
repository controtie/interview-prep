const UnidirectionalGraph = require('./unidirectional-graph');

describe('unidirectional-graph.js', () => {
  let Graph;
  beforeEach(() => {
    Graph = new UnidirectionalGraph;
  });
  it('can be imported', () => {
    expect(UnidirectionalGraph).not.toEqual({});
  });

  describe('UnidirectionalGraph add', () => {
    it('on first invocation, sets passed node as root', () => {
      const node = {value: 10};
      Graph.add(node);
      expect(Graph.root).toBe(node);
    });
    it('stores added nodes in a list of references', () => {
      const one = {value: 1};
      const two = {value: 2};
      Graph.add(one);
      Graph.add(two);
      expect(Graph.nodes[1]).toBe(one);
      expect(Graph.nodes[2]).toBe(two);
      Graph.add(one);
      expect(Graph.length).toBe(2);
    });
  });

  describe('UnidirectionalGraph addEdge', () => {
    xit('returns false for two nodes that do not exist in Graph', () => {
      const one = {value: 1};
      const two = {value: 2};
      Graph.add(one);
      Graph.add(two);
      expect(Graph.addEdge(1, 3)).toBe(false);
    })
    xit('adds an edge from first param to second param', () => {
      const one = {value: 1};
      const two = {value: 2};
      Graph.add(one);
      Graph.add(two);
      Graph.addEdge(1, 2);
    });
  });

});

