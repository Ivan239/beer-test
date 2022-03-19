import Cards from "../../components/Cards/Cards"
import store from "../../redux/store/store"

function Favourite() {
    return (
        <div>
            <Cards beers={store.getState().favourite} />
        </div>
    )
}

export default Favourite