import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
    experimental: {
        optimizeCss: true, // Optimisation des fichiers CSS pour éviter les préchargements inutiles
    },
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);