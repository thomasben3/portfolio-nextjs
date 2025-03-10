import Drawer from "../components/Drawer/Drawer";
import { getLocale, getTranslations } from "next-intl/server";
import DocumentCard from "./DocumentCard";
import Footer from "../components/Footer";
import GradientTitle from "../components/GradientTitle";

export default async function DocumentsPage() {
  const docsDict = await getTranslations("documents");
  const locale = await getLocale();

  return (
    <>
      <Drawer />
      <div className="flex flex-col flex-grow justify-between items-center min-h-screen p-[2rem] pt-20 bg-background">
        <div className="flex flex-col items-center">
          <GradientTitle>{ docsDict("pageTitle") }</GradientTitle>
          <div className='w-28 bg-gray-400 my-2' style={{height: "0.5px"}} />
          <p className="text-sm text-center mb-8" style={{color: 'var(--foreground-secondary)'}}>
            {docsDict("pageDescription")}
          </p>
        </div>
        
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DocumentCard
              title={docsDict("resume")}
              description={ docsDict("resumeDescription") }
              documentSrc={`/pdfs/cv_${locale}.pdf`}
            />
            <DocumentCard
              title={docsDict("diploma")}
              description={ docsDict("diplomaDescription") }
              documentSrc="/pdfs/diplome_42.pdf"
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}