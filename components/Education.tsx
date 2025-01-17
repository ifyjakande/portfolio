"use client"

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface Education {
  degree: string
  institution: string
  year?: string
  description?: string
}

const educationData: Education[] = [
  {
    degree: "MBA",
    institution: "Obafemi Awolowo University",
    year: "2020 - 2022"
  },
  {
    degree: "B.Sc. Computer Science with Economics",
    institution: "Obafemi Awolowo University",
    year: "2014 - 2019"
  },
  {
    degree: "Data Science Nigeria Bootcamp",
    institution: "Data Science Nigeria",
    year: "2019"
  }
]

export default function Education() {
  return (
    <section id="education" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Education & Certifications</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((item, index) => (
            <Card key={index} className="bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  {item.degree}
                </CardTitle>
                <CardDescription>
                  <span className="block font-medium text-foreground">
                    {item.institution}
                  </span>
                  {item.year && (
                    <span className="block text-sm text-muted-foreground">
                      {item.year}
                    </span>
                  )}
                  {item.description && (
                    <span className="block mt-2 text-sm">
                      {item.description}
                    </span>
                  )}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

