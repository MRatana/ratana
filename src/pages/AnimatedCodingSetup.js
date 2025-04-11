import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const languages = [
    { name: "HTML", color: "bg-purple-400" },
    { name: "CSS", color: "bg-pink-400" },
    { name: "JS", color: "bg-yellow-400" },
    { name: "Java", color: "bg-blue-400" },
    { name: "PHP", color: "bg-indigo-400" },
    { name: "HTML", color: "bg-purple-400" },
    { name: "CSS", color: "bg-pink-400" },
    { name: "JS", color: "bg-yellow-400" },
    { name: "Java", color: "bg-blue-400" },
    { name: "PHP", color: "bg-indigo-400" },
];

function CodeWriter({ code }) {
    const [displayedCode, setDisplayedCode] = useState('');
    const [cursorVisible, setCursorVisible] = useState(true);
    const [fontSize, setFontSize] = useState('text-xs'); // Initial font size
    const charIndex = useRef(0);
    const typingRef = useRef(null);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    useEffect(() => {
        const typeCode = () => {
            setDisplayedCode('');
            charIndex.current = 0;

            if (typingRef.current) clearInterval(typingRef.current);

            typingRef.current = setInterval(() => {
                if (charIndex.current < code.length) {
                    setDisplayedCode((prevCode) => prevCode + code.charAt(charIndex.current));
                    charIndex.current++;
                } else {
                    clearInterval(typingRef.current);
                    setTimeout(typeCode, 2000);
                }
            }, 150);
        };

        typeCode();

        return () => clearInterval(typingRef.current);
    }, [code]);

    useEffect(() => {
        // Adjust font size based on text length
        if (displayedCode.length > 10) { // Adjust threshold as needed
            setFontSize('text-[0.6rem]'); // Smaller font size
        } else {
            setFontSize('text-xs'); // Default font size
        }
    }, [displayedCode]);

    return (
        <div className="relative w-full max-w-35 h-28 bg-black border-2 border-purple-400 p-2 rounded-md">
            <pre className={`text-green-400 ${fontSize} whitespace-pre-wrap`}>
                {displayedCode}
            </pre>
            <pre className={`text-red-400 ${fontSize} whitespace-pre-wrap`}>
                {displayedCode}
            </pre>
            <pre className={`text-blue-400 ${fontSize} whitespace-pre-wrap`}>
                {displayedCode}
            </pre>
            <pre className={`text-red-400 ${fontSize} whitespace-pre-wrap`}>
                {displayedCode}
            </pre>
            <pre className={`text-green-400 ${fontSize} whitespace-pre-wrap`}>
                {displayedCode}
            </pre>
        </div>
    );
}

export default function AnimatedCodingSetup() {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        let angle = 0;

        const moveIcons = () => {
            angle += 0.01;

            const newPositions = languages.map((_, index) => {
                const radius = 110;
                const x = Math.cos(angle + (index * (Math.PI * 2)) / languages.length) * radius;
                const y = Math.sin(angle + (index * (Math.PI * 2)) / languages.length) * radius;
                return { x, y };
            });

            setPositions(newPositions);
        };

        const orbitInterval = setInterval(moveIcons, 50);
        return () => clearInterval(orbitInterval);
    }, []);

    const code = '__ ________ ___';

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="relative w-40 h-40 mt-20 flex items-center justify-center">
                {languages.map((lang, index) => (
                    <motion.div
                        key={lang.name}
                        className={`absolute w-14 h-14 ${lang.color} flex items-center justify-center rounded-full shadow-lg text-sm font-bold z-10 border-2 border-white-400`}
                        animate={{
                            x: positions[index]?.x || 0,
                            y: positions[index]?.y || 0,
                        }}
                        transition={{ duration: 0.1, ease: "linear" }}
                    >
                        {lang.name}
                    </motion.div>
                ))}
            </div>

            <div className="absolute flex justify-center pl-10 pr-10 w-full h-56 space-x-0 bg-[#111828] mt-52 rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                {[1, 2, 3].map((screen) => (
                    <CodeWriter key={screen} code={code} />
                ))}
            </div>
        </div>
    );
}