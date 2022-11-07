import React from 'react'
import './css/index.css'
import ModuleCss from './css/index.module.css'

const Styling = (props) => {
  const filteredStyles = Object.keys(props.styles).filter(
    (key) => props.styles[key]
  )
  console.log(ModuleCss)

  let classStr = ''
  for (const style of filteredStyles) {
    classStr += ` ${ModuleCss[style]}`
  }

  return (
    <div>
      <div style={{ fontSize: '30px', fontWeight: '900' }}>Inline Css</div>
      <div className={filteredStyles.join(' ')}>External Css</div>
      <div className={classStr}>Module CSS</div>
    </div>
  )
}

export default Styling
