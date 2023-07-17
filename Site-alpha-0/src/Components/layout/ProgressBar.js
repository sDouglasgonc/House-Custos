import React from 'react'
import {Progress} from 'antd'
import './ProgressBar.css'

function ProgressBar() {
    return(
<div className='bar'>
<Progress percent={0} size={'small'}/>
</div>
    )
}
export default ProgressBar