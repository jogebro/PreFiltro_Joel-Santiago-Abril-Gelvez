import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Form, Input} from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import './css/form.css'

export default function CreateGame() {
  let history = useHistory();
  const [clasificacionData, setClasificacionData] = useState([])

  const [Nombre, setNombre] = useState();
  const [Plataforma, setPlataforma] = useState();
  const [Genero, setGenero] = useState();
  const [Clasificacion, setClasificacion] = useState();
  const [Descripcion, setDescripcion] = useState();
  const [Precio, setPrecio] = useState();
  const [Stock, setStock] = useState();

  useEffect(() => {
    axios.get('http://localhost:4000/clasificaciones')
      .then((res) => {
        console.log(res.data);
        setClasificacionData(res.data);
      });
  }, []);

  const addGameData = () => {
    const gameData = {
      Nombre,
      Plataforma,
      Genero,
      Clasificacion,
      Descripcion,
      Precio,
      Stock
    };

    axios.post('http://localhost:4000/games', gameData)
      .then(() => {
        history.push('/tienda');
      })
      .catch((error) => {
        console.error('Error al agregar el juego:', error);
      });
  }

  return (
    <div>
      <Form id="formulario" className='create-form'>
        <Form.Field className='input'>
          <label>Nombre</label>
          <Input placeholder='Nombre' value={Nombre} onChange={(e) => setNombre(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Plataforma</label>
          <Input placeholder='Plataforma' value={Plataforma} onChange={(e) => setPlataforma(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Género</label>
          <Input placeholder='Genero' value={Genero} onChange={(e) => setGenero(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Clasificación</label>
            <select value={Clasificacion} onChange={(e) => setClasificacion(e.target.value)}>
                <option disabled selected>Seleccione...</option>
                {clasificacionData.map((data)=>(
                    <option value={data._id}>{data.Clasificacion}</option>
                ))}
            </select>
        </Form.Field>
        <Form.Field>
          <label>Descripción</label>
          <Input placeholder='Descripción' value={Descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Precio</label>
          <Input type='number' placeholder='Precio' value={Precio} onChange={(e) => setPrecio(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Stock</label>
          <Input type='number' placeholder='Stock' value={Stock} onChange={(e) => setStock(e.target.value)} />
        </Form.Field>
        <Button type='submit' onClick={addGameData}>Guardar</Button>
      </Form>
    </div>
  );
}
