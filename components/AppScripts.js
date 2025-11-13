import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function AppScripts() {
  const router = useRouter()

  useEffect(() => {
    // ===== SAUDAÇÃO DINÂMICA =====
    const saudacaoDinamica = () => {
      const hora = new Date().getHours();
      let saudacao = "";

      if (hora >= 5 && hora < 12) {
        saudacao = "Bom dia!";
      } else if (hora >= 12 && hora < 18) {
        saudacao = "Boa tarde!";
      } else {
        saudacao = "Boa noite!";
      }

      const saudacaoEl = document.getElementById("saudacao");
      if (saudacaoEl) {
        saudacaoEl.textContent = saudacao;
      }
    }

    // ===== DARK MODE =====
    const initializeDarkMode = () => {
      const darkModeToggle = document.getElementById("darkModeToggle");
      const body = document.body;

      const newToggle = darkModeToggle?.cloneNode(true);
      if (darkModeToggle && newToggle) {
        darkModeToggle.parentNode?.replaceChild(newToggle, darkModeToggle);
      }

      const applyDarkMode = (enable) => {
        if (enable) body.classList.add("dark-mode");
        else body.classList.remove("dark-mode");
      }

      const darkPref = localStorage.getItem("darkMode") === "enabled";
      applyDarkMode(darkPref);

      // Alterna Dark Mode
      const currentToggle = document.getElementById("darkModeToggle");
      if (currentToggle) {
        currentToggle.addEventListener("click", () => {
          const enabled = !body.classList.contains("dark-mode");
          applyDarkMode(enabled);
          localStorage.setItem("darkMode", enabled ? "enabled" : "disabled");
        });
      }
    }

    // ===== CARDS ANIMADOS =====
    //const initializeCardHover = () => {
     // document.querySelectorAll(".card").forEach(card => {
      //  // Remove event listeners antigos
      //  const newCard = card.cloneNode(true);
      //  card.parentNode?.replaceChild(newCard, card);

        // Adiciona novos event listeners
     //   newCard.addEventListener("mouseenter", () => {
     //     newCard.style.transform = "scale(1.05)";
     //     newCard.style.transition = "transform 0.3s ease";
     //   });
     //   newCard.addEventListener("mouseleave", () => {
      //    newCard.style.transform = "scale(1)";
      //  });
    //  });
  //  }

    // ===== DROPDOWNS ANIMADOS =====
    const initializeDropdowns = () => {
      document.querySelectorAll('.dropdown').forEach(drop => {
        const menu = drop.querySelector('.dropdown-menu');
        if (menu) {
          drop.addEventListener('show.bs.dropdown', () => menu.classList.add('fade-in'));
          drop.addEventListener('hide.bs.dropdown', () => menu.classList.remove('fade-in'));
        }
      });
    }

    // Função para inicializar tudo
    const initializeAll = () => {
      saudacaoDinamica();
      initializeDarkMode();
     // initializeCardHover();
      initializeDropdowns();
    }

    initializeAll();

    const handleRouteChange = () => {
      setTimeout(initializeAll, 50);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }

  }, [router])

  return null;
}