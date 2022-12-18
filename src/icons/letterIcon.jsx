const LetterIcon = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-6 h-6"
            {...props}
        >
            <path
                fill="#babffc"
                d="M39.789,9H8.211C5.338,9,3,11.243,3,14v20c0,2.757,2.338,5,5.211,5h31.578C42.662,39,45,36.757,45,34	V14C45,11.243,42.662,9,39.789,9z"
            ></path>
            <path
                fill="#324561"
                d="M24,28.01c-0.941,0-1.883-0.329-2.634-0.985L7.342,14.753c-0.416-0.364-0.458-0.996-0.095-1.411	c0.364-0.417,0.996-0.459,1.411-0.095l14.024,12.271c0.752,0.658,1.883,0.658,2.635,0l14.024-12.271	c0.414-0.364,1.045-0.322,1.411,0.095c0.363,0.415,0.321,1.047-0.095,1.411L26.634,27.024C25.883,27.681,24.941,28.01,24,28.01z"
            ></path>
            <path
                fill="#324561"
                d="M8,35c-0.278,0-0.555-0.115-0.753-0.342c-0.363-0.415-0.321-1.047,0.095-1.411l7.984-6.986	c0.414-0.364,1.045-0.322,1.411,0.095c0.363,0.415,0.321,1.047-0.095,1.411l-7.984,6.986C8.469,34.919,8.234,35,8,35z"
            ></path>
            <path
                fill="#324561"
                d="M40,35c-0.234,0-0.469-0.081-0.658-0.247l-7.984-6.986c-0.416-0.364-0.458-0.996-0.095-1.411	c0.364-0.417,0.996-0.459,1.411-0.095l7.984,6.986c0.416,0.364,0.458,0.996,0.095,1.411C40.555,34.885,40.278,35,40,35z"
            ></path>
        </svg>
    );
};

export default LetterIcon;