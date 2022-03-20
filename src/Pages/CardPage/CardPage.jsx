import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { addBeer, deleteBeer } from "../../redux/favourite/actions";
import store from "../../redux/store/store";
import './CardPage.css'
import preloader from '../../assets/preloader.gif'

function CardPage() {

    const { itemId } = useParams();
    const [beer, setBeer] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://api.punkapi.com/v2/beers/${itemId}`)
            .then((response) => response.json())
            .then((data) => setBeer(data[0]))
            .then(setLoading(false))
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    }, [itemId])

    const checkFav = () => {
        const icons = store.getState().favourite
        if (icons) {
            for (let i = 0; i < icons.length; i++) {
                if (icons[i].id.toString() === itemId) {
                    return true
                }
            }
        }

        return false
    }

    const [isFav, setIsFav] = useState(checkFav())

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
    return !loading ? (
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
    ) : <img src={preloader} alt="loading..." className='cardPage__preloader' />
}

export default CardPage