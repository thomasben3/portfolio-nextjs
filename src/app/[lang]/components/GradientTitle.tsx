interface GradientTextProps {
    /**
     * The content of the title.
    */
    children: React.ReactNode;
}

/**
 * A title component with a gradient background.
 *
 * @param children - The content of the title.
 */
const GradientTitle = ({ children }: GradientTextProps) => {
    return (
        <h1
            className="
                text-4xl
                font-bold
                bg-gradient-to-tr
                from-blue-600
                to-blue-400
                bg-clip-text
                text-transparent
                text-center
            "
        >
            {children}
        </h1>
    );
}

export default GradientTitle;