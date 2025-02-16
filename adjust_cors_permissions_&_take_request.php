<?php 
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// to get any request data that would come to that file and store it in that variable
$data = file_get_contents("php://input");
// json_decode used bec the data would be json
$data = json_decode($data, true);