const Config = require('./capital_one');

const Customer = {
initWithKey: function(apiKey) {
Config.setApiKey(apiKey);
return this;
},
urlWithEntity: function() {
return Config.baseUrl+"/customers/";
},
urlWithAcctEntity: function() {
return Config.baseUrl+"/accounts/";
},
apiKey: function() {
return Config.apiKey;
},
getCustomers: function() {
var customers;
const request = require('request-promise');
const options = {
uri: this.urlWithEntity(),
qs: {
key: this.apiKey()
},
headers: {
'User-Agent': 'Request-Promise'
},
json: true
};
return request(options)
.then(function(results) {
customers = results;
return customers;
})
.catch(function(err) {
console.log(err);
});
},
getCustomerById: function(custId) {
var customer;
const request = require('request-promise');
const options = {
uri: this.urlWithEntity()+custId,
qs: {
key: this.apiKey()
},
headers: {
'User-Agent': 'Request-Promise'
},
json: true
};
return request(options)
.then(function(results) {
customer = results;
return customer;
})
.catch(function(err) {
console.log(err);
});
},
getCustomerByAcountId: function(accId) {
var customer;
const request = require('request-promise');
const options = {
uri: this.urlWithAcctEntity()+accId+'/customer',
qs: {
key: this.apiKey()
},
headers: {
'User-Agent': 'Request-Promise'
},
json: true
};
return request(options)
.then(function(results) {
customer = results;
return customer;
})
.catch(function(err) {
console.log(err);
});
},
updateCustomer: function(custId, json) {
const request = require('request-promise');
const options = {
uri: this.urlWithEntity()+custId+'?key='+this.apiKey(),
body: json,
headers: {
'Content-Type': 'application/json'
},
json: true
};
return request.put(options)
.then(function(response) {
return response.statusCode;
})
.catch(function(err) {
console.log(err);
});
},
createCustomer: function(json) {
const request = require('request-promise');
const options = {
uri: this.urlWithEntity()+'?key='+this.apiKey(),
body: json,
headers: {
'Content-Type': 'application/json'
},
json: true
};
return request.post(options)
.then(function(response) {
return response.statusCode;
})
.catch(function(err) {
console.log(err);
});
}
};

module.exports = Customer;





