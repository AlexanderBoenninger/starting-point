import "../styles/index.scss";
import "@unocss/reset/normalize.css";
import "@unocss/reset/sanitize/sanitize.css";
import "@unocss/reset/sanitize/assets.css";
import LazyLoad from "vanilla-lazyload";
import Alpine from "alpinejs";

window.Alpine = Alpine;
Alpine.start();
import { mountComponents } from "@very-simple/components";
import.meta.glob("../snippets/**/*.(js|scss)", { eager: true });

var lazyLoadInstance = new LazyLoad({
  // Your custom settings go here
});
mountComponents();
