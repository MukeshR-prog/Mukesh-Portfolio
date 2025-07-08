import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'Bannari Amman Institute of Technology (BIT), Sathyamangalam, Erode',
    period: '2023 - 2027',
    score: '8.37',
  },
  {
    degree: 'Senior Secondary (XII)',
    institution: 'Kongu Vellalar Matriculation Higher Secondary School, Tirpur',
    period: '2022 - 2023',
    score: '90.5%',
  },
  {
    degree: 'Secondary (X)',
    institution: "Kongu Vellalar Matriculation Higher Secondary School, Tirpur",
    period: '2020 - 2021',
    score: '90%',
  },
];

export function Education() {
  return (
    <SectionBackground>
      <section id="education" className="pt-16">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="A solid academic foundation fueling my passion for tech innovation.">Education</SectionTitle>
          <div className="max-w-5xl mx-auto space-y-10">
            {education.map((edu, index) => (
              <EducationCard key={edu.degree} {...edu} isLast={index === education.length - 1} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
