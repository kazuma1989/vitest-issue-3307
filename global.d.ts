/// <reference types="vite/client" />

declare module '*.svg?.tsx' {
  const exports: React.FC<React.SVGAttributes<SVGElement>>
  export default exports
}
