/**
 * hook練習
 * フック（hook）　
 * stateなどのReactの機能を、クラスを書かずに使えるようになります
 * useState, useEffect など全てReactのコンポーネント
 * 
 * ０１使わない！！
 */

import React, { useState , useEffect } from "react";
import ReactDOM from 'react-dom/client';

const userInfo = {
    mypage: 1,
    myage : 29,
    mywork: 'coder',
};

const Counter = () => {
    const [tc, aaa] = useState(userInfo);

    

    const handleclick = () => {
        const a = tc.myage;
        aaa(() => {
          return {
            ...tc,
            myage: a+1
          }
        })
    }
      

    return (
        <>
            <p>ssssssssss = {tc.myage}</p>
            

            <button
                placeholder="名"
                 onClick={handleclick}>押し
                
ssssss
                </button>
        </>
    )

}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />)