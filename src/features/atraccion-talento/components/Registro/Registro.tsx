import type { SyntheticEvent } from "react";
import { Button, Checkbox, FieldError, Form, Input, Label, ListBox, Select, TextField } from "@heroui/react";
import { areas, vacantes } from "../../data/atraccionTalentoData";

const TALENT_POOL_ID = "talent-pool";

const vacantesInteres = [
    { id: TALENT_POOL_ID, nombre: "Base de talento / Talent pool" },
    ...vacantes.map(({ id, titulo }) => ({ id, nombre: titulo })),
];

const Registro = () => {
    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const datos = Object.fromEntries(new FormData(e.currentTarget));
        // TODO: enviar `datos` (incluye el archivo `cv`) a la API cuando esté disponible
        console.log(datos);
    };

    return (
        <section id="registro" className="py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <h2 className="mt-1 text-3xl/tight font-bold text-zinc-900 sm:text-4xl">
                        Registra tu perfil
                    </h2>

                    <p className="mt-4 text-lg text-pretty text-zinc-600">
                        Postúlate a una vacante o comparte tu perfil para futuras oportunidades.
                    </p>
                </div>

                <Form
                    onSubmit={handleSubmit}
                    className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 rounded-2xl border border-zinc-200 p-6 md:grid-cols-2"
                >
                    <TextField name="nombre" isRequired className="w-full">
                        <Label className="font-bold">Nombre completo</Label>
                        <Input />
                        <FieldError />
                    </TextField>

                    <TextField name="correo" type="email" isRequired className="w-full">
                        <Label className="font-bold">Correo electrónico</Label>
                        <Input />
                        <FieldError />
                    </TextField>

                    <TextField name="telefono" type="tel" isRequired className="w-full">
                        <Label className="font-bold">Teléfono</Label>
                        <Input />
                        <FieldError />
                    </TextField>

                    <TextField name="ciudad" isRequired className="w-full">
                        <Label className="font-bold">Ciudad de residencia</Label>
                        <Input />
                        <FieldError />
                    </TextField>

                    <Select name="especialidad" isRequired className="w-full" placeholder="Seleccionar / Select">
                        <Label className="font-bold">Especialidad</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                {areas.map(({ id, nombre }) => (
                                    <ListBox.Item key={id} id={id} textValue={nombre}>
                                        {nombre}
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                ))}
                            </ListBox>
                        </Select.Popover>
                    </Select>

                    <TextField name="experiencia" type="number" isRequired className="w-full">
                        <Label className="font-bold">Años de experiencia</Label>
                        <Input min={0} />
                        <FieldError />
                    </TextField>

                    <Select
                        name="vacante"
                        isRequired
                        defaultValue={TALENT_POOL_ID}
                        className="w-full md:col-span-2"
                    >
                        <Label className="font-bold">Vacante de interés</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                {vacantesInteres.map(({ id, nombre }) => (
                                    <ListBox.Item key={id} id={id} textValue={nombre}>
                                        {nombre}
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                ))}
                            </ListBox>
                        </Select.Popover>
                    </Select>

                    <div className="flex w-full flex-col gap-1 md:col-span-2">
                        <label htmlFor="cv" className="text-sm font-bold text-zinc-900">
                            CV (PDF o Word)
                        </label>
                        <input
                            id="cv"
                            name="cv"
                            type="file"
                            required
                            accept=".pdf,.doc,.docx"
                            className="w-full rounded-xl border border-zinc-200 p-3 text-zinc-900 file:mr-3 file:cursor-pointer file:rounded-md file:border-0 file:bg-zinc-200 file:px-3 file:py-1 file:font-medium file:text-zinc-900 hover:file:bg-zinc-300"
                        />
                    </div>

                    <Checkbox name="privacidad" isRequired className="md:col-span-2">
                        <Checkbox.Content className="items-start">
                            <Checkbox.Control className="mt-0.5">
                                <Checkbox.Indicator />
                            </Checkbox.Control>
                            <Label className="font-bold">
                                Acepto el aviso de privacidad y el tratamiento de mis datos para reclutamiento.
                            </Label>
                        </Checkbox.Content>
                    </Checkbox>

                    <Button
                        type="submit"
                        className="w-fit rounded-lg bg-copachisa px-6 font-bold text-zinc-900 hover:bg-copachisa/85 md:col-span-2"
                    >
                        Registrar mi perfil
                    </Button>
                </Form>
            </div>
        </section>
    )
}

export default Registro;
