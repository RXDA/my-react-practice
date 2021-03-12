import React, {useEffect} from "react";
import {useState} from "react";

interface listProp {
    title: string
}


const List = (props: listProp) => {
    console.log('list render')
    return <div>
        {props.title}
    </div>
}

export const App = () => {
    const [data, setData] = useState<listProp>()
    useEffect(() => {
        const i = setInterval(() => {
            const now = (new Date()).getTime().toString()
            setData(
                {title: now},
            )
        }, 3000)
        return () => clearInterval(i)
    }, [data])

    return (
        <div>
            {
                <List title={data?.title!}/>
            }
        </div>
    )
}
