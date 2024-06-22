<div class="container">
    <div class="heroinfo">
        <ul class="heroicon">
            <li class="bggreen">
                <a href=https://api.whatsapp.com/send/?phone=97172074444&text=Hi"><img
                        src="<?php echo BASE_URL ?>assets/images/whatsapp.png" alt=""></a>
            </li>
            <li class="bgred">
                <a href="tel:072225555"><img src="<?php echo BASE_URL ?>assets/images/notification.png" alt=""></a>
            </li>
            <li class="bgblue">
                <a href="#" class="share-btn"><img src="<?php echo BASE_URL ?>assets/images/share.png" alt=""></a>
                <ul class="share-socialmedia">
                    <li><a href="https://www.facebook.com/RakHospital/"><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com/rakhospital"><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href="https://www.instagram.com/rakhospital/"><i class="fa-brands fa-instagram"></i></a></li>
                 
                </ul>
            </li>
        </ul>
        <a href="#" class="livechat">Live Chat</a>
        <!-- <span class="goldimg"><img src="assets/images/gold.png" alt=""></span>
		<h1>A MULTI-SPECIALITY TERTIARY CARE HOSPITAL</h1> -->
    </div>

</div>

<script>
$('.share-btn').click(function() {
    $('.share-socialmedia').toggleClass('active');
});
</script>