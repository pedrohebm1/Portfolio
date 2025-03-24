let copytoclipboardDebounce = true;
const queries = document.querySelectorAll('.animate-on-scroll-top');

function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      return
    }
  });
}
const observer = new IntersectionObserver(handleIntersection)
for (let i = 0; i < queries.length; i++) {
  observer.observe(queries[i ])
}

function writeText(id, text, speed) {
  let element = document.getElementById("textOne");
  let i = 0;
  function typeWriter() {
    if (i <= text.length) {
      element.innerHTML = text.substring(0, i) + "_";
      i++;
      setTimeout(typeWriter, speed * 1000);
    } else {
      caseEffect();
    }
  }
  function caseEffect() {
    setTimeout(function () {
      element.innerHTML = text;
    }, 1000);
    setTimeout(function () {
      element.innerHTML = text + "_";
      caseEffect();
    }, 2000);
  }
  typeWriter();
}

function copyToClipBoard() {
    navigator.clipboard.writeText("phs.oliveirasi@gmail.com");

    if (copytoclipboardDebounce === true) {
        copytoclipboardDebounce = false;
        
        const notification = document.getElementById('notifications__copiedToClipboard');
        
        // Mostrar a notificação com animação de "subir"
        notification.style.bottom = '20px'; 
        notification.style.opacity = 1;
        
        // Depois de 2 segundos, esconder a notificação com animação de "descer"
        setTimeout(() => {
            notification.style.bottom = '-100px';
            notification.style.opacity = 0;
        }, 2000);

        // Liberar o debounce após 4 segundos
        setTimeout(() => (copytoclipboardDebounce = true), 4000);
    }
  }

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

setTimeout(function () {
  writeText("textOne", "Desenvolvedor Web", 0.05);
}, 1000);