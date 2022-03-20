import React, { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const items = [
        { label: 'Home', icon: 'pi pi-fw pi-home', id: 0 },
        { label: 'Favourite', icon: 'pi pi-star', id: 1 },
    ];
    const navigate = useNavigate()
    const setActiveIndex = (item) => {
        setIndex(item.id);
        localStorage.setItem('activePage', JSON.stringify(item))
        if (item.label === 'Favourite') {
            navigate('/favourite')
        } else {
            navigate('/')
        }
    }
    const firstIndex = () => {
        return localStorage.getItem('activePage') ? JSON.parse(localStorage.getItem('activePage')).id : 0
    }
    const [index, setIndex] = useState(firstIndex())

    return (
        <div>
            <div className="header">
                <TabMenu model={items} activeIndex={index} onTabChange={(e) => setActiveIndex(e.value)} />
            </div>
        </div>
    );
}

export default Header