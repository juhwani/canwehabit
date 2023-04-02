const Config = {
	baseUrl: 'http://api.reimaginebanking.com:80',
	apiKey: undefined,
	setApiKey: function(apiKey) {
		this.apiKey = apiKey;
	}
};

module.exports = {
	Config
};
