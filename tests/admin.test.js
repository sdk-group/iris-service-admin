'use strict'

let Administrator = require("./Administrator/administrator");
let config = require("./config/db_config.json");

describe("Administrator service", () => {
	let service = null;
	let bucket = null;
	before(() => {
		service = new Administrator();
		service.init();
	});
	describe("Administrator service", () => {
		it("should mark ticket called", (done) => {
			return service.actionTicketCalled()
				.then((res) => {
					console.log(res);
					done();
				})
				.catch((err) => {
					done(err);
				});
		})
	})

});