import React from 'react'
import './singleleague.sass'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

interface Props {
  logo?: string
  name_translations?: any
  sport?: any
  id?: number
}

const SingleLeague = ({ logo, name_translations, sport, id }: Props) => {
  return (
    <Link to={`/matches/${id}`}>
      <div className='single-league'>
        <img
          src={logo}
          alt={name_translations.en}
          className='single-league__avatar'
        />
        <p className='single-league__title'>{name_translations.en}</p>
        <p className='single-league__sport'>{sport.name}</p>
        <p className='single-league__cta'>
          League matches <FiArrowRight className='single-league__icon' />
        </p>
      </div>
    </Link>
  )
}

export default SingleLeague
