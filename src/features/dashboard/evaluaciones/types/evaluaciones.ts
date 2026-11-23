// Tipos de respuestas de la evaluación
export interface TipoRespuesta {
  idTipoRespuesta: number;
  tipo: string;
  activo: boolean;
}

// Escala del catálogo. "valor" llega como string (ej. "1.00") porque el backend usa Decimal
export interface Escala {
  idEscala: number;
  valor: string;
  nivel: string;
  parametro: string;
  activo: boolean;
  fechaCreacion: string;
  fechaActualizacion: string;
}

// Contenido en una sección
export interface Contenido {
  idContenido: number;
  orden: number;
  texto: string;
  activo: boolean;
  tipoRespuesta: TipoRespuesta;
}

// Sección de la evaluación
export interface Seccion {
  idSeccion: number;
  titulo: string;
  descripcion: string;
  orden: number;
  activo: boolean;
  contenidos: Contenido[];
}

// Esqumeas CRUD de una evaluación
export interface EvaluacionCreate {
  titulo: string;
}

export interface EvaluacionRead {
  idEvaluacion: number;
  titulo: string;
  activo: boolean;
  fechaCreacion: string;
  fechaActualizacion: string;
}

export interface EvaluacionUpdate {
  titulo?: string;
}

export interface EvaluacionCompleta {
  idEvaluacion: number;
  titulo: string;
  activo: boolean;
  secciones: Seccion[];
  fechaCreacion: string;
  fechaActualizacion: string;
}
