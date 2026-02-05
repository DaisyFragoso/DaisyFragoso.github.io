// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

  const images = [
    "../images/Community Space Board game.png.png",
    "../images/Professional Tax Preparation Service.png",
    "../images/Paint w RSP-4.png",
    "../images/Happy day of the dead wRSP.png",
    "../images/Giving thanks with RSP-2.png",
    "../images/Save the Date RSP - Fall 2025-6.png",
    "../images/Winter Holiday with RSP-2.png",
    "../images/Winter Welcome.png",
    "../images/Party-2.png"
  ];

  const imagesPerPage = 2;
  let currentPage = 1;

  function renderGallery(page) {
    const gallery = document.getElementById("about");
    gallery.innerHTML = "";

    const start = (page - 1) * imagesPerPage;
    const end = start + imagesPerPage;
    const pageImages = images.slice(start, end);

    pageImages.forEach(src => {
      const col = document.createElement("div");
      col.className = "w3-col m6";

      const img = document.createElement("img");
      img.src = src;
      img.style.width = "100%";

      col.appendChild(img);
      gallery.appendChild(col);
    });
  }

  function renderPagination() {
    const totalPages = Math.ceil(images.length / imagesPerPage);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("a");
      btn.href = "#";
      btn.textContent = i;
      btn.className =
        "w3-bar-item w3-button " + (i === currentPage ? "w3-black" : "w3-hover-black");

      btn.onclick = (e) => {
        e.preventDefault();
        currentPage = i;
        renderGallery(currentPage);
        renderPagination();
      };

      pagination.appendChild(btn);
    }
  }

  // Initial render
  renderGallery(currentPage);
  renderPagination();