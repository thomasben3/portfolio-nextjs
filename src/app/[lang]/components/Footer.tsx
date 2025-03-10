import { getTranslations } from "next-intl/server";

/**
 * Footer component
*/
const Footer = async () => {

    const footerDict = await getTranslations("footer");

    return (
        <footer className="mt-8 text-sm flex flex-col items-center" style={{color: "var(--foreground-secondary)"}}>
            <p>© 2025 Thomas Bensemhoun</p>
            <p>
              { footerDict("portfolioMadeWith") + " Next.js" }
            </p>
            <p>
              { footerDict("sourceCodeAvailable") + " " }
              <a href="https://github.com/thomasben3/portfolio-nextjs" className="underline text-blue-600">{ footerDict("here") }</a>
            </p>
        </footer>
    );
}

export default Footer;