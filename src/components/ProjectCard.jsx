import React from 'react';

const ProjectCard = ({ project }) => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const resolveIcon = (tech) => {
    const base = `/icons/${tech}.svg`;
    const dark = `/icons/${tech}-Dark.svg`;
    const light = `/icons/${tech}-Light.svg`;

    const img = new Image();
    img.src = base;

    // 아이콘 선택 우선순위
    if (isDark) {
      return [base, dark, light];
    } else {
      return [base, light, dark];
    }
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{project.period}</h6>
        <p className="card-text">{project.description}</p>

        <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
          {project.stack.map((tech, index) => {
            const [primary, fallback1, fallback2] = resolveIcon(tech);
            return (
              <img
                key={index}
                src={primary}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = fallback1;
                  e.currentTarget.onerror = () => {
                    e.currentTarget.src = fallback2;
                  };
                }}
                alt={tech}
                title={tech}
                style={{ width: '24px', height: '24px' }}
              />
            );
          })}
        </div>

        <ul className="mb-0">
          {project.features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
