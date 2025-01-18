import Image from 'next/image'

export default function TechStack() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Technical Expertise</h2>
      
      <h3 className="text-xl font-semibold mb-4">Data Engineering & Cloud</h3>
      <div className="grid grid-cols-4 gap-4 md:grid-cols-8 mb-8">
        <div className="bg-white dark:bg-[#1A2332] p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-transparent">
          <img src="/aws.png" alt="AWS" className="w-12 h-12" />
          <p className="text-center mt-2 text-gray-700 dark:text-gray-200">AWS</p>
        </div>
        <div className="bg-white dark:bg-[#1A2332] p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-transparent">
          <img src="/airflow.png" alt="Airflow" className="w-12 h-12" />
          <p className="text-center mt-2 text-gray-700 dark:text-gray-200">Airflow</p>
        </div>
        <div className="bg-white dark:bg-[#1A2332] p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-transparent">
          <img src="/snowflake.png" alt="Snowflake" className="w-12 h-12" />
          <p className="text-center mt-2 text-gray-700 dark:text-gray-200">Snowflake</p>
        </div>
        <div className="bg-white dark:bg-[#1A2332] p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-transparent">
          <img src="/databricks.png" alt="Databricks" className="w-12 h-12" />
          <p className="text-center mt-2 text-gray-700 dark:text-gray-200">Databricks</p>
        </div>
        <div className="bg-white dark:bg-[#1A2332] p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-transparent">
          <img src="/azure.png" alt="Azure" className="w-12 h-12" />
          <p className="text-center mt-2 text-gray-700 dark:text-gray-200">Azure</p>
        </div>
        <div className="bg-white dark:bg-[#1A2332] p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-transparent">
          <img src="/hadoop.png" alt="Hadoop" className="w-12 h-12" />
          <p className="text-center mt-2 text-gray-700 dark:text-gray-200">Hadoop</p>
        </div>
        <div className="bg-white dark:bg-[#1A2332] p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-transparent">
          <img src="/spark.png" alt="Spark" className="w-12 h-12" />
          <p className="text-center mt-2 text-gray-700 dark:text-gray-200">Spark</p>
        </div>
        <div className="bg-white dark:bg-[#1A2332] p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-transparent">
          <img src="/gcp.png" alt="GCP" className="w-12 h-12" />
          <p className="text-center mt-2 text-gray-700 dark:text-gray-200">GCP</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-4">Development & Databases</h3>
      <div className="grid grid-cols-4 gap-4 md:grid-cols-8">
        <div className="bg-white dark:bg-[#1A2332] p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-transparent">
          <img src="/python.png" alt="Python" className="w-12 h-12" />
          <p className="text-center mt-2 text-gray-700 dark:text-gray-200">Python</p>
        </div>
        <div className="bg-white dark:bg-[#1A2332] p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-transparent">
          <img src="/postgresql.png" alt="PostgreSQL" className="w-12 h-12" />
          <p className="text-center mt-2 text-gray-700 dark:text-gray-200">PostgreSQL</p>
        </div>
        <div className="bg-white dark:bg-[#1A2332] p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-transparent">
          <img src="/mysql.png" alt="MySQL" className="w-12 h-12" />
          <p className="text-center mt-2 text-gray-700 dark:text-gray-200">MySQL</p>
        </div>
        <div className="bg-white dark:bg-[#1A2332] p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-transparent">
          <img src="/git.png" alt="Git" className="w-12 h-12" />
          <p className="text-center mt-2 text-gray-700 dark:text-gray-200">Git</p>
        </div>
        <div className="bg-white dark:bg-[#1A2332] p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-transparent">
          <img src="/django.png" alt="Django" className="w-12 h-12" />
          <p className="text-center mt-2 text-gray-700 dark:text-gray-200">Django</p>
        </div>
        <div className="bg-white dark:bg-[#1A2332] p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-transparent">
          <img src="/docker.png" alt="Docker" className="w-12 h-12" />
          <p className="text-center mt-2 text-gray-700 dark:text-gray-200">Docker</p>
        </div>
        <div className="bg-white dark:bg-[#1A2332] p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-transparent">
          <img src="/fastapi.png" alt="FastAPI" className="w-12 h-12" />
          <p className="text-center mt-2 text-gray-700 dark:text-gray-200">FastAPI</p>
        </div>
        <div className="bg-white dark:bg-[#1A2332] p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-transparent">
          <img src="/postman.png" alt="Postman" className="w-12 h-12" />
          <p className="text-center mt-2 text-gray-700 dark:text-gray-200">Postman</p>
        </div>
      </div>
    </div>
  )
} 