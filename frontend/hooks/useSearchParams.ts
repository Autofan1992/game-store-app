import { useCallback } from 'react'

import { useSearchParams as useNextSearchParams } from 'next/dist/client/components/navigation'
import { usePathname, useRouter } from 'next/navigation'

export enum ESearchParam {
    Search = 'search',
    AgeLimit = 'ageLimit',
    Genres = 'genres',
    GamePlatforms = 'gamePlatforms',
    SortType = 'sortType',
    SortCriteria = 'sortCriteria',
}

type TSearchParams = Partial<Record<ESearchParam, string>>

const useSearchParams = (): [TSearchParams, (value: TSearchParams) => void] => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useNextSearchParams()
    const paramsObj: TSearchParams = {}

    searchParams.forEach((value, key) => {
        paramsObj[key as ESearchParam] = value
    })

    const setParams = useCallback(
        (value: TSearchParams) => {
            const params = new URLSearchParams(searchParams.toString())

            for (const param in value) {
                if (value[param as ESearchParam]) {
                    params.set(param, value[param as ESearchParam] as string)
                } else {
                    params.delete(param)
                }
            }

            const queryString = params.toString()
            router.push(pathname + '?' + queryString)
        },
        [pathname, router, searchParams]
    )

    return [paramsObj, setParams]
}

export default useSearchParams