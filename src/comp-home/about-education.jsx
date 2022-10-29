import AcademicCapIcon from "../icons/academicCapIcon";
import CalendarIcon from "../icons/calendarIcon";
import LocationIcon from "../icons/locationIcon";

const AboutEducation = () => {
    let education = [
        {
            title: "IIIT Bangalore",
            start: 2019,
            end: 2021,
            degree: "M.Tech",
            stream: "Computer Science",
            cgpa: 3.46,
            maxcgpa: 4,
            location: "Bangalore, KA"
        },
        {
            title: "BIT Sindri",
            start: 2015,
            end: 2019,
            degree: "B.Tech",
            stream: "Computer Science",
            cgpa: 8.06,
            maxcgpa: 10,
            location: "Dhanbad, JH"
        },
    ];
    return (
        <div className="flex flex-col h-full gap-5 font-mono">
            {education.map(({title, start, end, degree, stream, cgpa, maxcgpa, location}, idx) => (
                <div
                    key={idx}
                    className="basis-1/3 rounded-lg px-5 py-2 shadow-soft bg-lime-200"
                >
                    <div className="flex justify-between">
                        <div>{title}</div>
                        <div className="px-1 bg-yellow-300 rounded-lg flex">
                            <div> <CalendarIcon /></div>
                            <div>{start}-{end}</div>
                        </div>
                    </div>
                    <div>
                        {degree} in {stream}
                    </div>
                    <div className="flex justify-between">
                        <div className="flex">
                            <div> <AcademicCapIcon size={6} /> </div>
                            <div>CGPA: {cgpa}/{maxcgpa}</div>
                        </div>
                        <div className="flex">
                            <div><LocationIcon /></div>
                            <div>{location}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AboutEducation;
