// TagSphere.jsx
import React, { useEffect, useState, useRef } from 'react';
import '../styles/TagSphere.css';
import  icons  from '../hooks/data/icons';

const TagSphere = () => {
    const [radius, setRadius] = useState(150);
    const [autoRotate] = useState(true);
    const [rotateSpeed, setRotateSpeed] = useState(1);
    const containerRef = useRef(null);
    const mouseXRef = useRef(0);
    const mouseYRef = useRef(0);

    const handleSpeedChange = (newSpeed) => {
        setRotateSpeed(newSpeed);
    };

    const adjustRadius = (newRadius) => {
        setRadius(newRadius);
    };


    useEffect(() => {
        const container = containerRef.current;
        let tags = Array.from(container.getElementsByClassName('tag'));
        let positions = [];
        let angleX = 0;
        let angleY = 0;
        let lastX = 0;
        let lastY = 0;
        let animationFrameId;

        // Generate initial positions on the sphere
        tags.forEach((_, i) => {
            const phi = Math.acos(-1 + (2 * i) / tags.length);
            const theta = Math.sqrt(tags.length * Math.PI) * phi;
            const x = radius * Math.cos(theta) * Math.sin(phi);
            const y = radius * Math.sin(theta) * Math.sin(phi);
            const z = radius * Math.cos(phi);
            positions.push({ x, y, z });
        });

        const update = () => {
            if (autoRotate) {
                angleX += rotateSpeed * 0.002;
                angleY += rotateSpeed * 0.002;
            }

            const deltaX = mouseXRef.current - lastX;
            const deltaY = mouseYRef.current - lastY;

            angleX += deltaY * 0.0005;
            angleY += deltaX * 0.0005;

            lastX = mouseXRef.current;
            lastY = mouseYRef.current;

            tags.forEach((tag, i) => {
                let { x, y, z } = positions[i];

                // Rotate around X axis
                let y1 = y * Math.cos(angleX) - z * Math.sin(angleX);
                let z1 = y * Math.sin(angleX) + z * Math.cos(angleX);

                // Rotate around Y axis
                let x1 = x * Math.cos(angleY) - z1 * Math.sin(angleY);
                let z2 = x * Math.sin(angleY) + z1 * Math.cos(angleY);

                const scale = 0.6 + z2 / (2 * radius);
                const alpha = 0.5 + z2 / (2 * radius);

                tag.style.transform = `translate3d(${x1}px, ${y1}px, 0) scale(${scale})`;
                tag.style.opacity = alpha;
            });

            animationFrameId = requestAnimationFrame(update);
        };

        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            mouseXRef.current = e.clientX - rect.left;
            mouseYRef.current = e.clientY - rect.top;
        };

        container.addEventListener('mousemove', handleMouseMove);
        animationFrameId = requestAnimationFrame(update);

        return () => {
            cancelAnimationFrame(animationFrameId);
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, [radius, autoRotate, rotateSpeed]);

    return (
        <div className="tag-sphere-container">
            <div className="controls">
                <input
                    type="range"
                    min="0"
                    max="5"
                    step="0.1"
                    value={rotateSpeed}
                    onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
                />
                <input
                    type="range"
                    min="100"
                    max="300"
                    value={radius}
                    onChange={(e) => adjustRadius(parseInt(e.target.value))}
                />
            </div>

            <div ref={containerRef} className="tag-sphere">
                {icons.map((IconItem, index) => (
                    <div key={index} className="tag">
                        <IconItem.Icon size={45} color={IconItem.color} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TagSphere;
