/*
  lightweight hero gallery for the homepage.
*/

{
  const initHeroGallery = () => {
    const gallery = document.querySelector("[data-hero-gallery]");
    if (!gallery) return;

    const slides = Array.from(gallery.querySelectorAll(".landing-hero__slide"));
    const dots = Array.from(gallery.querySelectorAll("[data-hero-dot]"));
    const prev = gallery.querySelector("[data-hero-prev]");
    const next = gallery.querySelector("[data-hero-next]");
    const intervalMs = Number(gallery.dataset.interval || 5000);

    if (slides.length < 2) return;

    let index = slides.findIndex((slide) => slide.hasAttribute("data-active"));
    if (index < 0) index = 0;
    let timerId = null;

    const render = () => {
      slides.forEach((slide, slideIndex) => {
        if (slideIndex === index) {
          slide.setAttribute("data-active", "");
        } else {
          slide.removeAttribute("data-active");
        }
      });

      dots.forEach((dot, dotIndex) => {
        if (dotIndex === index) {
          dot.setAttribute("data-active", "");
          dot.setAttribute("aria-current", "true");
        } else {
          dot.removeAttribute("data-active");
          dot.removeAttribute("aria-current");
        }
      });
    };

    const goTo = (nextIndex) => {
      index = (nextIndex + slides.length) % slides.length;
      render();
    };

    const start = () => {
      if (timerId) return;
      timerId = window.setInterval(() => goTo(index + 1), intervalMs);
    };

    const stop = () => {
      window.clearInterval(timerId);
      timerId = null;
    };

    prev?.addEventListener("click", () => {
      goTo(index - 1);
      stop();
      start();
    });

    next?.addEventListener("click", () => {
      goTo(index + 1);
      stop();
      start();
    });

    dots.forEach((dot, dotIndex) => {
      dot.addEventListener("click", () => {
        goTo(dotIndex);
        stop();
        start();
      });
    });

    gallery.addEventListener("mouseenter", stop);
    gallery.addEventListener("mouseleave", start);
    gallery.addEventListener("focusin", stop);
    gallery.addEventListener("focusout", start);

    render();
    start();
  };

  window.addEventListener("load", initHeroGallery);
}
