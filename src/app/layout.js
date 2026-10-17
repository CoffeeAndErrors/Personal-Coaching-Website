import { Bricolage_Grotesque, Geist, Instrument_Serif } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Bricolage Grotesque: display, with an optical-size axis so big headlines tighten up.
// Geist: body and UI, crisp at small sizes. Instrument Serif italic: editorial accent words only.
const display = Bricolage_Grotesque({ subsets: ['latin'], axes: ['opsz'], variable: '--font-display-face', display: 'swap' });
const body = Geist({ subsets: ['latin'], variable: '--font-body-face', display: 'swap' });
const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  variable: '--font-instrument',
  display: 'swap',
});

const description =
  'Discipline over motivation. Consistency over everything. Science-based online fitness coaching by Amritangshu Mahapatra, built for long-term results.';

export const metadata = {
  metadataBase: new URL('https://liftingmonk-coaching.vercel.app'),
  title: {
    default: 'LIFTINGMONK | Premium Online Fitness Coaching',
    template: '%s | LIFTINGMONK',
  },
  description,
  openGraph: {
    title: 'LIFTINGMONK | Premium Online Fitness Coaching',
    description,
    siteName: 'LIFTINGMONK',
    type: 'website',
    images: [{ url: '/coach.jpg', width: 1024, height: 977, alt: 'Coach Amritangshu Mahapatra' }],
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${serif.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-ink focus:px-5 focus:py-3 focus:text-cream"
        >
          Skip to content
        </a>
        <Navbar />
        <div className="p-2 sm:p-4 lg:p-8">
          <div className="overflow-x-clip bg-cream">
            <main id="main">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
