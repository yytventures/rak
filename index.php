<?php include "includes/header.php"; ?>
<section class="heresection">
    <div class="container">
      <?php include "includes/socialinks.php"; ?>
            <!-- <a href="#" class="livechat">Live Chat</a>
              
                <span class="goldimg"><img src="<?php echo BASE_URL ?>assets/images/gold.avif" alt=""></span>
                <h1>A MULTI-SPECIALITY TERTIARY CARE HOSPITAL</h1> -->
        </div>

    </div>
</section>

<section class="appoinmentmainsec">
    <div class="container">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
                    type="button" role="tab" aria-controls="pills-home" aria-selected="true"><img
                        src="<?php echo BASE_URL ?>assets/images/appoinmentimg1.avif" alt=""> Book
                    Appointment</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
                    type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><img
                        src="<?php echo BASE_URL ?>assets/images/appoinmentimg2.avif" alt=""> Virtual Second
                    Opinion</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact"
                    type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><img
                        src="<?php echo BASE_URL ?>assets/images/appoinmentimg3.avif" alt=""> Health
                    Checkup</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-Maternity-tab" data-bs-toggle="pill"
                    data-bs-target="#pills-Maternity" type="button" role="tab" aria-controls="pills-Maternity"
                    aria-selected="false"><img src="<?php echo BASE_URL ?>assets/images/appoinmentimg4.avif" alt="">
                    Maternity
                    Packages</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-homecare-tab" data-bs-toggle="pill" data-bs-target="#pills-homecare"
                    type="button" role="tab" aria-controls="pills-homecare" aria-selected="false"><img
                        src="<?php echo BASE_URL ?>assets/images/appoinmentimg5.avif" alt=""> Home Care</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-book-tab" data-bs-toggle="pill" data-bs-target="#pills-book"
                    type="button" role="tab" aria-controls="pills-book" aria-selected="false"><img
                        src="<?php echo BASE_URL ?>assets/images/appoinmentimg6.avif" alt=""> Book A Test</button>
            </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div class="row">
                    <div class="col-lg-3 home-titlesection">
                        <div class="appoinmentdetail">
                            <span>Specialities</span>

                            <h3>Tertiary Care Health
                                Services Across
                                All Major Specialities</h3>
                        </div>
                    </div>
                    <div class="col-lg-5 home-menu">
                        <div class="menu treatmentoption">
                            <ul>
                                <li>
                                    <img src="<?php echo BASE_URL ?>assets/images/heart.svg" alt="Cardiology">
                                    <a href="<?php echo BASE_URL ?>speciality/cardiac-surgery">Cardiology & Cardiac
                                        Surgery</a>
                                    <span class="arrow"><i class="fa-solid fa-angle-right"></i></span>
                                </li>
                                <li>
                                    <img src="<?php echo BASE_URL ?>assets/images/head.avif" alt="Neurosciences">
                                    <a href="<?php echo BASE_URL ?>speciality/neurosciences">Neurosciences</a>
                                    <span class="arrow"><i class="fa-solid fa-angle-right"></i></span>
                                </li>
                                <li>
                                    <img src="<?php echo BASE_URL ?>assets/images/keydney.avif" alt="Gastroenterology">
                                    <a href="<?php echo BASE_URL ?>speciality/gastroenterology">Gastroenterology</a>
                                    <span class="arrow"><i class="fa-solid fa-angle-right"></i></span>
                                </li>
                                <li>
                                    <img src="<?php echo BASE_URL ?>assets/images/leg.avif" alt="Bone & Joints">
                                    <a href="<?php echo BASE_URL ?>speciality/spine-and-orthopaedic-surgery">Bone &
                                        Joints</a>
                                    <span class="arrow"><i class="fa-solid fa-angle-right"></i></span>
                                </li>
                                <li>
                                    <img src="<?php echo BASE_URL ?>assets/images/generalmedicin.avif"
                                        alt="General Medicine">
                                    <a href="<?php echo BASE_URL ?>speciality/general-practitioner">General Medicine</a>
                                    <span class="arrow"><i class="fa-solid fa-angle-right"></i></span>
                                </li>
                                <li>
                                    <img src="<?php echo BASE_URL ?>assets/images/svg/viewall.svg" alt="View All">
                                    <a href="<?php echo BASE_URL ?>speciallity">View All Specialities</a>
                                    <span class="arrow"><i class="fa-solid fa-angle-right"></i></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 home-iframeform">
                        <div class="">
                            <iframe width="100%" height="720" frameborder="0" scrolling="yes"
                                src="<?php echo APPOINTMENT_BASE_URL; ?>"></iframe>
                        </div>
                        <!--<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">-->
                        <!--    <li class="nav-item" role="presentation">-->
                        <!--        <button class="nav-link active" id="pills-male-tab" data-bs-toggle="pill"-->
                        <!--            data-bs-target="#pills-male" type="button" role="tab" aria-controls="pills-male"-->
                        <!--            aria-selected="true">Male</button>-->
                        <!--    </li>-->
                        <!--    <li class="nav-item" role="presentation">-->
                        <!--        <button class="nav-link" id="pills-Female-tab" data-bs-toggle="pill"-->
                        <!--            data-bs-target="#pills-Female" type="button" role="tab"-->
                        <!--            aria-controls="pills-Female" aria-selected="false">Female</button>-->
                        <!--    </li>-->

                        <!--</ul>-->
                        <!--<div class="tab-content" id="pills-tabContent">-->
                        <!--    <div class="tab-pane fade show active" id="pills-male" role="tabpanel"-->
                        <!--        aria-labelledby="pills-male-tab">-->
                        <!-- <span>
                            <!--            <img src="<?php echo BASE_URL ?>assets/images/malebody.avif" alt="">-->
                        <!--        </span> -->
                        <!--        <div class="set-organs">-->
                        <!--            <img src="<?php echo BASE_URL ?>assets/images/body.svg" alt="body image" class="img-fluid"-->
                        <!--                id="body-image">-->
                        <!--            <div class="liver-set organ">-->
                        <!--                <a id="liver-set" class="showSingle" target="liver">-->
                        <!--                    <img data-src="https://www.metropolisindia.com/newdata/images/liver-inactive.svg"-->
                        <!--                        id="liver" alt="organs images"-->
                        <!--                        class="img-fluid lazyload organ-images">-->
                        <!--                    <div class="organ-tooltip display-none">-->
                        <!--                        <div class="arrow" style="top: 13px;"></div>-->
                        <!--                        <div class="organ-tooltip-inner">liver</div>-->
                        <!--                    </div>-->
                        <!--                </a>-->
                        <!--            </div>-->
                        <!--            <div class="heart-set organ">-->
                        <!--                <a id="heart-set" class="showSingle" target="heart">-->
                        <!--                    <img data-src="https://www.metropolisindia.com/newdata/images/heart-inactive.svg"-->
                        <!--                        id="heart" alt="organs images"-->
                        <!--                        class="img-fluid lazyload organ-images">-->
                        <!--                    <div class="organ-tooltip display-none">-->
                        <!--                        <div class="arrow" style="top: 13px;"></div>-->
                        <!--                        <div class="organ-tooltip-inner">heart</div>-->
                        <!--                    </div>-->
                        <!--                </a>-->
                        <!--            </div>-->
                        <!--            <div class="brain-set organ">-->
                        <!--                <a id="brain-set" class="showSingle" target="brain">-->
                        <!--                    <img data-src="https://www.metropolisindia.com/newdata/images/brain-inactive.svg"-->
                        <!--                        id="brain" alt="organs images"-->
                        <!--                        class="img-fluid lazyload organ-images">-->
                        <!--                    <div class="organ-tooltip display-none">-->
                        <!--                        <div class="arrow" style="top: 13px;"></div>-->
                        <!--                        <div class="organ-tooltip-inner">brain</div>-->
                        <!--                    </div>-->
                        <!--                </a>-->
                        <!--            </div>-->
                        <!--            <div class="lungs-set organ">-->
                        <!--                <a id="lungs-set" class="showSingle" target="lungs">-->
                        <!--                    <img data-src="https://www.metropolisindia.com/newdata/images/lungs-inactive.svg"-->
                        <!--                        id="lungs" alt="organs images"-->
                        <!--                        class="img-fluid lazyload organ-images" onclick="change('lung')">-->
                        <!--                    <div class="organ-tooltip display-none">-->
                        <!--                        <div class="arrow" style="top: 13px;"></div>-->
                        <!--                        <div class="organ-tooltip-inner">lungs</div>-->
                        <!--                    </div>-->
                        <!--                </a>-->
                        <!--            </div>-->
                        <!--            <div class="stomach-set organ">-->
                        <!--                <a id="stomach-set" class="showSingle" target="stomach">-->
                        <!--                    <img data-src="https://www.metropolisindia.com/newdata/images/stomach-inactive.svg"-->
                        <!--                        id="stomach" alt="organs images"-->
                        <!--                        class="img-fluid lazyload organ-images">-->
                        <!--                    <div class="organ-tooltip display-none">-->
                        <!--                        <div class="arrow" style="top: 13px;"></div>-->
                        <!--                        <div class="organ-tooltip-inner">stomach</div>-->
                        <!--                    </div>-->
                        <!--                </a>-->
                        <!--            </div>-->
                        <!--            <div class="intestines-set organ">-->
                        <!--                <a id="intestines-set" class="showSingle" target="intestines">-->
                        <!--                    <img data-src="https://www.metropolisindia.com/newdata/images/intestines-inactive.svg"-->
                        <!--                        id="intestines" alt="organs images"-->
                        <!--                        class="img-fluid lazyload organ-images">-->
                        <!--                    <div class="organ-tooltip display-none">-->
                        <!--                        <div class="arrow" style="top: 13px;"></div>-->
                        <!--                        <div class="organ-tooltip-inner">intestines</div>-->
                        <!--                    </div>-->
                        <!--                </a>-->
                        <!--            </div>-->
                        <!--            <div class="kidney-set organ">-->
                        <!--                <a id="kidney-set" class="showSingle" target="kidney">-->
                        <!--                    <img data-src="https://www.metropolisindia.com/newdata/images/kidney-inactive.svg"-->
                        <!--                        id="kidney" alt="organs images"-->
                        <!--                        class="img-fluid lazyload organ-images">-->
                        <!--                    <div class="organ-tooltip display-none">-->
                        <!--                        <div class="arrow" style="top: 13px;"></div>-->
                        <!--                        <div class="organ-tooltip-inner">kidney</div>-->
                        <!--                    </div>-->
                        <!--                </a>-->
                        <!--            </div>-->
                        <!--            <div class="pancreas-set organ">-->
                        <!--                <a id="pancreas-set" class="showSingle" target="pancreas">-->
                        <!--                    <img data-src="https://www.metropolisindia.com/newdata/images/pancreas-inactive.svg"-->
                        <!--                        id="pancreas" alt="organs images"-->
                        <!--                        class="img-fluid lazyload organ-images">-->
                        <!--                    <div class="organ-tooltip display-none">-->
                        <!--                        <div class="arrow" style="top: 13px;"></div>-->
                        <!--                        <div class="organ-tooltip-inner">pancreas</div>-->
                        <!--                    </div>-->
                        <!--                </a>-->
                        <!--            </div>-->
                        <!--            <div class="thyroid-set organ">-->
                        <!--                <a id="thyroid-set" class="showSingle" target="thyroid">-->
                        <!--                    <img data-src="https://www.metropolisindia.com/newdata/images/thyroid-inactive.svg"-->
                        <!--                        id="thyroid" alt="organs images"-->
                        <!--                        class="img-fluid lazyload organ-images">-->
                        <!--                    <div class="organ-tooltip display-none">-->
                        <!--                        <div class="arrow" style="top: 13px;"></div>-->
                        <!--                        <div class="organ-tooltip-inner">thyroid</div>-->
                        <!--                    </div>-->
                        <!--                </a>-->
                        <!--            </div>-->
                        <!--            <div class="male_reproductive_system-set organ">-->
                        <!--                <a id="male_reproductive_system-set" class="showSingle"-->
                        <!--                    target="male_reproductive_system">-->
                        <!--                    <img data-src="https://www.metropolisindia.com/newdata/images/male_reproductive_system-inactive.svg"-->
                        <!--                        id="male_reproductive_system" alt="organs images"-->
                        <!--                        class="img-fluid lazyload organ-images">-->
                        <!--                    <div class="organ-tooltip display-none">-->
                        <!--                        <div class="arrow" style="top: 13px;"></div>-->
                        <!--                        <div class="organ-tooltip-inner">male reproductive system</div>-->
                        <!--                    </div>-->
                        <!--                </a>-->
                        <!--            </div>-->
                        <!--            <div class="female_reproductive_system-set organ">-->
                        <!--                <a id="female_reproductive_system-set" class="showSingle"-->
                        <!--                    target="female_reproductive_system">-->
                        <!--                    <img data-src="https://www.metropolisindia.com/newdata/images/female_reproductive_system-inactive.svg"-->
                        <!--                        id="female_reproductive_system" alt="organs images"-->
                        <!--                        class="img-fluid lazyload organ-images">-->
                        <!--                    <div class="organ-tooltip display-none">-->
                        <!--                        <div class="arrow" style="top: 13px;"></div>-->
                        <!--                        <div class="organ-tooltip-inner">female reproductive system</div>-->
                        <!--                    </div>-->
                        <!--                </a>-->
                        <!--            </div>-->
                        <!--        </div>-->
                        <!--    </div>-->
                        <!--    <div class="tab-pane fade" id="pills-Female" role="tabpanel"-->
                        <!--        aria-labelledby="pills-Female-tab">-->
                        <!-- <span>
                            <!--            <img src="<?php echo BASE_URL ?>assets/images/malebody.avif" alt="">-->
                        <!--        </span> -->
                        <!--        <div class="set-organs">-->
                        <!--            <img src="<?php echo BASE_URL ?>assets/images/femalebody.svg" alt="body image" class="img-fluid"-->
                        <!--                id="body-image">-->
                        <!--            <div class="liver-set organ">-->
                        <!--                <a id="liver-set" class="showSingle" target="liver">-->
                        <!--                    <img data-src="https://www.metropolisindia.com/newdata/images/liver-inactive.svg"-->
                        <!--                        id="liver" alt="organs images"-->
                        <!--                        class="img-fluid lazyload organ-images">-->
                        <!--                    <div class="organ-tooltip display-none">-->
                        <!--                        <div class="arrow" style="top: 13px;"></div>-->
                        <!--                        <div class="organ-tooltip-inner">liver</div>-->
                        <!--                    </div>-->
                        <!--                </a>-->
                        <!--            </div>-->
                        <!--            <div class="heart-set organ">-->
                        <!--                <a id="heart-set" class="showSingle" target="heart">-->
                        <!--                    <img data-src="https://www.metropolisindia.com/newdata/images/heart-inactive.svg"-->
                        <!--                        id="heart" alt="organs images"-->
                        <!--                        class="img-fluid lazyload organ-images">-->
                        <!--                    <div class="organ-tooltip display-none">-->
                        <!--                        <div class="arrow" style="top: 13px;"></div>-->
                        <!--                        <div class="organ-tooltip-inner">heart</div>-->
                        <!--                    </div>-->
                        <!--                </a>-->
                        <!--            </div>-->
                        <!--            <div class="brain-set organ">-->
                        <!--                <a id="brain-set" class="showSingle" target="brain">-->
                        <!--                    <img data-src="https://www.metropolisindia.com/newdata/images/brain-inactive.svg"-->
                        <!--                        id="brain" alt="organs images"-->
                        <!--                        class="img-fluid lazyload organ-images">-->
                        <!--                    <div class="organ-tooltip display-none">-->
                        <!--                        <div class="arrow" style="top: 13px;"></div>-->
                        <!--                        <div class="organ-tooltip-inner">brain</div>-->
                        <!--                    </div>-->
                        <!--                </a>-->
                        <!--            </div>-->
                        <!--            <div class="lungs-set organ">-->
                        <!--                <a id="lungs-set" class="showSingle" target="lungs">-->
                        <!--                    <img data-src="https://www.metropolisindia.com/newdata/images/lungs-inactive.svg"-->
                        <!--                        id="lungs" alt="organs images"-->
                        <!--                        class="img-fluid lazyload organ-images" onclick="change('lung')">-->
                        <!--                    <div class="organ-tooltip display-none">-->
                        <!--                        <div class="arrow" style="top: 13px;"></div>-->
                        <!--                        <div class="organ-tooltip-inner">lungs</div>-->
                        <!--                    </div>-->
                        <!--                </a>-->
                        <!--            </div>-->
                        <!--            <div class="stomach-set organ">-->
                        <!--                <a id="stomach-set" class="showSingle" target="stomach">-->
                        <!--                    <img data-src="https://www.metropolisindia.com/newdata/images/stomach-inactive.svg"-->
                        <!--                        id="stomach" alt="organs images"-->
                        <!--                        class="img-fluid lazyload organ-images">-->
                        <!--                    <div class="organ-tooltip display-none">-->
                        <!--                        <div class="arrow" style="top: 13px;"></div>-->
                        <!--                        <div class="organ-tooltip-inner">stomach</div>-->
                        <!--                    </div>-->
                        <!--                </a>-->
                        <!--            </div>-->
                        <!--            <div class="intestines-set organ">-->
                        <!--                <a id="intestines-set" class="showSingle" target="intestines">-->
                        <!--                    <img data-src="https://www.metropolisindia.com/newdata/images/intestines-inactive.svg"-->
                        <!--                        id="intestines" alt="organs images"-->
                        <!--                        class="img-fluid lazyload organ-images">-->
                        <!--                    <div class="organ-tooltip display-none">-->
                        <!--                        <div class="arrow" style="top: 13px;"></div>-->
                        <!--                        <div class="organ-tooltip-inner">intestines</div>-->
                        <!--                    </div>-->
                        <!--                </a>-->
                        <!--            </div>-->
                        <!--            <div class="kidney-set organ">-->
                        <!--                <a id="kidney-set" class="showSingle" target="kidney">-->
                        <!--                    <img data-src="https://www.metropolisindia.com/newdata/images/kidney-inactive.svg"-->
                        <!--                        id="kidney" alt="organs images"-->
                        <!--                        class="img-fluid lazyload organ-images">-->
                        <!--                    <div class="organ-tooltip display-none">-->
                        <!--                        <div class="arrow" style="top: 13px;"></div>-->
                        <!--                        <div class="organ-tooltip-inner">kidney</div>-->
                        <!--                    </div>-->
                        <!--                </a>-->
                        <!--            </div>-->
                        <!--            <div class="pancreas-set organ">-->
                        <!--                <a id="pancreas-set" class="showSingle" target="pancreas">-->
                        <!--                    <img data-src="https://www.metropolisindia.com/newdata/images/pancreas-inactive.svg"-->
                        <!--                        id="pancreas" alt="organs images"-->
                        <!--                        class="img-fluid lazyload organ-images">-->
                        <!--                    <div class="organ-tooltip display-none">-->
                        <!--                        <div class="arrow" style="top: 13px;"></div>-->
                        <!--                        <div class="organ-tooltip-inner">pancreas</div>-->
                        <!--                    </div>-->
                        <!--                </a>-->
                        <!--            </div>-->
                        <!--            <div class="thyroid-set organ">-->
                        <!--                <a id="thyroid-set" class="showSingle" target="thyroid">-->
                        <!--                    <img data-src="https://www.metropolisindia.com/newdata/images/thyroid-inactive.svg"-->
                        <!--                        id="thyroid" alt="organs images"-->
                        <!--                        class="img-fluid lazyload organ-images">-->
                        <!--                    <div class="organ-tooltip display-none">-->
                        <!--                        <div class="arrow" style="top: 13px;"></div>-->
                        <!--                        <div class="organ-tooltip-inner">thyroid</div>-->
                        <!--                    </div>-->
                        <!--                </a>-->
                        <!--            </div>-->
                        <!-- <div class="male_reproductive_system-set organ">
                            <!--                <a id="male_reproductive_system-set" class="showSingle"-->
                        <!--                    target="male_reproductive_system">-->
                        <!--                    <img data-src="https://www.metropolisindia.com/newdata/images/male_reproductive_system-inactive.svg"-->
                        <!--                        id="male_reproductive_system" alt="organs images"-->
                        <!--                        class="img-fluid lazyload organ-images">-->
                        <!--                    <div class="organ-tooltip display-none">-->
                        <!--                        <div class="arrow" style="top: 13px;"></div>-->
                        <!--                        <div class="organ-tooltip-inner">male reproductive system</div>-->
                        <!--                    </div>-->
                        <!--                </a>-->
                        <!--            </div> -->
                        <!--            <div class="male_reproductive_system-set femaleorgan organ">-->
                        <!--                <a id="male_reproductive_system-set" class="showSingle"-->
                        <!--                    target="male_reproductive_system">-->
                        <!--                    <img data-src="https://www.metropolisindia.com/newdata/images/female_reproductive_system-inactive.svg"-->
                        <!--                        id="female_reproductive_system" alt="organs images"-->
                        <!--                        class="img-fluid lazyload organ-images">-->
                        <!--                    <div class="organ-tooltip display-none">-->
                        <!--                        <div class="arrow" style="top: 13px;"></div>-->
                        <!--                        <div class="organ-tooltip-inner">female reproductive system</div>-->
                        <!--                    </div>-->
                        <!--                </a>-->
                        <!--            </div>-->
                        <!--        </div>-->
                        <!--    </div>-->

                        <!--</div>-->
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...
            </div>
            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...
            </div>
            <div class="tab-pane fade" id="pills-Maternity" role="tabpanel" aria-labelledby="pills-Maternity-tab">
                ...
            </div>
            <div class="tab-pane fade" id="pills-homecare" role="tabpanel" aria-labelledby="pills-homecare-tab">...
            </div>
            <div class="tab-pane fade" id="pills-book" role="tabpanel" aria-labelledby="pills-book-tab">...
            </div>
        </div>
    </div>
</section>

<section class="expertisesec">
    <div class="container">
        <div class="expertisetitle">
            <h3>Expertise that Saves Lives & Inspires Hope</h3>
            <p>At RAK Hospital, our team of superspecialist doctors delivers the highest quality of care through a
                collaborative, doctor-led model. Our highly experienced physicians, trained at some of the world's
                most prestigious institutions, are recognized experts in their respective fields. Working full-time
                and
                exclusively at RAK Hospital, our doctors provide focused, specialized care while fostering a culture
                of collaboration and integration across multiple specialties. This organizational approach ensures
                comprehensive, patient-centered care that meets the diverse health needs of our community.</p>
            <span><img src="<?php echo BASE_URL ?>assets/images/doctors.avif" alt=""></span>
        </div>
        <div class="button-doctor">
            <a class="btn-submit" href="findyourdoctors.php"> <img
                    src="<?php echo BASE_URL ?>assets/images/find-icon.png" alt="">
                Find a Doctor
            </a>
        </div>
    </div>
</section>

<!--   <section class="rakhintegratedsec">
        <div class="container">
            <div class="rakhintegratedtitle">
                <h3>RAKH Integrated Healthcare Delivery Model</h3>
            </div>

            <div class="tabtitle">
                <h5>CORE VALUES</h5>
                <h5>SERVICE DELIVERY</h5>
            </div>
            <div class="d-flex align-items-start">
                <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home"
                        aria-selected="true">Patient First</button>
                    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile"
                        aria-selected="false">Integrity</button>
                    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages"
                        aria-selected="false">Compassion</button>
                    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings"
                        aria-selected="false">Readiness</button>
                </div>
                <div class="tab-content" id="v-pills-tabContent">

                    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                        aria-labelledby="v-pills-home-tab"><img src="<?php echo BASE_URL ?>assets/images/serviceimg.avif" alt="">
                    </div>
                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
                        aria-labelledby="v-pills-profile-tab"><img src="<?php echo BASE_URL ?>assets/images/serviceimg.avif" alt=""></div>
                    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel"
                        aria-labelledby="v-pills-messages-tab"><img src="<?php echo BASE_URL ?>assets/images/serviceimg.avif" alt="">
                    </div>
                    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel"
                        aria-labelledby="v-pills-settings-tab"><img src="<?php echo BASE_URL ?>assets/images/serviceimg.avif" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section> -->

<section class="rakcare">
    <div class="container">
        <div class="row align-items-start">
            <div class="col-lg-5">
                <div class="rakcaretitle">
                    <h3>Care at RAK Hospital</h3>
                    <p class="card-text">At RAK Hospital, care transcends mere treatment; it embodies compassion,
                        expertise, and unwavering dedication. We prioritize patients' well-being, offering personalized
                        attention and state-of-the-art facilities. From preventive care to recovery, our team empowers
                        patients with knowledge and support, ensuring they feel heard and valued every step of the way.
                        With a focus on innovation and excellence, we set new standards in healthcare, striving to make
                        world-class treatment accessible and affordable. Experience the difference at RAK Hospital,
                        where your health, comfort, and happiness are our utmost priority. Trust us to accompany you on
                        your journey to wellness with care that truly matters.</p>
                </div>
            </div>
            <div class="col-lg-5 mb-4">
                <div class="about-img">
                    <img src="<?php echo BASE_URL ?>assets/images/rak-care.png" alt="">
                </div>
            </div>
        </div>
    </div>
</section>

<section class="servicesec">
        <div class="container">
            <div class="container-bg">
                <div class="servicecalltitle">
                    <h3><span><img src="<?php echo BASE_URL ?>assets/images/servicecall.avif" alt=""></span> Services</h3>
                </div>
                <div class="owl-carousel owl-theme" id="servicesec">
                    <div class="col">
                        <div class="card">
                            <img src="<?php echo BASE_URL ?>assets/images/services-1.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Patient Services</h5>
                                <p class="card-text">The RAK Hospital admissions section strives to ensure that patients and/or their family members are assisted in every possible way.</p>
                                <a href="<?php echo BASE_URL ?>PatientServices.php">Know more <i class="fa-solid fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="<?php echo BASE_URL ?>assets/images/services-2.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Virtual Second Opinion</h5>
                                <p class="card-text">RAK Hospital is delighted to launch Virtual Second Opinions to provide assistance to patients.</p>
                                <a href="#">Know more <i class="fa-solid fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="<?php echo BASE_URL ?>assets/images/services-3.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Hospitality Services</h5>
                                <p class="card-text">We pride ourselves in creating a truly unique and personalized hospitality environment.</p>
                                <a href="<?php echo BASE_URL ?>HospitalityServices.php">Know more <i class="fa-solid fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="<?php echo BASE_URL ?>assets/images/services-1.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Patient Services</h5>
                                <p class="card-text">The RAK Hospital admissions section strives to ensure that patients and/or their family members are assisted in every possible way.</p>
                                <a href="<?php echo BASE_URL ?>PatientServices.php">Know more <i class="fa-solid fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


<section class="servicesec patientstorysec">
    <div class="container">
        <div class="servicecalltitle">
            <h3>Patient Stories & Testimonials</h3>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card">
                    <img src="<?php echo BASE_URL ?>assets/images/stories1.avif" class="card-img-top" alt="...">
                    <div class="card-body">

                        <p class="card-text">“I was transported by air ambulance from Ethiopia to RAK Hospital with
                            a history of headache followed by loss of
                            consciousness and weakness of my upper & lower limbs. Dr. Tinku Jose did my surgery
                            successfully and now I can move my
                            limbs. I thank all at RAK Hospital for their excellent services I got throughout.”</p>
                        <p><span>Mr. Negash Legesse,</span> Ethiopian Ambassador</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="<?php echo BASE_URL ?>assets/images/stories2.avif" class="card-img-top" alt="...">
                    <div class="card-body">

                        <p class="card-text">“Since childhood I was wearing glasses and I decided to do the LASIK
                            surgery at RAK Eye Care Center with Dr. Archana
                            Sood. It was a very fast and painless operation done in 25 minutes and achieved good
                            results. Now I’m able to see
                            everything clearly without glasses. I’m very happy with the result.”</p>
                        <p><span>Ms. Sarah,</span> Syria</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="<?php echo BASE_URL ?>assets/images/stories3.avif" class="card-img-top" alt="...">
                    <div class="card-body">

                        <p class="card-text">“When my happy vacation turned into a life-and-death situation I was so
                            glad to meet the professional team of RAK
                            Hospital and especially Dr. Anup Kumar Panigrahi, who successfully stabilized my
                            condition by laparoscopic surgery. I
                            was discharged within just four days and traveled back to my country absolutely happy.”
                        </p>
                        <p><span>Mr. Frank Wehne,</span> Germany</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

<!-- <section class="rasai">
        <div class="container">
            <div class="rasaititle">
                <h3>Ras Al Khaimah</h3>
                <p>The New Medical <br>
                    Tourism Destination</p>
            </div>
        </div>
    </section> -->


<section class="rasaisec" style="background-color:#fff;">
    <div class="rasaibanner">
        <img src="<?php echo BASE_URL ?>assets/images/tourism-medical.png" alt="">
        <!-- <span>Advancing Wellness Globally with <br> State-of-the-Art Medical Services</span>
                        <div class="bg-white">
                            <h3>Ras Al Khaimah</h3>
                            <p>THE NEW MEDICAL <br> TOURISM DESTINATION</p>
                        </div>
                        <a href="#">Know More <i class="fa-solid fa-angle-right"></i></a> -->
    </div>
    <div class="button-doctor">
        <a class="btn-submit" href="#"> Know more <img src="<?php echo BASE_URL ?>assets/images/arrow-right.png" alt="">
        </a>
    </div>

</section>

<section class="awardsec">
    <div class="container">
        <div class="awardtitle">
            <h3>Awards & Accreditations</h3>
        </div>
        <ul class="brand owl-carousel owl-theme" id="brand">
            <li class="item"> <a href="#"><img src="<?php echo BASE_URL ?>assets/images/brand1.avif" alt=""></a></li>
            <li class="item"> <a href="#"><img src="<?php echo BASE_URL ?>assets/images/brand2.avif" alt=""></a></li>
            <li class="item"> <a href="#"><img src="<?php echo BASE_URL ?>assets/images/brand3.avif" alt=""></a></li>
            <li class="item"> <a href="#"><img src="<?php echo BASE_URL ?>assets/images/brand4.avif" alt=""></a></li>
            <li class="item"> <a href="#"><img src="<?php echo BASE_URL ?>assets/images/brand5.avif" alt=""></a></li>
            <li class="item"> <a href="#"><img src="<?php echo BASE_URL ?>assets/images/brand6.avif" alt=""></a></li>
            <li class="item"> <a href="#"><img src="<?php echo BASE_URL ?>assets/images/brand7.avif" alt=""></a></li>
        </ul>
    </div>
</section>
<?php include "includes/footer.php"; ?>