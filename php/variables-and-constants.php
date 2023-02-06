<?php
$name = "Shalom";
$age = 27;
define("PHONE", "075834575654");
?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Hello <?php echo $name ?>!</h1>
    <h2><?php echo $name ?> is <?php echo $age ?> years old apparently, and his phone number is <?php echo PHONE; ?></h2>
    <h3><?php echo $name ?> decided to change his name, and from now on his name is:
        <?php
        $name = "Tomer";
        echo $name;
        ?>
    </h3>
</body>

</html>