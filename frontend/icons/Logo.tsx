interface LogoProps {
    className?: string;
}

export default function Logo({ className }: LogoProps) {
    return (
        <img
            className={`${className}`}
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram"
        />
    )
}
