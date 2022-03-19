import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './MenuCard.css'
import store from '../../redux/store/store';
import { addBeer, deleteBeer } from '../../redux/favourite/actions';
import { NavLink } from 'react-router-dom';

function MenuCard(props) {
    const {
        description,
        name,
        id,
    } = props
    const takeIcon = () => {
        const icons = store.getState().favourite
        if (icons) {
            for (let i = 0; i < icons.length; i++) {
                if (icons[i].id === id) {
                    return 'pi pi-star-fill'
                }
            }
        }

        return 'pi pi-star'
    }
    const [icon, setIcon] = useState(takeIcon());
    const handleIcon = (e) => {
        e.preventDefault()
        if (icon === 'pi pi-star') {
            setIcon('pi pi-star-fill')
            store.dispatch(addBeer({
                id: id,
                name: name,
                brewers_tips: description,
            }))
        } else {
            setIcon('pi pi-star')
            store.dispatch(deleteBeer(id))
        }
    }

    const header = (
        <span id='menucard__icon'>
            <Button icon={icon} onClick={(e) => handleIcon(e)} />
        </span>
    );
    return (
        <NavLink to={`/item/${id}`} className='menucard'>
            <Card title={name} header={header} className='menucard__content' >
                <p className="m-0" style={{ lineHeight: '1.5' }}>{description}</p>
            </Card>
        </NavLink>
    )
}

export default MenuCard