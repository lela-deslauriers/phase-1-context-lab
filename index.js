// createEmployeeRecord
// Argument(s)
// A 4-element Array of a String, String, String, and Number corresponding to a first name, family name, title, and pay rate per hour
// Returns
// JavaScript Object with keys:
// firstName
// familyName
// title
// payPerHour
// timeInEvents
// timeOutEvents
// Behavior
// Loads Array elements into corresponding Object properties. Additionally, initialize empty Arrays on the properties timeInEvents and timeOutEvents.lements into corresponding Object properties. Additionally, initialize empty Arrays on the properties timeInEvents and timeOutEvents.

function createEmployeeRecord(employeeArray) {
    //create object for employee record
    const employeeRecord = {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    };
    return employeeRecord;


}


// createEmployeeRecords
// Argument(s)
// Array of Arrays
// Returns
// Array of Objects
// Behavior
// Converts each nested Array into an employee record using createEmployeeRecord and accumulates it to a new Array
function createEmployeeRecords (employeesArray) {
    //loop through employeeArray and pass each one into create objects for each employeeArray
    const employeeRecords = employeesArray.map((employeeArray) => createEmployeeRecord(employeeArray));
    return employeeRecords;
}

// createTimeInEvent
// Argument(s)
// REMOVE An employee record Object
// A date stamp ("YYYY-MM-DD HHMM")
// Returns
// The employee record
// Behavior
// Add an Object with keys to the timeInEvents Array on the record Object:
// type: Set to "TimeIn"
// hour: Derived from the argument
// date: Derived from the argument
function createTimeInEvent(date) {
    const dateArray = date.split(" ");

    const timeInEvent = {
        type: "TimeIn",
        hour: parseInt(dateArray[1]),
        date: dateArray[0]
    }

    this.timeInEvents.push(timeInEvent);
    return this;

}



// createTimeOutEvent
// Argument(s)
// REMOVE: An employee record Object
// A date stamp ("YYYY-MM-DD HHMM")
// Returns
// The employee record
// Behavior
// Add an Object with keys to the timeOutEvents Array on the record Object:
// type: Set to "TimeOut"
// hour: Derived from the argument
// date: Derived from the argument
function createTimeOutEvent(date) {
    const dateArray = date.split(" ");

    const timeOutEvent = {
        type: "TimeOut",
        hour: parseInt(dateArray[1]),
        date: dateArray[0]
    }

    this.timeOutEvents.push(timeOutEvent);
    return this;

}

// hoursWorkedOnDate
// Argument(s)
// REMOVE: An employee record Object
// A date of the form "YYYY-MM-DD"
// Returns
// Hours worked, an Integer
// Behavior
// Given a date, find the number of hours elapsed between that date's timeInEvent and timeOutEvent
function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(findDate => findDate.date === date);
    let timeOut = this.timeOutEvents.find(findDate => findDate.date === date);

    return (timeOut.hour - timeIn.hour)/100

}

// wagesEarnedOnDate
// Argument(s)
// REMOVE: An employee record Object
// A date of the form "YYYY-MM-DD"
// Returns
// Pay owed
// Behavior
// Using hoursWorkedOnDate, multiply the hours by the record's payRate to determine amount owed. Amount should be returned as a number.
function wagesEarnedOnDate (date) {
    let employeeWage = this.payPerHour;
    return parseInt((hoursWorkedOnDate.call(this, date))* employeeWage) 

}

// allWagesFor
// Argument(s)
// An employee record Object
// Returns
// Pay owed for all dates
// Behavior
// Using wagesEarnedOnDate, accumulate the value of all dates worked by the employee in the record used as context. Amount should be returned as a number. HINT: You will need to find the available dates somehow...

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

// findEmployeeByFirstName
// Argument(s)
// srcArray: Array of employee records
// firstName: String representing a first name held in an employee record
// Returns
// Matching record or undefined
// Behavior
// Test the firstName field for a match with the firstName argument
function findEmployeeByFirstName(srcArray, firstName){
    console.log(srcArray);
    console.log(firstName);
    return srcArray.find(findName => findName.firstName === firstName);
}

// calculatePayroll
// Argument(s)
// Array of employee records
// Returns
// Sum of pay owed for all employees for all dates, as a number
// Behavior
// Using allWagesFor for each of the employees, accumulate the value of all dates worked by the employee in the record used as context. Amount should be returned as a number.

function calculatePayroll(Array) {
    return Array.reduce((total, record) => {
        return total + allWagesFor.call(record)
    },0)
}