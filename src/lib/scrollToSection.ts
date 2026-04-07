export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);

  if (!element) return;

  const yOffset = -80;
  const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};
