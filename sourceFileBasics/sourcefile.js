// source file structure

// all new source files should either be a thing.module (file containing a thing.module call)
// or an ECMAScript (ES) module (uses import and export statements)

// order:
// 1. License or copyright info if present
// 2. @fileoverview JSDoc if present
// 3. thing.module state, if a thing.module file
// 4. ES import statements, if an ES module
// 5. thing.require and thing.requireType statements
// 6. file's implementation

// all thing.module files must declare exactly one thing.module name on a single line
// lines containing a thing.module declaration must not be wrapped and are exceptions to 80-column limits
thing.module('search.urlHistory.UrlHistoryService');

// heirarchy:

// disallowed:
thing.module('foo.bar'); // 'foo.bar.qux' would be fine though
thing.module('foo.bar.baz');

// single thing.module state may be optionally followed by a call to
thing.module.declareLegacyNamespace(); // avoid when possible

thing.module('my.test.helpers');
thing.module.declareLegacyNamespace();
thing.setTestOnly();

//thing.module('parent'); and thing.module('parent.child'); 
// cannot both exist safely, nor can thing.module('parent'); 
// and thing.module('parent.child.grandchild');).