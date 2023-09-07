  <?php return function ($kirby, $site, $pages, $page) {
    $shared = $kirby->controller(
      "site",
      compact("page", "pages", "site", "kirby")
    );

    $beispiel = $shared["subs"];

    $thereturn = [
      "beispiel" => $beispiel,
    ];
    return A::merge($shared, $thereturn);
  };