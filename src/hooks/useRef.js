import React, {useEffect, useRef, useState} from 'react'

function Ref () {
  const [nub, setNub] = useState(0)
  const prev = useRef(nub)
  
  // 组件更新完或者组件挂载完之后执行副作用
  useEffect(() => {
    prev.current = nub
  })
  
  return (
    <div>
      <p>当前值: {nub}</p>
      <p>上次值: {prev.current}</p>
      <button onClick={() => {
        setNub(nub + 1)
      }}>递增
      </button>
    </div>
  )
}

export default Ref
