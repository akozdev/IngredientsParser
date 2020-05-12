/**
 * Takes mixed unit, for example, '300ml'
 * and returns the object containing a count and unit, for example, { count: 300, unit: 'ml' }.
 *
 * @param {string} mixedUnit The mixed unit string, for example '300ml'.
 * @returns {object} The object containing count and unit.
 */
function parseMixedUnit(mixedUnit) {
  const unitObj = {};

  unitObj.count = parseInt(mixedUnit.match(/\d+/g), 10);
  unitObj.unit = mixedUnit.match(/[a-zA-Z]+/g);

  return unitObj;
}

module.exports = parseMixedUnit;