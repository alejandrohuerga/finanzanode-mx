<div align="center">

# 📈 MxCalc

**Calculadora de interés compuesto para México, con impuestos e inflación reales**

MxCalc proyecta el crecimiento de tu inversión aplicando el ISR estimado y la inflación, para que sepas no solo cuánto tendrás, sino cuánto podrás comprar realmente con ello.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2020+-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](#-licencia)
[![Demo](https://img.shields.io/badge/demo-mxcalc.com-2F4FE0?style=flat)](https://mxcalc.com)

</div>

---

## 📋 Tabla de contenidos

- [📈 MxCalc](#-mxcalc)
  - [📋 Tabla de contenidos](#-tabla-de-contenidos)
  - [🚀 ¿Qué es MxCalc?](#-qué-es-mxcalc)
  - [✨ Funcionalidades](#-funcionalidades)
  - [📸 Capturas de pantalla](#-capturas-de-pantalla)
  - [🧱 Stack tecnológico](#-stack-tecnológico)
  - [✅ Requisitos previos](#-requisitos-previos)
  - [⚙️ Instalación](#️-instalación)
  - [📜 Scripts disponibles](#-scripts-disponibles)
  - [🧮 Cómo funciona el cálculo](#-cómo-funciona-el-cálculo)
  - [📁 Estructura del proyecto](#-estructura-del-proyecto)
  - [🌍 Despliegue](#-despliegue)
  - [🗺️ Roadmap](#️-roadmap)
  - [👤 Autor](#-autor)
  - [📄 Licencia](#-licencia)

---

## 🚀 ¿Qué es MxCalc?

La mayoría de calculadoras de interés compuesto muestran un número bonito y ya. **MxCalc** va un paso más allá: está pensada específicamente para el ahorrador/inversor en México, y descuenta el **ISR estimado** y la **inflación** del resultado final, mostrando la diferencia entre tu **saldo nominal** y tu **poder adquisitivo real**.

El objetivo es simple: que cualquier persona, sin conocimientos financieros previos, entienda en segundos cuánto va a crecer realmente su dinero — no solo sobre el papel.

🔗 **Demo en vivo:** [mxcalc.com](https://mxcalc.com)

---

## ✨ Funcionalidades

- 🧮 **Calculadora de interés compuesto** — inversión inicial, aportación mensual, tasa anual, inflación estimada y plazo en años.
- 💰 **Cálculo ajustado a impuestos** — descuenta el ISR estimado año a año, no solo al final.
- 📉 **Poder adquisitivo real** — compara el saldo nominal contra el valor ajustado a inflación.
- 📊 **Gráfica de proyección** — visualiza la evolución de tu inversión a lo largo del tiempo.
- 📋 **Tabla de desglose anual** — saldo nominal, poder real, interés generado e ISR estimado, año por año.
- ⚖️ **Comparativa de escenarios** — compara tu resultado frente a alternativas típicas del mercado mexicano (CETES, SOFIPOS, S&P 500).
- 📄 **Exportación a PDF** — descarga tu proyección en un documento listo para guardar o imprimir.
- 💬 **Compartir por WhatsApp** — envía tu resultado directamente desde la app.
- 📚 **Guías educativas** — contenido explicativo sobre interés compuesto, CETES y SOFIPOS para quienes están empezando a invertir.

---

## 📸 Capturas de pantalla

<div align="center">

| Calculadora | Resultado y proyección |
|---|---|
| ![Formulario de la calculadora](/public/MxCalccalculadora.png) | ![Gráfica de resultado](/public/ResultadoMxCalcGrafica.png) |

</div>

> 💡 Sustituye las imágenes de `docs/screenshots/` por tus propias capturas antes de publicar el repositorio.

---

## 🧱 Stack tecnológico

| Capa | Tecnología |
|---|---|
| Librería UI | [React 18](https://react.dev) |
| Lenguaje | JavaScript (ES2020+) |
| Bundler / dev server | Vite |
| Gráficas | Librería de charting para React (p. ej. Recharts / Chart.js) |
| Exportación a PDF | Librería de generación de PDF en cliente (p. ej. jsPDF / react-to-print) |
| Hosting | Vercel |

> ⚠️ Ajusta esta tabla con las librerías exactas que usa tu `package.json` (bundler, librería de gráficas y de PDF concretas), para que quien clone el repo sepa exactamente qué se instala.

---

## ✅ Requisitos previos

- Node.js >= 18
- npm (o yarn/pnpm, según prefieras)

No requiere base de datos ni backend: **toda la lógica corre en el navegador del usuario.**

---

## ⚙️ Instalación

```bash
# 1. Clona el repositorio
git clone https://github.com/alejandrohuerga/finanzanode-mx.git
cd finanzanode-mx

# 2. Instala las dependencias
npm install

# 3. Arranca el entorno de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` (puerto por defecto de Vite).

---

## 📜 Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Levanta el servidor de desarrollo con recarga en caliente |
| `npm run build` | Genera la versión de producción en la carpeta `dist/` |
| `npm run preview` | Sirve localmente el build de producción para probarlo antes de desplegar |

> Ajusta esta tabla si tu `package.json` define scripts distintos (por ejemplo, `npm start` en lugar de `npm run dev` si el proyecto usa Create React App).

---

## 🧮 Cómo funciona el cálculo

1. El usuario introduce inversión inicial, aportación mensual, tasa anual estimada, inflación esperada y número de años.
2. La app calcula el **saldo nominal** año a año aplicando la fórmula de interés compuesto con aportaciones periódicas.
3. Sobre cada interés generado, se estima el **ISR** correspondiente y se descuenta del rendimiento.
4. El saldo nominal se ajusta con la **inflación acumulada** para obtener el **poder adquisitivo real**.
5. Los resultados se muestran en gráfica, tabla de desglose anual, y una comparativa frente a otras alternativas de inversión típicas en México.

> 📝 Si tienes la fórmula exacta o las fuentes usadas para el % de ISR/inflación estimados, es buena idea documentarlas aquí para que el proyecto inspire más confianza a quien lo revise.

---

## 📁 Estructura del proyecto

```
finanzanode-mx/
├── public/
├── src/
│   ├── components/       # Formulario, gráfica, tabla de resultados, etc.
│   ├── utils/             # Lógica de cálculo (interés compuesto, ISR, inflación)
│   ├── pages/              # Calculadora, guía, contacto
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```

> Ajusta este árbol a la estructura real de tu proyecto si difiere.

---

## 🌍 Despliegue

El proyecto está desplegado en **Vercel** y disponible en [mxcalc.com](https://mxcalc.com).

Para desplegar tu propia versión:

```bash
npm install -g vercel
vercel
```

O conectando el repositorio de GitHub directamente desde el dashboard de [vercel.com](https://vercel.com) (Vercel detecta un proyecto Vite/React automáticamente).

---

## 🗺️ Roadmap

- [ ] Guardar simulaciones del usuario (requeriría backend/autenticación)
- [ ] Más escenarios de inversión comparables
- [ ] Modo oscuro
- [ ] Soporte multi-moneda

---

## 👤 Autor

**Alejandro de la Huerga Fernández**
Desarrollador Web Full Stack

- GitHub: [@alejandrohuerga](https://github.com/alejandrohuerga)
- LinkedIn: [Alejandro de la Huerga Fernández](https://www.linkedin.com/in/alejandroalejandrodelahuergafernandez)
- Email: alejandrohuerga.dev@gmail.com

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [`LICENSE`](./LICENSE) para más detalles.

<div align="center">

Hecho con ☕ y React

</div>