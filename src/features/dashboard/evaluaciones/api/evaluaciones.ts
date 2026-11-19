import { api } from "@/shared/api/client";
import type { EvaluacionCreate, EvaluacionRead, EvaluacionUpdate } from "../types/evaluaciones";
import type { EstadoUpdate } from "@/shared/types/estados";

const BASE_URL = `api/v1/evaluaciones`;


export const obtenerEvaluaciones = async (): Promise<EvaluacionRead[]> => {
    const { data } = await api.get<EvaluacionRead[]>(BASE_URL);
    return data;
};


export const buscarEvaluacionPorId = async (idEvaluacion: number): Promise<EvaluacionRead> => {
    const { data } = await api.get<EvaluacionRead>(`${BASE_URL}/${idEvaluacion}`);
    return data;
};


export const crearEvaluacion = async (body: EvaluacionCreate): Promise<EvaluacionRead> => {
    const { data } = await api.post<EvaluacionRead>(BASE_URL, body);
    return data;
};


export const actualizarEvaluacion = async (idEvaluacion: number, body: Partial<EvaluacionUpdate>) => {
    const { data } = await api.patch<EvaluacionRead>(`${BASE_URL}/${idEvaluacion}`, body);
    return data;
};


export const eliminarEvaluacion = async (idEvaluacion: number) => {
    await api.delete(`${BASE_URL}/${idEvaluacion}`);
};


export const actualizarEstadoEvaluacion = async (idEvaluacion: number, body: Partial<EstadoUpdate>) => {
    const { data } = await api.patch<EvaluacionRead>(`${BASE_URL}/${idEvaluacion}/estado`, body);
    return data;
}