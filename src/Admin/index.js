'use strict'

let events = {
	admin: {}
};

let tasks = [];


module.exports = {
	module: require('./admin.js'),
	permissions: [],
	exposed: true,
	tasks: tasks,
	events: {
		group: 'admin',
		shorthands: events.admin
	}
};