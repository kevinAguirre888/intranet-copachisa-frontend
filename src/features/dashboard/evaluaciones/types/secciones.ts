export interface SeccionEvaluacionRead {
  idSeccion: number;
  titulo: string;
  descripcion: string;
  orden: number;
  activo: boolean;
  idEvaluacion: number;
  fechaCreacion: string;
  fechaActualizacion: string;
}

// Esquema de actualización de una sección. Ambos campos son opcionales, pero el backend no acepta valores nulos
// titulo: 5 a 100 caracteres | descripcion: 5 a 255 caracteres
export interface SeccionEvaluacionUpdate {
  titulo?: string;
  descripcion?: string;
}
