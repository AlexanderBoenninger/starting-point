<?php
/** @var \Kirby\Cms\Block $block */
$cover = $block->bild()->toFile();
$page_url = $block
  ->seite()
  ->toPage()
  ->url();
$palette = $page->farben()->yaml();
$color = $palette["key"] ?? null;
?>


<?php if ($cover != null && $page_url != null): ?>
<a href="<?= $page_url ?>"
    class="work_preview page_margin sm-mt-3rem mb-2rem sm-mb-5rem grid grid-cols-12 no_underline">

    <div class="project_preview_image <?= $color ?>
    col-span-full sm-col-start-3 sm-col-span-6 row-start-2 row-span-2 sm-row-start-1 sm-row-span-1">
        <?php snippet("img/img", [
          "bild" => $cover,
          "class_on_container" => "",
          "class_on_img" => "rounded-lg",
          "langeKante" => "1000",
          "img_format" => "landscape",
        ]); ?>
    </div>

    <div
        class="project_preview_title <?= $color ?> col-span-full m-2rem sm-col-start-9 sm-col-span-4 self-center row-start-4 row-span-1 sm-row-start-1 sm-row-span-1">
        <span class="uppercase block jugendreise mittel_brot text-center no-underline"><?= $block->text() ?></span>
    </div>

</a>
<?php endif; ?>