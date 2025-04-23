export const getProfile = (req, res) => {
    res.json({
      message: 'Acceso permitido a la ruta protegida',
      user: req.user
    });
  };