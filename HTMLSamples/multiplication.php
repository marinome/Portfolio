<?php
    error_reporting(E_ALL);
    ini_set("display_errors", 1);
    
    echo "<table>";
    for($i=1;$i<101;$i++){
        echo"<tr>";
        for($j=1;$j<101;$j++){
            $x= $i * $j;
            echo "<td>$x</td>";
        }
        echo "</tr>";
    }
    echo "</table>";
?>
