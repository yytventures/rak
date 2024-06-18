<?php
error_reporting(E_ALL);
ini_set('max_execution_time', 0);
include "db.php";
// Create connection
$conn = new mysqli(servername, username, password, database);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
<!doctype html>
<html dir="ltr" lang="en-US">

<head>
    <title>RAK Hospital</title>
    <link type="image/x-icon" rel="shortcut icon" href="assets/images/favicon.avif" />
    <!-- Required meta tags -->
    <meta charset="UTF-8" />
    <meta name="HandheldFriendly" content="true">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700" />
    <link type="text/css" rel="stylesheet" href="<?php echo BASE_URL ?>assets/css/all.min.css" />
    <link type="text/css" rel="stylesheet" href="<?php echo BASE_URL ?>assets/css/bootstrap.min.css" />
    <link type="text/css" rel="stylesheet" href="<?php echo BASE_URL ?>assets/css/jquery.fancybox.min.css" />
    <link type="text/css" rel="stylesheet" href="<?php echo BASE_URL ?>assets/css/owl.carousel.min.css" />
    <link type="text/css" rel="stylesheet" href="<?php echo BASE_URL ?>assets/font/stylesheet.css" />
    <link type="text/css" rel="stylesheet" href="<?php echo BASE_URL ?>assets/css/styles.css" />
    <link type="text/css" rel="stylesheet" href="<?php echo BASE_URL ?>assets/css/responsive.css" />
    <script src="<?php echo BASE_URL ?>assets/js/jquery.min.js"></script>
    <style>
    a.livechat {
        visibility: hidden;

    }
    </style>

</head>

<body>
    <!--Header-->
    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="<?php echo BASE_URL ?>index.php"><img
                        src="<?php echo BASE_URL ?>assets/images/logo.avif" alt="logo"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span
                        class="navbar-toggler-icon">
                        <div class="plate plate4" onclick="this.classList.toggle('active')">
                            <svg class="burger" version="1.1" height="100" width="100" viewBox="0 0 100 100">
                                <path class="line line1" d="M 50,35 H 30" />
                                <path class="line line2" d="M 50,35 H 70" />
                                <path class="line line3" d="M 50,50 H 30" />
                                <path class="line line4" d="M 50,50 H 70" />
                                <path class="line line5" d="M 50,65 H 30" />
                                <path class="line line6" d="M 50,65 H 70" />
                            </svg>
                            <svg class="x" version="1.1" height="100" width="100" viewBox="0 0 100 100">
                                <path class="line" d="M 34,32 L 66,68" />
                                <path class="line" d="M 66,32 L 34,68" />
                            </svg>
                        </div>
                    </span></button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="socialmedia">
                        <!--  <li>
                            <a href="#">
                                <img src="assets/images/msg.avif" alt="">
                                Feedback
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/images/call.avif" alt="">
                                Request
                                Call Back
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/images/admin.avif" alt="">
                                Login
                            </a>
                        </li> -->
                    </ul>
                    <?php include "menu.php"; ?>
                    <div class="btns">
                        <span><i class="fa-solid fa-globe"></i></span>
                        <select name="" id="">
                            <option value="">English</option>
                            <option value="">العربية</option>
                        </select>
                    </div>

                </div>
                <div class="searchbutton">
                    <input type="search" id="searchdoc" name="searchdoc"
                        placeholder="Search for Doctors, Specialities, Treatments…">
                    <a href="javascript:void(0)" onclick="search_title();"><img
                            src="<?php echo BASE_URL ?>assets/images/search.avif" alt=""></a>
                </div>
            </div>

        </nav>
        <!-- Modal -->
    </header>
    <script>
    function search_title() {
        var bla = $('#searchdoc').val();
        window.location.href = "https://rakhospital.com/?s=" + bla + "&lang=en";
    }
    </script>