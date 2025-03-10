'use client';

import { debounce } from 'lodash';
import { useEffect, useState, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

interface PdfThumbnailProps {
  documentSrc: string;
}

const PdfThumbnail = ({ documentSrc }: PdfThumbnailProps) => {
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const onLoadError = (error: any) => {
    setError('Error loading PDF: ' + error.message);
  };

  // Calculer la largeur du conteneur pour le PDF
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }

    const handleResize = debounce(() => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    }, 50);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      handleResize.cancel();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-64 bg-gray-200 overflow-hidden border-b-1 border-gray-300"
    >
      {error && <div>{error}</div>} {/* Error state */}
      <Document
        file={documentSrc}
        onLoadError={onLoadError}
      >
        <Page
          pageNumber={1}
          width={containerWidth}
        />
      </Document>
    </div>
  );
};

export default PdfThumbnail;
