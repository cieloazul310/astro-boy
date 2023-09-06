document.querySelectorAll(".drawer-handler")?.forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelector(".drawer")?.classList.toggle("drawer-open");
  });
});
