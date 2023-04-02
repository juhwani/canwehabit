const config = require("../config");
var newgoal = module.exports;

const insertNewGoalQry = "INSERT INTO goals (title, duration, category, starting_date, description, investment, minPoints, charity, people) VALUES (?,?,?,?,?,?,?,?,?,1)"
const getRequiredPointsQry = "SELECT minPoints FROM goals WHERE title = ? and starting_date = ?" //if user clicked the "Join the Goal" button
const getUserPointsQry = "SELECT points FROM users WHERE id = ?"
const deductPointsQry = "UPDATE canwehabit.points SET points = ? WHERE userid = ?"
const getCurrentPeopleQry = "SELECT people FROM goals WHERE title = ? and starting_date = ?"
const addPeopleQry = "UPDATE goals SET people = ? WHERE title = ? and starting_date = ?" //if user clicked the "Join the Goal" button

//When an user add new goal
newgoal.insertNewGoal = function insertNewGoal(title, duration, category, frequency, verification_time, starting_date, description, investment, minPoints, callback) {
    config.db.query(insertNewGoalQry, [title, duration, category, frequency, verification_time, starting_date, description, investment, minPoints], (err,result) => {
        if(err) callback(err, null);

        callback(null, result);
    })
}

newgoal.getRequiredPoints = function getRequiredPoints (title, starting_date, callback) {
    config.db.query(getRequiredPointsQry, title, starting_date, (err, result) => {
        if(err) callback(err,null);
        
            
            callback(null, result)
                    
            });
    
}
newgoal.getUserPoints = function getUserPoints (userid, callback) {
config.db.query(getUserPointsQry, userid, (err, res) => {
    if(err) callback(err, null);
     
    
    
        callback(null, res)
    
})
}
newgoal.deductPoints = function deductPoints(userPoints, requiredPoints, userid, callback) {
    if (userPoints >= requiredPoints) {
        config.db.query(deductPointsQry, userPoints-requiredPoints, userid, (err, res) => {
            if(err) callback(err, null);
            callback(null, res)
        })
    }
}
newgoal.getCurrentPeople = function getCurrentPeople (title, starting_date, callback) {
    config.db.query(getCurrentPeopleQry, title, starting_date, (err, result) => {
        if(err) callback(err,null);
        callback(null, result)
    })
}

newgoal.addPeople = function addPeople (currentPpl, title, starting_date , callback) {
    
        const newppl = currentPpl + 1
        config.db.query(addPeopleQry, newppl, title, starting_date, (error, res) => {
            if(error) callback(error,null);
            callback(null, res)
        })
        
    
    
}