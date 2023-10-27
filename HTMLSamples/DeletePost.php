<style> <?php include '../style.css'; ?> </style>
<?php
    $mysqli = new mysqli("mysql.eecs.ku.edu", "m183m438", "oogh3Ahx", "m183m438");
    if($mysqli->connect_errno){
        printf("Connect failed: %s\n", $mysqli->connect_error); exit();
    }
    $checkedboxes = $_POST["checked"];
    echo "Post(s) Deleted.";
    for($i=0; $i<count($checkedboxes); $i++)
    {
        $delete = "DELETE FROM Posts WHERE post_id=$checkedboxes[$i]";
        $mysqli->query($delete);
    }
    ?>
