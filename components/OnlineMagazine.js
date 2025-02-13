function OnlineMagazine() {
  const articles = [
    {
      title: "Los 5 Mejores Senderos del Valle de Calamuchita",
      subtitle: "Descubre la Naturaleza en su Máxima Expresión",
      description:
        "Explora los senderos más impresionantes del Valle de Calamuchita, desde paseos familiares hasta desafiantes rutas para excursionistas experimentados.",
      author: "Equipo Sol Mosquera",
      date: "15 Feb 2024",
      url: "https://solmosqueracabanas.com/blog/mejores-senderos-calamuchita",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "7 min",
    },
    {
      title: "Gastronomía Serrana: Sabores de Calamuchita",
      subtitle: "Un Viaje Culinario por el Valle",
      description:
        "Descubre los platos típicos y los restaurantes más destacados del Valle de Calamuchita. Una guía imprescindible para los amantes de la buena comida.",
      author: "Equipo Sol Mosquera",
      date: "10 Feb 2024",
      url: "https://solmosqueracabanas.com/blog/gastronomia-calamuchita",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "5 min",
    },
    {
      title: "Actividades Acuáticas en los Lagos de Calamuchita",
      subtitle: "Diversión y Aventura en el Agua",
      description:
        "Desde kayak hasta windsurf, descubre todas las actividades acuáticas que puedes disfrutar en los hermosos lagos del Valle de Calamuchita.",
      author: "Equipo Sol Mosquera",
      date: "5 Feb 2024",
      url: "https://solmosqueracabanas.com/blog/actividades-acuaticas-calamuchita",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "6 min",
    },
  ]

  return `
    <section id="revista-online" class="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-transparent">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            Blog de Viajes
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span class="text-primary">Explora</span>
            <span class="text-gray-800"> Calamuchita</span>
          </h2>
          <p class="text-gray-600 text-lg">
            Descubre los secretos del Valle de Calamuchita, consejos de viaje y las mejores experiencias para tu estadía.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${articles
            .map(
              (article) => `
            <article class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div class="relative overflow-hidden">
                <img src="${article.image}" alt="${article.title}" 
                     class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4 text-white">
                  <span class="text-sm bg-primary/90 px-3 py-1 rounded-full">${article.readTime} lectura</span>
                </div>
              </div>
              <div class="p-6">
                <div class="flex items-center mb-4 text-sm text-gray-500">
                  <span class="flex items-center">
                    <i class="fas fa-user-edit mr-2"></i>
                    ${article.author}
                  </span>
                  <span class="mx-2">•</span>
                  <span>${article.date}</span>
                </div>
                <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  ${article.title}
                </h3>
                <h4 class="text-gray-600 font-semibold mb-3">${article.subtitle}</h4>
                <p class="text-gray-600 mb-4 line-clamp-2">${article.description}</p>
                <a href="${article.url}" class="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 group-hover:translate-x-2 transform">
                  Leer artículo <i class="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </article>
          `,
            )
            .join("")}
        </div>

        <div class="mt-12 text-center">
          <a href="https://solmosqueracabanas.com/blog" 
             class="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 group">
            Explorar Más Artículos
            <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
          </a>
        </div>
      </div>
    </section>
  `
}

