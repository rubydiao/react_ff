import { useParams } from 'react-router-dom'
const DynamicPage = () => {
    const { name } = useParams()
    return (
        <div>
            <h1>Dynamic :{name}</h1>
        </div>
    )
}
export default DynamicPage
