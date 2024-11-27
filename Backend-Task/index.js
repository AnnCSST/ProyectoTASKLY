const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express().use(bodyParser.json());
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Datos de ejemplo de perfiles
let profiles = [
  { 
    id: 1, 
    name: 'Ann Castro', 
    email: 'ann16@example.com', 
    location: 'Bogotá, Colombia', 
    image: '/Profile1.jpg',
    tasks: { inProgress: 3, pending: 5, completed: 10 }
  },
  { 
    id: 2, 
    name: 'Sebaspte', 
    email: 'seba@example.com', 
    location: 'Medellín, Colombia', 
    image: '/Profile2.jpg',
    tasks: { inProgress: 2, pending: 4, completed: 8 }
  },
  { 
    id: 3, 
    name: 'Pedro Sánchez', 
    email: 'pedro@example.com', 
    location: 'Cali, Colombia', 
    image: '/Profile3.jpg',
    tasks: { inProgress: 1, pending: 2, completed: 6 }
  },
  {  
    id: 4, 
    name: 'Victor Dorado', 
    email: 'puchitus@example.com', 
    location: 'Cali, Colombia', 
    image: '/Profile4.jpg',
    tasks: { inProgress: 1, pending: 2, completed: 6 }
  }
];

app.use(express.static(path.join(__dirname, 'public')));


app.get('/profiles', (req, res) => {
  res.json(profiles);
});


app.get('/profiles/:id', (req, res) => {
  const profileId = parseInt(req.params.id, 10);
  const profile = profiles.find(p => p.id === profileId);
  if (profile) {
    res.json(profile);
  } else { 
    res.status(404).send('Perfil no encontrado');
  }
});


app.post('/profiles', (req, res) => {
  const newProfile = req.body;

  
  if (!newProfile.image) {
    newProfile.image = '/Profile5.jpg'; 
  }

  // Asignar un nuevo id y agregar el perfil
  newProfile.id = profiles.length ? profiles[profiles.length - 1].id + 1 : 1;  
  profiles.push(newProfile);  
  res.status(201).json(newProfile); 
});


app.put('/profiles/:id', (req, res) => {
  const profileId = parseInt(req.params.id, 10);
  const profileIndex = profiles.findIndex(p => p.id === profileId);
  if (profileIndex !== -1 ) {
    profiles[profileIndex] = req.body;
    profiles[profileIndex].id = profileId;
    res.json(profiles[profileIndex]);
  } else {
    res.status(404).send('Perfil no encontrado');
  }
});

app.delete('/profiles/:id', (req, res) => {
  const profileId = parseInt(req.params.id, 10);
  profiles = profiles.filter(p => p.id !== profileId);
  res.status(204).send();
});

app.listen(port, () => { console.log(`Servidor corriendo en http://localhost:${port}`); });

