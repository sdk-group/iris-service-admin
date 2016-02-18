'use strict'

let Admin = require("./Admin/admin");
let config = require("./config/db_config.json");

describe("Admin service", () => {
	let service = null;
	let bucket = null;
	before(() => {
		service = new Admin();
		service.init();
	});
	describe("Admin service", () => {
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