"use strict";
exports.id = 7227;
exports.ids = [7227];
exports.modules = {

/***/ 36936:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ addHtmlLabel)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80837);




function addHtmlLabel(root, node) {
  var fo = root.append('foreignObject').attr('width', '100000');

  var div = fo.append('xhtml:div');
  div.attr('xmlns', 'http://www.w3.org/1999/xhtml');

  var label = node.label;
  switch (typeof label) {
    case 'function':
      div.insert(label);
      break;
    case 'object':
      // Currently we assume this is a DOM object.
      div.insert(function () {
        return label;
      });
      break;
    default:
      div.html(label);
  }

  _util_js__WEBPACK_IMPORTED_MODULE_0__/* .applyStyle */ .bg(div, node.labelStyle);
  div.style('display', 'inline-block');
  // Fix for firefox
  div.style('white-space', 'nowrap');

  var client = div.node().getBoundingClientRect();
  fo.attr('width', client.width).attr('height', client.height);

  return fo;
}


/***/ }),

/***/ 80837:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$p": () => (/* binding */ applyClass),
/* harmony export */   "O1": () => (/* binding */ edgeToId),
/* harmony export */   "WR": () => (/* binding */ applyTransition),
/* harmony export */   "bF": () => (/* binding */ isSubgraph),
/* harmony export */   "bg": () => (/* binding */ applyStyle)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54098);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88987);


// Public utility functions


/*
 * Returns true if the specified node in the graph is a subgraph node. A
 * subgraph node is one that contains other nodes.
 */
function isSubgraph(g, v) {
  return !!g.children(v).length;
}

function edgeToId(e) {
  return escapeId(e.v) + ':' + escapeId(e.w) + ':' + escapeId(e.name);
}

var ID_DELIM = /:/g;
function escapeId(str) {
  return str ? String(str).replace(ID_DELIM, '\\:') : '';
}

function applyStyle(dom, styleFn) {
  if (styleFn) {
    dom.attr('style', styleFn);
  }
}

function applyClass(dom, classFn, otherClasses) {
  if (classFn) {
    dom.attr('class', classFn).attr('class', otherClasses + ' ' + dom.attr('class'));
  }
}

function applyTransition(selection, g) {
  var graph = g.graph();

  if (lodash_es__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(graph)) {
    var transition = graph.transition;
    if (lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z(transition)) {
      return transition(selection);
    }
  }

  return selection;
}


/***/ }),

/***/ 21640:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "bK": () => (/* reexport */ layout)
});

// UNUSED EXPORTS: acyclic, normalize, rank

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/forEach.js
var forEach = __webpack_require__(79156);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqueId.js
var uniqueId = __webpack_require__(59220);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/has.js + 1 modules
var has = __webpack_require__(27431);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/constant.js
var constant = __webpack_require__(6964);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flatten.js
var flatten = __webpack_require__(23351);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/map.js
var map = __webpack_require__(55247);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/range.js + 2 modules
var range = __webpack_require__(57170);
// EXTERNAL MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/graphlib/index.js
var graphlib = __webpack_require__(76003);
;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre/data/list.js
/*
 * Simple doubly linked list implementation derived from Cormen, et al.,
 * "Introduction to Algorithms".
 */



class List {
  constructor() {
    var sentinel = {};
    sentinel._next = sentinel._prev = sentinel;
    this._sentinel = sentinel;
  }
  dequeue() {
    var sentinel = this._sentinel;
    var entry = sentinel._prev;
    if (entry !== sentinel) {
      unlink(entry);
      return entry;
    }
  }
  enqueue(entry) {
    var sentinel = this._sentinel;
    if (entry._prev && entry._next) {
      unlink(entry);
    }
    entry._next = sentinel._next;
    sentinel._next._prev = entry;
    sentinel._next = entry;
    entry._prev = sentinel;
  }
  toString() {
    var strs = [];
    var sentinel = this._sentinel;
    var curr = sentinel._prev;
    while (curr !== sentinel) {
      strs.push(JSON.stringify(curr, filterOutLinks));
      curr = curr._prev;
    }
    return '[' + strs.join(', ') + ']';
  }
}

function unlink(entry) {
  entry._prev._next = entry._next;
  entry._next._prev = entry._prev;
  delete entry._next;
  delete entry._prev;
}

function filterOutLinks(k, v) {
  if (k !== '_next' && k !== '_prev') {
    return v;
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre/greedy-fas.js




/*
 * A greedy heuristic for finding a feedback arc set for a graph. A feedback
 * arc set is a set of edges that can be removed to make a graph acyclic.
 * The algorithm comes from: P. Eades, X. Lin, and W. F. Smyth, "A fast and
 * effective heuristic for the feedback arc set problem." This implementation
 * adjusts that from the paper to allow for weighted edges.
 */


var DEFAULT_WEIGHT_FN = constant/* default */.Z(1);

function greedyFAS(g, weightFn) {
  if (g.nodeCount() <= 1) {
    return [];
  }
  var state = buildState(g, weightFn || DEFAULT_WEIGHT_FN);
  var results = doGreedyFAS(state.graph, state.buckets, state.zeroIdx);

  // Expand multi-edges
  return flatten/* default */.Z(
    map/* default */.Z(results, function (e) {
      return g.outEdges(e.v, e.w);
    })
  );
}

function doGreedyFAS(g, buckets, zeroIdx) {
  var results = [];
  var sources = buckets[buckets.length - 1];
  var sinks = buckets[0];

  var entry;
  while (g.nodeCount()) {
    while ((entry = sinks.dequeue())) {
      removeNode(g, buckets, zeroIdx, entry);
    }
    while ((entry = sources.dequeue())) {
      removeNode(g, buckets, zeroIdx, entry);
    }
    if (g.nodeCount()) {
      for (var i = buckets.length - 2; i > 0; --i) {
        entry = buckets[i].dequeue();
        if (entry) {
          results = results.concat(removeNode(g, buckets, zeroIdx, entry, true));
          break;
        }
      }
    }
  }

  return results;
}

function removeNode(g, buckets, zeroIdx, entry, collectPredecessors) {
  var results = collectPredecessors ? [] : undefined;

  forEach/* default */.Z(g.inEdges(entry.v), function (edge) {
    var weight = g.edge(edge);
    var uEntry = g.node(edge.v);

    if (collectPredecessors) {
      results.push({ v: edge.v, w: edge.w });
    }

    uEntry.out -= weight;
    assignBucket(buckets, zeroIdx, uEntry);
  });

  forEach/* default */.Z(g.outEdges(entry.v), function (edge) {
    var weight = g.edge(edge);
    var w = edge.w;
    var wEntry = g.node(w);
    wEntry['in'] -= weight;
    assignBucket(buckets, zeroIdx, wEntry);
  });

  g.removeNode(entry.v);

  return results;
}

function buildState(g, weightFn) {
  var fasGraph = new graphlib/* Graph */.k();
  var maxIn = 0;
  var maxOut = 0;

  forEach/* default */.Z(g.nodes(), function (v) {
    fasGraph.setNode(v, { v: v, in: 0, out: 0 });
  });

  // Aggregate weights on nodes, but also sum the weights across multi-edges
  // into a single edge for the fasGraph.
  forEach/* default */.Z(g.edges(), function (e) {
    var prevWeight = fasGraph.edge(e.v, e.w) || 0;
    var weight = weightFn(e);
    var edgeWeight = prevWeight + weight;
    fasGraph.setEdge(e.v, e.w, edgeWeight);
    maxOut = Math.max(maxOut, (fasGraph.node(e.v).out += weight));
    maxIn = Math.max(maxIn, (fasGraph.node(e.w)['in'] += weight));
  });

  var buckets = range/* default */.Z(maxOut + maxIn + 3).map(function () {
    return new List();
  });
  var zeroIdx = maxIn + 1;

  forEach/* default */.Z(fasGraph.nodes(), function (v) {
    assignBucket(buckets, zeroIdx, fasGraph.node(v));
  });

  return { graph: fasGraph, buckets: buckets, zeroIdx: zeroIdx };
}

function assignBucket(buckets, zeroIdx, entry) {
  if (!entry.out) {
    buckets[0].enqueue(entry);
  } else if (!entry['in']) {
    buckets[buckets.length - 1].enqueue(entry);
  } else {
    buckets[entry.out - entry['in'] + zeroIdx].enqueue(entry);
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre/acyclic.js





function run(g) {
  var fas = g.graph().acyclicer === 'greedy' ? greedyFAS(g, weightFn(g)) : dfsFAS(g);
  forEach/* default */.Z(fas, function (e) {
    var label = g.edge(e);
    g.removeEdge(e);
    label.forwardName = e.name;
    label.reversed = true;
    g.setEdge(e.w, e.v, label, uniqueId/* default */.Z('rev'));
  });

  function weightFn(g) {
    return function (e) {
      return g.edge(e).weight;
    };
  }
}

function dfsFAS(g) {
  var fas = [];
  var stack = {};
  var visited = {};

  function dfs(v) {
    if (has/* default */.Z(visited, v)) {
      return;
    }
    visited[v] = true;
    stack[v] = true;
    forEach/* default */.Z(g.outEdges(v), function (e) {
      if (has/* default */.Z(stack, e.w)) {
        fas.push(e);
      } else {
        dfs(e.w);
      }
    });
    delete stack[v];
  }

  forEach/* default */.Z(g.nodes(), dfs);
  return fas;
}

function undo(g) {
  forEach/* default */.Z(g.edges(), function (e) {
    var label = g.edge(e);
    if (label.reversed) {
      g.removeEdge(e);

      var forwardName = label.forwardName;
      delete label.reversed;
      delete label.forwardName;
      g.setEdge(e.w, e.v, label, forwardName);
    }
  });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge.js + 6 modules
var merge = __webpack_require__(64546);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/pick.js + 4 modules
var pick = __webpack_require__(77524);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/defaults.js
var defaults = __webpack_require__(70374);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/max.js + 1 modules
var max = __webpack_require__(94423);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/last.js
var lodash_es_last = __webpack_require__(82593);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/mapValues.js
var mapValues = __webpack_require__(85035);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isUndefined.js
var isUndefined = __webpack_require__(71180);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/min.js
var lodash_es_min = __webpack_require__(48791);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/now.js
var now = __webpack_require__(89200);
;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre/util.js





/*
 * Adds a dummy node to the graph and return v.
 */
function addDummyNode(g, type, attrs, name) {
  var v;
  do {
    v = uniqueId/* default */.Z(name);
  } while (g.hasNode(v));

  attrs.dummy = type;
  g.setNode(v, attrs);
  return v;
}

/*
 * Returns a new graph with only simple edges. Handles aggregation of data
 * associated with multi-edges.
 */
function simplify(g) {
  var simplified = new graphlib/* Graph */.k().setGraph(g.graph());
  forEach/* default */.Z(g.nodes(), function (v) {
    simplified.setNode(v, g.node(v));
  });
  forEach/* default */.Z(g.edges(), function (e) {
    var simpleLabel = simplified.edge(e.v, e.w) || { weight: 0, minlen: 1 };
    var label = g.edge(e);
    simplified.setEdge(e.v, e.w, {
      weight: simpleLabel.weight + label.weight,
      minlen: Math.max(simpleLabel.minlen, label.minlen),
    });
  });
  return simplified;
}

function asNonCompoundGraph(g) {
  var simplified = new graphlib/* Graph */.k({ multigraph: g.isMultigraph() }).setGraph(g.graph());
  forEach/* default */.Z(g.nodes(), function (v) {
    if (!g.children(v).length) {
      simplified.setNode(v, g.node(v));
    }
  });
  forEach/* default */.Z(g.edges(), function (e) {
    simplified.setEdge(e, g.edge(e));
  });
  return simplified;
}

function successorWeights(g) {
  var weightMap = _.map(g.nodes(), function (v) {
    var sucs = {};
    _.forEach(g.outEdges(v), function (e) {
      sucs[e.w] = (sucs[e.w] || 0) + g.edge(e).weight;
    });
    return sucs;
  });
  return _.zipObject(g.nodes(), weightMap);
}

function predecessorWeights(g) {
  var weightMap = _.map(g.nodes(), function (v) {
    var preds = {};
    _.forEach(g.inEdges(v), function (e) {
      preds[e.v] = (preds[e.v] || 0) + g.edge(e).weight;
    });
    return preds;
  });
  return _.zipObject(g.nodes(), weightMap);
}

/*
 * Finds where a line starting at point ({x, y}) would intersect a rectangle
 * ({x, y, width, height}) if it were pointing at the rectangle's center.
 */
function intersectRect(rect, point) {
  var x = rect.x;
  var y = rect.y;

  // Rectangle intersection algorithm from:
  // http://math.stackexchange.com/questions/108113/find-edge-between-two-boxes
  var dx = point.x - x;
  var dy = point.y - y;
  var w = rect.width / 2;
  var h = rect.height / 2;

  if (!dx && !dy) {
    throw new Error('Not possible to find intersection inside of the rectangle');
  }

  var sx, sy;
  if (Math.abs(dy) * w > Math.abs(dx) * h) {
    // Intersection is top or bottom of rect.
    if (dy < 0) {
      h = -h;
    }
    sx = (h * dx) / dy;
    sy = h;
  } else {
    // Intersection is left or right of rect.
    if (dx < 0) {
      w = -w;
    }
    sx = w;
    sy = (w * dy) / dx;
  }

  return { x: x + sx, y: y + sy };
}

/*
 * Given a DAG with each node assigned "rank" and "order" properties, this
 * function will produce a matrix with the ids of each node.
 */
function buildLayerMatrix(g) {
  var layering = map/* default */.Z(range/* default */.Z(util_maxRank(g) + 1), function () {
    return [];
  });
  forEach/* default */.Z(g.nodes(), function (v) {
    var node = g.node(v);
    var rank = node.rank;
    if (!isUndefined/* default */.Z(rank)) {
      layering[rank][node.order] = v;
    }
  });
  return layering;
}

/*
 * Adjusts the ranks for all nodes in the graph such that all nodes v have
 * rank(v) >= 0 and at least one node w has rank(w) = 0.
 */
function normalizeRanks(g) {
  var min = lodash_es_min/* default */.Z(
    map/* default */.Z(g.nodes(), function (v) {
      return g.node(v).rank;
    })
  );
  forEach/* default */.Z(g.nodes(), function (v) {
    var node = g.node(v);
    if (has/* default */.Z(node, 'rank')) {
      node.rank -= min;
    }
  });
}

function removeEmptyRanks(g) {
  // Ranks may not start at 0, so we need to offset them
  var offset = lodash_es_min/* default */.Z(
    map/* default */.Z(g.nodes(), function (v) {
      return g.node(v).rank;
    })
  );

  var layers = [];
  forEach/* default */.Z(g.nodes(), function (v) {
    var rank = g.node(v).rank - offset;
    if (!layers[rank]) {
      layers[rank] = [];
    }
    layers[rank].push(v);
  });

  var delta = 0;
  var nodeRankFactor = g.graph().nodeRankFactor;
  forEach/* default */.Z(layers, function (vs, i) {
    if (isUndefined/* default */.Z(vs) && i % nodeRankFactor !== 0) {
      --delta;
    } else if (delta) {
      forEach/* default */.Z(vs, function (v) {
        g.node(v).rank += delta;
      });
    }
  });
}

function addBorderNode(g, prefix, rank, order) {
  var node = {
    width: 0,
    height: 0,
  };
  if (arguments.length >= 4) {
    node.rank = rank;
    node.order = order;
  }
  return addDummyNode(g, 'border', node, prefix);
}

function util_maxRank(g) {
  return max/* default */.Z(
    map/* default */.Z(g.nodes(), function (v) {
      var rank = g.node(v).rank;
      if (!isUndefined/* default */.Z(rank)) {
        return rank;
      }
    })
  );
}

/*
 * Partition a collection into two groups: `lhs` and `rhs`. If the supplied
 * function returns true for an entry it goes into `lhs`. Otherwise it goes
 * into `rhs.
 */
function partition(collection, fn) {
  var result = { lhs: [], rhs: [] };
  forEach/* default */.Z(collection, function (value) {
    if (fn(value)) {
      result.lhs.push(value);
    } else {
      result.rhs.push(value);
    }
  });
  return result;
}

/*
 * Returns a new function that wraps `fn` with a timer. The wrapper logs the
 * time it takes to execute the function.
 */
function util_time(name, fn) {
  var start = now/* default */.Z();
  try {
    return fn();
  } finally {
    console.log(name + ' time: ' + (now/* default */.Z() - start) + 'ms');
  }
}

function notime(name, fn) {
  return fn();
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre/add-border-segments.js





function addBorderSegments(g) {
  function dfs(v) {
    var children = g.children(v);
    var node = g.node(v);
    if (children.length) {
      forEach/* default */.Z(children, dfs);
    }

    if (has/* default */.Z(node, 'minRank')) {
      node.borderLeft = [];
      node.borderRight = [];
      for (var rank = node.minRank, maxRank = node.maxRank + 1; rank < maxRank; ++rank) {
        add_border_segments_addBorderNode(g, 'borderLeft', '_bl', v, node, rank);
        add_border_segments_addBorderNode(g, 'borderRight', '_br', v, node, rank);
      }
    }
  }

  forEach/* default */.Z(g.children(), dfs);
}

function add_border_segments_addBorderNode(g, prop, prefix, sg, sgNode, rank) {
  var label = { width: 0, height: 0, rank: rank, borderType: prop };
  var prev = sgNode[prop][rank - 1];
  var curr = addDummyNode(g, 'border', label, prefix);
  sgNode[prop][rank] = curr;
  g.setParent(curr, sg);
  if (prev) {
    g.setEdge(prev, curr, { weight: 1 });
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre/coordinate-system.js




function adjust(g) {
  var rankDir = g.graph().rankdir.toLowerCase();
  if (rankDir === 'lr' || rankDir === 'rl') {
    swapWidthHeight(g);
  }
}

function coordinate_system_undo(g) {
  var rankDir = g.graph().rankdir.toLowerCase();
  if (rankDir === 'bt' || rankDir === 'rl') {
    reverseY(g);
  }

  if (rankDir === 'lr' || rankDir === 'rl') {
    swapXY(g);
    swapWidthHeight(g);
  }
}

function swapWidthHeight(g) {
  forEach/* default */.Z(g.nodes(), function (v) {
    swapWidthHeightOne(g.node(v));
  });
  forEach/* default */.Z(g.edges(), function (e) {
    swapWidthHeightOne(g.edge(e));
  });
}

function swapWidthHeightOne(attrs) {
  var w = attrs.width;
  attrs.width = attrs.height;
  attrs.height = w;
}

function reverseY(g) {
  forEach/* default */.Z(g.nodes(), function (v) {
    reverseYOne(g.node(v));
  });

  forEach/* default */.Z(g.edges(), function (e) {
    var edge = g.edge(e);
    forEach/* default */.Z(edge.points, reverseYOne);
    if (has/* default */.Z(edge, 'y')) {
      reverseYOne(edge);
    }
  });
}

function reverseYOne(attrs) {
  attrs.y = -attrs.y;
}

function swapXY(g) {
  forEach/* default */.Z(g.nodes(), function (v) {
    swapXYOne(g.node(v));
  });

  forEach/* default */.Z(g.edges(), function (e) {
    var edge = g.edge(e);
    forEach/* default */.Z(edge.points, swapXYOne);
    if (has/* default */.Z(edge, 'x')) {
      swapXYOne(edge);
    }
  });
}

function swapXYOne(attrs) {
  var x = attrs.x;
  attrs.x = attrs.y;
  attrs.y = x;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre/normalize.js





/*
 * Breaks any long edges in the graph into short segments that span 1 layer
 * each. This operation is undoable with the denormalize function.
 *
 * Pre-conditions:
 *
 *    1. The input graph is a DAG.
 *    2. Each node in the graph has a "rank" property.
 *
 * Post-condition:
 *
 *    1. All edges in the graph have a length of 1.
 *    2. Dummy nodes are added where edges have been split into segments.
 *    3. The graph is augmented with a "dummyChains" attribute which contains
 *       the first dummy in each chain of dummy nodes produced.
 */
function normalize_run(g) {
  g.graph().dummyChains = [];
  forEach/* default */.Z(g.edges(), function (edge) {
    normalizeEdge(g, edge);
  });
}

function normalizeEdge(g, e) {
  var v = e.v;
  var vRank = g.node(v).rank;
  var w = e.w;
  var wRank = g.node(w).rank;
  var name = e.name;
  var edgeLabel = g.edge(e);
  var labelRank = edgeLabel.labelRank;

  if (wRank === vRank + 1) return;

  g.removeEdge(e);

  var dummy, attrs, i;
  for (i = 0, ++vRank; vRank < wRank; ++i, ++vRank) {
    edgeLabel.points = [];
    attrs = {
      width: 0,
      height: 0,
      edgeLabel: edgeLabel,
      edgeObj: e,
      rank: vRank,
    };
    dummy = addDummyNode(g, 'edge', attrs, '_d');
    if (vRank === labelRank) {
      attrs.width = edgeLabel.width;
      attrs.height = edgeLabel.height;
      // @ts-expect-error
      attrs.dummy = 'edge-label';
      // @ts-expect-error
      attrs.labelpos = edgeLabel.labelpos;
    }
    g.setEdge(v, dummy, { weight: edgeLabel.weight }, name);
    if (i === 0) {
      g.graph().dummyChains.push(dummy);
    }
    v = dummy;
  }

  g.setEdge(v, w, { weight: edgeLabel.weight }, name);
}

function normalize_undo(g) {
  forEach/* default */.Z(g.graph().dummyChains, function (v) {
    var node = g.node(v);
    var origLabel = node.edgeLabel;
    var w;
    g.setEdge(node.edgeObj, origLabel);
    while (node.dummy) {
      w = g.successors(v)[0];
      g.removeNode(v);
      origLabel.points.push({ x: node.x, y: node.y });
      if (node.dummy === 'edge-label') {
        origLabel.x = node.x;
        origLabel.y = node.y;
        origLabel.width = node.width;
        origLabel.height = node.height;
      }
      v = w;
      node = g.node(v);
    }
  });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/minBy.js
var minBy = __webpack_require__(33528);
;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre/rank/util.js




/*
 * Initializes ranks for the input graph using the longest path algorithm. This
 * algorithm scales well and is fast in practice, it yields rather poor
 * solutions. Nodes are pushed to the lowest layer possible, leaving the bottom
 * ranks wide and leaving edges longer than necessary. However, due to its
 * speed, this algorithm is good for getting an initial ranking that can be fed
 * into other algorithms.
 *
 * This algorithm does not normalize layers because it will be used by other
 * algorithms in most cases. If using this algorithm directly, be sure to
 * run normalize at the end.
 *
 * Pre-conditions:
 *
 *    1. Input graph is a DAG.
 *    2. Input graph node labels can be assigned properties.
 *
 * Post-conditions:
 *
 *    1. Each node will be assign an (unnormalized) "rank" property.
 */
function longestPath(g) {
  var visited = {};

  function dfs(v) {
    var label = g.node(v);
    if (has/* default */.Z(visited, v)) {
      return label.rank;
    }
    visited[v] = true;

    var rank = lodash_es_min/* default */.Z(
      map/* default */.Z(g.outEdges(v), function (e) {
        return dfs(e.w) - g.edge(e).minlen;
      })
    );

    if (
      rank === Number.POSITIVE_INFINITY || // return value of _.map([]) for Lodash 3
      rank === undefined || // return value of _.map([]) for Lodash 4
      rank === null
    ) {
      // return value of _.map([null])
      rank = 0;
    }

    return (label.rank = rank);
  }

  forEach/* default */.Z(g.sources(), dfs);
}

/*
 * Returns the amount of slack for the given edge. The slack is defined as the
 * difference between the length of the edge and its minimum length.
 */
function slack(g, e) {
  return g.node(e.w).rank - g.node(e.v).rank - g.edge(e).minlen;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre/rank/feasible-tree.js






/*
 * Constructs a spanning tree with tight edges and adjusted the input node's
 * ranks to achieve this. A tight edge is one that is has a length that matches
 * its "minlen" attribute.
 *
 * The basic structure for this function is derived from Gansner, et al., "A
 * Technique for Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a DAG.
 *    2. Graph must be connected.
 *    3. Graph must have at least one node.
 *    5. Graph nodes must have been previously assigned a "rank" property that
 *       respects the "minlen" property of incident edges.
 *    6. Graph edges must have a "minlen" property.
 *
 * Post-conditions:
 *
 *    - Graph nodes will have their rank adjusted to ensure that all edges are
 *      tight.
 *
 * Returns a tree (undirected graph) that is constructed using only "tight"
 * edges.
 */
function feasibleTree(g) {
  var t = new graphlib/* Graph */.k({ directed: false });

  // Choose arbitrary node from which to start our tree
  var start = g.nodes()[0];
  var size = g.nodeCount();
  t.setNode(start, {});

  var edge, delta;
  while (tightTree(t, g) < size) {
    edge = findMinSlackEdge(t, g);
    delta = t.hasNode(edge.v) ? slack(g, edge) : -slack(g, edge);
    shiftRanks(t, g, delta);
  }

  return t;
}

/*
 * Finds a maximal tree of tight edges and returns the number of nodes in the
 * tree.
 */
function tightTree(t, g) {
  function dfs(v) {
    forEach/* default */.Z(g.nodeEdges(v), function (e) {
      var edgeV = e.v,
        w = v === edgeV ? e.w : edgeV;
      if (!t.hasNode(w) && !slack(g, e)) {
        t.setNode(w, {});
        t.setEdge(v, w, {});
        dfs(w);
      }
    });
  }

  forEach/* default */.Z(t.nodes(), dfs);
  return t.nodeCount();
}

/*
 * Finds the edge with the smallest slack that is incident on tree and returns
 * it.
 */
function findMinSlackEdge(t, g) {
  return minBy/* default */.Z(g.edges(), function (e) {
    if (t.hasNode(e.v) !== t.hasNode(e.w)) {
      return slack(g, e);
    }
  });
}

function shiftRanks(t, g, delta) {
  forEach/* default */.Z(t.nodes(), function (v) {
    g.node(v).rank += delta;
  });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/find.js + 3 modules
var find = __webpack_require__(84931);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/filter.js + 1 modules
var filter = __webpack_require__(38364);
;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/graphlib/alg/dijkstra.js





var DEFAULT_WEIGHT_FUNC = constant/* default */.Z(1);

function dijkstra_dijkstra(g, source, weightFn, edgeFn) {
  return runDijkstra(
    g,
    String(source),
    weightFn || DEFAULT_WEIGHT_FUNC,
    edgeFn ||
      function (v) {
        return g.outEdges(v);
      }
  );
}

function runDijkstra(g, source, weightFn, edgeFn) {
  var results = {};
  var pq = new PriorityQueue();
  var v, vEntry;

  var updateNeighbors = function (edge) {
    var w = edge.v !== v ? edge.v : edge.w;
    var wEntry = results[w];
    var weight = weightFn(edge);
    var distance = vEntry.distance + weight;

    if (weight < 0) {
      throw new Error(
        'dijkstra does not allow negative edge weights. ' +
          'Bad edge: ' +
          edge +
          ' Weight: ' +
          weight
      );
    }

    if (distance < wEntry.distance) {
      wEntry.distance = distance;
      wEntry.predecessor = v;
      pq.decrease(w, distance);
    }
  };

  g.nodes().forEach(function (v) {
    var distance = v === source ? 0 : Number.POSITIVE_INFINITY;
    results[v] = { distance: distance };
    pq.add(v, distance);
  });

  while (pq.size() > 0) {
    v = pq.removeMin();
    vEntry = results[v];
    if (vEntry.distance === Number.POSITIVE_INFINITY) {
      break;
    }

    edgeFn(v).forEach(updateNeighbors);
  }

  return results;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/graphlib/alg/dijkstra-all.js





function dijkstraAll(g, weightFunc, edgeFunc) {
  return _.transform(
    g.nodes(),
    function (acc, v) {
      acc[v] = dijkstra(g, v, weightFunc, edgeFunc);
    },
    {}
  );
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/graphlib/alg/floyd-warshall.js




var floyd_warshall_DEFAULT_WEIGHT_FUNC = constant/* default */.Z(1);

function floydWarshall(g, weightFn, edgeFn) {
  return runFloydWarshall(
    g,
    weightFn || floyd_warshall_DEFAULT_WEIGHT_FUNC,
    edgeFn ||
      function (v) {
        return g.outEdges(v);
      }
  );
}

function runFloydWarshall(g, weightFn, edgeFn) {
  var results = {};
  var nodes = g.nodes();

  nodes.forEach(function (v) {
    results[v] = {};
    results[v][v] = { distance: 0 };
    nodes.forEach(function (w) {
      if (v !== w) {
        results[v][w] = { distance: Number.POSITIVE_INFINITY };
      }
    });
    edgeFn(v).forEach(function (edge) {
      var w = edge.v === v ? edge.w : edge.v;
      var d = weightFn(edge);
      results[v][w] = { distance: d, predecessor: v };
    });
  });

  nodes.forEach(function (k) {
    var rowK = results[k];
    nodes.forEach(function (i) {
      var rowI = results[i];
      nodes.forEach(function (j) {
        var ik = rowI[k];
        var kj = rowK[j];
        var ij = rowI[j];
        var altDistance = ik.distance + kj.distance;
        if (altDistance < ij.distance) {
          ij.distance = altDistance;
          ij.predecessor = kj.predecessor;
        }
      });
    });
  });

  return results;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/size.js + 5 modules
var size = __webpack_require__(52906);
;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/graphlib/alg/topsort.js




topsort_topsort.CycleException = topsort_CycleException;

function topsort_topsort(g) {
  var visited = {};
  var stack = {};
  var results = [];

  function visit(node) {
    if (has/* default */.Z(stack, node)) {
      throw new topsort_CycleException();
    }

    if (!has/* default */.Z(visited, node)) {
      stack[node] = true;
      visited[node] = true;
      forEach/* default */.Z(g.predecessors(node), visit);
      delete stack[node];
      results.push(node);
    }
  }

  forEach/* default */.Z(g.sinks(), visit);

  if (size/* default */.Z(visited) !== g.nodeCount()) {
    throw new topsort_CycleException();
  }

  return results;
}

function topsort_CycleException() {}
topsort_CycleException.prototype = new Error(); // must be an instance of Error to pass testing

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/graphlib/alg/is-acyclic.js




function isAcyclic(g) {
  try {
    topsort(g);
  } catch (e) {
    if (e instanceof CycleException) {
      return false;
    }
    throw e;
  }
  return true;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.js
var isArray = __webpack_require__(56052);
;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/graphlib/alg/dfs.js




/*
 * A helper that preforms a pre- or post-order traversal on the input graph
 * and returns the nodes in the order they were visited. If the graph is
 * undirected then this algorithm will navigate using neighbors. If the graph
 * is directed then this algorithm will navigate using successors.
 *
 * Order must be one of "pre" or "post".
 */
function dfs(g, vs, order) {
  if (!isArray/* default */.Z(vs)) {
    vs = [vs];
  }

  var navigation = (g.isDirected() ? g.successors : g.neighbors).bind(g);

  var acc = [];
  var visited = {};
  forEach/* default */.Z(vs, function (v) {
    if (!g.hasNode(v)) {
      throw new Error('Graph does not have node: ' + v);
    }

    doDfs(g, v, order === 'post', visited, navigation, acc);
  });
  return acc;
}

function doDfs(g, v, postorder, visited, navigation, acc) {
  if (!has/* default */.Z(visited, v)) {
    visited[v] = true;

    if (!postorder) {
      acc.push(v);
    }
    forEach/* default */.Z(navigation(v), function (w) {
      doDfs(g, w, postorder, visited, navigation, acc);
    });
    if (postorder) {
      acc.push(v);
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/graphlib/alg/postorder.js




function postorder(g, vs) {
  return dfs(g, vs, 'post');
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/graphlib/alg/preorder.js




function preorder(g, vs) {
  return dfs(g, vs, 'pre');
}

// EXTERNAL MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/graphlib/graph.js
var graph = __webpack_require__(17896);
;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/graphlib/alg/prim.js






function prim(g, weightFunc) {
  var result = new Graph();
  var parents = {};
  var pq = new PriorityQueue();
  var v;

  function updateNeighbors(edge) {
    var w = edge.v === v ? edge.w : edge.v;
    var pri = pq.priority(w);
    if (pri !== undefined) {
      var edgeWeight = weightFunc(edge);
      if (edgeWeight < pri) {
        parents[w] = v;
        pq.decrease(w, edgeWeight);
      }
    }
  }

  if (g.nodeCount() === 0) {
    return result;
  }

  _.each(g.nodes(), function (v) {
    pq.add(v, Number.POSITIVE_INFINITY);
    result.setNode(v);
  });

  // Start from an arbitrary node
  pq.decrease(g.nodes()[0], 0);

  var init = false;
  while (pq.size() > 0) {
    v = pq.removeMin();
    if (_.has(parents, v)) {
      result.setEdge(v, parents[v]);
    } else if (init) {
      throw new Error('Input graph is not connected: ' + g);
    } else {
      init = true;
    }

    g.nodeEdges(v).forEach(updateNeighbors);
  }

  return result;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/graphlib/alg/index.js














;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre/rank/network-simplex.js








// Expose some internals for testing purposes
networkSimplex.initLowLimValues = initLowLimValues;
networkSimplex.initCutValues = initCutValues;
networkSimplex.calcCutValue = calcCutValue;
networkSimplex.leaveEdge = leaveEdge;
networkSimplex.enterEdge = enterEdge;
networkSimplex.exchangeEdges = exchangeEdges;

/*
 * The network simplex algorithm assigns ranks to each node in the input graph
 * and iteratively improves the ranking to reduce the length of edges.
 *
 * Preconditions:
 *
 *    1. The input graph must be a DAG.
 *    2. All nodes in the graph must have an object value.
 *    3. All edges in the graph must have "minlen" and "weight" attributes.
 *
 * Postconditions:
 *
 *    1. All nodes in the graph will have an assigned "rank" attribute that has
 *       been optimized by the network simplex algorithm. Ranks start at 0.
 *
 *
 * A rough sketch of the algorithm is as follows:
 *
 *    1. Assign initial ranks to each node. We use the longest path algorithm,
 *       which assigns ranks to the lowest position possible. In general this
 *       leads to very wide bottom ranks and unnecessarily long edges.
 *    2. Construct a feasible tight tree. A tight tree is one such that all
 *       edges in the tree have no slack (difference between length of edge
 *       and minlen for the edge). This by itself greatly improves the assigned
 *       rankings by shorting edges.
 *    3. Iteratively find edges that have negative cut values. Generally a
 *       negative cut value indicates that the edge could be removed and a new
 *       tree edge could be added to produce a more compact graph.
 *
 * Much of the algorithms here are derived from Gansner, et al., "A Technique
 * for Drawing Directed Graphs." The structure of the file roughly follows the
 * structure of the overall algorithm.
 */
function networkSimplex(g) {
  g = simplify(g);
  longestPath(g);
  var t = feasibleTree(g);
  initLowLimValues(t);
  initCutValues(t, g);

  var e, f;
  while ((e = leaveEdge(t))) {
    f = enterEdge(t, g, e);
    exchangeEdges(t, g, e, f);
  }
}

/*
 * Initializes cut values for all edges in the tree.
 */
function initCutValues(t, g) {
  var vs = postorder(t, t.nodes());
  vs = vs.slice(0, vs.length - 1);
  forEach/* default */.Z(vs, function (v) {
    assignCutValue(t, g, v);
  });
}

function assignCutValue(t, g, child) {
  var childLab = t.node(child);
  var parent = childLab.parent;
  t.edge(child, parent).cutvalue = calcCutValue(t, g, child);
}

/*
 * Given the tight tree, its graph, and a child in the graph calculate and
 * return the cut value for the edge between the child and its parent.
 */
function calcCutValue(t, g, child) {
  var childLab = t.node(child);
  var parent = childLab.parent;
  // True if the child is on the tail end of the edge in the directed graph
  var childIsTail = true;
  // The graph's view of the tree edge we're inspecting
  var graphEdge = g.edge(child, parent);
  // The accumulated cut value for the edge between this node and its parent
  var cutValue = 0;

  if (!graphEdge) {
    childIsTail = false;
    graphEdge = g.edge(parent, child);
  }

  cutValue = graphEdge.weight;

  forEach/* default */.Z(g.nodeEdges(child), function (e) {
    var isOutEdge = e.v === child,
      other = isOutEdge ? e.w : e.v;

    if (other !== parent) {
      var pointsToHead = isOutEdge === childIsTail,
        otherWeight = g.edge(e).weight;

      cutValue += pointsToHead ? otherWeight : -otherWeight;
      if (isTreeEdge(t, child, other)) {
        var otherCutValue = t.edge(child, other).cutvalue;
        cutValue += pointsToHead ? -otherCutValue : otherCutValue;
      }
    }
  });

  return cutValue;
}

function initLowLimValues(tree, root) {
  if (arguments.length < 2) {
    root = tree.nodes()[0];
  }
  dfsAssignLowLim(tree, {}, 1, root);
}

function dfsAssignLowLim(tree, visited, nextLim, v, parent) {
  var low = nextLim;
  var label = tree.node(v);

  visited[v] = true;
  forEach/* default */.Z(tree.neighbors(v), function (w) {
    if (!has/* default */.Z(visited, w)) {
      nextLim = dfsAssignLowLim(tree, visited, nextLim, w, v);
    }
  });

  label.low = low;
  label.lim = nextLim++;
  if (parent) {
    label.parent = parent;
  } else {
    // TODO should be able to remove this when we incrementally update low lim
    delete label.parent;
  }

  return nextLim;
}

function leaveEdge(tree) {
  return find/* default */.Z(tree.edges(), function (e) {
    return tree.edge(e).cutvalue < 0;
  });
}

function enterEdge(t, g, edge) {
  var v = edge.v;
  var w = edge.w;

  // For the rest of this function we assume that v is the tail and w is the
  // head, so if we don't have this edge in the graph we should flip it to
  // match the correct orientation.
  if (!g.hasEdge(v, w)) {
    v = edge.w;
    w = edge.v;
  }

  var vLabel = t.node(v);
  var wLabel = t.node(w);
  var tailLabel = vLabel;
  var flip = false;

  // If the root is in the tail of the edge then we need to flip the logic that
  // checks for the head and tail nodes in the candidates function below.
  if (vLabel.lim > wLabel.lim) {
    tailLabel = wLabel;
    flip = true;
  }

  var candidates = filter/* default */.Z(g.edges(), function (edge) {
    return (
      flip === isDescendant(t, t.node(edge.v), tailLabel) &&
      flip !== isDescendant(t, t.node(edge.w), tailLabel)
    );
  });

  return minBy/* default */.Z(candidates, function (edge) {
    return slack(g, edge);
  });
}

function exchangeEdges(t, g, e, f) {
  var v = e.v;
  var w = e.w;
  t.removeEdge(v, w);
  t.setEdge(f.v, f.w, {});
  initLowLimValues(t);
  initCutValues(t, g);
  updateRanks(t, g);
}

function updateRanks(t, g) {
  var root = find/* default */.Z(t.nodes(), function (v) {
    return !g.node(v).parent;
  });
  var vs = preorder(t, root);
  vs = vs.slice(1);
  forEach/* default */.Z(vs, function (v) {
    var parent = t.node(v).parent,
      edge = g.edge(v, parent),
      flipped = false;

    if (!edge) {
      edge = g.edge(parent, v);
      flipped = true;
    }

    g.node(v).rank = g.node(parent).rank + (flipped ? edge.minlen : -edge.minlen);
  });
}

/*
 * Returns true if the edge is in the tree.
 */
function isTreeEdge(tree, u, v) {
  return tree.hasEdge(u, v);
}

/*
 * Returns true if the specified node is descendant of the root node per the
 * assigned low and lim attributes in the tree.
 */
function isDescendant(tree, vLabel, rootLabel) {
  return rootLabel.low <= vLabel.lim && vLabel.lim <= rootLabel.lim;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre/rank/index.js






/*
 * Assigns a rank to each node in the input graph that respects the "minlen"
 * constraint specified on edges between nodes.
 *
 * This basic structure is derived from Gansner, et al., "A Technique for
 * Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a connected DAG
 *    2. Graph nodes must be objects
 *    3. Graph edges must have "weight" and "minlen" attributes
 *
 * Post-conditions:
 *
 *    1. Graph nodes will have a "rank" attribute based on the results of the
 *       algorithm. Ranks can start at any index (including negative), we'll
 *       fix them up later.
 */
function rank(g) {
  switch (g.graph().ranker) {
    case 'network-simplex':
      networkSimplexRanker(g);
      break;
    case 'tight-tree':
      tightTreeRanker(g);
      break;
    case 'longest-path':
      longestPathRanker(g);
      break;
    default:
      networkSimplexRanker(g);
  }
}

// A fast and simple ranker, but results are far from optimal.
var longestPathRanker = longestPath;

function tightTreeRanker(g) {
  longestPath(g);
  feasibleTree(g);
}

function networkSimplexRanker(g) {
  networkSimplex(g);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/values.js + 1 modules
var values = __webpack_require__(27942);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/reduce.js + 2 modules
var reduce = __webpack_require__(43329);
;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre/nesting-graph.js





/*
 * A nesting graph creates dummy nodes for the tops and bottoms of subgraphs,
 * adds appropriate edges to ensure that all cluster nodes are placed between
 * these boundries, and ensures that the graph is connected.
 *
 * In addition we ensure, through the use of the minlen property, that nodes
 * and subgraph border nodes to not end up on the same rank.
 *
 * Preconditions:
 *
 *    1. Input graph is a DAG
 *    2. Nodes in the input graph has a minlen attribute
 *
 * Postconditions:
 *
 *    1. Input graph is connected.
 *    2. Dummy nodes are added for the tops and bottoms of subgraphs.
 *    3. The minlen attribute for nodes is adjusted to ensure nodes do not
 *       get placed on the same rank as subgraph border nodes.
 *
 * The nesting graph idea comes from Sander, "Layout of Compound Directed
 * Graphs."
 */
function nesting_graph_run(g) {
  var root = addDummyNode(g, 'root', {}, '_root');
  var depths = treeDepths(g);
  var height = max/* default */.Z(values/* default */.Z(depths)) - 1; // Note: depths is an Object not an array
  var nodeSep = 2 * height + 1;

  g.graph().nestingRoot = root;

  // Multiply minlen by nodeSep to align nodes on non-border ranks.
  forEach/* default */.Z(g.edges(), function (e) {
    g.edge(e).minlen *= nodeSep;
  });

  // Calculate a weight that is sufficient to keep subgraphs vertically compact
  var weight = sumWeights(g) + 1;

  // Create border nodes and link them up
  forEach/* default */.Z(g.children(), function (child) {
    nesting_graph_dfs(g, root, nodeSep, weight, height, depths, child);
  });

  // Save the multiplier for node layers for later removal of empty border
  // layers.
  g.graph().nodeRankFactor = nodeSep;
}

function nesting_graph_dfs(g, root, nodeSep, weight, height, depths, v) {
  var children = g.children(v);
  if (!children.length) {
    if (v !== root) {
      g.setEdge(root, v, { weight: 0, minlen: nodeSep });
    }
    return;
  }

  var top = addBorderNode(g, '_bt');
  var bottom = addBorderNode(g, '_bb');
  var label = g.node(v);

  g.setParent(top, v);
  label.borderTop = top;
  g.setParent(bottom, v);
  label.borderBottom = bottom;

  forEach/* default */.Z(children, function (child) {
    nesting_graph_dfs(g, root, nodeSep, weight, height, depths, child);

    var childNode = g.node(child);
    var childTop = childNode.borderTop ? childNode.borderTop : child;
    var childBottom = childNode.borderBottom ? childNode.borderBottom : child;
    var thisWeight = childNode.borderTop ? weight : 2 * weight;
    var minlen = childTop !== childBottom ? 1 : height - depths[v] + 1;

    g.setEdge(top, childTop, {
      weight: thisWeight,
      minlen: minlen,
      nestingEdge: true,
    });

    g.setEdge(childBottom, bottom, {
      weight: thisWeight,
      minlen: minlen,
      nestingEdge: true,
    });
  });

  if (!g.parent(v)) {
    g.setEdge(root, top, { weight: 0, minlen: height + depths[v] });
  }
}

function treeDepths(g) {
  var depths = {};
  function dfs(v, depth) {
    var children = g.children(v);
    if (children && children.length) {
      forEach/* default */.Z(children, function (child) {
        dfs(child, depth + 1);
      });
    }
    depths[v] = depth;
  }
  forEach/* default */.Z(g.children(), function (v) {
    dfs(v, 1);
  });
  return depths;
}

function sumWeights(g) {
  return reduce/* default */.Z(
    g.edges(),
    function (acc, e) {
      return acc + g.edge(e).weight;
    },
    0
  );
}

function cleanup(g) {
  var graphLabel = g.graph();
  g.removeNode(graphLabel.nestingRoot);
  delete graphLabel.nestingRoot;
  forEach/* default */.Z(g.edges(), function (e) {
    var edge = g.edge(e);
    if (edge.nestingEdge) {
      g.removeEdge(e);
    }
  });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/cloneDeep.js
var cloneDeep = __webpack_require__(54834);
;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre/order/add-subgraph-constraints.js




function addSubgraphConstraints(g, cg, vs) {
  var prev = {},
    rootPrev;

  forEach/* default */.Z(vs, function (v) {
    var child = g.parent(v),
      parent,
      prevChild;
    while (child) {
      parent = g.parent(child);
      if (parent) {
        prevChild = prev[parent];
        prev[parent] = child;
      } else {
        prevChild = rootPrev;
        rootPrev = child;
      }
      if (prevChild && prevChild !== child) {
        cg.setEdge(prevChild, child);
        return;
      }
      child = parent;
    }
  });

  /*
  function dfs(v) {
    var children = v ? g.children(v) : g.children();
    if (children.length) {
      var min = Number.POSITIVE_INFINITY,
          subgraphs = [];
      _.each(children, function(child) {
        var childMin = dfs(child);
        if (g.children(child).length) {
          subgraphs.push({ v: child, order: childMin });
        }
        min = Math.min(min, childMin);
      });
      _.reduce(_.sortBy(subgraphs, "order"), function(prev, curr) {
        cg.setEdge(prev.v, curr.v);
        return curr;
      });
      return min;
    }
    return g.node(v).order;
  }
  dfs(undefined);
  */
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre/order/build-layer-graph.js





/*
 * Constructs a graph that can be used to sort a layer of nodes. The graph will
 * contain all base and subgraph nodes from the request layer in their original
 * hierarchy and any edges that are incident on these nodes and are of the type
 * requested by the "relationship" parameter.
 *
 * Nodes from the requested rank that do not have parents are assigned a root
 * node in the output graph, which is set in the root graph attribute. This
 * makes it easy to walk the hierarchy of movable nodes during ordering.
 *
 * Pre-conditions:
 *
 *    1. Input graph is a DAG
 *    2. Base nodes in the input graph have a rank attribute
 *    3. Subgraph nodes in the input graph has minRank and maxRank attributes
 *    4. Edges have an assigned weight
 *
 * Post-conditions:
 *
 *    1. Output graph has all nodes in the movable rank with preserved
 *       hierarchy.
 *    2. Root nodes in the movable layer are made children of the node
 *       indicated by the root attribute of the graph.
 *    3. Non-movable nodes incident on movable nodes, selected by the
 *       relationship parameter, are included in the graph (without hierarchy).
 *    4. Edges incident on movable nodes, selected by the relationship
 *       parameter, are added to the output graph.
 *    5. The weights for copied edges are aggregated as need, since the output
 *       graph is not a multi-graph.
 */
function buildLayerGraph(g, rank, relationship) {
  var root = createRootNode(g),
    result = new graphlib/* Graph */.k({ compound: true })
      .setGraph({ root: root })
      .setDefaultNodeLabel(function (v) {
        return g.node(v);
      });

  forEach/* default */.Z(g.nodes(), function (v) {
    var node = g.node(v),
      parent = g.parent(v);

    if (node.rank === rank || (node.minRank <= rank && rank <= node.maxRank)) {
      result.setNode(v);
      result.setParent(v, parent || root);

      // This assumes we have only short edges!
      forEach/* default */.Z(g[relationship](v), function (e) {
        var u = e.v === v ? e.w : e.v,
          edge = result.edge(u, v),
          weight = !isUndefined/* default */.Z(edge) ? edge.weight : 0;
        result.setEdge(u, v, { weight: g.edge(e).weight + weight });
      });

      if (has/* default */.Z(node, 'minRank')) {
        result.setNode(v, {
          borderLeft: node.borderLeft[rank],
          borderRight: node.borderRight[rank],
        });
      }
    }
  });

  return result;
}

function createRootNode(g) {
  var v;
  while (g.hasNode((v = uniqueId/* default */.Z('_root'))));
  return v;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/zipObject.js + 1 modules
var zipObject = __webpack_require__(53508);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/sortBy.js + 4 modules
var sortBy = __webpack_require__(42852);
;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre/order/cross-count.js




/*
 * A function that takes a layering (an array of layers, each with an array of
 * ordererd nodes) and a graph and returns a weighted crossing count.
 *
 * Pre-conditions:
 *
 *    1. Input graph must be simple (not a multigraph), directed, and include
 *       only simple edges.
 *    2. Edges in the input graph must have assigned weights.
 *
 * Post-conditions:
 *
 *    1. The graph and layering matrix are left unchanged.
 *
 * This algorithm is derived from Barth, et al., "Bilayer Cross Counting."
 */
function crossCount(g, layering) {
  var cc = 0;
  for (var i = 1; i < layering.length; ++i) {
    cc += twoLayerCrossCount(g, layering[i - 1], layering[i]);
  }
  return cc;
}

function twoLayerCrossCount(g, northLayer, southLayer) {
  // Sort all of the edges between the north and south layers by their position
  // in the north layer and then the south. Map these edges to the position of
  // their head in the south layer.
  var southPos = zipObject/* default */.Z(
    southLayer,
    map/* default */.Z(southLayer, function (v, i) {
      return i;
    })
  );
  var southEntries = flatten/* default */.Z(
    map/* default */.Z(northLayer, function (v) {
      return sortBy/* default */.Z(
        map/* default */.Z(g.outEdges(v), function (e) {
          return { pos: southPos[e.w], weight: g.edge(e).weight };
        }),
        'pos'
      );
    })
  );

  // Build the accumulator tree
  var firstIndex = 1;
  while (firstIndex < southLayer.length) firstIndex <<= 1;
  var treeSize = 2 * firstIndex - 1;
  firstIndex -= 1;
  var tree = map/* default */.Z(new Array(treeSize), function () {
    return 0;
  });

  // Calculate the weighted crossings
  var cc = 0;
  forEach/* default */.Z(
    // @ts-expect-error
    southEntries.forEach(function (entry) {
      var index = entry.pos + firstIndex;
      tree[index] += entry.weight;
      var weightSum = 0;
      // @ts-expect-error
      while (index > 0) {
        // @ts-expect-error
        if (index % 2) {
          weightSum += tree[index + 1];
        }
        // @ts-expect-error
        index = (index - 1) >> 1;
        tree[index] += entry.weight;
      }
      cc += entry.weight * weightSum;
    })
  );

  return cc;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre/order/init-order.js




/*
 * Assigns an initial order value for each node by performing a DFS search
 * starting from nodes in the first rank. Nodes are assigned an order in their
 * rank as they are first visited.
 *
 * This approach comes from Gansner, et al., "A Technique for Drawing Directed
 * Graphs."
 *
 * Returns a layering matrix with an array per layer and each layer sorted by
 * the order of its nodes.
 */
function initOrder(g) {
  var visited = {};
  var simpleNodes = filter/* default */.Z(g.nodes(), function (v) {
    return !g.children(v).length;
  });
  var maxRank = max/* default */.Z(
    map/* default */.Z(simpleNodes, function (v) {
      return g.node(v).rank;
    })
  );
  var layers = map/* default */.Z(range/* default */.Z(maxRank + 1), function () {
    return [];
  });

  function dfs(v) {
    if (has/* default */.Z(visited, v)) return;
    visited[v] = true;
    var node = g.node(v);
    layers[node.rank].push(v);
    forEach/* default */.Z(g.successors(v), dfs);
  }

  var orderedVs = sortBy/* default */.Z(simpleNodes, function (v) {
    return g.node(v).rank;
  });
  forEach/* default */.Z(orderedVs, dfs);

  return layers;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre/order/barycenter.js




function barycenter(g, movable) {
  return map/* default */.Z(movable, function (v) {
    var inV = g.inEdges(v);
    if (!inV.length) {
      return { v: v };
    } else {
      var result = reduce/* default */.Z(
        inV,
        function (acc, e) {
          var edge = g.edge(e),
            nodeU = g.node(e.v);
          return {
            sum: acc.sum + edge.weight * nodeU.order,
            weight: acc.weight + edge.weight,
          };
        },
        { sum: 0, weight: 0 }
      );

      return {
        v: v,
        barycenter: result.sum / result.weight,
        weight: result.weight,
      };
    }
  });
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre/order/resolve-conflicts.js




/*
 * Given a list of entries of the form {v, barycenter, weight} and a
 * constraint graph this function will resolve any conflicts between the
 * constraint graph and the barycenters for the entries. If the barycenters for
 * an entry would violate a constraint in the constraint graph then we coalesce
 * the nodes in the conflict into a new node that respects the contraint and
 * aggregates barycenter and weight information.
 *
 * This implementation is based on the description in Forster, "A Fast and
 * Simple Hueristic for Constrained Two-Level Crossing Reduction," thought it
 * differs in some specific details.
 *
 * Pre-conditions:
 *
 *    1. Each entry has the form {v, barycenter, weight}, or if the node has
 *       no barycenter, then {v}.
 *
 * Returns:
 *
 *    A new list of entries of the form {vs, i, barycenter, weight}. The list
 *    `vs` may either be a singleton or it may be an aggregation of nodes
 *    ordered such that they do not violate constraints from the constraint
 *    graph. The property `i` is the lowest original index of any of the
 *    elements in `vs`.
 */
function resolveConflicts(entries, cg) {
  var mappedEntries = {};
  forEach/* default */.Z(entries, function (entry, i) {
    var tmp = (mappedEntries[entry.v] = {
      indegree: 0,
      in: [],
      out: [],
      vs: [entry.v],
      i: i,
    });
    if (!isUndefined/* default */.Z(entry.barycenter)) {
      // @ts-expect-error
      tmp.barycenter = entry.barycenter;
      // @ts-expect-error
      tmp.weight = entry.weight;
    }
  });

  forEach/* default */.Z(cg.edges(), function (e) {
    var entryV = mappedEntries[e.v];
    var entryW = mappedEntries[e.w];
    if (!isUndefined/* default */.Z(entryV) && !isUndefined/* default */.Z(entryW)) {
      entryW.indegree++;
      entryV.out.push(mappedEntries[e.w]);
    }
  });

  var sourceSet = filter/* default */.Z(mappedEntries, function (entry) {
    // @ts-expect-error
    return !entry.indegree;
  });

  return doResolveConflicts(sourceSet);
}

function doResolveConflicts(sourceSet) {
  var entries = [];

  function handleIn(vEntry) {
    return function (uEntry) {
      if (uEntry.merged) {
        return;
      }
      if (
        isUndefined/* default */.Z(uEntry.barycenter) ||
        isUndefined/* default */.Z(vEntry.barycenter) ||
        uEntry.barycenter >= vEntry.barycenter
      ) {
        mergeEntries(vEntry, uEntry);
      }
    };
  }

  function handleOut(vEntry) {
    return function (wEntry) {
      wEntry['in'].push(vEntry);
      if (--wEntry.indegree === 0) {
        sourceSet.push(wEntry);
      }
    };
  }

  while (sourceSet.length) {
    var entry = sourceSet.pop();
    entries.push(entry);
    forEach/* default */.Z(entry['in'].reverse(), handleIn(entry));
    forEach/* default */.Z(entry.out, handleOut(entry));
  }

  return map/* default */.Z(
    filter/* default */.Z(entries, function (entry) {
      return !entry.merged;
    }),
    function (entry) {
      return pick/* default */.Z(entry, ['vs', 'i', 'barycenter', 'weight']);
    }
  );
}

function mergeEntries(target, source) {
  var sum = 0;
  var weight = 0;

  if (target.weight) {
    sum += target.barycenter * target.weight;
    weight += target.weight;
  }

  if (source.weight) {
    sum += source.barycenter * source.weight;
    weight += source.weight;
  }

  target.vs = source.vs.concat(target.vs);
  target.barycenter = sum / weight;
  target.weight = weight;
  target.i = Math.min(source.i, target.i);
  source.merged = true;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre/order/sort.js





function sort(entries, biasRight) {
  var parts = partition(entries, function (entry) {
    return has/* default */.Z(entry, 'barycenter');
  });
  var sortable = parts.lhs,
    unsortable = sortBy/* default */.Z(parts.rhs, function (entry) {
      return -entry.i;
    }),
    vs = [],
    sum = 0,
    weight = 0,
    vsIndex = 0;

  sortable.sort(compareWithBias(!!biasRight));

  vsIndex = consumeUnsortable(vs, unsortable, vsIndex);

  forEach/* default */.Z(sortable, function (entry) {
    vsIndex += entry.vs.length;
    vs.push(entry.vs);
    sum += entry.barycenter * entry.weight;
    weight += entry.weight;
    vsIndex = consumeUnsortable(vs, unsortable, vsIndex);
  });

  var result = { vs: flatten/* default */.Z(vs) };
  if (weight) {
    result.barycenter = sum / weight;
    result.weight = weight;
  }
  return result;
}

function consumeUnsortable(vs, unsortable, index) {
  var last;
  while (unsortable.length && (last = lodash_es_last/* default */.Z(unsortable)).i <= index) {
    unsortable.pop();
    vs.push(last.vs);
    index++;
  }
  return index;
}

function compareWithBias(bias) {
  return function (entryV, entryW) {
    if (entryV.barycenter < entryW.barycenter) {
      return -1;
    } else if (entryV.barycenter > entryW.barycenter) {
      return 1;
    }

    return !bias ? entryV.i - entryW.i : entryW.i - entryV.i;
  };
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre/order/sort-subgraph.js







function sortSubgraph(g, v, cg, biasRight) {
  var movable = g.children(v);
  var node = g.node(v);
  var bl = node ? node.borderLeft : undefined;
  var br = node ? node.borderRight : undefined;
  var subgraphs = {};

  if (bl) {
    movable = filter/* default */.Z(movable, function (w) {
      return w !== bl && w !== br;
    });
  }

  var barycenters = barycenter(g, movable);
  forEach/* default */.Z(barycenters, function (entry) {
    if (g.children(entry.v).length) {
      var subgraphResult = sortSubgraph(g, entry.v, cg, biasRight);
      subgraphs[entry.v] = subgraphResult;
      if (has/* default */.Z(subgraphResult, 'barycenter')) {
        mergeBarycenters(entry, subgraphResult);
      }
    }
  });

  var entries = resolveConflicts(barycenters, cg);
  expandSubgraphs(entries, subgraphs);

  var result = sort(entries, biasRight);

  if (bl) {
    result.vs = flatten/* default */.Z([bl, result.vs, br]);
    if (g.predecessors(bl).length) {
      var blPred = g.node(g.predecessors(bl)[0]),
        brPred = g.node(g.predecessors(br)[0]);
      if (!has/* default */.Z(result, 'barycenter')) {
        result.barycenter = 0;
        result.weight = 0;
      }
      result.barycenter =
        (result.barycenter * result.weight + blPred.order + brPred.order) / (result.weight + 2);
      result.weight += 2;
    }
  }

  return result;
}

function expandSubgraphs(entries, subgraphs) {
  forEach/* default */.Z(entries, function (entry) {
    entry.vs = flatten/* default */.Z(
      entry.vs.map(function (v) {
        if (subgraphs[v]) {
          return subgraphs[v].vs;
        }
        return v;
      })
    );
  });
}

function mergeBarycenters(target, other) {
  if (!isUndefined/* default */.Z(target.barycenter)) {
    target.barycenter =
      (target.barycenter * target.weight + other.barycenter * other.weight) /
      (target.weight + other.weight);
    target.weight += other.weight;
  } else {
    target.barycenter = other.barycenter;
    target.weight = other.weight;
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre/order/index.js











/*
 * Applies heuristics to minimize edge crossings in the graph and sets the best
 * order solution as an order attribute on each node.
 *
 * Pre-conditions:
 *
 *    1. Graph must be DAG
 *    2. Graph nodes must be objects with a "rank" attribute
 *    3. Graph edges must have the "weight" attribute
 *
 * Post-conditions:
 *
 *    1. Graph nodes will have an "order" attribute based on the results of the
 *       algorithm.
 */
function order(g) {
  var maxRank = util_maxRank(g),
    downLayerGraphs = buildLayerGraphs(g, range/* default */.Z(1, maxRank + 1), 'inEdges'),
    upLayerGraphs = buildLayerGraphs(g, range/* default */.Z(maxRank - 1, -1, -1), 'outEdges');

  var layering = initOrder(g);
  assignOrder(g, layering);

  var bestCC = Number.POSITIVE_INFINITY,
    best;

  for (var i = 0, lastBest = 0; lastBest < 4; ++i, ++lastBest) {
    sweepLayerGraphs(i % 2 ? downLayerGraphs : upLayerGraphs, i % 4 >= 2);

    layering = buildLayerMatrix(g);
    var cc = crossCount(g, layering);
    if (cc < bestCC) {
      lastBest = 0;
      best = cloneDeep/* default */.Z(layering);
      bestCC = cc;
    }
  }

  assignOrder(g, best);
}

function buildLayerGraphs(g, ranks, relationship) {
  return map/* default */.Z(ranks, function (rank) {
    return buildLayerGraph(g, rank, relationship);
  });
}

function sweepLayerGraphs(layerGraphs, biasRight) {
  var cg = new graphlib/* Graph */.k();
  forEach/* default */.Z(layerGraphs, function (lg) {
    var root = lg.graph().root;
    var sorted = sortSubgraph(lg, root, cg, biasRight);
    forEach/* default */.Z(sorted.vs, function (v, i) {
      lg.node(v).order = i;
    });
    addSubgraphConstraints(lg, cg, sorted.vs);
  });
}

function assignOrder(g, layering) {
  forEach/* default */.Z(layering, function (layer) {
    forEach/* default */.Z(layer, function (v, i) {
      g.node(v).order = i;
    });
  });
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre/parent-dummy-chains.js




function parentDummyChains(g) {
  var postorderNums = parent_dummy_chains_postorder(g);

  forEach/* default */.Z(g.graph().dummyChains, function (v) {
    var node = g.node(v);
    var edgeObj = node.edgeObj;
    var pathData = findPath(g, postorderNums, edgeObj.v, edgeObj.w);
    var path = pathData.path;
    var lca = pathData.lca;
    var pathIdx = 0;
    var pathV = path[pathIdx];
    var ascending = true;

    while (v !== edgeObj.w) {
      node = g.node(v);

      if (ascending) {
        while ((pathV = path[pathIdx]) !== lca && g.node(pathV).maxRank < node.rank) {
          pathIdx++;
        }

        if (pathV === lca) {
          ascending = false;
        }
      }

      if (!ascending) {
        while (
          pathIdx < path.length - 1 &&
          g.node((pathV = path[pathIdx + 1])).minRank <= node.rank
        ) {
          pathIdx++;
        }
        pathV = path[pathIdx];
      }

      g.setParent(v, pathV);
      v = g.successors(v)[0];
    }
  });
}

// Find a path from v to w through the lowest common ancestor (LCA). Return the
// full path and the LCA.
function findPath(g, postorderNums, v, w) {
  var vPath = [];
  var wPath = [];
  var low = Math.min(postorderNums[v].low, postorderNums[w].low);
  var lim = Math.max(postorderNums[v].lim, postorderNums[w].lim);
  var parent;
  var lca;

  // Traverse up from v to find the LCA
  parent = v;
  do {
    parent = g.parent(parent);
    vPath.push(parent);
  } while (parent && (postorderNums[parent].low > low || lim > postorderNums[parent].lim));
  lca = parent;

  // Traverse from w to LCA
  parent = w;
  while ((parent = g.parent(parent)) !== lca) {
    wPath.push(parent);
  }

  return { path: vPath.concat(wPath.reverse()), lca: lca };
}

function parent_dummy_chains_postorder(g) {
  var result = {};
  var lim = 0;

  function dfs(v) {
    var low = lim;
    forEach/* default */.Z(g.children(v), dfs);
    result[v] = { low: low, lim: lim++ };
  }
  forEach/* default */.Z(g.children(), dfs);

  return result;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/forIn.js
var forIn = __webpack_require__(52687);
;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre/position/bk.js




/*
 * This module provides coordinate assignment based on Brandes and Köpf, "Fast
 * and Simple Horizontal Coordinate Assignment."
 */



/*
 * Marks all edges in the graph with a type-1 conflict with the "type1Conflict"
 * property. A type-1 conflict is one where a non-inner segment crosses an
 * inner segment. An inner segment is an edge with both incident nodes marked
 * with the "dummy" property.
 *
 * This algorithm scans layer by layer, starting with the second, for type-1
 * conflicts between the current layer and the previous layer. For each layer
 * it scans the nodes from left to right until it reaches one that is incident
 * on an inner segment. It then scans predecessors to determine if they have
 * edges that cross that inner segment. At the end a final scan is done for all
 * nodes on the current rank to see if they cross the last visited inner
 * segment.
 *
 * This algorithm (safely) assumes that a dummy node will only be incident on a
 * single node in the layers being scanned.
 */
function findType1Conflicts(g, layering) {
  var conflicts = {};

  function visitLayer(prevLayer, layer) {
    var // last visited node in the previous layer that is incident on an inner
      // segment.
      k0 = 0,
      // Tracks the last node in this layer scanned for crossings with a type-1
      // segment.
      scanPos = 0,
      prevLayerLength = prevLayer.length,
      lastNode = lodash_es_last/* default */.Z(layer);

    forEach/* default */.Z(layer, function (v, i) {
      var w = findOtherInnerSegmentNode(g, v),
        k1 = w ? g.node(w).order : prevLayerLength;

      if (w || v === lastNode) {
        forEach/* default */.Z(layer.slice(scanPos, i + 1), function (scanNode) {
          forEach/* default */.Z(g.predecessors(scanNode), function (u) {
            var uLabel = g.node(u),
              uPos = uLabel.order;
            if ((uPos < k0 || k1 < uPos) && !(uLabel.dummy && g.node(scanNode).dummy)) {
              addConflict(conflicts, u, scanNode);
            }
          });
        });
        // @ts-expect-error
        scanPos = i + 1;
        k0 = k1;
      }
    });

    return layer;
  }

  reduce/* default */.Z(layering, visitLayer);
  return conflicts;
}

function findType2Conflicts(g, layering) {
  var conflicts = {};

  function scan(south, southPos, southEnd, prevNorthBorder, nextNorthBorder) {
    var v;
    forEach/* default */.Z(range/* default */.Z(southPos, southEnd), function (i) {
      v = south[i];
      if (g.node(v).dummy) {
        forEach/* default */.Z(g.predecessors(v), function (u) {
          var uNode = g.node(u);
          if (uNode.dummy && (uNode.order < prevNorthBorder || uNode.order > nextNorthBorder)) {
            addConflict(conflicts, u, v);
          }
        });
      }
    });
  }

  function visitLayer(north, south) {
    var prevNorthPos = -1,
      nextNorthPos,
      southPos = 0;

    forEach/* default */.Z(south, function (v, southLookahead) {
      if (g.node(v).dummy === 'border') {
        var predecessors = g.predecessors(v);
        if (predecessors.length) {
          nextNorthPos = g.node(predecessors[0]).order;
          scan(south, southPos, southLookahead, prevNorthPos, nextNorthPos);
          // @ts-expect-error
          southPos = southLookahead;
          prevNorthPos = nextNorthPos;
        }
      }
      scan(south, southPos, south.length, nextNorthPos, north.length);
    });

    return south;
  }

  reduce/* default */.Z(layering, visitLayer);
  return conflicts;
}

function findOtherInnerSegmentNode(g, v) {
  if (g.node(v).dummy) {
    return find/* default */.Z(g.predecessors(v), function (u) {
      return g.node(u).dummy;
    });
  }
}

function addConflict(conflicts, v, w) {
  if (v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }

  var conflictsV = conflicts[v];
  if (!conflictsV) {
    conflicts[v] = conflictsV = {};
  }
  conflictsV[w] = true;
}

function hasConflict(conflicts, v, w) {
  if (v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }
  return has/* default */.Z(conflicts[v], w);
}

/*
 * Try to align nodes into vertical "blocks" where possible. This algorithm
 * attempts to align a node with one of its median neighbors. If the edge
 * connecting a neighbor is a type-1 conflict then we ignore that possibility.
 * If a previous node has already formed a block with a node after the node
 * we're trying to form a block with, we also ignore that possibility - our
 * blocks would be split in that scenario.
 */
function verticalAlignment(g, layering, conflicts, neighborFn) {
  var root = {},
    align = {},
    pos = {};

  // We cache the position here based on the layering because the graph and
  // layering may be out of sync. The layering matrix is manipulated to
  // generate different extreme alignments.
  forEach/* default */.Z(layering, function (layer) {
    forEach/* default */.Z(layer, function (v, order) {
      root[v] = v;
      align[v] = v;
      pos[v] = order;
    });
  });

  forEach/* default */.Z(layering, function (layer) {
    var prevIdx = -1;
    forEach/* default */.Z(layer, function (v) {
      var ws = neighborFn(v);
      if (ws.length) {
        ws = sortBy/* default */.Z(ws, function (w) {
          return pos[w];
        });
        var mp = (ws.length - 1) / 2;
        for (var i = Math.floor(mp), il = Math.ceil(mp); i <= il; ++i) {
          var w = ws[i];
          if (align[v] === v && prevIdx < pos[w] && !hasConflict(conflicts, v, w)) {
            align[w] = v;
            align[v] = root[v] = root[w];
            prevIdx = pos[w];
          }
        }
      }
    });
  });

  return { root: root, align: align };
}

function horizontalCompaction(g, layering, root, align, reverseSep) {
  // This portion of the algorithm differs from BK due to a number of problems.
  // Instead of their algorithm we construct a new block graph and do two
  // sweeps. The first sweep places blocks with the smallest possible
  // coordinates. The second sweep removes unused space by moving blocks to the
  // greatest coordinates without violating separation.
  var xs = {},
    blockG = buildBlockGraph(g, layering, root, reverseSep),
    borderType = reverseSep ? 'borderLeft' : 'borderRight';

  function iterate(setXsFunc, nextNodesFunc) {
    var stack = blockG.nodes();
    var elem = stack.pop();
    var visited = {};
    while (elem) {
      if (visited[elem]) {
        setXsFunc(elem);
      } else {
        visited[elem] = true;
        stack.push(elem);
        stack = stack.concat(nextNodesFunc(elem));
      }

      elem = stack.pop();
    }
  }

  // First pass, assign smallest coordinates
  function pass1(elem) {
    xs[elem] = blockG.inEdges(elem).reduce(function (acc, e) {
      return Math.max(acc, xs[e.v] + blockG.edge(e));
    }, 0);
  }

  // Second pass, assign greatest coordinates
  function pass2(elem) {
    var min = blockG.outEdges(elem).reduce(function (acc, e) {
      return Math.min(acc, xs[e.w] - blockG.edge(e));
    }, Number.POSITIVE_INFINITY);

    var node = g.node(elem);
    if (min !== Number.POSITIVE_INFINITY && node.borderType !== borderType) {
      xs[elem] = Math.max(xs[elem], min);
    }
  }

  iterate(pass1, blockG.predecessors.bind(blockG));
  iterate(pass2, blockG.successors.bind(blockG));

  // Assign x coordinates to all nodes
  forEach/* default */.Z(align, function (v) {
    xs[v] = xs[root[v]];
  });

  return xs;
}

function buildBlockGraph(g, layering, root, reverseSep) {
  var blockGraph = new graphlib/* Graph */.k(),
    graphLabel = g.graph(),
    sepFn = sep(graphLabel.nodesep, graphLabel.edgesep, reverseSep);

  forEach/* default */.Z(layering, function (layer) {
    var u;
    forEach/* default */.Z(layer, function (v) {
      var vRoot = root[v];
      blockGraph.setNode(vRoot);
      if (u) {
        var uRoot = root[u],
          prevMax = blockGraph.edge(uRoot, vRoot);
        blockGraph.setEdge(uRoot, vRoot, Math.max(sepFn(g, v, u), prevMax || 0));
      }
      u = v;
    });
  });

  return blockGraph;
}

/*
 * Returns the alignment that has the smallest width of the given alignments.
 */
function findSmallestWidthAlignment(g, xss) {
  return minBy/* default */.Z(values/* default */.Z(xss), function (xs) {
    var max = Number.NEGATIVE_INFINITY;
    var min = Number.POSITIVE_INFINITY;

    forIn/* default */.Z(xs, function (x, v) {
      var halfWidth = width(g, v) / 2;

      max = Math.max(x + halfWidth, max);
      min = Math.min(x - halfWidth, min);
    });

    return max - min;
  });
}

/*
 * Align the coordinates of each of the layout alignments such that
 * left-biased alignments have their minimum coordinate at the same point as
 * the minimum coordinate of the smallest width alignment and right-biased
 * alignments have their maximum coordinate at the same point as the maximum
 * coordinate of the smallest width alignment.
 */
function alignCoordinates(xss, alignTo) {
  var alignToVals = values/* default */.Z(alignTo),
    alignToMin = lodash_es_min/* default */.Z(alignToVals),
    alignToMax = max/* default */.Z(alignToVals);

  forEach/* default */.Z(['u', 'd'], function (vert) {
    forEach/* default */.Z(['l', 'r'], function (horiz) {
      var alignment = vert + horiz,
        xs = xss[alignment],
        delta;
      if (xs === alignTo) return;

      var xsVals = values/* default */.Z(xs);
      delta = horiz === 'l' ? alignToMin - lodash_es_min/* default */.Z(xsVals) : alignToMax - max/* default */.Z(xsVals);

      if (delta) {
        xss[alignment] = mapValues/* default */.Z(xs, function (x) {
          return x + delta;
        });
      }
    });
  });
}

function balance(xss, align) {
  return mapValues/* default */.Z(xss.ul, function (ignore, v) {
    if (align) {
      return xss[align.toLowerCase()][v];
    } else {
      var xs = sortBy/* default */.Z(map/* default */.Z(xss, v));
      return (xs[1] + xs[2]) / 2;
    }
  });
}

function positionX(g) {
  var layering = buildLayerMatrix(g);
  var conflicts = merge/* default */.Z(findType1Conflicts(g, layering), findType2Conflicts(g, layering));

  var xss = {};
  var adjustedLayering;
  forEach/* default */.Z(['u', 'd'], function (vert) {
    adjustedLayering = vert === 'u' ? layering : values/* default */.Z(layering).reverse();
    forEach/* default */.Z(['l', 'r'], function (horiz) {
      if (horiz === 'r') {
        adjustedLayering = map/* default */.Z(adjustedLayering, function (inner) {
          return values/* default */.Z(inner).reverse();
        });
      }

      var neighborFn = (vert === 'u' ? g.predecessors : g.successors).bind(g);
      var align = verticalAlignment(g, adjustedLayering, conflicts, neighborFn);
      var xs = horizontalCompaction(g, adjustedLayering, align.root, align.align, horiz === 'r');
      if (horiz === 'r') {
        xs = mapValues/* default */.Z(xs, function (x) {
          return -x;
        });
      }
      xss[vert + horiz] = xs;
    });
  });

  var smallestWidth = findSmallestWidthAlignment(g, xss);
  alignCoordinates(xss, smallestWidth);
  return balance(xss, g.graph().align);
}

function sep(nodeSep, edgeSep, reverseSep) {
  return function (g, v, w) {
    var vLabel = g.node(v);
    var wLabel = g.node(w);
    var sum = 0;
    var delta;

    sum += vLabel.width / 2;
    if (has/* default */.Z(vLabel, 'labelpos')) {
      switch (vLabel.labelpos.toLowerCase()) {
        case 'l':
          delta = -vLabel.width / 2;
          break;
        case 'r':
          delta = vLabel.width / 2;
          break;
      }
    }
    if (delta) {
      sum += reverseSep ? delta : -delta;
    }
    delta = 0;

    sum += (vLabel.dummy ? edgeSep : nodeSep) / 2;
    sum += (wLabel.dummy ? edgeSep : nodeSep) / 2;

    sum += wLabel.width / 2;
    if (has/* default */.Z(wLabel, 'labelpos')) {
      switch (wLabel.labelpos.toLowerCase()) {
        case 'l':
          delta = wLabel.width / 2;
          break;
        case 'r':
          delta = -wLabel.width / 2;
          break;
      }
    }
    if (delta) {
      sum += reverseSep ? delta : -delta;
    }
    delta = 0;

    return sum;
  };
}

function width(g, v) {
  return g.node(v).width;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre/position/index.js






function position(g) {
  g = asNonCompoundGraph(g);

  positionY(g);
  forEach/* default */.Z(positionX(g), function (x, v) {
    g.node(v).x = x;
  });
}

function positionY(g) {
  var layering = buildLayerMatrix(g);
  var rankSep = g.graph().ranksep;
  var prevY = 0;
  forEach/* default */.Z(layering, function (layer) {
    var maxHeight = max/* default */.Z(
      map/* default */.Z(layer, function (v) {
        return g.node(v).height;
      })
    );
    forEach/* default */.Z(layer, function (v) {
      g.node(v).y = prevY + maxHeight / 2;
    });
    prevY += maxHeight + rankSep;
  });
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre/layout.js















function layout(g, opts) {
  var time = opts && opts.debugTiming ? util_time : notime;
  time('layout', function () {
    var layoutGraph = time('  buildLayoutGraph', function () {
      return buildLayoutGraph(g);
    });
    time('  runLayout', function () {
      runLayout(layoutGraph, time);
    });
    time('  updateInputGraph', function () {
      updateInputGraph(g, layoutGraph);
    });
  });
}

function runLayout(g, time) {
  time('    makeSpaceForEdgeLabels', function () {
    makeSpaceForEdgeLabels(g);
  });
  time('    removeSelfEdges', function () {
    removeSelfEdges(g);
  });
  time('    acyclic', function () {
    run(g);
  });
  time('    nestingGraph.run', function () {
    nesting_graph_run(g);
  });
  time('    rank', function () {
    rank(asNonCompoundGraph(g));
  });
  time('    injectEdgeLabelProxies', function () {
    injectEdgeLabelProxies(g);
  });
  time('    removeEmptyRanks', function () {
    removeEmptyRanks(g);
  });
  time('    nestingGraph.cleanup', function () {
    cleanup(g);
  });
  time('    normalizeRanks', function () {
    normalizeRanks(g);
  });
  time('    assignRankMinMax', function () {
    assignRankMinMax(g);
  });
  time('    removeEdgeLabelProxies', function () {
    removeEdgeLabelProxies(g);
  });
  time('    normalize.run', function () {
    normalize_run(g);
  });
  time('    parentDummyChains', function () {
    parentDummyChains(g);
  });
  time('    addBorderSegments', function () {
    addBorderSegments(g);
  });
  time('    order', function () {
    order(g);
  });
  time('    insertSelfEdges', function () {
    insertSelfEdges(g);
  });
  time('    adjustCoordinateSystem', function () {
    adjust(g);
  });
  time('    position', function () {
    position(g);
  });
  time('    positionSelfEdges', function () {
    positionSelfEdges(g);
  });
  time('    removeBorderNodes', function () {
    removeBorderNodes(g);
  });
  time('    normalize.undo', function () {
    normalize_undo(g);
  });
  time('    fixupEdgeLabelCoords', function () {
    fixupEdgeLabelCoords(g);
  });
  time('    undoCoordinateSystem', function () {
    coordinate_system_undo(g);
  });
  time('    translateGraph', function () {
    translateGraph(g);
  });
  time('    assignNodeIntersects', function () {
    assignNodeIntersects(g);
  });
  time('    reversePoints', function () {
    reversePointsForReversedEdges(g);
  });
  time('    acyclic.undo', function () {
    undo(g);
  });
}

/*
 * Copies final layout information from the layout graph back to the input
 * graph. This process only copies whitelisted attributes from the layout graph
 * to the input graph, so it serves as a good place to determine what
 * attributes can influence layout.
 */
function updateInputGraph(inputGraph, layoutGraph) {
  forEach/* default */.Z(inputGraph.nodes(), function (v) {
    var inputLabel = inputGraph.node(v);
    var layoutLabel = layoutGraph.node(v);

    if (inputLabel) {
      inputLabel.x = layoutLabel.x;
      inputLabel.y = layoutLabel.y;

      if (layoutGraph.children(v).length) {
        inputLabel.width = layoutLabel.width;
        inputLabel.height = layoutLabel.height;
      }
    }
  });

  forEach/* default */.Z(inputGraph.edges(), function (e) {
    var inputLabel = inputGraph.edge(e);
    var layoutLabel = layoutGraph.edge(e);

    inputLabel.points = layoutLabel.points;
    if (has/* default */.Z(layoutLabel, 'x')) {
      inputLabel.x = layoutLabel.x;
      inputLabel.y = layoutLabel.y;
    }
  });

  inputGraph.graph().width = layoutGraph.graph().width;
  inputGraph.graph().height = layoutGraph.graph().height;
}

var graphNumAttrs = ['nodesep', 'edgesep', 'ranksep', 'marginx', 'marginy'];
var graphDefaults = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: 'tb' };
var graphAttrs = ['acyclicer', 'ranker', 'rankdir', 'align'];
var nodeNumAttrs = ['width', 'height'];
var nodeDefaults = { width: 0, height: 0 };
var edgeNumAttrs = ['minlen', 'weight', 'width', 'height', 'labeloffset'];
var edgeDefaults = {
  minlen: 1,
  weight: 1,
  width: 0,
  height: 0,
  labeloffset: 10,
  labelpos: 'r',
};
var edgeAttrs = ['labelpos'];

/*
 * Constructs a new graph from the input graph, which can be used for layout.
 * This process copies only whitelisted attributes from the input graph to the
 * layout graph. Thus this function serves as a good place to determine what
 * attributes can influence layout.
 */
function buildLayoutGraph(inputGraph) {
  var g = new graphlib/* Graph */.k({ multigraph: true, compound: true });
  var graph = canonicalize(inputGraph.graph());

  g.setGraph(
    merge/* default */.Z({}, graphDefaults, selectNumberAttrs(graph, graphNumAttrs), pick/* default */.Z(graph, graphAttrs))
  );

  forEach/* default */.Z(inputGraph.nodes(), function (v) {
    var node = canonicalize(inputGraph.node(v));
    g.setNode(v, defaults/* default */.Z(selectNumberAttrs(node, nodeNumAttrs), nodeDefaults));
    g.setParent(v, inputGraph.parent(v));
  });

  forEach/* default */.Z(inputGraph.edges(), function (e) {
    var edge = canonicalize(inputGraph.edge(e));
    g.setEdge(
      e,
      merge/* default */.Z({}, edgeDefaults, selectNumberAttrs(edge, edgeNumAttrs), pick/* default */.Z(edge, edgeAttrs))
    );
  });

  return g;
}

/*
 * This idea comes from the Gansner paper: to account for edge labels in our
 * layout we split each rank in half by doubling minlen and halving ranksep.
 * Then we can place labels at these mid-points between nodes.
 *
 * We also add some minimal padding to the width to push the label for the edge
 * away from the edge itself a bit.
 */
function makeSpaceForEdgeLabels(g) {
  var graph = g.graph();
  graph.ranksep /= 2;
  forEach/* default */.Z(g.edges(), function (e) {
    var edge = g.edge(e);
    edge.minlen *= 2;
    if (edge.labelpos.toLowerCase() !== 'c') {
      if (graph.rankdir === 'TB' || graph.rankdir === 'BT') {
        edge.width += edge.labeloffset;
      } else {
        edge.height += edge.labeloffset;
      }
    }
  });
}

/*
 * Creates temporary dummy nodes that capture the rank in which each edge's
 * label is going to, if it has one of non-zero width and height. We do this
 * so that we can safely remove empty ranks while preserving balance for the
 * label's position.
 */
function injectEdgeLabelProxies(g) {
  forEach/* default */.Z(g.edges(), function (e) {
    var edge = g.edge(e);
    if (edge.width && edge.height) {
      var v = g.node(e.v);
      var w = g.node(e.w);
      var label = { rank: (w.rank - v.rank) / 2 + v.rank, e: e };
      addDummyNode(g, 'edge-proxy', label, '_ep');
    }
  });
}

function assignRankMinMax(g) {
  var maxRank = 0;
  forEach/* default */.Z(g.nodes(), function (v) {
    var node = g.node(v);
    if (node.borderTop) {
      node.minRank = g.node(node.borderTop).rank;
      node.maxRank = g.node(node.borderBottom).rank;
      // @ts-expect-error
      maxRank = max/* default */.Z(maxRank, node.maxRank);
    }
  });
  g.graph().maxRank = maxRank;
}

function removeEdgeLabelProxies(g) {
  forEach/* default */.Z(g.nodes(), function (v) {
    var node = g.node(v);
    if (node.dummy === 'edge-proxy') {
      g.edge(node.e).labelRank = node.rank;
      g.removeNode(v);
    }
  });
}

function translateGraph(g) {
  var minX = Number.POSITIVE_INFINITY;
  var maxX = 0;
  var minY = Number.POSITIVE_INFINITY;
  var maxY = 0;
  var graphLabel = g.graph();
  var marginX = graphLabel.marginx || 0;
  var marginY = graphLabel.marginy || 0;

  function getExtremes(attrs) {
    var x = attrs.x;
    var y = attrs.y;
    var w = attrs.width;
    var h = attrs.height;
    minX = Math.min(minX, x - w / 2);
    maxX = Math.max(maxX, x + w / 2);
    minY = Math.min(minY, y - h / 2);
    maxY = Math.max(maxY, y + h / 2);
  }

  forEach/* default */.Z(g.nodes(), function (v) {
    getExtremes(g.node(v));
  });
  forEach/* default */.Z(g.edges(), function (e) {
    var edge = g.edge(e);
    if (has/* default */.Z(edge, 'x')) {
      getExtremes(edge);
    }
  });

  minX -= marginX;
  minY -= marginY;

  forEach/* default */.Z(g.nodes(), function (v) {
    var node = g.node(v);
    node.x -= minX;
    node.y -= minY;
  });

  forEach/* default */.Z(g.edges(), function (e) {
    var edge = g.edge(e);
    forEach/* default */.Z(edge.points, function (p) {
      p.x -= minX;
      p.y -= minY;
    });
    if (has/* default */.Z(edge, 'x')) {
      edge.x -= minX;
    }
    if (has/* default */.Z(edge, 'y')) {
      edge.y -= minY;
    }
  });

  graphLabel.width = maxX - minX + marginX;
  graphLabel.height = maxY - minY + marginY;
}

function assignNodeIntersects(g) {
  forEach/* default */.Z(g.edges(), function (e) {
    var edge = g.edge(e);
    var nodeV = g.node(e.v);
    var nodeW = g.node(e.w);
    var p1, p2;
    if (!edge.points) {
      edge.points = [];
      p1 = nodeW;
      p2 = nodeV;
    } else {
      p1 = edge.points[0];
      p2 = edge.points[edge.points.length - 1];
    }
    edge.points.unshift(intersectRect(nodeV, p1));
    edge.points.push(intersectRect(nodeW, p2));
  });
}

function fixupEdgeLabelCoords(g) {
  forEach/* default */.Z(g.edges(), function (e) {
    var edge = g.edge(e);
    if (has/* default */.Z(edge, 'x')) {
      if (edge.labelpos === 'l' || edge.labelpos === 'r') {
        edge.width -= edge.labeloffset;
      }
      switch (edge.labelpos) {
        case 'l':
          edge.x -= edge.width / 2 + edge.labeloffset;
          break;
        case 'r':
          edge.x += edge.width / 2 + edge.labeloffset;
          break;
      }
    }
  });
}

function reversePointsForReversedEdges(g) {
  forEach/* default */.Z(g.edges(), function (e) {
    var edge = g.edge(e);
    if (edge.reversed) {
      edge.points.reverse();
    }
  });
}

function removeBorderNodes(g) {
  forEach/* default */.Z(g.nodes(), function (v) {
    if (g.children(v).length) {
      var node = g.node(v);
      var t = g.node(node.borderTop);
      var b = g.node(node.borderBottom);
      var l = g.node(lodash_es_last/* default */.Z(node.borderLeft));
      var r = g.node(lodash_es_last/* default */.Z(node.borderRight));

      node.width = Math.abs(r.x - l.x);
      node.height = Math.abs(b.y - t.y);
      node.x = l.x + node.width / 2;
      node.y = t.y + node.height / 2;
    }
  });

  forEach/* default */.Z(g.nodes(), function (v) {
    if (g.node(v).dummy === 'border') {
      g.removeNode(v);
    }
  });
}

function removeSelfEdges(g) {
  forEach/* default */.Z(g.edges(), function (e) {
    if (e.v === e.w) {
      var node = g.node(e.v);
      if (!node.selfEdges) {
        node.selfEdges = [];
      }
      node.selfEdges.push({ e: e, label: g.edge(e) });
      g.removeEdge(e);
    }
  });
}

function insertSelfEdges(g) {
  var layers = buildLayerMatrix(g);
  forEach/* default */.Z(layers, function (layer) {
    var orderShift = 0;
    forEach/* default */.Z(layer, function (v, i) {
      var node = g.node(v);
      node.order = i + orderShift;
      forEach/* default */.Z(node.selfEdges, function (selfEdge) {
        addDummyNode(
          g,
          'selfedge',
          {
            width: selfEdge.label.width,
            height: selfEdge.label.height,
            rank: node.rank,
            order: i + ++orderShift,
            e: selfEdge.e,
            label: selfEdge.label,
          },
          '_se'
        );
      });
      delete node.selfEdges;
    });
  });
}

function positionSelfEdges(g) {
  forEach/* default */.Z(g.nodes(), function (v) {
    var node = g.node(v);
    if (node.dummy === 'selfedge') {
      var selfNode = g.node(node.e.v);
      var x = selfNode.x + selfNode.width / 2;
      var y = selfNode.y;
      var dx = node.x - x;
      var dy = selfNode.height / 2;
      g.setEdge(node.e, node.label);
      g.removeNode(v);
      node.label.points = [
        { x: x + (2 * dx) / 3, y: y - dy },
        { x: x + (5 * dx) / 6, y: y - dy },
        { x: x + dx, y: y },
        { x: x + (5 * dx) / 6, y: y + dy },
        { x: x + (2 * dx) / 3, y: y + dy },
      ];
      node.label.x = node.x;
      node.label.y = node.y;
    }
  });
}

function selectNumberAttrs(obj, attrs) {
  return mapValues/* default */.Z(pick/* default */.Z(obj, attrs), Number);
}

function canonicalize(attrs) {
  var newAttrs = {};
  forEach/* default */.Z(attrs, function (v, k) {
    newAttrs[k.toLowerCase()] = v;
  });
  return newAttrs;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre/index.js








/***/ }),

/***/ 17896:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ Graph)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27431);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6964);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88987);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77251);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38364);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15943);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79156);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71180);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21335);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27942);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(43329);


var DEFAULT_EDGE_NAME = '\x00';
var GRAPH_NODE = '\x00';
var EDGE_KEY_DELIM = '\x01';

// Implementation notes:
//
//  * Node id query functions should return string ids for the nodes
//  * Edge id query functions should return an "edgeObj", edge object, that is
//    composed of enough information to uniquely identify an edge: {v, w, name}.
//  * Internally we use an "edgeId", a stringified form of the edgeObj, to
//    reference edges. This is because we need a performant way to look these
//    edges up and, object properties, which have string keys, are the closest
//    we're going to get to a performant hashtable in JavaScript.

// Implementation notes:
//
//  * Node id query functions should return string ids for the nodes
//  * Edge id query functions should return an "edgeObj", edge object, that is
//    composed of enough information to uniquely identify an edge: {v, w, name}.
//  * Internally we use an "edgeId", a stringified form of the edgeObj, to
//    reference edges. This is because we need a performant way to look these
//    edges up and, object properties, which have string keys, are the closest
//    we're going to get to a performant hashtable in JavaScript.
class Graph {
  constructor(opts = {}) {
    this._isDirected = lodash_es__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(opts, 'directed') ? opts.directed : true;
    this._isMultigraph = lodash_es__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(opts, 'multigraph') ? opts.multigraph : false;
    this._isCompound = lodash_es__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(opts, 'compound') ? opts.compound : false;

    // Label for the graph itself
    this._label = undefined;

    // Defaults to be set when creating a new node
    this._defaultNodeLabelFn = lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z(undefined);

    // Defaults to be set when creating a new edge
    this._defaultEdgeLabelFn = lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z(undefined);

    // v -> label
    this._nodes = {};

    if (this._isCompound) {
      // v -> parent
      this._parent = {};

      // v -> children
      this._children = {};
      this._children[GRAPH_NODE] = {};
    }

    // v -> edgeObj
    this._in = {};

    // u -> v -> Number
    this._preds = {};

    // v -> edgeObj
    this._out = {};

    // v -> w -> Number
    this._sucs = {};

    // e -> edgeObj
    this._edgeObjs = {};

    // e -> label
    this._edgeLabels = {};
  }
  /* === Graph functions ========= */
  isDirected() {
    return this._isDirected;
  }
  isMultigraph() {
    return this._isMultigraph;
  }
  isCompound() {
    return this._isCompound;
  }
  setGraph(label) {
    this._label = label;
    return this;
  }
  graph() {
    return this._label;
  }
  /* === Node functions ========== */
  setDefaultNodeLabel(newDefault) {
    if (!lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z(newDefault)) {
      newDefault = lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z(newDefault);
    }
    this._defaultNodeLabelFn = newDefault;
    return this;
  }
  nodeCount() {
    return this._nodeCount;
  }
  nodes() {
    return lodash_es__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z(this._nodes);
  }
  sources() {
    var self = this;
    return lodash_es__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z(this.nodes(), function (v) {
      return lodash_es__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z(self._in[v]);
    });
  }
  sinks() {
    var self = this;
    return lodash_es__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z(this.nodes(), function (v) {
      return lodash_es__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z(self._out[v]);
    });
  }
  setNodes(vs, value) {
    var args = arguments;
    var self = this;
    lodash_es__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z(vs, function (v) {
      if (args.length > 1) {
        self.setNode(v, value);
      } else {
        self.setNode(v);
      }
    });
    return this;
  }
  setNode(v, value) {
    if (lodash_es__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(this._nodes, v)) {
      if (arguments.length > 1) {
        this._nodes[v] = value;
      }
      return this;
    }

    // @ts-expect-error
    this._nodes[v] = arguments.length > 1 ? value : this._defaultNodeLabelFn(v);
    if (this._isCompound) {
      this._parent[v] = GRAPH_NODE;
      this._children[v] = {};
      this._children[GRAPH_NODE][v] = true;
    }
    this._in[v] = {};
    this._preds[v] = {};
    this._out[v] = {};
    this._sucs[v] = {};
    ++this._nodeCount;
    return this;
  }
  node(v) {
    return this._nodes[v];
  }
  hasNode(v) {
    return lodash_es__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(this._nodes, v);
  }
  removeNode(v) {
    var self = this;
    if (lodash_es__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(this._nodes, v)) {
      var removeEdge = function (e) {
        self.removeEdge(self._edgeObjs[e]);
      };
      delete this._nodes[v];
      if (this._isCompound) {
        this._removeFromParentsChildList(v);
        delete this._parent[v];
        lodash_es__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z(this.children(v), function (child) {
          self.setParent(child);
        });
        delete this._children[v];
      }
      lodash_es__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z(lodash_es__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z(this._in[v]), removeEdge);
      delete this._in[v];
      delete this._preds[v];
      lodash_es__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z(lodash_es__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z(this._out[v]), removeEdge);
      delete this._out[v];
      delete this._sucs[v];
      --this._nodeCount;
    }
    return this;
  }
  setParent(v, parent) {
    if (!this._isCompound) {
      throw new Error('Cannot set parent in a non-compound graph');
    }

    if (lodash_es__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z(parent)) {
      parent = GRAPH_NODE;
    } else {
      // Coerce parent to string
      parent += '';
      for (var ancestor = parent; !lodash_es__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z(ancestor); ancestor = this.parent(ancestor)) {
        if (ancestor === v) {
          throw new Error('Setting ' + parent + ' as parent of ' + v + ' would create a cycle');
        }
      }

      this.setNode(parent);
    }

    this.setNode(v);
    this._removeFromParentsChildList(v);
    this._parent[v] = parent;
    this._children[parent][v] = true;
    return this;
  }
  _removeFromParentsChildList(v) {
    delete this._children[this._parent[v]][v];
  }
  parent(v) {
    if (this._isCompound) {
      var parent = this._parent[v];
      if (parent !== GRAPH_NODE) {
        return parent;
      }
    }
  }
  children(v) {
    if (lodash_es__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z(v)) {
      v = GRAPH_NODE;
    }

    if (this._isCompound) {
      var children = this._children[v];
      if (children) {
        return lodash_es__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z(children);
      }
    } else if (v === GRAPH_NODE) {
      return this.nodes();
    } else if (this.hasNode(v)) {
      return [];
    }
  }
  predecessors(v) {
    var predsV = this._preds[v];
    if (predsV) {
      return lodash_es__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z(predsV);
    }
  }
  successors(v) {
    var sucsV = this._sucs[v];
    if (sucsV) {
      return lodash_es__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z(sucsV);
    }
  }
  neighbors(v) {
    var preds = this.predecessors(v);
    if (preds) {
      return lodash_es__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z(preds, this.successors(v));
    }
  }
  isLeaf(v) {
    var neighbors;
    if (this.isDirected()) {
      neighbors = this.successors(v);
    } else {
      neighbors = this.neighbors(v);
    }
    return neighbors.length === 0;
  }
  filterNodes(filter) {
    // @ts-expect-error
    var copy = new this.constructor({
      directed: this._isDirected,
      multigraph: this._isMultigraph,
      compound: this._isCompound,
    });

    copy.setGraph(this.graph());

    var self = this;
    lodash_es__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z(this._nodes, function (value, v) {
      if (filter(v)) {
        copy.setNode(v, value);
      }
    });

    lodash_es__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z(this._edgeObjs, function (e) {
      // @ts-expect-error
      if (copy.hasNode(e.v) && copy.hasNode(e.w)) {
        copy.setEdge(e, self.edge(e));
      }
    });

    var parents = {};
    function findParent(v) {
      var parent = self.parent(v);
      if (parent === undefined || copy.hasNode(parent)) {
        parents[v] = parent;
        return parent;
      } else if (parent in parents) {
        return parents[parent];
      } else {
        return findParent(parent);
      }
    }

    if (this._isCompound) {
      lodash_es__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z(copy.nodes(), function (v) {
        copy.setParent(v, findParent(v));
      });
    }

    return copy;
  }
  /* === Edge functions ========== */
  setDefaultEdgeLabel(newDefault) {
    if (!lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z(newDefault)) {
      newDefault = lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z(newDefault);
    }
    this._defaultEdgeLabelFn = newDefault;
    return this;
  }
  edgeCount() {
    return this._edgeCount;
  }
  edges() {
    return lodash_es__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z(this._edgeObjs);
  }
  setPath(vs, value) {
    var self = this;
    var args = arguments;
    lodash_es__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z(vs, function (v, w) {
      if (args.length > 1) {
        self.setEdge(v, w, value);
      } else {
        self.setEdge(v, w);
      }
      return w;
    });
    return this;
  }
  /*
   * setEdge(v, w, [value, [name]])
   * setEdge({ v, w, [name] }, [value])
   */
  setEdge() {
    var v, w, name, value;
    var valueSpecified = false;
    var arg0 = arguments[0];

    if (typeof arg0 === 'object' && arg0 !== null && 'v' in arg0) {
      v = arg0.v;
      w = arg0.w;
      name = arg0.name;
      if (arguments.length === 2) {
        value = arguments[1];
        valueSpecified = true;
      }
    } else {
      v = arg0;
      w = arguments[1];
      name = arguments[3];
      if (arguments.length > 2) {
        value = arguments[2];
        valueSpecified = true;
      }
    }

    v = '' + v;
    w = '' + w;
    if (!lodash_es__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z(name)) {
      name = '' + name;
    }

    var e = edgeArgsToId(this._isDirected, v, w, name);
    if (lodash_es__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(this._edgeLabels, e)) {
      if (valueSpecified) {
        this._edgeLabels[e] = value;
      }
      return this;
    }

    if (!lodash_es__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z(name) && !this._isMultigraph) {
      throw new Error('Cannot set a named edge when isMultigraph = false');
    }

    // It didn't exist, so we need to create it.
    // First ensure the nodes exist.
    this.setNode(v);
    this.setNode(w);

    // @ts-expect-error
    this._edgeLabels[e] = valueSpecified ? value : this._defaultEdgeLabelFn(v, w, name);

    var edgeObj = edgeArgsToObj(this._isDirected, v, w, name);
    // Ensure we add undirected edges in a consistent way.
    v = edgeObj.v;
    w = edgeObj.w;

    Object.freeze(edgeObj);
    this._edgeObjs[e] = edgeObj;
    incrementOrInitEntry(this._preds[w], v);
    incrementOrInitEntry(this._sucs[v], w);
    this._in[w][e] = edgeObj;
    this._out[v][e] = edgeObj;
    this._edgeCount++;
    return this;
  }
  edge(v, w, name) {
    var e =
      arguments.length === 1
        ? edgeObjToId(this._isDirected, arguments[0])
        : edgeArgsToId(this._isDirected, v, w, name);
    return this._edgeLabels[e];
  }
  hasEdge(v, w, name) {
    var e =
      arguments.length === 1
        ? edgeObjToId(this._isDirected, arguments[0])
        : edgeArgsToId(this._isDirected, v, w, name);
    return lodash_es__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(this._edgeLabels, e);
  }
  removeEdge(v, w, name) {
    var e =
      arguments.length === 1
        ? edgeObjToId(this._isDirected, arguments[0])
        : edgeArgsToId(this._isDirected, v, w, name);
    var edge = this._edgeObjs[e];
    if (edge) {
      v = edge.v;
      w = edge.w;
      delete this._edgeLabels[e];
      delete this._edgeObjs[e];
      decrementOrRemoveEntry(this._preds[w], v);
      decrementOrRemoveEntry(this._sucs[v], w);
      delete this._in[w][e];
      delete this._out[v][e];
      this._edgeCount--;
    }
    return this;
  }
  inEdges(v, u) {
    var inV = this._in[v];
    if (inV) {
      var edges = lodash_es__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z(inV);
      if (!u) {
        return edges;
      }
      return lodash_es__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z(edges, function (edge) {
        return edge.v === u;
      });
    }
  }
  outEdges(v, w) {
    var outV = this._out[v];
    if (outV) {
      var edges = lodash_es__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z(outV);
      if (!w) {
        return edges;
      }
      return lodash_es__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z(edges, function (edge) {
        return edge.w === w;
      });
    }
  }
  nodeEdges(v, w) {
    var inEdges = this.inEdges(v, w);
    if (inEdges) {
      return inEdges.concat(this.outEdges(v, w));
    }
  }
}

/* Number of nodes in the graph. Should only be changed by the implementation. */
Graph.prototype._nodeCount = 0;

/* Number of edges in the graph. Should only be changed by the implementation. */
Graph.prototype._edgeCount = 0;

function incrementOrInitEntry(map, k) {
  if (map[k]) {
    map[k]++;
  } else {
    map[k] = 1;
  }
}

function decrementOrRemoveEntry(map, k) {
  if (!--map[k]) {
    delete map[k];
  }
}

function edgeArgsToId(isDirected, v_, w_, name) {
  var v = '' + v_;
  var w = '' + w_;
  if (!isDirected && v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }
  return v + EDGE_KEY_DELIM + w + EDGE_KEY_DELIM + (lodash_es__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z(name) ? DEFAULT_EDGE_NAME : name);
}

function edgeArgsToObj(isDirected, v_, w_, name) {
  var v = '' + v_;
  var w = '' + w_;
  if (!isDirected && v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }
  var edgeObj = { v: v, w: w };
  if (name) {
    edgeObj.name = name;
  }
  return edgeObj;
}

function edgeObjToId(isDirected, edgeObj) {
  return edgeArgsToId(isDirected, edgeObj.v, edgeObj.w, edgeObj.name);
}


/***/ }),

/***/ 76003:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* reexport safe */ _graph_js__WEBPACK_IMPORTED_MODULE_0__.k)
/* harmony export */ });
/* unused harmony export version */
/* harmony import */ var _graph_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17896);
// Includes only the "core" of graphlib



const version = '2.1.9-pre';




/***/ }),

/***/ 66468:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ write)
/* harmony export */ });
/* unused harmony export read */
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71180);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25043);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55247);
/* harmony import */ var _graph_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17896);





function write(g) {
  var json = {
    options: {
      directed: g.isDirected(),
      multigraph: g.isMultigraph(),
      compound: g.isCompound(),
    },
    nodes: writeNodes(g),
    edges: writeEdges(g),
  };
  if (!lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z(g.graph())) {
    json.value = lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z(g.graph());
  }
  return json;
}

function writeNodes(g) {
  return lodash_es__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z(g.nodes(), function (v) {
    var nodeValue = g.node(v);
    var parent = g.parent(v);
    var node = { v: v };
    if (!lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z(nodeValue)) {
      node.value = nodeValue;
    }
    if (!lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z(parent)) {
      node.parent = parent;
    }
    return node;
  });
}

function writeEdges(g) {
  return lodash_es__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z(g.edges(), function (e) {
    var edgeValue = g.edge(e);
    var edge = { v: e.v, w: e.w };
    if (!lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z(e.name)) {
      edge.name = e.name;
    }
    if (!lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z(edgeValue)) {
      edge.value = edgeValue;
    }
    return edge;
  });
}

function read(json) {
  var g = new Graph(json.options).setGraph(json.value);
  _.each(json.nodes, function (entry) {
    g.setNode(entry.v, entry.value);
    if (entry.parent) {
      g.setParent(entry.v, entry.parent);
    }
  });
  _.each(json.edges, function (entry) {
    g.setEdge({ v: entry.v, w: entry.w, name: entry.name }, entry.value);
  });
  return g;
}


/***/ }),

/***/ 59626:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ insertMarkers$1),
/* harmony export */   "b": () => (/* binding */ clear$1),
/* harmony export */   "c": () => (/* binding */ createLabel$1),
/* harmony export */   "d": () => (/* binding */ clear),
/* harmony export */   "e": () => (/* binding */ insertNode),
/* harmony export */   "f": () => (/* binding */ insertEdgeLabel),
/* harmony export */   "g": () => (/* binding */ insertEdge),
/* harmony export */   "h": () => (/* binding */ positionEdgeLabel),
/* harmony export */   "i": () => (/* binding */ intersectRect$1),
/* harmony export */   "p": () => (/* binding */ positionNode),
/* harmony export */   "s": () => (/* binding */ setNodeElem),
/* harmony export */   "u": () => (/* binding */ updateNodeBounds)
/* harmony export */ });
/* harmony import */ var _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90403);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63321);
/* harmony import */ var _mermaidAPI_0716c7c2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85866);
/* harmony import */ var _svgDraw_6a237a99_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62533);
/* harmony import */ var _utils_d5eeff82_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2332);





const insertMarkers = (elem, markerArray, type, id) => {
  markerArray.forEach((markerName) => {
    markers[markerName](elem, type, id);
  });
};
const extension = (elem, type, id) => {
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.trace("Making markers for ", id);
  elem.append("defs").append("marker").attr("id", type + "-extensionStart").attr("class", "marker extension " + type).attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z");
  elem.append("defs").append("marker").attr("id", type + "-extensionEnd").attr("class", "marker extension " + type).attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
};
const composition = (elem, type) => {
  elem.append("defs").append("marker").attr("id", type + "-compositionStart").attr("class", "marker composition " + type).attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  elem.append("defs").append("marker").attr("id", type + "-compositionEnd").attr("class", "marker composition " + type).attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
};
const aggregation = (elem, type) => {
  elem.append("defs").append("marker").attr("id", type + "-aggregationStart").attr("class", "marker aggregation " + type).attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  elem.append("defs").append("marker").attr("id", type + "-aggregationEnd").attr("class", "marker aggregation " + type).attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
};
const dependency = (elem, type) => {
  elem.append("defs").append("marker").attr("id", type + "-dependencyStart").attr("class", "marker dependency " + type).attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z");
  elem.append("defs").append("marker").attr("id", type + "-dependencyEnd").attr("class", "marker dependency " + type).attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
};
const lollipop = (elem, type) => {
  elem.append("defs").append("marker").attr("id", type + "-lollipopStart").attr("class", "marker lollipop " + type).attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "white").attr("cx", 6).attr("cy", 7).attr("r", 6);
};
const point = (elem, type) => {
  elem.append("marker").attr("id", type + "-pointEnd").attr("class", "marker " + type).attr("viewBox", "0 0 12 20").attr("refX", 10).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  elem.append("marker").attr("id", type + "-pointStart").attr("class", "marker " + type).attr("viewBox", "0 0 10 10").attr("refX", 0).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
};
const circle$1 = (elem, type) => {
  elem.append("marker").attr("id", type + "-circleEnd").attr("class", "marker " + type).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  elem.append("marker").attr("id", type + "-circleStart").attr("class", "marker " + type).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
};
const cross = (elem, type) => {
  elem.append("marker").attr("id", type + "-crossEnd").attr("class", "marker cross " + type).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
  elem.append("marker").attr("id", type + "-crossStart").attr("class", "marker cross " + type).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
};
const barb = (elem, type) => {
  elem.append("defs").append("marker").attr("id", type + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "strokeWidth").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
};
const markers = {
  extension,
  composition,
  aggregation,
  dependency,
  lollipop,
  point,
  circle: circle$1,
  cross,
  barb
};
const insertMarkers$1 = insertMarkers;
function applyStyle(dom, styleFn) {
  if (styleFn) {
    dom.attr("style", styleFn);
  }
}
function addHtmlLabel(node) {
  const fo = (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject"));
  const div = fo.append("xhtml:div");
  const label = node.label;
  const labelClass = node.isNode ? "nodeLabel" : "edgeLabel";
  div.html(
    '<span class="' + labelClass + '" ' + (node.labelStyle ? 'style="' + node.labelStyle + '"' : "") + ">" + label + "</span>"
  );
  applyStyle(div, node.labelStyle);
  div.style("display", "inline-block");
  div.style("white-space", "nowrap");
  div.attr("xmlns", "http://www.w3.org/1999/xhtml");
  return fo.node();
}
const createLabel = (_vertexText, style, isTitle, isNode) => {
  let vertexText = _vertexText || "";
  if (typeof vertexText === "object") {
    vertexText = vertexText[0];
  }
  if ((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.j)((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.htmlLabels)) {
    vertexText = vertexText.replace(/\\n|\n/g, "<br />");
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.info("vertexText" + vertexText);
    const node = {
      isNode,
      label: (0,_mermaidAPI_0716c7c2_js__WEBPACK_IMPORTED_MODULE_2__.d)(vertexText).replace(
        /fa[blrs]?:fa-[\w-]+/g,
        (s) => `<i class='${s.replace(":", " ")}'></i>`
      ),
      labelStyle: style.replace("fill:", "color:")
    };
    let vertexNode = addHtmlLabel(node);
    return vertexNode;
  } else {
    const svgLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    svgLabel.setAttribute("style", style.replace("color:", "fill:"));
    let rows = [];
    if (typeof vertexText === "string") {
      rows = vertexText.split(/\\n|\n|<br\s*\/?>/gi);
    } else if (Array.isArray(vertexText)) {
      rows = vertexText;
    } else {
      rows = [];
    }
    for (const row of rows) {
      const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      tspan.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
      tspan.setAttribute("dy", "1em");
      tspan.setAttribute("x", "0");
      if (isTitle) {
        tspan.setAttribute("class", "title-row");
      } else {
        tspan.setAttribute("class", "row");
      }
      tspan.textContent = row.trim();
      svgLabel.appendChild(tspan);
    }
    return svgLabel;
  }
};
const createLabel$1 = createLabel;
const labelHelper = (parent, node, _classes, isNode) => {
  let classes;
  if (!_classes) {
    classes = "node default";
  } else {
    classes = _classes;
  }
  const shapeSvg = parent.insert("g").attr("class", classes).attr("id", node.domId || node.id);
  const label = shapeSvg.insert("g").attr("class", "label").attr("style", node.labelStyle);
  let labelText;
  if (node.labelText === void 0) {
    labelText = "";
  } else {
    labelText = typeof node.labelText === "string" ? node.labelText : node.labelText[0];
  }
  const text = label.node().appendChild(
    createLabel$1(
      (0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.b)((0,_mermaidAPI_0716c7c2_js__WEBPACK_IMPORTED_MODULE_2__.d)(labelText), (0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.g)()),
      node.labelStyle,
      false,
      isNode
    )
  );
  let bbox = text.getBBox();
  if ((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.j)((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.htmlLabels)) {
    const div = text.children[0];
    const dv = (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)(text);
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  const halfPadding = node.padding / 2;
  label.attr("transform", "translate(" + -bbox.width / 2 + ", " + -bbox.height / 2 + ")");
  return { shapeSvg, bbox, halfPadding, label };
};
const updateNodeBounds = (node, element) => {
  const bbox = element.node().getBBox();
  node.width = bbox.width;
  node.height = bbox.height;
};
function insertPolygonShape(parent, w, h, points) {
  return parent.insert("polygon", ":first-child").attr(
    "points",
    points.map(function(d) {
      return d.x + "," + d.y;
    }).join(" ")
  ).attr("class", "label-container").attr("transform", "translate(" + -w / 2 + "," + h / 2 + ")");
}
function intersectNode(node, point2) {
  return node.intersect(point2);
}
function intersectEllipse(node, rx, ry, point2) {
  var cx = node.x;
  var cy = node.y;
  var px = cx - point2.x;
  var py = cy - point2.y;
  var det = Math.sqrt(rx * rx * py * py + ry * ry * px * px);
  var dx = Math.abs(rx * ry * px / det);
  if (point2.x < cx) {
    dx = -dx;
  }
  var dy = Math.abs(rx * ry * py / det);
  if (point2.y < cy) {
    dy = -dy;
  }
  return { x: cx + dx, y: cy + dy };
}
function intersectCircle(node, rx, point2) {
  return intersectEllipse(node, rx, rx, point2);
}
function intersectLine(p1, p2, q1, q2) {
  var a1, a2, b1, b2, c1, c2;
  var r1, r2, r3, r4;
  var denom, offset, num;
  var x, y;
  a1 = p2.y - p1.y;
  b1 = p1.x - p2.x;
  c1 = p2.x * p1.y - p1.x * p2.y;
  r3 = a1 * q1.x + b1 * q1.y + c1;
  r4 = a1 * q2.x + b1 * q2.y + c1;
  if (r3 !== 0 && r4 !== 0 && sameSign(r3, r4)) {
    return;
  }
  a2 = q2.y - q1.y;
  b2 = q1.x - q2.x;
  c2 = q2.x * q1.y - q1.x * q2.y;
  r1 = a2 * p1.x + b2 * p1.y + c2;
  r2 = a2 * p2.x + b2 * p2.y + c2;
  if (r1 !== 0 && r2 !== 0 && sameSign(r1, r2)) {
    return;
  }
  denom = a1 * b2 - a2 * b1;
  if (denom === 0) {
    return;
  }
  offset = Math.abs(denom / 2);
  num = b1 * c2 - b2 * c1;
  x = num < 0 ? (num - offset) / denom : (num + offset) / denom;
  num = a2 * c1 - a1 * c2;
  y = num < 0 ? (num - offset) / denom : (num + offset) / denom;
  return { x, y };
}
function sameSign(r1, r2) {
  return r1 * r2 > 0;
}
function intersectPolygon(node, polyPoints, point2) {
  var x1 = node.x;
  var y1 = node.y;
  var intersections = [];
  var minX = Number.POSITIVE_INFINITY;
  var minY = Number.POSITIVE_INFINITY;
  if (typeof polyPoints.forEach === "function") {
    polyPoints.forEach(function(entry) {
      minX = Math.min(minX, entry.x);
      minY = Math.min(minY, entry.y);
    });
  } else {
    minX = Math.min(minX, polyPoints.x);
    minY = Math.min(minY, polyPoints.y);
  }
  var left = x1 - node.width / 2 - minX;
  var top = y1 - node.height / 2 - minY;
  for (var i = 0; i < polyPoints.length; i++) {
    var p1 = polyPoints[i];
    var p2 = polyPoints[i < polyPoints.length - 1 ? i + 1 : 0];
    var intersect2 = intersectLine(
      node,
      point2,
      { x: left + p1.x, y: top + p1.y },
      { x: left + p2.x, y: top + p2.y }
    );
    if (intersect2) {
      intersections.push(intersect2);
    }
  }
  if (!intersections.length) {
    return node;
  }
  if (intersections.length > 1) {
    intersections.sort(function(p, q) {
      var pdx = p.x - point2.x;
      var pdy = p.y - point2.y;
      var distp = Math.sqrt(pdx * pdx + pdy * pdy);
      var qdx = q.x - point2.x;
      var qdy = q.y - point2.y;
      var distq = Math.sqrt(qdx * qdx + qdy * qdy);
      return distp < distq ? -1 : distp === distq ? 0 : 1;
    });
  }
  return intersections[0];
}
const intersectRect = (node, point2) => {
  var x = node.x;
  var y = node.y;
  var dx = point2.x - x;
  var dy = point2.y - y;
  var w = node.width / 2;
  var h = node.height / 2;
  var sx, sy;
  if (Math.abs(dy) * w > Math.abs(dx) * h) {
    if (dy < 0) {
      h = -h;
    }
    sx = dy === 0 ? 0 : h * dx / dy;
    sy = h;
  } else {
    if (dx < 0) {
      w = -w;
    }
    sx = w;
    sy = dx === 0 ? 0 : w * dy / dx;
  }
  return { x: x + sx, y: y + sy };
};
const intersectRect$1 = intersectRect;
const intersect = {
  node: intersectNode,
  circle: intersectCircle,
  ellipse: intersectEllipse,
  polygon: intersectPolygon,
  rect: intersectRect$1
};
const note = (parent, node) => {
  const { shapeSvg, bbox, halfPadding } = labelHelper(parent, node, "node " + node.classes, true);
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.info("Classes = ", node.classes);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  rect2.attr("rx", node.rx).attr("ry", node.ry).attr("x", -bbox.width / 2 - halfPadding).attr("y", -bbox.height / 2 - halfPadding).attr("width", bbox.width + node.padding).attr("height", bbox.height + node.padding);
  updateNodeBounds(node, rect2);
  node.intersect = function(point2) {
    return intersect.rect(node, point2);
  };
  return shapeSvg;
};
const note$1 = note;
const question = (parent, node) => {
  const { shapeSvg, bbox } = labelHelper(parent, node, void 0, true);
  const w = bbox.width + node.padding;
  const h = bbox.height + node.padding;
  const s = w + h;
  const points = [
    { x: s / 2, y: 0 },
    { x: s, y: -s / 2 },
    { x: s / 2, y: -s },
    { x: 0, y: -s / 2 }
  ];
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.info("Question main (Circle)");
  const questionElem = insertPolygonShape(shapeSvg, s, s, points);
  questionElem.attr("style", node.style);
  updateNodeBounds(node, questionElem);
  node.intersect = function(point2) {
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.warn("Intersect called");
    return intersect.polygon(node, points, point2);
  };
  return shapeSvg;
};
const choice = (parent, node) => {
  const shapeSvg = parent.insert("g").attr("class", "node default").attr("id", node.domId || node.id);
  const s = 28;
  const points = [
    { x: 0, y: s / 2 },
    { x: s / 2, y: 0 },
    { x: 0, y: -s / 2 },
    { x: -s / 2, y: 0 }
  ];
  const choice2 = shapeSvg.insert("polygon", ":first-child").attr(
    "points",
    points.map(function(d) {
      return d.x + "," + d.y;
    }).join(" ")
  );
  choice2.attr("class", "state-start").attr("r", 7).attr("width", 28).attr("height", 28);
  node.width = 28;
  node.height = 28;
  node.intersect = function(point2) {
    return intersect.circle(node, 14, point2);
  };
  return shapeSvg;
};
const hexagon = (parent, node) => {
  const { shapeSvg, bbox } = labelHelper(parent, node, void 0, true);
  const f = 4;
  const h = bbox.height + node.padding;
  const m = h / f;
  const w = bbox.width + 2 * m + node.padding;
  const points = [
    { x: m, y: 0 },
    { x: w - m, y: 0 },
    { x: w, y: -h / 2 },
    { x: w - m, y: -h },
    { x: m, y: -h },
    { x: 0, y: -h / 2 }
  ];
  const hex = insertPolygonShape(shapeSvg, w, h, points);
  hex.attr("style", node.style);
  updateNodeBounds(node, hex);
  node.intersect = function(point2) {
    return intersect.polygon(node, points, point2);
  };
  return shapeSvg;
};
const rect_left_inv_arrow = (parent, node) => {
  const { shapeSvg, bbox } = labelHelper(parent, node, void 0, true);
  const w = bbox.width + node.padding;
  const h = bbox.height + node.padding;
  const points = [
    { x: -h / 2, y: 0 },
    { x: w, y: 0 },
    { x: w, y: -h },
    { x: -h / 2, y: -h },
    { x: 0, y: -h / 2 }
  ];
  const el = insertPolygonShape(shapeSvg, w, h, points);
  el.attr("style", node.style);
  node.width = w + h;
  node.height = h;
  node.intersect = function(point2) {
    return intersect.polygon(node, points, point2);
  };
  return shapeSvg;
};
const lean_right = (parent, node) => {
  const { shapeSvg, bbox } = labelHelper(parent, node, void 0, true);
  const w = bbox.width + node.padding;
  const h = bbox.height + node.padding;
  const points = [
    { x: -2 * h / 6, y: 0 },
    { x: w - h / 6, y: 0 },
    { x: w + 2 * h / 6, y: -h },
    { x: h / 6, y: -h }
  ];
  const el = insertPolygonShape(shapeSvg, w, h, points);
  el.attr("style", node.style);
  updateNodeBounds(node, el);
  node.intersect = function(point2) {
    return intersect.polygon(node, points, point2);
  };
  return shapeSvg;
};
const lean_left = (parent, node) => {
  const { shapeSvg, bbox } = labelHelper(parent, node, void 0, true);
  const w = bbox.width + node.padding;
  const h = bbox.height + node.padding;
  const points = [
    { x: 2 * h / 6, y: 0 },
    { x: w + h / 6, y: 0 },
    { x: w - 2 * h / 6, y: -h },
    { x: -h / 6, y: -h }
  ];
  const el = insertPolygonShape(shapeSvg, w, h, points);
  el.attr("style", node.style);
  updateNodeBounds(node, el);
  node.intersect = function(point2) {
    return intersect.polygon(node, points, point2);
  };
  return shapeSvg;
};
const trapezoid = (parent, node) => {
  const { shapeSvg, bbox } = labelHelper(parent, node, void 0, true);
  const w = bbox.width + node.padding;
  const h = bbox.height + node.padding;
  const points = [
    { x: -2 * h / 6, y: 0 },
    { x: w + 2 * h / 6, y: 0 },
    { x: w - h / 6, y: -h },
    { x: h / 6, y: -h }
  ];
  const el = insertPolygonShape(shapeSvg, w, h, points);
  el.attr("style", node.style);
  updateNodeBounds(node, el);
  node.intersect = function(point2) {
    return intersect.polygon(node, points, point2);
  };
  return shapeSvg;
};
const inv_trapezoid = (parent, node) => {
  const { shapeSvg, bbox } = labelHelper(parent, node, void 0, true);
  const w = bbox.width + node.padding;
  const h = bbox.height + node.padding;
  const points = [
    { x: h / 6, y: 0 },
    { x: w - h / 6, y: 0 },
    { x: w + 2 * h / 6, y: -h },
    { x: -2 * h / 6, y: -h }
  ];
  const el = insertPolygonShape(shapeSvg, w, h, points);
  el.attr("style", node.style);
  updateNodeBounds(node, el);
  node.intersect = function(point2) {
    return intersect.polygon(node, points, point2);
  };
  return shapeSvg;
};
const rect_right_inv_arrow = (parent, node) => {
  const { shapeSvg, bbox } = labelHelper(parent, node, void 0, true);
  const w = bbox.width + node.padding;
  const h = bbox.height + node.padding;
  const points = [
    { x: 0, y: 0 },
    { x: w + h / 2, y: 0 },
    { x: w, y: -h / 2 },
    { x: w + h / 2, y: -h },
    { x: 0, y: -h }
  ];
  const el = insertPolygonShape(shapeSvg, w, h, points);
  el.attr("style", node.style);
  updateNodeBounds(node, el);
  node.intersect = function(point2) {
    return intersect.polygon(node, points, point2);
  };
  return shapeSvg;
};
const cylinder = (parent, node) => {
  const { shapeSvg, bbox } = labelHelper(parent, node, void 0, true);
  const w = bbox.width + node.padding;
  const rx = w / 2;
  const ry = rx / (2.5 + w / 50);
  const h = bbox.height + ry + node.padding;
  const shape = "M 0," + ry + " a " + rx + "," + ry + " 0,0,0 " + w + " 0 a " + rx + "," + ry + " 0,0,0 " + -w + " 0 l 0," + h + " a " + rx + "," + ry + " 0,0,0 " + w + " 0 l 0," + -h;
  const el = shapeSvg.attr("label-offset-y", ry).insert("path", ":first-child").attr("style", node.style).attr("d", shape).attr("transform", "translate(" + -w / 2 + "," + -(h / 2 + ry) + ")");
  updateNodeBounds(node, el);
  node.intersect = function(point2) {
    const pos = intersect.rect(node, point2);
    const x = pos.x - node.x;
    if (rx != 0 && (Math.abs(x) < node.width / 2 || Math.abs(x) == node.width / 2 && Math.abs(pos.y - node.y) > node.height / 2 - ry)) {
      let y = ry * ry * (1 - x * x / (rx * rx));
      if (y != 0) {
        y = Math.sqrt(y);
      }
      y = ry - y;
      if (point2.y - node.y > 0) {
        y = -y;
      }
      pos.y += y;
    }
    return pos;
  };
  return shapeSvg;
};
const rect = (parent, node) => {
  const { shapeSvg, bbox, halfPadding } = labelHelper(parent, node, "node " + node.classes, true);
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.trace("Classes = ", node.classes);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const totalWidth = bbox.width + node.padding;
  const totalHeight = bbox.height + node.padding;
  rect2.attr("class", "basic label-container").attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("x", -bbox.width / 2 - halfPadding).attr("y", -bbox.height / 2 - halfPadding).attr("width", totalWidth).attr("height", totalHeight);
  if (node.props) {
    const propKeys = new Set(Object.keys(node.props));
    if (node.props.borders) {
      applyNodePropertyBorders(rect2, node.props.borders, totalWidth, totalHeight);
      propKeys.delete("borders");
    }
    propKeys.forEach((propKey) => {
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.warn(`Unknown node property ${propKey}`);
    });
  }
  updateNodeBounds(node, rect2);
  node.intersect = function(point2) {
    return intersect.rect(node, point2);
  };
  return shapeSvg;
};
const labelRect = (parent, node) => {
  const { shapeSvg } = labelHelper(parent, node, "label", true);
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.trace("Classes = ", node.classes);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const totalWidth = 0;
  const totalHeight = 0;
  rect2.attr("width", totalWidth).attr("height", totalHeight);
  shapeSvg.attr("class", "label edgeLabel");
  if (node.props) {
    const propKeys = new Set(Object.keys(node.props));
    if (node.props.borders) {
      applyNodePropertyBorders(rect2, node.props.borders, totalWidth, totalHeight);
      propKeys.delete("borders");
    }
    propKeys.forEach((propKey) => {
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.warn(`Unknown node property ${propKey}`);
    });
  }
  updateNodeBounds(node, rect2);
  node.intersect = function(point2) {
    return intersect.rect(node, point2);
  };
  return shapeSvg;
};
function applyNodePropertyBorders(rect2, borders, totalWidth, totalHeight) {
  const strokeDashArray = [];
  const addBorder = (length) => {
    strokeDashArray.push(length, 0);
  };
  const skipBorder = (length) => {
    strokeDashArray.push(0, length);
  };
  if (borders.includes("t")) {
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.debug("add top border");
    addBorder(totalWidth);
  } else {
    skipBorder(totalWidth);
  }
  if (borders.includes("r")) {
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.debug("add right border");
    addBorder(totalHeight);
  } else {
    skipBorder(totalHeight);
  }
  if (borders.includes("b")) {
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.debug("add bottom border");
    addBorder(totalWidth);
  } else {
    skipBorder(totalWidth);
  }
  if (borders.includes("l")) {
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.debug("add left border");
    addBorder(totalHeight);
  } else {
    skipBorder(totalHeight);
  }
  rect2.attr("stroke-dasharray", strokeDashArray.join(" "));
}
const rectWithTitle = (parent, node) => {
  let classes;
  if (!node.classes) {
    classes = "node default";
  } else {
    classes = "node " + node.classes;
  }
  const shapeSvg = parent.insert("g").attr("class", classes).attr("id", node.domId || node.id);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const innerLine = shapeSvg.insert("line");
  const label = shapeSvg.insert("g").attr("class", "label");
  const text2 = node.labelText.flat ? node.labelText.flat() : node.labelText;
  let title = "";
  if (typeof text2 === "object") {
    title = text2[0];
  } else {
    title = text2;
  }
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.info("Label text abc79", title, text2, typeof text2 === "object");
  const text = label.node().appendChild(createLabel$1(title, node.labelStyle, true, true));
  let bbox = { width: 0, height: 0 };
  if ((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.j)((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.htmlLabels)) {
    const div = text.children[0];
    const dv = (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)(text);
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.info("Text 2", text2);
  const textRows = text2.slice(1, text2.length);
  let titleBox = text.getBBox();
  const descr = label.node().appendChild(
    createLabel$1(textRows.join ? textRows.join("<br/>") : textRows, node.labelStyle, true, true)
  );
  if ((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.j)((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.htmlLabels)) {
    const div = descr.children[0];
    const dv = (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)(descr);
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  const halfPadding = node.padding / 2;
  (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)(descr).attr(
    "transform",
    "translate( " + // (titleBox.width - bbox.width) / 2 +
    (bbox.width > titleBox.width ? 0 : (titleBox.width - bbox.width) / 2) + ", " + (titleBox.height + halfPadding + 5) + ")"
  );
  (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)(text).attr(
    "transform",
    "translate( " + // (titleBox.width - bbox.width) / 2 +
    (bbox.width < titleBox.width ? 0 : -(titleBox.width - bbox.width) / 2) + ", " + 0 + ")"
  );
  bbox = label.node().getBBox();
  label.attr(
    "transform",
    "translate(" + -bbox.width / 2 + ", " + (-bbox.height / 2 - halfPadding + 3) + ")"
  );
  rect2.attr("class", "outer title-state").attr("x", -bbox.width / 2 - halfPadding).attr("y", -bbox.height / 2 - halfPadding).attr("width", bbox.width + node.padding).attr("height", bbox.height + node.padding);
  innerLine.attr("class", "divider").attr("x1", -bbox.width / 2 - halfPadding).attr("x2", bbox.width / 2 + halfPadding).attr("y1", -bbox.height / 2 - halfPadding + titleBox.height + halfPadding).attr("y2", -bbox.height / 2 - halfPadding + titleBox.height + halfPadding);
  updateNodeBounds(node, rect2);
  node.intersect = function(point2) {
    return intersect.rect(node, point2);
  };
  return shapeSvg;
};
const stadium = (parent, node) => {
  const { shapeSvg, bbox } = labelHelper(parent, node, void 0, true);
  const h = bbox.height + node.padding;
  const w = bbox.width + h / 4 + node.padding;
  const rect2 = shapeSvg.insert("rect", ":first-child").attr("style", node.style).attr("rx", h / 2).attr("ry", h / 2).attr("x", -w / 2).attr("y", -h / 2).attr("width", w).attr("height", h);
  updateNodeBounds(node, rect2);
  node.intersect = function(point2) {
    return intersect.rect(node, point2);
  };
  return shapeSvg;
};
const circle = (parent, node) => {
  const { shapeSvg, bbox, halfPadding } = labelHelper(parent, node, void 0, true);
  const circle2 = shapeSvg.insert("circle", ":first-child");
  circle2.attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("r", bbox.width / 2 + halfPadding).attr("width", bbox.width + node.padding).attr("height", bbox.height + node.padding);
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.info("Circle main");
  updateNodeBounds(node, circle2);
  node.intersect = function(point2) {
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.info("Circle intersect", node, bbox.width / 2 + halfPadding, point2);
    return intersect.circle(node, bbox.width / 2 + halfPadding, point2);
  };
  return shapeSvg;
};
const doublecircle = (parent, node) => {
  const { shapeSvg, bbox, halfPadding } = labelHelper(parent, node, void 0, true);
  const gap = 5;
  const circleGroup = shapeSvg.insert("g", ":first-child");
  const outerCircle = circleGroup.insert("circle");
  const innerCircle = circleGroup.insert("circle");
  outerCircle.attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("r", bbox.width / 2 + halfPadding + gap).attr("width", bbox.width + node.padding + gap * 2).attr("height", bbox.height + node.padding + gap * 2);
  innerCircle.attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("r", bbox.width / 2 + halfPadding).attr("width", bbox.width + node.padding).attr("height", bbox.height + node.padding);
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.info("DoubleCircle main");
  updateNodeBounds(node, outerCircle);
  node.intersect = function(point2) {
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.info("DoubleCircle intersect", node, bbox.width / 2 + halfPadding + gap, point2);
    return intersect.circle(node, bbox.width / 2 + halfPadding + gap, point2);
  };
  return shapeSvg;
};
const subroutine = (parent, node) => {
  const { shapeSvg, bbox } = labelHelper(parent, node, void 0, true);
  const w = bbox.width + node.padding;
  const h = bbox.height + node.padding;
  const points = [
    { x: 0, y: 0 },
    { x: w, y: 0 },
    { x: w, y: -h },
    { x: 0, y: -h },
    { x: 0, y: 0 },
    { x: -8, y: 0 },
    { x: w + 8, y: 0 },
    { x: w + 8, y: -h },
    { x: -8, y: -h },
    { x: -8, y: 0 }
  ];
  const el = insertPolygonShape(shapeSvg, w, h, points);
  el.attr("style", node.style);
  updateNodeBounds(node, el);
  node.intersect = function(point2) {
    return intersect.polygon(node, points, point2);
  };
  return shapeSvg;
};
const start = (parent, node) => {
  const shapeSvg = parent.insert("g").attr("class", "node default").attr("id", node.domId || node.id);
  const circle2 = shapeSvg.insert("circle", ":first-child");
  circle2.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
  updateNodeBounds(node, circle2);
  node.intersect = function(point2) {
    return intersect.circle(node, 7, point2);
  };
  return shapeSvg;
};
const forkJoin = (parent, node, dir) => {
  const shapeSvg = parent.insert("g").attr("class", "node default").attr("id", node.domId || node.id);
  let width = 70;
  let height = 10;
  if (dir === "LR") {
    width = 10;
    height = 70;
  }
  const shape = shapeSvg.append("rect").attr("x", -1 * width / 2).attr("y", -1 * height / 2).attr("width", width).attr("height", height).attr("class", "fork-join");
  updateNodeBounds(node, shape);
  node.height = node.height + node.padding / 2;
  node.width = node.width + node.padding / 2;
  node.intersect = function(point2) {
    return intersect.rect(node, point2);
  };
  return shapeSvg;
};
const end = (parent, node) => {
  const shapeSvg = parent.insert("g").attr("class", "node default").attr("id", node.domId || node.id);
  const innerCircle = shapeSvg.insert("circle", ":first-child");
  const circle2 = shapeSvg.insert("circle", ":first-child");
  circle2.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
  innerCircle.attr("class", "state-end").attr("r", 5).attr("width", 10).attr("height", 10);
  updateNodeBounds(node, circle2);
  node.intersect = function(point2) {
    return intersect.circle(node, 7, point2);
  };
  return shapeSvg;
};
const class_box = (parent, node) => {
  const halfPadding = node.padding / 2;
  const rowPadding = 4;
  const lineHeight = 8;
  let classes;
  if (!node.classes) {
    classes = "node default";
  } else {
    classes = "node " + node.classes;
  }
  const shapeSvg = parent.insert("g").attr("class", classes).attr("id", node.domId || node.id);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const topLine = shapeSvg.insert("line");
  const bottomLine = shapeSvg.insert("line");
  let maxWidth = 0;
  let maxHeight = rowPadding;
  const labelContainer = shapeSvg.insert("g").attr("class", "label");
  let verticalPos = 0;
  const hasInterface = node.classData.annotations && node.classData.annotations[0];
  const interfaceLabelText = node.classData.annotations[0] ? "«" + node.classData.annotations[0] + "»" : "";
  const interfaceLabel = labelContainer.node().appendChild(createLabel$1(interfaceLabelText, node.labelStyle, true, true));
  let interfaceBBox = interfaceLabel.getBBox();
  if ((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.j)((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.htmlLabels)) {
    const div = interfaceLabel.children[0];
    const dv = (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)(interfaceLabel);
    interfaceBBox = div.getBoundingClientRect();
    dv.attr("width", interfaceBBox.width);
    dv.attr("height", interfaceBBox.height);
  }
  if (node.classData.annotations[0]) {
    maxHeight += interfaceBBox.height + rowPadding;
    maxWidth += interfaceBBox.width;
  }
  let classTitleString = node.classData.label;
  if (node.classData.type !== void 0 && node.classData.type !== "") {
    if ((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.htmlLabels) {
      classTitleString += "&lt;" + node.classData.type + "&gt;";
    } else {
      classTitleString += "<" + node.classData.type + ">";
    }
  }
  const classTitleLabel = labelContainer.node().appendChild(createLabel$1(classTitleString, node.labelStyle, true, true));
  (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)(classTitleLabel).attr("class", "classTitle");
  let classTitleBBox = classTitleLabel.getBBox();
  if ((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.j)((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.htmlLabels)) {
    const div = classTitleLabel.children[0];
    const dv = (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)(classTitleLabel);
    classTitleBBox = div.getBoundingClientRect();
    dv.attr("width", classTitleBBox.width);
    dv.attr("height", classTitleBBox.height);
  }
  maxHeight += classTitleBBox.height + rowPadding;
  if (classTitleBBox.width > maxWidth) {
    maxWidth = classTitleBBox.width;
  }
  const classAttributes = [];
  node.classData.members.forEach((str) => {
    const parsedInfo = (0,_svgDraw_6a237a99_js__WEBPACK_IMPORTED_MODULE_3__.p)(str);
    let parsedText = parsedInfo.displayText;
    if ((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.htmlLabels) {
      parsedText = parsedText.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    const lbl = labelContainer.node().appendChild(
      createLabel$1(
        parsedText,
        parsedInfo.cssStyle ? parsedInfo.cssStyle : node.labelStyle,
        true,
        true
      )
    );
    let bbox = lbl.getBBox();
    if ((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.j)((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.htmlLabels)) {
      const div = lbl.children[0];
      const dv = (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)(lbl);
      bbox = div.getBoundingClientRect();
      dv.attr("width", bbox.width);
      dv.attr("height", bbox.height);
    }
    if (bbox.width > maxWidth) {
      maxWidth = bbox.width;
    }
    maxHeight += bbox.height + rowPadding;
    classAttributes.push(lbl);
  });
  maxHeight += lineHeight;
  const classMethods = [];
  node.classData.methods.forEach((str) => {
    const parsedInfo = (0,_svgDraw_6a237a99_js__WEBPACK_IMPORTED_MODULE_3__.p)(str);
    let displayText = parsedInfo.displayText;
    if ((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.htmlLabels) {
      displayText = displayText.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    const lbl = labelContainer.node().appendChild(
      createLabel$1(
        displayText,
        parsedInfo.cssStyle ? parsedInfo.cssStyle : node.labelStyle,
        true,
        true
      )
    );
    let bbox = lbl.getBBox();
    if ((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.j)((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.htmlLabels)) {
      const div = lbl.children[0];
      const dv = (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)(lbl);
      bbox = div.getBoundingClientRect();
      dv.attr("width", bbox.width);
      dv.attr("height", bbox.height);
    }
    if (bbox.width > maxWidth) {
      maxWidth = bbox.width;
    }
    maxHeight += bbox.height + rowPadding;
    classMethods.push(lbl);
  });
  maxHeight += lineHeight;
  if (hasInterface) {
    let diffX2 = (maxWidth - interfaceBBox.width) / 2;
    (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)(interfaceLabel).attr(
      "transform",
      "translate( " + (-1 * maxWidth / 2 + diffX2) + ", " + -1 * maxHeight / 2 + ")"
    );
    verticalPos = interfaceBBox.height + rowPadding;
  }
  let diffX = (maxWidth - classTitleBBox.width) / 2;
  (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)(classTitleLabel).attr(
    "transform",
    "translate( " + (-1 * maxWidth / 2 + diffX) + ", " + (-1 * maxHeight / 2 + verticalPos) + ")"
  );
  verticalPos += classTitleBBox.height + rowPadding;
  topLine.attr("class", "divider").attr("x1", -maxWidth / 2 - halfPadding).attr("x2", maxWidth / 2 + halfPadding).attr("y1", -maxHeight / 2 - halfPadding + lineHeight + verticalPos).attr("y2", -maxHeight / 2 - halfPadding + lineHeight + verticalPos);
  verticalPos += lineHeight;
  classAttributes.forEach((lbl) => {
    (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)(lbl).attr(
      "transform",
      "translate( " + -maxWidth / 2 + ", " + (-1 * maxHeight / 2 + verticalPos + lineHeight / 2) + ")"
    );
    verticalPos += classTitleBBox.height + rowPadding;
  });
  verticalPos += lineHeight;
  bottomLine.attr("class", "divider").attr("x1", -maxWidth / 2 - halfPadding).attr("x2", maxWidth / 2 + halfPadding).attr("y1", -maxHeight / 2 - halfPadding + lineHeight + verticalPos).attr("y2", -maxHeight / 2 - halfPadding + lineHeight + verticalPos);
  verticalPos += lineHeight;
  classMethods.forEach((lbl) => {
    (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)(lbl).attr(
      "transform",
      "translate( " + -maxWidth / 2 + ", " + (-1 * maxHeight / 2 + verticalPos) + ")"
    );
    verticalPos += classTitleBBox.height + rowPadding;
  });
  rect2.attr("class", "outer title-state").attr("x", -maxWidth / 2 - halfPadding).attr("y", -(maxHeight / 2) - halfPadding).attr("width", maxWidth + node.padding).attr("height", maxHeight + node.padding);
  updateNodeBounds(node, rect2);
  node.intersect = function(point2) {
    return intersect.rect(node, point2);
  };
  return shapeSvg;
};
const shapes = {
  rhombus: question,
  question,
  rect,
  labelRect,
  rectWithTitle,
  choice,
  circle,
  doublecircle,
  stadium,
  hexagon,
  rect_left_inv_arrow,
  lean_right,
  lean_left,
  trapezoid,
  inv_trapezoid,
  rect_right_inv_arrow,
  cylinder,
  start,
  end,
  note: note$1,
  subroutine,
  fork: forkJoin,
  join: forkJoin,
  class_box
};
let nodeElems = {};
const insertNode = (elem, node, dir) => {
  let newEl;
  let el;
  if (node.link) {
    let target;
    if ((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.g)().securityLevel === "sandbox") {
      target = "_top";
    } else if (node.linkTarget) {
      target = node.linkTarget || "_blank";
    }
    newEl = elem.insert("svg:a").attr("xlink:href", node.link).attr("target", target);
    el = shapes[node.shape](newEl, node, dir);
  } else {
    el = shapes[node.shape](elem, node, dir);
    newEl = el;
  }
  if (node.tooltip) {
    el.attr("title", node.tooltip);
  }
  if (node.class) {
    el.attr("class", "node default " + node.class);
  }
  nodeElems[node.id] = newEl;
  if (node.haveCallback) {
    nodeElems[node.id].attr("class", nodeElems[node.id].attr("class") + " clickable");
  }
  return newEl;
};
const setNodeElem = (elem, node) => {
  nodeElems[node.id] = elem;
};
const clear$1 = () => {
  nodeElems = {};
};
const positionNode = (node) => {
  const el = nodeElems[node.id];
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.trace(
    "Transforming node",
    node.diff,
    node,
    "translate(" + (node.x - node.width / 2 - 5) + ", " + node.width / 2 + ")"
  );
  const padding = 8;
  const diff = node.diff || 0;
  if (node.clusterNode) {
    el.attr(
      "transform",
      "translate(" + (node.x + diff - node.width / 2) + ", " + (node.y - node.height / 2 - padding) + ")"
    );
  } else {
    el.attr("transform", "translate(" + node.x + ", " + node.y + ")");
  }
  return diff;
};
let edgeLabels = {};
let terminalLabels = {};
const clear = () => {
  edgeLabels = {};
  terminalLabels = {};
};
const insertEdgeLabel = (elem, edge) => {
  const labelElement = createLabel$1(edge.label, edge.labelStyle);
  const edgeLabel = elem.insert("g").attr("class", "edgeLabel");
  const label = edgeLabel.insert("g").attr("class", "label");
  label.node().appendChild(labelElement);
  let bbox = labelElement.getBBox();
  if ((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.j)((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.htmlLabels)) {
    const div = labelElement.children[0];
    const dv = (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)(labelElement);
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  label.attr("transform", "translate(" + -bbox.width / 2 + ", " + -bbox.height / 2 + ")");
  edgeLabels[edge.id] = edgeLabel;
  edge.width = bbox.width;
  edge.height = bbox.height;
  let fo;
  if (edge.startLabelLeft) {
    const startLabelElement = createLabel$1(edge.startLabelLeft, edge.labelStyle);
    const startEdgeLabelLeft = elem.insert("g").attr("class", "edgeTerminals");
    const inner = startEdgeLabelLeft.insert("g").attr("class", "inner");
    fo = inner.node().appendChild(startLabelElement);
    const slBox = startLabelElement.getBBox();
    inner.attr("transform", "translate(" + -slBox.width / 2 + ", " + -slBox.height / 2 + ")");
    if (!terminalLabels[edge.id]) {
      terminalLabels[edge.id] = {};
    }
    terminalLabels[edge.id].startLeft = startEdgeLabelLeft;
    setTerminalWidth(fo, edge.startLabelLeft);
  }
  if (edge.startLabelRight) {
    const startLabelElement = createLabel$1(edge.startLabelRight, edge.labelStyle);
    const startEdgeLabelRight = elem.insert("g").attr("class", "edgeTerminals");
    const inner = startEdgeLabelRight.insert("g").attr("class", "inner");
    fo = startEdgeLabelRight.node().appendChild(startLabelElement);
    inner.node().appendChild(startLabelElement);
    const slBox = startLabelElement.getBBox();
    inner.attr("transform", "translate(" + -slBox.width / 2 + ", " + -slBox.height / 2 + ")");
    if (!terminalLabels[edge.id]) {
      terminalLabels[edge.id] = {};
    }
    terminalLabels[edge.id].startRight = startEdgeLabelRight;
    setTerminalWidth(fo, edge.startLabelRight);
  }
  if (edge.endLabelLeft) {
    const endLabelElement = createLabel$1(edge.endLabelLeft, edge.labelStyle);
    const endEdgeLabelLeft = elem.insert("g").attr("class", "edgeTerminals");
    const inner = endEdgeLabelLeft.insert("g").attr("class", "inner");
    fo = inner.node().appendChild(endLabelElement);
    const slBox = endLabelElement.getBBox();
    inner.attr("transform", "translate(" + -slBox.width / 2 + ", " + -slBox.height / 2 + ")");
    endEdgeLabelLeft.node().appendChild(endLabelElement);
    if (!terminalLabels[edge.id]) {
      terminalLabels[edge.id] = {};
    }
    terminalLabels[edge.id].endLeft = endEdgeLabelLeft;
    setTerminalWidth(fo, edge.endLabelLeft);
  }
  if (edge.endLabelRight) {
    const endLabelElement = createLabel$1(edge.endLabelRight, edge.labelStyle);
    const endEdgeLabelRight = elem.insert("g").attr("class", "edgeTerminals");
    const inner = endEdgeLabelRight.insert("g").attr("class", "inner");
    fo = inner.node().appendChild(endLabelElement);
    const slBox = endLabelElement.getBBox();
    inner.attr("transform", "translate(" + -slBox.width / 2 + ", " + -slBox.height / 2 + ")");
    endEdgeLabelRight.node().appendChild(endLabelElement);
    if (!terminalLabels[edge.id]) {
      terminalLabels[edge.id] = {};
    }
    terminalLabels[edge.id].endRight = endEdgeLabelRight;
    setTerminalWidth(fo, edge.endLabelRight);
  }
  return labelElement;
};
function setTerminalWidth(fo, value) {
  if ((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.htmlLabels && fo) {
    fo.style.width = value.length * 9 + "px";
    fo.style.height = "12px";
  }
}
const positionEdgeLabel = (edge, paths) => {
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.info("Moving label abc78 ", edge.id, edge.label, edgeLabels[edge.id]);
  let path = paths.updatedPath ? paths.updatedPath : paths.originalPath;
  if (edge.label) {
    const el = edgeLabels[edge.id];
    let x = edge.x;
    let y = edge.y;
    if (path) {
      const pos = _utils_d5eeff82_js__WEBPACK_IMPORTED_MODULE_4__.u.calcLabelPosition(path);
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.info(
        "Moving label " + edge.label + " from (",
        x,
        ",",
        y,
        ") to (",
        pos.x,
        ",",
        pos.y,
        ") abc78"
      );
      if (paths.updatedPath) {
        x = pos.x;
        y = pos.y;
      }
    }
    el.attr("transform", "translate(" + x + ", " + y + ")");
  }
  if (edge.startLabelLeft) {
    const el = terminalLabels[edge.id].startLeft;
    let x = edge.x;
    let y = edge.y;
    if (path) {
      const pos = _utils_d5eeff82_js__WEBPACK_IMPORTED_MODULE_4__.u.calcTerminalLabelPosition(edge.arrowTypeStart ? 10 : 0, "start_left", path);
      x = pos.x;
      y = pos.y;
    }
    el.attr("transform", "translate(" + x + ", " + y + ")");
  }
  if (edge.startLabelRight) {
    const el = terminalLabels[edge.id].startRight;
    let x = edge.x;
    let y = edge.y;
    if (path) {
      const pos = _utils_d5eeff82_js__WEBPACK_IMPORTED_MODULE_4__.u.calcTerminalLabelPosition(
        edge.arrowTypeStart ? 10 : 0,
        "start_right",
        path
      );
      x = pos.x;
      y = pos.y;
    }
    el.attr("transform", "translate(" + x + ", " + y + ")");
  }
  if (edge.endLabelLeft) {
    const el = terminalLabels[edge.id].endLeft;
    let x = edge.x;
    let y = edge.y;
    if (path) {
      const pos = _utils_d5eeff82_js__WEBPACK_IMPORTED_MODULE_4__.u.calcTerminalLabelPosition(edge.arrowTypeEnd ? 10 : 0, "end_left", path);
      x = pos.x;
      y = pos.y;
    }
    el.attr("transform", "translate(" + x + ", " + y + ")");
  }
  if (edge.endLabelRight) {
    const el = terminalLabels[edge.id].endRight;
    let x = edge.x;
    let y = edge.y;
    if (path) {
      const pos = _utils_d5eeff82_js__WEBPACK_IMPORTED_MODULE_4__.u.calcTerminalLabelPosition(edge.arrowTypeEnd ? 10 : 0, "end_right", path);
      x = pos.x;
      y = pos.y;
    }
    el.attr("transform", "translate(" + x + ", " + y + ")");
  }
};
const outsideNode = (node, point2) => {
  const x = node.x;
  const y = node.y;
  const dx = Math.abs(point2.x - x);
  const dy = Math.abs(point2.y - y);
  const w = node.width / 2;
  const h = node.height / 2;
  if (dx >= w || dy >= h) {
    return true;
  }
  return false;
};
const intersection = (node, outsidePoint, insidePoint) => {
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.warn(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(outsidePoint)}
  insidePoint : ${JSON.stringify(insidePoint)}
  node        : x:${node.x} y:${node.y} w:${node.width} h:${node.height}`);
  const x = node.x;
  const y = node.y;
  const dx = Math.abs(x - insidePoint.x);
  const w = node.width / 2;
  let r = insidePoint.x < outsidePoint.x ? w - dx : w + dx;
  const h = node.height / 2;
  const Q = Math.abs(outsidePoint.y - insidePoint.y);
  const R = Math.abs(outsidePoint.x - insidePoint.x);
  if (Math.abs(y - outsidePoint.y) * w > Math.abs(x - outsidePoint.x) * h) {
    let q = insidePoint.y < outsidePoint.y ? outsidePoint.y - h - y : y - h - outsidePoint.y;
    r = R * q / Q;
    const res = {
      x: insidePoint.x < outsidePoint.x ? insidePoint.x + r : insidePoint.x - R + r,
      y: insidePoint.y < outsidePoint.y ? insidePoint.y + Q - q : insidePoint.y - Q + q
    };
    if (r === 0) {
      res.x = outsidePoint.x;
      res.y = outsidePoint.y;
    }
    if (R === 0) {
      res.x = outsidePoint.x;
    }
    if (Q === 0) {
      res.y = outsidePoint.y;
    }
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.warn(`abc89 topp/bott calc, Q ${Q}, q ${q}, R ${R}, r ${r}`, res);
    return res;
  } else {
    if (insidePoint.x < outsidePoint.x) {
      r = outsidePoint.x - w - x;
    } else {
      r = x - w - outsidePoint.x;
    }
    let q = Q * r / R;
    let _x = insidePoint.x < outsidePoint.x ? insidePoint.x + R - r : insidePoint.x - R + r;
    let _y = insidePoint.y < outsidePoint.y ? insidePoint.y + q : insidePoint.y - q;
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.warn(`sides calc abc89, Q ${Q}, q ${q}, R ${R}, r ${r}`, { _x, _y });
    if (r === 0) {
      _x = outsidePoint.x;
      _y = outsidePoint.y;
    }
    if (R === 0) {
      _x = outsidePoint.x;
    }
    if (Q === 0) {
      _y = outsidePoint.y;
    }
    return { x: _x, y: _y };
  }
};
const cutPathAtIntersect = (_points, boundryNode) => {
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.warn("abc88 cutPathAtIntersect", _points, boundryNode);
  let points = [];
  let lastPointOutside = _points[0];
  let isInside = false;
  _points.forEach((point2) => {
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.info("abc88 checking point", point2, boundryNode);
    if (!outsideNode(boundryNode, point2) && !isInside) {
      const inter = intersection(boundryNode, lastPointOutside, point2);
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.warn("abc88 inside", point2, lastPointOutside, inter);
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.warn("abc88 intersection", inter);
      let pointPresent = false;
      points.forEach((p) => {
        pointPresent = pointPresent || p.x === inter.x && p.y === inter.y;
      });
      if (!points.some((e) => e.x === inter.x && e.y === inter.y)) {
        points.push(inter);
      } else {
        _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.warn("abc88 no intersect", inter, points);
      }
      isInside = true;
    } else {
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.warn("abc88 outside", point2, lastPointOutside);
      lastPointOutside = point2;
      if (!isInside) {
        points.push(point2);
      }
    }
  });
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.warn("abc88 returning points", points);
  return points;
};
const insertEdge = function(elem, e, edge, clusterDb, diagramType, graph) {
  let points = edge.points;
  let pointsHasChanged = false;
  const tail = graph.node(e.v);
  var head = graph.node(e.w);
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.info("abc88 InsertEdge: ", edge);
  if (head.intersect && tail.intersect) {
    points = points.slice(1, edge.points.length - 1);
    points.unshift(tail.intersect(points[0]));
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.info(
      "Last point",
      points[points.length - 1],
      head,
      head.intersect(points[points.length - 1])
    );
    points.push(head.intersect(points[points.length - 1]));
  }
  if (edge.toCluster) {
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.info("to cluster abc88", clusterDb[edge.toCluster]);
    points = cutPathAtIntersect(edge.points, clusterDb[edge.toCluster].node);
    pointsHasChanged = true;
  }
  if (edge.fromCluster) {
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.info("from cluster abc88", clusterDb[edge.fromCluster]);
    points = cutPathAtIntersect(points.reverse(), clusterDb[edge.fromCluster].node).reverse();
    pointsHasChanged = true;
  }
  const lineData = points.filter((p) => !Number.isNaN(p.y));
  let curve;
  if (diagramType === "graph" || diagramType === "flowchart") {
    curve = edge.curve || d3__WEBPACK_IMPORTED_MODULE_0__/* .curveBasis */ .$0Z;
  } else {
    curve = d3__WEBPACK_IMPORTED_MODULE_0__/* .curveBasis */ .$0Z;
  }
  const lineFunction = (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .line */ .jvg)().x(function(d) {
    return d.x;
  }).y(function(d) {
    return d.y;
  }).curve(curve);
  let strokeClasses;
  switch (edge.thickness) {
    case "normal":
      strokeClasses = "edge-thickness-normal";
      break;
    case "thick":
      strokeClasses = "edge-thickness-thick";
      break;
    case "invisible":
      strokeClasses = "edge-thickness-thick";
      break;
    default:
      strokeClasses = "";
  }
  switch (edge.pattern) {
    case "solid":
      strokeClasses += " edge-pattern-solid";
      break;
    case "dotted":
      strokeClasses += " edge-pattern-dotted";
      break;
    case "dashed":
      strokeClasses += " edge-pattern-dashed";
      break;
  }
  const svgPath = elem.append("path").attr("d", lineFunction(lineData)).attr("id", edge.id).attr("class", " " + strokeClasses + (edge.classes ? " " + edge.classes : "")).attr("style", edge.style);
  let url = "";
  if ((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.arrowMarkerAbsolute || (0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.g)().state.arrowMarkerAbsolute) {
    url = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
    url = url.replace(/\(/g, "\\(");
    url = url.replace(/\)/g, "\\)");
  }
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.info("arrowTypeStart", edge.arrowTypeStart);
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.info("arrowTypeEnd", edge.arrowTypeEnd);
  switch (edge.arrowTypeStart) {
    case "arrow_cross":
      svgPath.attr("marker-start", "url(" + url + "#" + diagramType + "-crossStart)");
      break;
    case "arrow_point":
      svgPath.attr("marker-start", "url(" + url + "#" + diagramType + "-pointStart)");
      break;
    case "arrow_barb":
      svgPath.attr("marker-start", "url(" + url + "#" + diagramType + "-barbStart)");
      break;
    case "arrow_circle":
      svgPath.attr("marker-start", "url(" + url + "#" + diagramType + "-circleStart)");
      break;
    case "aggregation":
      svgPath.attr("marker-start", "url(" + url + "#" + diagramType + "-aggregationStart)");
      break;
    case "extension":
      svgPath.attr("marker-start", "url(" + url + "#" + diagramType + "-extensionStart)");
      break;
    case "composition":
      svgPath.attr("marker-start", "url(" + url + "#" + diagramType + "-compositionStart)");
      break;
    case "dependency":
      svgPath.attr("marker-start", "url(" + url + "#" + diagramType + "-dependencyStart)");
      break;
    case "lollipop":
      svgPath.attr("marker-start", "url(" + url + "#" + diagramType + "-lollipopStart)");
      break;
  }
  switch (edge.arrowTypeEnd) {
    case "arrow_cross":
      svgPath.attr("marker-end", "url(" + url + "#" + diagramType + "-crossEnd)");
      break;
    case "arrow_point":
      svgPath.attr("marker-end", "url(" + url + "#" + diagramType + "-pointEnd)");
      break;
    case "arrow_barb":
      svgPath.attr("marker-end", "url(" + url + "#" + diagramType + "-barbEnd)");
      break;
    case "arrow_circle":
      svgPath.attr("marker-end", "url(" + url + "#" + diagramType + "-circleEnd)");
      break;
    case "aggregation":
      svgPath.attr("marker-end", "url(" + url + "#" + diagramType + "-aggregationEnd)");
      break;
    case "extension":
      svgPath.attr("marker-end", "url(" + url + "#" + diagramType + "-extensionEnd)");
      break;
    case "composition":
      svgPath.attr("marker-end", "url(" + url + "#" + diagramType + "-compositionEnd)");
      break;
    case "dependency":
      svgPath.attr("marker-end", "url(" + url + "#" + diagramType + "-dependencyEnd)");
      break;
    case "lollipop":
      svgPath.attr("marker-end", "url(" + url + "#" + diagramType + "-lollipopEnd)");
      break;
  }
  let paths = {};
  if (pointsHasChanged) {
    paths.updatedPath = points;
  }
  paths.originalPath = edge.points;
  return paths;
};

//# sourceMappingURL=edges-65da65dc.js.map


/***/ }),

/***/ 53557:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ db),
/* harmony export */   "f": () => (/* binding */ flowDb),
/* harmony export */   "p": () => (/* binding */ parser$1)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63321);
/* harmony import */ var _utils_d5eeff82_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2332);
/* harmony import */ var _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90403);
/* harmony import */ var _mermaidAPI_0716c7c2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85866);
/* harmony import */ var _commonDb_2ace122b_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30513);





var parser = function() {
  var o = function(k, v, o2, l) {
    for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v)
      ;
    return o2;
  }, $V0 = [1, 9], $V1 = [1, 7], $V2 = [1, 6], $V3 = [1, 8], $V4 = [1, 20, 21, 22, 23, 38, 44, 46, 48, 52, 66, 67, 86, 87, 88, 89, 90, 91, 95, 105, 106, 109, 111, 112, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127], $V5 = [2, 10], $V6 = [1, 20], $V7 = [1, 21], $V8 = [1, 22], $V9 = [1, 23], $Va = [1, 30], $Vb = [1, 32], $Vc = [1, 33], $Vd = [1, 34], $Ve = [1, 62], $Vf = [1, 48], $Vg = [1, 52], $Vh = [1, 36], $Vi = [1, 37], $Vj = [1, 38], $Vk = [1, 39], $Vl = [1, 40], $Vm = [1, 56], $Vn = [1, 63], $Vo = [1, 51], $Vp = [1, 53], $Vq = [1, 55], $Vr = [1, 59], $Vs = [1, 60], $Vt = [1, 41], $Vu = [1, 42], $Vv = [1, 43], $Vw = [1, 44], $Vx = [1, 61], $Vy = [1, 50], $Vz = [1, 54], $VA = [1, 57], $VB = [1, 58], $VC = [1, 49], $VD = [1, 66], $VE = [1, 71], $VF = [1, 20, 21, 22, 23, 38, 42, 44, 46, 48, 52, 66, 67, 86, 87, 88, 89, 90, 91, 95, 105, 106, 109, 111, 112, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127], $VG = [1, 75], $VH = [1, 74], $VI = [1, 76], $VJ = [20, 21, 23, 81, 82], $VK = [1, 99], $VL = [1, 104], $VM = [1, 107], $VN = [1, 108], $VO = [1, 101], $VP = [1, 106], $VQ = [1, 109], $VR = [1, 102], $VS = [1, 114], $VT = [1, 113], $VU = [1, 103], $VV = [1, 105], $VW = [1, 110], $VX = [1, 111], $VY = [1, 112], $VZ = [1, 115], $V_ = [20, 21, 22, 23, 81, 82], $V$ = [20, 21, 22, 23, 53, 81, 82], $V01 = [20, 21, 22, 23, 40, 52, 53, 55, 57, 59, 61, 63, 65, 66, 67, 69, 71, 73, 74, 76, 81, 82, 91, 95, 105, 106, 109, 111, 112, 122, 123, 124, 125, 126, 127], $V11 = [20, 21, 23], $V21 = [20, 21, 23, 52, 66, 67, 81, 82, 91, 95, 105, 106, 109, 111, 112, 122, 123, 124, 125, 126, 127], $V31 = [1, 12, 20, 21, 22, 23, 24, 38, 42, 44, 46, 48, 52, 66, 67, 86, 87, 88, 89, 90, 91, 95, 105, 106, 109, 111, 112, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127], $V41 = [52, 66, 67, 91, 95, 105, 106, 109, 111, 112, 122, 123, 124, 125, 126, 127], $V51 = [1, 149], $V61 = [1, 157], $V71 = [1, 158], $V81 = [1, 159], $V91 = [1, 160], $Va1 = [1, 144], $Vb1 = [1, 145], $Vc1 = [1, 141], $Vd1 = [1, 152], $Ve1 = [1, 153], $Vf1 = [1, 154], $Vg1 = [1, 155], $Vh1 = [1, 156], $Vi1 = [1, 161], $Vj1 = [1, 162], $Vk1 = [1, 147], $Vl1 = [1, 150], $Vm1 = [1, 146], $Vn1 = [1, 143], $Vo1 = [20, 21, 22, 23, 38, 42, 44, 46, 48, 52, 66, 67, 86, 87, 88, 89, 90, 91, 95, 105, 106, 109, 111, 112, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127], $Vp1 = [1, 165], $Vq1 = [20, 21, 22, 23, 26, 52, 66, 67, 91, 105, 106, 109, 111, 112, 122, 123, 124, 125, 126, 127], $Vr1 = [20, 21, 22, 23, 24, 26, 38, 40, 41, 42, 52, 56, 58, 60, 62, 64, 66, 67, 68, 70, 72, 73, 75, 77, 81, 82, 86, 87, 88, 89, 90, 91, 92, 95, 105, 106, 109, 111, 112, 113, 114, 122, 123, 124, 125, 126, 127], $Vs1 = [12, 21, 22, 24], $Vt1 = [22, 106], $Vu1 = [1, 250], $Vv1 = [1, 245], $Vw1 = [1, 246], $Vx1 = [1, 254], $Vy1 = [1, 251], $Vz1 = [1, 248], $VA1 = [1, 247], $VB1 = [1, 249], $VC1 = [1, 252], $VD1 = [1, 253], $VE1 = [1, 255], $VF1 = [1, 273], $VG1 = [20, 21, 23, 106], $VH1 = [20, 21, 22, 23, 66, 67, 86, 102, 105, 106, 109, 110, 111, 112, 113];
  var parser2 = {
    trace: function trace() {
    },
    yy: {},
    symbols_: { "error": 2, "start": 3, "mermaidDoc": 4, "directive": 5, "openDirective": 6, "typeDirective": 7, "closeDirective": 8, "separator": 9, ":": 10, "argDirective": 11, "open_directive": 12, "type_directive": 13, "arg_directive": 14, "close_directive": 15, "graphConfig": 16, "document": 17, "line": 18, "statement": 19, "SEMI": 20, "NEWLINE": 21, "SPACE": 22, "EOF": 23, "GRAPH": 24, "NODIR": 25, "DIR": 26, "FirstStmtSeperator": 27, "ending": 28, "endToken": 29, "spaceList": 30, "spaceListNewline": 31, "verticeStatement": 32, "styleStatement": 33, "linkStyleStatement": 34, "classDefStatement": 35, "classStatement": 36, "clickStatement": 37, "subgraph": 38, "text": 39, "SQS": 40, "SQE": 41, "end": 42, "direction": 43, "acc_title": 44, "acc_title_value": 45, "acc_descr": 46, "acc_descr_value": 47, "acc_descr_multiline_value": 48, "link": 49, "node": 50, "vertex": 51, "AMP": 52, "STYLE_SEPARATOR": 53, "idString": 54, "DOUBLECIRCLESTART": 55, "DOUBLECIRCLEEND": 56, "PS": 57, "PE": 58, "(-": 59, "-)": 60, "STADIUMSTART": 61, "STADIUMEND": 62, "SUBROUTINESTART": 63, "SUBROUTINEEND": 64, "VERTEX_WITH_PROPS_START": 65, "ALPHA": 66, "COLON": 67, "PIPE": 68, "CYLINDERSTART": 69, "CYLINDEREND": 70, "DIAMOND_START": 71, "DIAMOND_STOP": 72, "TAGEND": 73, "TRAPSTART": 74, "TRAPEND": 75, "INVTRAPSTART": 76, "INVTRAPEND": 77, "linkStatement": 78, "arrowText": 79, "TESTSTR": 80, "START_LINK": 81, "LINK": 82, "textToken": 83, "STR": 84, "keywords": 85, "STYLE": 86, "LINKSTYLE": 87, "CLASSDEF": 88, "CLASS": 89, "CLICK": 90, "DOWN": 91, "UP": 92, "textNoTags": 93, "textNoTagsToken": 94, "DEFAULT": 95, "stylesOpt": 96, "alphaNum": 97, "CALLBACKNAME": 98, "CALLBACKARGS": 99, "HREF": 100, "LINK_TARGET": 101, "HEX": 102, "numList": 103, "INTERPOLATE": 104, "NUM": 105, "COMMA": 106, "style": 107, "styleComponent": 108, "MINUS": 109, "UNIT": 110, "BRKT": 111, "DOT": 112, "PCT": 113, "TAGSTART": 114, "alphaNumToken": 115, "idStringToken": 116, "alphaNumStatement": 117, "direction_tb": 118, "direction_bt": 119, "direction_rl": 120, "direction_lr": 121, "PUNCTUATION": 122, "UNICODE_TEXT": 123, "PLUS": 124, "EQUALS": 125, "MULT": 126, "UNDERSCORE": 127, "graphCodeTokens": 128, "ARROW_CROSS": 129, "ARROW_POINT": 130, "ARROW_CIRCLE": 131, "ARROW_OPEN": 132, "QUOTE": 133, "$accept": 0, "$end": 1 },
    terminals_: { 2: "error", 10: ":", 12: "open_directive", 13: "type_directive", 14: "arg_directive", 15: "close_directive", 20: "SEMI", 21: "NEWLINE", 22: "SPACE", 23: "EOF", 24: "GRAPH", 25: "NODIR", 26: "DIR", 38: "subgraph", 40: "SQS", 41: "SQE", 42: "end", 44: "acc_title", 45: "acc_title_value", 46: "acc_descr", 47: "acc_descr_value", 48: "acc_descr_multiline_value", 52: "AMP", 53: "STYLE_SEPARATOR", 55: "DOUBLECIRCLESTART", 56: "DOUBLECIRCLEEND", 57: "PS", 58: "PE", 59: "(-", 60: "-)", 61: "STADIUMSTART", 62: "STADIUMEND", 63: "SUBROUTINESTART", 64: "SUBROUTINEEND", 65: "VERTEX_WITH_PROPS_START", 66: "ALPHA", 67: "COLON", 68: "PIPE", 69: "CYLINDERSTART", 70: "CYLINDEREND", 71: "DIAMOND_START", 72: "DIAMOND_STOP", 73: "TAGEND", 74: "TRAPSTART", 75: "TRAPEND", 76: "INVTRAPSTART", 77: "INVTRAPEND", 80: "TESTSTR", 81: "START_LINK", 82: "LINK", 84: "STR", 86: "STYLE", 87: "LINKSTYLE", 88: "CLASSDEF", 89: "CLASS", 90: "CLICK", 91: "DOWN", 92: "UP", 95: "DEFAULT", 98: "CALLBACKNAME", 99: "CALLBACKARGS", 100: "HREF", 101: "LINK_TARGET", 102: "HEX", 104: "INTERPOLATE", 105: "NUM", 106: "COMMA", 109: "MINUS", 110: "UNIT", 111: "BRKT", 112: "DOT", 113: "PCT", 114: "TAGSTART", 118: "direction_tb", 119: "direction_bt", 120: "direction_rl", 121: "direction_lr", 122: "PUNCTUATION", 123: "UNICODE_TEXT", 124: "PLUS", 125: "EQUALS", 126: "MULT", 127: "UNDERSCORE", 129: "ARROW_CROSS", 130: "ARROW_POINT", 131: "ARROW_CIRCLE", 132: "ARROW_OPEN", 133: "QUOTE" },
    productions_: [0, [3, 1], [3, 2], [5, 4], [5, 6], [6, 1], [7, 1], [11, 1], [8, 1], [4, 2], [17, 0], [17, 2], [18, 1], [18, 1], [18, 1], [18, 1], [18, 1], [16, 2], [16, 2], [16, 2], [16, 3], [28, 2], [28, 1], [29, 1], [29, 1], [29, 1], [27, 1], [27, 1], [27, 2], [31, 2], [31, 2], [31, 1], [31, 1], [30, 2], [30, 1], [19, 2], [19, 2], [19, 2], [19, 2], [19, 2], [19, 2], [19, 9], [19, 6], [19, 4], [19, 1], [19, 2], [19, 2], [19, 1], [9, 1], [9, 1], [9, 1], [32, 3], [32, 4], [32, 2], [32, 1], [50, 1], [50, 5], [50, 3], [51, 4], [51, 4], [51, 6], [51, 4], [51, 4], [51, 4], [51, 8], [51, 4], [51, 4], [51, 4], [51, 6], [51, 4], [51, 4], [51, 4], [51, 4], [51, 4], [51, 1], [49, 2], [49, 3], [49, 3], [49, 1], [49, 3], [78, 1], [79, 3], [39, 1], [39, 2], [39, 1], [85, 1], [85, 1], [85, 1], [85, 1], [85, 1], [85, 1], [85, 1], [85, 1], [85, 1], [85, 1], [85, 1], [93, 1], [93, 2], [35, 5], [35, 5], [36, 5], [37, 2], [37, 4], [37, 3], [37, 5], [37, 2], [37, 4], [37, 4], [37, 6], [37, 2], [37, 4], [37, 2], [37, 4], [37, 4], [37, 6], [33, 5], [33, 5], [34, 5], [34, 5], [34, 9], [34, 9], [34, 7], [34, 7], [103, 1], [103, 3], [96, 1], [96, 3], [107, 1], [107, 2], [108, 1], [108, 1], [108, 1], [108, 1], [108, 1], [108, 1], [108, 1], [108, 1], [108, 1], [108, 1], [108, 1], [83, 1], [83, 1], [83, 1], [83, 1], [83, 1], [83, 1], [94, 1], [94, 1], [94, 1], [94, 1], [54, 1], [54, 2], [97, 1], [97, 2], [117, 1], [117, 1], [117, 1], [117, 1], [43, 1], [43, 1], [43, 1], [43, 1], [115, 1], [115, 1], [115, 1], [115, 1], [115, 1], [115, 1], [115, 1], [115, 1], [115, 1], [115, 1], [115, 1], [115, 1], [115, 1], [116, 1], [116, 1], [116, 1], [116, 1], [116, 1], [116, 1], [116, 1], [116, 1], [116, 1], [116, 1], [116, 1], [116, 1], [116, 1], [116, 1], [116, 1], [116, 1], [128, 1], [128, 1], [128, 1], [128, 1], [128, 1], [128, 1], [128, 1], [128, 1], [128, 1], [128, 1], [128, 1], [128, 1], [128, 1], [128, 1], [128, 1], [128, 1], [128, 1], [128, 1], [128, 1], [128, 1], [128, 1], [128, 1], [128, 1], [128, 1], [128, 1], [128, 1]],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      var $0 = $$.length - 1;
      switch (yystate) {
        case 5:
          yy.parseDirective("%%{", "open_directive");
          break;
        case 6:
          yy.parseDirective($$[$0], "type_directive");
          break;
        case 7:
          $$[$0] = $$[$0].trim().replace(/'/g, '"');
          yy.parseDirective($$[$0], "arg_directive");
          break;
        case 8:
          yy.parseDirective("}%%", "close_directive", "flowchart");
          break;
        case 10:
          this.$ = [];
          break;
        case 11:
          if (!Array.isArray($$[$0]) || $$[$0].length > 0) {
            $$[$0 - 1].push($$[$0]);
          }
          this.$ = $$[$0 - 1];
          break;
        case 12:
        case 82:
        case 84:
        case 96:
        case 152:
        case 154:
        case 155:
          this.$ = $$[$0];
          break;
        case 19:
          yy.setDirection("TB");
          this.$ = "TB";
          break;
        case 20:
          yy.setDirection($$[$0 - 1]);
          this.$ = $$[$0 - 1];
          break;
        case 35:
          this.$ = $$[$0 - 1].nodes;
          break;
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
          this.$ = [];
          break;
        case 41:
          this.$ = yy.addSubGraph($$[$0 - 6], $$[$0 - 1], $$[$0 - 4]);
          break;
        case 42:
          this.$ = yy.addSubGraph($$[$0 - 3], $$[$0 - 1], $$[$0 - 3]);
          break;
        case 43:
          this.$ = yy.addSubGraph(void 0, $$[$0 - 1], void 0);
          break;
        case 45:
          this.$ = $$[$0].trim();
          yy.setAccTitle(this.$);
          break;
        case 46:
        case 47:
          this.$ = $$[$0].trim();
          yy.setAccDescription(this.$);
          break;
        case 51:
          yy.addLink($$[$0 - 2].stmt, $$[$0], $$[$0 - 1]);
          this.$ = { stmt: $$[$0], nodes: $$[$0].concat($$[$0 - 2].nodes) };
          break;
        case 52:
          yy.addLink($$[$0 - 3].stmt, $$[$0 - 1], $$[$0 - 2]);
          this.$ = { stmt: $$[$0 - 1], nodes: $$[$0 - 1].concat($$[$0 - 3].nodes) };
          break;
        case 53:
          this.$ = { stmt: $$[$0 - 1], nodes: $$[$0 - 1] };
          break;
        case 54:
          this.$ = { stmt: $$[$0], nodes: $$[$0] };
          break;
        case 55:
          this.$ = [$$[$0]];
          break;
        case 56:
          this.$ = $$[$0 - 4].concat($$[$0]);
          break;
        case 57:
          this.$ = [$$[$0 - 2]];
          yy.setClass($$[$0 - 2], $$[$0]);
          break;
        case 58:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "square");
          break;
        case 59:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "doublecircle");
          break;
        case 60:
          this.$ = $$[$0 - 5];
          yy.addVertex($$[$0 - 5], $$[$0 - 2], "circle");
          break;
        case 61:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "ellipse");
          break;
        case 62:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "stadium");
          break;
        case 63:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "subroutine");
          break;
        case 64:
          this.$ = $$[$0 - 7];
          yy.addVertex($$[$0 - 7], $$[$0 - 1], "rect", void 0, void 0, void 0, Object.fromEntries([[$$[$0 - 5], $$[$0 - 3]]]));
          break;
        case 65:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "cylinder");
          break;
        case 66:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "round");
          break;
        case 67:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "diamond");
          break;
        case 68:
          this.$ = $$[$0 - 5];
          yy.addVertex($$[$0 - 5], $$[$0 - 2], "hexagon");
          break;
        case 69:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "odd");
          break;
        case 70:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "trapezoid");
          break;
        case 71:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "inv_trapezoid");
          break;
        case 72:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "lean_right");
          break;
        case 73:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "lean_left");
          break;
        case 74:
          this.$ = $$[$0];
          yy.addVertex($$[$0]);
          break;
        case 75:
          $$[$0 - 1].text = $$[$0];
          this.$ = $$[$0 - 1];
          break;
        case 76:
        case 77:
          $$[$0 - 2].text = $$[$0 - 1];
          this.$ = $$[$0 - 2];
          break;
        case 78:
          this.$ = $$[$0];
          break;
        case 79:
          var inf = yy.destructLink($$[$0], $$[$0 - 2]);
          this.$ = { "type": inf.type, "stroke": inf.stroke, "length": inf.length, "text": $$[$0 - 1] };
          break;
        case 80:
          var inf = yy.destructLink($$[$0]);
          this.$ = { "type": inf.type, "stroke": inf.stroke, "length": inf.length };
          break;
        case 81:
          this.$ = $$[$0 - 1];
          break;
        case 83:
        case 97:
        case 153:
          this.$ = $$[$0 - 1] + "" + $$[$0];
          break;
        case 98:
        case 99:
          this.$ = $$[$0 - 4];
          yy.addClass($$[$0 - 2], $$[$0]);
          break;
        case 100:
          this.$ = $$[$0 - 4];
          yy.setClass($$[$0 - 2], $$[$0]);
          break;
        case 101:
        case 109:
          this.$ = $$[$0 - 1];
          yy.setClickEvent($$[$0 - 1], $$[$0]);
          break;
        case 102:
        case 110:
          this.$ = $$[$0 - 3];
          yy.setClickEvent($$[$0 - 3], $$[$0 - 2]);
          yy.setTooltip($$[$0 - 3], $$[$0]);
          break;
        case 103:
          this.$ = $$[$0 - 2];
          yy.setClickEvent($$[$0 - 2], $$[$0 - 1], $$[$0]);
          break;
        case 104:
          this.$ = $$[$0 - 4];
          yy.setClickEvent($$[$0 - 4], $$[$0 - 3], $$[$0 - 2]);
          yy.setTooltip($$[$0 - 4], $$[$0]);
          break;
        case 105:
        case 111:
          this.$ = $$[$0 - 1];
          yy.setLink($$[$0 - 1], $$[$0]);
          break;
        case 106:
        case 112:
          this.$ = $$[$0 - 3];
          yy.setLink($$[$0 - 3], $$[$0 - 2]);
          yy.setTooltip($$[$0 - 3], $$[$0]);
          break;
        case 107:
        case 113:
          this.$ = $$[$0 - 3];
          yy.setLink($$[$0 - 3], $$[$0 - 2], $$[$0]);
          break;
        case 108:
        case 114:
          this.$ = $$[$0 - 5];
          yy.setLink($$[$0 - 5], $$[$0 - 4], $$[$0]);
          yy.setTooltip($$[$0 - 5], $$[$0 - 2]);
          break;
        case 115:
          this.$ = $$[$0 - 4];
          yy.addVertex($$[$0 - 2], void 0, void 0, $$[$0]);
          break;
        case 116:
        case 118:
          this.$ = $$[$0 - 4];
          yy.updateLink($$[$0 - 2], $$[$0]);
          break;
        case 117:
          this.$ = $$[$0 - 4];
          yy.updateLink([$$[$0 - 2]], $$[$0]);
          break;
        case 119:
          this.$ = $$[$0 - 8];
          yy.updateLinkInterpolate([$$[$0 - 6]], $$[$0 - 2]);
          yy.updateLink([$$[$0 - 6]], $$[$0]);
          break;
        case 120:
          this.$ = $$[$0 - 8];
          yy.updateLinkInterpolate($$[$0 - 6], $$[$0 - 2]);
          yy.updateLink($$[$0 - 6], $$[$0]);
          break;
        case 121:
          this.$ = $$[$0 - 6];
          yy.updateLinkInterpolate([$$[$0 - 4]], $$[$0]);
          break;
        case 122:
          this.$ = $$[$0 - 6];
          yy.updateLinkInterpolate($$[$0 - 4], $$[$0]);
          break;
        case 123:
        case 125:
          this.$ = [$$[$0]];
          break;
        case 124:
        case 126:
          $$[$0 - 2].push($$[$0]);
          this.$ = $$[$0 - 2];
          break;
        case 128:
          this.$ = $$[$0 - 1] + $$[$0];
          break;
        case 150:
          this.$ = $$[$0];
          break;
        case 151:
          this.$ = $$[$0 - 1] + "" + $$[$0];
          break;
        case 156:
          this.$ = "v";
          break;
        case 157:
          this.$ = "-";
          break;
        case 158:
          this.$ = { stmt: "dir", value: "TB" };
          break;
        case 159:
          this.$ = { stmt: "dir", value: "BT" };
          break;
        case 160:
          this.$ = { stmt: "dir", value: "RL" };
          break;
        case 161:
          this.$ = { stmt: "dir", value: "LR" };
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 5: 3, 6: 5, 12: $V0, 16: 4, 21: $V1, 22: $V2, 24: $V3 }, { 1: [3] }, { 1: [2, 1] }, { 3: 10, 4: 2, 5: 3, 6: 5, 12: $V0, 16: 4, 21: $V1, 22: $V2, 24: $V3 }, o($V4, $V5, { 17: 11 }), { 7: 12, 13: [1, 13] }, { 16: 14, 21: $V1, 22: $V2, 24: $V3 }, { 16: 15, 21: $V1, 22: $V2, 24: $V3 }, { 25: [1, 16], 26: [1, 17] }, { 13: [2, 5] }, { 1: [2, 2] }, { 1: [2, 9], 18: 18, 19: 19, 20: $V6, 21: $V7, 22: $V8, 23: $V9, 32: 24, 33: 25, 34: 26, 35: 27, 36: 28, 37: 29, 38: $Va, 43: 31, 44: $Vb, 46: $Vc, 48: $Vd, 50: 35, 51: 45, 52: $Ve, 54: 46, 66: $Vf, 67: $Vg, 86: $Vh, 87: $Vi, 88: $Vj, 89: $Vk, 90: $Vl, 91: $Vm, 95: $Vn, 105: $Vo, 106: $Vp, 109: $Vq, 111: $Vr, 112: $Vs, 116: 47, 118: $Vt, 119: $Vu, 120: $Vv, 121: $Vw, 122: $Vx, 123: $Vy, 124: $Vz, 125: $VA, 126: $VB, 127: $VC }, { 8: 64, 10: [1, 65], 15: $VD }, o([10, 15], [2, 6]), o($V4, [2, 17]), o($V4, [2, 18]), o($V4, [2, 19]), { 20: [1, 68], 21: [1, 69], 22: $VE, 27: 67, 30: 70 }, o($VF, [2, 11]), o($VF, [2, 12]), o($VF, [2, 13]), o($VF, [2, 14]), o($VF, [2, 15]), o($VF, [2, 16]), { 9: 72, 20: $VG, 21: $VH, 23: $VI, 49: 73, 78: 77, 81: [1, 78], 82: [1, 79] }, { 9: 80, 20: $VG, 21: $VH, 23: $VI }, { 9: 81, 20: $VG, 21: $VH, 23: $VI }, { 9: 82, 20: $VG, 21: $VH, 23: $VI }, { 9: 83, 20: $VG, 21: $VH, 23: $VI }, { 9: 84, 20: $VG, 21: $VH, 23: $VI }, { 9: 86, 20: $VG, 21: $VH, 22: [1, 85], 23: $VI }, o($VF, [2, 44]), { 45: [1, 87] }, { 47: [1, 88] }, o($VF, [2, 47]), o($VJ, [2, 54], { 30: 89, 22: $VE }), { 22: [1, 90] }, { 22: [1, 91] }, { 22: [1, 92] }, { 22: [1, 93] }, { 26: $VK, 52: $VL, 66: $VM, 67: $VN, 84: [1, 97], 91: $VO, 97: 96, 98: [1, 94], 100: [1, 95], 105: $VP, 106: $VQ, 109: $VR, 111: $VS, 112: $VT, 115: 100, 117: 98, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, o($VF, [2, 158]), o($VF, [2, 159]), o($VF, [2, 160]), o($VF, [2, 161]), o($V_, [2, 55], { 53: [1, 116] }), o($V$, [2, 74], { 116: 129, 40: [1, 117], 52: $Ve, 55: [1, 118], 57: [1, 119], 59: [1, 120], 61: [1, 121], 63: [1, 122], 65: [1, 123], 66: $Vf, 67: $Vg, 69: [1, 124], 71: [1, 125], 73: [1, 126], 74: [1, 127], 76: [1, 128], 91: $Vm, 95: $Vn, 105: $Vo, 106: $Vp, 109: $Vq, 111: $Vr, 112: $Vs, 122: $Vx, 123: $Vy, 124: $Vz, 125: $VA, 126: $VB, 127: $VC }), o($V01, [2, 150]), o($V01, [2, 175]), o($V01, [2, 176]), o($V01, [2, 177]), o($V01, [2, 178]), o($V01, [2, 179]), o($V01, [2, 180]), o($V01, [2, 181]), o($V01, [2, 182]), o($V01, [2, 183]), o($V01, [2, 184]), o($V01, [2, 185]), o($V01, [2, 186]), o($V01, [2, 187]), o($V01, [2, 188]), o($V01, [2, 189]), o($V01, [2, 190]), { 9: 130, 20: $VG, 21: $VH, 23: $VI }, { 11: 131, 14: [1, 132] }, o($V11, [2, 8]), o($V4, [2, 20]), o($V4, [2, 26]), o($V4, [2, 27]), { 21: [1, 133] }, o($V21, [2, 34], { 30: 134, 22: $VE }), o($VF, [2, 35]), { 50: 135, 51: 45, 52: $Ve, 54: 46, 66: $Vf, 67: $Vg, 91: $Vm, 95: $Vn, 105: $Vo, 106: $Vp, 109: $Vq, 111: $Vr, 112: $Vs, 116: 47, 122: $Vx, 123: $Vy, 124: $Vz, 125: $VA, 126: $VB, 127: $VC }, o($V31, [2, 48]), o($V31, [2, 49]), o($V31, [2, 50]), o($V41, [2, 78], { 79: 136, 68: [1, 138], 80: [1, 137] }), { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 39: 139, 42: $V91, 52: $VL, 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 83: 140, 84: $Vc1, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, o([52, 66, 67, 68, 80, 91, 95, 105, 106, 109, 111, 112, 122, 123, 124, 125, 126, 127], [2, 80]), o($VF, [2, 36]), o($VF, [2, 37]), o($VF, [2, 38]), o($VF, [2, 39]), o($VF, [2, 40]), { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 39: 163, 42: $V91, 52: $VL, 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 83: 140, 84: $Vc1, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, o($Vo1, $V5, { 17: 164 }), o($VF, [2, 45]), o($VF, [2, 46]), o($VJ, [2, 53], { 52: $Vp1 }), { 26: $VK, 52: $VL, 66: $VM, 67: $VN, 91: $VO, 97: 166, 102: [1, 167], 105: $VP, 106: $VQ, 109: $VR, 111: $VS, 112: $VT, 115: 100, 117: 98, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 95: [1, 168], 103: 169, 105: [1, 170] }, { 26: $VK, 52: $VL, 66: $VM, 67: $VN, 91: $VO, 95: [1, 171], 97: 172, 105: $VP, 106: $VQ, 109: $VR, 111: $VS, 112: $VT, 115: 100, 117: 98, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 26: $VK, 52: $VL, 66: $VM, 67: $VN, 91: $VO, 97: 173, 105: $VP, 106: $VQ, 109: $VR, 111: $VS, 112: $VT, 115: 100, 117: 98, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, o($V11, [2, 101], { 22: [1, 174], 99: [1, 175] }), o($V11, [2, 105], { 22: [1, 176] }), o($V11, [2, 109], { 115: 100, 117: 178, 22: [1, 177], 26: $VK, 52: $VL, 66: $VM, 67: $VN, 91: $VO, 105: $VP, 106: $VQ, 109: $VR, 111: $VS, 112: $VT, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }), o($V11, [2, 111], { 22: [1, 179] }), o($Vq1, [2, 152]), o($Vq1, [2, 154]), o($Vq1, [2, 155]), o($Vq1, [2, 156]), o($Vq1, [2, 157]), o($Vr1, [2, 162]), o($Vr1, [2, 163]), o($Vr1, [2, 164]), o($Vr1, [2, 165]), o($Vr1, [2, 166]), o($Vr1, [2, 167]), o($Vr1, [2, 168]), o($Vr1, [2, 169]), o($Vr1, [2, 170]), o($Vr1, [2, 171]), o($Vr1, [2, 172]), o($Vr1, [2, 173]), o($Vr1, [2, 174]), { 52: $Ve, 54: 180, 66: $Vf, 67: $Vg, 91: $Vm, 95: $Vn, 105: $Vo, 106: $Vp, 109: $Vq, 111: $Vr, 112: $Vs, 116: 47, 122: $Vx, 123: $Vy, 124: $Vz, 125: $VA, 126: $VB, 127: $VC }, { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 39: 181, 42: $V91, 52: $VL, 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 83: 140, 84: $Vc1, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 39: 182, 42: $V91, 52: $VL, 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 83: 140, 84: $Vc1, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 39: 184, 42: $V91, 52: $VL, 57: [1, 183], 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 83: 140, 84: $Vc1, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 39: 185, 42: $V91, 52: $VL, 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 83: 140, 84: $Vc1, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 39: 186, 42: $V91, 52: $VL, 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 83: 140, 84: $Vc1, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 39: 187, 42: $V91, 52: $VL, 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 83: 140, 84: $Vc1, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 66: [1, 188] }, { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 39: 189, 42: $V91, 52: $VL, 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 83: 140, 84: $Vc1, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 39: 190, 42: $V91, 52: $VL, 66: $VM, 67: $VN, 71: [1, 191], 73: $Va1, 81: $Vb1, 83: 140, 84: $Vc1, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 39: 192, 42: $V91, 52: $VL, 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 83: 140, 84: $Vc1, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 39: 193, 42: $V91, 52: $VL, 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 83: 140, 84: $Vc1, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 39: 194, 42: $V91, 52: $VL, 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 83: 140, 84: $Vc1, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, o($V01, [2, 151]), o($Vs1, [2, 3]), { 8: 195, 15: $VD }, { 15: [2, 7] }, o($V4, [2, 28]), o($V21, [2, 33]), o($VJ, [2, 51], { 30: 196, 22: $VE }), o($V41, [2, 75], { 22: [1, 197] }), { 22: [1, 198] }, { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 39: 199, 42: $V91, 52: $VL, 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 83: 140, 84: $Vc1, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 42: $V91, 52: $VL, 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 82: [1, 200], 83: 201, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, o($Vr1, [2, 82]), o($Vr1, [2, 84]), o($Vr1, [2, 140]), o($Vr1, [2, 141]), o($Vr1, [2, 142]), o($Vr1, [2, 143]), o($Vr1, [2, 144]), o($Vr1, [2, 145]), o($Vr1, [2, 146]), o($Vr1, [2, 147]), o($Vr1, [2, 148]), o($Vr1, [2, 149]), o($Vr1, [2, 85]), o($Vr1, [2, 86]), o($Vr1, [2, 87]), o($Vr1, [2, 88]), o($Vr1, [2, 89]), o($Vr1, [2, 90]), o($Vr1, [2, 91]), o($Vr1, [2, 92]), o($Vr1, [2, 93]), o($Vr1, [2, 94]), o($Vr1, [2, 95]), { 9: 203, 20: $VG, 21: $VH, 22: $V51, 23: $VI, 24: $V61, 26: $V71, 38: $V81, 40: [1, 202], 42: $V91, 52: $VL, 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 83: 201, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 18: 18, 19: 19, 20: $V6, 21: $V7, 22: $V8, 23: $V9, 32: 24, 33: 25, 34: 26, 35: 27, 36: 28, 37: 29, 38: $Va, 42: [1, 204], 43: 31, 44: $Vb, 46: $Vc, 48: $Vd, 50: 35, 51: 45, 52: $Ve, 54: 46, 66: $Vf, 67: $Vg, 86: $Vh, 87: $Vi, 88: $Vj, 89: $Vk, 90: $Vl, 91: $Vm, 95: $Vn, 105: $Vo, 106: $Vp, 109: $Vq, 111: $Vr, 112: $Vs, 116: 47, 118: $Vt, 119: $Vu, 120: $Vv, 121: $Vw, 122: $Vx, 123: $Vy, 124: $Vz, 125: $VA, 126: $VB, 127: $VC }, { 22: $VE, 30: 205 }, { 22: [1, 206], 26: $VK, 52: $VL, 66: $VM, 67: $VN, 91: $VO, 105: $VP, 106: $VQ, 109: $VR, 111: $VS, 112: $VT, 115: 100, 117: 178, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 22: [1, 207] }, { 22: [1, 208] }, { 22: [1, 209], 106: [1, 210] }, o($Vt1, [2, 123]), { 22: [1, 211] }, { 22: [1, 212], 26: $VK, 52: $VL, 66: $VM, 67: $VN, 91: $VO, 105: $VP, 106: $VQ, 109: $VR, 111: $VS, 112: $VT, 115: 100, 117: 178, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 22: [1, 213], 26: $VK, 52: $VL, 66: $VM, 67: $VN, 91: $VO, 105: $VP, 106: $VQ, 109: $VR, 111: $VS, 112: $VT, 115: 100, 117: 178, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 84: [1, 214] }, o($V11, [2, 103], { 22: [1, 215] }), { 84: [1, 216], 101: [1, 217] }, { 84: [1, 218] }, o($Vq1, [2, 153]), { 84: [1, 219], 101: [1, 220] }, o($V_, [2, 57], { 116: 129, 52: $Ve, 66: $Vf, 67: $Vg, 91: $Vm, 95: $Vn, 105: $Vo, 106: $Vp, 109: $Vq, 111: $Vr, 112: $Vs, 122: $Vx, 123: $Vy, 124: $Vz, 125: $VA, 126: $VB, 127: $VC }), { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 41: [1, 221], 42: $V91, 52: $VL, 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 83: 201, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 42: $V91, 52: $VL, 56: [1, 222], 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 83: 201, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 39: 223, 42: $V91, 52: $VL, 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 83: 140, 84: $Vc1, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 42: $V91, 52: $VL, 58: [1, 224], 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 83: 201, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 42: $V91, 52: $VL, 60: [1, 225], 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 83: 201, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 42: $V91, 52: $VL, 62: [1, 226], 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 83: 201, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 42: $V91, 52: $VL, 64: [1, 227], 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 83: 201, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 67: [1, 228] }, { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 42: $V91, 52: $VL, 66: $VM, 67: $VN, 70: [1, 229], 73: $Va1, 81: $Vb1, 83: 201, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 42: $V91, 52: $VL, 66: $VM, 67: $VN, 72: [1, 230], 73: $Va1, 81: $Vb1, 83: 201, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 39: 231, 42: $V91, 52: $VL, 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 83: 140, 84: $Vc1, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 41: [1, 232], 42: $V91, 52: $VL, 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 83: 201, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 42: $V91, 52: $VL, 66: $VM, 67: $VN, 73: $Va1, 75: [1, 233], 77: [1, 234], 81: $Vb1, 83: 201, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 42: $V91, 52: $VL, 66: $VM, 67: $VN, 73: $Va1, 75: [1, 236], 77: [1, 235], 81: $Vb1, 83: 201, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 9: 237, 20: $VG, 21: $VH, 23: $VI }, o($VJ, [2, 52], { 52: $Vp1 }), o($V41, [2, 77]), o($V41, [2, 76]), { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 42: $V91, 52: $VL, 66: $VM, 67: $VN, 68: [1, 238], 73: $Va1, 81: $Vb1, 83: 201, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, o($V41, [2, 79]), o($Vr1, [2, 83]), { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 39: 239, 42: $V91, 52: $VL, 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 83: 140, 84: $Vc1, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, o($Vo1, $V5, { 17: 240 }), o($VF, [2, 43]), { 51: 241, 52: $Ve, 54: 46, 66: $Vf, 67: $Vg, 91: $Vm, 95: $Vn, 105: $Vo, 106: $Vp, 109: $Vq, 111: $Vr, 112: $Vs, 116: 47, 122: $Vx, 123: $Vy, 124: $Vz, 125: $VA, 126: $VB, 127: $VC }, { 22: $Vu1, 66: $Vv1, 67: $Vw1, 86: $Vx1, 96: 242, 102: $Vy1, 105: $Vz1, 107: 243, 108: 244, 109: $VA1, 110: $VB1, 111: $VC1, 112: $VD1, 113: $VE1 }, { 22: $Vu1, 66: $Vv1, 67: $Vw1, 86: $Vx1, 96: 256, 102: $Vy1, 105: $Vz1, 107: 243, 108: 244, 109: $VA1, 110: $VB1, 111: $VC1, 112: $VD1, 113: $VE1 }, { 22: $Vu1, 66: $Vv1, 67: $Vw1, 86: $Vx1, 96: 257, 102: $Vy1, 104: [1, 258], 105: $Vz1, 107: 243, 108: 244, 109: $VA1, 110: $VB1, 111: $VC1, 112: $VD1, 113: $VE1 }, { 22: $Vu1, 66: $Vv1, 67: $Vw1, 86: $Vx1, 96: 259, 102: $Vy1, 104: [1, 260], 105: $Vz1, 107: 243, 108: 244, 109: $VA1, 110: $VB1, 111: $VC1, 112: $VD1, 113: $VE1 }, { 105: [1, 261] }, { 22: $Vu1, 66: $Vv1, 67: $Vw1, 86: $Vx1, 96: 262, 102: $Vy1, 105: $Vz1, 107: 243, 108: 244, 109: $VA1, 110: $VB1, 111: $VC1, 112: $VD1, 113: $VE1 }, { 22: $Vu1, 66: $Vv1, 67: $Vw1, 86: $Vx1, 96: 263, 102: $Vy1, 105: $Vz1, 107: 243, 108: 244, 109: $VA1, 110: $VB1, 111: $VC1, 112: $VD1, 113: $VE1 }, { 26: $VK, 52: $VL, 66: $VM, 67: $VN, 91: $VO, 97: 264, 105: $VP, 106: $VQ, 109: $VR, 111: $VS, 112: $VT, 115: 100, 117: 98, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, o($V11, [2, 102]), { 84: [1, 265] }, o($V11, [2, 106], { 22: [1, 266] }), o($V11, [2, 107]), o($V11, [2, 110]), o($V11, [2, 112], { 22: [1, 267] }), o($V11, [2, 113]), o($V$, [2, 58]), o($V$, [2, 59]), { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 42: $V91, 52: $VL, 58: [1, 268], 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 83: 201, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, o($V$, [2, 66]), o($V$, [2, 61]), o($V$, [2, 62]), o($V$, [2, 63]), { 66: [1, 269] }, o($V$, [2, 65]), o($V$, [2, 67]), { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 42: $V91, 52: $VL, 66: $VM, 67: $VN, 72: [1, 270], 73: $Va1, 81: $Vb1, 83: 201, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, o($V$, [2, 69]), o($V$, [2, 70]), o($V$, [2, 72]), o($V$, [2, 71]), o($V$, [2, 73]), o($Vs1, [2, 4]), o([22, 52, 66, 67, 91, 95, 105, 106, 109, 111, 112, 122, 123, 124, 125, 126, 127], [2, 81]), { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 41: [1, 271], 42: $V91, 52: $VL, 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 83: 201, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 18: 18, 19: 19, 20: $V6, 21: $V7, 22: $V8, 23: $V9, 32: 24, 33: 25, 34: 26, 35: 27, 36: 28, 37: 29, 38: $Va, 42: [1, 272], 43: 31, 44: $Vb, 46: $Vc, 48: $Vd, 50: 35, 51: 45, 52: $Ve, 54: 46, 66: $Vf, 67: $Vg, 86: $Vh, 87: $Vi, 88: $Vj, 89: $Vk, 90: $Vl, 91: $Vm, 95: $Vn, 105: $Vo, 106: $Vp, 109: $Vq, 111: $Vr, 112: $Vs, 116: 47, 118: $Vt, 119: $Vu, 120: $Vv, 121: $Vw, 122: $Vx, 123: $Vy, 124: $Vz, 125: $VA, 126: $VB, 127: $VC }, o($V_, [2, 56]), o($V11, [2, 115], { 106: $VF1 }), o($VG1, [2, 125], { 108: 274, 22: $Vu1, 66: $Vv1, 67: $Vw1, 86: $Vx1, 102: $Vy1, 105: $Vz1, 109: $VA1, 110: $VB1, 111: $VC1, 112: $VD1, 113: $VE1 }), o($VH1, [2, 127]), o($VH1, [2, 129]), o($VH1, [2, 130]), o($VH1, [2, 131]), o($VH1, [2, 132]), o($VH1, [2, 133]), o($VH1, [2, 134]), o($VH1, [2, 135]), o($VH1, [2, 136]), o($VH1, [2, 137]), o($VH1, [2, 138]), o($VH1, [2, 139]), o($V11, [2, 116], { 106: $VF1 }), o($V11, [2, 117], { 106: $VF1 }), { 22: [1, 275] }, o($V11, [2, 118], { 106: $VF1 }), { 22: [1, 276] }, o($Vt1, [2, 124]), o($V11, [2, 98], { 106: $VF1 }), o($V11, [2, 99], { 106: $VF1 }), o($V11, [2, 100], { 115: 100, 117: 178, 26: $VK, 52: $VL, 66: $VM, 67: $VN, 91: $VO, 105: $VP, 106: $VQ, 109: $VR, 111: $VS, 112: $VT, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }), o($V11, [2, 104]), { 101: [1, 277] }, { 101: [1, 278] }, { 58: [1, 279] }, { 68: [1, 280] }, { 72: [1, 281] }, { 9: 282, 20: $VG, 21: $VH, 23: $VI }, o($VF, [2, 42]), { 22: $Vu1, 66: $Vv1, 67: $Vw1, 86: $Vx1, 102: $Vy1, 105: $Vz1, 107: 283, 108: 244, 109: $VA1, 110: $VB1, 111: $VC1, 112: $VD1, 113: $VE1 }, o($VH1, [2, 128]), { 26: $VK, 52: $VL, 66: $VM, 67: $VN, 91: $VO, 97: 284, 105: $VP, 106: $VQ, 109: $VR, 111: $VS, 112: $VT, 115: 100, 117: 98, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 26: $VK, 52: $VL, 66: $VM, 67: $VN, 91: $VO, 97: 285, 105: $VP, 106: $VQ, 109: $VR, 111: $VS, 112: $VT, 115: 100, 117: 98, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, o($V11, [2, 108]), o($V11, [2, 114]), o($V$, [2, 60]), { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 39: 286, 42: $V91, 52: $VL, 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 83: 140, 84: $Vc1, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, o($V$, [2, 68]), o($Vo1, $V5, { 17: 287 }), o($VG1, [2, 126], { 108: 274, 22: $Vu1, 66: $Vv1, 67: $Vw1, 86: $Vx1, 102: $Vy1, 105: $Vz1, 109: $VA1, 110: $VB1, 111: $VC1, 112: $VD1, 113: $VE1 }), o($V11, [2, 121], { 115: 100, 117: 178, 22: [1, 288], 26: $VK, 52: $VL, 66: $VM, 67: $VN, 91: $VO, 105: $VP, 106: $VQ, 109: $VR, 111: $VS, 112: $VT, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }), o($V11, [2, 122], { 115: 100, 117: 178, 22: [1, 289], 26: $VK, 52: $VL, 66: $VM, 67: $VN, 91: $VO, 105: $VP, 106: $VQ, 109: $VR, 111: $VS, 112: $VT, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }), { 22: $V51, 24: $V61, 26: $V71, 38: $V81, 41: [1, 290], 42: $V91, 52: $VL, 66: $VM, 67: $VN, 73: $Va1, 81: $Vb1, 83: 201, 85: 151, 86: $Vd1, 87: $Ve1, 88: $Vf1, 89: $Vg1, 90: $Vh1, 91: $Vi1, 92: $Vj1, 94: 142, 95: $Vk1, 105: $VP, 106: $VQ, 109: $Vl1, 111: $VS, 112: $VT, 113: $Vm1, 114: $Vn1, 115: 148, 122: $VU, 123: $VV, 124: $VW, 125: $VX, 126: $VY, 127: $VZ }, { 18: 18, 19: 19, 20: $V6, 21: $V7, 22: $V8, 23: $V9, 32: 24, 33: 25, 34: 26, 35: 27, 36: 28, 37: 29, 38: $Va, 42: [1, 291], 43: 31, 44: $Vb, 46: $Vc, 48: $Vd, 50: 35, 51: 45, 52: $Ve, 54: 46, 66: $Vf, 67: $Vg, 86: $Vh, 87: $Vi, 88: $Vj, 89: $Vk, 90: $Vl, 91: $Vm, 95: $Vn, 105: $Vo, 106: $Vp, 109: $Vq, 111: $Vr, 112: $Vs, 116: 47, 118: $Vt, 119: $Vu, 120: $Vv, 121: $Vw, 122: $Vx, 123: $Vy, 124: $Vz, 125: $VA, 126: $VB, 127: $VC }, { 22: $Vu1, 66: $Vv1, 67: $Vw1, 86: $Vx1, 96: 292, 102: $Vy1, 105: $Vz1, 107: 243, 108: 244, 109: $VA1, 110: $VB1, 111: $VC1, 112: $VD1, 113: $VE1 }, { 22: $Vu1, 66: $Vv1, 67: $Vw1, 86: $Vx1, 96: 293, 102: $Vy1, 105: $Vz1, 107: 243, 108: 244, 109: $VA1, 110: $VB1, 111: $VC1, 112: $VD1, 113: $VE1 }, o($V$, [2, 64]), o($VF, [2, 41]), o($V11, [2, 119], { 106: $VF1 }), o($V11, [2, 120], { 106: $VF1 })],
    defaultActions: { 2: [2, 1], 9: [2, 5], 10: [2, 2], 132: [2, 7] },
    parseError: function parseError(str, hash) {
      if (hash.recoverable) {
        this.trace(str);
      } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
      }
    },
    parse: function parse(input) {
      var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, TERROR = 2, EOF = 1;
      var args = lstack.slice.call(arguments, 1);
      var lexer2 = Object.create(this.lexer);
      var sharedState = { yy: {} };
      for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
          sharedState.yy[k] = this.yy[k];
        }
      }
      lexer2.setInput(input, sharedState.yy);
      sharedState.yy.lexer = lexer2;
      sharedState.yy.parser = this;
      if (typeof lexer2.yylloc == "undefined") {
        lexer2.yylloc = {};
      }
      var yyloc = lexer2.yylloc;
      lstack.push(yyloc);
      var ranges = lexer2.options && lexer2.options.ranges;
      if (typeof sharedState.yy.parseError === "function") {
        this.parseError = sharedState.yy.parseError;
      } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
      }
      function lex2() {
        var token;
        token = tstack.pop() || lexer2.lex() || EOF;
        if (typeof token !== "number") {
          if (token instanceof Array) {
            tstack = token;
            token = tstack.pop();
          }
          token = self.symbols_[token] || token;
        }
        return token;
      }
      var symbol, state, action, r, yyval = {}, p, len, newState, expected;
      while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
          action = this.defaultActions[state];
        } else {
          if (symbol === null || typeof symbol == "undefined") {
            symbol = lex2();
          }
          action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
          var errStr = "";
          expected = [];
          for (p in table[state]) {
            if (this.terminals_[p] && p > TERROR) {
              expected.push("'" + this.terminals_[p] + "'");
            }
          }
          if (lexer2.showPosition) {
            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + lexer2.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
          } else {
            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == EOF ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
          }
          this.parseError(errStr, {
            text: lexer2.match,
            token: this.terminals_[symbol] || symbol,
            line: lexer2.yylineno,
            loc: yyloc,
            expected
          });
        }
        if (action[0] instanceof Array && action.length > 1) {
          throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
          case 1:
            stack.push(symbol);
            vstack.push(lexer2.yytext);
            lstack.push(lexer2.yylloc);
            stack.push(action[1]);
            symbol = null;
            {
              yyleng = lexer2.yyleng;
              yytext = lexer2.yytext;
              yylineno = lexer2.yylineno;
              yyloc = lexer2.yylloc;
            }
            break;
          case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
              first_line: lstack[lstack.length - (len || 1)].first_line,
              last_line: lstack[lstack.length - 1].last_line,
              first_column: lstack[lstack.length - (len || 1)].first_column,
              last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
              yyval._$.range = [
                lstack[lstack.length - (len || 1)].range[0],
                lstack[lstack.length - 1].range[1]
              ];
            }
            r = this.performAction.apply(yyval, [
              yytext,
              yyleng,
              yylineno,
              sharedState.yy,
              action[1],
              vstack,
              lstack
            ].concat(args));
            if (typeof r !== "undefined") {
              return r;
            }
            if (len) {
              stack = stack.slice(0, -1 * len * 2);
              vstack = vstack.slice(0, -1 * len);
              lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }
  };
  var lexer = function() {
    var lexer2 = {
      EOF: 1,
      parseError: function parseError(str, hash) {
        if (this.yy.parser) {
          this.yy.parser.parseError(str, hash);
        } else {
          throw new Error(str);
        }
      },
      // resets the lexer, sets new input
      setInput: function(input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = "";
        this.conditionStack = ["INITIAL"];
        this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        };
        if (this.options.ranges) {
          this.yylloc.range = [0, 0];
        }
        this.offset = 0;
        return this;
      },
      // consumes and returns one char from the input
      input: function() {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
          this.yylineno++;
          this.yylloc.last_line++;
        } else {
          this.yylloc.last_column++;
        }
        if (this.options.ranges) {
          this.yylloc.range[1]++;
        }
        this._input = this._input.slice(1);
        return ch;
      },
      // unshifts one char (or a string) into the input
      unput: function(ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);
        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        if (lines.length - 1) {
          this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
        };
        if (this.options.ranges) {
          this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
      },
      // When called from action, caches matched text and appends it on next action
      more: function() {
        this._more = true;
        return this;
      },
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: function() {
        if (this.options.backtrack_lexer) {
          this._backtrack = true;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
        return this;
      },
      // retain first n characters of the match
      less: function(n) {
        this.unput(this.match.slice(n));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var next = this.match;
        if (next.length < 20) {
          next += this._input.substr(0, 20 - next.length);
        }
        return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(match, indexed_rule) {
        var token, lines, backup;
        if (this.options.backtrack_lexer) {
          backup = {
            yylineno: this.yylineno,
            yylloc: {
              first_line: this.yylloc.first_line,
              last_line: this.last_line,
              first_column: this.yylloc.first_column,
              last_column: this.yylloc.last_column
            },
            yytext: this.yytext,
            match: this.match,
            matches: this.matches,
            matched: this.matched,
            yyleng: this.yyleng,
            offset: this.offset,
            _more: this._more,
            _input: this._input,
            yy: this.yy,
            conditionStack: this.conditionStack.slice(0),
            done: this.done
          };
          if (this.options.ranges) {
            backup.yylloc.range = this.yylloc.range.slice(0);
          }
        }
        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
          this.yylineno += lines.length;
        }
        this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
          this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
          this.done = false;
        }
        if (token) {
          return token;
        } else if (this._backtrack) {
          for (var k in backup) {
            this[k] = backup[k];
          }
          return false;
        }
        return false;
      },
      // return next match in input
      next: function() {
        if (this.done) {
          return this.EOF;
        }
        if (!this._input) {
          this.done = true;
        }
        var token, match, tempMatch, index;
        if (!this._more) {
          this.yytext = "";
          this.match = "";
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
          tempMatch = this._input.match(this.rules[rules[i]]);
          if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
            match = tempMatch;
            index = i;
            if (this.options.backtrack_lexer) {
              token = this.test_match(tempMatch, rules[i]);
              if (token !== false) {
                return token;
              } else if (this._backtrack) {
                match = false;
                continue;
              } else {
                return false;
              }
            } else if (!this.options.flex) {
              break;
            }
          }
        }
        if (match) {
          token = this.test_match(match, rules[index]);
          if (token !== false) {
            return token;
          }
          return false;
        }
        if (this._input === "") {
          return this.EOF;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
      },
      // return next match that has a token
      lex: function lex2() {
        var r = this.next();
        if (r) {
          return r;
        } else {
          return this.lex();
        }
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function begin(condition) {
        this.conditionStack.push(condition);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
          return this.conditionStack.pop();
        } else {
          return this.conditionStack[0];
        }
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
          return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
          return this.conditions["INITIAL"].rules;
        }
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
          return this.conditionStack[n];
        } else {
          return "INITIAL";
        }
      },
      // alias for begin(condition)
      pushState: function pushState(condition) {
        this.begin(condition);
      },
      // return the number of states currently on the stack
      stateStackSize: function stateStackSize() {
        return this.conditionStack.length;
      },
      options: {},
      performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
        switch ($avoiding_name_collisions) {
          case 0:
            this.begin("open_directive");
            return 12;
          case 1:
            this.begin("type_directive");
            return 13;
          case 2:
            this.popState();
            this.begin("arg_directive");
            return 10;
          case 3:
            this.popState();
            this.popState();
            return 15;
          case 4:
            return 14;
          case 5:
            break;
          case 6:
            break;
          case 7:
            this.begin("acc_title");
            return 44;
          case 8:
            this.popState();
            return "acc_title_value";
          case 9:
            this.begin("acc_descr");
            return 46;
          case 10:
            this.popState();
            return "acc_descr_value";
          case 11:
            this.begin("acc_descr_multiline");
            break;
          case 12:
            this.popState();
            break;
          case 13:
            return "acc_descr_multiline_value";
          case 14:
            this.begin("string");
            break;
          case 15:
            this.popState();
            break;
          case 16:
            return "STR";
          case 17:
            return 86;
          case 18:
            return 95;
          case 19:
            return 87;
          case 20:
            return 104;
          case 21:
            return 88;
          case 22:
            return 89;
          case 23:
            this.begin("href");
            break;
          case 24:
            this.popState();
            break;
          case 25:
            return 100;
          case 26:
            this.begin("callbackname");
            break;
          case 27:
            this.popState();
            break;
          case 28:
            this.popState();
            this.begin("callbackargs");
            break;
          case 29:
            return 98;
          case 30:
            this.popState();
            break;
          case 31:
            return 99;
          case 32:
            this.begin("click");
            break;
          case 33:
            this.popState();
            break;
          case 34:
            return 90;
          case 35:
            if (yy.lex.firstGraph()) {
              this.begin("dir");
            }
            return 24;
          case 36:
            if (yy.lex.firstGraph()) {
              this.begin("dir");
            }
            return 24;
          case 37:
            if (yy.lex.firstGraph()) {
              this.begin("dir");
            }
            return 24;
          case 38:
            return 38;
          case 39:
            return 42;
          case 40:
            return 101;
          case 41:
            return 101;
          case 42:
            return 101;
          case 43:
            return 101;
          case 44:
            this.popState();
            return 25;
          case 45:
            this.popState();
            return 26;
          case 46:
            this.popState();
            return 26;
          case 47:
            this.popState();
            return 26;
          case 48:
            this.popState();
            return 26;
          case 49:
            this.popState();
            return 26;
          case 50:
            this.popState();
            return 26;
          case 51:
            this.popState();
            return 26;
          case 52:
            this.popState();
            return 26;
          case 53:
            this.popState();
            return 26;
          case 54:
            this.popState();
            return 26;
          case 55:
            return 118;
          case 56:
            return 119;
          case 57:
            return 120;
          case 58:
            return 121;
          case 59:
            return 105;
          case 60:
            return 111;
          case 61:
            return 53;
          case 62:
            return 67;
          case 63:
            return 52;
          case 64:
            return 20;
          case 65:
            return 106;
          case 66:
            return 126;
          case 67:
            return 82;
          case 68:
            return 82;
          case 69:
            return 82;
          case 70:
            return 82;
          case 71:
            return 81;
          case 72:
            return 81;
          case 73:
            return 81;
          case 74:
            return 59;
          case 75:
            return 60;
          case 76:
            return 61;
          case 77:
            return 62;
          case 78:
            return 63;
          case 79:
            return 64;
          case 80:
            return 65;
          case 81:
            return 69;
          case 82:
            return 70;
          case 83:
            return 55;
          case 84:
            return 56;
          case 85:
            return 109;
          case 86:
            return 112;
          case 87:
            return 127;
          case 88:
            return 124;
          case 89:
            return 113;
          case 90:
            return 125;
          case 91:
            return 125;
          case 92:
            return 114;
          case 93:
            return 73;
          case 94:
            return 92;
          case 95:
            return "SEP";
          case 96:
            return 91;
          case 97:
            return 66;
          case 98:
            return 75;
          case 99:
            return 74;
          case 100:
            return 77;
          case 101:
            return 76;
          case 102:
            return 122;
          case 103:
            return 123;
          case 104:
            return 68;
          case 105:
            return 57;
          case 106:
            return 58;
          case 107:
            return 40;
          case 108:
            return 41;
          case 109:
            return 71;
          case 110:
            return 72;
          case 111:
            return 133;
          case 112:
            return 21;
          case 113:
            return 22;
          case 114:
            return 23;
        }
      },
      rules: [/^(?:%%\{)/, /^(?:((?:(?!\}%%)[^:.])*))/, /^(?::)/, /^(?:\}%%)/, /^(?:((?:(?!\}%%).|\n)*))/, /^(?:%%(?!\{)[^\n]*)/, /^(?:[^\}]%%[^\n]*)/, /^(?:accTitle\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*\{\s*)/, /^(?:[\}])/, /^(?:[^\}]*)/, /^(?:["])/, /^(?:["])/, /^(?:[^"]*)/, /^(?:style\b)/, /^(?:default\b)/, /^(?:linkStyle\b)/, /^(?:interpolate\b)/, /^(?:classDef\b)/, /^(?:class\b)/, /^(?:href[\s]+["])/, /^(?:["])/, /^(?:[^"]*)/, /^(?:call[\s]+)/, /^(?:\([\s]*\))/, /^(?:\()/, /^(?:[^(]*)/, /^(?:\))/, /^(?:[^)]*)/, /^(?:click[\s]+)/, /^(?:[\s\n])/, /^(?:[^\s\n]*)/, /^(?:flowchart-elk\b)/, /^(?:graph\b)/, /^(?:flowchart\b)/, /^(?:subgraph\b)/, /^(?:end\b\s*)/, /^(?:_self\b)/, /^(?:_blank\b)/, /^(?:_parent\b)/, /^(?:_top\b)/, /^(?:(\r?\n)*\s*\n)/, /^(?:\s*LR\b)/, /^(?:\s*RL\b)/, /^(?:\s*TB\b)/, /^(?:\s*BT\b)/, /^(?:\s*TD\b)/, /^(?:\s*BR\b)/, /^(?:\s*<)/, /^(?:\s*>)/, /^(?:\s*\^)/, /^(?:\s*v\b)/, /^(?:.*direction\s+TB[^\n]*)/, /^(?:.*direction\s+BT[^\n]*)/, /^(?:.*direction\s+RL[^\n]*)/, /^(?:.*direction\s+LR[^\n]*)/, /^(?:[0-9]+)/, /^(?:#)/, /^(?::::)/, /^(?::)/, /^(?:&)/, /^(?:;)/, /^(?:,)/, /^(?:\*)/, /^(?:\s*[xo<]?--+[-xo>]\s*)/, /^(?:\s*[xo<]?==+[=xo>]\s*)/, /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/, /^(?:\s*~~[\~]+\s*)/, /^(?:\s*[xo<]?--\s*)/, /^(?:\s*[xo<]?==\s*)/, /^(?:\s*[xo<]?-\.\s*)/, /^(?:\(-)/, /^(?:-\))/, /^(?:\(\[)/, /^(?:\]\))/, /^(?:\[\[)/, /^(?:\]\])/, /^(?:\[\|)/, /^(?:\[\()/, /^(?:\)\])/, /^(?:\(\(\()/, /^(?:\)\)\))/, /^(?:-)/, /^(?:\.)/, /^(?:[\_])/, /^(?:\+)/, /^(?:%)/, /^(?:=)/, /^(?:=)/, /^(?:<)/, /^(?:>)/, /^(?:\^)/, /^(?:\\\|)/, /^(?:v\b)/, /^(?:[A-Za-z]+)/, /^(?:\\\])/, /^(?:\[\/)/, /^(?:\/\])/, /^(?:\[\\)/, /^(?:[!"#$%&'*+,-.`?\\_/])/, /^(?:[\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6]|[\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377]|[\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5]|[\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA]|[\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE]|[\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA]|[\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0]|[\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977]|[\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2]|[\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A]|[\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39]|[\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8]|[\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C]|[\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C]|[\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99]|[\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0]|[\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D]|[\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3]|[\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10]|[\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1]|[\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81]|[\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3]|[\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6]|[\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A]|[\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081]|[\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D]|[\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0]|[\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310]|[\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C]|[\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711]|[\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7]|[\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C]|[\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16]|[\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF]|[\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC]|[\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D]|[\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D]|[\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3]|[\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F]|[\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128]|[\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184]|[\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3]|[\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6]|[\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE]|[\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C]|[\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D]|[\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC]|[\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B]|[\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788]|[\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805]|[\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB]|[\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28]|[\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5]|[\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4]|[\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|[\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D]|[\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36]|[\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D]|[\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC]|[\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF]|[\uFFD2-\uFFD7\uFFDA-\uFFDC])/, /^(?:\|)/, /^(?:\()/, /^(?:\))/, /^(?:\[)/, /^(?:\])/, /^(?:\{)/, /^(?:\})/, /^(?:")/, /^(?:(\r?\n)+)/, /^(?:\s)/, /^(?:$)/],
      conditions: { "close_directive": { "rules": [], "inclusive": false }, "arg_directive": { "rules": [3, 4], "inclusive": false }, "type_directive": { "rules": [2, 3], "inclusive": false }, "open_directive": { "rules": [1], "inclusive": false }, "callbackargs": { "rules": [30, 31], "inclusive": false }, "callbackname": { "rules": [27, 28, 29], "inclusive": false }, "href": { "rules": [24, 25], "inclusive": false }, "click": { "rules": [33, 34], "inclusive": false }, "vertex": { "rules": [], "inclusive": false }, "dir": { "rules": [44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54], "inclusive": false }, "acc_descr_multiline": { "rules": [12, 13], "inclusive": false }, "acc_descr": { "rules": [10], "inclusive": false }, "acc_title": { "rules": [8], "inclusive": false }, "string": { "rules": [15, 16], "inclusive": false }, "INITIAL": { "rules": [0, 5, 6, 7, 9, 11, 14, 17, 18, 19, 20, 21, 22, 23, 26, 32, 35, 36, 37, 38, 39, 40, 41, 42, 43, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114], "inclusive": true } }
    };
    return lexer2;
  }();
  parser2.lexer = lexer;
  function Parser() {
    this.yy = {};
  }
  Parser.prototype = parser2;
  parser2.Parser = Parser;
  return new Parser();
}();
parser.parser = parser;
const parser$1 = parser;
const MERMAID_DOM_ID_PREFIX = "flowchart-";
let vertexCounter = 0;
let config = (0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.g)();
let vertices = {};
let edges = [];
let classes = {};
let subGraphs = [];
let subGraphLookup = {};
let tooltips = {};
let subCount = 0;
let firstGraphFlag = true;
let direction;
let version;
let funs = [];
const sanitizeText = (txt) => _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.d.sanitizeText(txt, config);
const parseDirective = function(statement, context, type) {
  _mermaidAPI_0716c7c2_js__WEBPACK_IMPORTED_MODULE_2__.m.parseDirective(this, statement, context, type);
};
const lookUpDomId = function(id) {
  const veritceKeys = Object.keys(vertices);
  for (const veritceKey of veritceKeys) {
    if (vertices[veritceKey].id === id) {
      return vertices[veritceKey].domId;
    }
  }
  return id;
};
const addVertex = function(_id, text, type, style, classes2, dir, props = {}) {
  let txt;
  let id = _id;
  if (id === void 0) {
    return;
  }
  if (id.trim().length === 0) {
    return;
  }
  if (vertices[id] === void 0) {
    vertices[id] = {
      id,
      domId: MERMAID_DOM_ID_PREFIX + id + "-" + vertexCounter,
      styles: [],
      classes: []
    };
  }
  vertexCounter++;
  if (text !== void 0) {
    config = (0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.g)();
    txt = sanitizeText(text.trim());
    if (txt[0] === '"' && txt[txt.length - 1] === '"') {
      txt = txt.substring(1, txt.length - 1);
    }
    vertices[id].text = txt;
  } else {
    if (vertices[id].text === void 0) {
      vertices[id].text = _id;
    }
  }
  if (type !== void 0) {
    vertices[id].type = type;
  }
  if (style !== void 0 && style !== null) {
    style.forEach(function(s) {
      vertices[id].styles.push(s);
    });
  }
  if (classes2 !== void 0 && classes2 !== null) {
    classes2.forEach(function(s) {
      vertices[id].classes.push(s);
    });
  }
  if (dir !== void 0) {
    vertices[id].dir = dir;
  }
  if (vertices[id].props === void 0) {
    vertices[id].props = props;
  } else if (props !== void 0) {
    Object.assign(vertices[id].props, props);
  }
};
const addSingleLink = function(_start, _end, type, linkText) {
  let start = _start;
  let end = _end;
  const edge = { start, end, type: void 0, text: "" };
  linkText = type.text;
  if (linkText !== void 0) {
    edge.text = sanitizeText(linkText.trim());
    if (edge.text[0] === '"' && edge.text[edge.text.length - 1] === '"') {
      edge.text = edge.text.substring(1, edge.text.length - 1);
    }
  }
  if (type !== void 0) {
    edge.type = type.type;
    edge.stroke = type.stroke;
    edge.length = type.length;
  }
  edges.push(edge);
};
const addLink = function(_start, _end, type, linktext) {
  let i, j;
  for (i = 0; i < _start.length; i++) {
    for (j = 0; j < _end.length; j++) {
      addSingleLink(_start[i], _end[j], type, linktext);
    }
  }
};
const updateLinkInterpolate = function(positions, interp) {
  positions.forEach(function(pos) {
    if (pos === "default") {
      edges.defaultInterpolate = interp;
    } else {
      edges[pos].interpolate = interp;
    }
  });
};
const updateLink = function(positions, style) {
  positions.forEach(function(pos) {
    if (pos === "default") {
      edges.defaultStyle = style;
    } else {
      if (_utils_d5eeff82_js__WEBPACK_IMPORTED_MODULE_3__.u.isSubstringInArray("fill", style) === -1) {
        style.push("fill:none");
      }
      edges[pos].style = style;
    }
  });
};
const addClass = function(id, style) {
  if (classes[id] === void 0) {
    classes[id] = { id, styles: [], textStyles: [] };
  }
  if (style !== void 0 && style !== null) {
    style.forEach(function(s) {
      if (s.match("color")) {
        const newStyle1 = s.replace("fill", "bgFill");
        const newStyle2 = newStyle1.replace("color", "fill");
        classes[id].textStyles.push(newStyle2);
      }
      classes[id].styles.push(s);
    });
  }
};
const setDirection = function(dir) {
  direction = dir;
  if (direction.match(/.*</)) {
    direction = "RL";
  }
  if (direction.match(/.*\^/)) {
    direction = "BT";
  }
  if (direction.match(/.*>/)) {
    direction = "LR";
  }
  if (direction.match(/.*v/)) {
    direction = "TB";
  }
  if (direction === "TD") {
    direction = "TB";
  }
};
const setClass = function(ids, className) {
  ids.split(",").forEach(function(_id) {
    let id = _id;
    if (vertices[id] !== void 0) {
      vertices[id].classes.push(className);
    }
    if (subGraphLookup[id] !== void 0) {
      subGraphLookup[id].classes.push(className);
    }
  });
};
const setTooltip = function(ids, tooltip) {
  ids.split(",").forEach(function(id) {
    if (tooltip !== void 0) {
      tooltips[version === "gen-1" ? lookUpDomId(id) : id] = sanitizeText(tooltip);
    }
  });
};
const setClickFun = function(id, functionName, functionArgs) {
  let domId = lookUpDomId(id);
  if ((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.g)().securityLevel !== "loose") {
    return;
  }
  if (functionName === void 0) {
    return;
  }
  let argList = [];
  if (typeof functionArgs === "string") {
    argList = functionArgs.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    for (let i = 0; i < argList.length; i++) {
      let item = argList[i].trim();
      if (item.charAt(0) === '"' && item.charAt(item.length - 1) === '"') {
        item = item.substr(1, item.length - 2);
      }
      argList[i] = item;
    }
  }
  if (argList.length === 0) {
    argList.push(id);
  }
  if (vertices[id] !== void 0) {
    vertices[id].haveCallback = true;
    funs.push(function() {
      const elem = document.querySelector(`[id="${domId}"]`);
      if (elem !== null) {
        elem.addEventListener(
          "click",
          function() {
            _utils_d5eeff82_js__WEBPACK_IMPORTED_MODULE_3__.u.runFunc(functionName, ...argList);
          },
          false
        );
      }
    });
  }
};
const setLink = function(ids, linkStr, target) {
  ids.split(",").forEach(function(id) {
    if (vertices[id] !== void 0) {
      vertices[id].link = _utils_d5eeff82_js__WEBPACK_IMPORTED_MODULE_3__.u.formatUrl(linkStr, config);
      vertices[id].linkTarget = target;
    }
  });
  setClass(ids, "clickable");
};
const getTooltip = function(id) {
  return tooltips[id];
};
const setClickEvent = function(ids, functionName, functionArgs) {
  ids.split(",").forEach(function(id) {
    setClickFun(id, functionName, functionArgs);
  });
  setClass(ids, "clickable");
};
const bindFunctions = function(element) {
  funs.forEach(function(fun) {
    fun(element);
  });
};
const getDirection = function() {
  return direction.trim();
};
const getVertices = function() {
  return vertices;
};
const getEdges = function() {
  return edges;
};
const getClasses = function() {
  return classes;
};
const setupToolTips = function(element) {
  let tooltipElem = (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)(".mermaidTooltip");
  if ((tooltipElem._groups || tooltipElem)[0][0] === null) {
    tooltipElem = (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)("body").append("div").attr("class", "mermaidTooltip").style("opacity", 0);
  }
  const svg = (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)(element).select("svg");
  const nodes = svg.selectAll("g.node");
  nodes.on("mouseover", function() {
    const el = (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)(this);
    const title = el.attr("title");
    if (title === null) {
      return;
    }
    const rect = this.getBoundingClientRect();
    tooltipElem.transition().duration(200).style("opacity", ".9");
    tooltipElem.text(el.attr("title")).style("left", window.scrollX + rect.left + (rect.right - rect.left) / 2 + "px").style("top", window.scrollY + rect.top - 14 + document.body.scrollTop + "px");
    tooltipElem.html(tooltipElem.html().replace(/&lt;br\/&gt;/g, "<br/>"));
    el.classed("hover", true);
  }).on("mouseout", function() {
    tooltipElem.transition().duration(500).style("opacity", 0);
    const el = (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)(this);
    el.classed("hover", false);
  });
};
funs.push(setupToolTips);
const clear = function(ver = "gen-1") {
  vertices = {};
  classes = {};
  edges = [];
  funs = [setupToolTips];
  subGraphs = [];
  subGraphLookup = {};
  subCount = 0;
  tooltips = [];
  firstGraphFlag = true;
  version = ver;
  (0,_commonDb_2ace122b_js__WEBPACK_IMPORTED_MODULE_4__.f)();
};
const setGen = (ver) => {
  version = ver || "gen-2";
};
const defaultStyle = function() {
  return "fill:#ffa;stroke: #f66; stroke-width: 3px; stroke-dasharray: 5, 5;fill:#ffa;stroke: #666;";
};
const addSubGraph = function(_id, list, _title) {
  let id = _id.trim();
  let title = _title;
  if (_id === _title && _title.match(/\s/)) {
    id = void 0;
  }
  function uniq(a) {
    const prims = { boolean: {}, number: {}, string: {} };
    const objs = [];
    let dir2;
    const nodeList2 = a.filter(function(item) {
      const type = typeof item;
      if (item.stmt && item.stmt === "dir") {
        dir2 = item.value;
        return false;
      }
      if (item.trim() === "") {
        return false;
      }
      if (type in prims) {
        return prims[type].hasOwnProperty(item) ? false : prims[type][item] = true;
      } else {
        return objs.includes(item) ? false : objs.push(item);
      }
    });
    return { nodeList: nodeList2, dir: dir2 };
  }
  let nodeList = [];
  const { nodeList: nl, dir } = uniq(nodeList.concat.apply(nodeList, list));
  nodeList = nl;
  if (version === "gen-1") {
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i] = lookUpDomId(nodeList[i]);
    }
  }
  id = id || "subGraph" + subCount;
  title = title || "";
  title = sanitizeText(title);
  subCount = subCount + 1;
  const subGraph = { id, nodes: nodeList, title: title.trim(), classes: [], dir };
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.l.info("Adding", subGraph.id, subGraph.nodes, subGraph.dir);
  subGraph.nodes = makeUniq(subGraph, subGraphs).nodes;
  subGraphs.push(subGraph);
  subGraphLookup[id] = subGraph;
  return id;
};
const getPosForId = function(id) {
  for (const [i, subGraph] of subGraphs.entries()) {
    if (subGraph.id === id) {
      return i;
    }
  }
  return -1;
};
let secCount = -1;
const posCrossRef = [];
const indexNodes2 = function(id, pos) {
  const nodes = subGraphs[pos].nodes;
  secCount = secCount + 1;
  if (secCount > 2e3) {
    return;
  }
  posCrossRef[secCount] = pos;
  if (subGraphs[pos].id === id) {
    return {
      result: true,
      count: 0
    };
  }
  let count = 0;
  let posCount = 1;
  while (count < nodes.length) {
    const childPos = getPosForId(nodes[count]);
    if (childPos >= 0) {
      const res = indexNodes2(id, childPos);
      if (res.result) {
        return {
          result: true,
          count: posCount + res.count
        };
      } else {
        posCount = posCount + res.count;
      }
    }
    count = count + 1;
  }
  return {
    result: false,
    count: posCount
  };
};
const getDepthFirstPos = function(pos) {
  return posCrossRef[pos];
};
const indexNodes = function() {
  secCount = -1;
  if (subGraphs.length > 0) {
    indexNodes2("none", subGraphs.length - 1);
  }
};
const getSubGraphs = function() {
  return subGraphs;
};
const firstGraph = () => {
  if (firstGraphFlag) {
    firstGraphFlag = false;
    return true;
  }
  return false;
};
const destructStartLink = (_str) => {
  let str = _str.trim();
  let type = "arrow_open";
  switch (str[0]) {
    case "<":
      type = "arrow_point";
      str = str.slice(1);
      break;
    case "x":
      type = "arrow_cross";
      str = str.slice(1);
      break;
    case "o":
      type = "arrow_circle";
      str = str.slice(1);
      break;
  }
  let stroke = "normal";
  if (str.includes("=")) {
    stroke = "thick";
  }
  if (str.includes(".")) {
    stroke = "dotted";
  }
  return { type, stroke };
};
const countChar = (char, str) => {
  const length = str.length;
  let count = 0;
  for (let i = 0; i < length; ++i) {
    if (str[i] === char) {
      ++count;
    }
  }
  return count;
};
const destructEndLink = (_str) => {
  const str = _str.trim();
  let line = str.slice(0, -1);
  let type = "arrow_open";
  switch (str.slice(-1)) {
    case "x":
      type = "arrow_cross";
      if (str[0] === "x") {
        type = "double_" + type;
        line = line.slice(1);
      }
      break;
    case ">":
      type = "arrow_point";
      if (str[0] === "<") {
        type = "double_" + type;
        line = line.slice(1);
      }
      break;
    case "o":
      type = "arrow_circle";
      if (str[0] === "o") {
        type = "double_" + type;
        line = line.slice(1);
      }
      break;
  }
  let stroke = "normal";
  let length = line.length - 1;
  if (line[0] === "=") {
    stroke = "thick";
  }
  if (line[0] === "~") {
    stroke = "invisible";
  }
  let dots = countChar(".", line);
  if (dots) {
    stroke = "dotted";
    length = dots;
  }
  return { type, stroke, length };
};
const destructLink = (_str, _startStr) => {
  const info = destructEndLink(_str);
  let startInfo;
  if (_startStr) {
    startInfo = destructStartLink(_startStr);
    if (startInfo.stroke !== info.stroke) {
      return { type: "INVALID", stroke: "INVALID" };
    }
    if (startInfo.type === "arrow_open") {
      startInfo.type = info.type;
    } else {
      if (startInfo.type !== info.type) {
        return { type: "INVALID", stroke: "INVALID" };
      }
      startInfo.type = "double_" + startInfo.type;
    }
    if (startInfo.type === "double_arrow") {
      startInfo.type = "double_arrow_point";
    }
    startInfo.length = info.length;
    return startInfo;
  }
  return info;
};
const exists = (allSgs, _id) => {
  let res = false;
  allSgs.forEach((sg) => {
    const pos = sg.nodes.indexOf(_id);
    if (pos >= 0) {
      res = true;
    }
  });
  return res;
};
const makeUniq = (sg, allSubgraphs) => {
  const res = [];
  sg.nodes.forEach((_id, pos) => {
    if (!exists(allSubgraphs, _id)) {
      res.push(sg.nodes[pos]);
    }
  });
  return { nodes: res };
};
const lex = {
  firstGraph
};
const flowDb = {
  parseDirective,
  defaultConfig: () => _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_1__.i.flowchart,
  setAccTitle: _commonDb_2ace122b_js__WEBPACK_IMPORTED_MODULE_4__.s,
  getAccTitle: _commonDb_2ace122b_js__WEBPACK_IMPORTED_MODULE_4__.g,
  getAccDescription: _commonDb_2ace122b_js__WEBPACK_IMPORTED_MODULE_4__.a,
  setAccDescription: _commonDb_2ace122b_js__WEBPACK_IMPORTED_MODULE_4__.b,
  addVertex,
  lookUpDomId,
  addLink,
  updateLinkInterpolate,
  updateLink,
  addClass,
  setDirection,
  setClass,
  setTooltip,
  getTooltip,
  setClickEvent,
  setLink,
  bindFunctions,
  getDirection,
  getVertices,
  getEdges,
  getClasses,
  clear,
  setGen,
  defaultStyle,
  addSubGraph,
  getDepthFirstPos,
  indexNodes,
  getSubGraphs,
  destructLink,
  lex,
  exists,
  makeUniq,
  setDiagramTitle: _commonDb_2ace122b_js__WEBPACK_IMPORTED_MODULE_4__.d,
  getDiagramTitle: _commonDb_2ace122b_js__WEBPACK_IMPORTED_MODULE_4__.e
};
const db = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addClass,
  addLink,
  addSingleLink,
  addSubGraph,
  addVertex,
  bindFunctions,
  clear,
  default: flowDb,
  defaultStyle,
  destructLink,
  firstGraph,
  getClasses,
  getDepthFirstPos,
  getDirection,
  getEdges,
  getSubGraphs,
  getTooltip,
  getVertices,
  indexNodes,
  lex,
  lookUpDomId,
  parseDirective,
  setClass,
  setClickEvent,
  setDirection,
  setGen,
  setLink,
  updateLink,
  updateLinkInterpolate
}, Symbol.toStringTag, { value: "Module" }));

//# sourceMappingURL=flowDb-88762a1f.js.map


/***/ }),

/***/ 7227:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "diagram": () => (/* binding */ diagram)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/mermaid@10.0.2/node_modules/mermaid/dist/flowDb-88762a1f.js
var flowDb_88762a1f = __webpack_require__(53557);
// EXTERNAL MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/graphlib/index.js
var graphlib = __webpack_require__(76003);
// EXTERNAL MODULE: ./node_modules/.pnpm/d3@7.8.2/node_modules/d3/src/index.js + 192 modules
var src = __webpack_require__(63321);
// EXTERNAL MODULE: ./node_modules/.pnpm/mermaid@10.0.2/node_modules/mermaid/dist/config-389b86ff.js
var config_389b86ff = __webpack_require__(90403);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/has.js + 1 modules
var has = __webpack_require__(27431);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/defaults.js
var defaults = __webpack_require__(70374);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/forEach.js
var forEach = __webpack_require__(79156);
// EXTERNAL MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre/index.js + 35 modules
var dagre = __webpack_require__(21640);
// EXTERNAL MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre-js/util.js
var util = __webpack_require__(80837);
;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre-js/arrows.js




var arrows = {
  normal,
  vee,
  undirected,
};

function setArrows(value) {
  arrows = value;
}

function normal(parent, id, edge, type) {
  var marker = parent
    .append('marker')
    .attr('id', id)
    .attr('viewBox', '0 0 10 10')
    .attr('refX', 9)
    .attr('refY', 5)
    .attr('markerUnits', 'strokeWidth')
    .attr('markerWidth', 8)
    .attr('markerHeight', 6)
    .attr('orient', 'auto');

  var path = marker
    .append('path')
    .attr('d', 'M 0 0 L 10 5 L 0 10 z')
    .style('stroke-width', 1)
    .style('stroke-dasharray', '1,0');
  util/* applyStyle */.bg(path, edge[type + 'Style']);
  if (edge[type + 'Class']) {
    path.attr('class', edge[type + 'Class']);
  }
}

function vee(parent, id, edge, type) {
  var marker = parent
    .append('marker')
    .attr('id', id)
    .attr('viewBox', '0 0 10 10')
    .attr('refX', 9)
    .attr('refY', 5)
    .attr('markerUnits', 'strokeWidth')
    .attr('markerWidth', 8)
    .attr('markerHeight', 6)
    .attr('orient', 'auto');

  var path = marker
    .append('path')
    .attr('d', 'M 0 0 L 10 5 L 0 10 L 4 5 z')
    .style('stroke-width', 1)
    .style('stroke-dasharray', '1,0');
  util/* applyStyle */.bg(path, edge[type + 'Style']);
  if (edge[type + 'Class']) {
    path.attr('class', edge[type + 'Class']);
  }
}

function undirected(parent, id, edge, type) {
  var marker = parent
    .append('marker')
    .attr('id', id)
    .attr('viewBox', '0 0 10 10')
    .attr('refX', 9)
    .attr('refY', 5)
    .attr('markerUnits', 'strokeWidth')
    .attr('markerWidth', 8)
    .attr('markerHeight', 6)
    .attr('orient', 'auto');

  var path = marker
    .append('path')
    .attr('d', 'M 0 5 L 10 5')
    .style('stroke-width', 1)
    .style('stroke-dasharray', '1,0');
  util/* applyStyle */.bg(path, edge[type + 'Style']);
  if (edge[type + 'Class']) {
    path.attr('class', edge[type + 'Class']);
  }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre-js/label/add-html-label.js
var add_html_label = __webpack_require__(36936);
;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre-js/label/add-svg-label.js




function addSVGLabel(root, node) {
  var domNode = root;

  domNode.node().appendChild(node.label);

  util/* applyStyle */.bg(domNode, node.labelStyle);

  return domNode;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre-js/label/add-text-label.js




/*
 * Attaches a text label to the specified root. Handles escape sequences.
 */
function addTextLabel(root, node) {
  var domNode = root.append('text');

  var lines = processEscapeSequences(node.label).split('\n');
  for (var i = 0; i < lines.length; i++) {
    domNode
      .append('tspan')
      .attr('xml:space', 'preserve')
      .attr('dy', '1em')
      .attr('x', '1')
      .text(lines[i]);
  }

  util/* applyStyle */.bg(domNode, node.labelStyle);

  return domNode;
}

function processEscapeSequences(text) {
  var newText = '';
  var escaped = false;
  var ch;
  for (var i = 0; i < text.length; ++i) {
    ch = text[i];
    if (escaped) {
      switch (ch) {
        case 'n':
          newText += '\n';
          break;
        default:
          newText += ch;
      }
      escaped = false;
    } else if (ch === '\\') {
      escaped = true;
    } else {
      newText += ch;
    }
  }
  return newText;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre-js/label/add-label.js






function addLabel(root, node, location) {
  var label = node.label;
  var labelSvg = root.append('g');

  // Allow the label to be a string, a function that returns a DOM element, or
  // a DOM element itself.
  if (node.labelType === 'svg') {
    addSVGLabel(labelSvg, node);
  } else if (typeof label !== 'string' || node.labelType === 'html') {
    (0,add_html_label/* addHtmlLabel */.a)(labelSvg, node);
  } else {
    addTextLabel(labelSvg, node);
  }

  var labelBBox = labelSvg.node().getBBox();
  var y;
  switch (location) {
    case 'top':
      y = -node.height / 2;
      break;
    case 'bottom':
      y = node.height / 2 - labelBBox.height;
      break;
    default:
      y = -labelBBox.height / 2;
  }
  labelSvg.attr('transform', 'translate(' + -labelBBox.width / 2 + ',' + y + ')');

  return labelSvg;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre-js/create-clusters.js






var createClusters = function (selection, g) {
  var clusters = g.nodes().filter(function (v) {
    return util/* isSubgraph */.bF(g, v);
  });
  var svgClusters = selection.selectAll('g.cluster').data(clusters, function (v) {
    return v;
  });

  util/* applyTransition */.WR(svgClusters.exit(), g).style('opacity', 0).remove();

  var enterSelection = svgClusters
    .enter()
    .append('g')
    .attr('class', 'cluster')
    .attr('id', function (v) {
      var node = g.node(v);
      return node.id;
    })
    .style('opacity', 0)
    .each(function (v) {
      var node = g.node(v);
      var thisGroup = src/* select */.Ys(this);
      src/* select */.Ys(this).append('rect');
      var labelGroup = thisGroup.append('g').attr('class', 'label');
      addLabel(labelGroup, node, node.clusterLabelPos);
    });

  svgClusters = svgClusters.merge(enterSelection);

  svgClusters = util/* applyTransition */.WR(svgClusters, g).style('opacity', 1);

  svgClusters.selectAll('rect').each(function (c) {
    var node = g.node(c);
    var domCluster = src/* select */.Ys(this);
    util/* applyStyle */.bg(domCluster, node.style);
  });

  return svgClusters;
};

function setCreateClusters(value) {
  createClusters = value;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre-js/create-edge-labels.js







let createEdgeLabels = function (selection, g) {
  var svgEdgeLabels = selection
    .selectAll('g.edgeLabel')
    .data(g.edges(), function (e) {
      return util/* edgeToId */.O1(e);
    })
    .classed('update', true);

  svgEdgeLabels.exit().remove();
  svgEdgeLabels.enter().append('g').classed('edgeLabel', true).style('opacity', 0);

  svgEdgeLabels = selection.selectAll('g.edgeLabel');

  svgEdgeLabels.each(function (e) {
    var root = src/* select */.Ys(this);
    root.select('.label').remove();
    var edge = g.edge(e);
    var label = addLabel(root, g.edge(e), 0).classed('label', true);
    var bbox = label.node().getBBox();

    if (edge.labelId) {
      label.attr('id', edge.labelId);
    }
    if (!has/* default */.Z(edge, 'width')) {
      edge.width = bbox.width;
    }
    if (!has/* default */.Z(edge, 'height')) {
      edge.height = bbox.height;
    }
  });

  var exitSelection;

  if (svgEdgeLabels.exit) {
    exitSelection = svgEdgeLabels.exit();
  } else {
    exitSelection = svgEdgeLabels.selectAll(null); // empty selection
  }

  util/* applyTransition */.WR(exitSelection, g).style('opacity', 0).remove();

  return svgEdgeLabels;
};

function setCreateEdgeLabels(value) {
  createEdgeLabels = value;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqueId.js
var uniqueId = __webpack_require__(59220);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/range.js + 2 modules
var range = __webpack_require__(57170);
;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre-js/intersect/intersect-node.js


function intersectNode(node, point) {
  return node.intersect(point);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre-js/create-edge-paths.js







var createEdgePaths = function (selection, g, arrows) {
  var previousPaths = selection
    .selectAll('g.edgePath')
    .data(g.edges(), function (e) {
      return util/* edgeToId */.O1(e);
    })
    .classed('update', true);

  var newPaths = enter(previousPaths, g);
  exit(previousPaths, g);

  var svgPaths = previousPaths.merge !== undefined ? previousPaths.merge(newPaths) : previousPaths;
  util/* applyTransition */.WR(svgPaths, g).style('opacity', 1);

  // Save DOM element in the path group, and set ID and class
  svgPaths.each(function (e) {
    var domEdge = src/* select */.Ys(this);
    var edge = g.edge(e);
    edge.elem = this;

    if (edge.id) {
      domEdge.attr('id', edge.id);
    }

    util/* applyClass */.$p(
      domEdge,
      edge['class'],
      (domEdge.classed('update') ? 'update ' : '') + 'edgePath'
    );
  });

  svgPaths.selectAll('path.path').each(function (e) {
    var edge = g.edge(e);
    edge.arrowheadId = uniqueId/* default */.Z('arrowhead');

    var domEdge = src/* select */.Ys(this)
      .attr('marker-end', function () {
        return 'url(' + makeFragmentRef(location.href, edge.arrowheadId) + ')';
      })
      .style('fill', 'none');

    util/* applyTransition */.WR(domEdge, g).attr('d', function (e) {
      return calcPoints(g, e);
    });

    util/* applyStyle */.bg(domEdge, edge.style);
  });

  svgPaths.selectAll('defs *').remove();
  svgPaths.selectAll('defs').each(function (e) {
    var edge = g.edge(e);
    var arrowhead = arrows[edge.arrowhead];
    arrowhead(src/* select */.Ys(this), edge.arrowheadId, edge, 'arrowhead');
  });

  return svgPaths;
};

function setCreateEdgePaths(value) {
  createEdgePaths = value;
}

function makeFragmentRef(url, fragmentId) {
  var baseUrl = url.split('#')[0];
  return baseUrl + '#' + fragmentId;
}

function calcPoints(g, e) {
  var edge = g.edge(e);
  var tail = g.node(e.v);
  var head = g.node(e.w);
  var points = edge.points.slice(1, edge.points.length - 1);
  points.unshift(intersectNode(tail, points[0]));
  points.push(intersectNode(head, points[points.length - 1]));

  return createLine(edge, points);
}

function createLine(edge, points) {
  // @ts-expect-error
  var line = (src/* line */.jvg || src/* svg.line */.YPS.line)()
    .x(function (d) {
      return d.x;
    })
    .y(function (d) {
      return d.y;
    });

  (line.curve || line.interpolate)(edge.curve);

  return line(points);
}

function getCoords(elem) {
  var bbox = elem.getBBox();
  var matrix = elem.ownerSVGElement
    .getScreenCTM()
    .inverse()
    .multiply(elem.getScreenCTM())
    .translate(bbox.width / 2, bbox.height / 2);
  return { x: matrix.e, y: matrix.f };
}

function enter(svgPaths, g) {
  var svgPathsEnter = svgPaths.enter().append('g').attr('class', 'edgePath').style('opacity', 0);
  svgPathsEnter
    .append('path')
    .attr('class', 'path')
    .attr('d', function (e) {
      var edge = g.edge(e);
      var sourceElem = g.node(e.v).elem;
      var points = range/* default */.Z(edge.points.length).map(function () {
        return getCoords(sourceElem);
      });
      return createLine(edge, points);
    });
  svgPathsEnter.append('defs');
  return svgPathsEnter;
}

function exit(svgPaths, g) {
  var svgPathExit = svgPaths.exit();
  util/* applyTransition */.WR(svgPathExit, g).style('opacity', 0).remove();
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/pick.js + 4 modules
var pick = __webpack_require__(77524);
;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre-js/create-nodes.js







var createNodes = function (selection, g, shapes) {
  var simpleNodes = g.nodes().filter(function (v) {
    return !util/* isSubgraph */.bF(g, v);
  });
  var svgNodes = selection
    .selectAll('g.node')
    .data(simpleNodes, function (v) {
      return v;
    })
    .classed('update', true);

  svgNodes.exit().remove();

  svgNodes.enter().append('g').attr('class', 'node').style('opacity', 0);

  svgNodes = selection.selectAll('g.node');

  svgNodes.each(function (v) {
    var node = g.node(v);
    var thisGroup = src/* select */.Ys(this);
    util/* applyClass */.$p(
      thisGroup,
      node['class'],
      (thisGroup.classed('update') ? 'update ' : '') + 'node'
    );

    thisGroup.select('g.label').remove();
    var labelGroup = thisGroup.append('g').attr('class', 'label');
    var labelDom = addLabel(labelGroup, node);
    var shape = shapes[node.shape];
    var bbox = pick/* default */.Z(labelDom.node().getBBox(), 'width', 'height');

    node.elem = this;

    if (node.id) {
      thisGroup.attr('id', node.id);
    }
    if (node.labelId) {
      labelGroup.attr('id', node.labelId);
    }

    if (has/* default */.Z(node, 'width')) {
      bbox.width = node.width;
    }
    if (has/* default */.Z(node, 'height')) {
      bbox.height = node.height;
    }

    bbox.width += node.paddingLeft + node.paddingRight;
    bbox.height += node.paddingTop + node.paddingBottom;
    labelGroup.attr(
      'transform',
      'translate(' +
        (node.paddingLeft - node.paddingRight) / 2 +
        ',' +
        (node.paddingTop - node.paddingBottom) / 2 +
        ')'
    );

    var root = src/* select */.Ys(this);
    root.select('.label-container').remove();
    var shapeSvg = shape(root, bbox, node).classed('label-container', true);
    util/* applyStyle */.bg(shapeSvg, node.style);

    var shapeBBox = shapeSvg.node().getBBox();
    node.width = shapeBBox.width;
    node.height = shapeBBox.height;
  });

  var exitSelection;

  if (svgNodes.exit) {
    exitSelection = svgNodes.exit();
  } else {
    exitSelection = svgNodes.selectAll(null); // empty selection
  }

  util/* applyTransition */.WR(exitSelection, g).style('opacity', 0).remove();

  return svgNodes;
};

function setCreateNodes(value) {
  createNodes = value;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre-js/position-clusters.js





function positionClusters(selection, g) {
  var created = selection.filter(function () {
    return !src/* select */.Ys(this).classed('update');
  });

  function translate(v) {
    var node = g.node(v);
    return 'translate(' + node.x + ',' + node.y + ')';
  }

  created.attr('transform', translate);

  util/* applyTransition */.WR(selection, g).style('opacity', 1).attr('transform', translate);

  util/* applyTransition */.WR(created.selectAll('rect'), g)
    .attr('width', function (v) {
      return g.node(v).width;
    })
    .attr('height', function (v) {
      return g.node(v).height;
    })
    .attr('x', function (v) {
      var node = g.node(v);
      return -node.width / 2;
    })
    .attr('y', function (v) {
      var node = g.node(v);
      return -node.height / 2;
    });
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre-js/position-edge-labels.js






function positionEdgeLabels(selection, g) {
  var created = selection.filter(function () {
    return !src/* select */.Ys(this).classed('update');
  });

  function translate(e) {
    var edge = g.edge(e);
    return has/* default */.Z(edge, 'x') ? 'translate(' + edge.x + ',' + edge.y + ')' : '';
  }

  created.attr('transform', translate);

  util/* applyTransition */.WR(selection, g).style('opacity', 1).attr('transform', translate);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre-js/position-nodes.js





function positionNodes(selection, g) {
  var created = selection.filter(function () {
    return !src/* select */.Ys(this).classed('update');
  });

  function translate(v) {
    var node = g.node(v);
    return 'translate(' + node.x + ',' + node.y + ')';
  }

  created.attr('transform', translate);

  util/* applyTransition */.WR(selection, g).style('opacity', 1).attr('transform', translate);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre-js/intersect/intersect-ellipse.js


function intersectEllipse(node, rx, ry, point) {
  // Formulae from: http://mathworld.wolfram.com/Ellipse-LineIntersection.html

  var cx = node.x;
  var cy = node.y;

  var px = cx - point.x;
  var py = cy - point.y;

  var det = Math.sqrt(rx * rx * py * py + ry * ry * px * px);

  var dx = Math.abs((rx * ry * px) / det);
  if (point.x < cx) {
    dx = -dx;
  }
  var dy = Math.abs((rx * ry * py) / det);
  if (point.y < cy) {
    dy = -dy;
  }

  return { x: cx + dx, y: cy + dy };
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre-js/intersect/intersect-circle.js




function intersectCircle(node, rx, point) {
  return intersectEllipse(node, rx, rx, point);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre-js/intersect/intersect-line.js


/*
 * Returns the point at which two lines, p and q, intersect or returns
 * undefined if they do not intersect.
 */
function intersectLine(p1, p2, q1, q2) {
  // Algorithm from J. Avro, (ed.) Graphics Gems, No 2, Morgan Kaufmann, 1994,
  // p7 and p473.

  var a1, a2, b1, b2, c1, c2;
  var r1, r2, r3, r4;
  var denom, offset, num;
  var x, y;

  // Compute a1, b1, c1, where line joining points 1 and 2 is F(x,y) = a1 x +
  // b1 y + c1 = 0.
  a1 = p2.y - p1.y;
  b1 = p1.x - p2.x;
  c1 = p2.x * p1.y - p1.x * p2.y;

  // Compute r3 and r4.
  r3 = a1 * q1.x + b1 * q1.y + c1;
  r4 = a1 * q2.x + b1 * q2.y + c1;

  // Check signs of r3 and r4. If both point 3 and point 4 lie on
  // same side of line 1, the line segments do not intersect.
  if (r3 !== 0 && r4 !== 0 && sameSign(r3, r4)) {
    return /*DONT_INTERSECT*/;
  }

  // Compute a2, b2, c2 where line joining points 3 and 4 is G(x,y) = a2 x + b2 y + c2 = 0
  a2 = q2.y - q1.y;
  b2 = q1.x - q2.x;
  c2 = q2.x * q1.y - q1.x * q2.y;

  // Compute r1 and r2
  r1 = a2 * p1.x + b2 * p1.y + c2;
  r2 = a2 * p2.x + b2 * p2.y + c2;

  // Check signs of r1 and r2. If both point 1 and point 2 lie
  // on same side of second line segment, the line segments do
  // not intersect.
  if (r1 !== 0 && r2 !== 0 && sameSign(r1, r2)) {
    return /*DONT_INTERSECT*/;
  }

  // Line segments intersect: compute intersection point.
  denom = a1 * b2 - a2 * b1;
  if (denom === 0) {
    return /*COLLINEAR*/;
  }

  offset = Math.abs(denom / 2);

  // The denom/2 is to get rounding instead of truncating. It
  // is added or subtracted to the numerator, depending upon the
  // sign of the numerator.
  num = b1 * c2 - b2 * c1;
  x = num < 0 ? (num - offset) / denom : (num + offset) / denom;

  num = a2 * c1 - a1 * c2;
  y = num < 0 ? (num - offset) / denom : (num + offset) / denom;

  return { x: x, y: y };
}

function sameSign(r1, r2) {
  return r1 * r2 > 0;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre-js/intersect/intersect-polygon.js




/*
 * Returns the point ({x, y}) at which the point argument intersects with the
 * node argument assuming that it has the shape specified by polygon.
 */
function intersectPolygon(node, polyPoints, point) {
  var x1 = node.x;
  var y1 = node.y;

  var intersections = [];

  var minX = Number.POSITIVE_INFINITY;
  var minY = Number.POSITIVE_INFINITY;
  polyPoints.forEach(function (entry) {
    minX = Math.min(minX, entry.x);
    minY = Math.min(minY, entry.y);
  });

  var left = x1 - node.width / 2 - minX;
  var top = y1 - node.height / 2 - minY;

  for (var i = 0; i < polyPoints.length; i++) {
    var p1 = polyPoints[i];
    var p2 = polyPoints[i < polyPoints.length - 1 ? i + 1 : 0];
    var intersect = intersectLine(
      node,
      point,
      { x: left + p1.x, y: top + p1.y },
      { x: left + p2.x, y: top + p2.y }
    );
    if (intersect) {
      intersections.push(intersect);
    }
  }

  if (!intersections.length) {
    console.log('NO INTERSECTION FOUND, RETURN NODE CENTER', node);
    return node;
  }

  if (intersections.length > 1) {
    // More intersections, find the one nearest to edge end point
    intersections.sort(function (p, q) {
      var pdx = p.x - point.x;
      var pdy = p.y - point.y;
      var distp = Math.sqrt(pdx * pdx + pdy * pdy);

      var qdx = q.x - point.x;
      var qdy = q.y - point.y;
      var distq = Math.sqrt(qdx * qdx + qdy * qdy);

      return distp < distq ? -1 : distp === distq ? 0 : 1;
    });
  }
  return intersections[0];
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre-js/intersect/intersect-rect.js


function intersectRect(node, point) {
  var x = node.x;
  var y = node.y;

  // Rectangle intersection algorithm from:
  // http://math.stackexchange.com/questions/108113/find-edge-between-two-boxes
  var dx = point.x - x;
  var dy = point.y - y;
  var w = node.width / 2;
  var h = node.height / 2;

  var sx, sy;
  if (Math.abs(dy) * w > Math.abs(dx) * h) {
    // Intersection is top or bottom of rect.
    if (dy < 0) {
      h = -h;
    }
    sx = dy === 0 ? 0 : (h * dx) / dy;
    sy = h;
  } else {
    // Intersection is left or right of rect.
    if (dx < 0) {
      w = -w;
    }
    sx = w;
    sy = dx === 0 ? 0 : (w * dy) / dx;
  }

  return { x: x + sx, y: y + sy };
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre-js/shapes.js







var shapes = {
  rect,
  ellipse,
  circle,
  diamond,
};

function setShapes(value) {
  shapes = value;
}

function rect(parent, bbox, node) {
  var shapeSvg = parent
    .insert('rect', ':first-child')
    .attr('rx', node.rx)
    .attr('ry', node.ry)
    .attr('x', -bbox.width / 2)
    .attr('y', -bbox.height / 2)
    .attr('width', bbox.width)
    .attr('height', bbox.height);

  node.intersect = function (point) {
    return intersectRect(node, point);
  };

  return shapeSvg;
}

function ellipse(parent, bbox, node) {
  var rx = bbox.width / 2;
  var ry = bbox.height / 2;
  var shapeSvg = parent
    .insert('ellipse', ':first-child')
    .attr('x', -bbox.width / 2)
    .attr('y', -bbox.height / 2)
    .attr('rx', rx)
    .attr('ry', ry);

  node.intersect = function (point) {
    return intersectEllipse(node, rx, ry, point);
  };

  return shapeSvg;
}

function circle(parent, bbox, node) {
  var r = Math.max(bbox.width, bbox.height) / 2;
  var shapeSvg = parent
    .insert('circle', ':first-child')
    .attr('x', -bbox.width / 2)
    .attr('y', -bbox.height / 2)
    .attr('r', r);

  node.intersect = function (point) {
    return intersectCircle(node, r, point);
  };

  return shapeSvg;
}

// Circumscribe an ellipse for the bounding box with a diamond shape. I derived
// the function to calculate the diamond shape from:
// http://mathforum.org/kb/message.jspa?messageID=3750236
function diamond(parent, bbox, node) {
  var w = (bbox.width * Math.SQRT2) / 2;
  var h = (bbox.height * Math.SQRT2) / 2;
  var points = [
    { x: 0, y: -h },
    { x: -w, y: 0 },
    { x: 0, y: h },
    { x: w, y: 0 },
  ];
  var shapeSvg = parent.insert('polygon', ':first-child').attr(
    'points',
    points
      .map(function (p) {
        return p.x + ',' + p.y;
      })
      .join(' ')
  );

  node.intersect = function (p) {
    return intersectPolygon(node, points, p);
  };

  return shapeSvg;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/dagre-js/render.js















// This design is based on http://bost.ocks.org/mike/chart/.
function render() {
  var fn = function (svg, g) {
    preProcessGraph(g);

    var outputGroup = createOrSelectGroup(svg, 'output');
    var clustersGroup = createOrSelectGroup(outputGroup, 'clusters');
    var edgePathsGroup = createOrSelectGroup(outputGroup, 'edgePaths');
    var edgeLabels = createEdgeLabels(createOrSelectGroup(outputGroup, 'edgeLabels'), g);
    var nodes = createNodes(createOrSelectGroup(outputGroup, 'nodes'), g, shapes);

    (0,dagre/* layout */.bK)(g);

    positionNodes(nodes, g);
    positionEdgeLabels(edgeLabels, g);
    createEdgePaths(edgePathsGroup, g, arrows);

    var clusters = createClusters(clustersGroup, g);
    positionClusters(clusters, g);

    postProcessGraph(g);
  };

  fn.createNodes = function (value) {
    if (!arguments.length) return createNodes;
    setCreateNodes(value);
    return fn;
  };

  fn.createClusters = function (value) {
    if (!arguments.length) return createClusters;
    setCreateClusters(value);
    return fn;
  };

  fn.createEdgeLabels = function (value) {
    if (!arguments.length) return createEdgeLabels;
    setCreateEdgeLabels(value);
    return fn;
  };

  fn.createEdgePaths = function (value) {
    if (!arguments.length) return createEdgePaths;
    setCreateEdgePaths(value);
    return fn;
  };

  fn.shapes = function (value) {
    if (!arguments.length) return shapes;
    setShapes(value);
    return fn;
  };

  fn.arrows = function (value) {
    if (!arguments.length) return arrows;
    setArrows(value);
    return fn;
  };

  return fn;
}

var NODE_DEFAULT_ATTRS = {
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 10,
  paddingBottom: 10,
  rx: 0,
  ry: 0,
  shape: 'rect',
};

var EDGE_DEFAULT_ATTRS = {
  arrowhead: 'normal',
  curve: src/* curveLinear */.c_6,
};

function preProcessGraph(g) {
  g.nodes().forEach(function (v) {
    var node = g.node(v);
    if (!has/* default */.Z(node, 'label') && !g.children(v).length) {
      node.label = v;
    }

    if (has/* default */.Z(node, 'paddingX')) {
      defaults/* default */.Z(node, {
        paddingLeft: node.paddingX,
        paddingRight: node.paddingX,
      });
    }

    if (has/* default */.Z(node, 'paddingY')) {
      defaults/* default */.Z(node, {
        paddingTop: node.paddingY,
        paddingBottom: node.paddingY,
      });
    }

    if (has/* default */.Z(node, 'padding')) {
      defaults/* default */.Z(node, {
        paddingLeft: node.padding,
        paddingRight: node.padding,
        paddingTop: node.padding,
        paddingBottom: node.padding,
      });
    }

    defaults/* default */.Z(node, NODE_DEFAULT_ATTRS);

    forEach/* default */.Z(['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom'], function (k) {
      node[k] = Number(node[k]);
    });

    // Save dimensions for restore during post-processing
    if (has/* default */.Z(node, 'width')) {
      node._prevWidth = node.width;
    }
    if (has/* default */.Z(node, 'height')) {
      node._prevHeight = node.height;
    }
  });

  g.edges().forEach(function (e) {
    var edge = g.edge(e);
    if (!has/* default */.Z(edge, 'label')) {
      edge.label = '';
    }
    defaults/* default */.Z(edge, EDGE_DEFAULT_ATTRS);
  });
}

function postProcessGraph(g) {
  forEach/* default */.Z(g.nodes(), function (v) {
    var node = g.node(v);

    // Restore original dimensions
    if (has/* default */.Z(node, '_prevWidth')) {
      node.width = node._prevWidth;
    } else {
      delete node.width;
    }

    if (has/* default */.Z(node, '_prevHeight')) {
      node.height = node._prevHeight;
    } else {
      delete node.height;
    }

    delete node._prevWidth;
    delete node._prevHeight;
  });
}

function createOrSelectGroup(root, name) {
  var selection = root.select('g.' + name);
  if (selection.empty()) {
    selection = root.append('g').attr('class', name);
  }
  return selection;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/index.js







// EXTERNAL MODULE: ./node_modules/.pnpm/mermaid@10.0.2/node_modules/mermaid/dist/utils-d5eeff82.js
var utils_d5eeff82 = __webpack_require__(2332);
// EXTERNAL MODULE: ./node_modules/.pnpm/mermaid@10.0.2/node_modules/mermaid/dist/setupGraphViewbox-e35e4124.js
var setupGraphViewbox_e35e4124 = __webpack_require__(34694);
// EXTERNAL MODULE: ./node_modules/.pnpm/mermaid@10.0.2/node_modules/mermaid/dist/styles-4fe3d1fc.js
var styles_4fe3d1fc = __webpack_require__(56805);
// EXTERNAL MODULE: ./node_modules/.pnpm/dompurify@2.4.3/node_modules/dompurify/dist/purify.es.js
var purify_es = __webpack_require__(54972);
// EXTERNAL MODULE: ./node_modules/.pnpm/dayjs@1.11.7/node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(74637);
// EXTERNAL MODULE: ./node_modules/.pnpm/@braintree+sanitize-url@6.0.2/node_modules/@braintree/sanitize-url/dist/index.js
var dist = __webpack_require__(85804);
// EXTERNAL MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.9/node_modules/dagre-d3-es/src/graphlib/json.js
var json = __webpack_require__(66468);
;// CONCATENATED MODULE: ./node_modules/.pnpm/mermaid@10.0.2/node_modules/mermaid/dist/flowDiagram-42bb1e4d.js



























function question(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const s = (w + h) * 0.9;
  const points = [
    { x: s / 2, y: 0 },
    { x: s, y: -s / 2 },
    { x: s / 2, y: -s },
    { x: 0, y: -s / 2 }
  ];
  const shapeSvg = insertPolygonShape(parent, s, s, points);
  node.intersect = function(point) {
    return intersectPolygon(node, points, point);
  };
  return shapeSvg;
}
function hexagon(parent, bbox, node) {
  const f = 4;
  const h = bbox.height;
  const m = h / f;
  const w = bbox.width + 2 * m;
  const points = [
    { x: m, y: 0 },
    { x: w - m, y: 0 },
    { x: w, y: -h / 2 },
    { x: w - m, y: -h },
    { x: m, y: -h },
    { x: 0, y: -h / 2 }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return intersectPolygon(node, points, point);
  };
  return shapeSvg;
}
function rect_left_inv_arrow(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const points = [
    { x: -h / 2, y: 0 },
    { x: w, y: 0 },
    { x: w, y: -h },
    { x: -h / 2, y: -h },
    { x: 0, y: -h / 2 }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return intersectPolygon(node, points, point);
  };
  return shapeSvg;
}
function lean_right(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const points = [
    { x: -2 * h / 6, y: 0 },
    { x: w - h / 6, y: 0 },
    { x: w + 2 * h / 6, y: -h },
    { x: h / 6, y: -h }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return intersectPolygon(node, points, point);
  };
  return shapeSvg;
}
function lean_left(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const points = [
    { x: 2 * h / 6, y: 0 },
    { x: w + h / 6, y: 0 },
    { x: w - 2 * h / 6, y: -h },
    { x: -h / 6, y: -h }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return intersectPolygon(node, points, point);
  };
  return shapeSvg;
}
function trapezoid(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const points = [
    { x: -2 * h / 6, y: 0 },
    { x: w + 2 * h / 6, y: 0 },
    { x: w - h / 6, y: -h },
    { x: h / 6, y: -h }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return intersectPolygon(node, points, point);
  };
  return shapeSvg;
}
function inv_trapezoid(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const points = [
    { x: h / 6, y: 0 },
    { x: w - h / 6, y: 0 },
    { x: w + 2 * h / 6, y: -h },
    { x: -2 * h / 6, y: -h }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return intersectPolygon(node, points, point);
  };
  return shapeSvg;
}
function rect_right_inv_arrow(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const points = [
    { x: 0, y: 0 },
    { x: w + h / 2, y: 0 },
    { x: w, y: -h / 2 },
    { x: w + h / 2, y: -h },
    { x: 0, y: -h }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return intersectPolygon(node, points, point);
  };
  return shapeSvg;
}
function stadium(parent, bbox, node) {
  const h = bbox.height;
  const w = bbox.width + h / 4;
  const shapeSvg = parent.insert("rect", ":first-child").attr("rx", h / 2).attr("ry", h / 2).attr("x", -w / 2).attr("y", -h / 2).attr("width", w).attr("height", h);
  node.intersect = function(point) {
    return intersectRect(node, point);
  };
  return shapeSvg;
}
function subroutine(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const points = [
    { x: 0, y: 0 },
    { x: w, y: 0 },
    { x: w, y: -h },
    { x: 0, y: -h },
    { x: 0, y: 0 },
    { x: -8, y: 0 },
    { x: w + 8, y: 0 },
    { x: w + 8, y: -h },
    { x: -8, y: -h },
    { x: -8, y: 0 }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return intersectPolygon(node, points, point);
  };
  return shapeSvg;
}
function cylinder(parent, bbox, node) {
  const w = bbox.width;
  const rx = w / 2;
  const ry = rx / (2.5 + w / 50);
  const h = bbox.height + ry;
  const shape = "M 0," + ry + " a " + rx + "," + ry + " 0,0,0 " + w + " 0 a " + rx + "," + ry + " 0,0,0 " + -w + " 0 l 0," + h + " a " + rx + "," + ry + " 0,0,0 " + w + " 0 l 0," + -h;
  const shapeSvg = parent.attr("label-offset-y", ry).insert("path", ":first-child").attr("d", shape).attr("transform", "translate(" + -w / 2 + "," + -(h / 2 + ry) + ")");
  node.intersect = function(point) {
    const pos = intersectRect(node, point);
    const x = pos.x - node.x;
    if (rx != 0 && (Math.abs(x) < node.width / 2 || Math.abs(x) == node.width / 2 && Math.abs(pos.y - node.y) > node.height / 2 - ry)) {
      let y = ry * ry * (1 - x * x / (rx * rx));
      if (y != 0) {
        y = Math.sqrt(y);
      }
      y = ry - y;
      if (point.y - node.y > 0) {
        y = -y;
      }
      pos.y += y;
    }
    return pos;
  };
  return shapeSvg;
}
function addToRender(render2) {
  render2.shapes().question = question;
  render2.shapes().hexagon = hexagon;
  render2.shapes().stadium = stadium;
  render2.shapes().subroutine = subroutine;
  render2.shapes().cylinder = cylinder;
  render2.shapes().rect_left_inv_arrow = rect_left_inv_arrow;
  render2.shapes().lean_right = lean_right;
  render2.shapes().lean_left = lean_left;
  render2.shapes().trapezoid = trapezoid;
  render2.shapes().inv_trapezoid = inv_trapezoid;
  render2.shapes().rect_right_inv_arrow = rect_right_inv_arrow;
}
function addToRenderV2(addShape) {
  addShape({ question });
  addShape({ hexagon });
  addShape({ stadium });
  addShape({ subroutine });
  addShape({ cylinder });
  addShape({ rect_left_inv_arrow });
  addShape({ lean_right });
  addShape({ lean_left });
  addShape({ trapezoid });
  addShape({ inv_trapezoid });
  addShape({ rect_right_inv_arrow });
}
function insertPolygonShape(parent, w, h, points) {
  return parent.insert("polygon", ":first-child").attr(
    "points",
    points.map(function(d) {
      return d.x + "," + d.y;
    }).join(" ")
  ).attr("transform", "translate(" + -w / 2 + "," + h / 2 + ")");
}
const flowChartShapes = {
  addToRender,
  addToRenderV2
};
const conf = {};
const setConf = function(cnf) {
  const keys = Object.keys(cnf);
  for (const key of keys) {
    conf[key] = cnf[key];
  }
};
const addVertices = function(vert, g, svgId, root, _doc, diagObj) {
  const svg = !root ? (0,src/* select */.Ys)(`[id="${svgId}"]`) : root.select(`[id="${svgId}"]`);
  const doc = !_doc ? document : _doc;
  const keys = Object.keys(vert);
  keys.forEach(function(id) {
    const vertex = vert[id];
    let classStr = "default";
    if (vertex.classes.length > 0) {
      classStr = vertex.classes.join(" ");
    }
    const styles = (0,utils_d5eeff82.m)(vertex.styles);
    let vertexText = vertex.text !== void 0 ? vertex.text : vertex.id;
    let vertexNode;
    if ((0,config_389b86ff.j)((0,config_389b86ff.g)().flowchart.htmlLabels)) {
      const node = {
        label: vertexText.replace(
          /fa[blrs]?:fa-[\w-]+/g,
          (s) => `<i class='${s.replace(":", " ")}'></i>`
        )
      };
      vertexNode = (0,add_html_label/* addHtmlLabel */.a)(svg, node).node();
      vertexNode.parentNode.removeChild(vertexNode);
    } else {
      const svgLabel = doc.createElementNS("http://www.w3.org/2000/svg", "text");
      svgLabel.setAttribute("style", styles.labelStyle.replace("color:", "fill:"));
      const rows = vertexText.split(config_389b86ff.d.lineBreakRegex);
      for (const row of rows) {
        const tspan = doc.createElementNS("http://www.w3.org/2000/svg", "tspan");
        tspan.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
        tspan.setAttribute("dy", "1em");
        tspan.setAttribute("x", "1");
        tspan.textContent = row;
        svgLabel.appendChild(tspan);
      }
      vertexNode = svgLabel;
    }
    let radious = 0;
    let _shape = "";
    switch (vertex.type) {
      case "round":
        radious = 5;
        _shape = "rect";
        break;
      case "square":
        _shape = "rect";
        break;
      case "diamond":
        _shape = "question";
        break;
      case "hexagon":
        _shape = "hexagon";
        break;
      case "odd":
        _shape = "rect_left_inv_arrow";
        break;
      case "lean_right":
        _shape = "lean_right";
        break;
      case "lean_left":
        _shape = "lean_left";
        break;
      case "trapezoid":
        _shape = "trapezoid";
        break;
      case "inv_trapezoid":
        _shape = "inv_trapezoid";
        break;
      case "odd_right":
        _shape = "rect_left_inv_arrow";
        break;
      case "circle":
        _shape = "circle";
        break;
      case "ellipse":
        _shape = "ellipse";
        break;
      case "stadium":
        _shape = "stadium";
        break;
      case "subroutine":
        _shape = "subroutine";
        break;
      case "cylinder":
        _shape = "cylinder";
        break;
      case "group":
        _shape = "rect";
        break;
      default:
        _shape = "rect";
    }
    config_389b86ff.l.warn("Adding node", vertex.id, vertex.domId);
    g.setNode(diagObj.db.lookUpDomId(vertex.id), {
      labelType: "svg",
      labelStyle: styles.labelStyle,
      shape: _shape,
      label: vertexNode,
      rx: radious,
      ry: radious,
      class: classStr,
      style: styles.style,
      id: diagObj.db.lookUpDomId(vertex.id)
    });
  });
};
const addEdges = function(edges, g, diagObj) {
  let cnt = 0;
  let defaultStyle;
  let defaultLabelStyle;
  if (edges.defaultStyle !== void 0) {
    const defaultStyles = (0,utils_d5eeff82.m)(edges.defaultStyle);
    defaultStyle = defaultStyles.style;
    defaultLabelStyle = defaultStyles.labelStyle;
  }
  edges.forEach(function(edge) {
    cnt++;
    var linkId = "L-" + edge.start + "-" + edge.end;
    var linkNameStart = "LS-" + edge.start;
    var linkNameEnd = "LE-" + edge.end;
    const edgeData = {};
    if (edge.type === "arrow_open") {
      edgeData.arrowhead = "none";
    } else {
      edgeData.arrowhead = "normal";
    }
    let style = "";
    let labelStyle = "";
    if (edge.style !== void 0) {
      const styles = (0,utils_d5eeff82.m)(edge.style);
      style = styles.style;
      labelStyle = styles.labelStyle;
    } else {
      switch (edge.stroke) {
        case "normal":
          style = "fill:none";
          if (defaultStyle !== void 0) {
            style = defaultStyle;
          }
          if (defaultLabelStyle !== void 0) {
            labelStyle = defaultLabelStyle;
          }
          break;
        case "dotted":
          style = "fill:none;stroke-width:2px;stroke-dasharray:3;";
          break;
        case "thick":
          style = " stroke-width: 3.5px;fill:none";
          break;
      }
    }
    edgeData.style = style;
    edgeData.labelStyle = labelStyle;
    if (edge.interpolate !== void 0) {
      edgeData.curve = (0,utils_d5eeff82.n)(edge.interpolate, src/* curveLinear */.c_6);
    } else if (edges.defaultInterpolate !== void 0) {
      edgeData.curve = (0,utils_d5eeff82.n)(edges.defaultInterpolate, src/* curveLinear */.c_6);
    } else {
      edgeData.curve = (0,utils_d5eeff82.n)(conf.curve, src/* curveLinear */.c_6);
    }
    if (edge.text === void 0) {
      if (edge.style !== void 0) {
        edgeData.arrowheadStyle = "fill: #333";
      }
    } else {
      edgeData.arrowheadStyle = "fill: #333";
      edgeData.labelpos = "c";
      if ((0,config_389b86ff.j)((0,config_389b86ff.g)().flowchart.htmlLabels)) {
        edgeData.labelType = "html";
        edgeData.label = `<span id="L-${linkId}" class="edgeLabel L-${linkNameStart}' L-${linkNameEnd}" style="${edgeData.labelStyle}">${edge.text.replace(
          /fa[blrs]?:fa-[\w-]+/g,
          (s) => `<i class='${s.replace(":", " ")}'></i>`
        )}</span>`;
      } else {
        edgeData.labelType = "text";
        edgeData.label = edge.text.replace(config_389b86ff.d.lineBreakRegex, "\n");
        if (edge.style === void 0) {
          edgeData.style = edgeData.style || "stroke: #333; stroke-width: 1.5px;fill:none";
        }
        edgeData.labelStyle = edgeData.labelStyle.replace("color:", "fill:");
      }
    }
    edgeData.id = linkId;
    edgeData.class = linkNameStart + " " + linkNameEnd;
    edgeData.minlen = edge.length || 1;
    g.setEdge(diagObj.db.lookUpDomId(edge.start), diagObj.db.lookUpDomId(edge.end), edgeData, cnt);
  });
};
const getClasses = function(text, diagObj) {
  config_389b86ff.l.info("Extracting classes");
  diagObj.db.clear();
  try {
    diagObj.parse(text);
    return diagObj.db.getClasses();
  } catch (e) {
    config_389b86ff.l.error(e);
    return {};
  }
};
const draw = function(text, id, _version, diagObj) {
  config_389b86ff.l.info("Drawing flowchart");
  diagObj.db.clear();
  const { securityLevel, flowchart: conf2 } = (0,config_389b86ff.g)();
  let sandboxElement;
  if (securityLevel === "sandbox") {
    sandboxElement = (0,src/* select */.Ys)("#i" + id);
  }
  const root = securityLevel === "sandbox" ? (0,src/* select */.Ys)(sandboxElement.nodes()[0].contentDocument.body) : (0,src/* select */.Ys)("body");
  const doc = securityLevel === "sandbox" ? sandboxElement.nodes()[0].contentDocument : document;
  try {
    diagObj.parser.parse(text);
  } catch (err) {
    config_389b86ff.l.debug("Parsing failed");
  }
  let dir = diagObj.db.getDirection();
  if (dir === void 0) {
    dir = "TD";
  }
  const nodeSpacing = conf2.nodeSpacing || 50;
  const rankSpacing = conf2.rankSpacing || 50;
  const g = new graphlib/* Graph */.k({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: dir,
    nodesep: nodeSpacing,
    ranksep: rankSpacing,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  let subG;
  const subGraphs = diagObj.db.getSubGraphs();
  for (let i2 = subGraphs.length - 1; i2 >= 0; i2--) {
    subG = subGraphs[i2];
    diagObj.db.addVertex(subG.id, subG.title, "group", void 0, subG.classes);
  }
  const vert = diagObj.db.getVertices();
  config_389b86ff.l.warn("Get vertices", vert);
  const edges = diagObj.db.getEdges();
  let i = 0;
  for (i = subGraphs.length - 1; i >= 0; i--) {
    subG = subGraphs[i];
    (0,src/* selectAll */.td_)("cluster").append("text");
    for (let j = 0; j < subG.nodes.length; j++) {
      config_389b86ff.l.warn(
        "Setting subgraph",
        subG.nodes[j],
        diagObj.db.lookUpDomId(subG.nodes[j]),
        diagObj.db.lookUpDomId(subG.id)
      );
      g.setParent(diagObj.db.lookUpDomId(subG.nodes[j]), diagObj.db.lookUpDomId(subG.id));
    }
  }
  addVertices(vert, g, id, root, doc, diagObj);
  addEdges(edges, g, diagObj);
  const render$1 = new render();
  flowChartShapes.addToRender(render$1);
  render$1.arrows().none = function normal(parent, id2, edge, type) {
    const marker = parent.append("marker").attr("id", id2).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto");
    const path = marker.append("path").attr("d", "M 0 0 L 0 0 L 0 0 z");
    (0,util/* applyStyle */.bg)(path, edge[type + "Style"]);
  };
  render$1.arrows().normal = function normal(parent, id2) {
    const marker = parent.append("marker").attr("id", id2).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto");
    marker.append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowheadPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  };
  const svg = root.select(`[id="${id}"]`);
  const element = root.select("#" + id + " g");
  render$1(element, g);
  element.selectAll("g.node").attr("title", function() {
    return diagObj.db.getTooltip(this.id);
  });
  diagObj.db.indexNodes("subGraph" + i);
  for (i = 0; i < subGraphs.length; i++) {
    subG = subGraphs[i];
    if (subG.title !== "undefined") {
      const clusterRects = doc.querySelectorAll(
        "#" + id + ' [id="' + diagObj.db.lookUpDomId(subG.id) + '"] rect'
      );
      const clusterEl = doc.querySelectorAll(
        "#" + id + ' [id="' + diagObj.db.lookUpDomId(subG.id) + '"]'
      );
      const xPos = clusterRects[0].x.baseVal.value;
      const yPos = clusterRects[0].y.baseVal.value;
      const _width = clusterRects[0].width.baseVal.value;
      const cluster = (0,src/* select */.Ys)(clusterEl[0]);
      const te = cluster.select(".label");
      te.attr("transform", `translate(${xPos + _width / 2}, ${yPos + 14})`);
      te.attr("id", id + "Text");
      for (let j = 0; j < subG.classes.length; j++) {
        clusterEl[0].classList.add(subG.classes[j]);
      }
    }
  }
  if (!conf2.htmlLabels) {
    const labels = doc.querySelectorAll('[id="' + id + '"] .edgeLabel .label');
    for (const label of labels) {
      const dim = label.getBBox();
      const rect = doc.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("rx", 0);
      rect.setAttribute("ry", 0);
      rect.setAttribute("width", dim.width);
      rect.setAttribute("height", dim.height);
      label.insertBefore(rect, label.firstChild);
    }
  }
  (0,setupGraphViewbox_e35e4124.s)(g, svg, conf2.diagramPadding, conf2.useMaxWidth);
  const keys = Object.keys(vert);
  keys.forEach(function(key) {
    const vertex = vert[key];
    if (vertex.link) {
      const node = root.select("#" + id + ' [id="' + diagObj.db.lookUpDomId(key) + '"]');
      if (node) {
        const link = doc.createElementNS("http://www.w3.org/2000/svg", "a");
        link.setAttributeNS("http://www.w3.org/2000/svg", "class", vertex.classes.join(" "));
        link.setAttributeNS("http://www.w3.org/2000/svg", "href", vertex.link);
        link.setAttributeNS("http://www.w3.org/2000/svg", "rel", "noopener");
        if (securityLevel === "sandbox") {
          link.setAttributeNS("http://www.w3.org/2000/svg", "target", "_top");
        } else if (vertex.linkTarget) {
          link.setAttributeNS("http://www.w3.org/2000/svg", "target", vertex.linkTarget);
        }
        const linkNode = node.insert(function() {
          return link;
        }, ":first-child");
        const shape = node.select(".label-container");
        if (shape) {
          linkNode.append(function() {
            return shape.node();
          });
        }
        const label = node.select(".label");
        if (label) {
          linkNode.append(function() {
            return label.node();
          });
        }
      }
    }
  });
};
const flowRenderer = {
  setConf,
  addVertices,
  addEdges,
  getClasses,
  draw
};
const diagram = {
  parser: flowDb_88762a1f.p,
  db: flowDb_88762a1f.f,
  renderer: styles_4fe3d1fc.f,
  styles: styles_4fe3d1fc.a,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    flowRenderer.setConf(cnf.flowchart);
    flowDb_88762a1f.f.clear();
    flowDb_88762a1f.f.setGen("gen-1");
  }
};

//# sourceMappingURL=flowDiagram-42bb1e4d.js.map


/***/ }),

/***/ 88337:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var dagre_d3_es_src_dagre_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21640);
/* harmony import */ var dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66468);
/* harmony import */ var _edges_65da65dc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59626);
/* harmony import */ var _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90403);
/* harmony import */ var dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76003);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63321);






let clusterDb = {};
let descendants = {};
let parents = {};
const clear$1 = () => {
  descendants = {};
  parents = {};
  clusterDb = {};
};
const isDescendant = (id, ancenstorId) => {
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("In isDecendant", ancenstorId, " ", id, " = ", descendants[ancenstorId].includes(id));
  if (descendants[ancenstorId].includes(id)) {
    return true;
  }
  return false;
};
const edgeInCluster = (edge, clusterId) => {
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Decendants of ", clusterId, " is ", descendants[clusterId]);
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Edge is ", edge);
  if (edge.v === clusterId) {
    return false;
  }
  if (edge.w === clusterId) {
    return false;
  }
  if (!descendants[clusterId]) {
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Tilt, ", clusterId, ",not in decendants");
    return false;
  }
  return descendants[clusterId].includes(edge.v) || isDescendant(edge.v, clusterId) || isDescendant(edge.w, clusterId) || descendants[clusterId].includes(edge.w);
};
const copy = (clusterId, graph, newGraph, rootId) => {
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.warn(
    "Copying children of ",
    clusterId,
    "root",
    rootId,
    "data",
    graph.node(clusterId),
    rootId
  );
  const nodes = graph.children(clusterId) || [];
  if (clusterId !== rootId) {
    nodes.push(clusterId);
  }
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Copying (nodes) clusterId", clusterId, "nodes", nodes);
  nodes.forEach((node) => {
    if (graph.children(node).length > 0) {
      copy(node, graph, newGraph, rootId);
    } else {
      const data = graph.node(node);
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info("cp ", node, " to ", rootId, " with parent ", clusterId);
      newGraph.setNode(node, data);
      if (rootId !== graph.parent(node)) {
        _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Setting parent", node, graph.parent(node));
        newGraph.setParent(node, graph.parent(node));
      }
      if (clusterId !== rootId && node !== clusterId) {
        _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Setting parent", node, clusterId);
        newGraph.setParent(node, clusterId);
      } else {
        _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info("In copy ", clusterId, "root", rootId, "data", graph.node(clusterId), rootId);
        _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.debug(
          "Not Setting parent for node=",
          node,
          "cluster!==rootId",
          clusterId !== rootId,
          "node!==clusterId",
          node !== clusterId
        );
      }
      const edges = graph.edges(node);
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Copying Edges", edges);
      edges.forEach((edge) => {
        _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Edge", edge);
        const data2 = graph.edge(edge.v, edge.w, edge.name);
        _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Edge data", data2, rootId);
        try {
          if (edgeInCluster(edge, rootId)) {
            _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Copying as ", edge.v, edge.w, data2, edge.name);
            newGraph.setEdge(edge.v, edge.w, data2, edge.name);
            _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info("newGraph edges ", newGraph.edges(), newGraph.edge(newGraph.edges()[0]));
          } else {
            _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info(
              "Skipping copy of edge ",
              edge.v,
              "-->",
              edge.w,
              " rootId: ",
              rootId,
              " clusterId:",
              clusterId
            );
          }
        } catch (e) {
          _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.error(e);
        }
      });
    }
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Removing node", node);
    graph.removeNode(node);
  });
};
const extractDescendants = (id, graph) => {
  const children = graph.children(id);
  let res = [...children];
  for (const child of children) {
    parents[child] = id;
    res = [...res, ...extractDescendants(child, graph)];
  }
  return res;
};
const findNonClusterChild = (id, graph) => {
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("Searching", id);
  const children = graph.children(id);
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("Searching children of id ", id, children);
  if (children.length < 1) {
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("This is a valid node", id);
    return id;
  }
  for (const child of children) {
    const _id = findNonClusterChild(child, graph);
    if (_id) {
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("Found replacement for", id, " => ", _id);
      return _id;
    }
  }
};
const getAnchorId = (id) => {
  if (!clusterDb[id]) {
    return id;
  }
  if (!clusterDb[id].externalConnections) {
    return id;
  }
  if (clusterDb[id]) {
    return clusterDb[id].id;
  }
  return id;
};
const adjustClustersAndEdges = (graph, depth) => {
  if (!graph || depth > 10) {
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Opting out, no graph ");
    return;
  } else {
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Opting in, graph ");
  }
  graph.nodes().forEach(function(id) {
    const children = graph.children(id);
    if (children.length > 0) {
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.warn(
        "Cluster identified",
        id,
        " Replacement id in edges: ",
        findNonClusterChild(id, graph)
      );
      descendants[id] = extractDescendants(id, graph);
      clusterDb[id] = { id: findNonClusterChild(id, graph), clusterData: graph.node(id) };
    }
  });
  graph.nodes().forEach(function(id) {
    const children = graph.children(id);
    const edges = graph.edges();
    if (children.length > 0) {
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Cluster identified", id, descendants);
      edges.forEach((edge) => {
        if (edge.v !== id && edge.w !== id) {
          const d1 = isDescendant(edge.v, id);
          const d2 = isDescendant(edge.w, id);
          if (d1 ^ d2) {
            _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Edge: ", edge, " leaves cluster ", id);
            _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Decendants of XXX ", id, ": ", descendants[id]);
            clusterDb[id].externalConnections = true;
          }
        }
      });
    } else {
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Not a cluster ", id, descendants);
    }
  });
  graph.edges().forEach(function(e) {
    const edge = graph.edge(e);
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e));
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(graph.edge(e)));
    let v = e.v;
    let w = e.w;
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.warn(
      "Fix XXX",
      clusterDb,
      "ids:",
      e.v,
      e.w,
      "Translating: ",
      clusterDb[e.v],
      " --- ",
      clusterDb[e.w]
    );
    if (clusterDb[e.v] && clusterDb[e.w] && clusterDb[e.v] === clusterDb[e.w]) {
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Fixing and trixing link to self - removing XXX", e.v, e.w, e.name);
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Fixing and trixing - removing XXX", e.v, e.w, e.name);
      v = getAnchorId(e.v);
      w = getAnchorId(e.w);
      graph.removeEdge(e.v, e.w, e.name);
      const specialId = e.w + "---" + e.v;
      graph.setNode(specialId, {
        domId: specialId,
        id: specialId,
        labelStyle: "",
        labelText: edge.label,
        padding: 0,
        shape: "labelRect",
        style: ""
      });
      const edge1 = JSON.parse(JSON.stringify(edge));
      const edge2 = JSON.parse(JSON.stringify(edge));
      edge1.label = "";
      edge1.arrowTypeEnd = "none";
      edge2.label = "";
      edge1.fromCluster = e.v;
      edge2.toCluster = e.v;
      graph.setEdge(v, specialId, edge1, e.name + "-cyclic-special");
      graph.setEdge(specialId, w, edge2, e.name + "-cyclic-special");
    } else if (clusterDb[e.v] || clusterDb[e.w]) {
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Fixing and trixing - removing XXX", e.v, e.w, e.name);
      v = getAnchorId(e.v);
      w = getAnchorId(e.w);
      graph.removeEdge(e.v, e.w, e.name);
      if (v !== e.v) {
        edge.fromCluster = e.v;
      }
      if (w !== e.w) {
        edge.toCluster = e.w;
      }
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Fix Replacing with XXX", v, w, e.name);
      graph.setEdge(v, w, edge, e.name);
    }
  });
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Adjusted Graph", dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__/* .write */ .c(graph));
  extractor(graph, 0);
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.trace(clusterDb);
};
const extractor = (graph, depth) => {
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("extractor - ", depth, dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__/* .write */ .c(graph), graph.children("D"));
  if (depth > 10) {
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.error("Bailing out");
    return;
  }
  let nodes = graph.nodes();
  let hasChildren = false;
  for (const node of nodes) {
    const children = graph.children(node);
    hasChildren = hasChildren || children.length > 0;
  }
  if (!hasChildren) {
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Done, no node has children", graph.nodes());
    return;
  }
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Nodes = ", nodes, depth);
  for (const node of nodes) {
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.debug(
      "Extracting node",
      node,
      clusterDb,
      clusterDb[node] && !clusterDb[node].externalConnections,
      !graph.parent(node),
      graph.node(node),
      graph.children("D"),
      " Depth ",
      depth
    );
    if (!clusterDb[node]) {
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Not a cluster", node, depth);
    } else if (!clusterDb[node].externalConnections && // !graph.parent(node) &&
    graph.children(node) && graph.children(node).length > 0) {
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.warn(
        "Cluster without external connections, without a parent and with children",
        node,
        depth
      );
      const graphSettings = graph.graph();
      let dir = graphSettings.rankdir === "TB" ? "LR" : "TB";
      if (clusterDb[node] && clusterDb[node].clusterData && clusterDb[node].clusterData.dir) {
        dir = clusterDb[node].clusterData.dir;
        _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Fixing dir", clusterDb[node].clusterData.dir, dir);
      }
      const clusterGraph = new dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_2__/* .Graph */ .k({
        multigraph: true,
        compound: true
      }).setGraph({
        rankdir: dir,
        // Todo: set proper spacing
        nodesep: 50,
        ranksep: 50,
        marginx: 8,
        marginy: 8
      }).setDefaultEdgeLabel(function() {
        return {};
      });
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Old graph before copy", dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__/* .write */ .c(graph));
      copy(node, graph, clusterGraph, node);
      graph.setNode(node, {
        clusterNode: true,
        id: node,
        clusterData: clusterDb[node].clusterData,
        labelText: clusterDb[node].labelText,
        graph: clusterGraph
      });
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("New graph after copy node: (", node, ")", dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__/* .write */ .c(clusterGraph));
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Old graph after copy", dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__/* .write */ .c(graph));
    } else {
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.warn(
        "Cluster ** ",
        node,
        " **not meeting the criteria !externalConnections:",
        !clusterDb[node].externalConnections,
        " no parent: ",
        !graph.parent(node),
        " children ",
        graph.children(node) && graph.children(node).length > 0,
        graph.children("D"),
        depth
      );
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.debug(clusterDb);
    }
  }
  nodes = graph.nodes();
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("New list of nodes", nodes);
  for (const node of nodes) {
    const data = graph.node(node);
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.warn(" Now next level", node, data);
    if (data.clusterNode) {
      extractor(data.graph, depth + 1);
    }
  }
};
const sorter = (graph, nodes) => {
  if (nodes.length === 0) {
    return [];
  }
  let result = Object.assign(nodes);
  nodes.forEach((node) => {
    const children = graph.children(node);
    const sorted = sorter(graph, children);
    result = [...result, ...sorted];
  });
  return result;
};
const sortNodesByHierarchy = (graph) => sorter(graph, graph.children());
const rect = (parent, node) => {
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("Creating subgraph rect for ", node.id, node);
  const shapeSvg = parent.insert("g").attr("class", "cluster" + (node.class ? " " + node.class : "")).attr("id", node.id);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const label = shapeSvg.insert("g").attr("class", "cluster-label");
  const text = label.node().appendChild((0,_edges_65da65dc_js__WEBPACK_IMPORTED_MODULE_5__.c)(node.labelText, node.labelStyle, void 0, true));
  let bbox = text.getBBox();
  if ((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.j)((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.g)().flowchart.htmlLabels)) {
    const div = text.children[0];
    const dv = (0,d3__WEBPACK_IMPORTED_MODULE_3__/* .select */ .Ys)(text);
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  const padding = 0 * node.padding;
  const halfPadding = padding / 2;
  const width = node.width <= bbox.width + padding ? bbox.width + padding : node.width;
  if (node.width <= bbox.width + padding) {
    node.diff = (bbox.width - node.width) / 2 - node.padding / 2;
  } else {
    node.diff = -node.padding / 2;
  }
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("Data ", node, JSON.stringify(node));
  rect2.attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("x", node.x - width / 2).attr("y", node.y - node.height / 2 - halfPadding).attr("width", width).attr("height", node.height + padding);
  label.attr(
    "transform",
    // This puts the labal on top of the box instead of inside it
    // 'translate(' + (node.x - bbox.width / 2) + ', ' + (node.y - node.height / 2 - bbox.height) + ')'
    "translate(" + (node.x - bbox.width / 2) + ", " + (node.y - node.height / 2) + ")"
  );
  const rectBox = rect2.node().getBBox();
  node.width = rectBox.width;
  node.height = rectBox.height;
  node.intersect = function(point) {
    return (0,_edges_65da65dc_js__WEBPACK_IMPORTED_MODULE_5__.i)(node, point);
  };
  return shapeSvg;
};
const noteGroup = (parent, node) => {
  const shapeSvg = parent.insert("g").attr("class", "note-cluster").attr("id", node.id);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const padding = 0 * node.padding;
  const halfPadding = padding / 2;
  rect2.attr("rx", node.rx).attr("ry", node.ry).attr("x", node.x - node.width / 2 - halfPadding).attr("y", node.y - node.height / 2 - halfPadding).attr("width", node.width + padding).attr("height", node.height + padding).attr("fill", "none");
  const rectBox = rect2.node().getBBox();
  node.width = rectBox.width;
  node.height = rectBox.height;
  node.intersect = function(point) {
    return (0,_edges_65da65dc_js__WEBPACK_IMPORTED_MODULE_5__.i)(node, point);
  };
  return shapeSvg;
};
const roundedWithTitle = (parent, node) => {
  const shapeSvg = parent.insert("g").attr("class", node.classes).attr("id", node.id);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const label = shapeSvg.insert("g").attr("class", "cluster-label");
  const innerRect = shapeSvg.append("rect");
  const text = label.node().appendChild((0,_edges_65da65dc_js__WEBPACK_IMPORTED_MODULE_5__.c)(node.labelText, node.labelStyle, void 0, true));
  let bbox = text.getBBox();
  if ((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.j)((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.g)().flowchart.htmlLabels)) {
    const div = text.children[0];
    const dv = (0,d3__WEBPACK_IMPORTED_MODULE_3__/* .select */ .Ys)(text);
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  bbox = text.getBBox();
  const padding = 0 * node.padding;
  const halfPadding = padding / 2;
  const width = node.width <= bbox.width + node.padding ? bbox.width + node.padding : node.width;
  if (node.width <= bbox.width + node.padding) {
    node.diff = (bbox.width + node.padding * 0 - node.width) / 2;
  } else {
    node.diff = -node.padding / 2;
  }
  rect2.attr("class", "outer").attr("x", node.x - width / 2 - halfPadding).attr("y", node.y - node.height / 2 - halfPadding).attr("width", width + padding).attr("height", node.height + padding);
  innerRect.attr("class", "inner").attr("x", node.x - width / 2 - halfPadding).attr("y", node.y - node.height / 2 - halfPadding + bbox.height - 1).attr("width", width + padding).attr("height", node.height + padding - bbox.height - 3);
  label.attr(
    "transform",
    "translate(" + (node.x - bbox.width / 2) + ", " + (node.y - node.height / 2 - node.padding / 3 + ((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.j)((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.g)().flowchart.htmlLabels) ? 5 : 3)) + ")"
  );
  const rectBox = rect2.node().getBBox();
  node.height = rectBox.height;
  node.intersect = function(point) {
    return (0,_edges_65da65dc_js__WEBPACK_IMPORTED_MODULE_5__.i)(node, point);
  };
  return shapeSvg;
};
const divider = (parent, node) => {
  const shapeSvg = parent.insert("g").attr("class", node.classes).attr("id", node.id);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const padding = 0 * node.padding;
  const halfPadding = padding / 2;
  rect2.attr("class", "divider").attr("x", node.x - node.width / 2 - halfPadding).attr("y", node.y - node.height / 2).attr("width", node.width + padding).attr("height", node.height + padding);
  const rectBox = rect2.node().getBBox();
  node.width = rectBox.width;
  node.height = rectBox.height;
  node.diff = -node.padding / 2;
  node.intersect = function(point) {
    return (0,_edges_65da65dc_js__WEBPACK_IMPORTED_MODULE_5__.i)(node, point);
  };
  return shapeSvg;
};
const shapes = { rect, roundedWithTitle, noteGroup, divider };
let clusterElems = {};
const insertCluster = (elem, node) => {
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("Inserting cluster");
  const shape = node.shape || "rect";
  clusterElems[node.id] = shapes[shape](elem, node);
};
const clear = () => {
  clusterElems = {};
};
const recursiveRender = (_elem, graph, diagramtype, parentCluster) => {
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Graph in recursive render: XXX", dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__/* .write */ .c(graph), parentCluster);
  const dir = graph.graph().rankdir;
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("Dir in recursive render - dir:", dir);
  const elem = _elem.insert("g").attr("class", "root");
  if (!graph.nodes()) {
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info("No nodes found for", graph);
  } else {
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Recursive render XXX", graph.nodes());
  }
  if (graph.edges().length > 0) {
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("Recursive edges", graph.edge(graph.edges()[0]));
  }
  const clusters = elem.insert("g").attr("class", "clusters");
  const edgePaths = elem.insert("g").attr("class", "edgePaths");
  const edgeLabels = elem.insert("g").attr("class", "edgeLabels");
  const nodes = elem.insert("g").attr("class", "nodes");
  graph.nodes().forEach(function(v) {
    const node = graph.node(v);
    if (parentCluster !== void 0) {
      const data = JSON.parse(JSON.stringify(parentCluster.clusterData));
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Setting data for cluster XXX (", v, ") ", data, parentCluster);
      graph.setNode(parentCluster.id, data);
      if (!graph.parent(v)) {
        _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("Setting parent", v, parentCluster.id);
        graph.setParent(v, parentCluster.id, data);
      }
    }
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info("(Insert) Node XXX" + v + ": " + JSON.stringify(graph.node(v)));
    if (node && node.clusterNode) {
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Cluster identified", v, node.width, graph.node(v));
      const o = recursiveRender(nodes, node.graph, diagramtype, graph.node(v));
      const newEl = o.elem;
      (0,_edges_65da65dc_js__WEBPACK_IMPORTED_MODULE_5__.u)(node, newEl);
      node.diff = o.diff || 0;
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Node bounds (abc123)", v, node, node.width, node.x, node.y);
      (0,_edges_65da65dc_js__WEBPACK_IMPORTED_MODULE_5__.s)(newEl, node);
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Recursive render complete ", newEl, node);
    } else {
      if (graph.children(v).length > 0) {
        _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Cluster - the non recursive path XXX", v, node.id, node, graph);
        _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info(findNonClusterChild(node.id, graph));
        clusterDb[node.id] = { id: findNonClusterChild(node.id, graph), node };
      } else {
        _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Node - the non recursive path", v, node.id, node);
        (0,_edges_65da65dc_js__WEBPACK_IMPORTED_MODULE_5__.e)(nodes, graph.node(v), dir);
      }
    }
  });
  graph.edges().forEach(function(e) {
    const edge = graph.edge(e.v, e.w, e.name);
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e));
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Edge " + e.v + " -> " + e.w + ": ", e, " ", JSON.stringify(graph.edge(e)));
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Fix", clusterDb, "ids:", e.v, e.w, "Translateing: ", clusterDb[e.v], clusterDb[e.w]);
    (0,_edges_65da65dc_js__WEBPACK_IMPORTED_MODULE_5__.f)(edgeLabels, edge);
  });
  graph.edges().forEach(function(e) {
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e));
  });
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info("#############################################");
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info("###                Layout                 ###");
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info("#############################################");
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info(graph);
  (0,dagre_d3_es_src_dagre_index_js__WEBPACK_IMPORTED_MODULE_0__/* .layout */ .bK)(graph);
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Graph after layout:", dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__/* .write */ .c(graph));
  let diff = 0;
  sortNodesByHierarchy(graph).forEach(function(v) {
    const node = graph.node(v);
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Position " + v + ": " + JSON.stringify(graph.node(v)));
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info(
      "Position " + v + ": (" + node.x,
      "," + node.y,
      ") width: ",
      node.width,
      " height: ",
      node.height
    );
    if (node && node.clusterNode) {
      (0,_edges_65da65dc_js__WEBPACK_IMPORTED_MODULE_5__.p)(node);
    } else {
      if (graph.children(v).length > 0) {
        insertCluster(clusters, node);
        clusterDb[node.id].node = node;
      } else {
        (0,_edges_65da65dc_js__WEBPACK_IMPORTED_MODULE_5__.p)(node);
      }
    }
  });
  graph.edges().forEach(function(e) {
    const edge = graph.edge(e);
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(edge), edge);
    const paths = (0,_edges_65da65dc_js__WEBPACK_IMPORTED_MODULE_5__.g)(edgePaths, e, edge, clusterDb, diagramtype, graph);
    (0,_edges_65da65dc_js__WEBPACK_IMPORTED_MODULE_5__.h)(edge, paths);
  });
  graph.nodes().forEach(function(v) {
    const n = graph.node(v);
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.info(v, n.type, n.diff);
    if (n.type === "group") {
      diff = n.diff;
    }
  });
  return { elem, diff };
};
const render = (elem, graph, markers, diagramtype, id) => {
  (0,_edges_65da65dc_js__WEBPACK_IMPORTED_MODULE_5__.a)(elem, markers, diagramtype, id);
  (0,_edges_65da65dc_js__WEBPACK_IMPORTED_MODULE_5__.b)();
  (0,_edges_65da65dc_js__WEBPACK_IMPORTED_MODULE_5__.d)();
  clear();
  clear$1();
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Graph at first:", dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__/* .write */ .c(graph));
  adjustClustersAndEdges(graph);
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Graph after:", dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__/* .write */ .c(graph));
  recursiveRender(elem, graph, diagramtype);
};

//# sourceMappingURL=index-f9d09cc9.js.map


/***/ }),

/***/ 56805:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ flowStyles),
/* harmony export */   "f": () => (/* binding */ flowRendererV2)
/* harmony export */ });
/* harmony import */ var dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76003);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63321);
/* harmony import */ var _flowDb_88762a1f_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53557);
/* harmony import */ var _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90403);
/* harmony import */ var _utils_d5eeff82_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2332);
/* harmony import */ var _index_f9d09cc9_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88337);
/* harmony import */ var dagre_d3_es_src_dagre_js_label_add_html_label_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36936);
/* harmony import */ var _setupGraphViewbox_e35e4124_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34694);








const conf = {};
const setConf = function(cnf) {
  const keys = Object.keys(cnf);
  for (const key of keys) {
    conf[key] = cnf[key];
  }
};
const addVertices = function(vert, g, svgId, root, doc, diagObj) {
  const svg = root.select(`[id="${svgId}"]`);
  const keys = Object.keys(vert);
  keys.forEach(function(id) {
    const vertex = vert[id];
    let classStr = "default";
    if (vertex.classes.length > 0) {
      classStr = vertex.classes.join(" ");
    }
    const styles = (0,_utils_d5eeff82_js__WEBPACK_IMPORTED_MODULE_2__.m)(vertex.styles);
    let vertexText = vertex.text !== void 0 ? vertex.text : vertex.id;
    let vertexNode;
    if ((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_3__.j)((0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_3__.g)().flowchart.htmlLabels)) {
      const node = {
        label: vertexText.replace(
          /fa[blrs]?:fa-[\w-]+/g,
          (s) => `<i class='${s.replace(":", " ")}'></i>`
        )
      };
      vertexNode = (0,dagre_d3_es_src_dagre_js_label_add_html_label_js__WEBPACK_IMPORTED_MODULE_4__/* .addHtmlLabel */ .a)(svg, node).node();
      vertexNode.parentNode.removeChild(vertexNode);
    } else {
      const svgLabel = doc.createElementNS("http://www.w3.org/2000/svg", "text");
      svgLabel.setAttribute("style", styles.labelStyle.replace("color:", "fill:"));
      const rows = vertexText.split(_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_3__.d.lineBreakRegex);
      for (const row of rows) {
        const tspan = doc.createElementNS("http://www.w3.org/2000/svg", "tspan");
        tspan.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
        tspan.setAttribute("dy", "1em");
        tspan.setAttribute("x", "1");
        tspan.textContent = row;
        svgLabel.appendChild(tspan);
      }
      vertexNode = svgLabel;
    }
    let radious = 0;
    let _shape = "";
    switch (vertex.type) {
      case "round":
        radious = 5;
        _shape = "rect";
        break;
      case "square":
        _shape = "rect";
        break;
      case "diamond":
        _shape = "question";
        break;
      case "hexagon":
        _shape = "hexagon";
        break;
      case "odd":
        _shape = "rect_left_inv_arrow";
        break;
      case "lean_right":
        _shape = "lean_right";
        break;
      case "lean_left":
        _shape = "lean_left";
        break;
      case "trapezoid":
        _shape = "trapezoid";
        break;
      case "inv_trapezoid":
        _shape = "inv_trapezoid";
        break;
      case "odd_right":
        _shape = "rect_left_inv_arrow";
        break;
      case "circle":
        _shape = "circle";
        break;
      case "ellipse":
        _shape = "ellipse";
        break;
      case "stadium":
        _shape = "stadium";
        break;
      case "subroutine":
        _shape = "subroutine";
        break;
      case "cylinder":
        _shape = "cylinder";
        break;
      case "group":
        _shape = "rect";
        break;
      case "doublecircle":
        _shape = "doublecircle";
        break;
      default:
        _shape = "rect";
    }
    g.setNode(vertex.id, {
      labelStyle: styles.labelStyle,
      shape: _shape,
      labelText: vertexText,
      rx: radious,
      ry: radious,
      class: classStr,
      style: styles.style,
      id: vertex.id,
      link: vertex.link,
      linkTarget: vertex.linkTarget,
      tooltip: diagObj.db.getTooltip(vertex.id) || "",
      domId: diagObj.db.lookUpDomId(vertex.id),
      haveCallback: vertex.haveCallback,
      width: vertex.type === "group" ? 500 : void 0,
      dir: vertex.dir,
      type: vertex.type,
      props: vertex.props,
      padding: (0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_3__.g)().flowchart.padding
    });
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_3__.l.info("setNode", {
      labelStyle: styles.labelStyle,
      shape: _shape,
      labelText: vertexText,
      rx: radious,
      ry: radious,
      class: classStr,
      style: styles.style,
      id: vertex.id,
      domId: diagObj.db.lookUpDomId(vertex.id),
      width: vertex.type === "group" ? 500 : void 0,
      type: vertex.type,
      dir: vertex.dir,
      props: vertex.props,
      padding: (0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_3__.g)().flowchart.padding
    });
  });
};
const addEdges = function(edges, g, diagObj) {
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_3__.l.info("abc78 edges = ", edges);
  let cnt = 0;
  let linkIdCnt = {};
  let defaultStyle;
  let defaultLabelStyle;
  if (edges.defaultStyle !== void 0) {
    const defaultStyles = (0,_utils_d5eeff82_js__WEBPACK_IMPORTED_MODULE_2__.m)(edges.defaultStyle);
    defaultStyle = defaultStyles.style;
    defaultLabelStyle = defaultStyles.labelStyle;
  }
  edges.forEach(function(edge) {
    cnt++;
    var linkIdBase = "L-" + edge.start + "-" + edge.end;
    if (linkIdCnt[linkIdBase] === void 0) {
      linkIdCnt[linkIdBase] = 0;
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_3__.l.info("abc78 new entry", linkIdBase, linkIdCnt[linkIdBase]);
    } else {
      linkIdCnt[linkIdBase]++;
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_3__.l.info("abc78 new entry", linkIdBase, linkIdCnt[linkIdBase]);
    }
    let linkId = linkIdBase + "-" + linkIdCnt[linkIdBase];
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_3__.l.info("abc78 new link id to be used is", linkIdBase, linkId, linkIdCnt[linkIdBase]);
    var linkNameStart = "LS-" + edge.start;
    var linkNameEnd = "LE-" + edge.end;
    const edgeData = { style: "", labelStyle: "" };
    edgeData.minlen = edge.length || 1;
    if (edge.type === "arrow_open") {
      edgeData.arrowhead = "none";
    } else {
      edgeData.arrowhead = "normal";
    }
    edgeData.arrowTypeStart = "arrow_open";
    edgeData.arrowTypeEnd = "arrow_open";
    switch (edge.type) {
      case "double_arrow_cross":
        edgeData.arrowTypeStart = "arrow_cross";
      case "arrow_cross":
        edgeData.arrowTypeEnd = "arrow_cross";
        break;
      case "double_arrow_point":
        edgeData.arrowTypeStart = "arrow_point";
      case "arrow_point":
        edgeData.arrowTypeEnd = "arrow_point";
        break;
      case "double_arrow_circle":
        edgeData.arrowTypeStart = "arrow_circle";
      case "arrow_circle":
        edgeData.arrowTypeEnd = "arrow_circle";
        break;
    }
    let style = "";
    let labelStyle = "";
    switch (edge.stroke) {
      case "normal":
        style = "fill:none;";
        if (defaultStyle !== void 0) {
          style = defaultStyle;
        }
        if (defaultLabelStyle !== void 0) {
          labelStyle = defaultLabelStyle;
        }
        edgeData.thickness = "normal";
        edgeData.pattern = "solid";
        break;
      case "dotted":
        edgeData.thickness = "normal";
        edgeData.pattern = "dotted";
        edgeData.style = "fill:none;stroke-width:2px;stroke-dasharray:3;";
        break;
      case "thick":
        edgeData.thickness = "thick";
        edgeData.pattern = "solid";
        edgeData.style = "stroke-width: 3.5px;fill:none;";
        break;
      case "invisible":
        edgeData.thickness = "invisible";
        edgeData.pattern = "solid";
        edgeData.style = "stroke-width: 0;fill:none;";
        break;
    }
    if (edge.style !== void 0) {
      const styles = (0,_utils_d5eeff82_js__WEBPACK_IMPORTED_MODULE_2__.m)(edge.style);
      style = styles.style;
      labelStyle = styles.labelStyle;
    }
    edgeData.style = edgeData.style += style;
    edgeData.labelStyle = edgeData.labelStyle += labelStyle;
    if (edge.interpolate !== void 0) {
      edgeData.curve = (0,_utils_d5eeff82_js__WEBPACK_IMPORTED_MODULE_2__.n)(edge.interpolate, d3__WEBPACK_IMPORTED_MODULE_1__/* .curveLinear */ .c_6);
    } else if (edges.defaultInterpolate !== void 0) {
      edgeData.curve = (0,_utils_d5eeff82_js__WEBPACK_IMPORTED_MODULE_2__.n)(edges.defaultInterpolate, d3__WEBPACK_IMPORTED_MODULE_1__/* .curveLinear */ .c_6);
    } else {
      edgeData.curve = (0,_utils_d5eeff82_js__WEBPACK_IMPORTED_MODULE_2__.n)(conf.curve, d3__WEBPACK_IMPORTED_MODULE_1__/* .curveLinear */ .c_6);
    }
    if (edge.text === void 0) {
      if (edge.style !== void 0) {
        edgeData.arrowheadStyle = "fill: #333";
      }
    } else {
      edgeData.arrowheadStyle = "fill: #333";
      edgeData.labelpos = "c";
    }
    edgeData.labelType = "text";
    edgeData.label = edge.text.replace(_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_3__.d.lineBreakRegex, "\n");
    if (edge.style === void 0) {
      edgeData.style = edgeData.style || "stroke: #333; stroke-width: 1.5px;fill:none;";
    }
    edgeData.labelStyle = edgeData.labelStyle.replace("color:", "fill:");
    edgeData.id = linkId;
    edgeData.classes = "flowchart-link " + linkNameStart + " " + linkNameEnd;
    g.setEdge(edge.start, edge.end, edgeData, cnt);
  });
};
const getClasses = function(text, diagObj) {
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_3__.l.info("Extracting classes");
  diagObj.db.clear();
  try {
    diagObj.parse(text);
    return diagObj.db.getClasses();
  } catch (e) {
    return;
  }
};
const draw = function(text, id, _version, diagObj) {
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_3__.l.info("Drawing flowchart");
  diagObj.db.clear();
  _flowDb_88762a1f_js__WEBPACK_IMPORTED_MODULE_5__.f.setGen("gen-2");
  diagObj.parser.parse(text);
  let dir = diagObj.db.getDirection();
  if (dir === void 0) {
    dir = "TD";
  }
  const { securityLevel, flowchart: conf2 } = (0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_3__.g)();
  const nodeSpacing = conf2.nodeSpacing || 50;
  const rankSpacing = conf2.rankSpacing || 50;
  let sandboxElement;
  if (securityLevel === "sandbox") {
    sandboxElement = (0,d3__WEBPACK_IMPORTED_MODULE_1__/* .select */ .Ys)("#i" + id);
  }
  const root = securityLevel === "sandbox" ? (0,d3__WEBPACK_IMPORTED_MODULE_1__/* .select */ .Ys)(sandboxElement.nodes()[0].contentDocument.body) : (0,d3__WEBPACK_IMPORTED_MODULE_1__/* .select */ .Ys)("body");
  const doc = securityLevel === "sandbox" ? sandboxElement.nodes()[0].contentDocument : document;
  const g = new dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_0__/* .Graph */ .k({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: dir,
    nodesep: nodeSpacing,
    ranksep: rankSpacing,
    marginx: 0,
    marginy: 0
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  let subG;
  const subGraphs = diagObj.db.getSubGraphs();
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_3__.l.info("Subgraphs - ", subGraphs);
  for (let i2 = subGraphs.length - 1; i2 >= 0; i2--) {
    subG = subGraphs[i2];
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_3__.l.info("Subgraph - ", subG);
    diagObj.db.addVertex(subG.id, subG.title, "group", void 0, subG.classes, subG.dir);
  }
  const vert = diagObj.db.getVertices();
  const edges = diagObj.db.getEdges();
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_3__.l.info("Edges", edges);
  let i = 0;
  for (i = subGraphs.length - 1; i >= 0; i--) {
    subG = subGraphs[i];
    (0,d3__WEBPACK_IMPORTED_MODULE_1__/* .selectAll */ .td_)("cluster").append("text");
    for (let j = 0; j < subG.nodes.length; j++) {
      _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_3__.l.info("Setting up subgraphs", subG.nodes[j], subG.id);
      g.setParent(subG.nodes[j], subG.id);
    }
  }
  addVertices(vert, g, id, root, doc, diagObj);
  addEdges(edges, g);
  const svg = root.select(`[id="${id}"]`);
  const element = root.select("#" + id + " g");
  (0,_index_f9d09cc9_js__WEBPACK_IMPORTED_MODULE_6__.r)(element, g, ["point", "circle", "cross"], "flowchart", id);
  _utils_d5eeff82_js__WEBPACK_IMPORTED_MODULE_2__.u.insertTitle(svg, "flowchartTitleText", conf2.titleTopMargin, diagObj.db.getDiagramTitle());
  (0,_setupGraphViewbox_e35e4124_js__WEBPACK_IMPORTED_MODULE_7__.s)(g, svg, conf2.diagramPadding, conf2.useMaxWidth);
  diagObj.db.indexNodes("subGraph" + i);
  if (!conf2.htmlLabels) {
    const labels = doc.querySelectorAll('[id="' + id + '"] .edgeLabel .label');
    for (const label of labels) {
      const dim = label.getBBox();
      const rect = doc.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("rx", 0);
      rect.setAttribute("ry", 0);
      rect.setAttribute("width", dim.width);
      rect.setAttribute("height", dim.height);
      label.insertBefore(rect, label.firstChild);
    }
  }
  const keys = Object.keys(vert);
  keys.forEach(function(key) {
    const vertex = vert[key];
    if (vertex.link) {
      const node = (0,d3__WEBPACK_IMPORTED_MODULE_1__/* .select */ .Ys)("#" + id + ' [id="' + key + '"]');
      if (node) {
        const link = doc.createElementNS("http://www.w3.org/2000/svg", "a");
        link.setAttributeNS("http://www.w3.org/2000/svg", "class", vertex.classes.join(" "));
        link.setAttributeNS("http://www.w3.org/2000/svg", "href", vertex.link);
        link.setAttributeNS("http://www.w3.org/2000/svg", "rel", "noopener");
        if (securityLevel === "sandbox") {
          link.setAttributeNS("http://www.w3.org/2000/svg", "target", "_top");
        } else if (vertex.linkTarget) {
          link.setAttributeNS("http://www.w3.org/2000/svg", "target", vertex.linkTarget);
        }
        const linkNode = node.insert(function() {
          return link;
        }, ":first-child");
        const shape = node.select(".label-container");
        if (shape) {
          linkNode.append(function() {
            return shape.node();
          });
        }
        const label = node.select(".label");
        if (label) {
          linkNode.append(function() {
            return label.node();
          });
        }
      }
    }
  });
};
const flowRendererV2 = {
  setConf,
  addVertices,
  addEdges,
  getClasses,
  draw
};
const getStyles = (options) => `.label {
    font-family: ${options.fontFamily};
    color: ${options.nodeTextColor || options.textColor};
  }
  .cluster-label text {
    fill: ${options.titleColor};
  }
  .cluster-label span {
    color: ${options.titleColor};
  }

  .label text,span {
    fill: ${options.nodeTextColor || options.textColor};
    color: ${options.nodeTextColor || options.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${options.mainBkg};
    stroke: ${options.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${options.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${options.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${options.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${options.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${options.edgeLabelBackground};
      fill: ${options.edgeLabelBackground};
    }
    text-align: center;
  }

  .cluster rect {
    fill: ${options.clusterBkg};
    stroke: ${options.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${options.titleColor};
  }

  .cluster span {
    color: ${options.titleColor};
  }
  /* .cluster div {
    color: ${options.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${options.fontFamily};
    font-size: 12px;
    background: ${options.tertiaryColor};
    border: 1px solid ${options.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${options.textColor};
  }
`;
const flowStyles = getStyles;

//# sourceMappingURL=styles-4fe3d1fc.js.map


/***/ }),

/***/ 62533:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ parseMember),
/* harmony export */   "s": () => (/* binding */ svgDraw)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63321);
/* harmony import */ var _utils_d5eeff82_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2332);
/* harmony import */ var _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90403);



let edgeCount = 0;
const drawEdge = function(elem, path, relation, conf, diagObj) {
  const getRelationType = function(type) {
    switch (type) {
      case diagObj.db.relationType.AGGREGATION:
        return "aggregation";
      case diagObj.db.relationType.EXTENSION:
        return "extension";
      case diagObj.db.relationType.COMPOSITION:
        return "composition";
      case diagObj.db.relationType.DEPENDENCY:
        return "dependency";
      case diagObj.db.relationType.LOLLIPOP:
        return "lollipop";
    }
  };
  path.points = path.points.filter((p) => !Number.isNaN(p.y));
  const lineData = path.points;
  const lineFunction = (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .line */ .jvg)().x(function(d) {
    return d.x;
  }).y(function(d) {
    return d.y;
  }).curve(d3__WEBPACK_IMPORTED_MODULE_0__/* .curveBasis */ .$0Z);
  const svgPath = elem.append("path").attr("d", lineFunction(lineData)).attr("id", "edge" + edgeCount).attr("class", "relation");
  let url = "";
  if (conf.arrowMarkerAbsolute) {
    url = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
    url = url.replace(/\(/g, "\\(");
    url = url.replace(/\)/g, "\\)");
  }
  if (relation.relation.lineType == 1) {
    svgPath.attr("class", "relation dashed-line");
  }
  if (relation.relation.lineType == 10) {
    svgPath.attr("class", "relation dotted-line");
  }
  if (relation.relation.type1 !== "none") {
    svgPath.attr(
      "marker-start",
      "url(" + url + "#" + getRelationType(relation.relation.type1) + "Start)"
    );
  }
  if (relation.relation.type2 !== "none") {
    svgPath.attr(
      "marker-end",
      "url(" + url + "#" + getRelationType(relation.relation.type2) + "End)"
    );
  }
  let x, y;
  const l = path.points.length;
  let labelPosition = _utils_d5eeff82_js__WEBPACK_IMPORTED_MODULE_1__.u.calcLabelPosition(path.points);
  x = labelPosition.x;
  y = labelPosition.y;
  let p1_card_x, p1_card_y;
  let p2_card_x, p2_card_y;
  if (l % 2 !== 0 && l > 1) {
    let cardinality_1_point = _utils_d5eeff82_js__WEBPACK_IMPORTED_MODULE_1__.u.calcCardinalityPosition(
      relation.relation.type1 !== "none",
      path.points,
      path.points[0]
    );
    let cardinality_2_point = _utils_d5eeff82_js__WEBPACK_IMPORTED_MODULE_1__.u.calcCardinalityPosition(
      relation.relation.type2 !== "none",
      path.points,
      path.points[l - 1]
    );
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_2__.l.debug("cardinality_1_point " + JSON.stringify(cardinality_1_point));
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_2__.l.debug("cardinality_2_point " + JSON.stringify(cardinality_2_point));
    p1_card_x = cardinality_1_point.x;
    p1_card_y = cardinality_1_point.y;
    p2_card_x = cardinality_2_point.x;
    p2_card_y = cardinality_2_point.y;
  }
  if (relation.title !== void 0) {
    const g = elem.append("g").attr("class", "classLabel");
    const label = g.append("text").attr("class", "label").attr("x", x).attr("y", y).attr("fill", "red").attr("text-anchor", "middle").text(relation.title);
    window.label = label;
    const bounds = label.node().getBBox();
    g.insert("rect", ":first-child").attr("class", "box").attr("x", bounds.x - conf.padding / 2).attr("y", bounds.y - conf.padding / 2).attr("width", bounds.width + conf.padding).attr("height", bounds.height + conf.padding);
  }
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_2__.l.info("Rendering relation " + JSON.stringify(relation));
  if (relation.relationTitle1 !== void 0 && relation.relationTitle1 !== "none") {
    const g = elem.append("g").attr("class", "cardinality");
    g.append("text").attr("class", "type1").attr("x", p1_card_x).attr("y", p1_card_y).attr("fill", "black").attr("font-size", "6").text(relation.relationTitle1);
  }
  if (relation.relationTitle2 !== void 0 && relation.relationTitle2 !== "none") {
    const g = elem.append("g").attr("class", "cardinality");
    g.append("text").attr("class", "type2").attr("x", p2_card_x).attr("y", p2_card_y).attr("fill", "black").attr("font-size", "6").text(relation.relationTitle2);
  }
  edgeCount++;
};
const drawClass = function(elem, classDef, conf, diagObj) {
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_2__.l.debug("Rendering class ", classDef, conf);
  const id = classDef.id;
  const classInfo = {
    id,
    label: classDef.id,
    width: 0,
    height: 0
  };
  const g = elem.append("g").attr("id", diagObj.db.lookUpDomId(id)).attr("class", "classGroup");
  let title;
  if (classDef.link) {
    title = g.append("svg:a").attr("xlink:href", classDef.link).attr("target", classDef.linkTarget).append("text").attr("y", conf.textHeight + conf.padding).attr("x", 0);
  } else {
    title = g.append("text").attr("y", conf.textHeight + conf.padding).attr("x", 0);
  }
  let isFirst = true;
  classDef.annotations.forEach(function(member) {
    const titleText2 = title.append("tspan").text("«" + member + "»");
    if (!isFirst) {
      titleText2.attr("dy", conf.textHeight);
    }
    isFirst = false;
  });
  let classTitleString = classDef.id;
  if (classDef.type !== void 0 && classDef.type !== "") {
    classTitleString += "<" + classDef.type + ">";
  }
  const classTitle = title.append("tspan").text(classTitleString).attr("class", "title");
  if (!isFirst) {
    classTitle.attr("dy", conf.textHeight);
  }
  const titleHeight = title.node().getBBox().height;
  const membersLine = g.append("line").attr("x1", 0).attr("y1", conf.padding + titleHeight + conf.dividerMargin / 2).attr("y2", conf.padding + titleHeight + conf.dividerMargin / 2);
  const members = g.append("text").attr("x", conf.padding).attr("y", titleHeight + conf.dividerMargin + conf.textHeight).attr("fill", "white").attr("class", "classText");
  isFirst = true;
  classDef.members.forEach(function(member) {
    addTspan(members, member, isFirst, conf);
    isFirst = false;
  });
  const membersBox = members.node().getBBox();
  const methodsLine = g.append("line").attr("x1", 0).attr("y1", conf.padding + titleHeight + conf.dividerMargin + membersBox.height).attr("y2", conf.padding + titleHeight + conf.dividerMargin + membersBox.height);
  const methods = g.append("text").attr("x", conf.padding).attr("y", titleHeight + 2 * conf.dividerMargin + membersBox.height + conf.textHeight).attr("fill", "white").attr("class", "classText");
  isFirst = true;
  classDef.methods.forEach(function(method) {
    addTspan(methods, method, isFirst, conf);
    isFirst = false;
  });
  const classBox = g.node().getBBox();
  var cssClassStr = " ";
  if (classDef.cssClasses.length > 0) {
    cssClassStr = cssClassStr + classDef.cssClasses.join(" ");
  }
  const rect = g.insert("rect", ":first-child").attr("x", 0).attr("y", 0).attr("width", classBox.width + 2 * conf.padding).attr("height", classBox.height + conf.padding + 0.5 * conf.dividerMargin).attr("class", cssClassStr);
  const rectWidth = rect.node().getBBox().width;
  title.node().childNodes.forEach(function(x) {
    x.setAttribute("x", (rectWidth - x.getBBox().width) / 2);
  });
  if (classDef.tooltip) {
    title.insert("title").text(classDef.tooltip);
  }
  membersLine.attr("x2", rectWidth);
  methodsLine.attr("x2", rectWidth);
  classInfo.width = rectWidth;
  classInfo.height = classBox.height + conf.padding + 0.5 * conf.dividerMargin;
  return classInfo;
};
const drawNote = function(elem, note, conf, diagObj) {
  _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_2__.l.debug("Rendering note ", note, conf);
  const id = note.id;
  const noteInfo = {
    id,
    text: note.text,
    width: 0,
    height: 0
  };
  const g = elem.append("g").attr("id", id).attr("class", "classGroup");
  let text = g.append("text").attr("y", conf.textHeight + conf.padding).attr("x", 0);
  const lines = JSON.parse(`"${note.text}"`).split("\n");
  lines.forEach(function(line2) {
    _config_389b86ff_js__WEBPACK_IMPORTED_MODULE_2__.l.debug(`Adding line: ${line2}`);
    text.append("tspan").text(line2).attr("class", "title").attr("dy", conf.textHeight);
  });
  const noteBox = g.node().getBBox();
  const rect = g.insert("rect", ":first-child").attr("x", 0).attr("y", 0).attr("width", noteBox.width + 2 * conf.padding).attr(
    "height",
    noteBox.height + lines.length * conf.textHeight + conf.padding + 0.5 * conf.dividerMargin
  );
  const rectWidth = rect.node().getBBox().width;
  text.node().childNodes.forEach(function(x) {
    x.setAttribute("x", (rectWidth - x.getBBox().width) / 2);
  });
  noteInfo.width = rectWidth;
  noteInfo.height = noteBox.height + lines.length * conf.textHeight + conf.padding + 0.5 * conf.dividerMargin;
  return noteInfo;
};
const parseMember = function(text) {
  const fieldRegEx = /^([#+~-])?(\w+)(~\w+~|\[])?\s+(\w+) *([$*])?$/;
  const methodRegEx = /^([#+|~-])?(\w+) *\( *(.*)\) *([$*])? *(\w*[[\]|~]*\s*\w*~?)$/;
  let fieldMatch = text.match(fieldRegEx);
  let methodMatch = text.match(methodRegEx);
  if (fieldMatch && !methodMatch) {
    return buildFieldDisplay(fieldMatch);
  } else if (methodMatch) {
    return buildMethodDisplay(methodMatch);
  } else {
    return buildLegacyDisplay(text);
  }
};
const buildFieldDisplay = function(parsedText) {
  let cssStyle = "";
  let displayText = "";
  try {
    let visibility = parsedText[1] ? parsedText[1].trim() : "";
    let fieldType = parsedText[2] ? parsedText[2].trim() : "";
    let genericType = parsedText[3] ? (0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_2__.p)(parsedText[3].trim()) : "";
    let fieldName = parsedText[4] ? parsedText[4].trim() : "";
    let classifier = parsedText[5] ? parsedText[5].trim() : "";
    displayText = visibility + fieldType + genericType + " " + fieldName;
    cssStyle = parseClassifier(classifier);
  } catch (err) {
    displayText = parsedText;
  }
  return {
    displayText,
    cssStyle
  };
};
const buildMethodDisplay = function(parsedText) {
  let cssStyle = "";
  let displayText = "";
  try {
    let visibility = parsedText[1] ? parsedText[1].trim() : "";
    let methodName = parsedText[2] ? parsedText[2].trim() : "";
    let parameters = parsedText[3] ? (0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_2__.p)(parsedText[3].trim()) : "";
    let classifier = parsedText[4] ? parsedText[4].trim() : "";
    let returnType = parsedText[5] ? " : " + (0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_2__.p)(parsedText[5]).trim() : "";
    displayText = visibility + methodName + "(" + parameters + ")" + returnType;
    cssStyle = parseClassifier(classifier);
  } catch (err) {
    displayText = parsedText;
  }
  return {
    displayText,
    cssStyle
  };
};
const buildLegacyDisplay = function(text) {
  let displayText = "";
  let cssStyle = "";
  let returnType = "";
  let methodStart = text.indexOf("(");
  let methodEnd = text.indexOf(")");
  if (methodStart > 1 && methodEnd > methodStart && methodEnd <= text.length) {
    let visibility = "";
    let methodName = "";
    let firstChar = text.substring(0, 1);
    if (firstChar.match(/\w/)) {
      methodName = text.substring(0, methodStart).trim();
    } else {
      if (firstChar.match(/[#+~-]/)) {
        visibility = firstChar;
      }
      methodName = text.substring(1, methodStart).trim();
    }
    const parameters = text.substring(methodStart + 1, methodEnd);
    text.substring(methodEnd + 1, 1);
    cssStyle = parseClassifier(text.substring(methodEnd + 1, methodEnd + 2));
    displayText = visibility + methodName + "(" + (0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_2__.p)(parameters.trim()) + ")";
    if (methodEnd < text.length) {
      returnType = text.substring(methodEnd + 2).trim();
      if (returnType !== "") {
        returnType = " : " + (0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_2__.p)(returnType);
        displayText += returnType;
      }
    }
  } else {
    displayText = (0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_2__.p)(text);
  }
  return {
    displayText,
    cssStyle
  };
};
const addTspan = function(textEl, txt, isFirst, conf) {
  let member = parseMember(txt);
  const tSpan = textEl.append("tspan").attr("x", conf.padding).text(member.displayText);
  if (member.cssStyle !== "") {
    tSpan.attr("style", member.cssStyle);
  }
  if (!isFirst) {
    tSpan.attr("dy", conf.textHeight);
  }
};
const parseClassifier = function(classifier) {
  switch (classifier) {
    case "*":
      return "font-style:italic;";
    case "$":
      return "text-decoration:underline;";
    default:
      return "";
  }
};
const svgDraw = {
  drawClass,
  drawEdge,
  drawNote,
  parseMember
};

//# sourceMappingURL=svgDraw-6a237a99.js.map


/***/ })

};
;