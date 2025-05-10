import { PopBrowse } from '../components/PopBrowse/PopBrowse'
import { useParams } from 'react-router-dom'
import { cardList } from '../data'

export const PopBrowsePage = () => {
    const { id } = useParams()
    const card = cardList.find(card => card.id === Number(id))

    return <PopBrowse card={card}/>
}