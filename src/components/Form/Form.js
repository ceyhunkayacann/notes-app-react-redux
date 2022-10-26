import { useState } from 'react'
import './form.css'
import { useDispatch } from "react-redux";
import { addNote } from '../../redux/noteSlice'
import { nanoid } from "@reduxjs/toolkit";

function Form() {
    const [header, setHeader] = useState('')
    const [desc, setDesc] = useState('')

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNote({id:nanoid(),header,desc}))
        setHeader('')
        setDesc('')
    }

    return (

        <form className='form' onSubmit={handleSubmit}>
            <div className='form-area'>
                <input
                    id='header-inp'
                    type="text"
                    placeholder='Header'
                    value={header}
                    onChange={(e) => setHeader(e.target.value)}
                />
                <textarea
                    id="text-area"
                    rows="8"
                    cols="44"
                    placeholder='Write Something!' 
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    />
            </div>
            <div className='form-buttons'>
                <div className='buttons'>
                    <button className='btn-green' />
                    <button className='btn-blue' />
                    <button className='btn-yellow' />
                    <button className='btn-red' />
                </div>
                <div>
                    <button id='btn-add'>ADD</button>
                </div>

            </div>
            <div id='search-inp'>
                <input id='search-input' type="text" placeholder='Search' />
            </div>
            <div>
                <ul id='header-list'>
                    <li className='list-items btn-green'>
                        <h4 id='list-header'>
                            Headers
                        </h4>
                        <div>
                            Date
                        </div>
                    </li>
                    <li className='list-items btn-red'>
                        <h4 id='list-header'>
                            Headers
                        </h4>
                        <div>
                            Date
                        </div>
                    </li>
                    <li className='list-items btn-blue'>
                        <h4 id='list-header'>
                            Headers
                        </h4>
                        <div>
                            Date
                        </div>
                    </li>
                    <li className='list-items btn-yellow'>
                        <h4 id='list-header'>
                            Headers
                        </h4>
                        <div>
                            Date
                        </div>
                    </li>

                </ul>
            </div>

        </form>
    )
}

export default Form