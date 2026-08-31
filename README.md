# API Animales

API CRUD de animales creada con NestJS, PostgreSQL y TypeORM.

## Requisitos

- Node.js y npm.
- Docker Desktop ejecutándose.
- Bruno para probar las solicitudes.

## Configuración

1. Instala las dependencias:

   ```bash
   npm install
   ```

2. Revisa `.env`. El archivo contiene la conexión local configurada en `docker-compose.yaml`. Si no existe, copia `.env.example` y asígnale los valores correspondientes.

3. Inicia PostgreSQL:

   ```bash
   docker compose up -d
   ```

4. Aplica la estructura de la base de datos:

   ```bash
   npm run migration:run
   ```

5. Inicia la API:

   ```bash
   npm run start:dev
   ```

La aplicación queda disponible en `http://localhost:3000`.

## Endpoints

| Método | Ruta | Descripción |
| --- | --- | --- |
| POST | `/animals` | Crea un animal. |
| GET | `/animals` | Lista todos los animales. |
| PATCH | `/animals/:id` | Actualiza los campos enviados de un animal. |
| DELETE | `/animals/:id` | Elimina un animal. |

El cuerpo para crear un animal es:

```json
{
  "nombre": "Luna",
  "especie": "Canis lupus familiaris",
  "raza": "Mestiza",
  "edad": 3,
  "peso": 12.5
}
```

`raza` es opcional. `nombre` y `especie` no pueden estar vacíos; `edad` debe ser un entero mayor o igual que cero y `peso` debe ser mayor que cero.

## Migraciones

La migración inicial está en `src/migrations`. TypeORM controla la tabla mediante migraciones y no mediante sincronización automática.

```bash
npm run migration:generate
npm run migration:run
npm run migration:revert
```

## Bruno

Abre la carpeta `bruno` como colección en Bruno y selecciona el ambiente `Local`.

1. Ejecuta `Crear animal` y guarda el `id` de la respuesta.
2. Cambia `animalId` en el ambiente `Local` por ese valor.
3. Ejecuta `Listar animales`, `Actualizar animal` y `Eliminar animal`, en ese orden.

Esta secuencia es la recomendada para el video de funcionamiento: enseña la solicitud, su respuesta y el cambio reflejado al listar animales.

## Verificación

```bash
npm run build
npm run test
```
