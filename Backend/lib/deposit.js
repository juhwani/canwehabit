const Config = require('capital_one');

const Deposit = {
  initWithKey(apiKey) {
    Config.setApiKey(apiKey);
    return this;
  },
  urlWithEntity() {
    return Config.baseUrl + '/deposits/';
  },
  urlWithAccountEntity() {
    return Config.baseUrl + '/accounts/';
  },
  url() {
    return Config.baseUrl;
  },
  apiKey() {
    return Config.apiKey;
  },
  /** 
    # @Method: getAllByAccountId
    # @Brief: Get all deposits for a specific account
    # @Parameters: AccountID
    # @Returns an array of JSON Objects containing the deposits for that account.
  **/
  async getAllByAccountId(accID) {
    try {
      const response = await fetch(this.urlWithAccountEntity() + accID + '/deposits?key=' + this.apiKey());
      return response.json();
    } catch (error) {
      console.error(error);
    }
  },
  /**
    # @Method: getDepositById
    # @Brief: Returns a deposit for a given Deposit ID
    # @Parameters: DepositId
    # @Returns a JSON Object with the deposit data
  **/
  async getDepositById(id) {
    try {
      const response = await fetch(this.urlWithEntity() + id + '?key=' + this.apiKey());
      return response.json();
    } catch (error) {
      console.error(error);
    }
  },
  /**
    # @Method: createDeposit
    # @Brief: Creates a new deposit.
    # @Parameters: toAccountId, Depositobject
    # @Note: Depositobject is formatted as follows: 
    # {
    #   "medium": "balance",
    #   "transaction_date": "string",
    #   "status": "pending",
    #   "amount": 0,
    #   "description": "string"
    # }
    # @Returns http response code. 
  **/
  async createDeposit(toAcc, json) {
    try {
      const response = await fetch(this.urlWithAccountEntity() + toAcc + '/deposits?key=' + this.apiKey(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
      });
      return response.status;
    } catch (error) {
      console.error(error);
    }
  },
  /**
   * @method updateDeposit
   * @brief Updates an existing deposit
   * @param {string} id - Deposit ID
   * @param {Object} json - Deposit object formatted as follows:
   * {
   *   "medium": "balance",
   *   "transaction_date": "string",
   *   "status": "pending",
   *   "amount": 0,
   *   "description": "string"
   * }
   * @returns {number} HTTP response code
   */
  updateDeposit: function(id, json) {
    let respCode;
    const request = require('request');
    request({
      url: this.urlWithEntity() + id + '/?key=' + this.apiKey(),
      body: JSON.stringify(json),
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    }, function(error, response) {
      if (error) {
        console.log(error);
      } else {
        respCode = response.statusCode;
      }
    });
    return respCode;
  },
  /**
   * @method deleteDeposit
   * @brief Deletes an existing deposit
   * @param {string} id - Deposit ID
   * @returns {number} HTTP response code
   */
  deleteDeposit: function(id) {
    let respCode;
    const request = require('request');
    request({
      url: this.urlWithEntity() + id,
      body: 'key=' + this.apiKey(),
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }, function(error, response) {
      if (error) {
        console.log(error);
      } else {
        respCode = response.statusCode;
      }
    });
    return respCode;
  }
};

module.exports = Deposit;