import React, { useEffect, useState } from 'react';

const fieldLabels = {
  frontend: '프론트엔드',
  backend: '백엔드',
  database: '데이터베이스'
};

const levelLabels = {
  advanced: '익숙하고 편해요',
  intermediate: '어느정도 사용해요',
  beginner: '사용해본 적 있어요'
};

const SectionSkills = () => {
  const [skills, setSkills] = useState({});
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  useEffect(() => {
    fetch('/data/skills.json')
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  const getIconPath = (name) => {
    const base = `/icons/${name}.svg`;
    const dark = `/icons/${name}-Dark.svg`;
    const light = `/icons/${name}-Light.svg`;
    return isDark ? [dark, base, light] : [light, base, dark];
  };

  return (
    <section id="skills" className="container mt-5 text-white" style={{ marginLeft: '260px' }}>
      <h2 className="mb-4">🛠 기술 스택</h2>
      {Object.entries(skills).map(([field, levels]) => (
        <div key={field} className="mb-5">
          <h4 className="text-warning">{fieldLabels[field]}</h4>
          {['advanced', 'intermediate', 'beginner'].map((levelKey) => (
            levels[levelKey]?.length > 0 && (
              <div key={levelKey} className="mb-3">
                <h6 className="text-info">{levelLabels[levelKey]}</h6>
                <div className="d-flex flex-wrap gap-3">
                  {levels[levelKey].map((tech, index) => {
                    const [try1, try2, try3] = getIconPath(tech);
                    return (
                      <div key={index} className="d-flex align-items-center gap-2">
                        <img
                            src={try1}
                            alt={tech}
                            title={tech}
                            onError={(e) => {
                                const target = e.currentTarget;
                                const tried = [try1, try2, try3, '/icons/undefined.svg'];
                                let index = tried.findIndex((v) => v === target.src.replace(window.location.origin, ''));
                                if (index < tried.length - 1) {
                                target.src = tried[index + 1];
                                }
                            }}
                            style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                        />

                        <span>{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )
          ))}
        </div>
      ))}
    </section>
  );
};

export default SectionSkills;
