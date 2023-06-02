const basicInfo = require('./basicinfo')
const components = require('./components')
const users = require('./users')

module.exports = {
	...basicInfo,
	...users,
	...components,
}
