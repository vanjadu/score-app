import React from 'react'
import './singlematch.sass'

interface Props {
  home_team?: any
  home_score?: any
  away_team?: any
  away_score?: any
  league?: any
  status?: string
}

const SingleMatch = ({
  home_team,
  home_score,
  away_team,
  away_score,
  league,
  status,
}: Props): JSX.Element => {
  return (
    <div className='single-match'>
      <h4 className='single-match__league'>{league.name}</h4>
      <p className='single-match__status'>{status}</p>
      <div className='single-match__teams'>
        <div className='single-match__team'>
          <div className='single-match__info'>
            <img
              src={home_team.logo}
              alt={home_team.name}
              className='single-match__avatar'
            />
            <p className='single-match__name'>{home_team.name}</p>
          </div>
          <p className='single-match__score'>
            {home_score ? home_score.current : 0}
          </p>
        </div>
        <div className='single-match__team'>
          <div className='single-match__info'>
            <p className='single-match__name'>{away_team.name}</p>
            <img
              src={away_team.logo}
              alt={away_team.name}
              className='single-match__avatar'
            />
          </div>
          <p className='single-match__score'>
            {away_score ? away_score.current : 0}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SingleMatch
