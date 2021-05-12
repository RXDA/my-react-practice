import React from "react";

const SubscribePage = () => {
    return (
        <div>
            <div style={{
                borderRadius: '.5rem',
                backgroundColor: '#C2E6F4',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <h2 style={{
                    textAlign: 'center',
                    marginBottom: '.3rem',
                    fontFamily: `'Oswald', sans-serif`
                }}>SUBSCRIBE</h2>
                <p style={{textAlign: 'center', marginBottom: '.3rem', marginTop: '.5rem'}}>Sign up with your email
                    address to receive news and update</p>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '.5rem', marginBottom: '.8rem'}}>
                    <input style={{
                        borderRadius: '.3rem',
                        border: 'none',
                        outline: 'none',
                        height: '1.4rem',
                        marginRight: '.5rem'
                    }} placeholder='First Name'
                    />
                    <input style={{
                        borderRadius: '.3rem',
                        border: 'none',
                        outline: 'none',
                        height: '1.4rem',
                        marginRight: '.5rem'
                    }} placeholder='Last Name'
                    />
                    <input style={{borderRadius: '.3rem', border: 'none', outline: 'none', height: '1.4rem'}}
                           placeholder='Email'/>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '1.2rem'}}>
                    <button style={{
                        backgroundColor: '#F37474',
                        border: 'none',
                        width: '12rem',
                        height: '1.6rem',
                        borderRadius: '.5rem',
                    }}><p style={{color: 'white', display: 'inline', fontSize: '.6rem'}}>Subscribe</p></button>
                </div>
            </div>
        </div>
    )
}

export default SubscribePage
