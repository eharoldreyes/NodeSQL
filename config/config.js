var	config = {
	development: {
		env: "development",
		port: 5001,
		main: {
			host: "localhost",
			port: 3306,
			database: "bagong_database",
			user: "root",
			password: "root"
		}
	}, production: {
	}
};

!process.env["NODE_ENV"] && (process.env["NODE_ENV"] = "development");
config = config[process.env["NODE_ENV"]];

module.exports = config;
