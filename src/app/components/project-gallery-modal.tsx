"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { MapPin } from "lucide-react"

interface ProjectImage {
    src: string
    alt: string
}

interface ProjectGalleryModalProps {
    isOpen: boolean
    onClose: () => void
    project: {
        title: string
        location: string
        description: string
        images: ProjectImage[]
    }
}

export function ProjectGalleryModal({ isOpen, onClose, project }: ProjectGalleryModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-3xl w-[95vw] max-h-[90vh] overflow-y-auto p-0">
                <DialogHeader className="p-6 pb-0">
                    <DialogTitle className="text-xl sm:text-2xl font-bold">{project.title}</DialogTitle>
                    <div className="flex items-center mt-2 text-blue-600">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{project.location}</span>
                    </div>
                </DialogHeader>

                <div className="p-6">
                    <div className="relative w-full h-[250px] sm:h-[400px] mb-6 rounded-lg overflow-hidden">
                        <Carousel className="w-full">
                            <CarouselContent>
                                {project.images.map((image, index) => (
                                    <CarouselItem key={index}>
                                        <div className="relative w-full h-[250px] sm:h-[400px]">
                                            <Image
                                                src={image.src || "/placeholder.svg"}
                                                alt={image.alt}
                                                fill
                                                className="object-cover rounded-lg"
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-blue-200 shadow-md z-10" />
                            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-blue-200 shadow-md z-10" />
                        </Carousel>
                    </div>

                    <div className="flex overflow-x-auto gap-2 pb-2 mb-4">
                        {project.images.map((image, index) => (
                            <div
                                key={index}
                                className={`relative w-20 h-20 flex-shrink-0 cursor-pointer rounded-md overflow-hidden border-2 ${currentImageIndex === index ? "border-blue-500" : "border-transparent"
                                    }`}
                                onClick={() => setCurrentImageIndex(index)}
                            >
                                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                            </div>
                        ))}
                    </div>

                    <div className="text-gray-700">
                        <h3 className="text-lg font-semibold mb-2">Descripción del Proyecto</h3>
                        <p className="text-sm sm:text-base">{project.description}</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
