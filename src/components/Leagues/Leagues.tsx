import React, { useEffect, useState } from 'react'
import './leagues.sass'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loader from '../Loader'
import SingleLeague from '../SingleLeague'

const Leagues = (): JSX.Element => {
  const [leagues, setLeagues] = useState<Array<any> | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const options = {
    method: 'GET',
    url: 'https://sportscore1.p.rapidapi.com/sports/1/leagues',
    params: { page: '1' },
    headers: {
      'X-RapidAPI-Key': '37ccad15ffmsh694cb81c23c51a8p18a6a3jsn26d96346ddd9',
      'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com',
    },
  }

  useEffect(() => {
    const fetchLeagues = async () => {
      setLoading(true)

      try {
        const response = await axios.request(options)

        const data = response.data.data
        setLeagues(data)
        setLoading(false)
      } catch (error: any) {
        console.log(error.message)

        toast.error('Something went wrong')
        setLeagues(null)
        setLoading(false)
      }
    }

    fetchLeagues()
  }, [])

  return (
    <section className='leagues'>
      <h1 className='leagues__title'>Leagues</h1>
      {loading ? (
        <Loader />
      ) : (
        <div className='leagues__list'>
          <div className='leagues__shadow'></div>
          {leagues?.map((league: any, i: any) => (
            <SingleLeague key={i} {...league} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Leagues
