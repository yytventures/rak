<?php include "includes/header.php"; ?>
<style>
.custom_button {
    background: #DFB0CD;
    border: 2px solid #C383A6;
    border-radius: 10px;
    padding: 10px 30px;
    font-size: 21px;
    color: #000;
    font-weight: 600;
}
</style>
<section class="cardiologysection findyourdoctors">
    <ul class="d-flex align-items-center">
        <li class="w-50">
            <div class="home-info-bg">
                <div class="banner-img"><img src="<?php echo BASE_URL ?>assets/images/plus.svg" alt=""></div>
                <div class="home-detail">
                    <h1 class="color-pink">FIND YOUR DOCTOR</h1>
                </div>
            </div>
        </li>
        <li class="w-50 searcharea">
            <div class="banner-search">
			    <form name="search" action="findyourdoctors.php" method="GET" >
                <div class="search-container">
                    <div class="search-box">
                        <img src="<?php echo BASE_URL ?>assets/images/search.avif" alt="">
                        <select id="searchSpeciality" name="searchSpeciality">
                            <option value="">Search By Speciality</option>
                            <option value="Accident & Emergency" <?php echo (@$_GET['searchSpeciality'] == "Accident & Emergency")?'selected="selected"':'' ?>>Accident & Emergency</option>
                            <option value="Anesthesiology & ICU" <?php echo (@$_GET['searchSpeciality'] == "Anesthesiology & ICU")?'selected="selected"':'' ?>>Anesthesiology & ICU</option>
                            <!-- Add more options as needed -->
                        </select>
                    </div>
                    <div class="search-box">
                        <img src="<?php echo BASE_URL ?>assets/images/search.avif" alt="">
                        <input type="search" id="searchName" name="searchName" value="<?php echo @$_GET['searchName']; ?>" placeholder="Search By Name">
                    </div>
					<div class="header-right">
					<input type="submit" name="search" value="Search" class="custom_button" />&nbsp;&nbsp;&nbsp;
					<a href="<?php echo BASE_URL ?>findyourdoctors.php" class="custom_button">Reset</a>
					</div>
                </div>
				</form>
            </div>
        </li>
    </ul>
    <?php include "includes/socialinks.php"; ?>
</section>


<section class="doctors">
    <div class="container">
        <div class="container-bg">
            <div class="eyecare-doctors find row">
                <?php
				$where = " ";
				if(isset($_GET['searchName']) && $_GET['searchName'] !="")
				{
					$where .= " AND title LIKE '%".$_GET['searchName']."%'";
				}
				if(isset($_GET['searchSpeciality']) && $_GET['searchSpeciality'] !="")
				{
					$where .= " AND MATCH (excert,content) AGAINST ('".$_GET['searchSpeciality']."')";
				}
                $sql = "SELECT * FROM tbl_team WHERE slug NOT LIKE '%-ar' $where";
                $result = $conn->query($sql);
                while ($row = $result->fetch_assoc()) {
                    $checkImagePath = "";
                    $checkImagePath = @validateRemoteImageUrl($row['media']);
                    if ($checkImagePath == "Valid") {
                        ?>
                        <div class="col-lg-3 col-md-3 col-sm-3">
                            <div class="item bg-pink">
                                <div class="categorymain">
                                    <div class="doctor-title">
                                        <h5><?php echo $row['title'] ?></h5>
                                    </div>
                                    <div class="doctorimg">
                                        <img src="<?php echo $row['media'] ?>" alt="" width="350" height="525">

                                    </div>
                                    <div class="item-info doctor-info">
                                        <h5><a href="doctor/<?php echo $row['slug'] ?>"><?php echo $row['title'] ?></a></h5>
                                        <h6><?php echo $row['excert'] ?></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php }
                } ?>
                <div class="col-lg-6 col-sm-3">
                    <div class="">
                        <div class="">
                            <iframe width="700" height="780" frameborder="0" scrolling="no"
                                src="<?php echo APPOINTMENT_BASE_URL; ?>"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<?php include "includes/footer.php"; ?>

<script>
    function search_title() {
        var speciality = document.getElementById('searchSpeciality').value;
        var name = document.getElementById('searchName').value;
        // Add your search logic here
        console.log('Searching for', speciality, name);
    }
</script>