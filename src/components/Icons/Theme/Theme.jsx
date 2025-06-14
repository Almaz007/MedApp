export const Theme = ({ width = 24, height = 24 }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="12" cy="12" r="5" stroke="#4B60D7" strokeWidth="1.5" />
            <path
                d="M12 2V4"
                stroke="#4B60D7"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M12 20V22"
                stroke="#4B60D7"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M4 12L2 12"
                stroke="#4B60D7"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M22 12L20 12"
                stroke="#4B60D7"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                opacity="0.5"
                d="M19.7778 4.22217L17.5558 6.25375"
                stroke="#4B60D7"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                opacity="0.5"
                d="M4.22217 4.22217L6.44418 6.25375"
                stroke="#4B60D7"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                opacity="0.5"
                d="M6.44434 17.5557L4.22211 19.7779"
                stroke="#4B60D7"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                opacity="0.5"
                d="M19.7778 19.7778L17.5558 17.5555"
                stroke="#4B60D7"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    );
};
