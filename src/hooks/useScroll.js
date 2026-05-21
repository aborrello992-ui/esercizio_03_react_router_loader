import { useEffect, useRef, useState } from 'react'

function useScroll() {
  const [scrollY, setScrollY] = useState(0)
  const ref = useRef()

  function onScroll() {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return { ref, scrollY }
}

export default useScroll
