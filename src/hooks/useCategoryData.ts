import axios from 'axios'
import { useEffect, useState } from 'react'

interface IGetCategoryDataRes<CategoryItem> {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: CategoryItem[]
}

export function useCategoryData<CategoryItem>(url: string, page: number) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState<CategoryItem[]>([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)

    axios<IGetCategoryDataRes<CategoryItem>>({
      method: 'GET',
      url,
      params: { page },
    })
      .then(({ data }) => {
        setData((prev) => [...prev, ...data.results])
        setHasMore(page !== data.info.pages)
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [page, url])

  return {
    data,
    loading,
    error,
    hasMore,
  }
}
