"use strict";
exports.id = 6981;
exports.ids = [6981];
exports.modules = {

/***/ 95805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SimpleMarkdown)
/* harmony export */ });
/* eslint-disable prefer-spread, no-regex-spaces, no-unused-vars, guard-for-in, no-console, no-var */

/**
 * Simple-Markdown
 * ===============
 *
 * Simple-Markdown's primary goal is to be easy to adapt. It aims
 * to be compliant with John Gruber's [Markdown Syntax page][1],
 * but compatiblity with other markdown implementations' edge-cases
 * will be sacrificed where it conflicts with simplicity or
 * extensibility.
 *
 * If your goal is to simply embed a standard markdown implementation
 * in your website, simple-markdown is probably not the best library
 * for you (although it should work). But if you have struggled to
 * customize an existing library to meet your needs, simple-markdown
 * might be able to help.
 *
 * Many of the regexes and original logic has been adapted from
 * the wonderful [marked.js](https://github.com/chjj/marked)
 */
// Flow Type Definitions:
// We want to clarify our defaultRules types a little bit more so clients can
// reuse defaultRules built-ins. So we make some stronger guarantess when
// we can:
// End Flow Definitions
var CR_NEWLINE_R = /\r\n?/g;
var TAB_R = /\t/g;
var FORMFEED_R = /\f/g;
/**
 * Turn various whitespace into easy-to-process whitespace
 */

var preprocess = function preprocess(source) {
  return source.replace(CR_NEWLINE_R, "\n").replace(FORMFEED_R, "").replace(TAB_R, "    ");
};

var populateInitialState = function populateInitialState(givenState, defaultState) {
  var state = givenState || {};

  if (defaultState != null) {
    for (var prop in defaultState) {
      // $FlowFixMe
      if (Object.prototype.hasOwnProperty.call(defaultState, prop)) {
        state[prop] = defaultState[prop];
      }
    }
  }

  return state;
};
/**
 * Creates a parser for a given set of rules, with the precedence
 * specified as a list of rules.
 *
 * @param {SimpleMarkdown.ParserRules} rules
 *     an object containing
 *     rule type -> {match, order, parse} objects
 *     (lower order is higher precedence)
 * @param {SimpleMarkdown.OptionalState} [defaultState]
 *
 * @returns {SimpleMarkdown.Parser}
 *     The resulting parse function, with the following parameters:
 *     @source: the input source string to be parsed
 *     @state: an optional object to be threaded through parse
 *         calls. Allows clients to add stateful operations to
 *         parsing, such as keeping track of how many levels deep
 *         some nesting is. For an example use-case, see passage-ref
 *         parsing in src/widgets/passage/passage-markdown.jsx
 */


var parserFor = function parserFor(rules, defaultState) {
  // Sorts rules in order of increasing order, then
  // ascending rule name in case of ties.
  var ruleList = Object.keys(rules).filter(function (type) {
    var rule = rules[type];

    if (rule == null || rule.match == null) {
      return false;
    }

    var order = rule.order;

    if ((typeof order !== "number" || !isFinite(order)) && typeof console !== "undefined") {
      console.warn("simple-markdown: Invalid order for rule `" + type + "`: " + String(order));
    }

    return true;
  });
  ruleList.sort(function (typeA, typeB) {
    var ruleA = rules[typeA];
    var ruleB = rules[typeB];
    var orderA = ruleA.order;
    var orderB = ruleB.order; // First sort based on increasing order

    if (orderA !== orderB) {
      return orderA - orderB;
    }

    var secondaryOrderA = ruleA.quality ? 0 : 1;
    var secondaryOrderB = ruleB.quality ? 0 : 1;

    if (secondaryOrderA !== secondaryOrderB) {
      return secondaryOrderA - secondaryOrderB; // Then based on increasing unicode lexicographic ordering
    } else if (typeA < typeB) {
      return -1;
    } else if (typeA > typeB) {
      return 1;
    } else {
      // Rules should never have the same name,
      // but this is provided for completeness.
      return 0;
    }
  });
  var latestState;

  var nestedParse = function nestedParse(source, state) {
    var result = [];
    state = state || latestState;
    latestState = state;

    while (source) {
      // store the best match, it's rule, and quality:
      var ruleType = null;
      var rule = null;
      var capture = null;
      var quality = NaN; // loop control variables:

      var i = 0;
      var currRuleType = ruleList[0]; // $FlowFixMe

      var currRule = rules[currRuleType];

      do {
        var currOrder = currRule.order;
        var prevCaptureStr = state.prevCapture == null ? "" : state.prevCapture[0];
        var currCapture = currRule.match(source, state, prevCaptureStr);

        if (currCapture) {
          var currQuality = currRule.quality ? currRule.quality(currCapture, state, prevCaptureStr) : 0; // This should always be true the first time because
          // the initial quality is NaN (that's why there's the
          // condition negation).

          if (!(currQuality <= quality)) {
            ruleType = currRuleType;
            rule = currRule;
            capture = currCapture;
            quality = currQuality;
          }
        } // Move on to the next item.
        // Note that this makes `currRule` be the next item


        i++;
        currRuleType = ruleList[i]; // $FlowFixMe

        currRule = rules[currRuleType];
      } while ( // keep looping while we're still within the ruleList
      currRule && ( // if we don't have a match yet, continue
      !capture || // or if we have a match, but the next rule is
      // at the same order, and has a quality measurement
      // functions, then this rule must have a quality
      // measurement function (since they are sorted before
      // those without), and we need to check if there is
      // a better quality match
      currRule.order === currOrder && currRule.quality)); // TODO(aria): Write tests for these


      if (rule == null || capture == null) {
        throw new Error("Could not find a matching rule for the below " + "content. The rule with highest `order` should " + "always match content provided to it. Check " + "the definition of `match` for '" + ruleList[ruleList.length - 1] + "'. It seems to not match the following source:\n" + source);
      }

      if (capture.index) {
        // If present and non-zero, i.e. a non-^ regexp result:
        throw new Error("`match` must return a capture starting at index 0 " + "(the current parse index). Did you forget a ^ at the " + "start of the RegExp?");
      }

      var parsed = rule.parse(capture, nestedParse, state); // We maintain the same object here so that rules can
      // store references to the objects they return and
      // modify them later. (oops sorry! but this adds a lot
      // of power--see reflinks.)

      if (Array.isArray(parsed)) {
        // $FlowFixMe
        Array.prototype.push.apply(result, parsed);
      } else {
        if (parsed == null || typeof parsed !== "object") {
          throw new Error("parse() function returned invalid parse result: '".concat(parsed, "'"));
        } // We also let rules override the default type of
        // their parsed node if they would like to, so that
        // there can be a single output function for all links,
        // even if there are several rules to parse them.


        if (parsed.type == null) {
          // $FlowFixMe
          parsed.type = ruleType;
        }

        result.push(parsed);
      }

      state.prevCapture = capture;
      source = source.substring(state.prevCapture[0].length);
    } // $FlowFixMe


    return result;
  };

  var outerParse = function outerParse(source, state) {
    latestState = populateInitialState(state, defaultState);

    if (!latestState.inline && !latestState.disableAutoBlockNewlines) {
      source = source + "\n\n";
    } // We store the previous capture so that match functions can
    // use some limited amount of lookbehind. Lists use this to
    // ensure they don't match arbitrary '- ' or '* ' in inline
    // text (see the list rule for more information). This stores
    // the full regex capture object, if there is one.


    latestState.prevCapture = null;
    return nestedParse(preprocess(source), latestState);
  }; // $FlowFixMe


  return outerParse;
}; // Creates a match function for an inline scoped element from a regex


var inlineRegex = function inlineRegex(regex) {
  var match = function match(source, state, prevCapture) {
    if (state.inline) {
      // $FlowFixMe
      return regex.exec(source);
    } else {
      return null;
    }
  };

  match.regex = regex;
  return match;
}; // Creates a match function for a block scoped element from a regex


var blockRegex = function blockRegex(regex) {
  // $FlowFixMe
  var match = function match(source, state) {
    if (state.inline) {
      return null;
    } else {
      return regex.exec(source);
    }
  };

  match.regex = regex;
  return match;
}; // Creates a match function from a regex, ignoring block/inline scope


var anyScopeRegex = function anyScopeRegex(regex) {
  // $FlowFixMe
  var match = function match(source, state) {
    return regex.exec(source);
  };

  match.regex = regex;
  return match;
};

var TYPE_SYMBOL = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7;

var reactElement = function reactElement(type, key, props) {
  var element = {
    $$typeof: TYPE_SYMBOL,
    type: type,
    key: key == null ? undefined : key,
    ref: null,
    props: props,
    _owner: null
  };
  return element;
};
/** Returns a closed HTML tag.
 * @param {string} tagName - Name of HTML tag (eg. "em" or "a")
 * @param {string} content - Inner content of tag
 * @param {{ [attr: string]: SimpleMarkdown.Attr }} [attributes] - Optional extra attributes of tag as an object of key-value pairs
 *   eg. { "href": "http://google.com" }. Falsey attributes are filtered out.
 * @param {boolean} [isClosed] - boolean that controls whether tag is closed or not (eg. img tags).
 *   defaults to true
 */


var htmlTag = function htmlTag(tagName, content, attributes, isClosed) {
  attributes = attributes || {};
  isClosed = typeof isClosed !== "undefined" ? isClosed : true;
  var attributeString = "";

  for (var attr in attributes) {
    var attribute = attributes[attr]; // Removes falsey attributes

    if ( // $FlowFixMe
    Object.prototype.hasOwnProperty.call(attributes, attr) && attribute) {
      attributeString += " " + sanitizeText(attr) + '="' + sanitizeText(attribute) + '"';
    }
  }

  var unclosedTag = "<" + tagName + attributeString + ">";

  if (isClosed) {
    return unclosedTag + content + "</" + tagName + ">";
  } else {
    return unclosedTag;
  }
};

var EMPTY_PROPS = {};
/**
 * @param {string | null | undefined} url - url to sanitize
 * @returns {string | null} - url if safe, or null if a safe url could not be made
 */

var sanitizeUrl = function sanitizeUrl(url) {
  if (url == null) {
    return null;
  }

  try {
    var prot = new URL(url, "https://localhost").protocol;

    if (prot.indexOf("javascript:") === 0 || prot.indexOf("vbscript:") === 0 || prot.indexOf("data:") === 0) {
      return null;
    }
  } catch (e) {
    // invalid URLs should throw a TypeError
    // see for instance: `new URL("");`
    return null;
  }

  return url;
};

var SANITIZE_TEXT_R = /[<>&"']/g;
var SANITIZE_TEXT_CODES = {
  "<": "&lt;",
  ">": "&gt;",
  "&": "&amp;",
  '"': "&quot;",
  "'": "&#x27;",
  "/": "&#x2F;",
  "`": "&#96;"
};

var sanitizeText = function sanitizeText(text) {
  return String(text).replace(SANITIZE_TEXT_R, function (chr) {
    return SANITIZE_TEXT_CODES[chr];
  });
};

var UNESCAPE_URL_R = /\\([^0-9A-Za-z\s])/g;

var unescapeUrl = function unescapeUrl(rawUrlString) {
  return rawUrlString.replace(UNESCAPE_URL_R, "$1");
};
/**
 * Parse some content with the parser `parse`, with state.inline
 * set to true. Useful for block elements; not generally necessary
 * to be used by inline elements (where state.inline is already true.
 */


var parseInline = function parseInline(parse, content, state) {
  var isCurrentlyInline = state.inline || false;
  state.inline = true;
  var result = parse(content, state);
  state.inline = isCurrentlyInline;
  return result;
};

var parseBlock = function parseBlock(parse, content, state) {
  var isCurrentlyInline = state.inline || false;
  state.inline = false;
  var result = parse(content + "\n\n", state);
  state.inline = isCurrentlyInline;
  return result;
};

var parseCaptureInline = function parseCaptureInline(capture, parse, state) {
  return {
    content: parseInline(parse, capture[1], state)
  };
};

var ignoreCapture = function ignoreCapture() {
  return {};
}; // recognize a `*` `-`, `+`, `1.`, `2.`... list bullet


var LIST_BULLET = "(?:[*+-]|\\d+\\.)"; // recognize the start of a list item:
// leading space plus a bullet plus a space (`   * `)

var LIST_ITEM_PREFIX = "( *)(" + LIST_BULLET + ") +";
var LIST_ITEM_PREFIX_R = new RegExp("^" + LIST_ITEM_PREFIX); // recognize an individual list item:
//  * hi
//    this is part of the same item
//
//    as is this, which is a new paragraph in the same item
//
//  * but this is not part of the same item

var LIST_ITEM_R = new RegExp(LIST_ITEM_PREFIX + "[^\\n]*(?:\\n" + "(?!\\1" + LIST_BULLET + " )[^\\n]*)*(\n|$)", "gm");
var BLOCK_END_R = /\n{2,}$/;
var INLINE_CODE_ESCAPE_BACKTICKS_R = /^ (?= *`)|(` *) $/g; // recognize the end of a paragraph block inside a list item:
// two or more newlines at end end of the item

var LIST_BLOCK_END_R = BLOCK_END_R;
var LIST_ITEM_END_R = / *\n+$/; // check whether a list item has paragraphs: if it does,
// we leave the newlines at the end

var LIST_R = new RegExp("^( *)(" + LIST_BULLET + ") " + "[\\s\\S]+?(?:\n{2,}(?! )" + "(?!\\1" + LIST_BULLET + " )\\n*" + // the \\s*$ here is so that we can parse the inside of nested
// lists, where our content might end before we receive two `\n`s
"|\\s*\n*$)");
var LIST_LOOKBEHIND_R = /(?:^|\n)( *)$/;

var TABLES = function () {
  var TABLE_ROW_SEPARATOR_TRIM = /^ *\| *| *\| *$/g;
  var TABLE_CELL_END_TRIM = / *$/;
  var TABLE_RIGHT_ALIGN = /^ *-+: *$/;
  var TABLE_CENTER_ALIGN = /^ *:-+: *$/;
  var TABLE_LEFT_ALIGN = /^ *:-+ *$/; // TODO: This needs a real type

  var parseTableAlignCapture = function parseTableAlignCapture(alignCapture) {
    if (TABLE_RIGHT_ALIGN.test(alignCapture)) {
      return "right";
    } else if (TABLE_CENTER_ALIGN.test(alignCapture)) {
      return "center";
    } else if (TABLE_LEFT_ALIGN.test(alignCapture)) {
      return "left";
    } else {
      return null;
    }
  };

  var parseTableAlign = function parseTableAlign(source, parse, state, trimEndSeparators) {
    if (trimEndSeparators) {
      source = source.replace(TABLE_ROW_SEPARATOR_TRIM, "");
    }

    var alignText = source.trim().split("|");
    return alignText.map(parseTableAlignCapture);
  };

  var parseTableRow = function parseTableRow(source, parse, state, trimEndSeparators) {
    var prevInTable = state.inTable;
    state.inTable = true;
    var tableRow = parse(source.trim(), state);
    state.inTable = prevInTable;
    var cells = [[]];
    tableRow.forEach(function (node, i) {
      if (node.type === "tableSeparator") {
        // Filter out empty table separators at the start/end:
        if (!trimEndSeparators || i !== 0 && i !== tableRow.length - 1) {
          // Split the current row:
          cells.push([]);
        }
      } else {
        if (node.type === "text" && (tableRow[i + 1] == null || tableRow[i + 1].type === "tableSeparator")) {
          node.content = node.content.replace(TABLE_CELL_END_TRIM, "");
        }

        cells[cells.length - 1].push(node);
      }
    });
    return cells;
  };
  /**
   * @param {string} source
   * @param {SimpleMarkdown.Parser} parse
   * @param {SimpleMarkdown.State} state
   * @param {boolean} trimEndSeparators
   * @returns {SimpleMarkdown.ASTNode[][]}
   */


  var parseTableCells = function parseTableCells(source, parse, state, trimEndSeparators) {
    var rowsText = source.trim().split("\n");
    return rowsText.map(function (rowText) {
      // $FlowFixMe
      return parseTableRow(rowText, parse, state, trimEndSeparators);
    });
  };
  /**
   * @param {boolean} trimEndSeparators
   * @returns {SimpleMarkdown.SingleNodeParseFunction}
   */


  var parseTable = function parseTable(trimEndSeparators) {
    return function (capture, parse, state) {
      state.inline = true;
      var header = parseTableRow(capture[1], parse, state, trimEndSeparators);
      var align = parseTableAlign(capture[2], parse, state, trimEndSeparators);
      var cells = parseTableCells(capture[3], parse, state, trimEndSeparators);
      state.inline = false;
      return {
        type: "table",
        header: header,
        align: align,
        cells: cells
      };
    };
  };

  return {
    parseTable: parseTable(true),
    parseNpTable: parseTable(false),
    TABLE_REGEX: /^ *(\|.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/,
    NPTABLE_REGEX: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/
  };
}();

var LINK_INSIDE = "(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*";
var LINK_HREF_AND_TITLE = "\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*";
var AUTOLINK_MAILTO_CHECK_R = /mailto:/i;

var parseRef = function parseRef(capture, state, refNode) {
  var ref = (capture[2] || capture[1]).replace(/\s+/g, " ").toLowerCase(); // We store information about previously seen defs on
  // state._defs (_ to deconflict with client-defined
  // state). If the def for this reflink/refimage has
  // already been seen, we can use its target/source
  // and title here:

  if (state._defs && state._defs[ref]) {
    var def = state._defs[ref]; // `refNode` can be a link or an image. Both use
    // target and title properties.

    refNode.target = def.target;
    refNode.title = def.title;
  } // In case we haven't seen our def yet (or if someone
  // overwrites that def later on), we add this node
  // to the list of ref nodes for that def. Then, when
  // we find the def, we can modify this link/image AST
  // node :).
  // I'm sorry.


  state._refs = state._refs || {};
  state._refs[ref] = state._refs[ref] || [];

  state._refs[ref].push(refNode);

  return refNode;
};

var currOrder = 0;
var defaultRules = {
  Array: {
    react: function react(arr, output, state) {
      var oldKey = state.key;
      var result = []; // map output over the ast, except group any text
      // nodes together into a single string output.

      for (var i = 0, key = 0; i < arr.length; i++, key++) {
        // `key` is our numerical `state.key`, which we increment for
        // every output node, but don't change for joined text nodes.
        // (i, however, must change for joined text nodes)
        state.key = "" + i;
        var node = arr[i];

        if (node.type === "text") {
          node = {
            type: "text",
            content: node.content
          };

          for (; i + 1 < arr.length && arr[i + 1].type === "text"; i++) {
            node.content += arr[i + 1].content;
          }
        }

        result.push(output(node, state));
      }

      state.key = oldKey;
      return result;
    },
    html: function html(arr, output, state) {
      var result = ""; // map output over the ast, except group any text
      // nodes together into a single string output.

      for (var i = 0; i < arr.length; i++) {
        var node = arr[i];

        if (node.type === "text") {
          node = {
            type: "text",
            content: node.content
          };

          for (; i + 1 < arr.length && arr[i + 1].type === "text"; i++) {
            node.content += arr[i + 1].content;
          }
        }

        result += output(node, state);
      }

      return result;
    }
  },
  heading: {
    order: currOrder++,
    match: blockRegex(/^ *(#{1,6})([^\n]+?)#* *(?:\n *)+\n/),
    parse: function (_parse) {
      function parse(_x, _x2, _x3) {
        return _parse.apply(this, arguments);
      }

      parse.toString = function () {
        return _parse.toString();
      };

      return parse;
    }(function (capture, parse, state) {
      return {
        level: capture[1].length,
        content: parseInline(parse, capture[2].trim(), state)
      };
    }),
    react: function react(node, output, state) {
      return reactElement("h" + node.level, state.key, {
        children: output(node.content, state)
      });
    },
    html: function html(node, output, state) {
      return htmlTag("h" + node.level, output(node.content, state));
    }
  },
  nptable: {
    order: currOrder++,
    match: blockRegex(TABLES.NPTABLE_REGEX),
    parse: TABLES.parseNpTable,
    react: null,
    html: null
  },
  lheading: {
    order: currOrder++,
    match: blockRegex(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/),
    parse: function (_parse2) {
      function parse(_x4, _x5, _x6) {
        return _parse2.apply(this, arguments);
      }

      parse.toString = function () {
        return _parse2.toString();
      };

      return parse;
    }(function (capture, parse, state) {
      return {
        type: "heading",
        level: capture[2] === "=" ? 1 : 2,
        content: parseInline(parse, capture[1], state)
      };
    }),
    react: null,
    html: null
  },
  hr: {
    order: currOrder++,
    match: blockRegex(/^( *[-*_]){3,} *(?:\n *)+\n/),
    parse: ignoreCapture,
    react: function react(node, output, state) {
      return reactElement("hr", state.key, EMPTY_PROPS);
    },
    html: function html(node, output, state) {
      return "<hr>";
    }
  },
  codeBlock: {
    order: currOrder++,
    match: blockRegex(/^(?:    [^\n]+\n*)+(?:\n *)+\n/),
    parse: function (_parse3) {
      function parse(_x7, _x8, _x9) {
        return _parse3.apply(this, arguments);
      }

      parse.toString = function () {
        return _parse3.toString();
      };

      return parse;
    }(function (capture, parse, state) {
      var content = capture[0].replace(/^    /gm, "").replace(/\n+$/, "");
      return {
        lang: undefined,
        content: content
      };
    }),
    react: function react(node, output, state) {
      var className = node.lang ? "markdown-code-" + node.lang : undefined;
      return reactElement("pre", state.key, {
        children: reactElement("code", null, {
          className: className,
          children: node.content
        })
      });
    },
    html: function html(node, output, state) {
      var className = node.lang ? "markdown-code-" + node.lang : undefined;
      var codeBlock = htmlTag("code", sanitizeText(node.content), {
        class: className
      });
      return htmlTag("pre", codeBlock);
    }
  },
  fence: {
    order: currOrder++,
    match: blockRegex(/^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/),
    parse: function (_parse4) {
      function parse(_x10, _x11, _x12) {
        return _parse4.apply(this, arguments);
      }

      parse.toString = function () {
        return _parse4.toString();
      };

      return parse;
    }(function (capture, parse, state) {
      return {
        type: "codeBlock",
        lang: capture[2] || undefined,
        content: capture[3]
      };
    }),
    react: null,
    html: null
  },
  blockQuote: {
    order: currOrder++,
    match: blockRegex(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/),
    parse: function (_parse5) {
      function parse(_x13, _x14, _x15) {
        return _parse5.apply(this, arguments);
      }

      parse.toString = function () {
        return _parse5.toString();
      };

      return parse;
    }(function (capture, parse, state) {
      var content = capture[0].replace(/^ *> ?/gm, "");
      return {
        content: parse(content, state)
      };
    }),
    react: function react(node, output, state) {
      return reactElement("blockquote", state.key, {
        children: output(node.content, state)
      });
    },
    html: function html(node, output, state) {
      return htmlTag("blockquote", output(node.content, state));
    }
  },
  list: {
    order: currOrder++,
    // $FlowFixMe
    match: function match(source, state) {
      // We only want to break into a list if we are at the start of a
      // line. This is to avoid parsing "hi * there" with "* there"
      // becoming a part of a list.
      // You might wonder, "but that's inline, so of course it wouldn't
      // start a list?". You would be correct! Except that some of our
      // lists can be inline, because they might be inside another list,
      // in which case we can parse with inline scope, but need to allow
      // nested lists inside this inline scope.
      var prevCaptureStr = state.prevCapture == null ? "" : state.prevCapture[0];
      var isStartOfLineCapture = LIST_LOOKBEHIND_R.exec(prevCaptureStr);
      var isListBlock = state._list || !state.inline;

      if (isStartOfLineCapture && isListBlock) {
        source = isStartOfLineCapture[1] + source;
        return LIST_R.exec(source);
      } else {
        return null;
      }
    },
    parse: function (_parse6) {
      function parse(_x16, _x17, _x18) {
        return _parse6.apply(this, arguments);
      }

      parse.toString = function () {
        return _parse6.toString();
      };

      return parse;
    }(function (capture, parse, state) {
      var bullet = capture[2];
      var ordered = bullet.length > 1;
      var start = ordered ? +bullet : undefined;
      var items = capture[0].replace(LIST_BLOCK_END_R, "\n").match(LIST_ITEM_R); // We know this will match here, because of how the regexes are
      // defined

      var lastItemWasAParagraph = false;
      var itemContent = items.map(function (item, i) {
        // We need to see how far indented this item is:
        var prefixCapture = LIST_ITEM_PREFIX_R.exec(item);
        var space = prefixCapture ? prefixCapture[0].length : 0; // And then we construct a regex to "unindent" the subsequent
        // lines of the items by that amount:

        var spaceRegex = new RegExp("^ {1," + space + "}", "gm"); // Before processing the item, we need a couple things

        var content = item // remove indents on trailing lines:
        .replace(spaceRegex, "") // remove the bullet:
        .replace(LIST_ITEM_PREFIX_R, ""); // I'm not sur4 why this is necessary again?
        // Handling "loose" lists, like:
        //
        //  * this is wrapped in a paragraph
        //
        //  * as is this
        //
        //  * as is this

        var isLastItem = i === items.length - 1;
        var containsBlocks = content.indexOf("\n\n") !== -1; // Any element in a list is a block if it contains multiple
        // newlines. The last element in the list can also be a block
        // if the previous item in the list was a block (this is
        // because non-last items in the list can end with \n\n, but
        // the last item can't, so we just "inherit" this property
        // from our previous element).

        var thisItemIsAParagraph = containsBlocks || isLastItem && lastItemWasAParagraph;
        lastItemWasAParagraph = thisItemIsAParagraph; // backup our state for restoration afterwards. We're going to
        // want to set state._list to true, and state.inline depending
        // on our list's looseness.

        var oldStateInline = state.inline;
        var oldStateList = state._list;
        state._list = true; // Parse inline if we're in a tight list, or block if we're in
        // a loose list.

        var adjustedContent;

        if (thisItemIsAParagraph) {
          state.inline = false;
          adjustedContent = content.replace(LIST_ITEM_END_R, "\n\n");
        } else {
          state.inline = true;
          adjustedContent = content.replace(LIST_ITEM_END_R, "");
        }

        var result = parse(adjustedContent, state); // Restore our state before returning

        state.inline = oldStateInline;
        state._list = oldStateList;
        return result;
      });
      return {
        ordered: ordered,
        start: start,
        items: itemContent
      };
    }),
    react: function react(node, output, state) {
      var ListWrapper = node.ordered ? "ol" : "ul";
      return reactElement(ListWrapper, state.key, {
        start: node.start,
        children: node.items.map(function (item, i) {
          return reactElement("li", "" + i, {
            children: output(item, state)
          });
        })
      });
    },
    html: function html(node, output, state) {
      var listItems = node.items.map(function (item) {
        return htmlTag("li", output(item, state));
      }).join("");
      var listTag = node.ordered ? "ol" : "ul";
      var attributes = {
        start: node.start
      };
      return htmlTag(listTag, listItems, attributes);
    }
  },
  def: {
    order: currOrder++,
    // TODO(aria): This will match without a blank line before the next
    // block element, which is inconsistent with most of the rest of
    // simple-markdown.
    match: blockRegex(/^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/),
    parse: function (_parse7) {
      function parse(_x19, _x20, _x21) {
        return _parse7.apply(this, arguments);
      }

      parse.toString = function () {
        return _parse7.toString();
      };

      return parse;
    }(function (capture, parse, state) {
      var def = capture[1].replace(/\s+/g, " ").toLowerCase();
      var target = capture[2];
      var title = capture[3]; // Look for previous links/images using this def
      // If any links/images using this def have already been declared,
      // they will have added themselves to the state._refs[def] list
      // (_ to deconflict with client-defined state). We look through
      // that list of reflinks for this def, and modify those AST nodes
      // with our newly found information now.
      // Sorry :(.

      if (state._refs && state._refs[def]) {
        // `refNode` can be a link or an image
        state._refs[def].forEach(function (refNode) {
          refNode.target = target;
          refNode.title = title;
        });
      } // Add this def to our map of defs for any future links/images
      // In case we haven't found any or all of the refs referring to
      // this def yet, we add our def to the table of known defs, so
      // that future reflinks can modify themselves appropriately with
      // this information.


      state._defs = state._defs || {};
      state._defs[def] = {
        target: target,
        title: title
      }; // return the relevant parsed information
      // for debugging only.

      return {
        def: def,
        target: target,
        title: title
      };
    }),
    react: function react() {
      return null;
    },
    html: function html() {
      return "";
    }
  },
  table: {
    order: currOrder++,
    match: blockRegex(TABLES.TABLE_REGEX),
    parse: TABLES.parseTable,
    react: function react(node, output, state) {
      var getStyle = function getStyle(colIndex) {
        return node.align[colIndex] == null ? {} : {
          textAlign: node.align[colIndex]
        };
      };

      var headers = node.header.map(function (content, i) {
        return reactElement("th", "" + i, {
          style: getStyle(i),
          scope: "col",
          children: output(content, state)
        });
      });
      var rows = node.cells.map(function (row, r) {
        return reactElement("tr", "" + r, {
          children: row.map(function (content, c) {
            return reactElement("td", "" + c, {
              style: getStyle(c),
              children: output(content, state)
            });
          })
        });
      });
      return reactElement("table", state.key, {
        children: [reactElement("thead", "thead", {
          children: reactElement("tr", null, {
            children: headers
          })
        }), reactElement("tbody", "tbody", {
          children: rows
        })]
      });
    },
    html: function html(node, output, state) {
      var getStyle = function getStyle(colIndex) {
        return node.align[colIndex] == null ? "" : "text-align:" + node.align[colIndex] + ";";
      };

      var headers = node.header.map(function (content, i) {
        return htmlTag("th", output(content, state), {
          style: getStyle(i),
          scope: "col"
        });
      }).join("");
      var rows = node.cells.map(function (row) {
        var cols = row.map(function (content, c) {
          return htmlTag("td", output(content, state), {
            style: getStyle(c)
          });
        }).join("");
        return htmlTag("tr", cols);
      }).join("");
      var thead = htmlTag("thead", htmlTag("tr", headers));
      var tbody = htmlTag("tbody", rows);
      return htmlTag("table", thead + tbody);
    }
  },
  newline: {
    order: currOrder++,
    match: blockRegex(/^(?:\n *)*\n/),
    parse: ignoreCapture,
    react: function react(node, output, state) {
      return "\n";
    },
    html: function html(node, output, state) {
      return "\n";
    }
  },
  paragraph: {
    order: currOrder++,
    match: blockRegex(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/),
    parse: parseCaptureInline,
    react: function react(node, output, state) {
      return reactElement("div", state.key, {
        className: "paragraph",
        children: output(node.content, state)
      });
    },
    html: function html(node, output, state) {
      var attributes = {
        class: "paragraph"
      };
      return htmlTag("div", output(node.content, state), attributes);
    }
  },
  escape: {
    order: currOrder++,
    // We don't allow escaping numbers, letters, or spaces here so that
    // backslashes used in plain text still get rendered. But allowing
    // escaping anything else provides a very flexible escape mechanism,
    // regardless of how this grammar is extended.
    match: inlineRegex(/^\\([^0-9A-Za-z\s])/),
    parse: function (_parse8) {
      function parse(_x22, _x23, _x24) {
        return _parse8.apply(this, arguments);
      }

      parse.toString = function () {
        return _parse8.toString();
      };

      return parse;
    }(function (capture, parse, state) {
      return {
        type: "text",
        content: capture[1]
      };
    }),
    react: null,
    html: null
  },
  tableSeparator: {
    order: currOrder++,
    // $FlowFixMe
    match: function match(source, state) {
      if (!state.inTable) {
        return null;
      }

      return /^ *\| */.exec(source);
    },
    parse: function parse() {
      return {
        type: "tableSeparator"
      };
    },
    // These shouldn't be reached, but in case they are, be reasonable:
    react: function react() {
      return " | ";
    },
    html: function html() {
      return " &vert; ";
    }
  },
  autolink: {
    order: currOrder++,
    match: inlineRegex(/^<([^: >]+:\/[^ >]+)>/),
    parse: function (_parse9) {
      function parse(_x25, _x26, _x27) {
        return _parse9.apply(this, arguments);
      }

      parse.toString = function () {
        return _parse9.toString();
      };

      return parse;
    }(function (capture, parse, state) {
      return {
        type: "link",
        content: [{
          type: "text",
          content: capture[1]
        }],
        target: capture[1]
      };
    }),
    react: null,
    html: null
  },
  mailto: {
    order: currOrder++,
    match: inlineRegex(/^<([^ >]+@[^ >]+)>/),
    parse: function (_parse10) {
      function parse(_x28, _x29, _x30) {
        return _parse10.apply(this, arguments);
      }

      parse.toString = function () {
        return _parse10.toString();
      };

      return parse;
    }(function (capture, parse, state) {
      var address = capture[1];
      var target = capture[1]; // Check for a `mailto:` already existing in the link:

      if (!AUTOLINK_MAILTO_CHECK_R.test(target)) {
        target = "mailto:" + target;
      }

      return {
        type: "link",
        content: [{
          type: "text",
          content: address
        }],
        target: target
      };
    }),
    react: null,
    html: null
  },
  url: {
    order: currOrder++,
    match: inlineRegex(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/),
    parse: function (_parse11) {
      function parse(_x31, _x32, _x33) {
        return _parse11.apply(this, arguments);
      }

      parse.toString = function () {
        return _parse11.toString();
      };

      return parse;
    }(function (capture, parse, state) {
      return {
        type: "link",
        content: [{
          type: "text",
          content: capture[1]
        }],
        target: capture[1],
        title: undefined
      };
    }),
    react: null,
    html: null
  },
  link: {
    order: currOrder++,
    match: inlineRegex(new RegExp("^\\[(" + LINK_INSIDE + ")\\]\\(" + LINK_HREF_AND_TITLE + "\\)")),
    parse: function (_parse12) {
      function parse(_x34, _x35, _x36) {
        return _parse12.apply(this, arguments);
      }

      parse.toString = function () {
        return _parse12.toString();
      };

      return parse;
    }(function (capture, parse, state) {
      var link = {
        content: parse(capture[1], state),
        target: unescapeUrl(capture[2]),
        title: capture[3]
      };
      return link;
    }),
    react: function react(node, output, state) {
      return reactElement("a", state.key, {
        href: sanitizeUrl(node.target),
        title: node.title,
        children: output(node.content, state)
      });
    },
    html: function html(node, output, state) {
      var attributes = {
        href: sanitizeUrl(node.target),
        title: node.title
      };
      return htmlTag("a", output(node.content, state), attributes);
    }
  },
  image: {
    order: currOrder++,
    match: inlineRegex(new RegExp("^!\\[(" + LINK_INSIDE + ")\\]\\(" + LINK_HREF_AND_TITLE + "\\)")),
    parse: function (_parse13) {
      function parse(_x37, _x38, _x39) {
        return _parse13.apply(this, arguments);
      }

      parse.toString = function () {
        return _parse13.toString();
      };

      return parse;
    }(function (capture, parse, state) {
      var image = {
        alt: capture[1],
        target: unescapeUrl(capture[2]),
        title: capture[3]
      };
      return image;
    }),
    react: function react(node, output, state) {
      return reactElement("img", state.key, {
        src: sanitizeUrl(node.target),
        alt: node.alt,
        title: node.title
      });
    },
    html: function html(node, output, state) {
      var attributes = {
        src: sanitizeUrl(node.target),
        alt: node.alt,
        title: node.title
      };
      return htmlTag("img", "", attributes, false);
    }
  },
  reflink: {
    order: currOrder++,
    match: inlineRegex(new RegExp( // The first [part] of the link
    "^\\[(" + LINK_INSIDE + ")\\]" + // The [ref] target of the link
    "\\s*\\[([^\\]]*)\\]")),
    parse: function (_parse14) {
      function parse(_x40, _x41, _x42) {
        return _parse14.apply(this, arguments);
      }

      parse.toString = function () {
        return _parse14.toString();
      };

      return parse;
    }(function (capture, parse, state) {
      return parseRef(capture, state, {
        type: "link",
        content: parse(capture[1], state)
      });
    }),
    react: null,
    html: null
  },
  refimage: {
    order: currOrder++,
    match: inlineRegex(new RegExp( // The first [part] of the link
    "^!\\[(" + LINK_INSIDE + ")\\]" + // The [ref] target of the link
    "\\s*\\[([^\\]]*)\\]")),
    parse: function (_parse15) {
      function parse(_x43, _x44, _x45) {
        return _parse15.apply(this, arguments);
      }

      parse.toString = function () {
        return _parse15.toString();
      };

      return parse;
    }(function (capture, parse, state) {
      return parseRef(capture, state, {
        type: "image",
        alt: capture[1]
      });
    }),
    react: null,
    html: null
  },
  em: {
    order: currOrder
    /* same as strong/u */
    ,
    match: inlineRegex(new RegExp( // only match _s surrounding words.
    "^\\b_" + "((?:__|\\\\[\\s\\S]|[^\\\\_])+?)_" + "\\b" + // Or match *s:
    "|" + // Only match *s that are followed by a non-space:
    "^\\*(?=\\S)(" + // Match at least one of:
    "(?:" + //  - `**`: so that bolds inside italics don't close the
    //          italics
    "\\*\\*|" + //  - escape sequence: so escaped *s don't close us
    "\\\\[\\s\\S]|" + //  - whitespace: followed by a non-* (we don't
    //          want ' *' to close an italics--it might
    //          start a list)
    "\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|" + //  - non-whitespace, non-*, non-backslash characters
    "[^\\s\\*\\\\]" + ")+?" + // followed by a non-space, non-* then *
    ")\\*(?!\\*)")),
    quality: function quality(capture) {
      // precedence by length, `em` wins ties:
      return capture[0].length + 0.2;
    },
    parse: function (_parse16) {
      function parse(_x46, _x47, _x48) {
        return _parse16.apply(this, arguments);
      }

      parse.toString = function () {
        return _parse16.toString();
      };

      return parse;
    }(function (capture, parse, state) {
      return {
        content: parse(capture[2] || capture[1], state)
      };
    }),
    react: function react(node, output, state) {
      return reactElement("em", state.key, {
        children: output(node.content, state)
      });
    },
    html: function html(node, output, state) {
      return htmlTag("em", output(node.content, state));
    }
  },
  strong: {
    order: currOrder
    /* same as em */
    ,
    match: inlineRegex(/^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/),
    quality: function quality(capture) {
      // precedence by length, wins ties vs `u`:
      return capture[0].length + 0.1;
    },
    parse: parseCaptureInline,
    react: function react(node, output, state) {
      return reactElement("strong", state.key, {
        children: output(node.content, state)
      });
    },
    html: function html(node, output, state) {
      return htmlTag("strong", output(node.content, state));
    }
  },
  u: {
    order: currOrder++
    /* same as em&strong; increment for next rule */
    ,
    match: inlineRegex(/^__((?:\\[\s\S]|[^\\])+?)__(?!_)/),
    quality: function quality(capture) {
      // precedence by length, loses all ties
      return capture[0].length;
    },
    parse: parseCaptureInline,
    react: function react(node, output, state) {
      return reactElement("u", state.key, {
        children: output(node.content, state)
      });
    },
    html: function html(node, output, state) {
      return htmlTag("u", output(node.content, state));
    }
  },
  del: {
    order: currOrder++,
    match: inlineRegex(/^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~\\]|\s(?!~~))+?)~~/),
    parse: parseCaptureInline,
    react: function react(node, output, state) {
      return reactElement("del", state.key, {
        children: output(node.content, state)
      });
    },
    html: function html(node, output, state) {
      return htmlTag("del", output(node.content, state));
    }
  },
  inlineCode: {
    order: currOrder++,
    match: inlineRegex(/^(`+)([\s\S]*?[^`])\1(?!`)/),
    parse: function (_parse17) {
      function parse(_x49, _x50, _x51) {
        return _parse17.apply(this, arguments);
      }

      parse.toString = function () {
        return _parse17.toString();
      };

      return parse;
    }(function (capture, parse, state) {
      return {
        content: capture[2].replace(INLINE_CODE_ESCAPE_BACKTICKS_R, "$1")
      };
    }),
    react: function react(node, output, state) {
      return reactElement("code", state.key, {
        children: node.content
      });
    },
    html: function html(node, output, state) {
      return htmlTag("code", sanitizeText(node.content));
    }
  },
  br: {
    order: currOrder++,
    match: anyScopeRegex(/^ {2,}\n/),
    parse: ignoreCapture,
    react: function react(node, output, state) {
      return reactElement("br", state.key, EMPTY_PROPS);
    },
    html: function html(node, output, state) {
      return "<br>";
    }
  },
  text: {
    order: currOrder++,
    // Here we look for anything followed by non-symbols,
    // double newlines, or double-space-newlines
    // We break on any symbol characters so that this grammar
    // is easy to extend without needing to modify this regex
    match: anyScopeRegex(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/),
    parse: function (_parse18) {
      function parse(_x52, _x53, _x54) {
        return _parse18.apply(this, arguments);
      }

      parse.toString = function () {
        return _parse18.toString();
      };

      return parse;
    }(function (capture, parse, state) {
      return {
        content: capture[0]
      };
    }),
    react: function react(node, output, state) {
      return node.content;
    },
    html: function html(node, output, state) {
      return sanitizeText(node.content);
    }
  }
};
/** (deprecated) */

var ruleOutput = function ruleOutput( // $FlowFixMe
rules, property) {
  if (!property && typeof console !== "undefined") {
    console.warn("simple-markdown ruleOutput should take 'react' or " + "'html' as the second argument.");
  }

  var nestedRuleOutput = function nestedRuleOutput(ast, outputFunc, state) {
    return rules[ast.type][property](ast, outputFunc, state);
  };

  return nestedRuleOutput;
};
/** (deprecated)
 */


var reactFor = function reactFor(outputFunc) {
  var nestedOutput = function nestedOutput(ast, state) {
    state = state || {};

    if (Array.isArray(ast)) {
      var oldKey = state.key;
      var result = []; // map nestedOutput over the ast, except group any text
      // nodes together into a single string output.

      var lastResult = null;

      for (var i = 0; i < ast.length; i++) {
        state.key = "" + i;
        var nodeOut = nestedOutput(ast[i], state);

        if (typeof nodeOut === "string" && typeof lastResult === "string") {
          lastResult = lastResult + nodeOut;
          result[result.length - 1] = lastResult;
        } else {
          result.push(nodeOut);
          lastResult = nodeOut;
        }
      }

      state.key = oldKey;
      return result;
    } else {
      return outputFunc(ast, nestedOutput, state);
    }
  };

  return nestedOutput;
};
/** (deprecated)
 */


var htmlFor = function htmlFor(outputFunc) {
  var nestedOutput = function nestedOutput(ast, state) {
    state = state || {};

    if (Array.isArray(ast)) {
      return ast.map(function (node) {
        return nestedOutput(node, state);
      }).join("");
    } else {
      return outputFunc(ast, nestedOutput, state);
    }
  };

  return nestedOutput;
};

var outputFor = function outputFor(rules, property) {
  var defaultState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!property) {
    throw new Error("simple-markdown: outputFor: `property` must be " + "defined. " + "if you just upgraded, you probably need to replace `outputFor` " + "with `reactFor`");
  }

  var latestState; // $FlowFixMe[incompatible-type]

  var arrayRule = rules.Array || defaultRules.Array; // Tricks to convince tsc that this var is not null:

  var arrayRuleCheck = arrayRule[property];

  if (!arrayRuleCheck) {
    throw new Error("simple-markdown: outputFor: to join nodes of type `" + property + "` you must provide an `Array:` joiner rule with that type, " + "Please see the docs for details on specifying an Array rule.");
  }

  var arrayRuleOutput = arrayRuleCheck;

  var nestedOutput = function nestedOutput(ast, state) {
    state = state || latestState;
    latestState = state;

    if (Array.isArray(ast)) {
      return arrayRuleOutput(ast, nestedOutput, state);
    } else {
      return rules[ast.type][property](ast, nestedOutput, state);
    }
  };

  var outerOutput = function outerOutput(ast, state) {
    latestState = populateInitialState(state, defaultState);
    return nestedOutput(ast, latestState);
  };

  return outerOutput;
}; // $FlowFixMe[incompatible-call]


var defaultRawParse = parserFor(defaultRules);

var defaultBlockParse = function defaultBlockParse(source, state) {
  state = state || {};
  state.inline = false;
  return defaultRawParse(source, state);
};

var defaultInlineParse = function defaultInlineParse(source, state) {
  state = state || {};
  state.inline = true;
  return defaultRawParse(source, state);
};

var defaultImplicitParse = function defaultImplicitParse(source, state) {
  var isBlock = BLOCK_END_R.test(source);
  state = state || {};
  state.inline = !isBlock;
  return defaultRawParse(source, state);
}; // $FlowFixMe[incompatible-call]


var defaultReactOutput = outputFor(defaultRules, "react"); // $FlowFixMe[incompatible-call]

var defaultHtmlOutput = outputFor(defaultRules, "html");

var markdownToReact = function markdownToReact(source, state) {
  return defaultReactOutput(defaultBlockParse(source, state), state);
};

var markdownToHtml = function markdownToHtml(source, state) {
  return defaultHtmlOutput(defaultBlockParse(source, state), state);
}; // TODO: This needs definition


var ReactMarkdown = function ReactMarkdown(props) {
  var divProps = {};

  for (var prop in props) {
    if (prop !== "source" && // $FlowFixMe
    Object.prototype.hasOwnProperty.call(props, prop)) {
      divProps[prop] = props[prop];
    }
  }

  divProps.children = markdownToReact(props.source);
  return reactElement("div", null, divProps);
};

// $FlowFixMe
var SimpleMarkdown = {
  defaultRules: defaultRules,
  parserFor: parserFor,
  outputFor: outputFor,
  inlineRegex: inlineRegex,
  blockRegex: blockRegex,
  anyScopeRegex: anyScopeRegex,
  parseInline: parseInline,
  parseBlock: parseBlock,
  // default wrappers:
  markdownToReact: markdownToReact,
  markdownToHtml: markdownToHtml,
  ReactMarkdown: ReactMarkdown,
  defaultBlockParse: defaultBlockParse,
  defaultInlineParse: defaultInlineParse,
  defaultImplicitParse: defaultImplicitParse,
  defaultReactOutput: defaultReactOutput,
  defaultHtmlOutput: defaultHtmlOutput,
  preprocess: preprocess,
  sanitizeText: sanitizeText,
  sanitizeUrl: sanitizeUrl,
  unescapeUrl: unescapeUrl,
  htmlTag: htmlTag,
  reactElement: reactElement,
  // deprecated:
  defaultRawParse: defaultRawParse,
  ruleOutput: ruleOutput,
  reactFor: reactFor,
  htmlFor: htmlFor,
  defaultParse: function defaultParse() {
    if (typeof console !== "undefined") {
      console.warn("defaultParse is deprecated, please use `defaultImplicitParse`");
    }

    return defaultImplicitParse.apply(null, arguments);
  },
  defaultOutput: function defaultOutput() {
    if (typeof console !== "undefined") {
      console.warn("defaultOutput is deprecated, please use `defaultReactOutput`");
    }

    return defaultReactOutput.apply(null, arguments);
  }
};


//# sourceMappingURL=index.js.map


/***/ }),

/***/ 86353:
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
// EXTERNAL MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/graphlib/index.js
var graphlib = __webpack_require__(42521);
;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/dagre/data/list.js
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

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/dagre/greedy-fas.js




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

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/dagre/acyclic.js





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
;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/dagre/util.js





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

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/dagre/add-border-segments.js





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

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/dagre/coordinate-system.js




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

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/dagre/normalize.js





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
;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/dagre/rank/util.js




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

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/dagre/rank/feasible-tree.js






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
;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/graphlib/alg/dijkstra.js





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

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/graphlib/alg/dijkstra-all.js





function dijkstraAll(g, weightFunc, edgeFunc) {
  return _.transform(
    g.nodes(),
    function (acc, v) {
      acc[v] = dijkstra(g, v, weightFunc, edgeFunc);
    },
    {}
  );
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/graphlib/alg/floyd-warshall.js




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
;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/graphlib/alg/topsort.js




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

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/graphlib/alg/is-acyclic.js




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
;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/graphlib/alg/dfs.js




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

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/graphlib/alg/postorder.js




function postorder(g, vs) {
  return dfs(g, vs, 'post');
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/graphlib/alg/preorder.js




function preorder(g, vs) {
  return dfs(g, vs, 'pre');
}

// EXTERNAL MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/graphlib/graph.js
var graph = __webpack_require__(9003);
;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/graphlib/alg/prim.js






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

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/graphlib/alg/index.js














;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/dagre/rank/network-simplex.js








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

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/dagre/rank/index.js






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
;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/dagre/nesting-graph.js





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
;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/dagre/order/add-subgraph-constraints.js




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

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/dagre/order/build-layer-graph.js





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
;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/dagre/order/cross-count.js




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

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/dagre/order/init-order.js




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

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/dagre/order/barycenter.js




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

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/dagre/order/resolve-conflicts.js




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

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/dagre/order/sort.js





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

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/dagre/order/sort-subgraph.js







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

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/dagre/order/index.js











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

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/dagre/parent-dummy-chains.js




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

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseForOwn.js
var _baseForOwn = __webpack_require__(52110);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_castFunction.js
var _castFunction = __webpack_require__(53496);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/forOwn.js



/**
 * Iterates over own enumerable string keyed properties of an object and
 * invokes `iteratee` for each property. The iteratee is invoked with three
 * arguments: (value, key, object). Iteratee functions may exit iteration
 * early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forOwnRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forOwn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forOwn(object, iteratee) {
  return object && (0,_baseForOwn/* default */.Z)(object, (0,_castFunction/* default */.Z)(iteratee));
}

/* harmony default export */ const lodash_es_forOwn = (forOwn);

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/forIn.js
var forIn = __webpack_require__(52687);
;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/dagre/position/bk.js




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

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/dagre/position/index.js






function position(g) {
  g = asNonCompoundGraph(g);

  positionY(g);
  lodash_es_forOwn(positionX(g), function (x, v) {
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

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/dagre/layout.js















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

;// CONCATENATED MODULE: ./node_modules/.pnpm/dagre-d3-es@7.0.10/node_modules/dagre-d3-es/src/dagre/index.js








/***/ }),

/***/ 9003:
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

/***/ 42521:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* reexport safe */ _graph_js__WEBPACK_IMPORTED_MODULE_0__.k)
/* harmony export */ });
/* unused harmony export version */
/* harmony import */ var _graph_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9003);
// Includes only the "core" of graphlib



const version = '2.1.9-pre';




/***/ }),

/***/ 50442:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ write)
/* harmony export */ });
/* unused harmony export read */
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71180);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25043);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55247);
/* harmony import */ var _graph_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9003);





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

/***/ 21864:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createText)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63321);
/* harmony import */ var _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24197);
/* harmony import */ var _mermaidAPI_3ae0f2f0_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2769);
/* harmony import */ var _khanacademy_simple_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95805);




function preprocessMarkdown(markdown) {
  const withoutMultipleNewlines = markdown.replace(/\n{2,}/g, "\n");
  const withoutExtraSpaces = withoutMultipleNewlines.replace(/^\s+/gm, "");
  return withoutExtraSpaces;
}
function markdownToLines(markdown) {
  const preprocessedMarkdown = preprocessMarkdown(markdown);
  const mdParse = _khanacademy_simple_markdown__WEBPACK_IMPORTED_MODULE_1__/* ["default"].defaultBlockParse */ .Z.defaultBlockParse;
  const syntaxTree = mdParse(preprocessedMarkdown);
  let lines = [[]];
  let currentLine = 0;
  function processNode(node, parentType) {
    if (node.type === "text") {
      const textLines = node.content.split("\n");
      textLines.forEach((textLine, index) => {
        if (index !== 0) {
          currentLine++;
          lines.push([]);
        }
        textLine.split(" ").forEach((word) => {
          if (word) {
            lines[currentLine].push({ content: word, type: parentType || "normal" });
          }
        });
      });
    } else if (node.type === "strong" || node.type === "em") {
      node.content.forEach((contentNode) => {
        processNode(contentNode, node.type);
      });
    }
  }
  syntaxTree.forEach((treeNode) => {
    if (treeNode.type === "paragraph") {
      treeNode.content.forEach((contentNode) => {
        processNode(contentNode);
      });
    }
  });
  return lines;
}
function markdownToHTML(markdown) {
  const mdParse = _khanacademy_simple_markdown__WEBPACK_IMPORTED_MODULE_1__/* ["default"].defaultBlockParse */ .Z.defaultBlockParse;
  const syntaxTree = mdParse(markdown);
  function output(node) {
    if (node.type === "text") {
      return node.content.replace(/\n/g, "<br/>");
    } else if (node.type === "strong") {
      return `<strong>${node.content.map(output).join("")}</strong>`;
    } else if (node.type === "em") {
      return `<em>${node.content.map(output).join("")}</em>`;
    } else if (node.type === "paragraph") {
      return `<p>${node.content.map(output).join("")}</p>`;
    } else {
      return "";
    }
  }
  return syntaxTree.map(output).join("");
}
function applyStyle(dom, styleFn) {
  if (styleFn) {
    dom.attr("style", styleFn);
  }
}
function addHtmlSpan(element, node, width, classes) {
  const fo = element.append("foreignObject");
  const div = fo.append("xhtml:div");
  const label = node.label;
  const labelClass = node.isNode ? "nodeLabel" : "edgeLabel";
  div.html(
    `<span class="${labelClass} ${classes}" ` + (node.labelStyle ? 'style="' + node.labelStyle + '"' : "") + ">" + label + "</span>"
  );
  applyStyle(div, node.labelStyle);
  div.style("display", "table-cell");
  div.style("white-space", "nowrap");
  div.style("max-width", width + "px");
  div.attr("xmlns", "http://www.w3.org/1999/xhtml");
  let bbox = div.node().getBoundingClientRect();
  if (bbox.width === width) {
    div.style("display", "table");
    div.style("white-space", "break-spaces");
    div.style("width", width + "px");
    bbox = div.node().getBoundingClientRect();
  }
  fo.style("width", bbox.width);
  fo.style("height", bbox.height);
  return fo.node();
}
function createTspan(textElement, lineIndex, lineHeight) {
  return textElement.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", lineIndex * lineHeight - 0.1 + "em").attr("dy", lineHeight + "em");
}
function createFormattedText(width, g, structuredText, addBackground = false) {
  const lineHeight = 1.1;
  const labelGroup = g.append("g");
  let bkg = labelGroup.insert("rect").attr("class", "background");
  const textElement = labelGroup.append("text").attr("y", "-10.1");
  let lineIndex = -1;
  structuredText.forEach((line) => {
    lineIndex++;
    let tspan = createTspan(textElement, lineIndex, lineHeight);
    let words = [...line].reverse();
    let currentWord;
    let wrappedLine = [];
    while (words.length) {
      currentWord = words.pop();
      wrappedLine.push(currentWord);
      updateTextContentAndStyles(tspan, wrappedLine);
      if (tspan.node().getComputedTextLength() > width) {
        wrappedLine.pop();
        words.push(currentWord);
        updateTextContentAndStyles(tspan, wrappedLine);
        wrappedLine = [];
        lineIndex++;
        tspan = createTspan(textElement, lineIndex, lineHeight);
      }
    }
  });
  if (addBackground) {
    const bbox = textElement.node().getBBox();
    const padding = 2;
    bkg.attr("x", -padding).attr("y", -padding).attr("width", bbox.width + 2 * padding).attr("height", bbox.height + 2 * padding);
    return labelGroup.node();
  } else {
    return textElement.node();
  }
}
function updateTextContentAndStyles(tspan, wrappedLine) {
  tspan.text("");
  wrappedLine.forEach((word, index) => {
    const innerTspan = tspan.append("tspan").attr("font-style", word.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", word.type === "strong" ? "bold" : "normal");
    if (index === 0) {
      innerTspan.text(word.content);
    } else {
      innerTspan.text(" " + word.content);
    }
  });
}
const createText = (el, text = "", {
  style = "",
  isTitle = false,
  classes = "",
  useHtmlLabels = true,
  isNode = true,
  width,
  addSvgBackground = false
} = {}) => {
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_2__.l.info("createText", text, style, isTitle, classes, useHtmlLabels, isNode, addSvgBackground);
  if (useHtmlLabels) {
    const htmlText = markdownToHTML(text);
    const node = {
      isNode,
      label: (0,_mermaidAPI_3ae0f2f0_js__WEBPACK_IMPORTED_MODULE_3__.d)(htmlText).replace(
        /fa[blrs]?:fa-[\w-]+/g,
        (s) => `<i class='${s.replace(":", " ")}'></i>`
      ),
      labelStyle: style.replace("fill:", "color:")
    };
    let vertexNode = addHtmlSpan(el, node, width, classes);
    return vertexNode;
  } else {
    const structuredText = markdownToLines(text);
    const special = ['"', "'", ".", ",", ":", ";", "!", "?", "(", ")", "[", "]", "{", "}"];
    let lastWord;
    structuredText.forEach((line) => {
      line.forEach((word) => {
        if (special.includes(word.content) && lastWord) {
          lastWord.content += word.content;
          word.content = "";
        }
        lastWord = word;
      });
    });
    const svgLabel = createFormattedText(width, el, structuredText, addSvgBackground);
    return svgLabel;
  }
};

//# sourceMappingURL=createText-1f5f8f92.js.map


/***/ }),

/***/ 75866:
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
/* harmony export */   "l": () => (/* binding */ labelHelper),
/* harmony export */   "p": () => (/* binding */ positionNode),
/* harmony export */   "s": () => (/* binding */ setNodeElem),
/* harmony export */   "u": () => (/* binding */ updateNodeBounds)
/* harmony export */ });
/* harmony import */ var _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24197);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63321);
/* harmony import */ var _createText_1f5f8f92_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21864);
/* harmony import */ var _mermaidAPI_3ae0f2f0_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2769);
/* harmony import */ var _svgDraw_2526cba0_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36509);
/* harmony import */ var _utils_d622194a_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57524);






const insertMarkers = (elem, markerArray, type, id) => {
  markerArray.forEach((markerName) => {
    markers[markerName](elem, type, id);
  });
};
const extension = (elem, type, id) => {
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.trace("Making markers for ", id);
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
  if ((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.k)((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.htmlLabels)) {
    vertexText = vertexText.replace(/\\n|\n/g, "<br />");
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.info("vertexText" + vertexText);
    const node = {
      isNode,
      label: (0,_mermaidAPI_3ae0f2f0_js__WEBPACK_IMPORTED_MODULE_2__.d)(vertexText).replace(
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
  const useHtmlLabels = node.useHtmlLabels || (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.k)((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.htmlLabels);
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
  const textNode = label.node();
  let text;
  if (node.labelType === "markdown") {
    text = (0,_createText_1f5f8f92_js__WEBPACK_IMPORTED_MODULE_3__.c)(label, (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.b)((0,_mermaidAPI_3ae0f2f0_js__WEBPACK_IMPORTED_MODULE_2__.d)(labelText), (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.g)()), {
      useHtmlLabels,
      width: node.width || (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.wrappingWidth,
      classes: "markdown-node-label"
    });
  } else {
    text = textNode.appendChild(
      createLabel$1(
        (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.b)((0,_mermaidAPI_3ae0f2f0_js__WEBPACK_IMPORTED_MODULE_2__.d)(labelText), (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.g)()),
        node.labelStyle,
        false,
        isNode
      )
    );
  }
  let bbox = text.getBBox();
  if ((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.k)((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.htmlLabels)) {
    const div = text.children[0];
    const dv = (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)(text);
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  const halfPadding = node.padding / 2;
  if (useHtmlLabels) {
    label.attr("transform", "translate(" + -bbox.width / 2 + ", " + -bbox.height / 2 + ")");
  } else {
    label.attr("transform", "translate(" + 0 + ", " + -bbox.height / 2 + ")");
  }
  if (node.centerLabel) {
    label.attr("transform", "translate(" + -bbox.width / 2 + ", " + -bbox.height / 2 + ")");
  }
  label.insert("rect", ":first-child");
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
  const useHtmlLabels = node.useHtmlLabels || (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.htmlLabels;
  if (!useHtmlLabels) {
    node.centerLabel = true;
  }
  const { shapeSvg, bbox, halfPadding } = labelHelper(parent, node, "node " + node.classes, true);
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.info("Classes = ", node.classes);
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
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.info("Question main (Circle)");
  const questionElem = insertPolygonShape(shapeSvg, s, s, points);
  questionElem.attr("style", node.style);
  updateNodeBounds(node, questionElem);
  node.intersect = function(point2) {
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.warn("Intersect called");
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
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.warn(`Unknown node property ${propKey}`);
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
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.trace("Classes = ", node.classes);
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
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.warn(`Unknown node property ${propKey}`);
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
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.debug("add top border");
    addBorder(totalWidth);
  } else {
    skipBorder(totalWidth);
  }
  if (borders.includes("r")) {
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.debug("add right border");
    addBorder(totalHeight);
  } else {
    skipBorder(totalHeight);
  }
  if (borders.includes("b")) {
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.debug("add bottom border");
    addBorder(totalWidth);
  } else {
    skipBorder(totalWidth);
  }
  if (borders.includes("l")) {
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.debug("add left border");
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
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.info("Label text abc79", title, text2, typeof text2 === "object");
  const text = label.node().appendChild(createLabel$1(title, node.labelStyle, true, true));
  let bbox = { width: 0, height: 0 };
  if ((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.k)((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.htmlLabels)) {
    const div = text.children[0];
    const dv = (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)(text);
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.info("Text 2", text2);
  const textRows = text2.slice(1, text2.length);
  let titleBox = text.getBBox();
  const descr = label.node().appendChild(
    createLabel$1(textRows.join ? textRows.join("<br/>") : textRows, node.labelStyle, true, true)
  );
  if ((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.k)((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.htmlLabels)) {
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
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.info("Circle main");
  updateNodeBounds(node, circle2);
  node.intersect = function(point2) {
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.info("Circle intersect", node, bbox.width / 2 + halfPadding, point2);
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
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.info("DoubleCircle main");
  updateNodeBounds(node, outerCircle);
  node.intersect = function(point2) {
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.info("DoubleCircle intersect", node, bbox.width / 2 + halfPadding + gap, point2);
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
  if ((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.k)((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.htmlLabels)) {
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
    if ((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.htmlLabels) {
      classTitleString += "&lt;" + node.classData.type + "&gt;";
    } else {
      classTitleString += "<" + node.classData.type + ">";
    }
  }
  const classTitleLabel = labelContainer.node().appendChild(createLabel$1(classTitleString, node.labelStyle, true, true));
  (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)(classTitleLabel).attr("class", "classTitle");
  let classTitleBBox = classTitleLabel.getBBox();
  if ((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.k)((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.htmlLabels)) {
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
    const parsedInfo = (0,_svgDraw_2526cba0_js__WEBPACK_IMPORTED_MODULE_4__.p)(str);
    let parsedText = parsedInfo.displayText;
    if ((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.htmlLabels) {
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
    if ((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.k)((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.htmlLabels)) {
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
    const parsedInfo = (0,_svgDraw_2526cba0_js__WEBPACK_IMPORTED_MODULE_4__.p)(str);
    let displayText = parsedInfo.displayText;
    if ((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.htmlLabels) {
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
    if ((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.k)((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.htmlLabels)) {
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
    if ((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.g)().securityLevel === "sandbox") {
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
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.trace(
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
  const useHtmlLabels = (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.k)((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.htmlLabels);
  const labelElement = edge.labelType === "markdown" ? (0,_createText_1f5f8f92_js__WEBPACK_IMPORTED_MODULE_3__.c)(elem, edge.label, {
    style: edge.labelStyle,
    useHtmlLabels,
    addSvgBackground: true
  }) : createLabel$1(edge.label, edge.labelStyle);
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.info("abc82", edge, edge.labelType);
  const edgeLabel = elem.insert("g").attr("class", "edgeLabel");
  const label = edgeLabel.insert("g").attr("class", "label");
  label.node().appendChild(labelElement);
  let bbox = labelElement.getBBox();
  if (useHtmlLabels) {
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
  if ((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.htmlLabels && fo) {
    fo.style.width = value.length * 9 + "px";
    fo.style.height = "12px";
  }
}
const positionEdgeLabel = (edge, paths) => {
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.info("Moving label abc78 ", edge.id, edge.label, edgeLabels[edge.id]);
  let path = paths.updatedPath ? paths.updatedPath : paths.originalPath;
  if (edge.label) {
    const el = edgeLabels[edge.id];
    let x = edge.x;
    let y = edge.y;
    if (path) {
      const pos = _utils_d622194a_js__WEBPACK_IMPORTED_MODULE_5__.u.calcLabelPosition(path);
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.info(
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
      const pos = _utils_d622194a_js__WEBPACK_IMPORTED_MODULE_5__.u.calcTerminalLabelPosition(edge.arrowTypeStart ? 10 : 0, "start_left", path);
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
      const pos = _utils_d622194a_js__WEBPACK_IMPORTED_MODULE_5__.u.calcTerminalLabelPosition(
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
      const pos = _utils_d622194a_js__WEBPACK_IMPORTED_MODULE_5__.u.calcTerminalLabelPosition(edge.arrowTypeEnd ? 10 : 0, "end_left", path);
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
      const pos = _utils_d622194a_js__WEBPACK_IMPORTED_MODULE_5__.u.calcTerminalLabelPosition(edge.arrowTypeEnd ? 10 : 0, "end_right", path);
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
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.warn(`intersection calc abc89:
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
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.warn(`abc89 topp/bott calc, Q ${Q}, q ${q}, R ${R}, r ${r}`, res);
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
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.warn(`sides calc abc89, Q ${Q}, q ${q}, R ${R}, r ${r}`, { _x, _y });
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
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.warn("abc88 cutPathAtIntersect", _points, boundryNode);
  let points = [];
  let lastPointOutside = _points[0];
  let isInside = false;
  _points.forEach((point2) => {
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.info("abc88 checking point", point2, boundryNode);
    if (!outsideNode(boundryNode, point2) && !isInside) {
      const inter = intersection(boundryNode, lastPointOutside, point2);
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.warn("abc88 inside", point2, lastPointOutside, inter);
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.warn("abc88 intersection", inter);
      let pointPresent = false;
      points.forEach((p) => {
        pointPresent = pointPresent || p.x === inter.x && p.y === inter.y;
      });
      if (!points.some((e) => e.x === inter.x && e.y === inter.y)) {
        points.push(inter);
      } else {
        _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.warn("abc88 no intersect", inter, points);
      }
      isInside = true;
    } else {
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.warn("abc88 outside", point2, lastPointOutside);
      lastPointOutside = point2;
      if (!isInside) {
        points.push(point2);
      }
    }
  });
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.warn("abc88 returning points", points);
  return points;
};
const insertEdge = function(elem, e, edge, clusterDb, diagramType, graph) {
  let points = edge.points;
  let pointsHasChanged = false;
  const tail = graph.node(e.v);
  var head = graph.node(e.w);
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.info("abc88 InsertEdge: ", edge);
  if (head.intersect && tail.intersect) {
    points = points.slice(1, edge.points.length - 1);
    points.unshift(tail.intersect(points[0]));
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.info(
      "Last point",
      points[points.length - 1],
      head,
      head.intersect(points[points.length - 1])
    );
    points.push(head.intersect(points[points.length - 1]));
  }
  if (edge.toCluster) {
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.info("to cluster abc88", clusterDb[edge.toCluster]);
    points = cutPathAtIntersect(edge.points, clusterDb[edge.toCluster].node);
    pointsHasChanged = true;
  }
  if (edge.fromCluster) {
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.info("from cluster abc88", clusterDb[edge.fromCluster]);
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
  if ((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.g)().flowchart.arrowMarkerAbsolute || (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.g)().state.arrowMarkerAbsolute) {
    url = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
    url = url.replace(/\(/g, "\\(");
    url = url.replace(/\)/g, "\\)");
  }
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.info("arrowTypeStart", edge.arrowTypeStart);
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.info("arrowTypeEnd", edge.arrowTypeEnd);
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

//# sourceMappingURL=edges-2e77835f.js.map


/***/ }),

/***/ 15526:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var dagre_d3_es_src_dagre_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86353);
/* harmony import */ var dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50442);
/* harmony import */ var _edges_2e77835f_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75866);
/* harmony import */ var _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24197);
/* harmony import */ var dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42521);
/* harmony import */ var _createText_1f5f8f92_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21864);
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
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("In isDecendant", ancenstorId, " ", id, " = ", descendants[ancenstorId].includes(id));
  if (descendants[ancenstorId].includes(id)) {
    return true;
  }
  return false;
};
const edgeInCluster = (edge, clusterId) => {
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Decendants of ", clusterId, " is ", descendants[clusterId]);
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Edge is ", edge);
  if (edge.v === clusterId) {
    return false;
  }
  if (edge.w === clusterId) {
    return false;
  }
  if (!descendants[clusterId]) {
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Tilt, ", clusterId, ",not in decendants");
    return false;
  }
  return descendants[clusterId].includes(edge.v) || isDescendant(edge.v, clusterId) || isDescendant(edge.w, clusterId) || descendants[clusterId].includes(edge.w);
};
const copy = (clusterId, graph, newGraph, rootId) => {
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.warn(
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
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Copying (nodes) clusterId", clusterId, "nodes", nodes);
  nodes.forEach((node) => {
    if (graph.children(node).length > 0) {
      copy(node, graph, newGraph, rootId);
    } else {
      const data = graph.node(node);
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info("cp ", node, " to ", rootId, " with parent ", clusterId);
      newGraph.setNode(node, data);
      if (rootId !== graph.parent(node)) {
        _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Setting parent", node, graph.parent(node));
        newGraph.setParent(node, graph.parent(node));
      }
      if (clusterId !== rootId && node !== clusterId) {
        _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Setting parent", node, clusterId);
        newGraph.setParent(node, clusterId);
      } else {
        _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info("In copy ", clusterId, "root", rootId, "data", graph.node(clusterId), rootId);
        _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.debug(
          "Not Setting parent for node=",
          node,
          "cluster!==rootId",
          clusterId !== rootId,
          "node!==clusterId",
          node !== clusterId
        );
      }
      const edges = graph.edges(node);
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Copying Edges", edges);
      edges.forEach((edge) => {
        _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Edge", edge);
        const data2 = graph.edge(edge.v, edge.w, edge.name);
        _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Edge data", data2, rootId);
        try {
          if (edgeInCluster(edge, rootId)) {
            _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Copying as ", edge.v, edge.w, data2, edge.name);
            newGraph.setEdge(edge.v, edge.w, data2, edge.name);
            _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info("newGraph edges ", newGraph.edges(), newGraph.edge(newGraph.edges()[0]));
          } else {
            _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info(
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
          _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.error(e);
        }
      });
    }
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Removing node", node);
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
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("Searching", id);
  const children = graph.children(id);
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("Searching children of id ", id, children);
  if (children.length < 1) {
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("This is a valid node", id);
    return id;
  }
  for (const child of children) {
    const _id = findNonClusterChild(child, graph);
    if (_id) {
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("Found replacement for", id, " => ", _id);
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
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Opting out, no graph ");
    return;
  } else {
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Opting in, graph ");
  }
  graph.nodes().forEach(function(id) {
    const children = graph.children(id);
    if (children.length > 0) {
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.warn(
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
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Cluster identified", id, descendants);
      edges.forEach((edge) => {
        if (edge.v !== id && edge.w !== id) {
          const d1 = isDescendant(edge.v, id);
          const d2 = isDescendant(edge.w, id);
          if (d1 ^ d2) {
            _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Edge: ", edge, " leaves cluster ", id);
            _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Decendants of XXX ", id, ": ", descendants[id]);
            clusterDb[id].externalConnections = true;
          }
        }
      });
    } else {
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Not a cluster ", id, descendants);
    }
  });
  graph.edges().forEach(function(e) {
    const edge = graph.edge(e);
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e));
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(graph.edge(e)));
    let v = e.v;
    let w = e.w;
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.warn(
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
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Fixing and trixing link to self - removing XXX", e.v, e.w, e.name);
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Fixing and trixing - removing XXX", e.v, e.w, e.name);
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
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Fixing and trixing - removing XXX", e.v, e.w, e.name);
      v = getAnchorId(e.v);
      w = getAnchorId(e.w);
      graph.removeEdge(e.v, e.w, e.name);
      if (v !== e.v) {
        edge.fromCluster = e.v;
      }
      if (w !== e.w) {
        edge.toCluster = e.w;
      }
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Fix Replacing with XXX", v, w, e.name);
      graph.setEdge(v, w, edge, e.name);
    }
  });
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Adjusted Graph", dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__/* .write */ .c(graph));
  extractor(graph, 0);
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.trace(clusterDb);
};
const extractor = (graph, depth) => {
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("extractor - ", depth, dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__/* .write */ .c(graph), graph.children("D"));
  if (depth > 10) {
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.error("Bailing out");
    return;
  }
  let nodes = graph.nodes();
  let hasChildren = false;
  for (const node of nodes) {
    const children = graph.children(node);
    hasChildren = hasChildren || children.length > 0;
  }
  if (!hasChildren) {
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Done, no node has children", graph.nodes());
    return;
  }
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Nodes = ", nodes, depth);
  for (const node of nodes) {
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.debug(
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
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Not a cluster", node, depth);
    } else if (!clusterDb[node].externalConnections && // !graph.parent(node) &&
    graph.children(node) && graph.children(node).length > 0) {
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.warn(
        "Cluster without external connections, without a parent and with children",
        node,
        depth
      );
      const graphSettings = graph.graph();
      let dir = graphSettings.rankdir === "TB" ? "LR" : "TB";
      if (clusterDb[node] && clusterDb[node].clusterData && clusterDb[node].clusterData.dir) {
        dir = clusterDb[node].clusterData.dir;
        _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Fixing dir", clusterDb[node].clusterData.dir, dir);
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
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Old graph before copy", dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__/* .write */ .c(graph));
      copy(node, graph, clusterGraph, node);
      graph.setNode(node, {
        clusterNode: true,
        id: node,
        clusterData: clusterDb[node].clusterData,
        labelText: clusterDb[node].labelText,
        graph: clusterGraph
      });
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("New graph after copy node: (", node, ")", dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__/* .write */ .c(clusterGraph));
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Old graph after copy", dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__/* .write */ .c(graph));
    } else {
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.warn(
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
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.debug(clusterDb);
    }
  }
  nodes = graph.nodes();
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("New list of nodes", nodes);
  for (const node of nodes) {
    const data = graph.node(node);
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.warn(" Now next level", node, data);
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
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Creating subgraph rect for ", node.id, node);
  const shapeSvg = parent.insert("g").attr("class", "cluster" + (node.class ? " " + node.class : "")).attr("id", node.id);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const useHtmlLabels = (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.k)((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.g)().flowchart.htmlLabels);
  const label = shapeSvg.insert("g").attr("class", "cluster-label");
  const text = node.labelType === "markdown" ? (0,_createText_1f5f8f92_js__WEBPACK_IMPORTED_MODULE_5__.c)(label, node.labelText, { style: node.labelStyle, useHtmlLabels }) : label.node().appendChild((0,_edges_2e77835f_js__WEBPACK_IMPORTED_MODULE_6__.c)(node.labelText, node.labelStyle, void 0, true));
  let bbox = text.getBBox();
  if ((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.k)((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.g)().flowchart.htmlLabels)) {
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
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("Data ", node, JSON.stringify(node));
  rect2.attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("x", node.x - width / 2).attr("y", node.y - node.height / 2 - halfPadding).attr("width", width).attr("height", node.height + padding);
  if (useHtmlLabels) {
    label.attr(
      "transform",
      // This puts the labal on top of the box instead of inside it
      "translate(" + (node.x - bbox.width / 2) + ", " + (node.y - node.height / 2) + ")"
    );
  } else {
    label.attr(
      "transform",
      // This puts the labal on top of the box instead of inside it
      "translate(" + node.x + ", " + (node.y - node.height / 2) + ")"
    );
  }
  const rectBox = rect2.node().getBBox();
  node.width = rectBox.width;
  node.height = rectBox.height;
  node.intersect = function(point) {
    return (0,_edges_2e77835f_js__WEBPACK_IMPORTED_MODULE_6__.i)(node, point);
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
    return (0,_edges_2e77835f_js__WEBPACK_IMPORTED_MODULE_6__.i)(node, point);
  };
  return shapeSvg;
};
const roundedWithTitle = (parent, node) => {
  const shapeSvg = parent.insert("g").attr("class", node.classes).attr("id", node.id);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const label = shapeSvg.insert("g").attr("class", "cluster-label");
  const innerRect = shapeSvg.append("rect");
  const text = label.node().appendChild((0,_edges_2e77835f_js__WEBPACK_IMPORTED_MODULE_6__.c)(node.labelText, node.labelStyle, void 0, true));
  let bbox = text.getBBox();
  if ((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.k)((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.g)().flowchart.htmlLabels)) {
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
    "translate(" + (node.x - bbox.width / 2) + ", " + (node.y - node.height / 2 - node.padding / 3 + ((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.k)((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.g)().flowchart.htmlLabels) ? 5 : 3)) + ")"
  );
  const rectBox = rect2.node().getBBox();
  node.height = rectBox.height;
  node.intersect = function(point) {
    return (0,_edges_2e77835f_js__WEBPACK_IMPORTED_MODULE_6__.i)(node, point);
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
    return (0,_edges_2e77835f_js__WEBPACK_IMPORTED_MODULE_6__.i)(node, point);
  };
  return shapeSvg;
};
const shapes = { rect, roundedWithTitle, noteGroup, divider };
let clusterElems = {};
const insertCluster = (elem, node) => {
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("Inserting cluster");
  const shape = node.shape || "rect";
  clusterElems[node.id] = shapes[shape](elem, node);
};
const clear = () => {
  clusterElems = {};
};
const recursiveRender = (_elem, graph, diagramtype, parentCluster) => {
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Graph in recursive render: XXX", dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__/* .write */ .c(graph), parentCluster);
  const dir = graph.graph().rankdir;
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("Dir in recursive render - dir:", dir);
  const elem = _elem.insert("g").attr("class", "root");
  if (!graph.nodes()) {
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info("No nodes found for", graph);
  } else {
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Recursive render XXX", graph.nodes());
  }
  if (graph.edges().length > 0) {
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("Recursive edges", graph.edge(graph.edges()[0]));
  }
  const clusters = elem.insert("g").attr("class", "clusters");
  const edgePaths = elem.insert("g").attr("class", "edgePaths");
  const edgeLabels = elem.insert("g").attr("class", "edgeLabels");
  const nodes = elem.insert("g").attr("class", "nodes");
  graph.nodes().forEach(function(v) {
    const node = graph.node(v);
    if (parentCluster !== void 0) {
      const data = JSON.parse(JSON.stringify(parentCluster.clusterData));
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Setting data for cluster XXX (", v, ") ", data, parentCluster);
      graph.setNode(parentCluster.id, data);
      if (!graph.parent(v)) {
        _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("Setting parent", v, parentCluster.id);
        graph.setParent(v, parentCluster.id, data);
      }
    }
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info("(Insert) Node XXX" + v + ": " + JSON.stringify(graph.node(v)));
    if (node && node.clusterNode) {
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Cluster identified", v, node.width, graph.node(v));
      const o = recursiveRender(nodes, node.graph, diagramtype, graph.node(v));
      const newEl = o.elem;
      (0,_edges_2e77835f_js__WEBPACK_IMPORTED_MODULE_6__.u)(node, newEl);
      node.diff = o.diff || 0;
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Node bounds (abc123)", v, node, node.width, node.x, node.y);
      (0,_edges_2e77835f_js__WEBPACK_IMPORTED_MODULE_6__.s)(newEl, node);
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Recursive render complete ", newEl, node);
    } else {
      if (graph.children(v).length > 0) {
        _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Cluster - the non recursive path XXX", v, node.id, node, graph);
        _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info(findNonClusterChild(node.id, graph));
        clusterDb[node.id] = { id: findNonClusterChild(node.id, graph), node };
      } else {
        _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Node - the non recursive path", v, node.id, node);
        (0,_edges_2e77835f_js__WEBPACK_IMPORTED_MODULE_6__.e)(nodes, graph.node(v), dir);
      }
    }
  });
  graph.edges().forEach(function(e) {
    const edge = graph.edge(e.v, e.w, e.name);
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e));
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Edge " + e.v + " -> " + e.w + ": ", e, " ", JSON.stringify(graph.edge(e)));
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Fix", clusterDb, "ids:", e.v, e.w, "Translateing: ", clusterDb[e.v], clusterDb[e.w]);
    (0,_edges_2e77835f_js__WEBPACK_IMPORTED_MODULE_6__.f)(edgeLabels, edge);
  });
  graph.edges().forEach(function(e) {
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e));
  });
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info("#############################################");
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info("###                Layout                 ###");
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info("#############################################");
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info(graph);
  (0,dagre_d3_es_src_dagre_index_js__WEBPACK_IMPORTED_MODULE_0__/* .layout */ .bK)(graph);
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Graph after layout:", dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__/* .write */ .c(graph));
  let diff = 0;
  sortNodesByHierarchy(graph).forEach(function(v) {
    const node = graph.node(v);
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Position " + v + ": " + JSON.stringify(graph.node(v)));
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info(
      "Position " + v + ": (" + node.x,
      "," + node.y,
      ") width: ",
      node.width,
      " height: ",
      node.height
    );
    if (node && node.clusterNode) {
      (0,_edges_2e77835f_js__WEBPACK_IMPORTED_MODULE_6__.p)(node);
    } else {
      if (graph.children(v).length > 0) {
        insertCluster(clusters, node);
        clusterDb[node.id].node = node;
      } else {
        (0,_edges_2e77835f_js__WEBPACK_IMPORTED_MODULE_6__.p)(node);
      }
    }
  });
  graph.edges().forEach(function(e) {
    const edge = graph.edge(e);
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(edge), edge);
    const paths = (0,_edges_2e77835f_js__WEBPACK_IMPORTED_MODULE_6__.g)(edgePaths, e, edge, clusterDb, diagramtype, graph);
    (0,_edges_2e77835f_js__WEBPACK_IMPORTED_MODULE_6__.h)(edge, paths);
  });
  graph.nodes().forEach(function(v) {
    const n = graph.node(v);
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.info(v, n.type, n.diff);
    if (n.type === "group") {
      diff = n.diff;
    }
  });
  return { elem, diff };
};
const render = (elem, graph, markers, diagramtype, id) => {
  (0,_edges_2e77835f_js__WEBPACK_IMPORTED_MODULE_6__.a)(elem, markers, diagramtype, id);
  (0,_edges_2e77835f_js__WEBPACK_IMPORTED_MODULE_6__.b)();
  (0,_edges_2e77835f_js__WEBPACK_IMPORTED_MODULE_6__.d)();
  clear();
  clear$1();
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Graph at first:", dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__/* .write */ .c(graph));
  adjustClustersAndEdges(graph);
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Graph after:", dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__/* .write */ .c(graph));
  recursiveRender(elem, graph, diagramtype);
};

//# sourceMappingURL=index-5219d011.js.map


/***/ }),

/***/ 36981:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "diagram": () => (/* binding */ diagram)
/* harmony export */ });
/* harmony import */ var _styles_47a825a5_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52188);
/* harmony import */ var dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42521);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63321);
/* harmony import */ var _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24197);
/* harmony import */ var _index_5219d011_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15526);
/* harmony import */ var _utils_d622194a_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57524);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72511);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74637);
/* harmony import */ var dagre_d3_es_src_dagre_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86353);
/* harmony import */ var dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50442);
/* harmony import */ var _khanacademy_simple_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95805);
/* harmony import */ var _braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85804);




















const SHAPE_STATE = "rect";
const SHAPE_STATE_WITH_DESC = "rectWithTitle";
const SHAPE_START = "start";
const SHAPE_END = "end";
const SHAPE_DIVIDER = "divider";
const SHAPE_GROUP = "roundedWithTitle";
const SHAPE_NOTE = "note";
const SHAPE_NOTEGROUP = "noteGroup";
const CSS_DIAGRAM = "statediagram";
const CSS_STATE = "state";
const CSS_DIAGRAM_STATE = `${CSS_DIAGRAM}-${CSS_STATE}`;
const CSS_EDGE = "transition";
const CSS_NOTE = "note";
const CSS_NOTE_EDGE = "note-edge";
const CSS_EDGE_NOTE_EDGE = `${CSS_EDGE} ${CSS_NOTE_EDGE}`;
const CSS_DIAGRAM_NOTE = `${CSS_DIAGRAM}-${CSS_NOTE}`;
const CSS_CLUSTER = "cluster";
const CSS_DIAGRAM_CLUSTER = `${CSS_DIAGRAM}-${CSS_CLUSTER}`;
const CSS_CLUSTER_ALT = "cluster-alt";
const CSS_DIAGRAM_CLUSTER_ALT = `${CSS_DIAGRAM}-${CSS_CLUSTER_ALT}`;
const PARENT = "parent";
const NOTE = "note";
const DOMID_STATE = "state";
const DOMID_TYPE_SPACER = "----";
const NOTE_ID = `${DOMID_TYPE_SPACER}${NOTE}`;
const PARENT_ID = `${DOMID_TYPE_SPACER}${PARENT}`;
const G_EDGE_STYLE = "fill:none";
const G_EDGE_ARROWHEADSTYLE = "fill: #333";
const G_EDGE_LABELPOS = "c";
const G_EDGE_LABELTYPE = "text";
const G_EDGE_THICKNESS = "normal";
let nodeDb = {};
let graphItemCount = 0;
const setConf = function(cnf) {
  const keys = Object.keys(cnf);
  for (const key of keys) {
    cnf[key];
  }
};
const getClasses = function(text, diagramObj) {
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.l.trace("Extracting classes");
  diagramObj.db.clear();
  try {
    diagramObj.parser.parse(text);
    diagramObj.db.extract(diagramObj.db.getRootDocV2());
    return diagramObj.db.getClasses();
  } catch (e) {
    return e;
  }
};
function getClassesFromDbInfo(dbInfoItem) {
  if (dbInfoItem === void 0 || dbInfoItem === null) {
    return "";
  } else {
    if (dbInfoItem.classes) {
      return dbInfoItem.classes.join(" ");
    } else {
      return "";
    }
  }
}
function stateDomId(itemId = "", counter = 0, type = "", typeSpacer = DOMID_TYPE_SPACER) {
  const typeStr = type !== null && type.length > 0 ? `${typeSpacer}${type}` : "";
  return `${DOMID_STATE}-${itemId}${typeStr}-${counter}`;
}
const setupNode = (g, parent, parsedItem, diagramStates, diagramDb, altFlag) => {
  const itemId = parsedItem.id;
  const classStr = getClassesFromDbInfo(diagramStates[itemId]);
  if (itemId !== "root") {
    let shape = SHAPE_STATE;
    if (parsedItem.start === true) {
      shape = SHAPE_START;
    }
    if (parsedItem.start === false) {
      shape = SHAPE_END;
    }
    if (parsedItem.type !== _styles_47a825a5_js__WEBPACK_IMPORTED_MODULE_9__.a) {
      shape = parsedItem.type;
    }
    if (!nodeDb[itemId]) {
      nodeDb[itemId] = {
        id: itemId,
        shape,
        description: _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.e.sanitizeText(itemId, (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.g)()),
        classes: `${classStr} ${CSS_DIAGRAM_STATE}`
      };
    }
    const newNode = nodeDb[itemId];
    if (parsedItem.description) {
      if (Array.isArray(newNode.description)) {
        newNode.shape = SHAPE_STATE_WITH_DESC;
        newNode.description.push(parsedItem.description);
      } else {
        if (newNode.description.length > 0) {
          newNode.shape = SHAPE_STATE_WITH_DESC;
          if (newNode.description === itemId) {
            newNode.description = [parsedItem.description];
          } else {
            newNode.description = [newNode.description, parsedItem.description];
          }
        } else {
          newNode.shape = SHAPE_STATE;
          newNode.description = parsedItem.description;
        }
      }
      newNode.description = _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.e.sanitizeTextOrArray(newNode.description, (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.g)());
    }
    if (newNode.description.length === 1 && newNode.shape === SHAPE_STATE_WITH_DESC) {
      newNode.shape = SHAPE_STATE;
    }
    if (!newNode.type && parsedItem.doc) {
      _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.l.info("Setting cluster for ", itemId, getDir(parsedItem));
      newNode.type = "group";
      newNode.dir = getDir(parsedItem);
      newNode.shape = parsedItem.type === _styles_47a825a5_js__WEBPACK_IMPORTED_MODULE_9__.b ? SHAPE_DIVIDER : SHAPE_GROUP;
      newNode.classes = newNode.classes + " " + CSS_DIAGRAM_CLUSTER + " " + (altFlag ? CSS_DIAGRAM_CLUSTER_ALT : "");
    }
    const nodeData = {
      labelStyle: "",
      shape: newNode.shape,
      labelText: newNode.description,
      // typeof newNode.description === 'object'
      //   ? newNode.description[0]
      //   : newNode.description,
      classes: newNode.classes,
      style: "",
      //styles.style,
      id: itemId,
      dir: newNode.dir,
      domId: stateDomId(itemId, graphItemCount),
      type: newNode.type,
      padding: 15
      //getConfig().flowchart.padding
    };
    nodeData.centerLabel = true;
    if (parsedItem.note) {
      const noteData = {
        labelStyle: "",
        shape: SHAPE_NOTE,
        labelText: parsedItem.note.text,
        classes: CSS_DIAGRAM_NOTE,
        // useHtmlLabels: false,
        style: "",
        // styles.style,
        id: itemId + NOTE_ID + "-" + graphItemCount,
        domId: stateDomId(itemId, graphItemCount, NOTE),
        type: newNode.type,
        padding: 15
        //getConfig().flowchart.padding
      };
      const groupData = {
        labelStyle: "",
        shape: SHAPE_NOTEGROUP,
        labelText: parsedItem.note.text,
        classes: newNode.classes,
        style: "",
        // styles.style,
        id: itemId + PARENT_ID,
        domId: stateDomId(itemId, graphItemCount, PARENT),
        type: "group",
        padding: 0
        //getConfig().flowchart.padding
      };
      graphItemCount++;
      const parentNodeId = itemId + PARENT_ID;
      g.setNode(parentNodeId, groupData);
      g.setNode(noteData.id, noteData);
      g.setNode(itemId, nodeData);
      g.setParent(itemId, parentNodeId);
      g.setParent(noteData.id, parentNodeId);
      let from = itemId;
      let to = noteData.id;
      if (parsedItem.note.position === "left of") {
        from = noteData.id;
        to = itemId;
      }
      g.setEdge(from, to, {
        arrowhead: "none",
        arrowType: "",
        style: G_EDGE_STYLE,
        labelStyle: "",
        classes: CSS_EDGE_NOTE_EDGE,
        arrowheadStyle: G_EDGE_ARROWHEADSTYLE,
        labelpos: G_EDGE_LABELPOS,
        labelType: G_EDGE_LABELTYPE,
        thickness: G_EDGE_THICKNESS
      });
    } else {
      g.setNode(itemId, nodeData);
    }
  }
  if (parent && parent.id !== "root") {
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.l.trace("Setting node ", itemId, " to be child of its parent ", parent.id);
    g.setParent(itemId, parent.id);
  }
  if (parsedItem.doc) {
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.l.trace("Adding nodes children ");
    setupDoc(g, parsedItem, parsedItem.doc, diagramStates, diagramDb, !altFlag);
  }
};
const setupDoc = (g, parentParsedItem, doc, diagramStates, diagramDb, altFlag) => {
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.l.trace("items", doc);
  doc.forEach((item) => {
    switch (item.stmt) {
      case _styles_47a825a5_js__WEBPACK_IMPORTED_MODULE_9__.c:
        setupNode(g, parentParsedItem, item, diagramStates, diagramDb, altFlag);
        break;
      case _styles_47a825a5_js__WEBPACK_IMPORTED_MODULE_9__.a:
        setupNode(g, parentParsedItem, item, diagramStates, diagramDb, altFlag);
        break;
      case _styles_47a825a5_js__WEBPACK_IMPORTED_MODULE_9__.S:
        {
          setupNode(g, parentParsedItem, item.state1, diagramStates, diagramDb, altFlag);
          setupNode(g, parentParsedItem, item.state2, diagramStates, diagramDb, altFlag);
          const edgeData = {
            id: "edge" + graphItemCount,
            arrowhead: "normal",
            arrowTypeEnd: "arrow_barb",
            style: G_EDGE_STYLE,
            labelStyle: "",
            label: _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.e.sanitizeText(item.description, (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.g)()),
            arrowheadStyle: G_EDGE_ARROWHEADSTYLE,
            labelpos: G_EDGE_LABELPOS,
            labelType: G_EDGE_LABELTYPE,
            thickness: G_EDGE_THICKNESS,
            classes: CSS_EDGE
          };
          g.setEdge(item.state1.id, item.state2.id, edgeData, graphItemCount);
          graphItemCount++;
        }
        break;
    }
  });
};
const getDir = (parsedItem, defaultDir = _styles_47a825a5_js__WEBPACK_IMPORTED_MODULE_9__.e) => {
  let dir = defaultDir;
  if (parsedItem.doc) {
    for (let i = 0; i < parsedItem.doc.length; i++) {
      const parsedItemDoc = parsedItem.doc[i];
      if (parsedItemDoc.stmt === "dir") {
        dir = parsedItemDoc.value;
      }
    }
  }
  return dir;
};
const draw = function(text, id, _version, diag) {
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.l.info("Drawing state diagram (v2)", id);
  nodeDb = {};
  let dir = diag.db.getDirection();
  if (dir === void 0) {
    dir = _styles_47a825a5_js__WEBPACK_IMPORTED_MODULE_9__.D;
  }
  const { securityLevel, state: conf } = (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.g)();
  const nodeSpacing = conf.nodeSpacing || 50;
  const rankSpacing = conf.rankSpacing || 50;
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.l.info(diag.db.getRootDocV2());
  diag.db.extract(diag.db.getRootDocV2());
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.l.info(diag.db.getRootDocV2());
  const diagramStates = diag.db.getStates();
  const g = new dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_0__/* .Graph */ .k({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: getDir(diag.db.getRootDocV2()),
    nodesep: nodeSpacing,
    ranksep: rankSpacing,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  setupNode(g, void 0, diag.db.getRootDocV2(), diagramStates, diag.db, true);
  let sandboxElement;
  if (securityLevel === "sandbox") {
    sandboxElement = (0,d3__WEBPACK_IMPORTED_MODULE_1__/* .select */ .Ys)("#i" + id);
  }
  const root = securityLevel === "sandbox" ? (0,d3__WEBPACK_IMPORTED_MODULE_1__/* .select */ .Ys)(sandboxElement.nodes()[0].contentDocument.body) : (0,d3__WEBPACK_IMPORTED_MODULE_1__/* .select */ .Ys)("body");
  const svg = root.select(`[id="${id}"]`);
  const element = root.select("#" + id + " g");
  (0,_index_5219d011_js__WEBPACK_IMPORTED_MODULE_10__.r)(element, g, ["barb"], CSS_DIAGRAM, id);
  const padding = 8;
  _utils_d622194a_js__WEBPACK_IMPORTED_MODULE_11__.u.insertTitle(svg, "statediagramTitleText", conf.titleTopMargin, diag.db.getDiagramTitle());
  const bounds = svg.node().getBBox();
  const width = bounds.width + padding * 2;
  const height = bounds.height + padding * 2;
  svg.attr("class", CSS_DIAGRAM);
  const svgBounds = svg.node().getBBox();
  (0,_utils_d622194a_js__WEBPACK_IMPORTED_MODULE_11__.k)(svg, height, width, conf.useMaxWidth);
  const vBox = `${svgBounds.x - padding} ${svgBounds.y - padding} ${width} ${height}`;
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.l.debug(`viewBox ${vBox}`);
  svg.attr("viewBox", vBox);
  const labels = document.querySelectorAll('[id="' + id + '"] .edgeLabel .label');
  for (const label of labels) {
    const dim = label.getBBox();
    const rect = document.createElementNS("http://www.w3.org/2000/svg", SHAPE_STATE);
    rect.setAttribute("rx", 0);
    rect.setAttribute("ry", 0);
    rect.setAttribute("width", dim.width);
    rect.setAttribute("height", dim.height);
    label.insertBefore(rect, label.firstChild);
  }
};
const renderer = {
  setConf,
  getClasses,
  draw
};
const diagram = {
  parser: _styles_47a825a5_js__WEBPACK_IMPORTED_MODULE_9__.p,
  db: _styles_47a825a5_js__WEBPACK_IMPORTED_MODULE_9__.d,
  renderer,
  styles: _styles_47a825a5_js__WEBPACK_IMPORTED_MODULE_9__.s,
  init: (cnf) => {
    if (!cnf.state) {
      cnf.state = {};
    }
    cnf.state.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    _styles_47a825a5_js__WEBPACK_IMPORTED_MODULE_9__.d.clear();
  }
};

//# sourceMappingURL=stateDiagram-v2-9765461d.js.map


/***/ }),

/***/ 52188:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ DEFAULT_DIAGRAM_DIRECTION),
/* harmony export */   "S": () => (/* binding */ STMT_RELATION),
/* harmony export */   "a": () => (/* binding */ DEFAULT_STATE_TYPE),
/* harmony export */   "b": () => (/* binding */ DIVIDER_TYPE),
/* harmony export */   "c": () => (/* binding */ STMT_STATE),
/* harmony export */   "d": () => (/* binding */ db),
/* harmony export */   "e": () => (/* binding */ DEFAULT_NESTED_DOC_DIR),
/* harmony export */   "p": () => (/* binding */ parser$1),
/* harmony export */   "s": () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24197);
/* harmony import */ var _utils_d622194a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57524);
/* harmony import */ var _mermaidAPI_3ae0f2f0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2769);



var parser = function() {
  var o = function(k, v, o2, l) {
    for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v)
      ;
    return o2;
  }, $V0 = [1, 2], $V1 = [1, 3], $V2 = [1, 5], $V3 = [1, 7], $V4 = [2, 5], $V5 = [1, 15], $V6 = [1, 17], $V7 = [1, 21], $V8 = [1, 22], $V9 = [1, 23], $Va = [1, 24], $Vb = [1, 37], $Vc = [1, 25], $Vd = [1, 26], $Ve = [1, 27], $Vf = [1, 28], $Vg = [1, 29], $Vh = [1, 32], $Vi = [1, 33], $Vj = [1, 34], $Vk = [1, 35], $Vl = [1, 36], $Vm = [1, 39], $Vn = [1, 40], $Vo = [1, 41], $Vp = [1, 42], $Vq = [1, 38], $Vr = [1, 45], $Vs = [1, 4, 5, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 42, 50, 51, 52, 53, 56, 60], $Vt = [1, 4, 5, 14, 15, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 42, 50, 51, 52, 53, 56, 60], $Vu = [1, 4, 5, 7, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 42, 50, 51, 52, 53, 56, 60], $Vv = [4, 5, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 42, 50, 51, 52, 53, 56, 60];
  var parser2 = {
    trace: function trace() {
    },
    yy: {},
    symbols_: { "error": 2, "start": 3, "SPACE": 4, "NL": 5, "directive": 6, "SD": 7, "document": 8, "line": 9, "statement": 10, "classDefStatement": 11, "cssClassStatement": 12, "idStatement": 13, "DESCR": 14, "-->": 15, "HIDE_EMPTY": 16, "scale": 17, "WIDTH": 18, "COMPOSIT_STATE": 19, "STRUCT_START": 20, "STRUCT_STOP": 21, "STATE_DESCR": 22, "AS": 23, "ID": 24, "FORK": 25, "JOIN": 26, "CHOICE": 27, "CONCURRENT": 28, "note": 29, "notePosition": 30, "NOTE_TEXT": 31, "direction": 32, "acc_title": 33, "acc_title_value": 34, "acc_descr": 35, "acc_descr_value": 36, "acc_descr_multiline_value": 37, "classDef": 38, "CLASSDEF_ID": 39, "CLASSDEF_STYLEOPTS": 40, "DEFAULT": 41, "class": 42, "CLASSENTITY_IDS": 43, "STYLECLASS": 44, "openDirective": 45, "typeDirective": 46, "closeDirective": 47, ":": 48, "argDirective": 49, "direction_tb": 50, "direction_bt": 51, "direction_rl": 52, "direction_lr": 53, "eol": 54, ";": 55, "EDGE_STATE": 56, "STYLE_SEPARATOR": 57, "left_of": 58, "right_of": 59, "open_directive": 60, "type_directive": 61, "arg_directive": 62, "close_directive": 63, "$accept": 0, "$end": 1 },
    terminals_: { 2: "error", 4: "SPACE", 5: "NL", 7: "SD", 14: "DESCR", 15: "-->", 16: "HIDE_EMPTY", 17: "scale", 18: "WIDTH", 19: "COMPOSIT_STATE", 20: "STRUCT_START", 21: "STRUCT_STOP", 22: "STATE_DESCR", 23: "AS", 24: "ID", 25: "FORK", 26: "JOIN", 27: "CHOICE", 28: "CONCURRENT", 29: "note", 31: "NOTE_TEXT", 33: "acc_title", 34: "acc_title_value", 35: "acc_descr", 36: "acc_descr_value", 37: "acc_descr_multiline_value", 38: "classDef", 39: "CLASSDEF_ID", 40: "CLASSDEF_STYLEOPTS", 41: "DEFAULT", 42: "class", 43: "CLASSENTITY_IDS", 44: "STYLECLASS", 48: ":", 50: "direction_tb", 51: "direction_bt", 52: "direction_rl", 53: "direction_lr", 55: ";", 56: "EDGE_STATE", 57: "STYLE_SEPARATOR", 58: "left_of", 59: "right_of", 60: "open_directive", 61: "type_directive", 62: "arg_directive", 63: "close_directive" },
    productions_: [0, [3, 2], [3, 2], [3, 2], [3, 2], [8, 0], [8, 2], [9, 2], [9, 1], [9, 1], [10, 1], [10, 1], [10, 1], [10, 2], [10, 3], [10, 4], [10, 1], [10, 2], [10, 1], [10, 4], [10, 3], [10, 6], [10, 1], [10, 1], [10, 1], [10, 1], [10, 4], [10, 4], [10, 1], [10, 1], [10, 2], [10, 2], [10, 1], [11, 3], [11, 3], [12, 3], [6, 3], [6, 5], [32, 1], [32, 1], [32, 1], [32, 1], [54, 1], [54, 1], [13, 1], [13, 1], [13, 3], [13, 3], [30, 1], [30, 1], [45, 1], [46, 1], [49, 1], [47, 1]],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      var $0 = $$.length - 1;
      switch (yystate) {
        case 4:
          yy.setRootDoc($$[$0]);
          return $$[$0];
        case 5:
          this.$ = [];
          break;
        case 6:
          if ($$[$0] != "nl") {
            $$[$0 - 1].push($$[$0]);
            this.$ = $$[$0 - 1];
          }
          break;
        case 7:
        case 8:
          this.$ = $$[$0];
          break;
        case 9:
          this.$ = "nl";
          break;
        case 12:
          this.$ = $$[$0];
          break;
        case 13:
          const stateStmt = $$[$0 - 1];
          stateStmt.description = yy.trimColon($$[$0]);
          this.$ = stateStmt;
          break;
        case 14:
          this.$ = { stmt: "relation", state1: $$[$0 - 2], state2: $$[$0] };
          break;
        case 15:
          const relDescription = yy.trimColon($$[$0]);
          this.$ = { stmt: "relation", state1: $$[$0 - 3], state2: $$[$0 - 1], description: relDescription };
          break;
        case 19:
          this.$ = { stmt: "state", id: $$[$0 - 3], type: "default", description: "", doc: $$[$0 - 1] };
          break;
        case 20:
          var id = $$[$0];
          var description = $$[$0 - 2].trim();
          if ($$[$0].match(":")) {
            var parts = $$[$0].split(":");
            id = parts[0];
            description = [description, parts[1]];
          }
          this.$ = { stmt: "state", id, type: "default", description };
          break;
        case 21:
          this.$ = { stmt: "state", id: $$[$0 - 3], type: "default", description: $$[$0 - 5], doc: $$[$0 - 1] };
          break;
        case 22:
          this.$ = { stmt: "state", id: $$[$0], type: "fork" };
          break;
        case 23:
          this.$ = { stmt: "state", id: $$[$0], type: "join" };
          break;
        case 24:
          this.$ = { stmt: "state", id: $$[$0], type: "choice" };
          break;
        case 25:
          this.$ = { stmt: "state", id: yy.getDividerId(), type: "divider" };
          break;
        case 26:
          this.$ = { stmt: "state", id: $$[$0 - 1].trim(), note: { position: $$[$0 - 2].trim(), text: $$[$0].trim() } };
          break;
        case 30:
          this.$ = $$[$0].trim();
          yy.setAccTitle(this.$);
          break;
        case 31:
        case 32:
          this.$ = $$[$0].trim();
          yy.setAccDescription(this.$);
          break;
        case 33:
        case 34:
          this.$ = { stmt: "classDef", id: $$[$0 - 1].trim(), classes: $$[$0].trim() };
          break;
        case 35:
          this.$ = { stmt: "applyClass", id: $$[$0 - 1].trim(), styleClass: $$[$0].trim() };
          break;
        case 38:
          yy.setDirection("TB");
          this.$ = { stmt: "dir", value: "TB" };
          break;
        case 39:
          yy.setDirection("BT");
          this.$ = { stmt: "dir", value: "BT" };
          break;
        case 40:
          yy.setDirection("RL");
          this.$ = { stmt: "dir", value: "RL" };
          break;
        case 41:
          yy.setDirection("LR");
          this.$ = { stmt: "dir", value: "LR" };
          break;
        case 44:
        case 45:
          this.$ = { stmt: "state", id: $$[$0].trim(), type: "default", description: "" };
          break;
        case 46:
          this.$ = { stmt: "state", id: $$[$0 - 2].trim(), classes: [$$[$0].trim()], type: "default", description: "" };
          break;
        case 47:
          this.$ = { stmt: "state", id: $$[$0 - 2].trim(), classes: [$$[$0].trim()], type: "default", description: "" };
          break;
        case 50:
          yy.parseDirective("%%{", "open_directive");
          break;
        case 51:
          yy.parseDirective($$[$0], "type_directive");
          break;
        case 52:
          $$[$0] = $$[$0].trim().replace(/'/g, '"');
          yy.parseDirective($$[$0], "arg_directive");
          break;
        case 53:
          yy.parseDirective("}%%", "close_directive", "state");
          break;
      }
    },
    table: [{ 3: 1, 4: $V0, 5: $V1, 6: 4, 7: $V2, 45: 6, 60: $V3 }, { 1: [3] }, { 3: 8, 4: $V0, 5: $V1, 6: 4, 7: $V2, 45: 6, 60: $V3 }, { 3: 9, 4: $V0, 5: $V1, 6: 4, 7: $V2, 45: 6, 60: $V3 }, { 3: 10, 4: $V0, 5: $V1, 6: 4, 7: $V2, 45: 6, 60: $V3 }, o([1, 4, 5, 16, 17, 19, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 42, 50, 51, 52, 53, 56, 60], $V4, { 8: 11 }), { 46: 12, 61: [1, 13] }, { 61: [2, 50] }, { 1: [2, 1] }, { 1: [2, 2] }, { 1: [2, 3] }, { 1: [2, 4], 4: $V5, 5: $V6, 6: 30, 9: 14, 10: 16, 11: 18, 12: 19, 13: 20, 16: $V7, 17: $V8, 19: $V9, 22: $Va, 24: $Vb, 25: $Vc, 26: $Vd, 27: $Ve, 28: $Vf, 29: $Vg, 32: 31, 33: $Vh, 35: $Vi, 37: $Vj, 38: $Vk, 42: $Vl, 45: 6, 50: $Vm, 51: $Vn, 52: $Vo, 53: $Vp, 56: $Vq, 60: $V3 }, { 47: 43, 48: [1, 44], 63: $Vr }, o([48, 63], [2, 51]), o($Vs, [2, 6]), { 6: 30, 10: 46, 11: 18, 12: 19, 13: 20, 16: $V7, 17: $V8, 19: $V9, 22: $Va, 24: $Vb, 25: $Vc, 26: $Vd, 27: $Ve, 28: $Vf, 29: $Vg, 32: 31, 33: $Vh, 35: $Vi, 37: $Vj, 38: $Vk, 42: $Vl, 45: 6, 50: $Vm, 51: $Vn, 52: $Vo, 53: $Vp, 56: $Vq, 60: $V3 }, o($Vs, [2, 8]), o($Vs, [2, 9]), o($Vs, [2, 10]), o($Vs, [2, 11]), o($Vs, [2, 12], { 14: [1, 47], 15: [1, 48] }), o($Vs, [2, 16]), { 18: [1, 49] }, o($Vs, [2, 18], { 20: [1, 50] }), { 23: [1, 51] }, o($Vs, [2, 22]), o($Vs, [2, 23]), o($Vs, [2, 24]), o($Vs, [2, 25]), { 30: 52, 31: [1, 53], 58: [1, 54], 59: [1, 55] }, o($Vs, [2, 28]), o($Vs, [2, 29]), { 34: [1, 56] }, { 36: [1, 57] }, o($Vs, [2, 32]), { 39: [1, 58], 41: [1, 59] }, { 43: [1, 60] }, o($Vt, [2, 44], { 57: [1, 61] }), o($Vt, [2, 45], { 57: [1, 62] }), o($Vs, [2, 38]), o($Vs, [2, 39]), o($Vs, [2, 40]), o($Vs, [2, 41]), o($Vu, [2, 36]), { 49: 63, 62: [1, 64] }, o($Vu, [2, 53]), o($Vs, [2, 7]), o($Vs, [2, 13]), { 13: 65, 24: $Vb, 56: $Vq }, o($Vs, [2, 17]), o($Vv, $V4, { 8: 66 }), { 24: [1, 67] }, { 24: [1, 68] }, { 23: [1, 69] }, { 24: [2, 48] }, { 24: [2, 49] }, o($Vs, [2, 30]), o($Vs, [2, 31]), { 40: [1, 70] }, { 40: [1, 71] }, { 44: [1, 72] }, { 24: [1, 73] }, { 24: [1, 74] }, { 47: 75, 63: $Vr }, { 63: [2, 52] }, o($Vs, [2, 14], { 14: [1, 76] }), { 4: $V5, 5: $V6, 6: 30, 9: 14, 10: 16, 11: 18, 12: 19, 13: 20, 16: $V7, 17: $V8, 19: $V9, 21: [1, 77], 22: $Va, 24: $Vb, 25: $Vc, 26: $Vd, 27: $Ve, 28: $Vf, 29: $Vg, 32: 31, 33: $Vh, 35: $Vi, 37: $Vj, 38: $Vk, 42: $Vl, 45: 6, 50: $Vm, 51: $Vn, 52: $Vo, 53: $Vp, 56: $Vq, 60: $V3 }, o($Vs, [2, 20], { 20: [1, 78] }), { 31: [1, 79] }, { 24: [1, 80] }, o($Vs, [2, 33]), o($Vs, [2, 34]), o($Vs, [2, 35]), o($Vt, [2, 46]), o($Vt, [2, 47]), o($Vu, [2, 37]), o($Vs, [2, 15]), o($Vs, [2, 19]), o($Vv, $V4, { 8: 81 }), o($Vs, [2, 26]), o($Vs, [2, 27]), { 4: $V5, 5: $V6, 6: 30, 9: 14, 10: 16, 11: 18, 12: 19, 13: 20, 16: $V7, 17: $V8, 19: $V9, 21: [1, 82], 22: $Va, 24: $Vb, 25: $Vc, 26: $Vd, 27: $Ve, 28: $Vf, 29: $Vg, 32: 31, 33: $Vh, 35: $Vi, 37: $Vj, 38: $Vk, 42: $Vl, 45: 6, 50: $Vm, 51: $Vn, 52: $Vo, 53: $Vp, 56: $Vq, 60: $V3 }, o($Vs, [2, 21])],
    defaultActions: { 7: [2, 50], 8: [2, 1], 9: [2, 2], 10: [2, 3], 54: [2, 48], 55: [2, 49], 64: [2, 52] },
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
      function lex() {
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
            symbol = lex();
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
      lex: function lex() {
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
      options: { "case-insensitive": true },
      performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
        switch ($avoiding_name_collisions) {
          case 0:
            return 41;
          case 1:
            return 50;
          case 2:
            return 51;
          case 3:
            return 52;
          case 4:
            return 53;
          case 5:
            this.begin("open_directive");
            return 60;
          case 6:
            this.begin("type_directive");
            return 61;
          case 7:
            this.popState();
            this.begin("arg_directive");
            return 48;
          case 8:
            this.popState();
            this.popState();
            return 63;
          case 9:
            return 62;
          case 10:
            break;
          case 11:
            break;
          case 12:
            return 5;
          case 13:
            break;
          case 14:
            break;
          case 15:
            break;
          case 16:
            break;
          case 17:
            this.pushState("SCALE");
            return 17;
          case 18:
            return 18;
          case 19:
            this.popState();
            break;
          case 20:
            this.begin("acc_title");
            return 33;
          case 21:
            this.popState();
            return "acc_title_value";
          case 22:
            this.begin("acc_descr");
            return 35;
          case 23:
            this.popState();
            return "acc_descr_value";
          case 24:
            this.begin("acc_descr_multiline");
            break;
          case 25:
            this.popState();
            break;
          case 26:
            return "acc_descr_multiline_value";
          case 27:
            this.pushState("CLASSDEF");
            return 38;
          case 28:
            this.popState();
            this.pushState("CLASSDEFID");
            return "DEFAULT_CLASSDEF_ID";
          case 29:
            this.popState();
            this.pushState("CLASSDEFID");
            return 39;
          case 30:
            this.popState();
            return 40;
          case 31:
            this.pushState("CLASS");
            return 42;
          case 32:
            this.popState();
            this.pushState("CLASS_STYLE");
            return 43;
          case 33:
            this.popState();
            return 44;
          case 34:
            this.pushState("SCALE");
            return 17;
          case 35:
            return 18;
          case 36:
            this.popState();
            break;
          case 37:
            this.pushState("STATE");
            break;
          case 38:
            this.popState();
            yy_.yytext = yy_.yytext.slice(0, -8).trim();
            return 25;
          case 39:
            this.popState();
            yy_.yytext = yy_.yytext.slice(0, -8).trim();
            return 26;
          case 40:
            this.popState();
            yy_.yytext = yy_.yytext.slice(0, -10).trim();
            return 27;
          case 41:
            this.popState();
            yy_.yytext = yy_.yytext.slice(0, -8).trim();
            return 25;
          case 42:
            this.popState();
            yy_.yytext = yy_.yytext.slice(0, -8).trim();
            return 26;
          case 43:
            this.popState();
            yy_.yytext = yy_.yytext.slice(0, -10).trim();
            return 27;
          case 44:
            return 50;
          case 45:
            return 51;
          case 46:
            return 52;
          case 47:
            return 53;
          case 48:
            this.pushState("STATE_STRING");
            break;
          case 49:
            this.pushState("STATE_ID");
            return "AS";
          case 50:
            this.popState();
            return "ID";
          case 51:
            this.popState();
            break;
          case 52:
            return "STATE_DESCR";
          case 53:
            return 19;
          case 54:
            this.popState();
            break;
          case 55:
            this.popState();
            this.pushState("struct");
            return 20;
          case 56:
            break;
          case 57:
            this.popState();
            return 21;
          case 58:
            break;
          case 59:
            this.begin("NOTE");
            return 29;
          case 60:
            this.popState();
            this.pushState("NOTE_ID");
            return 58;
          case 61:
            this.popState();
            this.pushState("NOTE_ID");
            return 59;
          case 62:
            this.popState();
            this.pushState("FLOATING_NOTE");
            break;
          case 63:
            this.popState();
            this.pushState("FLOATING_NOTE_ID");
            return "AS";
          case 64:
            break;
          case 65:
            return "NOTE_TEXT";
          case 66:
            this.popState();
            return "ID";
          case 67:
            this.popState();
            this.pushState("NOTE_TEXT");
            return 24;
          case 68:
            this.popState();
            yy_.yytext = yy_.yytext.substr(2).trim();
            return 31;
          case 69:
            this.popState();
            yy_.yytext = yy_.yytext.slice(0, -8).trim();
            return 31;
          case 70:
            return 7;
          case 71:
            return 7;
          case 72:
            return 16;
          case 73:
            return 56;
          case 74:
            return 24;
          case 75:
            yy_.yytext = yy_.yytext.trim();
            return 14;
          case 76:
            return 15;
          case 77:
            return 28;
          case 78:
            return 57;
          case 79:
            return 5;
          case 80:
            return "INVALID";
        }
      },
      rules: [/^(?:default\b)/i, /^(?:.*direction\s+TB[^\n]*)/i, /^(?:.*direction\s+BT[^\n]*)/i, /^(?:.*direction\s+RL[^\n]*)/i, /^(?:.*direction\s+LR[^\n]*)/i, /^(?:%%\{)/i, /^(?:((?:(?!\}%%)[^:.])*))/i, /^(?::)/i, /^(?:\}%%)/i, /^(?:((?:(?!\}%%).|\n)*))/i, /^(?:%%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n]+)/i, /^(?:[\s]+)/i, /^(?:((?!\n)\s)+)/i, /^(?:#[^\n]*)/i, /^(?:%[^\n]*)/i, /^(?:scale\s+)/i, /^(?:\d+)/i, /^(?:\s+width\b)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:classDef\s+)/i, /^(?:DEFAULT\s+)/i, /^(?:\w+\s+)/i, /^(?:[^\n]*)/i, /^(?:class\s+)/i, /^(?:(\w+)+((,\s*\w+)*))/i, /^(?:[^\n]*)/i, /^(?:scale\s+)/i, /^(?:\d+)/i, /^(?:\s+width\b)/i, /^(?:state\s+)/i, /^(?:.*<<fork>>)/i, /^(?:.*<<join>>)/i, /^(?:.*<<choice>>)/i, /^(?:.*\[\[fork\]\])/i, /^(?:.*\[\[join\]\])/i, /^(?:.*\[\[choice\]\])/i, /^(?:.*direction\s+TB[^\n]*)/i, /^(?:.*direction\s+BT[^\n]*)/i, /^(?:.*direction\s+RL[^\n]*)/i, /^(?:.*direction\s+LR[^\n]*)/i, /^(?:["])/i, /^(?:\s*as\s+)/i, /^(?:[^\n\{]*)/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:[^\n\s\{]+)/i, /^(?:\n)/i, /^(?:\{)/i, /^(?:%%(?!\{)[^\n]*)/i, /^(?:\})/i, /^(?:[\n])/i, /^(?:note\s+)/i, /^(?:left of\b)/i, /^(?:right of\b)/i, /^(?:")/i, /^(?:\s*as\s*)/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:[^\n]*)/i, /^(?:\s*[^:\n\s\-]+)/i, /^(?:\s*:[^:\n;]+)/i, /^(?:[\s\S]*?end note\b)/i, /^(?:stateDiagram\s+)/i, /^(?:stateDiagram-v2\s+)/i, /^(?:hide empty description\b)/i, /^(?:\[\*\])/i, /^(?:[^:\n\s\-\{]+)/i, /^(?:\s*:[^:\n;]+)/i, /^(?:-->)/i, /^(?:--)/i, /^(?::::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { "LINE": { "rules": [14, 15], "inclusive": false }, "close_directive": { "rules": [14, 15], "inclusive": false }, "arg_directive": { "rules": [8, 9, 14, 15], "inclusive": false }, "type_directive": { "rules": [7, 8, 14, 15], "inclusive": false }, "open_directive": { "rules": [6, 14, 15], "inclusive": false }, "struct": { "rules": [14, 15, 27, 31, 37, 44, 45, 46, 47, 56, 57, 58, 59, 73, 74, 75, 76, 77], "inclusive": false }, "FLOATING_NOTE_ID": { "rules": [66], "inclusive": false }, "FLOATING_NOTE": { "rules": [63, 64, 65], "inclusive": false }, "NOTE_TEXT": { "rules": [68, 69], "inclusive": false }, "NOTE_ID": { "rules": [67], "inclusive": false }, "NOTE": { "rules": [60, 61, 62], "inclusive": false }, "CLASS_STYLE": { "rules": [33], "inclusive": false }, "CLASS": { "rules": [32], "inclusive": false }, "CLASSDEFID": { "rules": [30], "inclusive": false }, "CLASSDEF": { "rules": [28, 29], "inclusive": false }, "acc_descr_multiline": { "rules": [25, 26], "inclusive": false }, "acc_descr": { "rules": [23], "inclusive": false }, "acc_title": { "rules": [21], "inclusive": false }, "SCALE": { "rules": [18, 19, 35, 36], "inclusive": false }, "ALIAS": { "rules": [], "inclusive": false }, "STATE_ID": { "rules": [50], "inclusive": false }, "STATE_STRING": { "rules": [51, 52], "inclusive": false }, "FORK_STATE": { "rules": [], "inclusive": false }, "STATE": { "rules": [14, 15, 38, 39, 40, 41, 42, 43, 48, 49, 53, 54, 55], "inclusive": false }, "ID": { "rules": [14, 15], "inclusive": false }, "INITIAL": { "rules": [0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 15, 16, 17, 20, 22, 24, 27, 31, 34, 37, 55, 59, 70, 71, 72, 73, 74, 75, 76, 78, 79, 80], "inclusive": true } }
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
const DEFAULT_DIAGRAM_DIRECTION = "LR";
const DEFAULT_NESTED_DOC_DIR = "TB";
const STMT_STATE = "state";
const STMT_RELATION = "relation";
const STMT_CLASSDEF = "classDef";
const STMT_APPLYCLASS = "applyClass";
const DEFAULT_STATE_TYPE = "default";
const DIVIDER_TYPE = "divider";
const START_NODE = "[*]";
const START_TYPE = "start";
const END_NODE = START_NODE;
const END_TYPE = "end";
const COLOR_KEYWORD = "color";
const FILL_KEYWORD = "fill";
const BG_FILL = "bgFill";
const STYLECLASS_SEP = ",";
function newClassesList() {
  return {};
}
let direction = DEFAULT_DIAGRAM_DIRECTION;
let rootDoc = [];
let classes = newClassesList();
const newDoc = () => {
  return {
    relations: [],
    states: {},
    documents: {}
  };
};
let documents = {
  root: newDoc()
};
let currentDocument = documents.root;
let startEndCount = 0;
let dividerCnt = 0;
const lineType = {
  LINE: 0,
  DOTTED_LINE: 1
};
const relationType = {
  AGGREGATION: 0,
  EXTENSION: 1,
  COMPOSITION: 2,
  DEPENDENCY: 3
};
const clone = (o) => JSON.parse(JSON.stringify(o));
const parseDirective = function(statement, context, type) {
  _mermaidAPI_3ae0f2f0_js__WEBPACK_IMPORTED_MODULE_0__.m.parseDirective(this, statement, context, type);
};
const setRootDoc = (o) => {
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.info("Setting root doc", o);
  rootDoc = o;
};
const getRootDoc = () => rootDoc;
const docTranslator = (parent, node, first) => {
  if (node.stmt === STMT_RELATION) {
    docTranslator(parent, node.state1, true);
    docTranslator(parent, node.state2, false);
  } else {
    if (node.stmt === STMT_STATE) {
      if (node.id === "[*]") {
        node.id = first ? parent.id + "_start" : parent.id + "_end";
        node.start = first;
      } else {
        node.id = node.id.trim();
      }
    }
    if (node.doc) {
      const doc = [];
      let currentDoc = [];
      let i;
      for (i = 0; i < node.doc.length; i++) {
        if (node.doc[i].type === DIVIDER_TYPE) {
          const newNode = clone(node.doc[i]);
          newNode.doc = clone(currentDoc);
          doc.push(newNode);
          currentDoc = [];
        } else {
          currentDoc.push(node.doc[i]);
        }
      }
      if (doc.length > 0 && currentDoc.length > 0) {
        const newNode = {
          stmt: STMT_STATE,
          id: (0,_utils_d622194a_js__WEBPACK_IMPORTED_MODULE_2__.y)(),
          type: "divider",
          doc: clone(currentDoc)
        };
        doc.push(clone(newNode));
        node.doc = doc;
      }
      node.doc.forEach((docNode) => docTranslator(node, docNode, true));
    }
  }
};
const getRootDocV2 = () => {
  docTranslator({ id: "root" }, { id: "root", doc: rootDoc }, true);
  return { id: "root", doc: rootDoc };
};
const extract = (_doc) => {
  let doc;
  if (_doc.doc) {
    doc = _doc.doc;
  } else {
    doc = _doc;
  }
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.info(doc);
  clear(true);
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.info("Extract", doc);
  doc.forEach((item) => {
    switch (item.stmt) {
      case STMT_STATE:
        addState(
          item.id.trim(),
          item.type,
          item.doc,
          item.description,
          item.note,
          item.classes,
          item.styles,
          item.textStyles
        );
        break;
      case STMT_RELATION:
        addRelation(item.state1, item.state2, item.description);
        break;
      case STMT_CLASSDEF:
        addStyleClass(item.id.trim(), item.classes);
        break;
      case STMT_APPLYCLASS:
        setCssClass(item.id.trim(), item.styleClass);
        break;
    }
  });
};
const addState = function(id, type = DEFAULT_STATE_TYPE, doc = null, descr = null, note = null, classes2 = null, styles2 = null, textStyles = null) {
  const trimmedId = id == null ? void 0 : id.trim();
  if (currentDocument.states[trimmedId] === void 0) {
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.info("Adding state ", trimmedId, descr);
    currentDocument.states[trimmedId] = {
      id: trimmedId,
      descriptions: [],
      type,
      doc,
      note,
      classes: [],
      styles: [],
      textStyles: []
    };
  } else {
    if (!currentDocument.states[trimmedId].doc) {
      currentDocument.states[trimmedId].doc = doc;
    }
    if (!currentDocument.states[trimmedId].type) {
      currentDocument.states[trimmedId].type = type;
    }
  }
  if (descr) {
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.info("Setting state description", trimmedId, descr);
    if (typeof descr === "string") {
      addDescription(trimmedId, descr.trim());
    }
    if (typeof descr === "object") {
      descr.forEach((des) => addDescription(trimmedId, des.trim()));
    }
  }
  if (note) {
    currentDocument.states[trimmedId].note = note;
    currentDocument.states[trimmedId].note.text = _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.e.sanitizeText(
      currentDocument.states[trimmedId].note.text,
      (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.g)()
    );
  }
  if (classes2) {
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.info("Setting state classes", trimmedId, classes2);
    const classesList = typeof classes2 === "string" ? [classes2] : classes2;
    classesList.forEach((klass) => setCssClass(trimmedId, klass.trim()));
  }
  if (styles2) {
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.info("Setting state styles", trimmedId, styles2);
    const stylesList = typeof styles2 === "string" ? [styles2] : styles2;
    stylesList.forEach((style) => setStyle(trimmedId, style.trim()));
  }
  if (textStyles) {
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.info("Setting state styles", trimmedId, styles2);
    const textStylesList = typeof textStyles === "string" ? [textStyles] : textStyles;
    textStylesList.forEach((textStyle) => setTextStyle(trimmedId, textStyle.trim()));
  }
};
const clear = function(saveCommon) {
  documents = {
    root: newDoc()
  };
  currentDocument = documents.root;
  startEndCount = 0;
  classes = newClassesList();
  if (!saveCommon) {
    (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.y)();
  }
};
const getState = function(id) {
  return currentDocument.states[id];
};
const getStates = function() {
  return currentDocument.states;
};
const logDocuments = function() {
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.l.info("Documents = ", documents);
};
const getRelations = function() {
  return currentDocument.relations;
};
function startIdIfNeeded(id = "") {
  let fixedId = id;
  if (id === START_NODE) {
    startEndCount++;
    fixedId = `${START_TYPE}${startEndCount}`;
  }
  return fixedId;
}
function startTypeIfNeeded(id = "", type = DEFAULT_STATE_TYPE) {
  return id === START_NODE ? START_TYPE : type;
}
function endIdIfNeeded(id = "") {
  let fixedId = id;
  if (id === END_NODE) {
    startEndCount++;
    fixedId = `${END_TYPE}${startEndCount}`;
  }
  return fixedId;
}
function endTypeIfNeeded(id = "", type = DEFAULT_STATE_TYPE) {
  return id === END_NODE ? END_TYPE : type;
}
function addRelationObjs(item1, item2, relationTitle) {
  let id1 = startIdIfNeeded(item1.id.trim());
  let type1 = startTypeIfNeeded(item1.id.trim(), item1.type);
  let id2 = startIdIfNeeded(item2.id.trim());
  let type2 = startTypeIfNeeded(item2.id.trim(), item2.type);
  addState(
    id1,
    type1,
    item1.doc,
    item1.description,
    item1.note,
    item1.classes,
    item1.styles,
    item1.textStyles
  );
  addState(
    id2,
    type2,
    item2.doc,
    item2.description,
    item2.note,
    item2.classes,
    item2.styles,
    item2.textStyles
  );
  currentDocument.relations.push({
    id1,
    id2,
    relationTitle: _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.e.sanitizeText(relationTitle, (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.g)())
  });
}
const addRelation = function(item1, item2, title) {
  if (typeof item1 === "object") {
    addRelationObjs(item1, item2, title);
  } else {
    const id1 = startIdIfNeeded(item1.trim());
    const type1 = startTypeIfNeeded(item1);
    const id2 = endIdIfNeeded(item2.trim());
    const type2 = endTypeIfNeeded(item2);
    addState(id1, type1);
    addState(id2, type2);
    currentDocument.relations.push({
      id1,
      id2,
      title: _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.e.sanitizeText(title, (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.g)())
    });
  }
};
const addDescription = function(id, descr) {
  const theState = currentDocument.states[id];
  const _descr = descr.startsWith(":") ? descr.replace(":", "").trim() : descr;
  theState.descriptions.push(_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.e.sanitizeText(_descr, (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.g)()));
};
const cleanupLabel = function(label) {
  if (label.substring(0, 1) === ":") {
    return label.substr(2).trim();
  } else {
    return label.trim();
  }
};
const getDividerId = () => {
  dividerCnt++;
  return "divider-id-" + dividerCnt;
};
const addStyleClass = function(id, styleAttributes = "") {
  if (classes[id] === void 0) {
    classes[id] = { id, styles: [], textStyles: [] };
  }
  const foundClass = classes[id];
  if (styleAttributes !== void 0 && styleAttributes !== null) {
    styleAttributes.split(STYLECLASS_SEP).forEach((attrib) => {
      const fixedAttrib = attrib.replace(/([^;]*);/, "$1").trim();
      if (attrib.match(COLOR_KEYWORD)) {
        const newStyle1 = fixedAttrib.replace(FILL_KEYWORD, BG_FILL);
        const newStyle2 = newStyle1.replace(COLOR_KEYWORD, FILL_KEYWORD);
        foundClass.textStyles.push(newStyle2);
      }
      foundClass.styles.push(fixedAttrib);
    });
  }
};
const getClasses = function() {
  return classes;
};
const setCssClass = function(itemIds, cssClassName) {
  itemIds.split(",").forEach(function(id) {
    let foundState = getState(id);
    if (foundState === void 0) {
      const trimmedId = id.trim();
      addState(trimmedId);
      foundState = getState(trimmedId);
    }
    foundState.classes.push(cssClassName);
  });
};
const setStyle = function(itemId, styleText) {
  const item = getState(itemId);
  if (item !== void 0) {
    item.textStyles.push(styleText);
  }
};
const setTextStyle = function(itemId, cssClassName) {
  const item = getState(itemId);
  if (item !== void 0) {
    item.textStyles.push(cssClassName);
  }
};
const getDirection = () => direction;
const setDirection = (dir) => {
  direction = dir;
};
const trimColon = (str) => str && str[0] === ":" ? str.substr(1).trim() : str.trim();
const db = {
  parseDirective,
  getConfig: () => (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.g)().state,
  addState,
  clear,
  getState,
  getStates,
  getRelations,
  getClasses,
  getDirection,
  addRelation,
  getDividerId,
  setDirection,
  cleanupLabel,
  lineType,
  relationType,
  logDocuments,
  getRootDoc,
  setRootDoc,
  getRootDocV2,
  extract,
  trimColon,
  getAccTitle: _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.p,
  setAccTitle: _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.o,
  getAccDescription: _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.q,
  setAccDescription: _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.v,
  addStyleClass,
  setCssClass,
  addDescription,
  setDiagramTitle: _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.w,
  getDiagramTitle: _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_1__.x
};
const getStyles = (options) => `
defs #statediagram-barbEnd {
    fill: ${options.transitionColor};
    stroke: ${options.transitionColor};
  }
g.stateGroup text {
  fill: ${options.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${options.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${options.stateLabelColor};
}

g.stateGroup rect {
  fill: ${options.mainBkg};
  stroke: ${options.nodeBorder};
}

g.stateGroup line {
  stroke: ${options.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${options.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${options.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${options.noteBorderColor};
  fill: ${options.noteBkgColor};

  text {
    fill: ${options.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${options.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${options.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel .label text {
  fill: ${options.transitionLabelColor || options.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${options.transitionLabelColor || options.tertiaryTextColor};
}

.stateLabel text {
  fill: ${options.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${options.specialStateColor};
  stroke: ${options.specialStateColor};
}

.node .fork-join {
  fill: ${options.specialStateColor};
  stroke: ${options.specialStateColor};
}

.node circle.state-end {
  fill: ${options.innerEndBackground};
  stroke: ${options.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${options.compositeBackground || options.background};
  // stroke: ${options.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${options.stateBkg || options.mainBkg};
  stroke: ${options.stateBorder || options.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${options.mainBkg};
  stroke: ${options.stateBorder || options.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${options.lineColor};
}

.statediagram-cluster rect {
  fill: ${options.compositeTitleBackground};
  stroke: ${options.stateBorder || options.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${options.stateLabelColor};
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${options.stateBorder || options.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${options.compositeBackground || options.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${options.altBackground ? options.altBackground : "#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${options.altBackground ? options.altBackground : "#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${options.noteBkgColor};
  stroke: ${options.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${options.noteBkgColor};
  stroke: ${options.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${options.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${options.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${options.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${options.lineColor};
  stroke: ${options.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${options.textColor};
}
`;
const styles = getStyles;

//# sourceMappingURL=styles-47a825a5.js.map


/***/ }),

/***/ 36509:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ parseMember),
/* harmony export */   "s": () => (/* binding */ svgDraw)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63321);
/* harmony import */ var _utils_d622194a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57524);
/* harmony import */ var _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24197);



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
  let labelPosition = _utils_d622194a_js__WEBPACK_IMPORTED_MODULE_1__.u.calcLabelPosition(path.points);
  x = labelPosition.x;
  y = labelPosition.y;
  let p1_card_x, p1_card_y;
  let p2_card_x, p2_card_y;
  if (l % 2 !== 0 && l > 1) {
    let cardinality_1_point = _utils_d622194a_js__WEBPACK_IMPORTED_MODULE_1__.u.calcCardinalityPosition(
      relation.relation.type1 !== "none",
      path.points,
      path.points[0]
    );
    let cardinality_2_point = _utils_d622194a_js__WEBPACK_IMPORTED_MODULE_1__.u.calcCardinalityPosition(
      relation.relation.type2 !== "none",
      path.points,
      path.points[l - 1]
    );
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_2__.l.debug("cardinality_1_point " + JSON.stringify(cardinality_1_point));
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_2__.l.debug("cardinality_2_point " + JSON.stringify(cardinality_2_point));
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
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_2__.l.info("Rendering relation " + JSON.stringify(relation));
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
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_2__.l.debug("Rendering class ", classDef, conf);
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
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_2__.l.debug("Rendering note ", note, conf);
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
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_2__.l.debug(`Adding line: ${line2}`);
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
    let genericType = parsedText[3] ? (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_2__.z)(parsedText[3].trim()) : "";
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
    let parameters = parsedText[3] ? (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_2__.z)(parsedText[3].trim()) : "";
    let classifier = parsedText[4] ? parsedText[4].trim() : "";
    let returnType = parsedText[5] ? " : " + (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_2__.z)(parsedText[5]).trim() : "";
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
    displayText = visibility + methodName + "(" + (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_2__.z)(parameters.trim()) + ")";
    if (methodEnd < text.length) {
      returnType = text.substring(methodEnd + 2).trim();
      if (returnType !== "") {
        returnType = " : " + (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_2__.z)(returnType);
        displayText += returnType;
      }
    }
  } else {
    displayText = (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_2__.z)(text);
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

//# sourceMappingURL=svgDraw-2526cba0.js.map


/***/ })

};
;