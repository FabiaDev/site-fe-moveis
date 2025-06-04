document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth"
        });
      }
    });
  });

  const btnTopo = document.getElementById("btnTopo");
  window.addEventListener("scroll", function () {
    btnTopo.style.display = window.scrollY > 300 ? "block" : "none";
  });
  btnTopo.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  ScrollReveal().reveal('.hero-content, .sobre, .galeria, .contato, footer', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: false
  });

  const modal = document.getElementById("modal");
  const modalConteudo = document.querySelector(".modal-conteudo");
  const fecharModal = document.querySelector(".fechar");

  document.querySelectorAll(".produto").forEach(produto => {
    produto.addEventListener("click", function () {
      const imagens = this.getAttribute("data-imagens");
      if (!imagens) return;

      modalConteudo.innerHTML = "";
      imagens.split(",").forEach(src => {
        const img = document.createElement("img");
        img.src = src.trim();
        img.style.maxWidth = "300px";
        img.style.margin = "10px";
        img.style.borderRadius = "8px";
        img.style.boxShadow = "0 0 10px #000";
        modalConteudo.appendChild(img);
      });

      modal.style.display = "flex";
    });
  });

  fecharModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});