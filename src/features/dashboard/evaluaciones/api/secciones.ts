import { api } from "@/shared/api/client";
import type { SeccionEvaluacionRead, SeccionEvaluacionUpdate } from "../types/secciones";
import type { EstadoUpdate } from "@/shared/types/estados";

const BASE_URL = `api/v1/secciones-evaluaciones`;

export const obtenerSeccionesPorEvaluacion = async (idEvaluacion: number): Promise<SeccionEvaluacionRead[]> => {
    const { data } = await api.get<SeccionEvaluacionRead[]>(`${BASE_URL}/`, {
        params: { id_evaluacion: idEvaluacion },
    });
    return data;
};


// Activa o desactiva una sección: PATCH /secciones-evaluaciones/{id}/estado
export const actualizarEstadoSeccion = async (idSeccion: number, body: EstadoUpdate): Promise<SeccionEvaluacionRead> => {
    const { data } = await api.patch<SeccionEvaluacionRead>(`${BASE_URL}/${idSeccion}/estado`, body);
    return data;
};


// Actualiza parcialmente una sección: PATCH /secciones-evaluaciones/{id}
export const actualizarSeccion = async (idSeccion: number, body: Partial<SeccionEvaluacionUpdate>): Promise<SeccionEvaluacionRead> => {
    const { data } = await api.patch<SeccionEvaluacionRead>(`${BASE_URL}/${idSeccion}`, body);
    return data;
};
