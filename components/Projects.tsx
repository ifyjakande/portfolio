"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import { useState } from "react"

interface Project {
  title: string
  description: string
  technologies: string[]
  achievements: string[]
  githubUrl: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    title: "AWS Redshift & Airflow ETL Pipeline",
    description: "Modern data pipeline for Northern Ireland crime and housing analytics",
    achievements: [
      "Built with Apache Airflow, Amazon S3, DBT, and Redshift",
      "Automated ETL processes with 95% data validation accuracy",
      "Achieved 90% pipeline uptime in production"
    ],
    technologies: ["AWS", "Airflow", "DBT", "Redshift", "Python", "S3"],
    githubUrl: "https://github.com/ifyjakande/crime_dwelling_pipeline"
  },
  {
    title: "Azure Synapse, Airflow, Kafka & Streamlit Sales Analytics Platform",
    description: "End-to-end retail sales data pipeline and analytics dashboard",
    achievements: [
      "Orchestrated ETL pipeline using Airflow on Docker and Azure VM",
      "Implemented real-time data streaming with Apache Kafka",
      "Built interactive Streamlit dashboard with dynamic visualizations",
      "Integrated Azure Synapse Analytics for efficient data warehousing"
    ],
    technologies: ["Azure", "Airflow", "Kafka", "Streamlit", "Docker", "Python"],
    githubUrl: "https://github.com/ifyjakande/sales-dashboard-streamlit"
  },
  {
    title: "Real-time Analytics Bot",
    description: "Cryptocurrency market monitoring and alert system",
    achievements: [
      "Tracks top 100 cryptocurrencies in real-time",
      "Provides automated Slack alerts for market insights",
      "Implemented advanced market analysis algorithms"
    ],
    technologies: ["Python", "Slack API", "Crypto APIs", "Docker"],
    githubUrl: "https://github.com/ifyjakande/crypto_alert"
  },
  {
    title: "DBT Transformation Pipeline",
    description: "Advanced analytics solution for Northern Ireland crime statistics",
    achievements: [
      "Implemented DBT models for complex data transformations",
      "Created district-level analytics dashboards",
      "Reduced query processing time by 60%"
    ],
    technologies: ["DBT", "SQL", "Python", "Analytics"],
    githubUrl: "https://github.com/ifyjakande/northern-ireland-etl"
  },
  {
    title: "AWS & Airflow Pipeline",
    description: "Automated Reddit data collection and processing system",
    achievements: [
      "Integrated Reddit API with AWS services",
      "Implemented S3 data lake architecture",
      "Processes millions of records with robust error handling"
    ],
    technologies: ["AWS", "Airflow", "Python", "Reddit API", "S3"],
    githubUrl: "https://github.com/ifyjakande/reddit_project"
  },
  {
    title: "AWS Redshift & DBT Warehouse",
    description: "End-to-end data warehouse implementation",
    achievements: [
      "Designed optimized star schema architecture",
      "Built automated data quality frameworks",
      "Reduced compute costs by 40% through incremental processing"
    ],
    technologies: ["AWS", "Redshift", "DBT", "Python", "SQL"],
    githubUrl: "https://github.com/ifyjakande/redshift_datawarehouse_project"
  }
]

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const previousProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Signature Projects</h2>
      <div className="relative max-w-4xl mx-auto px-4">
        <Card 
          className="bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <CardHeader>
            <CardTitle className="text-2xl text-primary">
              {projects[currentProject].title}
            </CardTitle>
            <CardDescription className="text-lg mt-2">
              {projects[currentProject].description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2">
                {projects[currentProject].achievements.map((achievement, index) => (
                  <li key={index} className="text-muted-foreground">
                    {achievement}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {projects[currentProject].technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex justify-between items-center mt-6">
                <Button variant="outline" asChild>
                  <a
                    href={projects[currentProject].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </Button>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={previousProject}
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextProject}
                    aria-label="Next project"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

