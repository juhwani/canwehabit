const config = require("../config");
var succeeded = module.exports;


const getCurrentPointsQry = "SELECT points FROM points WHERE id = ?"
const getInvestmentQry = "SELECT investment FROM goals WHERE id = ?"
const returnPointsQry = "UPDATE points SET points = ? WHERE id = ?"

succeeded.getCurrentPoints = function getCurrentPoints (id, callback) {
    config.db.query(getCurrentPointsQry, id, (err, result) => {
        if (err) callback(err, null);
        callback(null, result)
    })
}
succeeded.getInvestment = function getInvestment(id, callback) {
    config.db.query(getInvestmentQry, id, (err, result) => {
        if (err) callback(err, null);
        callback(null, result)
    })
}
succeeded.returnPoints =  function returnPoints(currentPoints, investment, id, callback) {
    const points = currentPoints + investment;
    config.db.query(returnPointsQry, points, id, (err, result) => {
        if(err) callback(err, null);
        callback(null, result)
    })
}
