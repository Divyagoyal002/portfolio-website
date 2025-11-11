'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import styled from 'styled-components';

const ExperiencePage = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  const experiences = {
    work: [
      {
        title: 'AI/ML Intern',
        company: 'Linkites InfoTech.',
        duration: "February'2025 - July'2025",
        description:
          'Built CNN, LSTM, and FaceNet models for computer vision and forecasting using PyTorch. Developed GenAI tools with LLM APIs, RAG pipelines, and CrewAI agents. Created OneCode, a prompt-driven code generator for React + Node.js apps. Contributed to oneAudit, an AI assistant delivering domain-specific audit insights.',
        skills: [
          'Python',
          'PyTorch',
          'CNN',
          'LSTM',
          'FaceNet',
          'React',
          'Node.js',
          'AWS',
          'LLMs',
          'RAG',
          'Generative AI',
          'Prompt Engineering',
        ],
      },
      {
        title: 'Data Analyst and Marketing Research Intern',
        company: 'Synergy Ventures',
        duration: "Sep'2023 - Nov'2023",
        description:
          'Boosted conversion rates by 15% and revenue by 10% through data-driven marketing strategies and pricing recommendations. Conducted market research using Python, NumPy, and Pandas to extract insights that informed business decisions.',
        skills: [
          'Data Analysis',
          'Market Research',
          'Python',
          'NumPy',
          'Pandas',
          'Business Insights',
        ],
      },
    ],
    education: [
      {
        title: 'M.Tech (Dual-degree)',
        institution: 'School of Data Science and Forecasting , DAVV',
        duration: '2021 - 2026',
        description: 'Specialized in Artificial Intelligence and Data Science',
        achievements: ['9.1 CGPA', 'Placement Coordinator'],
      },
    ],
  };

  return (
    <Container>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Title>Experience</Title>

        <TabContainer>
          <Tab active={activeTab === 'work'} onClick={() => setActiveTab('work')}>
            <FaBriefcase /> Work
          </Tab>
          <Tab active={activeTab === 'education'} onClick={() => setActiveTab('education')}>
            <FaGraduationCap /> Education
          </Tab>
        </TabContainer>

        <TimelineContainer>
          <AnimatePresence mode="wait">
            {activeTab === 'work'
              ? experiences.work.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <TimelineCard>
                      <TimelineDot />
                      <CardContent>
                        <h3>{exp.title}</h3>
                        <h4>{exp.company}</h4>
                        <Duration>{exp.duration}</Duration>
                        <Description>{exp.description}</Description>
                        <SkillsContainer>
                          {exp.skills.map((skill, i) => (
                            <Skill key={i}>{skill}</Skill>
                          ))}
                        </SkillsContainer>
                      </CardContent>
                    </TimelineCard>
                  </motion.div>
                ))
              : experiences.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <TimelineCard>
                      <TimelineDot />
                      <CardContent>
                        <h3>{edu.title}</h3>
                        <h4>{edu.institution}</h4>
                        <Duration>{edu.duration}</Duration>
                        <Description>{edu.description}</Description>
                        <AchievementsList>
                          {edu.achievements.map((achievement, i) => (
                            <Achievement key={i}>{achievement}</Achievement>
                          ))}
                        </AchievementsList>
                      </CardContent>
                    </TimelineCard>
                  </motion.div>
                ))}
          </AnimatePresence>
        </TimelineContainer>
      </motion.div>
    </Container>
  );
};

// ---------- Styled Components ----------

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background: var(--primary);
  font-family: var(--font-primary);
  color: var(--foreground);
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: var(--border-radius);
  background: ${(props) => (props.active ? 'var(--secondary)' : 'var(--background)')};
  color: ${(props) => (props.active ? 'var(--foreground)' : '#666')};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--transition);
  box-shadow: var(--box-shadow);

  &:hover {
    background: var(--secondary);
    transform: translateY(-2px);
  }
`;

const TimelineContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background: var(--secondary);
  }
`;

const TimelineCard = styled.div`
  position: relative;
  margin-left: 20px;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: var(--background);
  border-radius: 12px;
  box-shadow: var(--box-shadow);
  transition: var(--transition);

  &:hover {
    transform: translateX(8px);
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: -25px;
  top: 24px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--accent-primary);
  border: 2px solid var(--background);
`;

const CardContent = styled.div`
  h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
  }

  h4 {
    margin: 0 0 0.5rem 0;
    color: #666;
  }
`;

const Duration = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Skill = styled.span`
  padding: 0.3rem 0.8rem;
  background: var(--secondary);
  border-radius: 20px;
  font-size: 0.9rem;
  color: var(--foreground);
`;

const AchievementsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Achievement = styled.div`
  padding: 0.3rem 0.8rem;
  background: var(--secondary);
  border-radius: 20px;
  font-size: 0.9rem;
  color: var(--foreground);
`;

export default ExperiencePage;
