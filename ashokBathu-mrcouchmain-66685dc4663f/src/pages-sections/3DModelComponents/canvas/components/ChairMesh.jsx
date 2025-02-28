import React from "react";
import * as THREE from "three";
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

const INITIAL_MTL = new THREE.MeshPhongMaterial({
  color: new THREE.Color(0xf1f1f1),
  shininess: 10
});

const INITIAL_MAP = [
  // { childID: "wall", mtl: INITIAL_MTL },
  // { childID: "ground", mtl: INITIAL_MTL },
  { childID: "body", mtl: INITIAL_MTL },
  { childID: "legs", mtl: INITIAL_MTL },
  { childID: "pillow", mtl: INITIAL_MTL },
  // { childID: "sofa_geo", mtl: INITIAL_MTL }
];

const initColor = (parent, type, mtl) => {
  console.log(parent, type, mtl, "mtlmtltmtlt");
  parent.traverse((o) => {
    if (o.isMesh && o.name.includes(type)) {
      o.castShadow = true;
      o.receiveShadow = true;
      o.material = mtl;
      o.nameID = type;
    }
  });
};

const ChairMesh = ({ newMaterialOpt, activeImage }) => {
  const productById = useSelector((state) => state?.ProductDetailsPage?.productsById);
  const { scene: theModel } = useGLTF("http://3.0.78.116:8080" + activeImage);
  // const { scene: theModel } = useGLTF(activeImage);
  const chair = useRef(theModel);

  console.log(productById, "newMaterialOpt");
  useEffect(
    () => void setMaterial(newMaterialOpt.activeOption, newMaterialOpt.newMTL),
    [newMaterialOpt.newMTL]
  );

  useEffect(() => {
    if (theModel) {
      for (let object of INITIAL_MAP) {
        initColor(theModel, object.childID, object.mtl);
      }
    }
  }, [theModel]);

  const setMaterial = (type, mtl) => {
    theModel.traverse((o) => {
      if (o.isMesh && o.nameID != null) {
        if (o.nameID === type) {
          o.material = mtl;
        }
      }
    });
  };

  return (
    <primitive
      ref={chair}
      object={theModel}
      scale={[2, 2, 2]}
      rotation={[0, Math.PI, 0]}
      position={[0, -1, 0]}
      receiveShadow
      castShadow
    ></primitive>
  );
};

export default ChairMesh;
