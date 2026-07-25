const header = document.querySelector("#header");

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 40);
});






document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const menuToggle = document.querySelector(".menu-toggle");
    const menuLinks = document.querySelectorAll(".nav a");

    menuToggle.addEventListener("click", function () {
      header.classList.toggle("menu-open");
    });

    menuLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("menu-open");
      });
    });
  });






const hallsScroll = document.querySelector("#hallsScroll");

document.querySelector("#nextHall").addEventListener("click", () => {
  hallsScroll.scrollBy({ left: 342, behavior: "smooth" });
});

document.querySelector("#prevHall").addEventListener("click", () => {
  hallsScroll.scrollBy({ left: -342, behavior: "smooth" });
});








  const hallModal = document.querySelector("#hallModal");

  hallModal.addEventListener("show.bs.modal", function (event) {
    const card = event.relatedTarget;

    const title = card.dataset.title;
    const description = card.dataset.description;
    const images = card.dataset.images.split(",");

    document.querySelector("#hallTitle").textContent = title;
    document.querySelector("#hallDescription").textContent = description;

    const imagesContainer = document.querySelector("#hallImages");
    const indicatorsContainer = document.querySelector("#hallIndicators");

    imagesContainer.innerHTML = "";
    indicatorsContainer.innerHTML = "";

    images.forEach((image, index) => {
      imagesContainer.innerHTML += `
        <div class="carousel-item ${index === 0 ? "active" : ""}">
          <img src="${image.trim()}" class="d-block w-100" alt="${title}">
        </div>
      `;

      indicatorsContainer.innerHTML += `
        <button type="button"
                data-bs-target="#hallCarousel"
                data-bs-slide-to="${index}"
                class="${index === 0 ? "active" : ""}"
                ${index === 0 ? 'aria-current="true"' : ""}
                aria-label="Фото ${index + 1}">
        </button>
      `;
    });
  });

  document.querySelectorAll(".js-hall").forEach((card) => {
    card.addEventListener("click", (event) => event.preventDefault());
  });


