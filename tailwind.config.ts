import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx", "./node_modules/flowbite-react/lib/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailgrids/plugin")],
} satisfies Config;
