import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const observeElements = () => {
    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach((el) => observer.observe(el))
  }

  onMounted(() => {
    observeElements()
  })

  onUnmounted(() => {
    observer.disconnect()
  })

  return { observeElements }
}

export function useSmoothScroll() {
  const scrollToElement = (elementId: string, offset = 0) => {
    const element = document.getElementById(elementId)
    if (element) {
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return { scrollToElement, scrollToTop }
}
