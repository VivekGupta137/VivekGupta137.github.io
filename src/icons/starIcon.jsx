const StarIcon = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-6 h-6"
            {...props}
        >
            <linearGradient
                id="q0c2dLEp_4LHk~8cW2fATa"
                x1="9.009"
                x2="38.092"
                y1="6.36"
                y2="45.266"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stop-color="#ffda1c" />
                <stop offset="1" stop-color="#feb705" />
            </linearGradient>
            <path
                fill="url(#q0c2dLEp_4LHk~8cW2fATa)"
                d="M24.913,5.186l5.478,12.288l13.378,1.413c0.861,0.091,1.207,1.158,0.564,1.737l-9.993,9.005	l2.791,13.161c0.18,0.847-0.728,1.506-1.478,1.074L24,37.141l-11.653,6.722c-0.75,0.432-1.657-0.227-1.478-1.074l2.791-13.161	l-9.993-9.005c-0.643-0.579-0.296-1.646,0.564-1.737l13.378-1.413l5.478-12.288C23.439,4.395,24.561,4.395,24.913,5.186z"
            />
        </svg>
    );
};

export default StarIcon;
