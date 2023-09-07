<?php $entryFile = isset($entry) ? "templates/$entry.js" : null; ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php snippet("meta"); ?>
    <link rel="shortcut icon" href="/assets/img/favicon.png" type="image/png" />
    <link rel="icon" href="/assets/img/favicon.png" type="image/png" />


    <title><?= $site->title() ?></title>
    <!-- Include the shared css ... -->
    <?= vite()->css() ?>
    <!-- ... and the template's css (if it exists) -->
    <?php e($entryFile, vite()->css($entryFile)); ?>

    <?php
$palette = $page->farben()->yaml();
$color = $palette["background"] ?? null;
?>
    <style>
    :root {
        --page_color: <?=$color ?>;
    }
    </style>
</head>

<body class="">
    <?php snippet("general/top_bar"); ?>