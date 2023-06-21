/**
 * 在 TypeScript 中，React.FC 是一种用于定义函数组件类型的特殊类型别名（type alias）。
 * FC 代表 "Function Component"，它表示一个接受属性对象（props）作为参数并返回一个 React 元素的函数组件。
 * 使用 React.FC 类型别名可以提供一些额外的类型检查，以确保函数组件按预期接受和返回正确的类型。
 * 它提供了一种简洁的方式来定义函数组件的类型，同时还允许在组件上使用泛型。
 * 在你的代码中，TsTextInputWithFocusButton01 被声明为一个函数组件，并使用 React.FC 类型别名进行类型定义。
 * 这意味着该组件接受一个空属性对象（没有额外的属性），并返回一个 React 元素。
 * 
 * 
 * 下列代码的需求： 点击按钮  自动选中并进入输入框
 */

import React, {useRef, MutableRefObject} from 'react';

const TsTextInputWithFocusButton01 : React.FC = () => {
    const inputEL : MutableRefObject<any> = useRef(null);
    const handleFocus = () => {
        inputEL.current.focus();
    }
    return (
        <>
            <input ref={inputEL} type='text' />
            <button onClick={handleFocus}>aaaaaaa</button>
        </>
    );   
}

export default TsTextInputWithFocusButton01;