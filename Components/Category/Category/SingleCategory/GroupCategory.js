import React, { Fragment } from 'react'

import SingleCategory from './SingleCategory'

const GroupCategory = (props) => {
    return (


        
<Fragment>
<SingleCategory pic={props.pic} name={props.name} groupFunc={props.itemFunc}/>
</Fragment>



      
    )
}

export default GroupCategory
