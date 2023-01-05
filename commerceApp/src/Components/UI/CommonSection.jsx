import React from 'react'
import '../../Styles/common.css'
import { Container } from 'reactstrap'
function CommonSection({title}) {
  return (
    <section className='Common-Section'>
<Container >
<h1 className='text-white text-center'>{title}</h1>
</Container>
    </section>
  )
}

export default CommonSection