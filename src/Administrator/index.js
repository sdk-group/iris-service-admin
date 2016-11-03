'use strict'

let events = {
	administrator: {}
};

let tasks = [];


module.exports = {
	module: require('./administrator.js'),
	name: 'administrator',
	permissions: [],
	exposed: true,
	tasks: tasks,
	events: {
		group: 'administrator',
		shorthands: events.administrator
	}
};