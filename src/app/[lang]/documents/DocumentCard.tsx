import PdfThumbnail from "./PdfThumbnail";

interface DocumentCardProps {
    title: string;
    description: string;
    documentSrc: string;
  }
  
const DocumentCard = ({ title, description, documentSrc }: DocumentCardProps) => {
  
    return (
      <div 
        className="flex flex-col border rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-[101%] transition-all duration-300 bg-white"
      >
        <PdfThumbnail documentSrc={documentSrc} />
        <div className="p-4 flex flex-col flex-grow justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-600 mt-2">{description}</p>
          </div>
          <div className="mt-4">
            <a 
              href={documentSrc} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Consulter
            </a>
            <a 
              href={documentSrc} 
              download 
              className="px-4 py-2 ml-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors"
            >
              Télécharger
            </a>
          </div>
        </div>
      </div>
    );
};

export default DocumentCard;