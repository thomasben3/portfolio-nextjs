interface DrawerTileProps {
    /**
     * The content of the tile.
    */
    children: React.ReactNode;
    /**
     * The function to call when the tile is clicked
    */
    onClick?: () => void;
}

/**
 * A tile component for the drawer.
 * It automatically manage the styles and hover effects based on the current theme.
 * 
 * @param children - The content of the tile.
 * @param onClick - The function to call when the tile is clicked.
 */
const DrawerTile = ({ children, onClick }: DrawerTileProps) => {
    return (
        <li
            className="p-3 hover:bg-gray-700 cursor-pointer transition-background"
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--drawer-hover-background)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--drawer-background)'}
            onClick={onClick}
        >
            {children}
        </li>
    );
}

export default DrawerTile;