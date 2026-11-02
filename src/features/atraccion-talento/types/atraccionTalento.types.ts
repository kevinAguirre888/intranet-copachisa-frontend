export interface CardProps {
    area?: string;
    titulo?: string;
    ubicacion?: string;
    descripcion?: string;
    perfil?: string[];
}


export interface Opcion {
    id: string;
    nombre: string;
}


export interface Vacante {
    id: string;
    area: string;
    titulo: string;
    ubicacion: string;
    descripcion: string;
    perfil: string[];
}
