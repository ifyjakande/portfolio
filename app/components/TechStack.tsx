import Image from 'next/image'

export default function TechStack() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Technical Expertise</h2>
      
      <h3 className="text-xl font-semibold mb-4">Data Engineering & Cloud</h3>
      <div className="grid grid-cols-4 gap-4 md:grid-cols-8 mb-8">
        <div className="bg-[#1A2332] p-4 rounded-lg">
          <Image src="/aws.png" alt="AWS" width={50} height={50} quality={75} loading="eager" />
          <p className="text-center mt-2">AWS</p>
        </div>
        <div className="bg-[#1A2332] p-4 rounded-lg">
          <Image src="/airflow.png" alt="Airflow" width={50} height={50} quality={75} loading="eager" />
          <p className="text-center mt-2">Airflow</p>
        </div>
        <div className="bg-[#1A2332] p-4 rounded-lg">
          <Image src="/snowflake.png" alt="Snowflake" width={50} height={50} quality={75} loading="eager" />
          <p className="text-center mt-2">Snowflake</p>
        </div>
        <div className="bg-[#1A2332] p-4 rounded-lg">
          <Image src="/databricks.png" alt="Databricks" width={50} height={50} quality={75} loading="eager" />
          <p className="text-center mt-2">Databricks</p>
        </div>
        <div className="bg-[#1A2332] p-4 rounded-lg">
          <Image src="/azure.png" alt="Azure" width={50} height={50} quality={75} loading="eager" />
          <p className="text-center mt-2">Azure</p>
        </div>
        <div className="bg-[#1A2332] p-4 rounded-lg">
          <Image src="/hadoop.png" alt="Hadoop" width={50} height={50} quality={75} loading="eager" />
          <p className="text-center mt-2">Hadoop</p>
        </div>
        <div className="bg-[#1A2332] p-4 rounded-lg">
          <Image src="/spark.png" alt="Spark" width={50} height={50} quality={75} loading="eager" />
          <p className="text-center mt-2">Spark</p>
        </div>
        <div className="bg-[#1A2332] p-4 rounded-lg">
          <Image src="/gcp.png" alt="GCP" width={50} height={50} quality={75} loading="eager" />
          <p className="text-center mt-2">GCP</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-4">Development & Databases</h3>
      <div className="grid grid-cols-4 gap-4 md:grid-cols-8">
        <div className="bg-[#1A2332] p-4 rounded-lg">
          <Image src="/python.png" alt="Python" width={50} height={50} quality={75} loading="lazy" />
          <p className="text-center mt-2">Python</p>
        </div>
        <div className="bg-[#1A2332] p-4 rounded-lg">
          <Image src="/postgresql.png" alt="PostgreSQL" width={50} height={50} quality={75} loading="lazy" />
          <p className="text-center mt-2">PostgreSQL</p>
        </div>
        <div className="bg-[#1A2332] p-4 rounded-lg">
          <Image src="/mysql.png" alt="MySQL" width={50} height={50} quality={75} loading="lazy" />
          <p className="text-center mt-2">MySQL</p>
        </div>
        <div className="bg-[#1A2332] p-4 rounded-lg">
          <Image src="/git.png" alt="Git" width={50} height={50} quality={75} loading="lazy" />
          <p className="text-center mt-2">Git</p>
        </div>
        <div className="bg-[#1A2332] p-4 rounded-lg">
          <Image src="/django.png" alt="Django" width={50} height={50} quality={75} loading="lazy" />
          <p className="text-center mt-2">Django</p>
        </div>
        <div className="bg-[#1A2332] p-4 rounded-lg">
          <Image src="/docker.png" alt="Docker" width={50} height={50} quality={75} loading="lazy" />
          <p className="text-center mt-2">Docker</p>
        </div>
        <div className="bg-[#1A2332] p-4 rounded-lg">
          <Image src="/fastapi.png" alt="FastAPI" width={50} height={50} quality={75} loading="lazy" />
          <p className="text-center mt-2">FastAPI</p>
        </div>
        <div className="bg-[#1A2332] p-4 rounded-lg">
          <Image src="/postman.png" alt="Postman" width={50} height={50} quality={75} loading="lazy" />
          <p className="text-center mt-2">Postman</p>
        </div>
      </div>
    </div>
  )
} 