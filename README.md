# Instrumentos Financieros Bolivia

> Comparativa educativa de instrumentos financieros disponibles en Bolivia, con filtros por categoría, rendimiento, plazo, moneda y nivel de riesgo.

Este sitio estático ayuda a explorar referencias del mercado boliviano de forma clara y consultable. Está pensado como material educativo y de investigación inicial; no es una plataforma de inversión ni ofrece asesoramiento financiero.

## Qué incluye

- Tabla comparativa de instrumentos alternativos, fondos, emisiones soberanas, instrumentos corporativos y depósitos a plazo.
- Búsqueda por instrumento o fuente.
- Filtros por categoría y ordenamiento por rendimiento, nombre o riesgo.
- Referencias de rendimiento anualizado, moneda, plazo, riesgo y fuente.
- Explicación breve de la metodología de lectura.

## Aviso importante

La información puede cambiar sin aviso y puede no reflejar la oferta vigente de cada entidad. Los rendimientos, riesgos, plazos, liquidez, impuestos y condiciones deben verificarse directamente con la entidad emisora o la fuente oficial antes de tomar una decisión.

Nada en este repositorio constituye una recomendación, oferta, promesa de rendimiento ni asesoramiento financiero, legal o tributario.

## Uso local

No se requieren dependencias ni compilación. Clona el repositorio y abre `index.html` en un navegador moderno:

```powershell
git clone https://github.com/JulioGB01/Instrumentos-Financieros-Bolivia.git
cd Instrumentos-Financieros-Bolivia
start index.html
```

## Actualización de datos

Los registros comparativos residen actualmente en [`script.js`](script.js). Toda actualización debe incluir una fuente verificable, fecha de consulta y una revisión cuidadosa de las condiciones del producto. Evita presentar una tasa promocional, escalonada o variable como un rendimiento garantizado.

## Estructura

```text
.
├── index.html                              # Página y contenido accesible
├── styles.css                              # Diseño responsive
├── script.js                               # Datos, filtros y renderizado
├── Instrumentos-Financieros-Bolivia.html   # Archivo de referencia histórico
└── .github/workflows/static.yml            # Despliegue a GitHub Pages
```

## Publicación

El workflow incluido despliega el sitio a GitHub Pages cuando se actualiza la rama `main`. Activa GitHub Pages con **Settings → Pages → GitHub Actions** y confirma que el contenido publicado corresponde a la revisión más reciente de las fuentes.

## Contribuciones

Consulta [`CONTRIBUTING.md`](CONTRIBUTING.md) para proponer correcciones, nuevas fuentes o mejoras de documentación.