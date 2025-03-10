interface ContactCardProps {
    title: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

/**
 * A card component for the contact page.
 *
 * @param title - The title of the card.
 * @param icon - The icon to display on the right side of the card.
 * @param children - The content of the card.
*/
const ContactCard = ({ title, icon, children }: ContactCardProps) => {
    return (
        <div className="p-4 bg-white text-black rounded-lg shadow-md hover:shadow-lg hover:scale-[101%] transition-all duration-300 flex justify-between items-center">
            <div className="w-full">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                {children}
            </div>
            {icon}
        </div>
    );
}

export default ContactCard;