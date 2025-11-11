'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import styled from 'styled-components';

const ExperiencePage = () => {
  const [activeTab, setActiveTab] = useState('work');

  const experiences = {
    work: [
      {
        title: 'AI/ML Intern',
        company: 'Linkites InfoTech.',
        duration: "February'2025 - July'2025",
        description: 'Built CNN, LSTM, and FaceNet models for computer vision and forecasting using PyTorch. Developed GenAI tools with LLM APIs, RAG pipelines, and CrewAI agents. Created OneCode, a prompt-driven code generator for React + Node.js apps. Contributed to oneAudit, an AI assistant delivering domain-specific audit insights.',
        skills : ['Python', 'PyTorch', 'CNN', 'LSTM', 'FaceNet', 'React', 'Node.js', 'AWS', 'LLMs', 'RAG', 'Generative AI', 'Prompt Engineering']

      },
      {
        title: 'Data Analyst and Marketing Research Intern',
        company: 'Synergy Ventures',
        duration: "Sep'2023 - Nov'2023",
        description: 'Data Analyst & Marketing Research Intern at Synergy Ventures (Sep–Oct 2023, Indore, India). Boosted conversion rates by 15% and revenue by 10% through data-driven marketing strategies and pricing recommendations. Conducted market research with Python, NumPy, and Pandas to extract actionable insights that informed business decisions and collaborated with sales and marketing teams to implement recommendations.',
        skills: ['Data Analysis', 'Market Research', 'Python', 'NumPy', 'Pandas', 'Data-Driven Marketing', 'Pricing Strategy', 'Business Insights', 'Conversion Optimization']
      }
    ],
    education: [
      {
        title: 'M.Tech (Dual-degree)',
        institution: 'School of Data Science and Forecasting , DAVV',
        duration: '2021 - 2026',
        description: 'Specialized in Artificial Intelligence and Data Science',
        achievements: ['9.1 CGPA','Placement Coordinator']
      }
    ]
  };

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Experience</Title>
        
        <TabContainer>
          <Tab 
            active={activeTab === 'work'} 
            onClick={() => setActiveTab('work')}
          >
            <FaBriefcase /> Work
          </Tab>
          <Tab 
            active={activeTab === 'education'} 
            onClick={() => setActiveTab('education')}
          >
            <FaGraduationCap /> Education
          </Tab>
        </TabContainer>

        <TimelineContainer>
          {activeTab === 'work' ? (
            experiences.work.map((exp, index) => (
              <TimelineCard
                key={index}
                as={motion.div}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
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
            ))
          ) : (
            experiences.education.map((edu, index) => (
              <TimelineCard
                key={index}
                as={motion.div}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
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
            ))
          )}
        </TimelineContainer>
      </motion.div>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background: #F5F5F5;
  font-family: 'Poppins', sans-serif;
  color: #333333;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333333;
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
  border-radius: 8px;
  background: ${props => props.active ? 
    '#A7C7E7' : 
    '#F5F5F5'
  };
  color: ${props => props.active ? '#333333' : '#666666'};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  &:hover {
    background: ${props => props.active ? '#A7C7E7' : '#e0e0e0'};
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
    background: #A7C7E7;
  }
`;

const TimelineCard = styled.div`
  position: relative;
  margin-left: 20px;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);

  &:hover {
    transform: translateX(10px);
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: -25px;
  top: 24px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #F28C8C;
  border: 2px solid #ffffff;
`;

const CardContent = styled.div`
  h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
    color: #333333;
  }

  h4 {
    margin: 0 0 0.5rem 0;
    color: #666666;
  }
`;

const Duration = styled.div`
  font-size: 0.9rem;
  color: #666666;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #333333;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Skill = styled.span`
  padding: 0.3rem 0.8rem;
  background: #A7C7E7;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #333333;
`;

const AchievementsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Achievement = styled.div`
  padding: 0.3rem 0.8rem;
  background: #A7C7E7;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #333333;
`;

export default ExperiencePage;