<?php
session_start();
if (isset($_POST['login'])) {
	$username = $_POST['username'];
	$password = $_POST['password'];
	// Check the username and password against a database or other authentication system
	// If the credentials are valid, set a session variable and redirect to a protected page
	if ($username == 'user' && $password == 'pass') {
		$_SESSION['username'] = $username;
		header('Location: protected-page.php');
		exit;
	} else {
		$error = "Invalid username or password";
	}
}
?>
