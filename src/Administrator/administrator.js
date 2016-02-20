'use strict'

let emitter = require("global-queue");
let AdministratorApi = require('resource-management-framework')
	.AdministratorApi;

class Administrator {
	constructor() {
		this.emitter = emitter;
	}

	init() {
		this.iris = new AdministratorApi();
		this.iris.initContent();
	}

	//API
	actionBootstrap({
		workstation,
		user_id,
		user_type
	}) {
		console.log("ADMIN BTST", workstation, user_id, user_type);
		return Promise.resolve({
			success: true
		});
	}

	actionReady({
		user_id,
		workstation
	}) {
		return Promise.resolve({
			success: true
		});
	}

	actionList({}) {
		return Promise.resolve(true);
	}

	actionSave({}) {
		return Promise.resolve(true);
	}

}

module.exports = Administrator;
