<?php include "includes/header.php"; ?>  
	<section class="cardiologysection">
        <ul class="d-flex align-items-center">
            <li class="w-50">
                <div class="home-info-bg">
                    <div class="banner-img"><img src="<?php echo BASE_URL ?>assets/images/plus.svg" alt=""></div>
                    <div class="home-detail">
                        <h1 class="color-pink">FIND YOUR DOCTOR</h1>
                    </div>
                </div>
            </li>
            <li class="w-50">
                <span><img src="<?php echo BASE_URL ?>assets/images/eyecarehomeimg.png" alt=""></span>
            </li>
        </ul>
        <?php include "includes/socialinks.php"; ?> 
    </section>


    <section class="doctors">
        <div class="container">
            <div class="container-bg">
                <div class="eyecare-doctors find row">
				    <?php 
					$sql = "SELECT * FROM tbl_team WHERE slug NOT LIKE '%-ar'";
					$result = $conn->query($sql);
					while($row = $result->fetch_assoc()) {
						$checkImagePath = "";
						$checkImagePath = validateRemoteImageUrl($row['media']);
						if($checkImagePath == "Valid"){
					?>
                    <div class="col-lg-3 col-md-3 col-sm-3">
                        <div class="item bg-pink">
                            <div class="categorymain">
                                <div class="doctor-title">
                                    <h5><?php echo $row['title'] ?></h5>
                                </div>
                                <div class="doctorimg">
                                    <img src="<?php echo $row['media'] ?>" alt="" width="350" height="525" >
									
                                </div>
                                <div class="item-info doctor-info">
                                    <h5><a href="doctor/<?php echo $row['slug'] ?>"><?php echo $row['title'] ?></a></h5>
                                    <h6><?php echo $row['excert'] ?></h6>
                                </div>
                            </div>
                        </div>
                    </div>
					<?php } } ?>
                    <div class="col-lg-6 col-sm-3">
                        <div class="">
                            <div class="">
								<iframe width="700" height="780" frameborder="0" scrolling="no"  src="<?php echo APPOINTMENT_BASE_URL; ?>"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
 <?php include "includes/footer.php"; ?>