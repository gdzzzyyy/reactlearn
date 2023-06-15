import React, {Component, Fragment, useState, useEffect, useContext, useRef} from "react";
import ReactDOM from 'react-dom/client';

const Counter = () => {
    const [data, setData] = useState([]);

    const pageInfo = useRef({
        pageNum: 1,
        pageSize: 10,
        total: 0
    });

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('https://example.com/api/data?pageNum=${pageInfo.current.pageNum}&pageSize=${pageInfo.current.pageSzie}');
            const result = await response.json();
            setData(result.data);
            pageInfo.current.total = result.total;
        }
        fetchData();
    }, [pageInfo]);

    const handleNextPage = () => {
        if(pageInfo.current.pageNum < Math.ceil(pageInfo.current.total / pageInfo.current.pageSize)) {
            pageInfo.current.pageNum += 1;
        }
    }

    const handlePrevPage = () => {
        if(pageInfo.current.pageNum > 1) {
            pageInfo.current.pageNum -= 1;
        }
    }

    return (
        <>
            {
                data.map(item => (
                    <div key={item.id}>{item.name}</div>
                ))
            }
            <button onClick={handlePrevPage} disabled={pageInfo.current.pageNum}>prevpage</button>
            <button onClick={handleNextPage} disabled={pageInfo.current.pageNum}>nextpage</button>
            <div>今ページ: {pageInfo.current.pageNum}</div>
            <div>毎ページサイズ:{pageInfo.current.pageSize}</div>
            <div>総ページ:{pageInfo.current.total}</div>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />)