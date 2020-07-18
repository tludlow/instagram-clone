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
            },
        },
    },
    plugins: [require('@tailwindcss/ui')],
}
