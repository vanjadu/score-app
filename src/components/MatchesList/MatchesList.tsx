import React, { useState, useEffect } from 'react'
import './matcheslist.sass'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loader from '../Loader'
import axios from 'axios'
import SingleMatch from '../SingleMatch'
import { FiArrowLeft } from 'react-icons/fi'

const MatchesList = (): JSX.Element => {
  const { id } = useParams()
  const [matches, setMatches] = useState<Array<any> | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const options = {
    method: 'GET',
    url: `https://sportscore1.p.rapidapi.com/leagues/${id}/events`,
    params: { page: '1' },
    headers: {
      'X-RapidAPI-Key': '37ccad15ffmsh694cb81c23c51a8p18a6a3jsn26d96346ddd9',
      'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com',
    },
  }

  useEffect(() => {
    const fetchMatches = async () => {
      setLoading(true)

      try {
        const res = await axios.request(options)
        const data = await res.data.data

        setMatches(data)
        setLoading(false)
      } catch (error: any) {
        console.log(error.message)

        toast.error('Something went wrong')
        setMatches(null)
        setLoading(false)
      }
    }

    fetchMatches()
  }, [])

  console.log(matches)

  return (
    <section className='matches-list'>
      <Link to='/' className='matches-list__back'>
        <FiArrowLeft className='matches-list__back-icon' /> Back to leagues
      </Link>
      <h1 className='matches-list__title'>All matches</h1>
      {loading ? (
        <Loader />
      ) : (
        <div className='matches-list__container'>
          <div className='matches-list__shadow'></div>
          {matches?.map((match: any, i: any) => (
            <SingleMatch key={i} {...match} />
          ))}
        </div>
      )}
    </section>
  )
}

export default MatchesList
