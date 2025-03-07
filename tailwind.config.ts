import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

<<<<<<< HEAD
export default {
=======
const config: Config = {
>>>>>>> 44b7e5e (working on auth)
    darkMode: ["class"],
    content: ["./src/**/*.tsx"],
  theme: {
  	extend: {
<<<<<<< HEAD
  		fontFamily: {
  			sans: [
  				'var(--font-geist-sans)',
                    ...fontFamily.sans
                ]
=======
  		fontFamily: {	
			satoshi: ["Satoshi", "sans-serif"]
>>>>>>> 44b7e5e (working on auth)
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
<<<<<<< HEAD
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
=======
  fontWeight: {
		light: '300',
		regular: '400',
		medium: '500',
		bold: '700'
	},
  plugins: [require("tailwindcss-animate")],
} satisfies Config;


export default config;
>>>>>>> 44b7e5e (working on auth)
