import React from "react"

export interface BmiInfo {
    weight: string
    height: string
    id: string
    date: string
    bmi: string
    deleteCard: (id: string) => void
}


export const Info = ({weight, height, id, date, bmi, deleteCard}: BmiInfo) => {
    return <div className="col m6 s12">
        <div className="card">
            <div className="card-content">
                <span className="card-title">
                    BMI: {bmi}
                </span>
                <div className="card-data">
                    <span data-test="weight">Weight: {weight} kg</span>
                    <span data-test="height">Height: {height} cm</span>
                    <span data-test="date">Date: {date}</span>
                </div>

                <button className="delete-btn" onClick={() => deleteCard(id)}>
                    X
                </button>
            </div>
        </div>
    </div>
}

export default Info
