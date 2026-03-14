import React from 'react'
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
    skills: ['PostgreSQL', 'Redis', 'MongoDB', 'RabbitMQ'],
  },
  {
    name: 'AI & Workflows',
    skills: ['LLM Integration', 'Agentic Workflows', 'Chat Applications', 'RAG Pipelines'],
  },
]

const SkillList: React.FC = () => {
  return (
    <Row className="skill-list justify-content-md-center">
      {SKILL_CATEGORIES.map((category) => (
        <Col key={category.name} xs={12} sm={6} md={4} className="skill-category">
          <h5 className="skill-category__title">{category.name}</h5>
          <div className="skill-category__tags">
            {category.skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </Col>
      ))}
    </Row>
  )
}

export default SkillList
