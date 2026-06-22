type Props = {
  resume: any;
};

export const ResumePreview = ({ resume }: Props) => {
  return (
    <div
      id="resumeToDownload"
      className="mx-auto max-w-4xl bg-white p-4 shadow-lg font-sans text-gray-900"
    >
      <div>
        {/* Header */}
        <div className="pb-4 text-center">
          <h1 className="text-3xl font-bold">{resume.header?.fullName}</h1>

          <p className="mt-2 text-sm">
            {resume.header?.email} | {resume.header?.phone} |{" "}
            {resume.header?.location}
          </p>

          <p className="text-sm">
            <a href={resume.header.linkedin}>{resume.header?.linkedin}</a>
          </p>

          <p className="text-sm">
            <a href={resume.header.github}>{resume.header?.github}</a>
          </p>
        </div>

        {/* Summary */}
        <section className="mt-6">
          <h2 className="border-b font-bold uppercase">Professional Summary</h2>
          <p className="mt-2 whitespace-pre-line">
            {resume.professionalSummary}
          </p>
        </section>

        {/* Skills */}
        <section className="mt-6">
          <h2 className="border-b font-bold uppercase">Technical Skills</h2>

          <p className="mt-2">
            <strong>Technical:</strong> {resume.skills?.technical?.join(", ")}
          </p>

          <p className="mt-2">
            <strong>Tools:</strong> {resume.skills?.tools?.join(", ")}
          </p>

          <p className="mt-2">
            <strong>Soft Skills:</strong>{" "}
            {resume.skills?.softSkills?.join(", ")}
          </p>
        </section>

        {/* Experience */}
        <section className="mt-6">
          <h2 className="border-b font-bold uppercase">
            Professional Experience
          </h2>

          {resume.workExperience?.map((exp: any, index: number) => (
            <div key={index} className="mt-4">
              <h3 className="font-semibold">{exp.role}</h3>

              <p>
                {exp.company} | {exp.location}
              </p>

              <p className="text-sm text-gray-600">{exp.duration}</p>

              <ul className="mt-2 list-disc pl-5">
                {exp.bulletPoints?.map((point: string, i: number) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section className="mt-6">
          <h2 className="border-b font-bold uppercase">Projects</h2>

          {resume.projects?.map((project: any, index: number) => (
            <div key={index} className="mt-4">
              <h3 className="font-semibold">{project.name}</h3>

              <p>
                <strong>Technologies:</strong>{" "}
                {project.technologies?.join(", ")}
              </p>

              <ul className="mt-2 list-disc pl-5">
                {project.description?.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <p className="mt-2">
                <strong>Impact:</strong> {project.impact}
              </p>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mt-6">
          <h2 className="border-b font-bold uppercase">Education</h2>

          {resume.education?.map((edu: any, index: number) => (
            <div key={index}>
              <h3>{edu.degree}</h3>
              <p>{edu.institution}</p>
              <p>
                {edu.year} | Grade: {edu.grade}
              </p>
            </div>
          ))}
        </section>

        {/* Certifications */}
        <section className="mt-6">
          <h2 className="border-b font-bold uppercase">Certifications</h2>

          <ul className="list-disc pl-5">
            {resume.certifications?.map((cert: any, index: number) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </section>

        {/* Achievements */}
        <section className="mt-6">
          <h2 className="border-b font-bold uppercase">Achievements</h2>

          <p className="mt-2 whitespace-pre-line">{resume.achievements}</p>
        </section>
      </div>
    </div>
  );
};
