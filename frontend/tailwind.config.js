const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: ['./components/**/*.js', './pages/**/*.js', './pages/**/*.mdx', './jobs/**/*.md'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            spacing: {
                '1/8': '12.5%',
                '85vh': '85vh',
            },
            inset: {
                '1/2': '50%',
                '-1': '-0.25rem',
                '-4': '-1rem',
                '-10': '-2.5rem',
            },
        },
    },
    plugins: [require('@tailwindcss/ui')],
}
