"use client";

import { Menu, X, Building2, HardHat, Users, Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">L&D INGENIEROS</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-600 hover:text-blue-600">Inicio</a>
              <a href="#servicios" className="text-gray-600 hover:text-blue-600">Servicios</a>
              <a href="#proyectos" className="text-gray-600 hover:text-blue-600">Proyectos</a>
              <a href="#nosotros" className="text-gray-600 hover:text-blue-600">Nosotros</a>
              <a href="#contacto" className="text-gray-600 hover:text-blue-600">Contacto</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-600">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#inicio" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Inicio</a>
                <a href="#servicios" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Servicios</a>
                <a href="#proyectos" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Proyectos</a>
                <a href="#nosotros" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Nosotros</a>
                <a href="#contacto" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Contacto</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-16">
        <div className="relative h-[600px]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?"
              alt="Construction site"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Construyendo el Futuro
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Expertos en construcción e ingeniería con más de 15 años de experiencia
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Contáctanos
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Nuestros Servicios</h2>
            <p className="mt-4 text-xl text-gray-600">
              Ofrecemos soluciones integrales en construcción y ingeniería
            </p>
          </div>
          <div className="grid grid-cols-1 text-center md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="h-12 w-12 text-blue-600" />,
                title: "Construcción Civil",
                description: "Edificaciones residenciales y comerciales con los más altos estándares de calidad."
              },
              {
                icon: <HardHat className="h-12 w-12 text-blue-600" />,
                title: "Proyectos Industriales",
                description: "Diseño y construcción de instalaciones industriales adaptadas a sus necesidades."
              },
              {
                icon: <Users className="h-12 w-12 text-blue-600" />,
                title: "Consultoría",
                description: "Asesoramiento experto en todas las fases de su proyecto constructivo."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Proyectos Destacados</h2>
            <p className="mt-4 text-xl text-gray-600">
              Conoce algunos de nuestros trabajos más importantes
            </p>
          </div>
          <div className="grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?",
                title: "Centro Comercial Moderno",
                description: "Construcción de centro comercial de 50,000 m²"
              },
              {
                image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?",
                title: "Complejo Residencial",
                description: "Desarrollo residencial de 200 unidades"
              },
              {
                image: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?",
                title: "Planta Industrial",
                description: "Construcción de planta industrial automatizada"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Sobre Nosotros</h2>
          </div>
          <Carousel className="w-full">
            <CarouselContent>
              {/* Slide 1: Current About Content */}
              <CarouselItem>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Nuestra Historia</h3>
                    <p className="text-lg text-gray-600 mb-4">
                      L&D INGENIEROS es una empresa líder en el sector de la construcción con más de 15 años de experiencia. Nos especializamos en proyectos de construcción civil, industrial y consultoría.
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                      Nuestro compromiso con la calidad y la innovación nos ha permitido desarrollar proyectos exitosos que superan las expectativas de nuestros clientes.
                    </p>
                    <div className="grid grid-cols-3 gap-4 mt-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">150+</div>
                        <div className="text-gray-600">Proyectos</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">15+</div>
                        <div className="text-gray-600">Años</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">100%</div>
                        <div className="text-gray-600">Satisfacción</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-[400px]">
                    <Image
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?"
                      alt="Team"
                      fill
                      className="object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </CarouselItem>

              {/* Slide 2: Mission and Vision */}
              <CarouselItem>
                <div className="grid grid-cols-1 text-center md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="mb-12">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
                      <p className="text-lg text-gray-600">
                        Proporcionar soluciones integrales en construcción e ingeniería que excedan las expectativas de nuestros clientes, mediante la implementación de tecnologías innovadoras, prácticas sostenibles y un equipo altamente calificado, contribuyendo al desarrollo de infraestructura de calidad en nuestra sociedad.
                      </p>
                    </div>

                    {/* Added extra spacing here */}
                    <div className="mt-8 mb-12">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
                      <p className="text-lg text-gray-600">
                        Ser reconocidos como la empresa líder en el sector de la construcción e ingeniería a nivel nacional, destacando por nuestra excelencia operativa, innovación tecnológica y compromiso con el desarrollo sostenible, generando valor para nuestros clientes, colaboradores y la sociedad en general.
                      </p>
                    </div>
                  </div>
                  <div className="relative h-[400px]">
                    <Image
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?"
                      alt="Vision"
                      fill
                      className="object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Contact Section - Main Container */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Contáctanos</h2>
            <p className="mt-4 text-xl text-gray-600">
              Estamos listos para hacer realidad tu proyecto
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

            {/* Phone Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Llámanos</h3>
              <p className="text-gray-600 text-center mb-4">
                Estamos disponibles de lunes a viernes de 8am a 6pm
              </p>
              <a
                href="tel:+51123456789"
                className="block text-center text-blue-600 font-medium hover:text-blue-800"
              >
                +51 123 456 789
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Escríbenos</h3>
              <p className="text-gray-600 text-center mb-4">
                Resolveremos tus dudas en menos de 24 horas
              </p>
              <a
                href="mailto:contacto@ldingenieros.com"
                className="block text-center text-blue-600 font-medium hover:text-blue-800"
              >
                contacto@ldingenieros.com
              </a>
            </div>

            {/* Address Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Visítanos</h3>
              <p className="text-gray-600 text-center mb-4">
                Agenda una reunión en nuestras oficinas
              </p>
              <p className="text-center text-gray-700">
                Jr. Bolognesi 1461 Partido Alto - Oficina Tarapoto
              </p>
            </div>
          </div>

          {/* Blue Divider Section */}
          <div className="bg-blue-600 text-white py-12 px-8 rounded-xl mb-20">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">¿Listo para empezar tu proyecto?</h3>
              <p className="text-blue-100 mb-8">
                Nuestro equipo de expertos está listo para asesorarte y brindarte la mejor solución para tus necesidades de construcción e ingeniería.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+51123456789"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Llamar ahora
                </a>
                <a
                  href="mailto:contacto@ldingenieros.com"
                  className="border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Enviar email
                </a>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1744471700693!6m8!1m7!1s4wPfmhGUmpclyCAnbdL_RA!2m2!1d-6.47518832001289!2d-76.36702176627352!3f31.67588081512683!4f-0.11648555391580828!5f0.7820865974627469" 
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center">
                <Building2 className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">L&D INGENIEROS</span>
              </div>
              <p className="mt-4 text-gray-400">
                Construyendo el futuro con excelencia e innovación
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#inicio" className="text-gray-400 hover:text-white">Inicio</a></li>
                <li><a href="#servicios" className="text-gray-400 hover:text-white">Servicios</a></li>
                <li><a href="#proyectos" className="text-gray-400 hover:text-white">Proyectos</a></li>
                <li><a href="#nosotros" className="text-gray-400 hover:text-white">Nosotros</a></li>
                <li><a href="#contacto" className="text-gray-400 hover:text-white">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Jr. Bolognesi 1461 Partido Alto - Oficina Tarapoto</li>
                <li>+51 123 456 789</li>
                <li>contacto@ldingenieros.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} L&D INGENIEROS. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}