export default function Footer() {
  return `
    <footer class="bg-gray-900 text-white py-12">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-12">
                <div>
                    <h3 class="text-lg font-bold mb-6 relative inline-block">
                        Enlaces
                        <span class="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
                    </h3>
                    <ul class="space-y-4">
                        <li>
                            <a href="#inicio" 
                               class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="#nosotros" 
                               class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                Nosotros
                            </a>
                        </li>
                        <li>
                            <a href="#servicios" 
                               class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                Servicios
                            </a>
                        </li>
                        <li>

