import React from "react";

interface ImageProp {
    url: string
    alt: string
}

const Image = (props: ImageProp) => (
    <li>
        <img src={props.url} alt={props.alt}/>
    </li>
);

export default Image;
