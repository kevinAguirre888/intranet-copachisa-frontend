// Body que se envía al backend para cambiar el estado (activo/inactivo) de un recurso.
export interface EstadoUpdate {
    activo: boolean;
}

// Props del componente de UI SwitchEstado.
export interface SwitchEstadoProps {
    activo: boolean; // Estado actual del recurso.
    onConfirmar: (nuevoValor: boolean) => void; // Se ejecuta al confirmar; el componente padre decide qué hacer con el nuevo valor.
    nombreRecurso?: string; // Nombre del recurso con artículo para los textos, ej. "la evaluación".
}
