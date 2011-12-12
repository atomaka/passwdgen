var special = new Array();

special['53.com'] = (function(password) {
	// 6-12 characters
	return password.substr(0,12);
});

special['paypal.com'] = (function(password) {
	// 8-20 characters
	return password.substr(0,20);
});

special['ebay.com'] = (function(password) {
	// 8-20 characters
	return password.substr(0,20);
});