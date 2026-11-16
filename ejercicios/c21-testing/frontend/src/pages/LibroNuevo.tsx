import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { libroSchema, type LibroValidado } from '../schemas/libroSchema';
import { apiFetch } from '../services/api';
import { useState } from 'react';

const IMG_PLACEHOLDER = 'https://placehold.co/300x400?text=Libro';

export function LibroNuevo() {
  const navigate = useNavigate();
  const [errorApi, setErrorApi] = useState<string | null>(null);

  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LibroValidado>({
    resolver: zodResolver(libroSchema) as any,
    defaultValues: {
      titulo: '',
      autor: '',
      precio: 0,
      disponible: true
    }
  });

  const onSubmit: SubmitHandler<LibroValidado> = async (data) => {
    setErrorApi(null);
    try {
      await apiFetch('/libros', {
        method: 'POST',
        body: JSON.stringify({
          titulo: data.titulo,
          descripcion: "Libro agregado desde el panel", // Si el backend lo pide
          precio: Number(data.precio),
          imagen: IMG_PLACEHOLDER,
          disponible: data.disponible,
          autorId: 1 
        })
      });

      navigate('/catalogo');
    } catch (e) {
      
      setErrorApi(e instanceof Error ? e.message : 'Error al crear el libro');
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '500px' }}>
      <h2>Nuevo libro (Zod + API Real)</h2>
      
      {errorApi && <Alert variant="danger">{errorApi}</Alert>}
      
      <Form onSubmit={handleSubmit(onSubmit)}>
       
        <Form.Group className="mb-3" controlId="titulo">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            isInvalid={!!errors.titulo}
            {...register('titulo')}
          />
          <Form.Control.Feedback type="invalid">
            {errors.titulo?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="autor">
          <Form.Label>Autor ID / Nombre</Form.Label>
          <Form.Control
            type="text"
            isInvalid={!!errors.autor}
            {...register('autor')}
          />
          <Form.Control.Feedback type="invalid">
            {errors.autor?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="precio">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            isInvalid={!!errors.precio}
            {...register('precio')}
          />
          <Form.Control.Feedback type="invalid">
            {errors.precio?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="disponible">
          <Form.Check
            type="checkbox"
            label="Disponible"
            {...register('disponible')}
          />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ backgroundColor: '#6f42c1', borderColor: '#6f42c1' }}>
          Guardar libro en la API
        </Button>
      </Form>
    </div>
  );
}

export default LibroNuevo;