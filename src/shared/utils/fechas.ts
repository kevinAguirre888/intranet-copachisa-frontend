const formateadorFecha = new Intl.DateTimeFormat("es-MX", {
    dateStyle: "medium",
});

// Recibe una fecha ISO (ej. "2026-09-09T00:03:56") y devuelve solo la fecha formateada (ej. "9 sept 2026").
export const formatearFecha = (iso: string) => formateadorFecha.format(new Date(iso));
