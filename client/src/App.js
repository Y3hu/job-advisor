import React, { useEffect, useState } from 'react'
import './App.css'
import Jobs from './Jobs'

const baseURL = 'http://localhost:3001/jobs'

function App() {

  const [jobList, updateJobs] = useState([])

  useEffect(() => {
    fetchJobs()
  }, [])

  async function fetchJobs() {
    const res = await fetch(baseURL)
    const json = await res.json()

    updateJobs(json)
  }

  return (
    <div className="App">
      <Jobs jobs={jobList}/>
    </div>
  )
}

export default App
