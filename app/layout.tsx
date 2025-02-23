import './globals.css';

import { Red_Hat_Display } from 'next/font/google';

/* This code snippet is using the `Red_Hat_Display` function from the `next/font/google` package to
define a font configuration for the Red Hat Display font. The function call is passing an object
with two properties: */
const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

/**
 * The `RootLayout` function is a React component that renders its children within an HTML body element
 * with specific language and class attributes.
 * @param  - The `RootLayout` function is a React component that serves as the root layout for your
 * application. It takes a single parameter, an object with a `children` property of type
 * `React.ReactNode`. This `children` property represents the content that will be rendered within the
 * layout.
 * @returns The `RootLayout` function is returning a JSX structure that represents the root layout of a
 * web page. It includes an HTML element with the language set to Portuguese (Brazil) and a
 * `suppressHydrationWarning` attribute. Inside the body element, it renders the children passed to the
 * component along with a className that combines the `redHatDisplay.className` value and the string
 * "antialiased".
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR' suppressHydrationWarning>
      <body className={`${redHatDisplay.className} bg-background-primary text-content-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
