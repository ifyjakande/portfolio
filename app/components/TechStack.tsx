import Image from 'next/image'

export default function TechStack() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Technical Expertise</h2>
      
      <h3 className="text-xl font-semibold mb-4">Data Engineering & Cloud</h3>
      <div className="grid grid-cols-4 gap-4 md:grid-cols-8 mb-8">
        <div className="bg-[#1A2332] dark:bg-[#1A2332] bg-opacity-5 dark:bg-opacity-100 p-4 rounded-lg border border-gray-200 dark:border-transparent hover:shadow-lg transition-all">
          <img src="/aws.png" alt="AWS" className="w-12 h-12" />
          <p className="text-center mt-2">AWS</p>
        </div>
        <div className="bg-[#1A2332] dark:bg-[#1A2332] bg-opacity-5 dark:bg-opacity-100 p-4 rounded-lg border border-gray-200 dark:border-transparent hover:shadow-lg transition-all">
          <img src="/airflow.png" alt="Airflow" className="w-12 h-12" />
          <p className="text-center mt-2">Airflow</p>
        </div>
        <div className="bg-[#1A2332] dark:bg-[#1A2332] bg-opacity-5 dark:bg-opacity-100 p-4 rounded-lg border border-gray-200 dark:border-transparent hover:shadow-lg transition-all">
          <img src="/snowflake.png" alt="Snowflake" className="w-12 h-12" />
          <p className="text-center mt-2">Snowflake</p>
        </div>
        <div className="bg-[#1A2332] dark:bg-[#1A2332] bg-opacity-5 dark:bg-opacity-100 p-4 rounded-lg border border-gray-200 dark:border-transparent hover:shadow-lg transition-all">
          <img src="/databricks.png" alt="Databricks" className="w-12 h-12" />
          <p className="text-center mt-2">Databricks</p>
        </div>
        <div className="bg-[#1A2332] dark:bg-[#1A2332] bg-opacity-5 dark:bg-opacity-100 p-4 rounded-lg border border-gray-200 dark:border-transparent hover:shadow-lg transition-all">
          <img src="/azure.png" alt="Azure" className="w-12 h-12" />
          <p className="text-center mt-2">Azure</p>
        </div>
        <div className="bg-[#1A2332] dark:bg-[#1A2332] bg-opacity-5 dark:bg-opacity-100 p-4 rounded-lg border border-gray-200 dark:border-transparent hover:shadow-lg transition-all">
          <img src="/hadoop.png" alt="Hadoop" className="w-12 h-12" />
          <p className="text-center mt-2">Hadoop</p>
        </div>
        <div className="bg-[#1A2332] dark:bg-[#1A2332] bg-opacity-5 dark:bg-opacity-100 p-4 rounded-lg border border-gray-200 dark:border-transparent hover:shadow-lg transition-all">
          <img src="/spark.png" alt="Spark" className="w-12 h-12" />
          <p className="text-center mt-2">Spark</p>
        </div>
        <div className="bg-[#1A2332] dark:bg-[#1A2332] bg-opacity-5 dark:bg-opacity-100 p-4 rounded-lg border border-gray-200 dark:border-transparent hover:shadow-lg transition-all">
          <img src="/gcp.png" alt="GCP" className="w-12 h-12" />
          <p className="text-center mt-2">GCP</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-4">Development & Databases</h3>
      <div className="grid grid-cols-4 gap-4 md:grid-cols-8">
        <div className="bg-[#1A2332] dark:bg-[#1A2332] bg-opacity-5 dark:bg-opacity-100 p-4 rounded-lg border border-gray-200 dark:border-transparent hover:shadow-lg transition-all">
          <img src="/python.png" alt="Python" className="w-12 h-12" />
          <p className="text-center mt-2">Python</p>
        </div>
        <div className="bg-[#1A2332] dark:bg-[#1A2332] bg-opacity-5 dark:bg-opacity-100 p-4 rounded-lg border border-gray-200 dark:border-transparent hover:shadow-lg transition-all">
          <img src="/postgresql.png" alt="PostgreSQL" className="w-12 h-12" />
          <p className="text-center mt-2">PostgreSQL</p>
        </div>
        <div className="bg-[#1A2332] dark:bg-[#1A2332] bg-opacity-5 dark:bg-opacity-100 p-4 rounded-lg border border-gray-200 dark:border-transparent hover:shadow-lg transition-all">
          <img src="/mysql.png" alt="MySQL" className="w-12 h-12" />
          <p className="text-center mt-2">MySQL</p>
        </div>
        <div className="bg-[#1A2332] dark:bg-[#1A2332] bg-opacity-5 dark:bg-opacity-100 p-4 rounded-lg border border-gray-200 dark:border-transparent hover:shadow-lg transition-all">
          <img src="/git.png" alt="Git" className="w-12 h-12" />
          <p className="text-center mt-2">Git</p>
        </div>
        <div className="bg-[#1A2332] dark:bg-[#1A2332] bg-opacity-5 dark:bg-opacity-100 p-4 rounded-lg border border-gray-200 dark:border-transparent hover:shadow-lg transition-all">
          <img src="/django.png" alt="Django" className="w-12 h-12" />
          <p className="text-center mt-2">Django</p>
        </div>
        <div className="bg-[#1A2332] dark:bg-[#1A2332] bg-opacity-5 dark:bg-opacity-100 p-4 rounded-lg border border-gray-200 dark:border-transparent hover:shadow-lg transition-all">
          <img src="/docker.png" alt="Docker" className="w-12 h-12" />
          <p className="text-center mt-2">Docker</p>
        </div>
        <div className="bg-[#1A2332] dark:bg-[#1A2332] bg-opacity-5 dark:bg-opacity-100 p-4 rounded-lg border border-gray-200 dark:border-transparent hover:shadow-lg transition-all">
          <img src="/fastapi.png" alt="FastAPI" className="w-12 h-12" />
          <p className="text-center mt-2">FastAPI</p>
        </div>
        <div className="bg-[#1A2332] dark:bg-[#1A2332] bg-opacity-5 dark:bg-opacity-100 p-4 rounded-lg border border-gray-200 dark:border-transparent hover:shadow-lg transition-all">
          <img src="/postman.png" alt="Postman" className="w-12 h-12" />
          <p className="text-center mt-2">Postman</p>
        </div>
      </div>
    </div>
  )
} 