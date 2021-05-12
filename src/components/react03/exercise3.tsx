import React from "react";

export const Resume = () => {
    const imgPath = 'https://img0.baidu.com/it/u=1261575020,776150866&fm=26&fmt=auto&gp=0.jpg'
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div className='header'>
                <img src={imgPath} alt='header' style={{width:'100px'}}/>
                <p>ASABENEH YETAYEH</p>
            </div>

        </div>
)
}
