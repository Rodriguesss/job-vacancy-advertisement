import JobItem from '../JobItem/Index'
import { JobList } from './styled'

import data from '../../../../../data/data.json'

import { FilterJobsWithTags } from '../../../../../utils/filters/filter'

import { useState, useEffect } from 'react'

export default function Jobs({ setFilter, filter }) {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    setJobs(data)

    /* setJobs(filter.map(i =>
      data.filter(item => item.languages.includes(i)))) */
  }, [])

  return (
    jobs.length === 0
      ? <p>Carregando</p>
      : filter.length !== 0
        ?
        <JobList>
          {FilterJobsWithTags(data, filter).map((item, index) => (
            <JobItem key={index} data={item} setFilter={setFilter} />
          ))}
        </JobList>
        :
        <JobList>
          {jobs.map((job, index) => (
            <JobItem key={index} data={job} setFilter={setFilter} />
          ))}
        </JobList>
  )
}