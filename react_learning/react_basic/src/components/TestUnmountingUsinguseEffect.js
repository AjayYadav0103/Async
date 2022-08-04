import React from 'react'

const TestUnmountingUsinguseEffect = () => {

    const[count,setCount]=React.useState('');
    React.useEffect(()=>{
        setCount('Mounting');
    },[])
  return (
    <div>Count1:{count}</div>
  )
}

export default TestUnmountingUsinguseEffect