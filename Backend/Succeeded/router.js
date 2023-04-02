var succeeded = require("./succeeded.js");
var router = require("express").Router();
function returnPoints(req, res) {
    const userID = req.body.userID;
    succeeded.getCurrentPoints(userID, (err, result) => {
        if (err) {
            console.log(err);
            res.json({errMsg: "error in returning the points back."})
        } 
        succeeded.getInvestment(userID, (err, result2) => {
            if (err) {
                console.log(err);
                res.json({errMsg: "error in returning the points back."})
            }
            succeeded.returnPoints(result, result2, userID, (err, result) => {
                if (err) {
                    console.log(err);
                    res.json({errMsg: "error in returning the points back."})
                }
                res.json({message: "Successfully returned the points back to the user"})
            })
        })
    })
}


router.post("/succeeded", returnPoints);

module.exports = router;