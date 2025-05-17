"use client"

import { CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useMobile } from "../hooks/use-mobile"


interface CarouselControlsProps {
    variant?: "default" | "outside" | "inside"
}

export function CarouselControls({ variant = "default" }: CarouselControlsProps) {
    const isMobile = useMobile()

    if (isMobile) {
        return (
            <div className="flex justify-center mt-6">
                <CarouselPrevious className="static transform-none mx-2 bg-white hover:bg-blue-50 border border-blue-200" />
                <CarouselNext className="static transform-none mx-2 bg-white hover:bg-blue-50 border border-blue-200" />
            </div>
        )
    }

    if (variant === "outside") {
        return (
            <>
                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white hover:bg-blue-50 border border-blue-200 shadow-md z-10" />
                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white hover:bg-blue-50 border border-blue-200 shadow-md z-10" />
            </>
        )
    }

    if (variant === "inside") {
        return (
            <>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-blue-200 shadow-md z-10" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-blue-200 shadow-md z-10" />
            </>
        )
    }

    return (
        <>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full -ml-4 bg-white hover:bg-blue-50 border border-blue-200 shadow-md z-10" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full mr-4 bg-white hover:bg-blue-50 border border-blue-200 shadow-md z-10" />
        </>
    )
}
