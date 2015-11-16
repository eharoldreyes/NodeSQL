/**
 * Created by eharoldreyes on 11/16/15.
 */
var mUsers 			    = require(__dirname + '/../models/users');

exports.getUsers = function (req, res, next) {
    mUsers.retrieveMany("", function (result, error) {
        if(error){
            res.status(error.statusCode || 403).send({error:true, message:error.message || "Failed", error_log:error}).end();
        } else {
            res.status(200).send({error:false, message: "Success", users:result}).end();
        }
    });
};