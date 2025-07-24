"use client"

import * as React from "react"
import { useCallback, useEffect, useRef, useState } from "react"

export type CarouselApi = {
  canScrollPrev: () => boolean
  canScrollNext: () => boolean
  scrollPrev: () => void
  scrollNext: () => void
  scrollTo: (index: number) => void
  selectedScrollSnap: () => number
  on: (event: string, callback: () => void) => void
  off: (event: string, callback: () => void) => void
}

type CarouselProps = {
  opts?: {
    dragFree?: boolean
    containScroll?: boolean
    align?: "start" | "center" | "end"
    breakpoints?: Record<string, unknown>
  }
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
  children: React.ReactNode
}

type CarouselContextProps = {
  carouselRef: React.RefObject<HTMLDivElement | null>
  api: CarouselApi | null
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  orientation: "horizontal" | "vertical"
  opts?: CarouselProps['opts']
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const carouselRef = useRef<HTMLDivElement>(null)
    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    // Fonction pour calculer la largeur d'un slide
    const getSlideWidth = useCallback(() => {
      if (!carouselRef.current) return 0
      const container = carouselRef.current
      const slideElement = container.children[0]?.children[0] as HTMLElement
      return slideElement ? slideElement.offsetWidth : 0
    }, [])

    // Fonction pour calculer le nombre total de slides
    const getTotalSlides = useCallback(() => {
      if (!carouselRef.current) return 0
      const container = carouselRef.current
      return container.children[0]?.children.length || 0
    }, [])

    // Fonction pour mettre à jour l'état de navigation
    const updateNavigationState = useCallback(() => {
      const totalSlides = getTotalSlides()
      setCanScrollPrev(currentIndex > 0)
      setCanScrollNext(currentIndex < totalSlides - 1)
    }, [currentIndex, getTotalSlides])

    // Fonction pour faire défiler vers un index spécifique
    const scrollTo = useCallback((index: number) => {
      if (!carouselRef.current) return
      
      const container = carouselRef.current
      const slideWidth = getSlideWidth()
      const totalSlides = getTotalSlides()
      
      if (slideWidth === 0 || index < 0 || index >= totalSlides) return
      
      container.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
      })
      
      setCurrentIndex(index)
    }, [getSlideWidth, getTotalSlides])

    // Fonction pour faire défiler vers le précédent
    const scrollPrev = useCallback(() => {
      if (canScrollPrev) {
        scrollTo(currentIndex - 1)
      }
    }, [canScrollPrev, currentIndex, scrollTo])

    // Fonction pour faire défiler vers le suivant
    const scrollNext = useCallback(() => {
      if (canScrollNext) {
        scrollTo(currentIndex + 1)
      }
    }, [canScrollNext, currentIndex, scrollTo])

    // Gestion du scroll pour détecter l'index actuel
    useEffect(() => {
      const container = carouselRef.current
      if (!container) return

      let timeoutId: number
      
      const handleScroll = () => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          const slideWidth = getSlideWidth()
          if (slideWidth === 0) return
          
          const scrollLeft = container.scrollLeft
          const newIndex = Math.round(scrollLeft / slideWidth)
          
          if (newIndex !== currentIndex && newIndex >= 0) {
            setCurrentIndex(newIndex)
          }
        }, 50)
      }

      container.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
        container.removeEventListener('scroll', handleScroll)
        clearTimeout(timeoutId)
      }
    }, [currentIndex, getSlideWidth])

    // Mise à jour de l'état de navigation
    useEffect(() => {
      updateNavigationState()
    }, [updateNavigationState])

    // Gestion du redimensionnement
    useEffect(() => {
      const handleResize = () => {
        updateNavigationState()
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [updateNavigationState])

    // API du carousel
    const api: CarouselApi = {
      canScrollPrev: () => canScrollPrev,
      canScrollNext: () => canScrollNext,
      scrollPrev,
      scrollNext,
      scrollTo,
      selectedScrollSnap: () => currentIndex,
      on: () => {}, // Placeholder pour compatibilité
      off: () => {} // Placeholder pour compatibilité
    }

    // Mise à jour de l'API externe
    useEffect(() => {
      if (setApi) {
        setApi(api)
      }
    }, [setApi, api])

    // Gestion des touches clavier
    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext],
    )

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          opts,
          orientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={`relative ${className || ''}`}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  },
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={`flex ${
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col"
        } ${className || ''}`}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={`min-w-0 shrink-0 grow-0 basis-full ${
        orientation === "horizontal" ? "pl-4" : "pt-4"
      } ${className || ''}`}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <button
      ref={ref}
      className={`absolute h-8 w-8 rounded-full inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 ${
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90"
      } ${className || ''}`}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      <span className="sr-only">Previous slide</span>
    </button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <button
      ref={ref}
      className={`absolute h-8 w-8 rounded-full inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 ${
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90"
      } ${className || ''}`}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
      <span className="sr-only">Next slide</span>
    </button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} 