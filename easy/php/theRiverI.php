<?php
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

fscanf(STDIN, "%d", $r1);
fscanf(STDIN, "%d", $r2);

$a = $r1;
$b = $r2;

function sum($val){
    return array_sum(str_split($val)) + $val;
    }



while ($a != $b){
    $a > $b ?
    $b = sum($b):
    $a = sum($a);
}
// Write an answer using echo(). DON'T FORGET THE TRAILING \n
// To debug: error_log(var_export($var, true)); (equivalent to var_dump)

echo("$a\n");
?>
