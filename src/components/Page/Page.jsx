import { Button } from 'primereact/button';
import { NavLink } from 'react-router-dom';
import './Page.css'

function Page(props) {
    const { id, page } = props

    return (
        <NavLink to={`/page/${id}`} className='pageButton' >
            {page === id.toString() ? <Button label={id+1} className='p-button-raised' /> :
            <Button label={id+1} className='p-button-outlined' />}
        </NavLink>
    )
}

export default Page