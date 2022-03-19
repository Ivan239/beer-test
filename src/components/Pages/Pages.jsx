import './Pages.css'
import Page from '../Page/Page';

function Pages(props) {

    const { amount, page } = props
    let pages = [];

    if (!isNaN(amount) && amount > 0) {
        for (var i = 0; i <= amount; i++) {
            pages.push(i)
        }
    }

    return (
        <div className='pages'>
            {
                pages.map(e => <Page key={e} id={e} page={page}/>)
            }
        </div>
    )
}

export default Pages