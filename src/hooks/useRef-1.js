import React, {useState, useEffect, useRef} from 'react'

function Txt (props) {
  let {text, setEdit} = props
  return (
    <div>{text}<a onClick={() => {
      setEdit(true)
    }}>编辑</a></div>
  )
}

function Edit (props) {
  const {text, setText, setEdit} = props
  const t = useRef(null)
  
  function toScroll () {
    let y = window.scrollY
    t.current.style.transform = `translateY(${y}px)`
    console.log(y)
  }
  
  useEffect(() => {
    // 获取焦点，并且都选中
    t.current.select()
    window.addEventListener("scroll", toScroll)
    return () => {
      // 组件销毁执行
      // console.log("组件销毁")
      window.removeEventListener("scroll", toScroll)
    }
  }, [])
  return (
    <input
      type="text"
      value={text}
      ref={t}
      id="txt"
      onChange={
        (e) => {
          setText(e.target.value)
        }
      }
      onBlur={
        () => {
          setEdit(false)
        }
      }
    />
  )
}

function Effect () {
  const [text, setText] = useState("这是今天的课程")
  const [edit, setEdit] = useState(false)
  // 只监听 edit 发生改变
  // 嵌套内部的组件有变化会再执行 useEffect，所以加上[]
  useEffect(() => {
    console.log("组件更新了")
  }, [edit])
  return (
    <div>
      {edit ?
        <Edit
          text={text}
          setText={setText}
          setEdit={setEdit}
        />
        :
        <Txt text={text} setEdit={setEdit}/>
      }
      {[...(".".repeat(100))].map((item, index) => {
        return <div key={index}>页面内容填充</div>
      })}
    </div>
  )
}

export default Effect
