import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages//*.{js,ts,jsx,tsx,mdx}",
    "./src/components//*.{js,ts,jsx,tsx,mdx}",
    "./src/app//*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib//*.js",
  ],
  theme: {},
  plugins: [
    require("flowbite/plugin")
  ],
};
export default config;