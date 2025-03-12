<?php
require_once "adjust_cors_permissions_&_take_request.php";
require_once "dieWithError.php";


$hats_array = [];
function getUserHatFromIds($array_of_hat_ids)
{

    if ($array_of_hat_ids[0] !== null) {
        try {
            require "db_connection.php";
        } catch (Exception $e) {
            dieWithError("error connecting with database!", 404, $conn, 0);
        }


        foreach ($array_of_hat_ids as $hat_id) {


            $pre = $conn->prepare("SELECT hat_name FROM hats WHERE id = ?");
            $pre->bind_param("i", $hat_id);


            if (!$pre->execute()) {
                dieWithError("failed to excute query: getUserOwnedHatNamesFromHatIds.php", 404, $conn, $pre);
            }


            $res = $pre->get_result();
            $fetched = $res->fetch_assoc();
            $GLOBALS["hats_array"][] = $fetched["hat_name"];


        }


        $conn->close();
        $pre->close();
    }

}