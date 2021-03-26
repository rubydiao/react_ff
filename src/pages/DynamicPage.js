import { useParams } from 'react-router-dom'
const DynamicPage = () => {
    const { name, password } = useParams()
    return (
        <div>
            <h1>Dynamic :{name}</h1>
            <h1>Dynamic2 :{password}</h1>
        </div>
    )
}
export default DynamicPage
