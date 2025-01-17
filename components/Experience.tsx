import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const experiences = [
  {
    title: "Data Science Consultant",
    company: "Dwrangler Analytics",
    period: "2021 - Present",
    achievements: [
      "Led development of ML pipelines improving forecast accuracy by 85%",
      "Mentored 40+ data professionals in technical best practices",
      "Implemented uplift modeling improving resource allocation by 30%"
    ]
  },
  {
    title: "Full Stack Data Engineer",
    company: "Pullus Africa",
    period: "2024 - Present",
    achievements: [
      "Reduced data processing time by 75% through stock management pipeline automation",
      "Improved data accuracy to 95% with robust cleaning protocols",
      "Achieved 90% pipeline uptime, saving 20 hours weekly in manual updates",
      "Implemented interactive Looker Studio dashboards boosting decision-making speed by 60%"
    ]
  },
  {
    title: "Data Quality Engineer",
    company: "Vendease",
    period: "2023 - 2024",
    achievements: [
      "Reduced data discrepancies by 80% through automated validation",
      "Engineered real-time monitoring reducing issue resolution time by 60%",
      "Built automated reconciliation systems processing $10M+ transactions"
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                <div className="w-0.5 h-full bg-border"></div>
              </div>
              <Card className="flex-1">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{exp.title} @ {exp.company}</CardTitle>
                  <p className="text-muted-foreground">{exp.period}</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

