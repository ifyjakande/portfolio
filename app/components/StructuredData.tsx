export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ife Akande",
    "url": "https://ifeakande.com",
    "image": "https://ifeakande.com/profile.jpg",
    "sameAs": [
      "https://linkedin.com/in/akande-ifeoluwa", 
      "https://github.com/ifyjakande",      
    ],
    "jobTitle": "Data Engineer & ML Solutions Architect",
    "description": "Data Engineer and Machine Learning Solutions Architect specializing in building scalable data solutions and ML systems",
    "skills": [
      "Data Engineering",
      "Machine Learning",
      "AWS",
      "Python",
      "Cloud Architecture"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 