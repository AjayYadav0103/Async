import React, { useState, useRef } from 'react'

const Pagination = ({ post,loading,lastCountPage,dataPerPage,setDataPerPage,setLastCountPage,setCurrentPage}) => {
    
    return <>
        {!loading?<div style={{ display: 'flex', justifyContent: 'center' }}>
            {dataPerPage > 11 ? <div style={{ padding: '4px', borderStyle: 'solid', borderWidth: '1px' }} onClick={() => {
                setLastCountPage(dataPerPage-20);
                setDataPerPage(dataPerPage - 10);
            }}>Prev.</div> : <div style={{ padding: '4px', borderStyle: 'solid', borderWidth: '1px' ,backgroundColor:'gray'}}>Prev.</div>}
            {post.map((posts, index) => {
                if (index >= lastCountPage && index < dataPerPage) {
                    return <div key={posts.id} style={{ padding: '4px', borderStyle: 'solid', borderWidth: '1px' }} onClick={()=>{setCurrentPage(index)}}>
                        {index + 1}
                    </div>
                }
            })}
            {dataPerPage < post.length ? <div style={{ padding: '4px', borderStyle: 'solid', borderWidth: '1px' }} onClick={() => {
                setLastCountPage(dataPerPage);
                setDataPerPage(dataPerPage + 10);
            }}>Next</div> : <div style={{ padding: '4px', borderStyle: 'solid', borderWidth: '1px' ,backgroundColor:'gray'}}>Next</div>}
        </div>:<div></div>}
    </>
}

export default Pagination