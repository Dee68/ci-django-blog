"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REGEXP_CONTAINS_NEW = exports.REGEXP_CONTAINS_ASYNC = exports.REGEXP_EXPORT_LINE = exports.REGEXP_SEQUENCE_LETTERS_CLOSE = exports.REGEXP_SEQUENCE_LETTERS_OPEN = exports.REGEXP_ADDITIONAL_PARENS = exports.REGEXP_TYPE_PARAMETER_TIP = exports.REGEXP_VARIABLE_TIP = exports.REGEXP_GETTER_SETTER_TIP = exports.REGEXP_FUNCTION_TIP = exports.REGEXP_STATIC_LINE = exports.REGEXP_READONY_LINE = exports.REGEXP_PROTECTED_LINE = exports.REGEXP_PRIVATE_LINE = exports.REGEXP_PUBLIC_LINE = exports.REGEXP_ENUM_LINE = exports.REGEXP_TYPEDEF_LINE = exports.REGEXP_INTERFACE_LINE = exports.REGEXP_CLASS_LINE = exports.REGEXP_IGNORE_LINE = exports.REGEXP_PARENS_LINE = exports.REGEXP_DOT_BETWEEN = exports.REGEXP_MULTI_SPACES = exports.REGEXP_FIRST_ATSIGN = exports.REGEXP_FIRST_UNDERSCORES = exports.REGEXP_FIRST_SPACES = exports.REGEXP_VALID_TIP = exports.REGEXP_ANY_WORDS = void 0;
/**
 * Exporting a constant named `REGEXP_ANY_WORDS` that is a regular expression that matches any word.
 *
 * @constant
 * @name REGEXP_ANY_WORDS
 * @kind variable
 * @type {RegExp}
 * @exports
 */
exports.REGEXP_ANY_WORDS = /\w+/g;
/**
 * A regular expression that matches a code block in a markdown file.
 *
 * @constant
 * @name REGEXP_VALID_TIP
 * @kind variable
 * @type {RegExp}
 * @exports
 */
exports.REGEXP_VALID_TIP = /\n```typescript\n(.*)\n```\n/is;
/**
 * Exporting a constant named `REGEXP_FIRST_SPACES` that is a regular expression that matches one or more spaces at the beginning of a line.
 *
 * @constant
 * @name REGEXP_FIRST_SPACES
 * @kind variable
 * @type {RegExp}
 * @exports
 */
exports.REGEXP_FIRST_SPACES = /^\s+/;
/**
 * A regular expression that matches one or more underscores at the beginning of a line.
 *
 * @constant
 * @name REGEXP_FIRST_UNDERSCORES
 * @kind variable
 * @type {RegExp}
 * @exports
 */
exports.REGEXP_FIRST_UNDERSCORES = /^\_+/;
/**
 * A regular expression that matches one or more at signs at the beginning of a line.
 *
 * @constant
 * @name REGEXP_FIRST_ATSIGN
 * @kind variable
 * @type {RegExp}
 * @exports
 */
exports.REGEXP_FIRST_ATSIGN = /^\@/;
/**
 * A regular expression that matches one or more spaces.
 *
 * @constant
 * @name REGEXP_MULTI_SPACES
 * @kind variable
 * @type {RegExp}
 * @exports
 */
exports.REGEXP_MULTI_SPACES = /\s+/g;
/**
 * A regular expression that matches a word followed by a dot followed by a word.
 *
 * @constant
 * @name REGEXP_DOT_BETWEEN
 * @kind variable
 * @type {RegExp}
 * @exports
 */
exports.REGEXP_DOT_BETWEEN = /\w+\.\w+/g;
/**
 * A regular expression that matches a line that starts with an open parenthesis followed by any characters and ending with a close parenthesis.
 *
 * @constant
 * @name REGEXP_PARENS_LINE
 * @kind variable
 * @type {RegExp}
 * @exports
 */
exports.REGEXP_PARENS_LINE = /^\((.*?)\)/;
/**
 * Exporting a constant named `REGEXP_IGNORE_LINE` that is a regular expression that matches a line
 * that starts with an open parenthesisfollowed by any characters and ending with a close parenthesis.
 *
 * @constant
 * @name REGEXP_IGNORE_LINE
 * @kind variable
 * @type {RegExp}
 * @exports
 */
exports.REGEXP_IGNORE_LINE = /^(((import|this|if|switch|else|for|while|do|try|catch|finally|return|yield|break|continue|super)[\(\.\;\s]|\[)|(\/\*|\*)|$)/i;
/**
 * Exporting a constant named `REGEXP_CLASS_LINE` that is a regular expression that matches a line
 * that starts with an optional `export` followed by an optional `abstract` followed by `class` followed by one or more word characters
 * followed by an optional space followed by an optional `extends` followed by one or more word characters followed by an optional space
 * followed by an optional `implements` followed by one or more characters followed by an optional `{` followed by an optional `}`.
 *
 * @constant
 * @name REGEXP_CLASS_LINE
 * @kind variable
 * @type {RegExp}
 * @exports
 */
exports.REGEXP_CLASS_LINE = /^(export\s)?(abstract\s)?(class\s+(\w+))(?:\s+)?(extends\s+(\w+))?(?:\s+)?(implements\s+?(.*?))?\{?\}?$/i;
/**
 * Exporting a constant named `REGEXP_INTERFACE_LINE` that is a regular expression that matches a line
 * that starts with an optional `export` followed by `interface` followed by one or more word characters.
 *
 * @constant
 * @name REGEXP_INTERFACE_LINE
 * @kind variable
 * @type {RegExp}
 * @exports
 */
exports.REGEXP_INTERFACE_LINE = /^(export\s)?(interface\s+(\w+))/i;
/**
 * A regular expression that matches a line that starts with an optional `export` followed by `type` followed by one or more word characters.
 *
 * @constant
 * @name REGEXP_TYPEDEF_LINE
 * @kind variable
 * @type {RegExp}
 * @exports
 */
exports.REGEXP_TYPEDEF_LINE = /^(export\s)?(type\s+(\w+))/i;
/**
 * A regular expression that matches a line that starts with an optional `export` followed by `enum` followed by one or more word characters.
 *
 * @constant
 * @name REGEXP_ENUM_LINE
 * @kind variable
 * @type {RegExp}
 * @exports
 */
exports.REGEXP_ENUM_LINE = /^(export\s)?(enum\s+(\w+))/i;
/**
 * Exporting a constant named `REGEXP_PUBLIC_LINE` that is a regular expression that matches a line
 * that starts with `public` followed by one or more spaces.
 *
 * @constant
 * @name REGEXP_PUBLIC_LINE
 * @kind variable
 * @type {RegExp}
 * @exports
 */
exports.REGEXP_PUBLIC_LINE = /^public\s/i;
/**
 * Exporting a constant named `REGEXP_PRIVATE_LINE` that is a regular expression that matches a line
 * that starts with `private` followed by one or more spaces.
 *
 * @constant
 * @name REGEXP_PRIVATE_LINE
 * @kind variable
 * @type {RegExp}
 * @exports
 */
exports.REGEXP_PRIVATE_LINE = /^private\s/i;
/**
 * Exporting a constant named `REGEXP_PROTECTED_LINE` that is a regular expression that matches a line
 * that starts with `protected` followed by one or more spaces.
 *
 * @constant
 * @name REGEXP_PROTECTED_LINE
 * @kind variable
 * @type {RegExp}
 * @exports
 */
exports.REGEXP_PROTECTED_LINE = /^protected\s/i;
/**
 * A regular expression that matches a line that starts with `public` or `private` or `protected` followed by one or more spaces
 * followed by `readonly` followed by one or more spaces.
 *
 * @constant
 * @name REGEXP_READONY_LINE
 * @kind variable
 * @type {RegExp}
 * @exports
 */
exports.REGEXP_READONY_LINE = /^((public|private|protected)\s+)?readonly\s+/i;
/**
 * A regular expression that matches a line that starts with `public` or `private` or `protected` followed by one or more spaces
 * followed by `static` followed by one or more spaces.
 *
 * @constant
 * @name REGEXP_STATIC_LINE
 * @kind variable
 * @type {RegExp}
 * @exports
 */
exports.REGEXP_STATIC_LINE = /^((public|private|protected)\s+)?static\s+/i;
/**
 * Exporting a constant named `REGEXP_FUNCTION_TIP` that is a regular expression that matches a line
 * that starts with `constructor` or `function` or `method` or `property` or `const` or `let` or `var`
 * followed by one or more spaces followed by one or more word characters followed by an optional `?`
 * followed by an optional space followed by an optional `:` followed by an optional space
 * followed by an optional `(` followed by any characters followed by an optional `)` followed by an optional space
 * followed by an optional `:` or `=>` followed by an optional space followed by any characters.
 *
 * @function
 * @name REGEXP_FUNCTION_TIP
 * @kind variable
 * @type {RegExp}
 * @exports
 */
exports.REGEXP_FUNCTION_TIP = /(constructor|function|method|property|const|let|var)(?:\s+)([\w.]+)(?:<.*>)?(?:\?)?(?:\s+)?(?::)?(?:\s+)?(?:\((.*)\)|function)(?:\s+)?(?:(?::|=>)(?:\s+)?(.*))?/i;
/**
 * A regular expression that matches a line that starts with `getter` or `setter` followed by one or more spaces
 * followed by one or more word characters followed by an optional space
 * followed by an optional `:` followed by an optional space followed by any characters.
 *
 * @constant
 * @name REGEXP_GETTER_SETTER_TIP
 * @kind variable
 * @type {RegExp}
 * @exports
 */
exports.REGEXP_GETTER_SETTER_TIP = /(getter|setter)(?:\s+)([\w.]+)(?:\s+)?(?::)?(?:\s+)?(.*)?/i;
/**
 * Exporting a constant named `REGEXP_VARIABLE_TIP` that is a regular expression that matches a line
 * that starts with `property` or `enum member` or `const` or `let` or `var` followed by one or more spaces
 * followed by one or more word characters followed by an optional `<` followed by any characters followed by an optional `>`
 * followed by one or more word characters followed by an optional space followed by an optional `:` or `=`
 * followed by an optional space followed by any characters.
 *
 * @constant
 * @name REGEXP_VARIABLE_TIP
 * @kind variable
 * @type {RegExp}
 * @exports
 */
exports.REGEXP_VARIABLE_TIP = /(property|enum\smember|const|let|var)(?:\s+)([\w.]+)(?:<.*>)?([\w.]+)?(?:\s+)?(?:[\?\:\=]+)(?:\s+)?(.*)?/i;
/**
 * A regular expression that matches a line that starts with `type` followed by one or more spaces followed by `parameter`
 * followed by one or more spaces followed by one or more word characters followed by one or more spaces
 * followed by `in` followed by one or more spaces.
 *
 * @constant
 * @name REGEXP_TYPE_PARAMETER_TIP
 * @kind variable
 * @type {RegExp}
 * @exports
 */
exports.REGEXP_TYPE_PARAMETER_TIP = /type\s+parameter\s+(\w+)\s+in\s+/i;
/**
 * A regular expression that matches a line that starts with an open parenthesis followed by any characters and ending with a close parenthesis.
 *
 * @constant
 * @name REGEXP_ADDITIONAL_PARENS
 * @kind variable
 * @type {RegExp}
 * @exports
 */
exports.REGEXP_ADDITIONAL_PARENS = /\((.*)\)/;
/**
 * A regular expression that matches an open parenthesis, open curly brace, or open square bracket.
 *
 * @constant
 * @name REGEXP_SEQUENCE_LETTERS_OPEN
 * @kind variable
 * @type {RegExp}
 * @exports
 */
exports.REGEXP_SEQUENCE_LETTERS_OPEN = /[\(\{\[]/;
/**
 * A regular expression that matches a close parenthesis, close curly brace, or close square bracket.
 *
 * @constant
 * @name REGEXP_SEQUENCE_LETTERS_CLOSE
 * @kind variable
 * @type {RegExp}
 * @exports
 */
exports.REGEXP_SEQUENCE_LETTERS_CLOSE = /[\]\}\)]/;
/**
 * Exporting a constant named `REGEXP_EXPORT_LINE` that is a regular expression that matches a line that starts with `export` followed by one or more spaces.
 *
 * @constant
 * @name REGEXP_EXPORT_LINE
 * @kind variable
 * @type {RegExp}
 * @exports
 */
exports.REGEXP_EXPORT_LINE = /^export\s/i;
/**
 * A regular expression that matches a line that starts with `async` followed by an optional space.
 *
 * @constant
 * @name REGEXP_CONTAINS_ASYNC
 * @kind variable
 * @type {RegExp}
 * @exports
 */
exports.REGEXP_CONTAINS_ASYNC = /(^|[\=\s])async[\(\s]/i;
/**
 * Exporting a constant named `REGEXP_CONTAINS_NEW` that is a regular expression that matches a line that starts with `new` followed by one or more spaces.
 *
 * @constant
 * @name REGEXP_CONTAINS_NEW
 * @kind variable
 * @type {RegExp}
 * @exports
 */
exports.REGEXP_CONTAINS_NEW = /[\=\s]new\s/i;
//# sourceMappingURL=RegExp.js.map