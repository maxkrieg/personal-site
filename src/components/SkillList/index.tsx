import React, { useRef, useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import './index.css'

interface SkillCategory {
  name: string
  skills: string[]
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'Elixir'],
  },
  {
    name: 'Front End',
    skills: ['React', 'Next.js', 'Apollo', 'webpack', 'jest'],
  },
  {
    name: 'Back End',
    skills: ['Node.js', 'Express.js', 'GraphQL', 'Flask', 'Elixir / Phoenix'],
  },
  {
    name: 'Data Stores',
    skills: ['PostgreSQL', 'Redis', 'MongoDB', 'RabbitMQ', 'Kafka'],
  },
  {
    name: 'AI & Workflows',
    skills: ['LLM Integration', 'Agentic Workflows', 'Chat Applications', 'n8n', 'Vercel AI SDK'],
  },
]

const SkillList: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  let globalIndex = 0

  return (
    <div ref={ref}>
      <Row className="skill-list justify-content-md-center">
        {SKILL_CATEGORIES.map((category) => (
          <Col key={category.name} xs={12} sm={6} md={4} className="skill-category">
            <h5 className="skill-category__title">{category.name}</h5>
            <div className="skill-category__tags">
              {category.skills.map((skill) => {
                const delay = globalIndex++ * 60
                return (
                  <span
                    key={skill}
                    className={`skill-tag ${visible ? 'skill-tag--visible' : ''}`}
                    style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
                  >
                    {skill}
                  </span>
                )
              })}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default SkillList
