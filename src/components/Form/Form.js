import { useState } from 'react'
import './form.css'
import { useDispatch } from "react-redux";
import { addNote, deleteItem } from '../../redux/noteSlice'
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'

function Form() {
    const [header, setHeader] = useState('')
    const [desc, setDesc] = useState('')
    const activeColor = useSelector(state => state.notes.activeColor)
    const [color, setColor] = useState('linear-gradient(#16a34a, #166534)')
    const items = useSelector(state => state.notes.items)

    const dispatch = useDispatch();
    console.log(color);
    console.log(items);



    const handleSubmit = (e) => {
        e.preventDefault();
        if (header === '' || desc === '') {
            return false;
        }
        dispatch(addNote({ id: nanoid(), header, desc, completed: false, activeColor: color }))
        setHeader('')
        setDesc('')
    }

    return (

        <div className='form' >
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
            <div className='btns'>
                <div className='buttons'>
                    <button className={activeColor == "linear-gradient(#16a34a, #166534)" ? 'btn-green selected' : 'btn-green'}
                        value={'linear-gradient(#16a34a, #166534)'}
                        onClick={(e) => setColor(e.target.value)}
                    >

                        {
                            color == "linear-gradient(#16a34a, #166534)" && <FontAwesomeIcon icon={faCheck} className='check-btn' />
                        }

                    </button>


                    <button className={activeColor == "linear-gradient(#2563eb, #1e40af)" ? 'btn-blue selected' : 'btn-blue'}
                        value={'linear-gradient(#2563eb, #1e40af)'}
                        onClick={(e) => setColor(e.target.value)}
                    >
                        {
                            color == "linear-gradient(#2563eb, #1e40af)" && <FontAwesomeIcon icon={faCheck} className='check-btn'/>
                        }
                    </button>

                    <button className={activeColor == "linear-gradient(#dc2626, #991b1b)" ? 'btn-red selected' : 'btn-red'}
                        value={'linear-gradient(#dc2626, #991b1b)'}
                        onClick={(e) => setColor(e.target.value)}
                    >
                        {
                            color == "linear-gradient(#dc2626, #991b1b)" && <FontAwesomeIcon icon={faCheck} className='check-btn'/>
                        }
                    </button>

                    <button className={activeColor == "linear-gradient(#ca8a04, #854d0e)" ? 'btn-yellow selected' : 'btn-yellow'}
                        value={'linear-gradient(#ca8a04, #854d0e)'}
                        onClick={(e) => setColor(e.target.value)}
                    >
                        {
                            color == "linear-gradient(#ca8a04, #854d0e)" && <FontAwesomeIcon icon={faCheck} className='check-btn' />
                        }
                    </button>

                </div>
                <div>
                    <button className='btn-add' onClick={handleSubmit}>ADD</button>
                </div>

            </div>
            <div id='search-inp'>
                <input id='search-input' type="text" placeholder='Search' />
            </div>
            <div>
                <ul id='header-list'>


                    {
                        items.map((item) => (
                            <li key={item.id} className='list-items' style={{ background: item.activeColor }}>
                                <h4 id='list-header'>
                                    {item.header}
                                </h4>
                                <div>
                                <FontAwesomeIcon icon={faTrash} className='delete-btn' onClick={() => dispatch(deleteItem({id: item.id}))} />
                                </div>
                            </li>
                        ))
                    }




                </ul>
            </div>

        </div>
    )
}

export default Form