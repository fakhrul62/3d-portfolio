import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

const ReactLogo =(props)=> {
  const { nodes, materials } = useGLTF('/3d-portfolio/models/react.glb')
  return (
    <Float  floatIntensity={1}>
      <group position={[8, 8, 0]} scale={0.3} {...props}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.5}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/3d-portfolio/models/react.glb')

export default ReactLogo;