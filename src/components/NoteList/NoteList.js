import { React } from 'react'
import './noteList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { toggle, deleteItem } from '../../redux/noteSlice'


function NoteList() {
    const dispatch = useDispatch()
    const items = useSelector(state => state.notes.items)

    console.log(items);



    return (
        <div className='note-list'>
            {
                items.map((item) => (


                   
                        <div key={item.id} className={item.completed ? 'card  completed  ' : 'card ' } style={{background : item.activeColor}}>
                            <div className='card-header'>
                                <h3 className={item.completed ? 'completed' : ''} >{item.header}</h3>
                            </div>
                            <div className='card-body'>
                                <p className={item.completed ? 'completed' : ''}>
                                    {item.desc}
                                </p>
                            </div>
                            <div className='card-footer'>
                                <div>{item.completed}</div>
                                <div className='card-icons'>
                                    <div className='delete-btn' onClick={() => dispatch(toggle({ id: item.id }))}>
                                        <FontAwesomeIcon icon={faCheck} className='delete-icon' />
                                    </div>
                                    <div className='delete-btn' onClick={() => dispatch(deleteItem({id: item.id}))}>
                                        <FontAwesomeIcon icon={faTrash} className='delete-icon' onClick={() => dispatch(deleteItem({id: item.id}))} />
                                    </div>
                                </div>
                            </div>
                        </div>
                


                ))
            }

        </div >
    )
}

export default NoteList