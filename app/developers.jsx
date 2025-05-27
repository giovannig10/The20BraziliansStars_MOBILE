import React from 'react';

const TeamPage = () => {
  const teamMembers = [
    { id: 1, name: "Giovanni Gonçalves", role: "Product Owner", avatar: "/img/developers/giovanni.person.jpeg" },
    { id: 2, name: "João Gianoni", role: "Scrum Master", avatar: "/img/developers/joao.person.jpeg" },
    { id: 3, name: "Pedro Oliveira", role: "Membro Desenvolvedor", avatar: "/img/developers/pedro.person.jpeg" },
    { id: 4, name: "Vinícius Valverde", role: "Membro Desenvolvedor", avatar: "/img/developers/vinicius.person.jpeg" },
    { id: 5, name: "Gabriela Fernanda", role: "Membro Desenvolvedor", avatar: "/img/developers/gabriela.person.jpeg" },
    { id: 6, name: "Vitor Sampaio", role: "Membro Desenvolvedor", avatar: "/img/developers/vitor.person.jpeg" }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.grid}>
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              style={{
                ...styles.item,
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div style={styles.card}>
                <img 
                  src={member.avatar} 
                  alt={member.name} 
                  style={styles.img}
                  onError={(e) => {
                    console.log(`Erro ao carregar imagem para ${member.name}`);
                    // Substitui por uma imagem placeholder ou esconde
                    e.target.src = '/img/placeholder-avatar.png';
                  }}
                />
                <div style={styles.info}>
                  <h3 style={styles.name}>{member.name}</h3>
                  <p style={styles.role}>{member.role}</p>  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    width: '100%',
    overflowY: 'auto',
    scrollBehavior: 'smooth',
    backgroundColor: '#DBDCDD',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
  },
  content: {
    padding: '32px 24px 80px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '24px',
    maxWidth: '384px',
    margin: '0 auto'
  },
  item: {
    transition: 'all 0.5s ease'
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '24px',
    borderRadius: '16px',
    background: '#1A2F5A',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer'
  },
  img: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid white',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  info: {
    flex: 1,
    minWidth: 0
  },
  name: {
    fontSize: '18px',
    fontWeight: 600,
    color: 'white',
    marginBottom: '4px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textShadow: '0 1px 2px rgba(0,0,0,0.3)'
  },
  role: {
    fontSize: '14px',
    color: 'white',
    opacity: 0.8,
    fontWeight: 500,
    textShadow: '0 1px 2px rgba(0,0,0,0.2)'
  },
};

export default TeamPage;