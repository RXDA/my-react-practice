import {BmiInfo} from "../components/Info";

export const getData = (key: string): BmiInfo[] | null => {
    if (!localStorage)
        return null

    try {
        return JSON.parse(localStorage.getItem(key)!)
    } catch (err) {
        console.error(`Error getting item ${key} from localStorage`, err)
    }
    return null
}


export const storeData = (key: string, item: any) => {
    if (!localStorage)
        return

    try {
        localStorage.setItem(key, JSON.stringify(item))
    } catch (err) {
        console.error(`Error storing item ${key} to localStorage`, err)
    }
}
