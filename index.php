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
			<div id="login">
				<form action="" method="post" id="generate">
					<div class="sepH_a">
						<label for="root">Root Domain:</label>
						<input type="text" id="root" name="root" />
					</div>
					<div class="sepH_b">
						<label for="master">Master Password:</label>
						<input type="password" id="master" name="master" />
					</div>
					<button type="submit">Generate</button>
				</form>
			</div>
		</div>

		<script type="text/javascript">
			head.js('https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js');
			head.js('js/jquery.corner.min.js');

			head.ready(function() {
				$('input').corner('round 4px');
			});
		</script>
	</body>
</html>