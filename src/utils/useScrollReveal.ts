import { useEffect } from 'react'

const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1 }
    )

    const targets = document.querySelectorAll('.reveal-on-scroll')
    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

export default useScrollReveal
