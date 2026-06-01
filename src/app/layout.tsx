import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Inter_Tight } from "next/font/google";



export const metadata: Metadata = {
  title: 'Maison d\'Imprimeur | Votre Partenaire d\'Impression sur Mesure',
  description: 'Maison d\'Imprimeur est votre solution complète pour tous vos besoins d\'impression. Découvrez nos services de design, impression offset et numérique pour des résultats de qualité supérieure.',
  keywords: ["imprimerie, impression, design graphique, offset, numérique, cartes de visite, flyers, brochures, affiches, emballages, devis impression"],
  openGraph: {
    "title": "Maison d'Imprimeur | Impression de Qualité",
    "description": "De l'idée à la réalité, nous donnons vie à vos projets avec une qualité et un savoir-faire inégalés.",
    "url": "https://maison-imprimeur.fr",
    "siteName": "Maison d'Imprimeur",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/high-angle-paint-cans-with-paint_23-2148591312.jpg",
        "alt": "Atelier d'impression moderne"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Maison d'Imprimeur | Impression de Qualité",
    "description": "De l'idée à la réalité, nous donnons vie à vos projets avec une qualité et un savoir-faire inégalés.",
    "images": [
      "http://img.b2bpic.net/free-photo/high-angle-paint-cans-with-paint_23-2148591312.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${interTight.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
