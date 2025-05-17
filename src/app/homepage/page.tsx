"use client"

import {
    Menu,
    X,
    Building2,
    HardHat,
    Phone,
    Mail,
    MapPin,
    ChevronRight,
    ClipboardCheck,
    CalendarCheck,
    FileSearch,
    Map,
    Clock,
    Facebook,
    Linkedin,
    Instagram,
} from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Link from "next/link"
import { motion } from "framer-motion"
import { useMobile } from "../hooks/use-mobile"
import { ProjectGalleryModal } from "../components/project-gallery-modal"

// Definir los proyectos con sus imágenes
const projects = [
    {
        id: "enrocado",
        image: "/enrocado/enrocado.webp",
        title: "Enrocado del Malecón Cumbaza",
        location: "Distrito de Morales, San Martin",
        description: `Trabajo de enrocado del río Cumbaza en el Malecón Cumbaza, como parte de los trabajos de alcantarillado
          sanitario en el distrito de Morales. Este proyecto fue diseñado para proteger la ribera del río contra la erosión
          y las inundaciones, utilizando técnicas avanzadas de ingeniería hidráulica y materiales de alta durabilidad.
          La obra incluyó la colocación estratégica de rocas de gran tamaño para formar una barrera protectora,
          complementada con trabajos de estabilización del suelo y mejora del drenaje.`,
        images: [
            { src: "/enrocado/enrocado1.webp", alt: "Vista principal del enrocado" },
            { src: "/enrocado/enrocado2.webp", alt: "Detalle del enrocado" },
            { src: "/enrocado/enrocado3.webp", alt: "Vista panorámica del río" },
            { src: "/enrocado/enrocado4.webp", alt: "Trabajos en progreso" },
        ],
    },
    {
        id: "hoyada",
        image: "/hoyada/hoyada.webp",
        title: "Obra de Saneamiento Hoyada",
        location: "Tarapoto, San Martin",
        description: `Trabajos de rectificación de instalación domiciliarias de la nueva matriz agua potable, parte alta de Tarapoto.
          Este proyecto de infraestructura sanitaria mejoró significativamente el acceso al agua potable para los residentes
          de la zona alta de Tarapoto. Se implementaron nuevas tecnologías para garantizar la eficiencia y durabilidad
          del sistema, incluyendo materiales resistentes a la corrosión y diseños que facilitan el mantenimiento futuro.
          El proyecto también contempló la minimización del impacto ambiental durante la construcción.`,
        images: [
            { src: "/hoyada/hoyada1.webp", alt: "Vista principal de la obra" },
            { src: "/hoyada/hoyada2.webp", alt: "Instalaciones domiciliarias" },
            { src: "/hoyada/hoyada3.webp", alt: "Trabajos de excavación" },
            { src: "/hoyada/hoyada4.webp", alt: "Conexiones de agua potable" },
        ],
    },
    {
        id: "defensa",
        image: "/defensa/defensa.webp",
        title: "Defensa Ribereña del Río Cumbaza",
        location: "Distrito de Morales, San Martin",
        description: `Se viene realizando la Obra de Defensa Ribereña del rio Cumbaza en el distrito de Morales Provincia y Región
          San Martín. Este proyecto de ingeniería civil está diseñado para proteger las áreas urbanas y agrícolas
          adyacentes al río Cumbaza contra inundaciones y erosión. La defensa ribereña incorpora técnicas modernas
          de bioingeniería que combinan estructuras físicas con elementos naturales para crear una solución
          sostenible y estéticamente integrada con el paisaje local.`,
        images: [
            { src: "/defensa/defensa1.webp", alt: "Vista principal de la defensa ribereña" },
            { src: "/defensa/defensa2.webp", alt: "Estructura de contención" },
            { src: "/defensa/defensa3.webp", alt: "Vista aérea del proyecto" },
            { src: "/defensa/defensa4.webp", alt: "Detalles constructivos" },
        ],
    },
    {
        id: "tacna",
        image: "/tacna/tacna.webp",
        title: "Mejora de Pistas y Veredas de la ciudad de Tacna",
        location: "Tacna",
        description: `Proyecto de infraestructura vial orientado a la mejora y rehabilitación de las calles y espacios peatonales en
          Tacna. Esta obra de mejoramiento urbano ha transformado significativamente la movilidad y accesibilidad
          en zonas clave de Tacna. El diseño incorporó criterios de accesibilidad universal, con rampas y señalización
          táctil para personas con movilidad reducida. Los materiales utilizados fueron seleccionados por su durabilidad
          y bajo mantenimiento, considerando las condiciones climáticas específicas de la región.`,
        images: [
            { src: "/tacna/tacna1.webp", alt: "Vista principal de las pistas" },
            { src: "/tacna/tacna2.webp", alt: "Veredas terminadas" },
            { src: "/tacna/tacna3.webp", alt: "Proceso de construcción" },
            { src: "/tacna/tacna4.webp", alt: "Detalles de acabados" },
        ],
    },
]

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0)
    const [activeSection, setActiveSection] = useState("inicio")
    const isMobile = useMobile()
    const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY)

            // Determine active section based on scroll position
            const sections = ["inicio", "servicios", "proyectos", "nosotros", "contacto"]
            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const openProjectModal = (project: (typeof projects)[0]) => {
        setSelectedProject(project)
    }

    const closeProjectModal = () => {
        setSelectedProject(null)
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Navigation Bar */}
            <nav
                className={`fixed w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-white shadow-lg py-4"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Link href="/">
                                <div className="flex items-center cursor-pointer transform hover:scale-105 transition-transform duration-200">
                                    <Image
                                        src="/GRUPO-LD-INGENIEROS-1.png"
                                        width={50}
                                        height={50}
                                        alt="Logo"
                                        className="h-8 w-8 sm:h-10 sm:w-10"
                                    />
                                    <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent hover:from-blue-800 hover:to-blue-600 transition-colors duration-200">
                                        L&D INGENIEROS
                                    </span>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-4 lg:space-x-8">
                            {["inicio", "servicios", "proyectos", "nosotros", "contacto"].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item}`}
                                    className={`text-gray-700 font-medium px-3 py-2 rounded-md transition-colors duration-200 relative group ${activeSection === item ? "text-blue-600" : ""
                                        }`}
                                >
                                    <span className="capitalize">{item}</span>
                                    <span
                                        className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${activeSection === item ? "w-full" : "w-0 group-hover:w-full"
                                            }`}
                                    ></span>
                                </a>
                            ))}
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition duration-200"
                                aria-expanded={isMenuOpen}
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden bg-white/95 backdrop-blur-sm rounded-lg shadow-lg mt-2 overflow-hidden"
                        >
                            <div className="px-2 pt-2 pb-4 space-y-1">
                                {["inicio", "servicios", "proyectos", "nosotros", "contacto"].map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item}`}
                                        className={`block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-colors duration-200 ${activeSection === item ? "bg-blue-50 text-blue-600" : ""
                                            }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <span className="capitalize">{item}</span>
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section id="inicio" className="pt-16 relative">
                <div className="relative h-[80vh] sm:h-[90vh] max-h-[800px] min-h-[500px] sm:min-h-[600px]">
                    <div className="absolute inset-0">
                        <Image src="/header.webp" alt="Construction site" fill className="object-cover" priority />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
                    </div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-white max-w-2xl">
                            <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
                                Construyendo el <span className="text-blue-400">Futuro</span> con Excelencia
                            </motion.h1>
                            <motion.p variants={fadeInUp} className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200">
                                Expertos en construcción e ingeniería con más de 18 años de experiencia transformando ideas en
                                realidades
                            </motion.p>
                            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                                <a
                                    href="#contacto"
                                    className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                                >
                                    Contáctanos
                                    <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                                </a>
                                <a
                                    href="#servicios"
                                    className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border-2 border-white text-sm sm:text-base font-medium rounded-md text-white hover:bg-white/10 transition-all duration-300"
                                >
                                    Nuestros Servicios
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                        <span className="text-white text-sm mb-2">Descubre más</span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                            className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-1"
                        >
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                                className="w-1.5 h-3 bg-white rounded-full"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="servicios" className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10 sm:mb-16"
                    >
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                            NUESTROS SERVICIOS
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Soluciones Integrales en Construcción
                        </h2>
                        <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-blue-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
                        <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            Ofrecemos soluciones integrales en construcción e ingeniería adaptadas a tus necesidades
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    >
                        {[
                            {
                                icon: <Building2 className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600" />,
                                title: "Diseño y Construcción",
                                description: `Servicio integral que abarca desde la conceptualización arquitectónica hasta la ejecución física de proyectos,
                    garantizando coherencia entre diseño y construcción con altos estándares de calidad.`,
                            },
                            {
                                icon: <HardHat className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600" />,
                                title: "Ingenieria Estructural",
                                description: `Análisis, cálculo y diseño de sistemas estructurales para edificaciones, asegurando seguridad, 
                resistencia y cumplimiento de normativas sísmicas y de carga.`,
                            },
                            {
                                icon: <ClipboardCheck className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600" />,
                                title: "Consultoría y Supervision de Obras",
                                description: `Asesoría técnica especializada y control permanente durante la ejecución de proyectos para 
                garantizar el cumplimiento de especificaciones, plazos y presupuestos.`,
                            },
                            {
                                icon: <CalendarCheck className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600" />,
                                title: "Gestión de Proyectos",
                                description: `Dirección y coordinación profesional de todos los aspectos del proyecto 
                (tiempo, costos, calidad y recursos) para lograr objetivos eficientemente.`,
                            },
                            {
                                icon: <FileSearch className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600" />,
                                title: "Estudios de Factibilidad",
                                description:
                                    "Evaluación técnica, económica y legal de proyectos para determinar su viabilidad antes de la inversión, analizando costos-beneficios y riesgos potenciales.",
                            },
                            {
                                icon: <Map className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600" />,
                                title: "Planificación Urbana",
                                description: `Diseño y organización estratégica del desarrollo territorial, integrando aspectos sociales, 
                ambientales y de infraestructura para comunidades sostenibles.`,
                            },
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group"
                            >
                                <div className="bg-blue-50 rounded-2xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                                    <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                                <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="proyectos" className="py-12 sm:py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10 sm:mb-16"
                    >
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                            PORTAFOLIO
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proyectos Destacados</h2>
                        <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-blue-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
                        <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            Conoce algunos de nuestros trabajos más importantes y el impacto que generan
                        </p>
                    </motion.div>

                    <div className="relative">
                        <Carousel className="w-full">
                            <CarouselContent>
                                {/* First set of projects */}
                                <CarouselItem>
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-100px" }}
                                        variants={staggerContainer}
                                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                                    >
                                        {projects.slice(0, 3).map((project, index) => (
                                            <motion.div
                                                key={index}
                                                variants={fadeInUp}
                                                className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col h-full group"
                                            >
                                                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                                                    <Image
                                                        src={project.image || "/placeholder.svg"}
                                                        alt={project.title}
                                                        fill
                                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                </div>
                                                <div className="p-4 sm:p-6 flex-grow">
                                                    <div className="flex items-center mb-2">
                                                        <MapPin className="h-4 w-4 text-blue-600 mr-1" />
                                                        <span className="text-sm text-blue-600">{project.location}</span>
                                                    </div>
                                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                                        {project.description.split(".")[0] + "."}
                                                    </p>
                                                </div>
                                                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                                                    <button
                                                        onClick={() => openProjectModal(project)}
                                                        className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300 flex items-center"
                                                    >
                                                        Ver detalles
                                                        <ChevronRight className="ml-1 h-4 w-4" />
                                                    </button>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </CarouselItem>

                                {/* Second set of projects */}
                                <CarouselItem>
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-100px" }}
                                        variants={staggerContainer}
                                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                                    >
                                        {projects.slice(3).map((project, index) => (
                                            <motion.div
                                                key={index}
                                                variants={fadeInUp}
                                                className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col h-full group"
                                            >
                                                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                                                    <Image
                                                        src={project.image || "/placeholder.svg"}
                                                        alt={project.title}
                                                        fill
                                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                </div>
                                                <div className="p-4 sm:p-6 flex-grow">
                                                    <div className="flex items-center mb-2">
                                                        <MapPin className="h-4 w-4 text-blue-600 mr-1" />
                                                        <span className="text-sm text-blue-600">{project.location}</span>
                                                    </div>
                                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                                        {project.description.split(".")[0] + "."}
                                                    </p>
                                                </div>
                                                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                                                    <button
                                                        onClick={() => openProjectModal(project)}
                                                        className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300 flex items-center"
                                                    >
                                                        Ver detalles
                                                        <ChevronRight className="ml-1 h-4 w-4" />
                                                    </button>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </CarouselItem>
                            </CarouselContent>

                            {/* Controles de carrusel adaptados para móvil y escritorio */}
                            {isMobile ? (
                                <div className="flex justify-center mt-6">
                                    <CarouselPrevious className="static transform-none mx-2 bg-white hover:bg-blue-50 border border-blue-200" />
                                    <CarouselNext className="static transform-none mx-2 bg-white hover:bg-blue-50 border border-blue-200" />
                                </div>
                            ) : (
                                <>
                                    <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white hover:bg-blue-50 border border-blue-200 shadow-md z-10" />
                                    <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white hover:bg-blue-50 border border-blue-200 shadow-md z-10" />
                                </>
                            )}
                        </Carousel>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="nosotros" className="py-12 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10 sm:mb-16"
                    >
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                            QUIÉNES SOMOS
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sobre Nosotros</h2>
                        <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-blue-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
                    </motion.div>

                    <div className="relative">
                        <Carousel className="w-full">
                            <CarouselContent>
                                {/* Slide 1: Current About Content */}
                                <CarouselItem>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center max-w-5xl mx-auto">
                                        <motion.div
                                            initial={{ opacity: 0, x: -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.6 }}
                                            className="mb-8 md:mb-12"
                                        >
                                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Nuestra Historia</h3>
                                            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                                                Somos una empresa constructora dedicada a ejecutar proyectos como carreteras, pistas, veredas,
                                                sistemas de saneamiento, infraestructura hidráulica y otros desarrollos de infraestructura.
                                                Ofrecemos servicios de construcción de alta calidad, con soluciones innovadoras y sustentables.
                                            </p>
                                            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                                                Nuestro compromiso con la calidad y la innovación nos ha permitido desarrollar proyectos
                                                exitosos que superan las expectativas de nuestros clientes.
                                            </p>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 sm:mt-8">
                                                {[
                                                    { value: "50+", label: "Proyectos ejecutados" },
                                                    { value: "18+", label: "Años de experiencia" },
                                                    { value: "100%", label: "Ratio de satisfacción" },
                                                ].map((stat, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: index * 0.2, duration: 0.5 }}
                                                        className="text-center p-3 sm:p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-300"
                                                    >
                                                        <div className="text-2xl sm:text-3xl font-bold text-blue-600">{stat.value}</div>
                                                        <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, x: 30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.6 }}
                                            className="relative h-[300px] sm:h-[400px] flex justify-center mt-4 sm:mt-0"
                                        >
                                            <div className="absolute w-full h-full bg-blue-100 rounded-2xl transform rotate-3"></div>
                                            <Image
                                                src="/logo.webp"
                                                alt="L&D"
                                                width={400}
                                                height={400}
                                                className="object-cover rounded-2xl shadow-lg relative z-10"
                                            />
                                        </motion.div>
                                    </div>
                                </CarouselItem>

                                {/* Slide 2: Mission and Vision */}
                                <CarouselItem>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center max-w-5xl mx-auto">
                                        <motion.div
                                            initial={{ opacity: 0, x: -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <div className="mb-8 sm:mb-12 p-6 sm:p-8 bg-blue-50 rounded-2xl shadow-inner">
                                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                                                    <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2 sm:mr-3">
                                                        M
                                                    </span>
                                                    Nuestra Misión
                                                </h3>
                                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                                    Empresa constructora enfocada en proyectos de infraestructura civil, saneamiento y obras
                                                    hidráulicas, con un fuerte compromiso hacia la excelencia y el cliente.
                                                </p>
                                            </div>

                                            <div className="mt-6 sm:mt-8 mb-8 sm:mb-12 p-6 sm:p-8 bg-gray-50 rounded-2xl shadow-inner">
                                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                                                    <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2 sm:mr-3">
                                                        V
                                                    </span>
                                                    Nuestra Visión
                                                </h3>
                                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                                    Aspiramos a ser líderes en construcción y consultoría, reconocidos regional, nacional e
                                                    internacionalmente por nuestra habilidad para gestionar y ejecutar proyectos de manera
                                                    eficiente y eficaz.
                                                </p>
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, x: 30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.6 }}
                                            className="relative h-[300px] sm:h-[400px] md:h-[500px]"
                                        >
                                            <div className="absolute w-full h-full bg-blue-100 rounded-2xl transform -rotate-3"></div>
                                            <Image
                                                src="/mision.webp"
                                                alt="Vision y Mision"
                                                fill
                                                className="object-cover rounded-2xl shadow-lg relative z-10"
                                            />
                                        </motion.div>
                                    </div>
                                </CarouselItem>
                            </CarouselContent>

                            {/* Controles de carrusel adaptados para móvil y escritorio */}
                            {isMobile ? (
                                <div className="flex justify-center mt-6">
                                    <CarouselPrevious className="static transform-none mx-2 bg-white hover:bg-blue-50 border border-blue-200" />
                                    <CarouselNext className="static transform-none mx-2 bg-white hover:bg-blue-50 border border-blue-200" />
                                </div>
                            ) : (
                                <>
                                    <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full -ml-4 bg-white hover:bg-blue-50 border border-blue-200 shadow-md z-10" />
                                    <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full mr-4 bg-white hover:bg-blue-50 border border-blue-200 shadow-md z-10" />
                                </>
                            )}
                        </Carousel>
                    </div>
                </div>
            </section>

            {/* Contact Section - Main Container */}
            <section id="contacto" className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10 sm:mb-16"
                    >
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                            CONTÁCTANOS
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Listo para tu Proyecto?</h2>
                        <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-blue-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
                        <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            Estamos listos para hacer realidad tu proyecto. Contáctanos hoy mismo.
                        </p>
                    </motion.div>

                    {/* Contact Cards Grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20"
                    >
                        {/* Phone Card */}
                        <motion.div
                            variants={fadeInUp}
                            className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border border-gray-100"
                        >
                            <div className="bg-blue-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto transform transition-transform duration-500 hover:rotate-12">
                                <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-center mb-2 sm:mb-3">Llámanos</h3>
                            <p className="text-sm sm:text-base text-gray-600 text-center mb-3 sm:mb-4">
                                Estamos disponibles de lunes a viernes de 8am a 6pm y sábados de 8am a 1pm
                            </p>
                            <a
                                href="tel:+51123456789"
                                className="block text-center text-blue-600 font-medium hover:text-blue-800 py-2 px-4 rounded-lg hover:bg-blue-50 transition-all duration-300"
                            >
                                +51 123 456 789
                            </a>
                        </motion.div>

                        {/* Email Card */}
                        <motion.div
                            variants={fadeInUp}
                            className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border border-gray-100"
                        >
                            <div className="bg-blue-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto transform transition-transform duration-500 hover:rotate-12">
                                <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-center mb-2 sm:mb-3">Escríbenos</h3>
                            <p className="text-sm sm:text-base text-gray-600 text-center mb-3 sm:mb-4">
                                Resolveremos tus dudas en menos de 24 horas
                            </p>
                            <a
                                href="mailto:contacto@ldingenieros.com"
                                className="block text-center text-blue-600 font-medium hover:text-blue-800 py-2 px-4 rounded-lg hover:bg-blue-50 transition-all duration-300"
                            >
                                contacto@ldingenieros.com
                            </a>
                        </motion.div>

                        {/* Address Card */}
                        <motion.div
                            variants={fadeInUp}
                            className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border border-gray-100"
                        >
                            <div className="bg-blue-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto transform transition-transform duration-500 hover:rotate-12">
                                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-center mb-2 sm:mb-3">Visítanos</h3>
                            <p className="text-sm sm:text-base text-gray-600 text-center mb-3 sm:mb-4">
                                Agenda una reunión en nuestras oficinas
                            </p>
                            <p className="text-center text-gray-700 py-2 px-4 rounded-lg bg-gray-50">
                                Jr. Bolognesi 1461 Partido Alto - Oficina Tarapoto
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Blue Divider Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-8 sm:py-12 px-6 sm:px-8 rounded-2xl mb-12 sm:mb-20 shadow-xl"
                    >
                        <div className="max-w-3xl mx-auto text-center">
                            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">¿Listo para empezar tu proyecto?</h3>
                            <p className="text-blue-100 mb-6 sm:mb-8 text-sm sm:text-base">
                                Nuestro equipo de expertos está listo para asesorarte y brindarte la mejor solución para tus necesidades
                                de construcción e ingeniería.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="tel:+51123456789"
                                    className="bg-white text-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg"
                                >
                                    Llamar ahora
                                </a>
                                <a
                                    href="mailto:contacto@ldingenieros.com"
                                    className="border-2 border-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
                                >
                                    Enviar email
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Map Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="rounded-2xl overflow-hidden shadow-lg border-4 border-white"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!4v1744471700693!6m8!1m7!1s4wPfmhGUmpclyCAnbdL_RA!2m2!1d-6.47518832001289!2d-76.36702176627352!3f31.67588081512683!4f-0.11648555391580828!5f0.7820865974627469"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            title="Ubicación de L&D Ingenieros"
                            className="sm:h-[450px]"
                        ></iframe>
                    </motion.div>
                </div>
            </section>

            {/* Footer Mejorado */}
            <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
                        {/* Logo y descripción */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center">
                                <Image
                                    src="/GRUPO-LD-INGENIEROS-1.png"
                                    width={50}
                                    height={50}
                                    alt="Logo L&D Ingenieros"
                                    className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                                />
                                <span className="ml-2 sm:ml-3 text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
                                    L&D INGENIEROS
                                </span>
                            </div>
                            <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                                Construyendo el futuro con excelencia e innovación. Más de 18 años de experiencia en ingeniería y
                                construcción de calidad.
                            </p>
                            <div className="mt-6 flex space-x-4">
                                <a
                                    href="https://www.facebook.com/p/LD-Ingenieros-61557391505552/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visitar Facebook de L&D Ingenieros"
                                    className="text-gray-400 hover:text-blue-400 bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-all duration-300"
                                >
                                    <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                                </a>
                                <a
                                    href="https://www.instagram.com/ldingenieros/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visitar Instagram de L&D Ingenieros"
                                    className="text-gray-400 hover:text-rose-400 bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-all duration-300"
                                >
                                    <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/ldingenieros/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visitar LinkedIn de L&D Ingenieros"
                                    className="text-gray-400 hover:text-sky-400 bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-all duration-300"
                                >
                                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                                </a>
                            </div>
                        </div>

                        {/* Enlaces rápidos */}
                        <div>
                            <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 pb-2 border-b border-gray-700">
                                Enlaces Rápidos
                            </h3>
                            <ul className="space-y-2 sm:space-y-3">
                                {[
                                    { name: "Inicio", url: "#inicio" },
                                    { name: "Servicios", url: "#servicios" },
                                    { name: "Proyectos", url: "#proyectos" },
                                    { name: "Nosotros", url: "#nosotros" },
                                    { name: "Contacto", url: "#contacto" },
                                ].map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.url}
                                            className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group text-sm sm:text-base"
                                        >
                                            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Servicios principales */}
                        <div>
                            <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 pb-2 border-b border-gray-700">
                                Servicios Principales
                            </h3>
                            <ul className="space-y-2 sm:space-y-3">
                                {[
                                    { name: "Diseño y Construcción", url: "#servicios" },
                                    { name: "Ingenieria Estructural", url: "#servicios" },
                                    { name: "Consultoría y Supervision de Obras", url: "#servicios" },
                                    { name: "Gestión de Proyectos", url: "#servicios" },
                                    { name: "Estudios de Factibilidad", url: "#servicios" },
                                    { name: "Planificación Urbana", url: "#servicios" },
                                ].map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.url}
                                            className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group text-sm sm:text-base"
                                        >
                                            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contacto */}
                        <div>
                            <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 pb-2 border-b border-gray-700">
                                Contacto
                            </h3>
                            <ul className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
                                <li className="flex items-center group">
                                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2 sm:mr-3 group-hover:animate-pulse" />
                                    <a href="tel:+51942125789" className="hover:text-blue-400 transition-colors duration-300">
                                        +51 942 125 789
                                    </a>
                                </li>
                                <li className="flex items-center group">
                                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2 sm:mr-3 group-hover:animate-pulse" />
                                    <a
                                        href="mailto:contacto@ldingenieros.com"
                                        className="hover:text-blue-400 transition-colors duration-300"
                                    >
                                        contacto@ldingenieros.com
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2 sm:mr-3" />
                                    <span>Lun-Vie: 8:00 AM - 6:00 PM</span>
                                </li>
                                <li className="flex items-center">
                                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2 sm:mr-3" />
                                    <span>Sábados: 8:00 AM - 1:00 PM</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Derechos de autor */}
                    <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 text-center">
                        <p className="text-gray-400 text-xs sm:text-sm">
                            &copy; {new Date().getFullYear()} L&D INGENIEROS. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Modal para visualizar imágenes del proyecto */}
            {selectedProject && (
                <ProjectGalleryModal isOpen={!!selectedProject} onClose={closeProjectModal} project={selectedProject} />
            )}
        </main>
    )
}
