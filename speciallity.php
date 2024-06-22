<?php include "includes/header.php";
$getslug = $_REQUEST['slug'];
?>
<section class="cardiologysection">
    <ul class="d-flex align-items-center">
        <li class="w-50">
            <div class="home-info-bg">
                <div class="banner-img"><img src="<?php echo BASE_URL ?>assets/images/plus.svg" alt=""></div>
                <div class="home-detail">
                    <h1>All Medical & Surgical Specialities</h1>
                </div>
            </div>
        </li>
        <li class="w-50">
            <span><img src="<?php echo BASE_URL ?>assets/images/specialityhomeimg.png" alt=""></span>
        </li>
    </ul>
    <?php include "includes/socialinks.php"; ?>
</section>

<section class="appoinmentmainsec">
    <div class="container">
        <ul class="speciality-content">
            <li class="speciality-bg">
                <div class="speciality-iconbg">
                    <img src="<?php echo BASE_URL ?>assets/images/specialty-icon/accident-and-emergency-department.png" alt="">
                </div>
                <div class="speciality-text">
                    <a href="<?php echo BASE_URL ?>speciality/accident-and-emergency-department">
                        <h5>Accident & Emergency</h5>
                    </a>
                </div>
            </li>
            <li class="speciality-bg">
                <div class="speciality-iconbg">
                    <img src="<?php echo BASE_URL ?>assets/images/specialty-icon/Anesthesiology-ICU.png"
                        alt="speciality/accident-and-emergency-department">
                </div>
                <div class="speciality-text">
                    <a href="<?php echo BASE_URL ?>speciality/anesthesiology-and-intensive-care-unit">
                        <h5>Anesthesiology & ICU</h5>
                    </a>
                </div>
            </li>
            <li class="speciality-bg">
                <div class="speciality-iconbg">
                    <img src="<?php echo BASE_URL ?>assets/images/specialty-icon/Cardiac-Sciences.png" alt="">
                </div>
                <div class="speciality-text">
                    <a href="<?php echo BASE_URL ?>speciality/cardiology-interventional-cardiology"><a
                            href="<?php echo BASE_URL ?>cardiology.php">
                            <h5>Cardiac Sciences</h5>
                        </a>
                </div>
            </li>
            <li class="speciality-bg">
                <div class="speciality-iconbg">
                    <img src="<?php echo BASE_URL ?>assets/images/specialty-icon/Dental.png" alt="">
                </div>
                <div class="speciality-text">
                    <a href="<?php echo BASE_URL ?>speciality/dentistry-and-orthodontics-dental">
                        <h5>Dental</h5>
                    </a>
                </div>
            </li>
            <li class="speciality-bg">
                <div class="speciality-iconbg">
                    <img src="<?php echo BASE_URL ?>assets/images/specialty-icon/Dermatology.png" alt="">
                </div>
                <div class="speciality-text">
                    <a href="<?php echo BASE_URL ?>speciality/dermatology">
                        <h5>Dermatology</h5>
                    </a>
                </div>
            </li>
            <li class="speciality-bg">
                <div class="speciality-iconbg">
                    <img src="<?php echo BASE_URL ?>assets/images/specialty-icon/Endocrinology.png" alt="">
                </div>
                <div class="speciality-text">
                    <a href="<?php echo BASE_URL ?>speciality/endocrinology">
                        <h5>Endocrinology</h5>
                    </a>
                </div>
            </li>
            <li class="speciality-bg">
                <div class="speciality-iconbg">
                    <img src="<?php echo BASE_URL ?>assets/images/specialty-icon/Gastroenterology.png" alt="">
                </div>
                <div class="speciality-text">
                    <a href="<?php echo BASE_URL ?>speciality/gastroenterology">
                        <h5>Gastroenterology</h5>
                    </a>
                </div>
            </li>
            <li class="speciality-bg">
                <div class="speciality-iconbg">
                    <img src="<?php echo BASE_URL ?>assets/images/specialty-icon/General-Minimal-Access-Surgery.png" alt="">
                </div>
                <div class="speciality-text">
                    <a href="<?php echo BASE_URL ?>speciality/minimal-access-surgery">
                        <h5>General & Minimal Access Surgery</h5>
                    </a>
                </div>
            </li>
            <li class="speciality-bg">
                <div class="speciality-iconbg">
                    <img src="<?php echo BASE_URL ?>assets/images/specialty-icon/General-Practioner.png" alt="">
                </div>
                <div class="speciality-text">
                    <a href="<?php echo BASE_URL ?>speciality/general-practitioner">
                        <h5>General Practitioner</h5>
                    </a>
                </div>
            </li>
            <li class="speciality-bg">
                <div class="speciality-iconbg">
                    <img src="<?php echo BASE_URL ?>assets/images/specialty-icon/Internal-Medicine.png" alt="">
                </div>
                <div class="speciality-text">
                    <a href="<?php echo BASE_URL ?>speciality/internal-medicine">
                        <h5>Internal Medicine</h5>
                    </a>
                </div>
            </li>
            <li class="speciality-bg">
                <div class="speciality-iconbg">
                    <img src="<?php echo BASE_URL ?>assets/images/specialty-icon/Laboratory.png" alt="">
                </div>
                <div class="speciality-text">
                    <a href="<?php echo BASE_URL ?>speciality/laboratory">
                        <h5>Laboratory</h5>
                    </a>
                </div>
            </li>
            <li class="speciality-bg">
                <div class="speciality-iconbg">
                    <img src="<?php echo BASE_URL ?>assets/images/specialty-icon/Obstetrics-Gynaecology.png" alt="">
                </div>
                <div class="speciality-text">
                    <a href="<?php echo BASE_URL ?>speciality/obstetrics-and-gynecology">
                        <h5>Obstetrics & Gynaecology</h5>
                    </a>
                </div>
            </li>
            <li class="speciality-bg">
                <div class="speciality-iconbg">
                    <img src="<?php echo BASE_URL ?>assets/images/specialty-icon/Otorhinolaryngology-ENT.png" alt="">
                </div>
                <div class="speciality-text">
                    <a href="<?php echo BASE_URL ?>speciality/ophthalmology">
                        <h5>Ophthalmology</h5>
                    </a>
                </div>
            </li>
            <li class="speciality-bg">
                <div class="speciality-iconbg">
                    <img src="<?php echo BASE_URL ?>assets/images/specialty-icon/Orthopaedics.png" alt="">
                </div>
                <div class="speciality-text">
                    <a href="<?php echo BASE_URL ?>speciality/spine-and-orthopaedic-surgery">
                        <h5>Orthopaedics</h5>
                    </a>
                </div>
            </li>
            <li class="speciality-bg">
                <div class="speciality-iconbg">
                    <img src="<?php echo BASE_URL ?>assets/images/specialty-icon/Otorhinolaryngology-ENT.png" alt="">
                </div>
                <div class="speciality-text">
                    <a href="<?php echo BASE_URL ?>speciality/otorhinolaryngology-ent">
                        <h5>Otorhinolaryngology(ENT)</h5>
                    </a>
                </div>
            </li>
              <li class="speciality-bg">
                    <div class="speciality-iconbg">
                        <img src="<?php echo BASE_URL ?>assets/images/specialty-icon/Pain-Management-Clinic.png" alt="">
                    </div>
                    <div class="speciality-text">
                        <a href="<?php echo BASE_URL ?>speciality/pain-management-clinic">
                            <h5>Pain Management Clinic</h5>
                        </a>
                    </div>
                </li>
                 <li class="speciality-bg">
                    <div class="speciality-iconbg">
                        <img src="<?php echo BASE_URL ?>assets/images/specialty-icon/Paediatrics-Neonatology.png" alt="">
                    </div>
                    <div class="speciality-text">
                        <a href="<?php echo BASE_URL ?>speciality/pediatrics-and-neonatology">
                            <h5>Pediatrics & Neonatology</h5>
                        </a>

                    </div>
                </li>
                <li class="speciality-bg">
                    <div class="speciality-iconbg">
                        <img src="<?php echo BASE_URL ?>assets/images/specialty-icon/Psychiatry-Psychology-Counselling-Unit.png" alt="">
                    </div>
                    <div class="speciality-text">
                        <a href="<?php echo BASE_URL ?>speciality/psychiatry">
                            <h5>Psychiatry, Psychology & Counselling Unit</h5>
                        </a>

                    </div>
                </li>
                
                <li class="speciality-bg">
                    <div class="speciality-iconbg">
                        <img src="<?php echo BASE_URL ?>assets/images/specialty-icon/Neuro-Sciences.png" alt="">
                    </div>
                    <div class="speciality-text">
                        <a href="<?php echo BASE_URL ?>speciality/neurosciences">
                            <h5>Neuro Sciences</h5>
                        </a>

                    </div>
                </li>
                
                 <li class="speciality-bg">
                    <div class="speciality-iconbg">
                        <img src="<?php echo BASE_URL ?>assets/images/specialty-icon/Plastic-Aesthetic-Reconstructive-Surgery.png" alt="">
                    </div>
                    <div class="speciality-text">
                        <a href="<?php echo BASE_URL ?>speciality/plastic-aesthetic-and-reconstructive-surgery">
                            <h5>Plastic, Aesthetic & Reconstructive Surgery</h5>
                        </a>

                    </div>
                </li>
                <li class="speciality-bg">
                    <div class="speciality-iconbg">
                        <img src="<?php echo BASE_URL ?>assets/images/specialty-icon/Radio-Imaging.png" alt="">
                    </div>
                    <div class="speciality-text">
                        <a href="<?php echo BASE_URL ?>speciality/radiology-and-imaging">
                            <h5>Radiology & Imaging</h5>
                        </a>

                    </div>
                </li>
                   <li class="speciality-bg">
                    <div class="speciality-iconbg">
                        <img src="<?php echo BASE_URL ?>assets/images/specialty-icon/Rehabilitation-Physiotherapy.png" alt="">
                    </div>
                    <div class="speciality-text">
                        <a href="<?php echo BASE_URL ?>speciality/rehabilitation-and-physiotherapy">
                            <h5>Rehabilitation & Physiotherapy</h5>
                        </a>

                    </div>
                </li>
                 <li class="speciality-bg">
                    <div class="speciality-iconbg">
                        <img src="<?php echo BASE_URL ?>assets/images/specialty-icon/Respiratory-Medicine-Pulmonology.png" alt="">
                    </div>
                    <div class="speciality-text">
                        <a href="<?php echo BASE_URL ?>speciality/respiratory-medicine-pulmonology">
                            <h5>Respiratory Medicine
                                (Pulmonology)</h5>
                        </a>

                    </div>
                </li>
                
                 <li class="speciality-bg">
                    <div class="speciality-iconbg">
                        <img src="<?php echo BASE_URL ?>assets/images/specialty-icon/Urology.png" alt="">
                    </div>
                    <div class="speciality-text">
                        <a href="<?php echo BASE_URL ?>speciality/urology">
                            <h5>Urology</h5>
                        </a>

                    </div>
                </li>
                <li class="speciality-bg">
                    <div class="speciality-iconbg">
                        <img src="<?php echo BASE_URL ?>assets/images/specialty-icon/Clinical-Nutrition-Dietary-Department.png" alt="">
                    </div>
                    <div class="speciality-text">
                        <a href="<?php echo BASE_URL ?>speciality/clinical-nutrition-and-dietary-department">
                            <h5>Clinical Nutrition &
                                Dietary Department</h5>
                        </a>

                    </div>
                </li>
                
                
        </ul>
       
    </div>
    </div>
</section>
<?php include "includes/footer.php"; ?>
<script>
document.getElementById('more-btn').addEventListener('click', function() {
    var specialityContent = document.getElementById('speciality-content');
    if (specialityContent.style.display === 'none' || specialityContent.style.display === '') {
        specialityContent.style.display = 'flex';
    } else {
        specialityContent.style.display = 'none';
    }
});
</script>