'use client';

import { Button } from "@heroui/button";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/dropdown";
import { useRouter } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";
import { setCookie } from "cookies-next";

/**
 * The language dropdown component.
 * It allows the user to change the language of the website.
*/
export default function LanguageDropdown() {
  const router = useRouter();
  const languageDict = useTranslations("language");


  const handleLanguageChange = async (newLocale: string) => {
    await setCookie("NEXT_LOCALE", newLocale);

    const splittedBasePath = window.location.pathname.split('/').slice(1);
    const baseLocale = splittedBasePath.shift();
    console.log(baseLocale, newLocale);
    if (baseLocale !== newLocale) {
      router.replace("/" + splittedBasePath.join('/'), {locale: newLocale});
    }
  };

  
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="flex" variant="bordered" color="primary">
          <h2>{languageDict("flag")}</h2>{languageDict("name")}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Language selection">
        <DropdownItem key="en" textValue="English" onPress={() => handleLanguageChange("en")}>
          <div className="flex">
            <h2 className="pr-2">🇬🇧</h2> English
          </div>
        </DropdownItem>
        <DropdownItem key="fr" textValue="Français" onPress={() => handleLanguageChange("fr")}>
          <div className="flex">
            <h2 className="pr-2">🇫🇷</h2> Français
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
