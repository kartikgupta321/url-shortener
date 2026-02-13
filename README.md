# URL Shortener

Simple URL shortener application with a Spring Boot backend and a React (Vite) frontend.

## Project Structure

- `url-shortener-sb/` — Spring Boot backend (Java, Maven)
- `url-shortener-react/` — React frontend (Vite, npm)

## Features

- Create short URLs for long links
- Redirect short codes to original URLs
- User authentication (register/login)
- Dashboard to view and manage shortened URLs

## Tech Stack

- Backend: Java, Spring Boot, Maven
- Frontend: React, Vite, JavaScript
- Persistence: (configured in backend) — update `src/main/resources/application.properties`
- Optional: Dockerfile provided for container builds

## Prerequisites

- Java 17
- Node.js 16+ and npm
- Docker (optional)
- Git

## Setup & Run

From the repository root, the project contains two main subprojects. Run them separately for development.

1) Backend (Spring Boot)

Windows PowerShell:

```
cd url-shortener-sb
.\mvnw.cmd spring-boot:run
```

Unix / macOS:

```
cd url-shortener-sb
./mvnw spring-boot:run
```

Build package:

```
cd url-shortener-sb
./mvnw package    # or .\mvnw.cmd package on Windows
```

Configuration: see [url-shortener-sb/src/main/resources/application.properties](url-shortener-sb/src/main/resources/application.properties) to set server port, datasource, JWT secrets, or other properties.

2) Frontend (React + Vite)

```
cd url-shortener-react
npm install
npm run dev
```

Build production frontend:

```
npm run build
npm run preview
```

When running both apps locally, the frontend should call the backend API (CORS or proxy settings may be needed if the backend runs on a different port).

## Docker

There is a `Dockerfile` under `url-shortener-sb/` for building the backend image. Example build and run:

```
docker build -t url-shortener -f url-shortener-sb/Dockerfile .
docker run -p 8080:8080 url-shortener
```

Adjust ports or mount volumes as needed.

## API Examples

The project includes controllers: `AuthController`, `RedirectController`, `UrlMappingController`.

Common endpoints (adjust base path if configured):

- `POST /api/auth/register` — register a new user
- `POST /api/auth/login` — login and receive token
- `POST /api/urls` — create a new shortened URL (authenticated)
- `GET /api/urls` — list user's shortened URLs (authenticated)
- `GET /r/{shortCode}` — redirect to the original long URL