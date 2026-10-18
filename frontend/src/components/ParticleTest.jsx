import ParticleField from './ParticleField.jsx';

export default function ParticleTest() {
  return (
    <>
      <ParticleField />

      <main style={{
        position: 'relative',
        zIndex: 1,
        minHeight: '300vh',
        padding: '100px 40px',
        color: '#ffffff'
      }}>
        <h1>Particle Ripple Test</h1>
        <p>Move your cursor to see the ripple effect.</p>

        <section style={{ marginTop: '80vh' }}>
          <h2>Second Section</h2>
        </section>

        <section style={{ marginTop: '80vh' }}>
          <h2>Third Section</h2>
        </section>
      </main>
    </>
  );
}