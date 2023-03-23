import {useParams} from 'react-router-dom'

export const OtherComponent = () => {
    const {test, id, mando} = useParams()
    console.log(mando)
    return <>ANDERE</>
}