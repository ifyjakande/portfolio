import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Skills() {
  const dataEngineeringSkills = [
    {
      name: "AWS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
    },
    {
      name: "Airflow",
      icon: "https://raw.githubusercontent.com/apache/airflow/main/docs/apache-airflow/img/logos/airflow_white_bg.png"
    },
    {
      name: "Snowflake",
      icon: "https://www.vectorlogo.zone/logos/snowflake/snowflake-icon.svg"
    },
    {
      name: "Databricks",
      icon: "https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg"
    },
    {
      name: "Azure",
      icon: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg"
    },
    {
      name: "Hadoop",
      icon: "https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg"
    },
    {
      name: "Spark",
      icon: "https://www.vectorlogo.zone/logos/apache_spark/apache_spark-icon.svg"
    },
    {
      name: "GCP",
      icon: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
    }
  ];

  const developmentSkills = [
    {
      name: "Python",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
    },
    {
      name: "PostgreSQL",
      icon: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
    },
    {
      name: "MySQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
    },
    {
      name: "Git",
      icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
    },
    {
      name: "Django",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg"
    },
    {
      name: "Docker",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
    },
    {
      name: "FastAPI",
      icon: "https://raw.githubusercontent.com/fastapi/fastapi/master/docs/en/docs/img/icon-white.svg"
    },
    {
      name: "Postman",
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
    }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Technical Expertise</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Data Engineering & Cloud</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {dataEngineeringSkills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 mb-2"
                  loading="lazy"
                />
                <span className="text-sm text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Development & Databases</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {developmentSkills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 mb-2"
                  loading="lazy"
                />
                <span className="text-sm text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

