import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { addBeer, deleteBeer } from "../../redux/favourite/actions";
import store from "../../redux/store/store";
import './CardPage.css'
import axios from 'axios';

function CardPage() {
    const { itemId } = useParams();
    const [beer, setBeer] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`https://api.punkapi.com/v2/beers/${itemId}`)
            setBeer(result.data[0])
        }
        fetchData();
    }, [itemId])

    const checkFav = () => {
        const icons = store.getState().favourite
        console.log(icons, 'icons')
        if (icons) {
            for (let i = 0; i < icons.length; i++) {
                console.log(icons[i].id.toString(), itemId)
                if (icons[i].id.toString() === itemId) {
                    return true
                }
            }
        }

        return false
    }



    const [isFav, setIsFav] = useState(checkFav())

    useEffect(() => {
        console.log(isFav, 'in ue')
    }, [isFav])

    const toggleFav = () => {
        if (isFav === false) {
            setIsFav(true)
            store.dispatch(addBeer({
                id: beer.id,
                name: beer.name,
                brewers_tips: beer.description,
            }))
        } else {
            setIsFav(false)
            store.dispatch(deleteBeer(beer.id))
        }
    }

    return (
        <div className="cardPage">
            <img src={beer.image_url} alt={beer.name} className="cardPage__image" />
            <div className="cardPage__content">
                <h1 className="cardPage__name">{beer.name}</h1>
                <h2 className="cardPage__tagline">{beer.tagline}</h2>
                <p className="cardPage__description">{beer.description}</p>
                <div className="cardPage__favourite" onClick={toggleFav}>
                    <h4>Favourite</h4>
                    {isFav ? <i className={`pi pi-star-fill cardPage__star`} /> :
                        <i className={`pi pi-star cardPage__star`} />}
                </div>
            </div>
        </div>
    )
}

export default CardPage