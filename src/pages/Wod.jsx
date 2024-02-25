import React, { useState, useEffect } from "react";

const CharacterViewer = () => {
  const [characterData, setCharacterData] = useState(null);

  useEffect(() => {
    // Obtener los datos del localStorage cuando el componente se monta
    const storedData = localStorage.getItem("characterData");
    if (storedData) {
      setCharacterData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div>
      <h2>Personaje</h2>
      {characterData ? (
        <div>
          <p>Nombre: {characterData.identidad.nombre}</p>
          <p>Descripción: {characterData.identidad.descripcion}</p>
          <p>Concepto Principal: {characterData.aspectos.concepto}</p>
          <p>Complicación: {characterData.aspectos.complicacion}</p>
          {/* Mostrar otras habilidades y datos */}
        </div>
      ) : (
        <p>No hay datos disponibles.</p>
      )}
    </div>
  );
};

export default CharacterViewer;
