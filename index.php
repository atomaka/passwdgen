<!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Password Generator</title>
		<link href="css/html5reset-1.6.1.css" rel="stylesheet" type="text/css" />
		<!--[if IE]>
			<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
		<script src="js/head.min.js"></script>
		<link href="css/style.css" rel="stylesheet" type="text/css" />
	</head>

	<body>
		<div id="wrapper">
			<div id="box">
				<div id="header">
					<h1>Passwdgen v1.0</h1>
				</div>
				<div id="generate">
					<form action="" method="post" id="generate">
						<div class="form_row">
							<label for="root">Root Domain:</label>
							<input type="text" id="root" name="root" />
						</div>
						<div class="form_row">
							<label for="master">Master Password:</label>
							<input type="password" id="master" name="master" autocomplete="off" />
						</div>

						<div class="form_row">
							<button type="submit">Generate</button>
						</div>
					</form>

					<div class="form_row">
						<label for="master">Site Password:</label>
						<input type="password" id="password" name="password" autocomplete="off" />
					</div>
				</div>
			</div>
		</div>

		<script type="text/javascript">
			head.js('https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js');
			head.js('js/jquery.corner.min.js');

			head.ready(function() {
				$('input').corner('round 4px');
				$('button').corner('round 4px');
				$('#box').corner('round bottom');
			});
		</script>
	</body>
</html>