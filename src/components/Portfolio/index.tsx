import React, { useState, useEffect } from 'react'

interface Repository {
  name: string
  pushed_at: string
  html_url: string
  description: string
  daysSinceLastChange?: number
}

const Portfolio: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>([])

  useEffect(() => {
    const getRepos = async () => {
      const response = await fetch('https://api.github.com/users/maxkrieg/repos')
      const data: Repository[] = await response.json()
      data.sort((repoA: any, repoB: any) => {
        const aDate = new Date(repoA.pushed_at)
        const bDate = new Date(repoB.pushed_at)
        return bDate.getTime() - aDate.getTime()
      })
      const reposToDisplay = data.slice(0, 5)
      const today = new Date()
      reposToDisplay.forEach((repo) => {
        const diffTime = Math.abs(today.getTime() - new Date(repo.pushed_at).getTime())
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        repo.daysSinceLastChange = diffDays
      })
      setRepos(reposToDisplay)
    }
    getRepos()
  }, [])

  return (
    <div>
      <p style={{ marginBottom: '16px' }}>
        While most of my code is written for work, below is a list of some recent (or potentially
        not recent) contributions on personal projects. Head over to my{' '}
        <a href="https://github.com/maxkrieg" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> github
        </a>{' '}
        for all of my code.
      </p>
      <ul>
        {repos.map((repo: Repository, i: number) => (
          <li key={i} style={{ listStyle: 'none', fontSize: '14px' }}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>{' '}
            // {repo.description} // {repo.daysSinceLastChange} days ago
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Portfolio
