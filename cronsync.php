<?php
error_reporting(0);
ini_set('max_execution_time',0);
include "includes/db.php";
// Create connection
$conn = new mysqli(servername,username,password,database);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
mysqli_query($conn,"TRUNCATE TABLE tbl_team");
// JSON endpoint URL
$json_url = BASE_URL_API."/ex_team?per_page=100&page=";
for($loop=1;$loop<=3;$loop++)
{
	$json_url_parse = "";
	$json_url_parse = $json_url.$loop;
	// Fetch JSON data
	$json_data = @file_get_contents($json_url_parse);
	// Decode JSON data
	$data = array();
	$data = @json_decode($json_data, true);
	foreach($data as $key=>$val)
	{
		$media = $val['featured_media'];
		$media_data = @file_get_contents(BASE_URL_API."/media/".$media);
		$media_data_decoded = @json_decode($media_data, true);
		$qry = "INSERT INTO `tbl_team` (`id`, `wp_id`, `title`, `content`, `excert`, `media`, `status`, `slug`) VALUES (NULL, '".$val['id']."', '".$val['title']['rendered']."', '".$val['content']['rendered']."', '".$val['excerpt']['rendered']."', '".$media_data_decoded['guid']['rendered']."', '".$val['status']."', '".$val['slug']."');";
		mysqli_query($conn,$qry);
		echo $loop;
	} 
	sleep(10);
}
// Close the database connection
$conn->close();
?>
