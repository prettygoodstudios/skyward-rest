
const { compose }     = require('../lib/helpers').structures
const { arrayInsert } = require('../lib/helpers').modifiers

const school       = require('./lib/school')
const report       = require('../report')
const { preppers } = require('../lib/helpers')

const prepare = compose(
  preppers.jQueryify,
  preppers.cleanupQuotes,
  preppers.cleanupLines
)

const grabData = $ => $('table[id^="grid_gradeGrid"]>tbody>tr').get()

const formHistory = $ => ({
  school: school($),
  report: report(grabData($))
})

module.exports = (arr, html) => compose(
  arrayInsert(arr),
  formHistory,
  prepare
)(html)