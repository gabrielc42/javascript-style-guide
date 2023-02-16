// file names must be all lowercase
// may include underscores _, dashes -, but not punctuation.
// follow project conventions

// files encoded in UTF-8!


// special characters:

// ASCII horizontal space character (0x20) is the
// only whitespace character that appears anywhere in a source file
// all other whitespace characters in string literals are escaped, and
// tab characters are not used for indentation

// any special escape sequence character (\', \", \\, \b, \f, \n, \r, \t, \v"), 
// that sequence is used rather than the corresponding numeric escape (\x0a, \u000a, or \u{a})
// legacy octal escapes are never used

// remaining non-ASCII characters, either the actual Unicode character (e.g. ∞) 
// or the equivalent hex or Unicode escape (e.g. \u221e) is used, depending only on which makes the code easier to read and understand.

/* Best: perfectly clear even w/out a comment. */
let units = 'μs';

/* Allowed: but uneccessary as μ is a printable character. */
units = '\u03bcs'; // 'μs'

/* Poor: the reader has no idea what character this is. */
units = '\u03bcs';

/* Good: use escapes for non-printable characters with a comment for clarity. */
return '\ufeff' + content; // Prepend a byte order mark.

// never make code less readable simply out of fear that some programs
// might not handle non-ASCII characters properly.
// if that happens, those programs are broken and they must be fixed
