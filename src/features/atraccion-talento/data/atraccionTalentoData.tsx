import type { Opcion, Vacante } from "../types/atraccionTalento.types";

export const ubicaciones: Opcion[] = [
    { id: "salinas-victoria", nombre: "Salinas Victoria, Nuevo León" },
    { id: "monterrey", nombre: "Monterrey, Nuevo León" },
    { id: "leon", nombre: "León, Guanajuato" },
    { id: "chihuahua", nombre: "Chihuahua" },
];

export const areas: Opcion[] = [
    { id: "administracion", nombre: "Administración" },
    { id: "arquitectura", nombre: "Arquitectura" },
    { id: "operaciones", nombre: "Ingeniería" },
    { id: "practicantes", nombre: "Practicantes" },
];
export const vacantes: Vacante[] = [
    {
        id: "analista-tesoreria",
        area: "Administración",
        titulo: "Analista de Tesorería",
        ubicacion: "Salinas Victoria, Nuevo León",
        descripcion: "Licenciatura afín. Portales bancarios, conciliaciones, pagos y flujo de efectivo.",
        perfil: [
            "Experiencia mínima de 2 años en tesorería",
            "Manejo de portales bancarios y conciliaciones",
            "Excel intermedio-avanzado",
        ],
    },
    {
        id: "arquitecto-proyectos",
        area: "Arquitectura",
        titulo: "Arquitecto de Proyectos",
        ubicacion: "Monterrey, Nuevo León",
        descripcion: "Licenciatura en Arquitectura. Manejo de AutoCAD y Revit, coordinación de obra.",
        perfil: [
            "Experiencia en diseño y supervisión de obra",
            "Dominio de AutoCAD y Revit",
            "Coordinación con contratistas y proveedores",
        ],
    },
    {
        id: "ingeniero-operaciones",
        area: "Ingeniería",
        titulo: "Ingeniero de Operaciones",
        ubicacion: "León, Guanajuato",
        descripcion: "Ingeniería industrial o afín. Mejora de procesos, indicadores y seguimiento de producción.",
        perfil: [
            "Experiencia en mejora continua y manufactura",
            "Análisis de indicadores de producción",
            "Disponibilidad para trabajar por turnos",
        ],
    },
    {
        id: "practicante-administracion",
        area: "Practicantes",
        titulo: "Practicante Administrativo",
        ubicacion: "Chihuahua",
        descripcion: "Estudiante de últimos semestres. Paquetería Office y disposición para aprender.",
        perfil: [
            "Cursar 7.º semestre o superior",
            "Manejo de paquetería Office",
            "Proactividad y ganas de aprender",
        ],
    },
];
