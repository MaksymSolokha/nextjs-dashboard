import {defineConfig, globalIgnores} from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = defineConfig([
    ...nextVitals,
    globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
    {
        // ... other settings
        settings: {
            react: {
                // Explicitly define the React version
                version: "19" // Replace "19" with your actual React version (e.g., "18.0", "detect" can also work if the plugin is updated)
            }
        },
        // ...
    },
]);

export default eslintConfig;
