import { Button } from 'react-bootstrap'
import { useState } from 'react'

const PointPage = () => {
    const [data, setData] = useState({
        p: 1,
    })

    return (
        <div align="center">
            {data.p > 20 ? (
                <h1 className="text-danger">{data.p}</h1>
            ) : data.p < 0 ? (
                <h1 className="text-danger">{data.p}</h1>
            ) : (
                <h1>{data.p}</h1>
            )}{' '}
            <Button
                variant="success"
                onClick={(e) => {
                    setData({ ...data, p: data.p + 1 })
                }}
            >
                add
            </Button>
            <Button
                variant="danger"
                onClick={(e) => {
                    setData({ ...data, p: data.p - 1 })
                }}
            >
                del
            </Button>
        </div>
    )
}
export default PointPage
