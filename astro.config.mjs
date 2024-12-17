import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    routes : [
        {path : 'services' , component:'./src/pages/services.astro'} ,
        {path : 'home' , component : './src/pages/index.astro'},
        {path : 'pricing' , component : './src/pages/pricing.astro'},
        {path : 'contact' , component : './src/pages/contact.astro'},
        {path : 'login' , component : './src/pages/login.astro'},
    ],
});
