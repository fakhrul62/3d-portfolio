import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import React, { useRef } from 'react'

const HeroCamera = ({children}) => {
    const groupRef = useRef();
    useFrame((state, delta)=>{
        easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta)
    })
  return (
    <group>{children}</group>
  )
}

export default HeroCamera