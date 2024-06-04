/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.left = "0px";
    //document.getElementById("main").style.marginLeft = "250px";
  }

 /* var popular_results = [{
      name: "TruHealth Advance",
      slug: "packages/Mumbai/truhealth-advance",
      featured_image: "1583131356_TruHealthAdvance.png",
      parameter: "<span>26 Parameters </span>",
      product: "Health Package"
  },{
      name: "Homocysteine Test",
      slug: "parameter/Mumbai/homocysteine-test",
      featured_image: "test-image.png",
      parameter: "<span></span>",
      product: "Test"
  }];*/
  var cur_city = sessionStorage.getItem('city_name');

if(cur_city){
//alert(cur_city);
var new_str = cur_city.replace('"',"");
var new_str1 = new_str.replace('"',"");

}else{
    var new_str1 = 'Mumbai';

}

  $(".extra-contact-btn-gynecxpert").click(function(e) {
    $('.form-text.text-danger').empty();
       // alert('sd');
//alert($('#inquiry_type').val());
    e.preventDefault();
    $.ajax({
        type: "GET",
        url: "/inquiriesform_gynecxpert",
        data:  {
            'name' :$('#inquiry_name').val(),
            'city' :$('#inquiries_city').val(),
            'phone' :$('#inquiry_phone').val(),
            'inquiry_type' :$('#inquiry_type').val(),
            'email' :$('#inquiry_email').val(),
            'feedback' :$('#feedback').val(),
            'speciality' :$('#Speciality').val()
           // 'inquiry_test' : $('#inquiry_test_id').val(),
           // 'inquiry_package' : $('#inquiry_package_id').val()
        },
        beforeSend: function(){
            // Show image container
            $(".custom_loader").show();
           },
          success: function(response) {
            //  console.log(response);
              $(".form-text").text('');
              $("#deta_name").html(response.data);
             $('#inquiry_id').val(response.data.user_id);
              $(".set-phone-inquiry").text(response.data.phone);
              $('#InquiryOTPModal').modal();
          },
          complete:function(data){

            // $(".upload-p-form1").text("Submit");
            $(".custom_loader").hide();


             },
        error: function(response) {
            //console.log(response);
            var errors = JSON.parse(response.responseText);
            $.each(errors.cause, function (key, val) {
             //   console.log("#" + key + "_error_inquiries");
                $("#" + key + "_error_inquiries").text(val[0]);
            });
        }
    });
});

var final_strindd = new_str1.toLowerCase();
//console.log(final_strindd.replace(" ","-"));
  var popular_results = [{
      name: "TruHealth Advance",
      slug: "packages/"+final_strindd.replace(" ","-")+"/truhealth-advance",
      featured_image: "1583131356_TruHealthAdvance.png",
      parameter: "<span>26 Parameters </span>",
      product: "Health Package"
  },{
      name: "Homocysteine Test",
      slug: "parameter/"+final_strindd.replace(" ","-")+"/homocysteine-test",
      featured_image: "test-image.png",
      parameter: "<span></span>",
      product: "Test"
  }];
  $("#mobSearch").click(function(){
      $('.msearch').fadeIn(100);
      $('#mobile_search').attr('autofocus',true);
      $('#mobile_search').focus();
      $('.mobileheaderSearchResults').css('display','block');
      data = "<p class='popular-package-span'>Popular Tests and Packages</p>"
      $(".resultsHoldermobile").empty();
      $(".resultsHoldermobile").append(data);
      for(var i = 0; i < popular_results.length; i++){
          data = "<a href="+popular_results[i]['slug']+" class='hsresult'><div><img src='https://www.metropolisindia.com/newdata/images/"+popular_results[i]['featured_image']+"'/><p><strong>"+popular_results[i]['name']+"</strong>"+popular_results[i]['parameter']+"</p></div><em>"+popular_results[i]['product']+"</em></a>";
          $(".resultsHoldermobile").append(data);
          $('#truhealth-page-header-input').addClass("no-border-bottom");
          $('#txt_search').addClass("no-border-bottom");
      }
      // $(body).css('overflow','hidden');
  });
  $('#mobileLocationButton').click(function(){ a
      $('#cityModal').modal('show');
  });

  $("#closesearch").click(function(){
      $('.msearch').fadeOut(100);
      // $(body).css('overflow','auto');
  });

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
      document.getElementById("mySidenav").style.left = "-300px";
      //document.getElementById("main").style.marginLeft = "0";
  }

  var fileList = [];
  var fileArray = [];

  function removefile(index){
      $('#image_'+index).remove();
      fileArray.splice(index, 1);
      fileList.splice(index, 1);
  }
  $(document).ready(function() {
    var helpbox_city_modaldiv = document.getElementById("hellobar-box");
    helpbox_city_modaldiv.style.display = "none";
    var helpbox_city = sessionStorage.getItem("helpboxcity");
    if(helpbox_city){
      helpbox_city = helpbox_city.toLowerCase();
    }
    console.log("helpbox_city",helpbox_city)
    if(helpbox_city == 'kolkata'){
      if(sessionStorage.getItem("hellobar-PopupShown") != 'Yes'){
        console.log("city kolkata and popup ",sessionStorage.getItem("hellobar-PopupShown"))
        helpbox_city_modaldiv.style.display = "block";
      }else{
        helpbox_city_modaldiv.style.display = "none";
      }
    }else{
        helpbox_city_modaldiv.style.display = "none";
    }
      $('.searcharea').select2({
          placeholder: "Enter a City",
          allowClear: true
      });
      $('.searchstate').select2({
          placeholder: "Enter a City",
          allowClear: true
      });
      // $("#heart-set").hover(parameter/mumbai/cbc-testetails").fadeIn(500);
      //     },
      //     function() {
      //         $("#heart-issue-details").fadeOut(0);
      //     });

      $('input[type = "file"]').change(function (e) {
          $.each(e.target.files, function (index, value) {
              $(".filelist").append('<div id="image_'+index+'" ><span class="file-name">' + value.name + '</span><a class="remove" href="#" onclick = removefile('+index+')> Remove </a> </div>');
              fileArray.push(value.name);
              fileList.push(value);
          });
      });

      $(window).scroll(function() {
          if ($(window).scrollTop() >= 10) {
              $('header').addClass('fixed-header-top');
              //$('.patients-page-menu').addClass('fixed-header');
              $('main').css('marginTop',120);
          } else {
              $('header').removeClass('fixed-header-top');
             // $('.patients-page-menu').removeClass('fixed-header');
             $('main').css('marginTop',0);
          }
      });

      $.ajaxSetup({
          headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          }
      });
      // all city API
      $.ajax({
          url: '/allcity',
          type: 'get',
          dataType: 'json',
          success:function(response){
            //  console.log(response);
              var len = response.data.length;
              $(".cities").empty();
              var cur_city = sessionStorage.getItem('city_name');
            if(cur_city==null){ cur_city = "Mumbai"; }
            //alert("sd"+cur_city);
              $(".custom-form-modal-dropdowns .dropdown-cities").empty();
              data="<option  value='' selected> city </option>";
              $(".cities").append(data);
              if(len > 0) {
                  for( var i = 0; i<len; i++){
                      //console.log(cur_city);
                     // alert(cur_city);
                     if(cur_city!=""){
                      var city1 = cur_city.replace('"', "");
                    }
                      if(city1!=""){
                      var cur_city = city1.replace('"', "");
                    }
                    //console.log(cur_city);
                      if(cur_city==response.data[i]['name']) var sel = "selected";
                      else var sel = " ";
                      data="<option value="+response.data[i]['id'] +" "+sel+">"+response.data[i]['name']+"</option>";
                      data2="<a class='dropdown-item' value='"+ response.data[i]['id'] +"'>"+ response.data[i]['name']+"</a>";
                      $(".cities").append(data);
                      $(".custom-form-modal-dropdowns .dropdown-cities").append(data2);
                  }
              }
          }
      });

  });

  $("#login-back-form").click(function() {
      $('.form-text.text-danger').empty();
      $('#LoginsendOTPModal').modal('hide');
      $('#loginModal').modal();
  });

  $("#up-back-form").click(function() {
      $('#sendOTPModal').modal('hide');
      $('#uploadPresModal').modal();
  });

  $("#call-back-form").click(function() {
      $('#cbsendOTPModal').modal('hide');
      $('#cbuploadPresModal').modal();
  });

  $("#rp-back-form").click(function() {
      $('#rpsendOTPModal').modal('hide');
      $('#rpStatusModal').modal();
  });
  $("#checkout-otp").click(function() {
      $('#checkoutOTPModal').modal('hide');
  });


  $(".upload-p-form1").click(function(e) {
      $('.form-text.text-danger').empty();
      e.preventDefault();
      //alert($('#inquiry_type_prescription').val());
      var data = new FormData();
      var file_size =0;
      if(fileList.length){
        var fi = document.getElementById('customFile');

        for (var i = 0; i <= fi.files.length - 1; i++) {

            var fsize = fi.files.item(i).size;
            var file = Math.round((fsize / 1024));
            // The size of the file.
            file_size = parseInt(file_size) + parseInt(file);


        }
        //alert(file_size);
        if (file_size >= 2048) {
            document.getElementById('file_error').innerHTML = "File too Big, please select a file less than 2mb";
        }else{
          jQuery.each(fileList, function(i, file) {
              data.append('files[]', file);
          });
          data.append('name',$('#name').val());
          data.append('city_id',$('#city').val());
          data.append('phone',$('#phone').val());
          data.append('inquiry_type',$('#inquiry_type_prescription').val());
          $.ajax({
              type: "POST",
              url: "/inquiry",
              enctype: 'multipart/form-data',
              processData: false,  // Important!
              contentType: false,
              cache: false,
              data: data,
              beforeSend: function(){
                // Show image container
                $(".custom_loader_m").show();
               },
              success: function(response) {
                console.log(response);

                  $('#user_id').val(response.data.user_id);
                  $(".set-phone").text(response.data.phone);
                  $('#uploadPresModal').modal('hide');
                  $('#sendOTPModal').modal();

              },
              complete:function(data){

                // $(".upload-p-form1").text("Submit");
                $(".custom_loader_m").hide();


                 },
              error: function(response) {
                  console.log(response);
                  var errors = JSON.parse(response.responseText);
                  $.each(errors.cause, function (key, val) {
                      if(key=='files.0')
                          key='file';
                      //console.log(key)
                      $("#" + key + "_error").text(val[0]);
                  });
              }
          });
        }
      }else{
          $('#file_error').text("Atleast 1 image is required");
      }
  });

  $(".upload-p-form2").click(function(e) {
      $('.form-text.text-danger').empty();
      $('.upload-p-form2').append('<img class="custom_loader_m homepage-loader" src="https://www.metropolisindia.com/newdata/images/loading.svg">');

      $('.upload-p-form2').hide();
      e.preventDefault();
      $.ajax({
          type: "POST",
          url: "/verifyotp",
          data: {
              'user_id' :$('#user_id').val(),
              'otp' : $('#digit1').val()+$('#digit2').val()+$('#digit3').val()+$('#digit4').val()
          },
          success: function(response) {
              $('#sendOTPModal').modal('hide');
              $('#thankYouModal').modal();
          },
          error: function(response) {
              var errors = JSON.parse(response.responseText);
              $.each(errors.cause, function (key, val) {
                      $("#" + key + "_error").text(val[0]);
              });
          }
      });
  });

  $(".cb_form_1").click(function(e) {
      $('.form-text.text-danger').empty();
      e.preventDefault();
      $.ajax({
          type: "POST",
          url: "/inquiry",
          data:  {
              'name' :$('#cb_name').val(),
              'city_id' :$('#cb_city').val(),
              'phone' :$('#cb_phone').val(),
              'inquiry_type' :$('#cb_type').val(),

          },
          success: function(response) {
              $('#cb_user_id').val(response.data.user_id);
              $(".cb-set-phone").text(response.data.phone);
              $('#cbuploadPresModal').modal('hide');
              $('#cbsendOTPModal').modal();

          },
          error: function(response) {
              var errors = JSON.parse(response.responseText);
              $.each(errors.cause, function (key, val) {
                  $("#" + key + "_error_cb").text(val[0]);
              });
          }
      });
  });
  $(".extra-contact-btn-antibody").click(function(e) {
       //   alert($('#inquiry_test').val());
      var cur_city = $("#inquiries_city").val();
      if(cur_city){
          if(cur_city!="60"){
              if($("#agree_prescription").is(":checked")) {
                  var  tc_prc = $('#agree_prescription').val();
              }else{
                  var tc_prc = '';
              }
          }
      }
      //alert(tc_prc);
      $('.form-text.text-danger').empty();
      //alert($('#inquiry_type').val());
      e.preventDefault();

      if ($("#agree").is(":checked")) {
          var  tc = $('#agree').val();
          //alert("Check box in Checked");
      } else {
          var tc = '';
          //alert("Check box is Unchecked");
      }
              //alert(tc);
      /*if(typeof tc==='"undefined"')	{
              var tc = '';
      }*/
  //alert(cur_city);
  //console.log($('#inquiry_type').val());
      $.ajax({
          type: "POST",
          url: "/inquiriesformantibody",
          data:  {
              'name' :$('#inquiry_name').val(),
              'inquiry_city' :$('#inquiries_city').val(),
              'phone' :$('#inquiry_phone').val(),
              'inquiry_type' :$('#inquiry_type').val(),
              'email' :$('#inquiry_email').val(),
              'inquiry_test' : $('#inquiry_test').val(),
              'inquiry_package' : $('#inquiry_package_id').val(),
              'agree' : tc,
              'agree_prescription': tc_prc,
              'cur_city' : cur_city
          },
          beforeSend: function(){
            // Show image container
            $(".custom_loader").show();
           },
          success: function(response) {
              console.log(response);
              $('#inquiry_id').val(response.data.inquiry_id);
              $(".set-phone-inquiry").text(response.data.phone);
              $('#InquiryOTPModal').modal();
          },
          complete:function(data){

            // $(".upload-p-form1").text("Submit");
            $(".custom_loader").hide();


             },
          error: function(response) {
              //console.log('a'+response);
              var errors = JSON.parse(response.responseText);
              $.each(errors.cause, function (key, val) {
               // console.log("#" + key + "_error_inquiries");
                  $("#" + key + "_error_inquiries").text(val[0]);
              });
          }
      });
  });
  $(".extra-contact-btn-antibody-m").click(function(e) {
         // alert($('#inquiries_city_m').val());
      var cur_city = $("#inquiries_city_m").val();

      $('.form-text.text-danger').empty();
      //alert($('#inquiry_type').val());
      ///var cur_city = $("#cur_city").val();
      if(cur_city){
          if(cur_city!="60"){
              if($("#agree_prescription_m").is(":checked")) {
                  var  tc_prc = $('#agree_prescription_m').val();
              }else{
                  var tc_prc = '';
              }
          }
      }
      e.preventDefault();
      if ($("#agree_m").is(":checked")) {
          var  tc = $('#agree_m').val();
          //alert("Check box in Checked");
      } else {
          var tc = '';
          //alert("Check box is Unchecked");
      }
      $.ajax({
          type: "POST",
          url: "/inquiriesformantibody",
          data:  {
              'name' :$('#inquiry_name_m').val(),
              'inquiry_city' :$('#inquiries_city_m').val(),
              'phone' :$('#inquiry_phone_m').val(),
              'inquiry_type' :$('#inquiry_type_m').val(),
              'email' :$('#inquiry_email_m').val(),
              'inquiry_test' : $('#inquiry_test_m').val(),
              'inquiry_package' : $('#inquiry_package_id_m').val(),
              'agree' : tc,
              'agree_prescription': tc_prc,
              'cur_city' : cur_city
          },
          beforeSend: function(){
            // Show image container
            $(".custom_loader").show();
           },
          success: function(response) {
           //   console.log(response);
              $('#inquiry_id').val(response.data.inquiry_id);
              $(".set-phone-inquiry").text(response.data.phone);
              $('#InquiryOTPModal').modal();
          },
          complete:function(data){

            // $(".upload-p-form1").text("Submit");
            $(".custom_loader").hide();


             },
          error: function(response) {
            //  console.log('a'+response);
              var errors = JSON.parse(response.responseText);
              $.each(errors.cause, function (key, val) {
                // console.log("#" + key + "_error_inquiries");
                  $("#" + key + "_error_inquiries_m").text(val[0]);
              });
          }
      });
  });
  $(".extra-contact-btn-corporate").click(function(e) {
      $('.form-text.text-danger').empty();
     // alert($('#inquiry_type').val());
      e.preventDefault();
   //   alert(response);
   //alert("sdf");
      $.ajax({
          type: "POST",
          url: "/inquiriesformantibody",
          data:  {
              'name' :$('#Name1').val(),
              'email' : $('#email1').val(),
              'inquiry_city' :$('#inquiries_city').val(),
              'phone' :$('#mobile1').val(),
              'city' :$('#city1').val(),
              'company' :$('#company1').val(),
              'designation' : $('#designation1').val(),
              'inquiry_package' : $('#package1').val(),
              'inquiry_type' :  $('#inquiry_type').val()
          },
          success: function(response) {
          //  alert(response);
            //  console.log(response.data.phone);

              $('#inquiry_id').val(response.data.inquiry_id);
              $('#set_phone_inquiry').text(response.data.phone);
              $('#InquiryOTPModal').modal();
          },
          error: function(response) {
             // console.log(response);
              var errors = JSON.parse(response.responseText);
              $.each(errors.cause, function (key, val) {
                //  console.log("#" + key + "_error_inquiries");
                  $("#" + key + "_error_inquiries").text(val[0]);
              });
          }
      });
  });


  $(".extra-contact-btn").click(function(e) {
      $('.form-text.text-danger').empty();
         // alert('sd'); v
       var type_id = $("#type_id").val();
        var message = $("#message").val();
     //   console.log(message);
      //  console.log(type_id);
      e.preventDefault();
      $.ajax({
          type: "POST",
          url: "/inquiriesform",
          data:  {
              'name' :$('#inquiry_name').val(),
              'inquiry_city' :$('#inquiries_city').val(),
              'phone' :$('#inquiry_phone').val(),
              'inquiry_type' :$('#inquiry_type').val(),
              'email' :$('#inquiry_email').val(),
              'inquiry_test' : $('#inquiry_test_id').val(),
              'inquiry_package' : $('#inquiry_package_id').val(),
              'type_id' :type_id,
              'message' :message
          },
          success: function(response) {
             // console.log(response);
              $('#inquiry_id').val(response.data.inquiry_id);
              $(".set-phone-inquiry").text(response.data.phone);
              $('#InquiryOTPModal').modal();
          },
          error: function(response) {
          //    console.log(response);
              var errors = JSON.parse(response.responseText);
              $.each(errors.cause, function (key, val) {
                  $("#" + key + "_error_inquiries").text(val[0]);
              });
          }
      });
  });
  $(".extra-contact-btn-contact").click(function(e) {
    $('.form-text.text-danger').empty();
       // alert('sd'); v
     var type_id = $("#type_id").val();
      var message = $("#message").val();
      //console.log(message);
     // console.log(type_id);
      var inquiry_type =  $('#inquiry_type').val();
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "/inquiriesform_contact",
        data:  {
            'name' :$('#inquiry_name').val(),
            'inquiry_city' :$('#inquiries_city').val(),
            'phone' :$('#inquiry_phone').val(),
            'inquiry_type' :$('#inquiry_type').val(),
            'email' :$('#inquiry_email').val(),
            'inquiry_test' : $('#inquiry_test_id').val(),
            'inquiry_package' : $('#inquiry_package_id').val(),
            'type_id' :type_id,
            'message' :message
        },
        beforeSend: function(){
          // Show image container
          $(".custom_loader").show();
          $(".extra-contact-btn-contact").prop('disabled', true);
         },
        success: function(response) {
           // $(".extra-contact-btn-contact").prop('disabled', false);
           $("#contactform_y")[0].reset();
           // console.log("lsdk"+response);
          //  window.location.href = "/thank-you?type="+inquiry_type;

            /*$('#inquiry_id').val(response.data.inquiry_id);
            $(".set-phone-inquiry").text(response.data.phone);
            $('#InquiryOTPModal').modal();*/

        },
        complete:function(data){
          $(".extra-contact-btn-contact").prop('disabled', false);
            $(".custom_loader").hide();
        },
        error: function(response) {
           // console.log(response);
            var errors = JSON.parse(response.responseText);
            $.each(errors.cause, function (key, val) {
                $("#" + key + "_error_inquiries").text(val[0]);
            });
        }
    });
});
  $(".extra-contact-btn-m").click(function(e) {
      $('.form-text.text-danger').empty();
      e.preventDefault();
      $.ajax({
          type: "POST",
          url: "/inquiriesform",
          data:  {
              'name' :$('#inquiry_name_m').val(),
              'inquiry_city' :$('#inquiries_city_m').val(),
              'phone' :$('#inquiry_phone_m').val(),
              'inquiry_type' :$('#inquiry_type').val(),
              'email' :$('#inquiry_email_m').val(),
              'inquiry_test' : $('#inquiry_test_id_m').val(),
              'inquiry_package' : $('#inquiry_package_id_m').val()
          },
          success: function(response) {
              $('#inquiry_id').val(response.data.inquiry_id);
              $(".set-phone-inquiry").text(response.data.phone);
              $('#InquiryOTPModal').modal();
          },
          error: function(response) {
              var errors = JSON.parse(response.responseText);
              $.each(errors.cause, function (key, val) {
                  $("#" + key + "_error_inquiries_m").text(val[0]);
              });
          }
      });
  });


  $(".submit_inquries_otp").click(function(e) {
      $('.form-text.text-danger').empty();
      $(".submit_inquries_otp").hide();
      e.preventDefault();
  //alert($('#inquiry_id').val());
  var time1 = $("#time1").val();
 // console.log(time1);

var dob1 = $("#dob1").val();
//console.log(dob1);

var dob2 = $("#dob2").val();
//console.log(dob2);

var dob3 = $("#dob3").val();
//console.log(dob3);


var final_date = dob1+'/'+ dob2+'/'+dob3;
//console.log(final_date);

 var type_id = $("#type_id").val();
        var message = $("#message").val();
  var company = $("#company1").val();
  //alert(company);
  var inquiry_type = $("#inquiry_type").val();
  var designation = $("#designation1").val();
  //alert(designation);
      $.ajax({
          type: "POST",
          url: "/verifyotp",
          data: {
              'user_id' :$('#inquiry_id').val(),
              'otp' : $('#otp-data-1').val()+$('#otp-data-2').val()+$('#otp-data-3').val()+$('#otp-data-4').val(),
              'company':company,
              'designation':designation,
              'time1' : time1,
              'date' : final_date,
              'message':message,
              'type_id':type_id,

              'utm_parameter': $('#utm_parameter').val(),
          },
          beforeSend: function(){
            // Show image container
            $(".custom_loader").show();
           },
          success: function(response) {
             // console.log(response);
              $('#InquiryOTPModal').modal('hide');
             // console.log('done');
             // $('#inquirythankYouModal').modal();
              //window.location.href = "/thank-you?type="+inquiry_type;
              var url = window.location.href;
             //alert(url);
             var qury = url.split("?");
             if(inquiry_type=='wellness_truhealth_checkups'){
                window.location.href = "/thank-you?type="+inquiry_type+"&"+qury[1];
             }else{
             window.location.href = "/thank-you?type="+inquiry_type;
            }

          },
          complete: function(){
            // Show image container
            $(".custom_loader").show();
           },
          error: function(response) {
              //console.log(response);
              var errors = JSON.parse(response.responseText);
              $.each(errors.cause, function (key, val) {
                  $("#" + key + "_error_inquiries").text(val[0]);;
              });
          }
      });
  });

  $(".cb_form_2").click(function(e) {
      $('.form-text.text-danger').empty();
      $(".upload-p-form2").hide();

      e.preventDefault();
      $.ajax({
          type: "POST",
          url: "/verifyotp",
          data: {
              'user_id' :$('#cb_user_id').val(),
              'otp' : $('#num1').val()+$('#num2').val()+$('#num3').val()+$('#num4').val()
          },
          success: function(response) {
              $('#cbsendOTPModal').modal('hide');
             // window.location.href = "https://demo.metropolisindia.com/thank-you";

            //  $('#cbthankYouModal').modal();
          },
          error: function(response) {
              var errors = JSON.parse(response.responseText);
              $.each(errors.cause, function (key, val) {
                      $("#" + key + "_error_cb").text(val[0]);
              });
          }
      });
  });

  $("#txt_search").focus(function(){
      popularResults();
  });

  function popularResults(){
      $('.headerSearchResults.txt_search').css('display','block');
      data = "<p class='popular-package-span'>Popular Tests and Packages</p>"
      $(".headerSearchResults.txt_search .resultsHolder").empty();
      $(".headerSearchResults.txt_search .resultsHolder").append(data);
      for(var i = 0; i < popular_results.length; i++){
          data = "<a href="+popular_results[i]['slug']+" class='hsresult'><div><img src='https://www.metropolisindia.com/newdata/images/"+popular_results[i]['featured_image']+"'/><p><strong>"+popular_results[i]['name']+"</strong>"+popular_results[i]['parameter']+"</p></div><em>"+popular_results[i]['product']+"</em></a>";
          $(".headerSearchResults.txt_search .resultsHolder").append(data);
          $('#truhealth-page-header-input').addClass("no-border-bottom");
          $('#txt_search').addClass("no-border-bottom");
      }
  }

  $("#txt_search").keyup(function(){
      var search = $(this).val();

      //alert("sdi");
      if(search.length > 2){


          $.ajax({
              url: '/search?query='+search,
              type: 'get',
              dataType: 'json',
              success:function(response){
                  var len = response.data.length;
                  $(".headerSearchResults.txt_search .resultsHolder").empty();
                  if(len > 0) {
                      $('.headerSearchResults.txt_search').css('display','block');
                      for( var i = 0; i<len; i++){
                          data="<a href="+response.data[i]['slug']+" class='hsresult'><div><img src='https://www.metropolisindia.com/newdata/images/"+response.data[i]['featured_image']+"'/><p><strong>"+response.data[i]['name']+"</strong>"+response.data[i]['parameter']+"</p></div><em>"+response.data[i]['product']+"</em></a>";
                          data+="<div class='linebreak'></div>"
                          $(".headerSearchResults.txt_search .resultsHolder").append(data);
                          $('#truhealth-page-header-input').addClass("no-border-bottom");
                          $('#txt_search').addClass("no-border-bottom");
                      }
                  }else{
                      data="<div class='hsresult'><em>no value found</em></div>";
                      $(".headerSearchResults.txt_search .resultsHolder").append(data);
                  }
              }
          });
      }else if(search.length == 0){
          $(".headerSearchResults.txt_search .resultsHolder").empty();
          $('.headerSearchResults.txt_search').css('display','none');
          popularResults();
      }else{
          $(".headerSearchResults.txt_search .resultsHolder").empty();
          $('.headerSearchResults.txt_search').css('display','none');
      }
  });

  $(".nonexitdownloadreport").click(function(e) {
    e.preventDefault();

   $.ajax({
       type: "GET",
       url: "/nonexitdownloadreport",
       data:  {
           'patient_name' :$('#patient_name').val(),
           'patient_phone' :$('#patient_phone').val(),
           'visit_id' :$('#visit_id').val(),
           'patient_email' :$('#patient_email').val()
        },
       beforeSend: function(){
         // Show image container
         $(".custom_loader").show();
        },
       success: function(response) {

       // alert("test");
         //  console.log(response);
           $(".form-text").text('');
           $("#deta_name").html(response.data);
           $('#inquiry_id').val(response.data.user_id);
          $(".set-phone-inquiry").text(response.data.phone);
          $('#InquiryOTPModal').modal();
       },
       complete:function(data){

         // $(".upload-p-form1").text("Submit");
         $(".custom_loader").hide();


          },
       error: function(response) {
           var errors = JSON.parse(response.responseText);
          // console.log(errors);

           $.each(errors.cause, function (key, val) {
           //   console.log("#" + key + "_error_inquiries");
               $("#" + key + "_error_inquiries").text(val[0]);
           });
       }
   });
});

  $("#txt_search").keydown(function(){
      var search = $(this).val();
      var key = event.keyCode || event.charCode;
      if( key == 8 || key == 46 ){
          if(search.length==0){
              $(".headerSearchResults.txt_search .resultsHolder").empty();
              $('.headerSearchResults.txt_search').css('display','none');
              popularResults();
          }
      }
  });

  $("#already_know").keyup(function(){

      var search = $(this).val();
      if(search.length > 2){

          $.ajax({
              url: '/search?query='+search,
              type: 'get',
              dataType: 'json',
              success:function(response){

                  var len = response.data.length;
                  $(".resultsHolder").empty();
                  if(len > 0) {
                      $('.headerSearchResults.already_know').css('display','block');
                      for( var i = 0; i<len; i++){
                          data="<a href="+response.data[i]['slug']+" class='hsresult'><div><p><strong>"+response.data[i]['name']+"</strong>"+response.data[i]['parameter']+"</p></div><em>"+response.data[i]['product']+"</em></a>";
                          data+="<div class='linebreak'></div>"
                          $(".headerSearchResults.already_know .resultsHolder").append(data);
                          $('#already_know').addClass("no-border-bottom");
                      }
                  }else{
                      data="<div class='hsresult'><em>no value found</em></div>";
                      $(".headerSearchResults.already_know .resultsHolder").append(data);
                  }
              }
          });
      }else{
          $(".headerSearchResults.already_know .resultsHolder").empty();
          $('.headerSearchResults.already_know').css('display','none');
      }
  });

  $("#already_know2").keyup(function(){
      var search = $(this).val();
      if(search.length > 2){
          $.ajax({
              url: '/search?query='+search,
              type: 'get',
              dataType: 'json',
              success:function(response){

                  var len = response.data.length;
                  $(".resultsHolder").empty();
                  if(len > 0) {
                      $('.headerSearchResults.already_know').css('display','block');
                      for( var i = 0; i<len; i++){
                          data="<a href="+response.data[i]['slug']+" class='hsresult'><div><p><strong>"+response.data[i]['name']+"</strong>"+response.data[i]['parameter']+"</p></div><em>"+response.data[i]['product']+"</em></a>";
                          data+="<div class='linebreak'></div>"
                          $(".headerSearchResults.already_know .resultsHolder").append(data);
                          $('#already_know2').addClass("no-border-bottom");
                      }
                  }else{
                      data="<div class='hsresult'><em>no value found</em></div>";
                      $(".headerSearchResults.already_know .resultsHolder").append(data);
                  }
              }
          });
      }else{
          $(".headerSearchResults.already_know .resultsHolder").empty();
          $('.headerSearchResults.already_know').css('display','none');
      }
  });

  $("#find_center").keyup(function(){

      var search = $(this).val();
      if(search.length > 2){

          $.ajax({
              url: '/searchcenter?query='+search,
              type: 'get',
              dataType: 'json',
              success:function(response){

                  var len = response.data.length;
                  $(".resultsHolder").empty();
                  if(len > 0) {
                      $('.headerSearchResults.find_center').css('display','block');
                      for( var i = 0; i<len; i++){
                          data="<a href="+response.data[i]['slug']+" class='hsresult'><div><p><strong>"+response.data[i]['name']+"</strong>"+response.data[i]['parameter']+"</p></div><em>"+response.data[i]['product']+"</em></a>";
                          data+="<div class='linebreak'></div>"
                          $(".headerSearchResults.find_center .resultsHolder").append(data);
                          $('#find_center').addClass("no-border-bottom");
                      }
                  }else{
                      data="<div class='hsresult'><em>no value found</em></div>";
                      $(".headerSearchResults.find_center .resultsHolder").append(data);
                  }
              }
          });
      }else{
          $(".headerSearchResults.find_center .resultsHolder").empty();
          $('.headerSearchResults.find_center').css('display','none');
      }
  });

  $("#find_center2").keyup(function(){

      var search = $(this).val();
      if(search.length > 2){

          $.ajax({
              url: '/searchcenter?query='+search,
              type: 'get',
              dataType: 'json',
              success:function(response){

                  len=Object.keys(response.data).length;
                  $(".resultsHolder").empty();
                  if(len > 0) {
                      $('.headerSearchResults.find_center').css('display','block');
                      for( var i = 0; i<len; i++){
                          data="<a href='findcenter?area="+response.data[i]['id']+"' class='hsresult'><div><p><strong>"+response.data[i]['name']+"</strong></p></div><em>"+response.data[i]['type']+"</em></a>";
                          data+="<div class='linebreak'></div>"
                          $(".headerSearchResults.find_center .resultsHolder").append(data);
                          $('#find_center2').addClass("no-border-bottom");
                      }
                  }else{
                      data="<div class='hsresult'><em>no value found</em></div>";
                      $(".headerSearchResults.find_center .resultsHolder").append(data);
                  }
              }
          });
      }else{
          $(".headerSearchResults.find_center .resultsHolder").empty();
          $('.headerSearchResults.find_center').css('display','none');
      }
  });

  $("#find_center1").keyup(function(){

      var search = $(this).val();
      if(search.length > 2){

          $.ajax({
              url: '/searchcenter?query='+search,
              type: 'get',
              dataType: 'json',
              success:function(response){

                  len=Object.keys(response.data).length;
                  $(".resultsHolder").empty();
                  if(len > 0) {
                      $('.headerSearchResults.find_center1').css('display','block');
                      for( var i = 0; i<len; i++){
                          data="<a href='findcenter?area="+response.data[i]['id']+"' class='hsresult'><div><p><strong>"+response.data[i]['name']+"</strong></p></div><em>"+response.data[i]['type']+"</em></a>";
                          data+="<div class='linebreak'></div>"
                          $(".headerSearchResults.find_center1 .resultsHolder").append(data);
                          $('#find_center1').addClass("no-border-bottom");
                      }
                  }else{
                      data="<div class='hsresult'><em>no value found</em></div>";
                      $(".headerSearchResults.find_center1 .resultsHolder").append(data);
                  }
              }
          });
      }else{
          $(".headerSearchResults.find_center1 .resultsHolder").empty();
          $('.headerSearchResults.find_center1').css('display','none');
      }
  });
  var slotClicked = function() {
      $('.slot').removeClass('active');
      $(this).addClass('active');
      var time=this.getAttribute("data-time");
      $('#prefered_time').val(time);
  };

  function popularResultsMobile(){
      $('.mobileheaderSearchResults').css('display','block');
      data = "<p class='popular-package-span'>Popular Tests and Packages</p>"
      $(".resultsHoldermobile").empty();
      $(".resultsHoldermobile").append(data);
      for(var i = 0; i < popular_results.length; i++){
          data = "<a href="+popular_results[i]['slug']+" class='hsresult'><div><img src='https://www.metropolisindia.com/newdata/images/"+popular_results[i]['featured_image']+"'/><p><strong>"+popular_results[i]['name']+"</strong>"+popular_results[i]['parameter']+"</p></div><em>"+popular_results[i]['product']+"</em></a>";
          $(".resultsHoldermobile").append(data);
          $('#truhealth-page-header-input').addClass("no-border-bottom");
      }
  }

  $("#mobile_search").click(function(){
      popularResultsMobile();
  });

  $("#mobile_search").keyup(function(){
      var search = $(this).val();
      if(search.length > 2){
          $.ajax({
              url: '/search?query='+search,
              type: 'get',
              dataType: 'json',
              success:function(response){

                  var len = response.data.length;
                  $(".resultsHoldermobile").empty();
                  if(len > 0) {
                      $('.mobileheaderSearchResults').css('display','block');
                      for( var i = 0; i<len; i++){
                          data="<a href="+response.data[i]['slug']+" class='hsresult'><div><img src='https://www.metropolisindia.com/newdata/images/"+response.data[i]['featured_image']+"'/><p><strong>"+response.data[i]['name']+"</strong>"+response.data[i]['parameter']+"</p></div><em>"+response.data[i]['product']+"</em></a>";
                          data+="<div class='linebreak'></div>"
                          $(".resultsHoldermobile").append(data);
                          $('#truhealth-page-header-input').addClass("no-border-bottom");
                          $('#txt_search').addClass("no-border-bottom");
                      }
                  }else{
                      data="<div class='hsresult'><em>no value found</em></div>";
                      $(".resultsHoldermobile").append(data);
                  }
              }
          });
      }else if(search.length == 0){
          $(".resultsHoldermobile").empty();
          $('.mobileheaderSearchResults').css('display','none');
          popularResultsMobile();
      }
  });

  // $('#mobileLocationButton').click(function(){
  //     $.ajax({
  //         url: '/allcity',
  //         type: 'get',
  //         dataType: 'json',
  //         success:function(response){
  //             var len = response.data.length;
  //             $(".resultsHoldermobile").empty();
  //             if(len > 0) {
  //                 $('.mobileheaderSearchResults').css('display','block');
  //                 for( var i = 0; i<len; i++){
  //                     data="<a class='hsresult  value='" + response.data[i]['id'] + "'><div><img class='mobilelocationimg' src='/storage/images/mapmarker.svg'/><p><strong>"+response.data[i]['name']+"</strong></p></div></a>";
  //                     data+="<div class='linebreak'></div>"
  //                     $(".resultsHoldermobile").append(data);
  //                     $('#truhealth-page-header-input').addClass("no-border-bottom");
  //                     $('#txt_search').addClass("no-border-bottom");
  //                 }
  //             }else{
  //                 data="<div class='hsresult'><em>no value found</em></div>";
  //                 $(".resultsHoldermobile").append(data);
  //             }
  //         }
  //     });
  // });
   // });
   var reportrequest = "";

   $(".report-form-otp-test").click(function(e) {
       $("#confirmotp").hide();
       $('#loaderIcon').show();
       $('.form-text.text-danger').empty();
       e.preventDefault();
       reportrequest = $.ajax({
           type: "POST",
           url: "/reportotp_test",
           data: {
               'report_id' :$('#report_id').val(),
               'otp' : $('#n1').val()+$('#n2').val()+$('#n3').val()+$('#n4').val()
           },
       success: function(response) {
          //  console.log(response);
            var file_name_val = response.data.file_name;
            $(".report_file").val(file_name_val);
            $("#report_submit_test").submit();
            $('#n1').val("");
            $('#n2').val("");
            $('#n3').val("");
            $('#n4').val("");
            $("#loaderIcon").hide();
            $("#confirmotp").show();
            $('#rpsendOTPModal').modal('hide');
            $('#rpsendOTPModal-test').modal('hide');
        },
        error: function(error) {
           // console.log(error);
            if(error.status == 422){
                var errors = JSON.parse(error.responseText);
                    $.each(errors.cause, function (key, val) {
                       $("#" + key + "_error_report").text(val);
                    });
                }else if(error.status == 0){
                    $('#reportNotReady').modal('hide');
                }else{
                   $('#rpsendOTPModal').modal('hide');
                   $('#reportNotReady').modal();
                }
            $('#loaderIcon').hide();
            $("#confirmotp").show();
        }
    });
});
  var reportrequest = "";

  $(".report-form-otp").click(function(e) {
      $("#confirmotp").hide();
      $('#loaderIcon').show();
      $('.form-text.text-danger').empty();
      e.preventDefault();
      reportrequest = $.ajax({
          type: "POST",
          url: "/reportotp",
          data: {
              'report_id' :$('#report_id').val(),
              'otp' : $('#n1').val()+$('#n2').val()+$('#n3').val()+$('#n4').val()
          },
      success: function(response) {
    //    console.log(response);
         $("#report_submit").submit();
         $('#n1').val("");
         $('#n2').val("");
         $('#n3').val("");
         $('#n4').val("");
         $("#loaderIcon").hide();
         $("#confirmotp").show();
              $('#rpsendOTPModal').modal('hide');
              window.setTimeout(function() {
               // window.location.href = 'http://www.google.com';
               window.location.href = "https://www.metropolisindia.com/delreport?report_id="+$('#report_id').val();

            }, 2000);
             // $('#rpDownloadModal').modal();
             // $("#download-report-btn").attr("file-url", response.data.url);
          },
          error: function(error) {
              //console.log(error);
              if(error.status == 422){
                  var errors = JSON.parse(error.responseText);
                  $.each(errors.cause, function (key, val) {
                      $("#" + key + "_error_report").text(val);
                  });
              }else if(error.status == 0){
                  $('#reportNotReady').modal('hide');
              }else{
                  $('#rpsendOTPModal').modal('hide');
                  $('#reportNotReady').modal();
              }
              $('#loaderIcon').hide();
              $("#confirmotp").show();

          }
      });
  });

  $(".visit-nearest-lab").click(function(e){
      $('.visit-nearest-lab').removeClass('active');
      $(this).addClass('active');
      var slote=this.getAttribute("data-delivery");
      $('#prefered_delivery').val(slote);
  });

  $(".patient-data").click(function(e){
      $('.visit-nearest-lab').removeClass('active');
      $("#patient_procced").attr("disabled", false);

      $(this).addClass('active');
      var patient =this.getAttribute("data-pid");
      var name =this.getAttribute("data-name");
      $('#pid').val(patient);
      $('#p_name').val(name);
  });

  $(".report-status-form").click(function(e) {
      $('#loaderIconPhone').show();
      $('#enterNumber').hide();
      $('.form-text.text-danger').empty();
      e.preventDefault();
      $.ajax({
          type: "POST",
          url: "/reportdata",
          data:  {
              'vid' :$('#vid').val(),
              'phone' :$('#r_phone').val(),
          },
          success: function(response) {
          $('#report_id').val(response.data.report_id);
          $(".cb-set-phone").text(response.data.phone);
          $('#rpStatusModal').modal('hide');
          $('#rpsendOTPModal').modal();
          $('#loaderIconPhone').hide();
          $('#enterNumber').show();
          },
          error: function(response) {
              var errors = JSON.parse(response.responseText);
              $.each(errors.cause, function (key, val) {
                      $("#" + key + "_error_report").text(val[0]);
              });
              $('#loaderIconPhone').hide();
              $('#enterNumber').show();

          }
      });
  });

  $(".report-status-form-test").click(function(e) {
    $('#loaderIconPhone').show();
    $('#enterNumber').hide();
    $('.form-text.text-danger').empty();
    $('.mob_no').val($('#r_phone').val());

    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "/reportdata_test",
        data:  {
           // 'vid' :$('#vid').val(),
            'r_phone' :$('#r_phone').val(),
        },
        success: function(response) {
           // console.log("response");
           $('#customer_id').val(response.data.customer_id);
           $(".cb-set-phone").text(response.data.phone);
           $('#loginModal').modal('hide');
           $('#LoginsendOTPModal').modal();
           if(isNaN(response.data.phone)){
               $(".customer-text-changed").text("Your Phone");
               $("#customer_key").val('phone');
           }else{
               $(".customer-text-changed").text("Your Email");
               $("#customer_key").val('email');
           }
          //  console.log(response);
          /*  if(response.data.error=='VID & MobileNumber combination is invalid.'){
                //$("#phone_error_report").text("Your VID and Mobile number combination is incorrect.Please enter correct mobile number.");
                $('#loaderIconPhone').hide();
                $('#enterNumber').show();
                $('#downloadreportpopup_sm').modal('show');
              }else{
                $('#report_id').val(response.data.report_id);
                $(".cb-set-phone").text(response.data.phone);
                $('#rpStatusModal').modal('hide');
                $('#rpsendOTPModal-test').modal();
                $('#loaderIconPhone').hide();
                $('#enterNumber').show();
            }*/
        },
        error: function(response) {
            var errors = JSON.parse(response.responseText);
            $.each(errors.cause, function (key, val) {
                    $("#" + key + "_error_report").text(val[0]);
            });
            $('#loaderIconPhone').hide();
            $('#enterNumber').show();

        }
    });
});

  $(".login-form").click(function(e) {
      e.preventDefault();
      var re = /^(\+)?(91)?(\s)?\d{10}$/;
      var value = $('#login_input').val();
      $('.form-text.text-danger').empty();
      //if(re.test(value)){
          $.ajax({
              type: "POST",
              url: "/customerlogin",
              data:  {
                  'login_input' :$('#login_input').val(),
                  'addbasket_id' :$('#addbasket_test_id').val(),
                  'addbasket_type' :$('#addbasket_test_type').val(),
                  'isaddbasket' :$('#addbasket_is').val(),
              },
              success: function(response) {
                  startTimer();
                  //$(".resendotp").hide();
                  if($("#isbooknow").val() == 'Yes'){
                    $('#iscorder').val('Yes');
                  }else{
                    $('#iscorder').val('No');
                  }
                  $('#customer_id').val(response.data.customer_id);
                  $(".cb-set-phone").text(response.data.phone);
                  $('#loginModal').modal('hide');
                  $('#LoginsendOTPModal').modal();
                  if(isNaN(response.data.phone)){
                      $(".customer-text-changed").text("Your Phone");
                      $("#customer_key").val('phone');
                  }else{
                      $(".customer-text-changed").text("Your Email");
                      $("#customer_key").val('email');
                  }
              },
              error: function(response) {
                  var errors = JSON.parse(response.responseText);
                  $.each(errors.cause, function (key, val) {
                          $("#" + key + "_error_login").text(val[0]);
                  });
              }
          });
      //}else{
     //     $("#phone_error_login").text("Invalid Phone Number");
     // }
  });

  $(".bknw_btn").click(function (e) {
    $("#isbooknow").val('yes');
  })

  $(".sample_tracking_link").click(function () {
    //alert("test");
     var myBookId = $(this).data('id');

     //for hide show content on as per sampletraking & download report
     if(myBookId == "sample-tracking"){
       $(".popup_sampletrack").show();
       $(".popup_downloadreport").hide();
     }else if (myBookId == "smart-report"){
       $(".popup_sampletrack").hide();
       $(".popup_downloadreport").show();
     }

     var formfield = "";
       // $("#book_id_can").val(myBookId);
       if(myBookId=="sample-tracking"){
        var formfield = "<input type = 'hidden' id ='is_download' name = 'is_download' value = 'yes'><input type = 'hidden' id ='is_download_type' name = 'is_download_type' value = 'sample-tracking'>";

        jQuery('#cbfirstPrescriptionSubmit2').append(formfield);
       }else if(myBookId=="smart-report"){
        var formfield = "<input type = 'hidden' id ='is_download' name = 'is_download' value = 'yes'><input type = 'hidden' id ='is_download_type' name = 'is_download_type' value = 'smart-report'>";

        jQuery('#cbfirstPrescriptionSubmit2').append(formfield);
       }else{
        var formfield = "<input type = 'hidden' id ='is_download' name = 'is_download' value = 'yes'><input type = 'hidden' id ='is_download_type' name = 'is_download_type' value = 'download-report'>";

        jQuery('#cbfirstPrescriptionSubmit2').append(formfield);
       }
     //alert(myBookId);
        });

  $(".downloadlogin-form").click(function(e) {
    e.preventDefault();

    //alert("test");
    var re = /^(\+)?(91)?(\s)?\d{10}$/;
    var value = $('#downloadlogin_input').val();
    $('.form-text.text-danger').empty();
    //if(re.test(value)){
        $.ajax({
            type: "POST",
            url: "/customerlogin",
            data:  {
                'login_input' :$('#downloadlogin_input').val(),
            },
            success: function(response) {
              startTimer();
                var formfield = "<input type = 'hidden' id ='is_download' name = 'is_download' value = 'yes'>";

                jQuery('#cbfirstPrescriptionSubmit2').append(formfield);

                $('#customer_id').val(response.data.customer_id);
                $(".cb-set-phone").text(response.data.phone);
                $('#downloadloginModal').modal('hide');
                $('#LoginsendOTPModal').modal();
                if(isNaN(response.data.phone)){
                    $(".customer-text-changed").text("Your Phone");
                    $("#customer_key").val('phone');
                }else{
                    $(".customer-text-changed").text("Your Email");
                    $("#customer_key").val('email');
                }
            },
            error: function(response) {
                var errors = JSON.parse(response.responseText);
                $.each(errors.cause, function (key, val) {
                        $("#download" + key + "_error_login").text(val[0]);
                });
            }
        });
    //}else{
   //     $("#phone_error_login").text("Invalid Phone Number");
   // }
});

$(".downloadlogin-form1").click(function(e) {
    e.preventDefault();

    //alert("test");
    var re = /^(\+)?(91)?(\s)?\d{10}$/;
    var value = $('#downloadlogin_input1').val();
    $('.form-text.text-danger').empty();
    //if(re.test(value)){
        $.ajax({
            type: "POST",
            url: "/customerlogin",
            data:  {
                'login_input' :$('#downloadlogin_input1').val(),
            },
            success: function(response) {
                console.log(response);
                var formfield = "<input type = 'hidden' id ='is_download' name = 'is_download' value = 'yes'>";

                jQuery('#cbfirstPrescriptionSubmit2').append(formfield);

                $('#customer_id').val(response.data.customer_id);
                $(".cb-set-phone").text(response.data.phone);
                $('#downloadloginModal').modal('hide');
                $('#LoginsendOTPModal').modal();
                if(isNaN(response.data.phone)){
                    $(".customer-text-changed").text("Your Phone");
                    $("#customer_key").val('phone');
                }else{
                    $(".customer-text-changed").text("Your Email");
                    $("#customer_key").val('email');
                }
            },
            error: function(response) {
                var errors = JSON.parse(response.responseText);
                $.each(errors.cause, function (key, val) {
                        $("#download" + key + "_error_login").text(val[0]);
                });
            }
        });
    //}else{
   //     $("#phone_error_login").text("Invalid Phone Number");
   // }
});
 /* $(".login-otp").click(function(e) {
      $('.form-text.text-danger').empty();
      e.preventDefault();
      //alert("test");
      $.ajax({
          type: "GET",
          url: "/customerotp",
          data: {
              'customer_id' :$('#customer_id').val(),
              'otp' : $('#otp1').val()+$('#otp2').val()+$('#otp3').val()+$('#otp4').val()
          },
         /* success: function(response) {
              console.log(response);
              $('#LoginsendOTPModal').modal('hide');
              if(response.data.is_new_user){

              $(".signup-form").click();
              }else{
                 // location.reload(true);
                // alert("test");
                 window.location.href = 'https://www.metropolisindia.com/dashboard';
              }
              ///$('#signupModal').modal();

          },
          error: function(response) {
              var errors = JSON.parse(response.responseText);
              $.each(errors.cause, function (key, val) {
                  console.log("#" + key + "_error_login");
                      $("#" + key + "_error_login").text(val[0]);
              });
          }
          success: function(response) {
          //  console.log(response);
            if(response.data.invalid==""){
              $('#LoginsendOTPModal').modal('hide');
              if(response.data.is_new_user){

              $(".signup-form").click();
              }else{
                 // location.reload(true);
                // alert("test");
                 //window.location.href = '/dashboard';
                 var pathname = window.location.pathname;
                //alert(pathname);
                if(pathname.replace("/", "") != ""){
                  window.location.href = pathname;
                } else{
                  window.location.href = '/dashboard';
                }
              }
            }else{
               $("#otp_error_login").text(response.data.invalid);
              ///$('#signupModal').modal();
            }

          },
          error: function(response) {
                       // console.log(response);

              var errors = JSON.parse(response.responseText);
              $.each(errors.cause, function (key, val) {
                  //  console.log(key);
                      $("#" + key + "_error_login").text(val[0]);
              });
          }
      });
  });*/

  /*$(".login-otp").click(function(e) {
    $('.form-text.text-danger').empty();
    e.preventDefault();
    //alert("test");
    var pathname = window.location.pathname;
    //alert(pathname);
    if(pathname=='/download-report'){
        var from = 'download_Report';
        var number = $(".mob_no").val();
        var otp = $('#otp1').val()+$('#otp2').val()+$('#otp3').val()+$('#otp4').val();
        var id = $('#customer_id').val();
    }else{
        var from = '';
        var otp = $('#otp1').val()+$('#otp2').val()+$('#otp3').val()+$('#otp4').val();
        var id =  $('#customer_id').val();
        var number = '';
    }
    //alert(number);
    $.ajax({
        type: "POST",
        url: "/customerotp",
        data: {
            'customer_id' : id,
            'otp' : otp,
            'from' : from,
            'number' : number
        },
        success: function(response) {
        //  console.log(response);
                  if(response.data.invalid==""){
            $('#LoginsendOTPModal').modal('hide');
            if(response.data.is_new_user){
               //$(".signup-form").click();
               $('#LoginsendOTPModal').modal('hide');
               $('#signupModal').modal('show');
            }else{
                var pathname = window.location.pathname;
                //alert(pathname);
                if(pathname.replace("/", "") != ""){
                    if(response.data.from=="download_Report"){
                        $('#n1').val(" ");
                        $('#n2').val(" ");
                        $('#n3').val(" ");
                        $('#n4').val(" ");

                        $('#n1').val("");
                        $('#n2').val("");
                        $('#n3').val("");
                        $('#n4').val("");
                        window.location.href = '/my-report ';
                    }else{
                        window.location.href = pathname;
                    }
                }else{
                    if(response.data.from=="download_Report"){
                        window.location.href = '/my-report';
                    }else{
                        window.location.href = '/dashboard';
                    }
                }
            }
          }else{
             $("#otp_error_login").text(response.data.invalid);
            ///$('#signupModal').modal();
          }

        },
        error: function(response) {
                     // console.log(response);

            var errors = JSON.parse(response.responseText);
            $.each(errors.cause, function (key, val) {
                  console.log("#" + key + "_error_login");
                  $("#" + key + "_error_report").text(val[0]);

                    $("#" + key + "_error_login").text(val[0]);
            });
        }
    });
});*/

$(".resendotp").click(function() {
    $.ajax({
        type: "POST",
        url: "/resendotp",
        data: {
          'user_id' :$('#customer_id').val()
        },
        beforeSend: function(){
          $(".custom_loader").show();
         },
        success: function(response) {
          if(response.data.invalid == "Otp Reset"){
            //$(".resendotp").hide();
            $("#timer").show();
            document.getElementById('timer').innerHTML = "03:00";
            stop();
            startTimer();
          }
        }
      })
  })

$(".login-otp").click(function(e) {
    $('.form-text.text-danger').empty();
    e.preventDefault();
    //alert("test");
    var pathname = window.location.pathname;
    var is_download = $("#is_download").val();
    //alert(pathname);
    if(pathname=='/download-report'){
        var from = 'download_Report';
        var number = $(".mob_no").val();
        var otp = $('#otp1').val()+$('#otp2').val()+$('#otp3').val()+$('#otp4').val();
        var id = $('#customer_id').val();
    }else{
        var from = '';
        var otp = $('#otp1').val()+$('#otp2').val()+$('#otp3').val()+$('#otp4').val();
        var id =  $('#customer_id').val();
        var number = '';
    }


    //alert(number);
    $.ajax({
        type: "POST",
        url: "/customerotp",
        data: {
            'customer_id' : id,
            'otp' : otp,
            'from' : from,
            'number' : number,
            'is_download' : is_download
        },

                beforeSend: function(){
            // Show image container
            $(".custom_loader_m").show();
           },
        success: function(response) {
          console.log('is_download',is_download);
          startTimer();
        //$(".resendotp").hide();
        if(response.data.invalid == "Otp Expired"){
          $(".resendotp").show();
        }
          if(is_download!='yes'){
                  if(response.data.invalid==""){
            $('#LoginsendOTPModal').modal('hide');
            if(response.data.is_new_user){
               //$(".signup-form").click();
               $('#LoginsendOTPModal').modal('hide');
               $('#signupModal').modal('show');
            }else{
                var pathname = window.location.pathname;
                //alert(pathname);
                console.log('hi',pathname);
                if(pathname.replace("/", "") != ""){
                    if(response.data.from=="download_Report"){
                        $('#n1').val(" ");
                        $('#n2').val(" ");
                        $('#n3').val(" ");
                        $('#n4').val(" ");

                        $('#n1').val("");
                        $('#n2').val("");
                        $('#n3').val("");
                        $('#n4').val("");
                        window.location.href = '/my-report ';
                    }else{
                        window.location.href = pathname;
                    }
                }else{
                    if(response.data.from=="download_Report"){
                        window.location.href = '/my-report';
                    }else{
                        window.location.href = '/dashboard';
                    }
                }
            }
          }else{
             $("#otp_error_login").text(response.data.invalid);
            ///$('#signupModal').modal();
          }
        }else{
           // window.location.href = '/my-report';
           var is_download_type = $("#is_download_type").val();
           // console.log('yess',is_download_type,window.location.pathname);
           // return false;

           if(response.data.invalid == ""){

           //alert("tese"+is_download_type);
           if(is_download_type=='sample-tracking'){
               window.location.href = '/sample-tracking';

           }else if(is_download_type=='smart-report'){
            window.location.href = '/smart-report';
            //window.location.href = '/my-report';
           }else{
             if(window.location.pathname == '/download-report'){
               window.location.href = '/smart-report';
             }else{

               window.location.href = '/my-report';
             }
           }
         }else{
            $("#otp_error_login").text(response.data.invalid);
          }
        }

        },
         complete:function(data){
            console.log(data);

       // $(".upload-p-form1").text("Submit");
       $(".custom_loader_m").hide();


        },
        error: function(response) {
                      console.log(response);

            var errors = JSON.parse(response.responseText);
            $.each(errors.cause, function (key, val) {
                  console.log("#" + key + "_error_login");
                  $("#" + key + "_error_report").text(val[0]);

                    $("#" + key + "_error_login").text(val[0]);
            });
        }
    });
});
  $('.slots-for-booking .slot').click(function () {
      $('.slot').removeClass('active');
      $(this).addClass('active');
      var time=this.getAttribute("data-time");
      $('#prefered_time').val(time);
  });

  $(".signup-form").click(function(e) {
      $('.form-text.text-danger').empty();


      e.preventDefault();
      $.ajax({
          type: "POST",
          url: "/customersignup",
          data:  {
              'name' :$('#customer_name').val(),
              'gender' :$('#customer_gender').val(),
              'age' :$('#customer_age').val(),
              'customer_text' :$('#customer_text').val(),
              'key' : $('#customer_key').val(),
              'customer_id' : $('#customer_id').val(),
              'date' : $('#dob1').val(),
              'month' : $('#dob2').val(),
              'year' : $('#dob3').val(),
          },
          success: function(response) {
            //  location.reload(true);
            var pathname = window.location.pathname;
                console.log(pathname);
                if(pathname.replace("/", "") != ""){
                    if(pathname=="/download-report"){
                        window.location.href = '/my-report ';
                        $('#signupModal').modal('hide');

                    }else{
                        console.log("ets");
//                        location.reload();
                        window.location.href = '/dashboard ';

                        $('#signupModal').modal('hide');


                    }
                }else{

                    //location.reload();
                    window.location.href = '/dashboard ';

                        $('#signupModal').modal('hide');

                }
             },
          error: function(response) {
              var errors = JSON.parse(response.responseText);
              $.each(errors.cause, function (key, val) {
                  $("#" + key + "_error_signup").text(val[0]);
              });
          }
      });
  });


  /*$(".trash-button").click(function(e) {
      e.preventDefault();
      $.ajax({
          type: "POST",
          url: "/removeproduct",
          data:  {
              'product_id' :$('#product_id').val(),
              'product_type' :$('#product_type').val()
          },
          success: function(response) {
              location.reload(true);
          },
          error: function(response) {
              location.reload(true);
          }
      });
  });*/
  $(".trash-button").click(function(e) {
    e.preventDefault();
    var myBookId = $(this).data('id');
  var myArr = myBookId.split(" ");
    //alert(myBookId);
    $.ajax({
        type: "POST",
        url: "/removeproduct",
        data:  {
            'product_id' :myArr[1],
            'product_type' :myArr[0],
            'order_id_new' :myArr[2]
        },
        success: function(response) {
            console.log(response);
            location.reload(true);
        },
        error: function(response) {
            console.log(response);

            location.reload(true);
        }
    });
});

  $(".submit_review").click(function(e) {
      $('.form-text.text-danger').empty();
      e.preventDefault();

      $.ajax({
          type: "POST",
          url: "/addreview",
          data:  {
              'review_desc' :$('#review_msg').val(),
              'rating' :$('#rating').val(),
              'customer_id' : $('#review_user').val(),
              'reviewable_id' : $('#reviewable_id').val(),
              'reviewable_type' : $('#reviewable_type').val()
          },
          success: function(response) {
              $('#addAReviewModal').modal('hide');
              $('#reviewSubmitted').modal();
          },
          error: function(response) {
              var errors = JSON.parse(response.responseText);

              $.each(errors.cause, function (key, val) {
                  $("#" + key + "_error_review").text(val[0]);
              });
          }
      });
  });

  $('#login-modal').owlCarousel({
      stagePadding: 0,
      loop: false,
      nav: false,
      items: 1,
      dots: true,
      margin:80
  });

  $('#download-login-modal').owlCarousel({
      stagePadding: 0,
      loop: false,
      nav: false,
      items: 1,
      dots: true,
      margin:80
  });

  $('#signup-modal').owlCarousel({
      stagePadding: 0,
      loop: false,
      nav: false,
      items: 1,
      dots: true,
      margin:80
  });


  // Javascript to enable link to tab
  var url = document.location.toString();
  if (url.match('#')) {
      $('#aboutPageTabs.nav-pills a[href="#' + url.split('#')[1] + '"]').tab('show');
  }

  // Change hash for page-reload
  $('aboutPageTabs.nav-pills a').on('shown.bs.tab', function (e) {
      window.location.hash = e.target.hash;
  })

  $('#loaderIcon').click(function(e){
      e.preventDefault();
  });


  $('#loaderIconPhone').click(function(e){
      e.preventDefault();
  });


  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });


  /*  $( document ).ready(function() {
        /* Handler for .ready() called.
        //$(".prec_cities").
      /*  var text1 = 'Monkey';
      $("#mySelect1 option").filter(function() {
          return this.text == text1;
      }).attr('selected', true);
      *
      //var cur_city = <?php echo Session::get('city');?>";
      var cur_city = sessionStorage.getItem('city_name');
      $(".searcharea1 option").filter(function() {
      //  return this.text == cur_city;
      console.log("test"+this.text);
    }).attr('selected', true);

     //console.log("test"+cur_city);
      *
     var cur_city = sessionStorage.getItem('city_name');

     $(".searcharea1 option").each(function () {
        //$(this).html();
        console.log("test"+ $(this).html());
        /*if ($(this).html() ==cur_city) {
            $(this).attr("selected", "selected");
            return;
        }*
});

      });*/


	  function cityClicked(cityData){
            $.ajax({
            type: "POST",
            url: "/changecity",
            data:  {
                'city' :cityData,
            },
            success: function(response) {
                sessionStorage.setItem("is_set_city",true);
                sessionStorage.setItem("city_name", cityData);
                var citydata=response.data.city;
                var url=location.pathname;
                var arr=url.split('/');
                var slugs = ['packages','parameter','profile','truhealth','health-checkup-packages'];
                var arr = arr.filter(function(v){return v!==''});
            //    console.log(arr);
                //console.log(arr);
               // alert("test");

              // alert(arr[2]);

             // console.log(arr);
                var arr_cnt = arr.length;
                if(arr[0]=='wellness'){
                    window.location.replace(window.location.origin+'/wellness/truhealth-checkups/');
                }else if(arr[0]=='parameter'){
                    window.location.replace(window.location.origin+'/'+arr[0]+'/'+citydata+'/'+arr[2]);
                }else if(arr[0]=='health-checkup-packages'){
                    if(arr_cnt==2){
                        window.location.replace(window.location.origin+'/'+arr[0]+'/'+citydata);
                    }else{
                        window.location.replace(window.location.origin+'/'+arr[0]+'/'+citydata+'/'+arr[2]);
                    }
                }else if(arr[1]=='blood-test-at-home'){
                    var pageUrl = '/'+citydata.toLowerCase()+'/'+arr[1];
                    window.history.pushState('', '', pageUrl);
                    location.reload();
                }else{
                    location.reload();
                }

            }
        });
    }


    $(".select-city-dialog").click(function(e) {

        var city = this.getAttribute("city-data");
//        alert("select-city-dialog"+city);


        e.preventDefault();

        $.ajax({

            type: "POST",

            url: "/changecity",

            data:  {

                'city' : this.getAttribute("city-data"),

            },

            success: function(response) {

                sessionStorage.setItem("is_set_city",true);

                sessionStorage.setItem("city_name", JSON.stringify(city));

                var citydata=response.data.city;

                var url=location.pathname;

                var arr=url.split('/');
                var arr = arr.filter(function(v){return v!==''});
                var arr_cnt = arr.length;

                var slugs = ['packages','parameter','profile','truhealth','health-checkup-packages'];
                //alert(arr[2]);
                console.log(arr);
                if(arr_cnt){
                    if(arr[0]=='wellness'){
                        window.location.replace(window.location.origin+'/wellness/truhealth-checkups/');
                    }else if(arr[0]=='parameter'){
                        window.location.replace(window.location.origin+'/'+arr[0]+'/'+citydata+'/'+arr[2]);
                    }else if(arr[0]=='health-checkup-packages'){
                        if(arr_cnt==2){
                            window.location.replace(window.location.origin+'/'+arr[0]+'/'+citydata);
                        }else{
                            window.location.replace(window.location.origin+'/'+arr[0]+'/'+citydata+'/'+arr[2]);
                        }
                    }else if(arr[1]=='blood-test-at-home'){
                        var pageUrl = '/'+citydata.toLowerCase()+'/'+arr[1];
                        window.history.pushState('', '', pageUrl);
                        location.reload();
                    }else{
                        location.reload();
                    }
                }
            }
        });

    });
