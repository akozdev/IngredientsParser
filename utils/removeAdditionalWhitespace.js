/**
 * Removes additional whitespace, for example, '1  cup of milk' becomes '1 cup of milk'
 *
 * @param str
 * @returns {string} The string without additional whitespaces.
 */
function removeAdditionalWhitespace(str) {
  return str.replace(/\s+/g, ' ').trim()
}

module.exports = removeAdditionalWhitespace;