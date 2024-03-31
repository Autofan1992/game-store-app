import { LOGIN_PAGE_PATH, SIGNUP_PAGE_PATH } from '../constants'

export const getShouldHideMainLayout = (path: string) => {
    const authPages = [LOGIN_PAGE_PATH, SIGNUP_PAGE_PATH]

    return authPages.some((value) => path.includes(value))
}
