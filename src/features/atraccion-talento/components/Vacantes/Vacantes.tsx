import { ListBox, Select, SearchField } from "@heroui/react";
import { areas, ubicaciones, vacantes } from "../../data/atraccionTalentoData";
import Card from "../Card/Card";

const Vacantes = () => {
    return (
        <section id="vacantes" className="bg-zinc-200/75 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
                        Oportunidades
                    </p>

                    <h2 className="mt-1 text-3xl/tight font-bold text-zinc-900 sm:text-4xl">
                        Encuentra tu próximo reto
                    </h2>

                    <p className="mt-4 text-lg text-pretty text-zinc-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <SearchField name="search" className="w-full">
                        <SearchField.Group>
                            <SearchField.SearchIcon />
                            <SearchField.Input className="w-full" placeholder="Buscar puesto o palabra clave" />
                            <SearchField.ClearButton />
                        </SearchField.Group>
                    </SearchField>

                    <Select className="w-full" placeholder="Todas las ubicaciones">
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                {ubicaciones.map(({ id, nombre }) => (
                                    <ListBox.Item key={id} id={id} textValue={nombre}>
                                        {nombre}
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                ))}
                            </ListBox>
                        </Select.Popover>
                    </Select>

                    <Select className="w-full" placeholder="Todas las áreas">
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
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {vacantes.map((vacante) => (
                        <Card key={vacante.id} {...vacante} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Vacantes;
