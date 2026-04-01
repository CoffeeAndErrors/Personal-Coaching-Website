import './globals.css';

export const metadata = {
  title: 'LIFTINGMONK | Premium Online Fitness Coaching',
  description: 'Discipline Over Motivation. Consistency Over Everything. Elite personal training designed for those who demand long-term results and a disciplined lifestyle.',
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}