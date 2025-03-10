import { Button } from '@heroui/button';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import GradientTitle from './[lang]/components/GradientTitle';
 
export default async function NotFound() {
  const dict404 = await getTranslations("not-found");

  return (<>
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <GradientTitle>
        { dict404("title") }
      </GradientTitle>
      <p className="mt-32 text-lg text-gray-600">{ dict404("description") }</p>
      <Link href="/" className="mt-10">
        <Button>{ dict404("backToHome") }</Button>
      </Link>
    </div>
  </>);
}