import React from 'react';

const SectionIntro = () => {
  return (
    <section
      id="intro"
      className="container text-white"
      style={{ marginLeft: '260px', padding: '60px 40px' }}
    >
      <div className="d-flex flex-column flex-md-row align-items-center gap-4">
        <img
          src="/images/profile.png"
          alt="Profile"
          style={{
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0 0 10px rgba(255,255,255,0.1)'
          }}
        />
        <div>
          <h1 className="fw-bold mb-2" style={{ fontSize: '2rem' }}>
            이재형
          </h1>
          <p className="mb-1">2002.05.31</p>
          <div className="mb-2">
            <span className="badge rounded-pill bg-primary me-2">Frontend</span>
            <span className="badge rounded-pill bg-success">Backend</span>
          </div>
          <p style={{ maxWidth: '500px', lineHeight: '1.6', fontSize: '1rem' }}>
            안녕하세요, <strong>개발로 세상을 바꾸고 싶은 개발자</strong> 이재형입니다.
            <br />
            사용자의 편의성과 기술적 구조를 모두 고려한 개발을 지향합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionIntro;
