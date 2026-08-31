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

## Bruno

La colección de Bruno está en la carpeta `AnimalsAPi`. Para abrirla, selecciona **Open Collection** en Bruno y elige esa carpeta, que contiene `opencollection.yml` y las cuatro solicitudes CRUD en YAML.

## Migraciones

La migración inicial está en `src/migrations`. TypeORM controla la tabla mediante migraciones y no mediante sincronización automática.

```bash
npm run migration:generate
npm run migration:run
npm run migration:revert
```

## Verificación

```bash
npm run build
npm run test
```
