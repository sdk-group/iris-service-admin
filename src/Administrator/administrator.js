'use strict'


let AdministratorApi = require('resource-management-framework')
	.AdministratorApi;

class Administrator {
	constructor() {
		this.emitter = message_bus;
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

	actionList({
		type
	}) {
		return this.iris.getEntry({
				query: {
					type
				}
			})
			.then((res) => _.values(res))
			.catch((err) => {
				console.log("ADM LIST", err.stack);
				return [];
			});
	}

	actionSave({}) {
		return Promise.resolve({
			success: true
		});
	}

}

module.exports = Administrator;
