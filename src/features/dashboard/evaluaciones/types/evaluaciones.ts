export interface EvaluacionCreate {
    titulo: string;
}

export interface EvaluacionRead {
    idEvaluacion: number;
    titulo: string;
    activo: boolean;
    fechaCreacion: string
    fechaActualizacion: string;
}

export interface EvaluacionUpdate {
    titulo?: string;
}