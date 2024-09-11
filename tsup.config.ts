import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/background/index.ts"],
    clean: true,
    format: ["esm"],
    target: 'esnext',
    splitting: false,
});
