import React, { useState, useEffect } from 'react'
import './index.css'

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  SCSS: '#c6538c',
  Shell: '#89e051',
  Go: '#00ADD8',
  Rust: '#dea584',
  Java: '#b07219',
  'C++': '#f34b7d',
  C: '#555555',
  Ruby: '#701516',
  Swift: '#f05138',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  Vue: '#41b883',
  PHP: '#4F5D95',
}

interface Repository {
  name: string
  pushed_at: string
  html_url: string
  description: string
  language: string | null
  stargazers_count: number
  forks_count: number
  topics: string[]
  homepage: string | null
  archived: boolean
  daysSinceLastChange?: number
}

function formatTimeAgo(days: number): string {
  if (days <= 1) return 'yesterday'
  if (days < 30) return `${days}d ago`
  if (days < 365) return `${Math.round(days / 30)}mo ago`
  return `${Math.round(days / 365)}y ago`
}

const Portfolio: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>([])

  useEffect(() => {
    const getRepos = async () => {
      const response = await fetch('https://api.github.com/users/maxkrieg/repos?per_page=100', {
        headers: { Accept: 'application/vnd.github+json' },
      })
      const data: Repository[] = await response.json()
      data.sort((repoA: any, repoB: any) => {
        const aDate = new Date(repoA.pushed_at)
        const bDate = new Date(repoB.pushed_at)
        return bDate.getTime() - aDate.getTime()
      })
      const reposToDisplay = data.slice(0, 8)
      const today = new Date()
      reposToDisplay.forEach((repo) => {
        const diffTime = Math.abs(today.getTime() - new Date(repo.pushed_at).getTime())
        repo.daysSinceLastChange = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      })
      setRepos(reposToDisplay)
    }
    getRepos()
  }, [])

  return (
    <div>
      <p style={{ marginBottom: '2rem' }}>
        While most of my code is written for work, below is a list of some recent (or potentially
        not recent) contributions on personal projects. Head over to my{' '}
        <a href="https://github.com/maxkrieg" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> github
        </a>{' '}
        for all of my code.
      </p>
      <div className="repo-grid">
        {repos.map((repo: Repository) => (
          <div key={repo.name} className={`repo-card${repo.archived ? ' repo-card--archived' : ''}`}>
            <div className="repo-card__header">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-card__name">
                <i className="fas fa-book repo-card__icon"></i>
                {repo.name}
              </a>
              {repo.homepage && (
                <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="repo-card__homepage" title="Live site">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              )}
            </div>

            <p className="repo-card__description">
              {repo.description || <span className="repo-card__no-desc">No description</span>}
            </p>

            {repo.topics && repo.topics.length > 0 && (
              <div className="repo-card__topics">
                {repo.topics.slice(0, 4).map((topic) => (
                  <span key={topic} className="repo-card__topic">{topic}</span>
                ))}
              </div>
            )}

            <div className="repo-card__footer">
              <div className="repo-card__meta">
                {repo.language && (
                  <span className="repo-card__language">
                    <span
                      className="repo-card__language-dot"
                      style={{ backgroundColor: LANGUAGE_COLORS[repo.language] || '#8b949e' }}
                    />
                    {repo.language}
                  </span>
                )}
                {repo.stargazers_count > 0 && (
                  <span className="repo-card__stat">
                    <i className="fas fa-star"></i> {repo.stargazers_count}
                  </span>
                )}
                {repo.forks_count > 0 && (
                  <span className="repo-card__stat">
                    <i className="fas fa-code-branch"></i> {repo.forks_count}
                  </span>
                )}
              </div>
              <span className="repo-card__updated">{formatTimeAgo(repo.daysSinceLastChange!)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
