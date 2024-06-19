<?php
// Establish a database connection
$servername = "your_servername";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if (isset($_POST["submit"])) {
    $firstname = $_POST["firstname"];
    $lastname = $_POST["lastname"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $nic = $_POST["nic"];
    $cv = $_FILES["pdf"]["name"];
    $module1 = $_POST["Module1"];
    $module2 = $_POST["Module2"];
    $module3 = $_POST["Module3"];

    // Move the uploaded CV file to a directory
    $target_dir = "cv_uploads/";
    $target_file = $target_dir . basename($_FILES["pdf"]["name"]);
    move_uploaded_file($_FILES["pdf"]["tmp_name"], $target_file);

    // Insert the lecturer's information into the database
    $sql = "INSERT INTO lecturers (firstname, lastname, email, password, nic, cv, module1, module2, module3)
            VALUES ('$firstname', '$lastname', '$email', '$password', '$nic', '$cv', '$module1', '$module2', '$module3')";

    if ($conn->query($sql) === TRUE) {
        echo "Lecturer signed up successfully.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the database connection
$conn->close();
?>
