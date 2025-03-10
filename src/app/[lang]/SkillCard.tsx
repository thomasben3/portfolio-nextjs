import Image from "next/image";

interface SkillCardProps {
    label: string;
    imageName: string;
}

const SkillCard = ({ label, imageName }: SkillCardProps) => (
    <div className="flex flex-col items-center justify-end">
        <div className="h-16 flex items-center justify-center">
            <Image src={`/images/${imageName}`} alt={label} width={50} height={50} className="select-none w-auto h-auto"/>
        </div>
        <span
            className="mt-2 text-gray-700 font-sans"
            style={{ fontFamily: "OdinRounded" }}
        >
            {label}
        </span>
    </div>
);

export default SkillCard;