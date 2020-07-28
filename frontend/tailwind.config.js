const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: {
        // mode: 'all',
        content: [
            './components/**/*.{js,tsx,tsx}',
            './pages/**/*.{js,tsx,tsx}',
            './icons/**/*.{js,tsx,tsx}',
            './pages/**/*.mdx',
            './jobs/**/*.md',
        ],
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            spacing: {
                '1/8': '12.5%',
                '85vh': '85vh',
                '125': '125%',
            },
            inset: {
                '1/2': '50%',
                '-1': '-0.25rem',
                '-4': '-1rem',
                '-6': '-1.5rem',
                '-10': '-2.5rem',
            },
        },
    },
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'disabled'],
    },
    plugins: [require('@tailwindcss/ui')],
}
