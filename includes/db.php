<?php 
if($_SERVER['HTTP_HOST'] == "localhost")
{
	define('servername',"localhost");
	define('username',"root");
	define('password',"");
	define('database',"rakwithinfinity");
	define('BASE_URL_API',"https://rakwithinfinity.online/wp-json/wp/v2");
	define('BASE_URL',"http://localhost/rakwithinfinity/new/");
	define('APPOINTMENT_BASE_URL',"https://rakwithinfinity.online/eforms/make-an-appointment-home-page/22/?v=1");
}
else
{
	define('servername',"localhost");
	define('username',"u989626722_rakwithinfinit");
	define('password',"b@D1^6;v8W");
	define('database',"u989626722_rakwithinfinit");
	define('BASE_URL_API',"https://rakwithinfinity.online/wp-json/wp/v2");
	define('BASE_URL',"https://rakwithinfinity.online/new/");
	define('APPOINTMENT_BASE_URL',"https://rakwithinfinity.online/eforms/make-an-appointment-home-page/22/?v=1");
}
function validateRemoteImageUrl($url) {
    // Initialize a cURL session
    $ch = curl_init($url);

    // Set cURL options to fetch headers only
    curl_setopt($ch, CURLOPT_NOBODY, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HEADER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true); // follow redirects if any
    curl_setopt($ch, CURLOPT_TIMEOUT, 10); // timeout after 10 seconds

    // Execute the cURL session
    $headers = @curl_exec($ch);

    // Check for cURL errors
    if (curl_errno($ch)) {
        curl_close($ch);
        return "Error: " . curl_error($ch);
    }

    // Get the HTTP status code
    $http_code = @curl_getinfo($ch, CURLINFO_HTTP_CODE);
    
    // Check if the HTTP status code is 200 (OK)
    if ($http_code != 200) {
        curl_close($ch);
        return "HTTP error code: " . $http_code;
    }

    // Get the content type from the headers
    $content_type = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);
    
    // Close the cURL session
    curl_close($ch);

    // Check if the content type is an image
    if (strpos($content_type, 'image/') === 0) {
        return "Valid";
    } else {
        return "URL does not point to an image.";
    }
}
?>