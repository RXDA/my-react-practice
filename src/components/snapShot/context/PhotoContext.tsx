import React, {createContext, ReactElement, ReactNode, useState} from "react";
import axios from "axios";
import {apiKey} from "../api/config";

interface photoContext {
    images: Photo[]
    loading: boolean
    runSearch: (query: string) => void
}


export interface PhotoResp {
    photos: Photos
    stat: string
}

export interface Photos {
    page: number
    pages: number
    perpage: number
    total: string
    photo: Photo[]
}

export interface Photo {
    id: string
    owner: string
    secret: string
    server: string
    farm: number
    title: string
    ispublic: number
    isfriend: number
    isfamily: number
}

export const PhotoContext = createContext<photoContext>({
    images: [], loading: false, runSearch(query: string): void {
    }
});

interface photoContextProviderProps {
    children: ReactNode
}

const PhotoContextProvider = ({children}: photoContextProviderProps) => {
    const [images, setImages] = useState<Photo[]>([]);
    const [loading, setLoading] = useState(true);
    const runSearch = (query: string) => {
        axios
            .get<PhotoResp>(
                `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
            )
            .then(response => {
                setImages(response.data.photos.photo);
                setLoading(false);
            })
            .catch(error => {
                console.log(
                    "Encountered an error with fetching and parsing data",
                    error
                )
            })
    }
    return (
        <PhotoContext.Provider value={{images, loading, runSearch}}>
            {children}
        </PhotoContext.Provider>
    )
}

export default PhotoContextProvider

