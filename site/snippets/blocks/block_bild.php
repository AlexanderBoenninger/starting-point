<?php

/** @var \Kirby\Cms\Block $block */
$alt = $block->alt();
$caption = $block->caption();
$crop = $block->crop()->isTrue();
$link = $block->link();
$ratio = $block->ratio()->or("auto");
$src = null;

if ($block->location() == "web") {
  $src = $block->src()->esc();
} elseif ($image = $block->image()->toFile()) {
  $alt = $alt->or($image->alt());
  $src = $image->url();
}
?>


<?php if ($src): ?>

<figure <?= Html::attr(
  ["data-ratio" => $ratio, "data-crop" => $crop],
  null,
  " "
) ?>>
    <?php if ($link->isNotEmpty()): ?>
    <a href="<?= Str::esc($link->toUrl()) ?>">


        <?php snippet("img/img", [
          "bild" => $image,
          "class_on_container" => "object-cover w-full",
          "class_on_img" => "",
          "langeKante" => "1000",
          "img_format" => $image->orientation(),
        ]); ?>
        <!-- <img src="<?= $src ?>" alt="<?= $alt->esc() ?>"> -->

    </a>
    <?php else: ?>

    <?php snippet("img/img", [
      "bild" => $image,
      "class_on_container" => "object-cover w-full",
      "class_on_img" => "rounded-lg",
      "langeKante" => "1000",
      "img_format" => $image->orientation(),
    ]); ?>
    <?php endif; ?>

    <?php if ($caption->isNotEmpty()): ?>
    <figcaption>
        <?php snippet("img/img_credits", ["caption" => $caption]); ?>
        <?= $caption ?>
    </figcaption>
    <?php endif; ?>
</figure>
<?php endif; ?>