export const ChevronRight = ({
    width = 24,
    height = 24,
    stroke = "none",
    strokeWidth = 1.5,
    className = undefined,
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M9 5L15 12L9 19"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
