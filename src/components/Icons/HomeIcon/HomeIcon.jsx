export const HomeIcon = ({
    width = 24,
    height = 24,
    stroke = "#48494E",
    className = "",
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className={className}
                opacity="0.4"
                d="M2.36404 12.958C1.98404 10.321 1.79404 9.002 2.33504 7.875C2.87604 6.748 4.02604 6.062 6.32704 4.692L7.71204 3.867C9.80004 2.622 10.846 2 12 2C13.154 2 14.199 2.622 16.288 3.867L17.673 4.692C19.973 6.062 21.124 6.748 21.665 7.875C22.206 9.002 22.015 10.321 21.635 12.958L21.357 14.895C20.87 18.283 20.626 19.976 19.451 20.988C18.276 22 16.553 22 13.106 22H10.894C7.44704 22 5.72404 22 4.54904 20.988C3.37404 19.976 3.13004 18.283 2.64304 14.895L2.36404 12.958Z"
                stroke={stroke}
                strokeWidth="1.5"
            />
            <path
                className={className}
                d="M15 18H9"
                stroke={stroke}
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    );
};
