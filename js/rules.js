var special = new Array();

special['53.com'] = (function(password) {
	// 6-12 characters
	return password.substr(0,12);
});