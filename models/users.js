/**
 * Created by eharoldreyes on 7/13/15.
 */
var simpleModel 	= require(__dirname + "/../libs/simpleModel");
var mainDB 			= require(__dirname + "/../database/main");

var tableName       = "users";
var alias           = "user";
var columns         = ["id", "username","email", "password", "first_name", "last_name", "contact_number", "created"];
var required        = ["username", "email", "password", "first_name", "last_name", "contact_number"];

var model = simpleModel(mainDB, tableName, alias, columns, required);

module.exports      = model;