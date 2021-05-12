import React, {Component, CSSProperties, useState} from 'react'

export const Exercise2 = () => {
    const [p, setP] = useState<number[]>([0, 0])
    const styles: CSSProperties = {
        height: '50px',
        width: '150px',
        backgroundColor: 'skyblue',
        position: 'absolute',
        left: p[0],
        top: p[1],
        display: 'flow'
    }
    return (
        <div style={styles}
             onMouseOver={() => {
                 console.log("over")
                 const x = 100 + Math.random() * 500
                 const y = 100 + Math.random() * 500
                 setP([x, y])
             }}
        >
            <h1 style={{display: 'inline', textAlign: 'center'}}>React</h1>
        </div>
    )
}
