import React, { useState, useEffect } from "react";

const LocalStorageViewer = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Obtener y parsear los datos del Local Storage al cargar el componente
    const storedCharacters = localStorage.getItem("characters");
    if (storedCharacters) {
      setCharacters(JSON.parse(storedCharacters));
    }
  }, []);

  const handleDeleteCharacter = (id) => {
    // Eliminar el personaje con el ID proporcionado
    const updatedCharacters = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(updatedCharacters);
    // Actualizar el Local Storage con los personajes actualizados
    localStorage.setItem("characters", JSON.stringify(updatedCharacters));
  };

  return (
    <div>
      <h2>Datos almacenados en Local Storage:</h2>
      {characters.map((character) => (
        <div key={character.id}>
          <h3>Ficha de Fate de {character.nombre}</h3>
          <p>
            <strong>Nombre:</strong> {character.nombre}
          </p>
          <p>
            <strong>Descripción:</strong> {character.descripcion}
          </p>
          <p>
            <strong>Concepto Principal:</strong> {character.concepto}
          </p>
          <p>
            <strong>Complicación:</strong> {character.complicacion}
          </p>
          <p>
            <strong>Consecuencias Leves:</strong>{" "}
            {character["consecuencias.leve"]}
          </p>
          <p>
            <strong>Consecuencias Moderadas:</strong>{" "}
            {character["consecuencias.moderada"]}
          </p>
          <p>
            <strong>Consecuencias Graves:</strong>{" "}
            {character["consecuencias.grave"]}
          </p>
          <h4>
            <strong>Habilidades:</strong>
          </h4>
          <ul>
            {Object.entries(character).map(([key, value]) => {
              if (typeof value === "object" && !Array.isArray(value)) {
                return (
                  <li key={key}>
                    <strong>{key}:</strong>
                    <ul>
                      {Object.entries(value).map(([subKey, subValue]) => (
                        <li key={subKey}>
                          {subKey}: {subValue}
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              return null;
            })}
          </ul>
          <p>
            <strong>Estrés Físico:</strong>{" "}
            {JSON.stringify(character.estresFisico)}
          </p>
          <p>
            <strong>Estrés Mental:</strong>{" "}
            {JSON.stringify(character.estresMental)}
          </p>
          <button onClick={() => handleDeleteCharacter(character.id)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

export default LocalStorageViewer;
