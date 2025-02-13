document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app")
  app.innerHTML = `
        ${TopBanner()}
        ${Header()}
        <main>
            ${Hero()}
            ${About()}
            ${FeaturedProperties()}
            ${Services()}
            ${OnlineMagazine()}
            ${Playlists()}
            ${Contact()}
            ${AppDownload()}
        </main>
        ${Footer()}
        ${BottomNavigation()}
        ${WhatsAppButton()}
    `

  // Top Banner Animation
  const topBanner = document.querySelector(".animate-marquee")
  if (topBanner) {
    const content = topBanner.innerHTML
    topBanner.innerHTML = content + content // Duplicate content for seamless loop

    function animateMarquee() {
      if (topBanner.scrollLeft >= topBanner.scrollWidth / 2) {
        topBanner.scrollLeft = 0
      } else {
        topBanner.scrollLeft += 1
      }
      requestAnimationFrame(animateMarquee)
    }

    animateMarquee()
  }

  // Scroll to top button
  const scrollToTopBtn = document.getElementById("scrollToTopBtn")
  if (scrollToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.remove("hidden")
      } else {
        scrollToTopBtn.classList.add("hidden")
      }
    })

    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 100, // Adjust for header height
          behavior: "smooth",
        })
      }
    })
  })

  // Instagram Embed
  if (window.instgrm) {
    window.instgrm.Embeds.process()
  } else {
    console.warn("Instagram embed script not loaded")
  }

  // Bottom Navigation active state
  const bottomNavLinks = document.querySelectorAll("nav.fixed.bottom-0 a")
  const sections = document.querySelectorAll("section[id]")

  window.addEventListener("scroll", () => {
    let current = ""
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    bottomNavLinks.forEach((link) => {
      link.classList.remove("text-primary")
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("text-primary")
      }
    })
  })

  // Contact form submission
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault()
      const formData = new FormData(contactForm)
      const whatsappMessage =
        `*Nueva Consulta de Reserva*%0A%0A` +
        `*Nombre:* ${formData.get("name")}%0A` +
        `*Email:* ${formData.get("email")}%0A` +
        `*Teléfono:* ${formData.get("phone")}%0A` +
        `*Check-in:* ${formData.get("check-in")}%0A` +
        `*Check-out:* ${formData.get("check-out")}%0A` +
        `*Ubicación:* ${formData.get("location")}%0A` +
        `*Huéspedes:* ${formData.get("guests")}%0A` +
        `*Mensaje:* ${formData.get("message")}`

      window.open(`https://wa.me/5493546406871?text=${whatsappMessage}`, "_blank")
      contactForm.reset()
    })
  } else {
    console.error("Contact form not found")
  }

  // Load playlist videos
  loadPlaylistVideos()
})

