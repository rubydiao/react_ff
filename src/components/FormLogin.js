import { useState, useEffect } from 'react'
import { Alert } from 'react-bootstrap'
const FormLogin = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
    })
    const [isShow, setShow] = useState(true)
    useEffect(() => {
        console.log('Mount Component')
    }, [])
    useEffect(() => {
        console.log('use effect 01')
    })
    useEffect(() => {
        console.log('use effect : Username Change')
    }, [data.username])
    return (
        <div>
            <label htmlFor="">Username : </label>
            <input
                id="username"
                type="text"
                onChange={(e) => {
                    setData({ ...data, username: e.target.value })
                }}
            />
            <br />
            <label htmlFor="">Password : </label>
            <input
                id="password"
                type="password"
                onChange={(e) => {
                    setData({ ...data, password: e.target.value })
                }}
            />
            <hr />
            <button
                onClick={() => {
                    setShow(!isShow)
                }}
            >
                click me
            </button>
            : {isShow.toString()}
            <br />
            {isShow && (
                <div>
                    <b>Username : {data.username}</b>
                </div>
            )}
            <br />
            {isShow && (
                <div>
                    <b>Password : {data.password}</b>
                </div>
            )}
        </div>
    )
}

// const FormLogin = () => {
//     return <div>login {xx()}</div>
// }

// const xx = () => {
//     return 30
// }
//เรียกใช้ในฟังก์ชันได้
// const xx = () =>{
//     return 30
// }
//เรียกใช้ในฟังก์ชันได้

export default FormLogin
