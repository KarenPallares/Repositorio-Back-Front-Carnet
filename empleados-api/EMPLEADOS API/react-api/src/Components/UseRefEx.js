import React, {useRef} from 'react'

function UseRefEx(){

    const num1 = useRef();
    const num2 = useRef();

    const sumar =()=>{
        let rta = Number(num1.current.value) + Number(num2.current.value)
        alert(rta)
    }

    return(
        <div>
            <input type='text' name="num1" ref={num1}/>+
            <input type="text" name='num2' ref={num2} />
            <button onClick={sumar}>Sumar</button>
        </div>
    )

}
export default UseRefEx;