<?php include "includes/header.php"; ?> 
<?php 
$getslug = $_REQUEST['slug'];
$sql = "SELECT * FROM tbl_team WHERE slug = '".trim($getslug)."'";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
//print_r($row);
?>
    <section class="cardiologysection">
        <ul class="d-flex align-items-center">
            <li class="w-50">
                <div class="home-info-bg">
                    <div class="banner-img"><img src="<?php echo BASE_URL ?>assets/images/plus.svg" alt=""></div>
                    <div class="home-detail">
                        <h1 class="color-pink"><?php echo $row['title'] ?></h1>
                        <p><?php echo $row['excert'] ?></p>
                    </div>
                </div>
            </li>
            <li class="w-50">
                <span><img src="<?php echo BASE_URL ?>assets/images/abouthomeimg.png" alt=""></span>
            </li>
        </ul>
		<?php include "includes/socialinks.php"; ?> 
    </section>


    <section class="about-tabsection">
        <div class="container">
            <div class="row align-items-start">
                <div class="col-lg-4">
                    <div class="about-img border-bottom">
                        <img src="<?php echo $row['media'] ?>" alt="">
                    </div>
                    <div class="doctor-info">
                        <?php echo $row['excert'] ?>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="about-info">
                        <h2>About <?php echo $row['title'] ?></h2>
                        <?php echo $row['content'] ?>
                    </div>
                    <div class="margin-top">
                        <div class="">
                            <iframe width="100%" height="780" frameborder="0" scrolling="no"  src="<?php echo APPOINTMENT_BASE_URL; ?>"></iframe>
                        </div>
                    </div>
                </div>
            </div>
    </section>
   <?php include "includes/footer.php"; ?>