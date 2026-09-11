import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const objectsRef = useRef<THREE.Object3D[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current = renderer;
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight,
    );
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Create floating cubes and objects
    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const material = new THREE.MeshPhongMaterial({
      color: new THREE.Color(0x0ea5e9),
      shininess: 100,
    });

    for (let i = 0; i < 3; i++) {
      const cube = new THREE.Mesh(geometry, material.clone());
      cube.position.x = (Math.random() - 0.5) * 8;
      cube.position.y = (Math.random() - 0.5) * 8;
      cube.position.z = (Math.random() - 0.5) * 5;
      cube.rotation.x = Math.random() * Math.PI;
      cube.rotation.y = Math.random() * Math.PI;
      scene.add(cube);
      objectsRef.current.push(cube);
    }

    // Create octahedrons
    const octaGeometry = new THREE.OctahedronGeometry(0.4);
    const octaMaterial = new THREE.MeshPhongMaterial({
      color: new THREE.Color(0x8b5cf6),
      shininess: 100,
    });

    for (let i = 0; i < 2; i++) {
      const octahedron = new THREE.Mesh(octaGeometry, octaMaterial.clone());
      octahedron.position.x = (Math.random() - 0.5) * 8;
      octahedron.position.y = (Math.random() - 0.5) * 8;
      octahedron.position.z = (Math.random() - 0.5) * 5;
      scene.add(octahedron);
      objectsRef.current.push(octahedron);
    }

    // Create tetrahedrons
    const tetraGeometry = new THREE.TetrahedronGeometry(0.4);
    const tetraMaterial = new THREE.MeshPhongMaterial({
      color: new THREE.Color(0x06b6d4),
      shininess: 100,
    });

    for (let i = 0; i < 2; i++) {
      const tetrahedron = new THREE.Mesh(tetraGeometry, tetraMaterial.clone());
      tetrahedron.position.x = (Math.random() - 0.5) * 8;
      tetrahedron.position.y = (Math.random() - 0.5) * 8;
      tetrahedron.position.z = (Math.random() - 0.5) * 5;
      scene.add(tetrahedron);
      objectsRef.current.push(tetrahedron);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x0ea5e9, 1, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x8b5cf6, 1, 100);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Store initial velocities
    const velocities = objectsRef.current.map(() => ({
      x: (Math.random() - 0.5) * 0.01,
      y: (Math.random() - 0.5) * 0.01,
      z: (Math.random() - 0.5) * 0.01,
      rx: (Math.random() - 0.5) * 0.002,
      ry: (Math.random() - 0.5) * 0.002,
      rz: (Math.random() - 0.5) * 0.002,
    }));

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      objectsRef.current.forEach((obj, i) => {
        const vel = velocities[i];
        obj.position.x += vel.x;
        obj.position.y += vel.y;
        obj.position.z += vel.z;

        obj.rotation.x += vel.rx;
        obj.rotation.y += vel.ry;
        obj.rotation.z += vel.rz;

        // Wrap around screen
        if (obj.position.x > 6) obj.position.x = -6;
        if (obj.position.x < -6) obj.position.x = 6;
        if (obj.position.y > 6) obj.position.y = -6;
        if (obj.position.y < -6) obj.position.y = 6;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 opacity-40 pointer-events-none"
    />
  );
}
