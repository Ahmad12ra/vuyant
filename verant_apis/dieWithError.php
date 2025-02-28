<?php 
function dieWithError($message, $status, $dbConnection) {
    $dbConnection->close();
    die(json_encode(["message" => $message, "status" => $status]));
}