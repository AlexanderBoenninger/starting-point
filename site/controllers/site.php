<?php

return function ($kirby, $site, $pages, $page) {
  $subs = $site->pages()->listed();
  $works = $site
    ->find("works")
    ->children()
    ->listed();
  return [
    "works" => $works,
    "subs" => $subs,
  ];
};