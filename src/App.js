import './App.css';
import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { useSpring, a } from 'react-spring/three';

const Box = () => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const props = useSpring({
    scale: active ? [5, 5, 5] : [1, 1, 1],
    color: hovered ? 'pink' : 'grey',
  });

  return (
    <a.mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={props.scale}>
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <a.meshBasicMaterial attach='material' color={props.color} />
    </a.mesh>
  );
};

function App() {
  return (
    <Canvas id='root'>
      <Box />
    </Canvas>
  );
}

export default App;
