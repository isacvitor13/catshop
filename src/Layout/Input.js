import styles from './Input.module.css'
import { FiSearch } from "react-icons/fi";
import { useState, useEffect } from 'react';

function Input({ HandleCat }) {

//    const TypeCat ={Raças}

const [TypeCat, setTypeCat] = useState()
    
useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((resp) => resp.json())
        .then((data) =>{setTypeCat(data)
})
        .catch((err) => console.log(err))
}, [])


    return (
        <div className={styles.input}>
            {/* <input placeholder={placeholder} type={type} list={list}></input> */}
           
            <select onChange={HandleCat} >
                <option id='beng'>Selecione uma Raça</option>
                {TypeCat &&
                    TypeCat.map((cat) =>
                        <option key={cat.id} value={cat.id} id={cat.id} >{cat.name} </option>
                    )}
            </select>
            <FiSearch />
            
        </div>
    )
}

export default Input