import { useParams } from 'react-router-dom'

export default function SpotDetailsPage({spot}){
    const { id } = useParams();

    console.log(id)
    console.log(spot)
    return <div>
        <p>
            placeholder
        </p>

</div>
}