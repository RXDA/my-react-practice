/** @jsx jsx */

import React, {Fragment, useEffect, useState} from 'react'
import {getData, storeData} from "./helper/localStorage";
import BmiForm from "./components/BmiForm"
import Bar from "./components/Bar"
import Info, {BmiInfo} from "./components/Info";
import {v4 as uuidv4} from 'uuid';
import {jsx, Global, css} from '@emotion/react';
import {AppCss, IndexCss} from "./css";
import 'materialize-css/dist/css/materialize.min.css';
// import './index.css'
// import './App.css'

interface AppData {
    date: string[]
    bmi: string[]
}

export const App = () => {
    const initialState = () => getData('data') || []
    const [state, setState] = useState(initialState)
    const [data, setData] = useState<AppData>({bmi: [], date: []})

    useEffect(() => {
        storeData('data', state)
        const date = state.map(obj => obj.date)
        const bmi = state.map(obj => obj.bmi)
        const newData = {date, bmi}
        setData(newData)
    }, [state])

    const handleChange = (val: BmiInfo) => {
        let heightInM = parseFloat(val.height) / 100;
        val.bmi = (parseFloat(val.weight) / (heightInM * heightInM)).toFixed(2);
        val.id = uuidv4();
        let newVal = [...state, val];
        let len = newVal.length;
        if (len > 7) newVal = newVal.slice(1, len);
        setState(newVal);
    }

    const handleDelete = (id: string) => {
        storeData('lastState', state);
        let newState = state.filter(i => {
            return i.id !== id;
        });
        setState(newState);
    }

    const handleUndo = () => {
        setState(getData('lastState')!);
    };

    return (
        <Fragment>
            <Global styles={css`
              ${IndexCss},
              ${AppCss}
            `}/>
            <div className='container'>
                <div className='row center'>
                    <h1 className='white-text'> BMI Tracker </h1>
                </div>
                <div className='row'>
                    <div className='col m12 s12'>
                        <BmiForm change={handleChange}/>
                        <Bar labelData={data.date} bmiData={data.bmi}/>
                        <div>
                            <div className='row center'>
                                <h4 className='white-text'>7 Day Data</h4>
                            </div>
                            <div className='data-container row'>
                                {state.length > 0 ? (
                                    <Fragment>
                                        {state.map(info => (
                                            <Info
                                                key={info.id}
                                                id={info.id}
                                                weight={info.weight}
                                                height={info.height}
                                                date={info.date}
                                                bmi={info.bmi}
                                                deleteCard={handleDelete}
                                            />
                                        ))}
                                    </Fragment>
                                ) : (
                                    <div className='center white-text'>No log found</div>
                                )}
                            </div>
                        </div>
                        {getData('lastState') !== null ? (
                            <div className='center'>
                                <button className='calculate-btn' onClick={handleUndo}>
                                    Undo
                                </button>
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

