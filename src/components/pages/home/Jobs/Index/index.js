import JobItem from '../JobItem/Index'
import { JobList } from './styled'

import data from '../../../../../data/data.json'

import { renderJobs } from '../../../../../utils/filters/filter'

import { useState, useEffect } from 'react'

export default function Jobs({ setFilter, filter }) {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    setJobs(data)
  }, [])

  return (
    jobs.length === 0
      ? <p>Carregando</p>
      : <JobList>
        {renderJobs(data, filter).map((item, index) => (
          <JobItem key={index} data={item} setFilter={setFilter} />
        ))}
      </JobList>
  )
}