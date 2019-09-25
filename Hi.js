import React, { useState, useRef } from 'react'


const Hi = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  countRef.current = count;

  const addCount = () => {
    setCount(count + 1);
  }

  const showCount = () => {
    setTimeout(() => {
      alert(count);
    }, 5000);
  }


  const showCountNoClosure = () => {
    setTimeout(() => {
      alert(countRef.current);
    }, 5000);
  }



  return <div>
    <div>hook version:</div>
    count: {count}
    <button onClick={addCount}>add</button>
    <button onClick={showCount}>alert</button>
    <br />
    <br />
    <div>hook no closure version:</div>
    count: {count}
    <button onClick={addCount}>add</button>
    <button onClick={showCountNoClosure}>alert</button>

  </div>
}

export default Hi;