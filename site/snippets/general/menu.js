import { registerComponent } from "@very-simple/components";

registerComponent("menu", ({ el, refs, refsAll }) => {
  const { menuList, toggle, bla } = refs;
  const { menuItems } = refsAll;

  console.log("Menu");
  const menu_container = document.querySelector(".menu_container");
  const menu_content = document.querySelector(".menu_content");
  const menuButton = document.querySelector(".menu_open");
  const hamburger = menuButton.querySelector(".menu_open_icon");
  const menuWord = menuButton.querySelector(".menu_word");

  const svgClose = `
 <svg xmlns="http://www.w3.org/2000/svg" width="35" height="14.814" viewBox="0 0 35 14.814">
  <g id="Gruppe_10" data-name="Gruppe 10" transform="translate(1.045 5.407)">
    <line id="Linie_16" data-name="Linie 16" x2="16.95" transform="translate(10.235 -3.993) rotate(45)" fill="none" stroke="var(--color-black)" stroke-linecap="round" stroke-width="2"/>
    <line id="Linie_17" data-name="Linie 17" x2="16.95" transform="translate(10.235 7.993) rotate(-45)" fill="none" stroke="var(--color-black)" stroke-linecap="round" stroke-width="2"/>
  </g>
  <rect id="Rechteck_14" data-name="Rechteck 14" width="35" height="13" transform="translate(0 0.907)" fill="none"/>
</svg>
`;
  const svgBurger = `
 <svg xmlns="http://www.w3.org/2000/svg" width="34.455" height="12" viewBox="0 0 34.455 12">
  <g id="burger" data-name="burger" transform="translate(1 1)">
    <line id="Linie_16" data-name="Linie 16" x2="32.455" fill="none" stroke="var(--color-black)" stroke-linecap="round" stroke-width="2"/>
    <line id="Linie_17" data-name="Linie 17" x2="32.455" transform="translate(0 5)" fill="none" stroke="var(--color-black)" stroke-linecap="round" stroke-width="2"/>
    <line id="Linie_18" data-name="Linie 18" x2="32.455" transform="translate(0 10)" fill="none" stroke="var(--color-black)" stroke-linecap="round" stroke-width="2"/>
  </g>
</svg>

`;
  const resize = () => {
    const { height } = menu_content.getBoundingClientRect();
    menu_content.style.setProperty("--height", `${height}px`);
  };

  menuButton.addEventListener("click", () => {
    let isOpen = hamburger.getAttribute("aria-expanded") === "true";
    // Toggle the menu
    isOpen = !isOpen;

    menu_container.classList.toggle("open", isOpen);
    menuWord.classList.toggle("notvisible", isOpen);
    hamburger.innerHTML = isOpen ? svgClose : svgBurger;
    hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  window.addEventListener("resize", resize);

  resize();
  setTimeout(() => menu_content.classList.add("menu_transition"));
});
