import { useEffect, useState } from 'react'

function useFetch(url, ...dependencies) {
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      const response = await fetch(url)
      const json = await response.json()

      setData(json)
    }

    getData()
  }, dependencies)

  return data
}

export default useFetch
