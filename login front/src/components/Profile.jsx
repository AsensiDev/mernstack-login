import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Profile = () => {
    const { user, logout } = useContext(AuthContext); // Usamos logout del contexto

    if (!user) {
      return <p className="text-center text-xl">Cargando perfil...</p>;
    }

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      <p><strong>Nombre:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <button
          onClick={logout}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Cerrar sesión
        </button>
    </div>
  );
};

export default Profile;
