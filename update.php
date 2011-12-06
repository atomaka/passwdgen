<?php
	$site = $_POST['site'];

	$db = new mysqli('localhost', 'root', '', 'temp');

	$query = $db->prepare("INSERT IGNORE INTO pg_sites (site) VALUES(?)");
	$query->bind_param('s', $site);
	$query->execute();
	$query->close();
?>
{}