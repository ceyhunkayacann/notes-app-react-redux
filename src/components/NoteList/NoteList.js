import { React } from 'react'
import './noteList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'


function NoteList() {
    const items = useSelector(state => state.notes.items)
    console.log(items);

  

    return (
        <div className='note-list'>
            {
                items.map((item) => (
                    <div key={item.id} className='card btn-green'>
                        <div className='card-header'>
                            <h3>{item.header}</h3>
                        </div>
                        <div className='card-body'>
                            <p>
                                {item.desc}
                            </p>
                        </div>
                        <div className='card-footer'>
                            <div>{item.date}</div>
                            <div className='delete-btn'>
                                <FontAwesomeIcon icon={faTrash} className='delete-icon' />
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default NoteList