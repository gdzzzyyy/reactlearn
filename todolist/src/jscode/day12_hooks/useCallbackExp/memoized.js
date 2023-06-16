/**
 * useMemo 传入的函数内部需要返回值
 * 只能申明在函数组件内部
 */

import React, { useState, useCallback} from "react";
import ReactDOM from 'react-dom/client';

function Memoized () {
    const [count, setCount] = useState(1);

    // const handleClick = useCallback(() => {
    //     setCount(count + 1)
    // }, [])

    /**
     * 
     */
    const handleClick = () => {
        setCount(count + 1)
    }
    
    return (
        <>
            <p>{ count }</p>
            <button onClick={ handleClick }>+</button>
            <Child />
        </>
    )
}


//HUANCUN
const Child = React.memo(function Child() {
    console.log('子コンポーネント実行された');
    return (
        <>
            <p>
                hello world!
            </p>
        </>
    )
})

/**
 * 
 * @returns 
 */
// function Child () {
//     console.log('子コンポーネント実行された');
//     return (
//         <>
//             <p>
//                 hello world!
//             </p>
//         </>
//     )
// }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Memoized />)