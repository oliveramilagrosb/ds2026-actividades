import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { libroSchema, type LibroValidado } from '../schemas/libroSchema';

const IMG_PLACEHOLDER = 'https://placehold.co/300x400?text=Libro';

// Definimos bien la forma que tiene la función onAgregar para que TS no proteste
interface Props {
  onAgregar: (libro: {
    id: number;
    titulo: string;
    autor: string;
    precio: number;
    imagen: string;
    disponible: boolean;
  }) => void;
}

export function LibroNuevo({ onAgregar }: Props) {
  const navigate = useNavigate();

  // Configuración de React Hook Form + Zod
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

  
  const onSubmit: SubmitHandler<LibroValidado> = (data) => {
    onAgregar({
      id: Date.now(), 
      titulo: data.titulo,
      autor: data.autor,
      precio: data.precio,
      imagen: IMG_PLACEHOLDER,
      disponible: data.disponible,
    });

    navigate('/catalogo');
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '500px' }}>
      <h2>Nuevo libro (Zod + RHF)</h2>
      
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
          <Form.Label>Autor</Form.Label>
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
          Agregar libro
        </Button>
      </Form>
    </div>
  );
}

export default LibroNuevo;