import React from "react";
import {useContext, useEffect} from "react";
import {PhotoContext} from "../context/PhotoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";

interface containerProps {
    searchTerm: string
}

const Container = ({searchTerm}: containerProps) => {
    const {images, loading, runSearch} = useContext(PhotoContext)
    useEffect(() => {
        runSearch(searchTerm)
    }, [searchTerm])
    return (
        <div className="photo-container">
            {loading ? <Loader/> : <Gallery data={images}/>}
        </div>
    )
}

export default Container
