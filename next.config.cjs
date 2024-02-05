/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.cjs");

/** @type {import("next").NextConfig} */
const config = {
    experimental: {
        serverComponentsExternalPackages: ["mongoose"]
    }
};

export default config;
