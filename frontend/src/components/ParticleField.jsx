import { useEffect, useRef } from 'react';
import './ParticleField.css';

const MAX_RIPPLES = 2;
const RIPPLE_TRIGGER_DISTANCE = 42;
const LINK_DISTANCE = 210;
const RIPPLE_LIFETIME = 5.2;
const RIPPLE_SPEED = 78;

const ParticleField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointer = { lastRippleX: null, lastRippleY: null };
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let particles = [];
    let ripples = [];
    let animationFrame = null;
    let lastFrameTime = 0;

    const createParticles = () => {
      const count = Math.min(150, Math.max(45, Math.round((width * height) / 19000)));
      const columns = Math.ceil(Math.sqrt(count * (width / Math.max(height, 1))));
      const rows = Math.ceil(count / columns);
      const cellWidth = width / columns;
      const cellHeight = height / rows;
      const cells = Array.from({ length: columns * rows }, (_, index) => index)
        .sort(() => Math.random() - 0.5)
        .slice(0, count);

      particles = cells.map((cell) => {
        const column = cell % columns;
        const row = Math.floor(cell / columns);
        return {
          x: (column + 0.18 + Math.random() * 0.64) * cellWidth,
          y: (row + 0.18 + Math.random() * 0.64) * cellHeight,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          radius: 0.8 + Math.random() * 0.65,
        };
      });
    };

    const resize = () => {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createParticles();
      draw(0, 0, false);
    };

    const handlePointerMove = (event) => {
      if (pointer.lastRippleX === null) {
        pointer.lastRippleX = event.clientX;
        pointer.lastRippleY = event.clientY;
        return;
      }

      const dx = event.clientX - pointer.lastRippleX;
      const dy = event.clientY - pointer.lastRippleY;
      if (dx * dx + dy * dy < RIPPLE_TRIGGER_DISTANCE * RIPPLE_TRIGGER_DISTANCE) return;

      ripples.push({ x: event.clientX, y: event.clientY, age: 0 });
      if (ripples.length > MAX_RIPPLES) ripples.shift();
      pointer.lastRippleX = event.clientX;
      pointer.lastRippleY = event.clientY;
      draw(0, 0, false);
      startAnimation();
    };

    function draw(timestamp, deltaSeconds, continueAnimation = true) {
      const isDark = document.documentElement.classList.contains('dark');
      const rippleColor = getComputedStyle(canvas)
        .getPropertyValue('--particle-ripple-rgb')
        .split(',')
        .map((channel) => Number(channel.trim()));
      const pointColor = isDark ? [255, 255, 255] : [0, 0, 0];
      const lineColor = isDark ? [255, 255, 255] : [0, 0, 0];
      const mixColor = (base, strength) => base
        .map((channel, index) => Math.round(channel + (rippleColor[index] - channel) * strength))
        .join(', ');
      context.clearRect(0, 0, width, height);

      if (!reducedMotion.matches) {
        particles.forEach((particle) => {
          particle.x += particle.vx * deltaSeconds * 60;
          particle.y += particle.vy * deltaSeconds * 60;
          if (particle.x < -4) particle.x = width + 4;
          if (particle.x > width + 4) particle.x = -4;
          if (particle.y < -4) particle.y = height + 4;
          if (particle.y > height + 4) particle.y = -4;
        });

        ripples.forEach((ripple) => {
          ripple.age += deltaSeconds;
        });
        ripples = ripples.filter((ripple) => ripple.age < RIPPLE_LIFETIME);
      }

      const positions = particles.map((particle) => {
        let offsetX = 0;
        let offsetY = 0;
        let rippleInfluence = 0;
        for (const ripple of ripples) {
          const dx = particle.x - ripple.x;
          const dy = particle.y - ripple.y;
          const distance = Math.hypot(dx, dy) || 1;
          const waveRadius = ripple.age * RIPPLE_SPEED;
          const waveDistance = (distance - waveRadius) / 68;
          const fade = Math.max(0, 1 - ripple.age / RIPPLE_LIFETIME);
          const wave = Math.exp(-(waveDistance * waveDistance)) * fade * fade;
          const displacement = wave * 9;
          offsetX += (dx / distance) * displacement;
          offsetY += (dy / distance) * displacement;
          rippleInfluence = Math.max(rippleInfluence, wave);
        }
        return {
          x: particle.x + offsetX,
          y: particle.y + offsetY,
          rippleInfluence,
        };
      });

      const pointAlpha = isDark ? 0.78 : 0.72;
      // const lineAlpha = isDark ? 0.28 : 0.24;
      const lineAlpha = isDark ? 0.48 : 0.42;

      for (let i = 0; i < particles.length; i += 1) {
        const point = positions[i];
        for (let j = i + 1; j < particles.length; j += 1) {
          const neighbor = positions[j];
          const dx = point.x - neighbor.x;
          const dy = point.y - neighbor.y;
          const distanceSquared = dx * dx + dy * dy;
          if (distanceSquared >= LINK_DISTANCE * LINK_DISTANCE) continue;
          const opacity = (1 - Math.sqrt(distanceSquared) / LINK_DISTANCE) * lineAlpha;
          const lineRippleInfluence = Math.max(point.rippleInfluence, neighbor.rippleInfluence);
          context.strokeStyle = `rgba(${mixColor(lineColor, lineRippleInfluence * 0.72)}, ${opacity})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(neighbor.x, neighbor.y);
          context.stroke();
        }

        context.fillStyle = `rgba(${mixColor(pointColor, point.rippleInfluence * 0.82)}, ${pointAlpha})`;
        context.beginPath();
        context.arc(point.x, point.y, particles[i].radius, 0, Math.PI * 2);
        context.fill();
      }

      if (continueAnimation && !reducedMotion.matches && !document.hidden) {
        lastFrameTime = timestamp;
        animationFrame = window.requestAnimationFrame((nextTimestamp) => {
          const delta = Math.min((nextTimestamp - lastFrameTime) / 1000 || 0, 0.04);
          draw(nextTimestamp, delta);
        });
      }
    }

    const startAnimation = () => {
      if (animationFrame !== null || reducedMotion.matches || document.hidden) return;
      lastFrameTime = performance.now();
      animationFrame = window.requestAnimationFrame((timestamp) => draw(timestamp, 0));
    };

    const stopAnimation = () => {
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
      animationFrame = null;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) stopAnimation();
      else startAnimation();
    };

    const handleMotionPreferenceChange = () => {
      stopAnimation();
      ripples = [];
      if (reducedMotion.matches) draw(0, 0);
      else startAnimation();
    };

    const themeObserver = new MutationObserver(() => {
      draw(0, 0, false);
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    resize();
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    reducedMotion.addEventListener('change', handleMotionPreferenceChange);
    draw(0, 0, false);
    startAnimation();

    return () => {
      stopAnimation();
      themeObserver.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      reducedMotion.removeEventListener('change', handleMotionPreferenceChange);
    };
  }, []);
  // JSX syntax is disabled and should be enabled via the parser options
  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />;
};

export default ParticleField;