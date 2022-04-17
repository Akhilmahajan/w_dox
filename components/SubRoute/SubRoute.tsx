import { useRouter } from 'next/router'
import { ReactChild, useEffect, useState } from 'react'

interface IProps {
  separator: string
  routes: Array<{ component: ReactChild; slug: string; name?: string }>
}

export default function SubRoute({ routes, separator }: IProps) {
  const [currentPath, setCurrentPath] = useState<string>()
  const router = useRouter()
  const findSlugMatchingCmp = () =>
    routes.find((route) => {
      return route.slug === currentPath
    })

  useEffect(() => {
    const path = router.asPath.split(separator).at(-1)
    setCurrentPath(path)
  }, [separator, router.asPath])

  const selectedComponent = findSlugMatchingCmp()?.component

  return { selectedComponent }
}

SubRoute.defaultProps = {
  separator: '#',
}
