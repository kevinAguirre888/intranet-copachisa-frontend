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

// Props del diálogo de confirmación ConfirmarEstado (lo usan SwitchEstado y los botones de activar/desactivar).
export interface ConfirmarEstadoProps {
    isOpen: boolean; // Indica si el diálogo está abierto.
    onOpenChange: (abierto: boolean) => void; // Cambia el estado de apertura del diálogo.
    activo: boolean; // Estado actual del recurso; el diálogo propone el contrario.
    onConfirmar: (nuevoValor: boolean) => void; // Se ejecuta al confirmar; el componente padre decide qué hacer con el nuevo valor.
    nombreRecurso?: string; // Nombre del recurso con artículo para los textos, ej. "la sección".
}
