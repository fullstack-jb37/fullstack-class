<?php 
//indexed array
$colors = ['red', 'green', 'blue', [255, 211, 234]];
// echo $colors[0];
// echo $colors[3];
// print_r($colors[3]);
// print_r($colors[3][0]);

$names = array('Amir', 'Nitzan', 'Bar');
// print_r($names);
// echo "<br>";
// $names[1] = 'Shalom';
// print_r($names);

array_push($names, 'Ofir');
// print_r($names);

// echo array_pop($names);
// echo "<br>";
// print_r($names);

// echo count($names)
// $colorsAndNames = array_merge($names, $colors);
// print_r($colorsAndNames);

//associative array
// $deviceState = ['active' => true, 'online' => false, 'simInserted' => true];
$deviceState = array('active' => true, 'online' => false, 'simInserted' => true);
print_r($deviceState);
echo "<br>";
echo $deviceState['active'];
echo "<br>";
echo $deviceState['online'];
?>