import React from 'react'

const Posts = ({ post, loading,lastCountPage,dataPerPage,currentPage}) => {
    return <>
        {loading ? <div>Loading....</div> : post.map((posts,index) => {
            if (index==currentPage) {
                return <div key={posts.id} style={{ borderStyle: 'solid', borderWidth: '1px' }}>
                    {posts.body}
                </div>
            }
        })}
    </>
}

export default Posts;
