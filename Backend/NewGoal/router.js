var newgoal = require("./newgoal.js");
var router = require("express").Router();

//When an user opens new goal(Start Button activated)
function addNewGoal(req, res) {
    
    const title = req.body.title;
    const duration = req.body.duration;
    const category = req.body.category;
    const frequency = req.body.frequency;
    const verification_time = req.body.verification_time;
    const starting_date = req.body.starting_date;
    const description = req.body.description;
    const investment = req.body.investment;
    const minPoints = req.body.minPoints;
    const userID = req.body.userID
    const goalInfo = []
    newgoal.insertNewGoal(title, duration, category, frequency, verification_time, starting_date, description, investment, minPoints, (err, result) => {
        if (err) {
            console.log(err);
            res.json({errMsg: "error in adding a new goal."})
        }
        //now, we have to withdraw the goal maker's points.
        newgoal.getUserPoints(userID, (err, result) => {
            const userPoints = result;
        
            newgoal.getRequiredPoints(title, starting_date, (err, result2) => {
                const requiredPoints = result2;
            
            newgoal.deductPoints(userPoints, requiredPoints, userID, (err, result3) => {
                if (err) {
                    console.log(err);
                    res.json({errMsg: "error in withdrawing the user's points."})
                }
            })
        })
    })
    })
}

//When other users join the existing goal
function joinGoal(req, res) {
    const title = req.body.title;
    const starting_date = req.body.starting_date;
    const userID = req.body.userID;
    newgoal.getUserPoints(userID, (err, result) => {
        const userPoints = result;
    
        newgoal.getRequiredPoints(title, starting_date, (err, result2) => {
            const requiredPoints = result2;
        
        newgoal.deductPoints(userPoints, requiredPoints, userID, (err, result3) => {
            if (err) {
                console.log(err);
                res.json({errMsg: "error in withdrawing the user's points."})
            }
            newgoal.addPeople(title, starting_date, (err, result4) => {
                if (err) {
                    console.log(err);
                    res.json({errMsg: "error in counting up the amount of group members."})
                }
                res.json({message: "Successfully deducted the user's points and updated the group members"})
            })
        })
    })
})
}

router.post("/addNewGoal", addNewGoal);
router.post("/joinGoal", joinGoal);
module.exports = router;