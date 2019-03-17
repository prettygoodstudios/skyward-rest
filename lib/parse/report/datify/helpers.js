
const { compose }                  = require('../../../helpers')
const { ensure, nums, trimValues } = require('../../helpers')

const formScore = td => ({
  earned: td(0)('data'),
  total: td(2)('data')
})

const createScore = compose(
  nums,
  trimValues(/[-+]?([0-9]*\.[0-9]+|[0-9]+)|\w+|\*/),
  formScore
)

const getScore = td => ensure(td)(1)() ? createScore(td) : []

const objectify = type => data => ({ type, data })

module.exports = {
  getScore,
  objectify
}
