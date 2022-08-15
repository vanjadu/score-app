import React from 'react'
import './loader.sass'
import { TailSpin } from 'react-loader-spinner'

const Loader = (): JSX.Element => {
  return (
    <section className='loader'>
      <TailSpin color='#2FB1E6' height={80} width={80} />
    </section>
  )
}

export default Loader
