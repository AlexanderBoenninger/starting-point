<?php $entryFile = isset($entry) ? "templates/$entry.js" : null; ?>
<footer class="grid content-end">

</footer>
<!-- Include the shared js ... -->
<?= vite()->js() ?>
<!-- ... and the template's js (if it exists) -->
<?php e($entryFile, vite()->js($entryFile)); ?>
</body>

</html>