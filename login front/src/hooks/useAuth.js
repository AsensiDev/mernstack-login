import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

// Hook para acceder al contexto
const useAuth = () => useContext(AuthContext);

export default useAuth;