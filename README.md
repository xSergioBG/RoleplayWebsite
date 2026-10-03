# RoleplayWebsite

Aplicación web con React, Vite y Ant Design.

## Instalación

```sh
git clone https://github.com/xSergioBG/RoleplayWebsite.git
cd RoleplayWebsite
npm ci
npm run dev
```

Consulta `package.json` y el lockfile para las versiones del proyecto. La compatibilidad de estas dependencias debe comprobarse antes de migrarlas.

## Scripts declarados

| Comando | Implementación |
| --- | --- |
| `npm run dev` | `vite` |
| `npm run build` | `vite build` |
| `npm run lint` | `eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0` |
| `npm run preview` | `vite preview` |

## Organización

- [public/](public/): recursos estáticos.
- [src/](src/): código de la aplicación.

## Estado

Repositorio de código fuente. El README no acredita despliegue, integración externa o compilación verificada. Revisa los requisitos específicos del framework y prueba los flujos antes de publicar.

## Referencia anterior


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
