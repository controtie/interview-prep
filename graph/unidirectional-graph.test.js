// const UnidirectionalGraph = require('./unidirectional-graph');
const UnidirectionalGraph = require('./unidirectional-graph-2');

describe.only('unidirectional-graph.js', () => {
  let Graph;
  beforeEach(() => {
    Graph = new UnidirectionalGraph();
  });
  it('can be imported', () => {
    expect(UnidirectionalGraph).not.toEqual({});
  });

  describe('UnidirectionalGraph add', () => {
    it('on first invocation, sets passed node as root', () => {
      Graph.add(5);
      expect(Graph.root.value).toBe(5);
    });
    it('stores added nodes in a list of references', () => {
      Graph.add(1);
      Graph.add(2);
      expect(Graph.nodes[1].value).toBe(1);
      expect(Graph.nodes[2].value).toBe(2);
      Graph.add(1);
      expect(Graph.length).toBe(2);
    });
  });

  describe('UnidirectionalGraph addEdge', () => {
    it('returns false for two nodes that do not exist in Graph', () => {
      Graph.add(1);
      Graph.add(2);
      expect(Graph.addEdge(1, 3)).toBe(false);
    })
    it('adds an edge from first param to second param', () => {
      Graph.add(1);
      Graph.add(2);
      Graph.addEdge(1, 2);
      const secondNode = Graph.nodes[1].friends.find((node) => node.value === 2);
      expect(secondNode.value).toBe(2);
      Graph.addEdge(2, 1);
      const firstNode = Graph.nodes[2].friends.find((node) => node.value === 1);
      expect(firstNode.value).toBe(1);
    });
  });

  describe('UnidirectionalGraph remove', () => {
    it('removes a node from the graph', () => {
      Graph.add(1);
      Graph.add(2);
      Graph.add(3);
      Graph.addEdge(1, 2);
      Graph.addEdge(2, 3);
      expect(Graph.isTraversable(1, 3)).toBe(true);
      Graph.remove(2);
    });
  });

  describe('UnidirectionalGraph isTraversable', () => {
    it('return true if two points are connected/traversable, false otherwise', () => {
      Graph.add(1);
      Graph.add(2);
      Graph.add(3);
      Graph.addEdge(1, 2);
      expect(Graph.isTraversable(1, 2)).toBe(true);
      expect(Graph.isTraversable(2, 1)).toBe(false);
      Graph.addEdge(2, 3);
      expect(Graph.isTraversable(1, 3)).toBe(true);
    });
  });

});

