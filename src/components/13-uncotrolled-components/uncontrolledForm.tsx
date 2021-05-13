import React, {ChangeEvent, FormEvent, useRef} from 'react'


export const SomeForm = () => {
    const firstName = useRef<HTMLInputElement>(null)
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log(firstName.current?.value)
    }

    return (
        <div className='App'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First Name: </label>
                <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    placeholder='First Name'
                    ref={firstName}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export const SomeMultipleInputForm = () => {
    const firstName = useRef<HTMLInputElement>(null)
    const lastName = useRef<HTMLInputElement>(null)
    const country = useRef<HTMLInputElement>(null)
    const title = useRef<HTMLInputElement>(null)

    const handleChange = (e: ChangeEvent) => {
        e.preventDefault()
    }
    const handleSubmit = (e: FormEvent) =>{
        e.preventDefault()
        console.log(firstName.current?.value)
        console.log(lastName.current?.value)
        console.log(title.current?.value)
        console.log(country.current?.value)
    }
    return (
        <div className='App'>
            <h3>Add Student</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type='text'
                        name='firstName'
                        placeholder='First Name'
                        ref={firstName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        name='lastName'
                        placeholder='Last Name'
                        ref={lastName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        name='country'
                        placeholder='Country'
                        ref={country}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        name='title'
                        placeholder='Title'
                        ref={title}
                        onChange={handleChange}
                    />
                </div>

                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    )
}
