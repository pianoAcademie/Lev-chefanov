document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  };
  onScroll();
  window.addEventListener("scroll", onScroll);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("is-open");
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => nav.classList.remove("is-open"));
    });
  }

  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      newsletterForm.querySelector("input").value = "";
      alert(window.i18n ? window.i18n.t("alerts.newsletterSuccess") : "Merci pour votre inscription !");
    });
  }

  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert(window.i18n ? window.i18n.t("alerts.contactSuccess") : "Merci pour votre message, nous reviendrons vers vous rapidement.");
      contactForm.reset();
    });
  }

  const videoModal = document.getElementById("videoModal");
  const videoModalIframe = document.getElementById("videoModalIframe");
  const videoModalClose = document.getElementById("videoModalClose");

  if (videoModal && videoModalIframe) {
    const gridIframes = document.querySelectorAll(".video-grid iframe");
    gridIframes.forEach((f) => {
      f.dataset.src = f.src;
    });

    const stopOtherPlayers = () => {
      gridIframes.forEach((f) => {
        f.src = "about:blank";
        f.src = f.dataset.src;
      });
      const localVideo = document.querySelector("#ecouter video");
      if (localVideo) localVideo.pause();
    };

    const openVideoModal = (videoId) => {
      stopOtherPlayers();
      videoModalIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      videoModal.classList.add("is-open");
      document.body.style.overflow = "hidden";
    };

    const closeVideoModal = () => {
      videoModal.classList.remove("is-open");
      videoModalIframe.src = "";
      document.body.style.overflow = "";
    };

    document.querySelectorAll(".expand-btn[data-video-id]").forEach((btn) => {
      btn.addEventListener("click", () => openVideoModal(btn.getAttribute("data-video-id")));
    });

    videoModalClose.addEventListener("click", closeVideoModal);
    videoModal.addEventListener("click", (e) => {
      if (e.target === videoModal) closeVideoModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && videoModal.classList.contains("is-open")) closeVideoModal();
    });
  }
});
