const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'HTML/CSS', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Ruby on Rails', 'Express', 'Ruby', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'Pusher', 'Nessus'],
    },
  ];

  return (
    <div className="bg-muted py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
