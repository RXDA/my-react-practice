import React, {ChangeEvent, useState} from "react"
import {BmiInfo} from "./Info";



const initialValues = {
    weight: '',
    height: '',
    date: ''
} as unknown as BmiInfo

interface BmiFormProps {
    change: (initialValues: BmiInfo) => void
}

const BmiForm = ({change}: BmiFormProps) => {
    const [state, setState] = useState(initialValues)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let {value, name} = e.target
        if (parseFloat(value) > 999) {
            value = "999"
        }
        const date = new Date().toLocaleDateString().split(',')[0]
        setState({
            ...state,
            [name]: value,
            date
        })
    }

    return (
        <>
            <div className="row">
                <div className="col m6 s12">
                    <label htmlFor="weight">Weight (in kg)</label>
                    <input
                        id="weight"
                        name="weight"
                        type="number"
                        min="1"
                        max="999"
                        placeholder="50"
                        value={state.weight}
                        onChange={handleChange}
                    />
                </div>

                <div className="col m6 s12">
                    <label htmlFor="height">Height (in cm)</label>
                    <input
                        id="height"
                        name="height"
                        type="number"
                        min="1"
                        max="999"
                        placeholder="176"
                        value={state.height}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="center">
                <button
                    id="bmi-btn"
                    className="calculate-btn"
                    type="button"
                    disabled={state.weight === '' || state.height === ''}
                    onClick={() => {
                        change(state)
                        setState(initialValues)
                    }}
                >
                    Calculate BMI
                </button>
            </div>
        </>
    );
}

export default BmiForm
