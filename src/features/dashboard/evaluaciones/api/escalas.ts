import { api } from "@/shared/api/client";
import type { Escala } from "../types/evaluaciones";

const BASE_URL = `api/v1/escalas-evaluaciones`;

export const obtenerEscalas = async (): Promise<Escala[]> => {
    const { data } = await api.get<Escala[]>(BASE_URL);
    return data;
};
