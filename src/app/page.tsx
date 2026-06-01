"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import { Sparkles, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="small"
        sizing="large"
        background="fluid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Accueil",          id: "#hero"},
        {
          name: "À Propos",          id: "#about"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Produits",          id: "#products"},
        {
          name: "Équipe",          id: "#team"},
        {
          name: "Tarifs",          id: "#pricing"},
        {
          name: "Témoignages",          id: "#testimonials-section"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dwf7EzUzVwGcNnRSm1lnBuhn2w/uploaded-1780312493312-pshenlm3.jpg"
      logoAlt="Logo Maison d'Imprimeur"
      brandName="MAISON D'IMPRIMEUR"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      title="Donnez Vie à Vos Idées avec une Qualité d'Impression Inégalée"
      description="Nous transformons vos visions créatives en réalités tangibles grâce à des techniques d'impression de pointe et un engagement inébranlable envers l'excellence. Chaque projet est une œuvre d'art, méticuleusement conçue et exécutée pour captiver votre public et laisser une impression durable."
      tag="Impression sur Mesure"
      buttons={[
        {
          text: "Découvrir nos Services",          href: "#services"},
        {
          text: "Demander un Devis",          href: "#contact"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-paint-cans-with-paint_23-2148591312.jpg",          imageAlt: "Atelier d'impression moderne"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-prepared-meeting_1098-2188.jpg",          imageAlt: "Businesswoman in meeting"},
      ]}
      mediaAnimation="slide-up"
      background={{
        variant: "plain"}}
      rating={5}
      ratingText="Basé sur +100 avis 5 étoiles"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="À Propos de Notre Imprimerie"
      description={[
        "Depuis plus de 20 ans, Maison d'Imprimeur est le leader de l'impression sur mesure. Nous combinons tradition et innovation pour des résultats exceptionnels.",        "Notre équipe d'experts est dédiée à la réalisation de vos visions, avec un service client personnalisé et une attention méticuleuse aux détails. Nous nous engageons à offrir des solutions d'impression écologiques et durables."]}
      buttons={[
        {
          text: "Notre Histoire",          href: "#"},
        {
          text: "Nos Valeurs",          href: "#"},
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Design Graphique",          description: "Donnez vie à vos idées avec notre équipe de designers expérimentés. De la conception à l'impression, nous vous accompagnons.",          imageSrc: "http://img.b2bpic.net/free-photo/sight-sense-plants-collage_23-2149848106.jpg",          titleImageSrc: "http://img.b2bpic.net/free-photo/facade-panels-near-pen-notepad-table_23-2148039904.jpg",          buttonText: "En savoir plus"},
        {
          title: "Impression Offset",          description: "Idéale pour les grands tirages, l'impression offset offre une qualité supérieure et des couleurs précises pour vos projets exigeants.",          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-conveyor-belts-with-fake-news_23-2148824748.jpg",          titleImageSrc: "http://img.b2bpic.net/free-photo/man-working-printing-house-with-paper-paints_1303-26597.jpg",          buttonText: "En savoir plus"},
        {
          title: "Impression Numérique",          description: "Parfaite pour les petites séries et les impressions personnalisées, notre technologie numérique assure rapidité et flexibilité.",          imageSrc: "http://img.b2bpic.net/free-photo/still-life-cmyk-toners-assortment_23-2149120696.jpg",          titleImageSrc: "http://img.b2bpic.net/free-photo/beautiful-concept-with-prism-dispersing-light_23-2148599232.jpg",          buttonText: "En savoir plus"},
        {
          title: "Finitions Spéciales",          description: "Vernis sélectif, pelliculage, gaufrage... Ajoutez une touche d'élégance à vos impressions avec nos options de finition haut de gamme.",          imageSrc: "http://img.b2bpic.net/free-photo/man-working-printing-house-with-paper-paints_1303-26575.jpg",          titleImageSrc: "http://img.b2bpic.net/free-photo/closeup-notebook_53876-42023.jpg",          buttonText: "En savoir plus"},
      ]}
      title="Nos Services d'Impression Complète"
      description="Découvrez notre large gamme de services, conçus pour répondre à tous vos besoins, des petites aux grandes productions."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p-1",          name: "Cartes de Visite Premium",          price: "À partir de 29€",          imageSrc: "http://img.b2bpic.net/free-psd/opulence-business-card-template-design_23-2152016131.jpg"},
        {
          id: "p-2",          name: "Flyers Publicitaires",          price: "À partir de 49€",          imageSrc: "http://img.b2bpic.net/free-photo/clipboard-near-blurs-heaps-different-bright-dry-colors_23-2148016427.jpg"},
        {
          id: "p-3",          name: "Brochures Pliantes",          price: "À partir de 89€",          imageSrc: "http://img.b2bpic.net/free-vector/geometric-business-brochure-blue-tones_23-2147599337.jpg"},
        {
          id: "p-4",          name: "Affiches Grand Format",          price: "À partir de 129€",          imageSrc: "http://img.b2bpic.net/free-photo/blank-white-advertisement-panel-city_23-2147845889.jpg"},
        {
          id: "p-5",          name: "Bannières et Roll-ups",          price: "À partir de 149€",          imageSrc: "http://img.b2bpic.net/free-psd/business-corporation-template-design_23-2151405481.jpg"},
        {
          id: "p-6",          name: "Emballages Personnalisés",          price: "Sur devis",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-woman-preparing-cyber-monday-package_23-2148675033.jpg"},
      ]}
      title="Explorez Notre Gamme de Produits Imprimés"
      description="Des cartes de visite élégantes aux brochures percutantes, trouvez le support idéal pour communiquer votre message."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardSix
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      title="Rencontrez Notre Équipe d'Experts"
      description="Une équipe passionnée et dévouée à l'excellence de vos projets d'impression."
      members={[
        {
          id: "m-1",          name: "Marc Dubois",          role: "Directeur Général",          imageSrc: "http://img.b2bpic.net/free-photo/handsome-bearded-man-touching-chin-looking-front_176474-32530.jpg"},
        {
          id: "m-2",          name: "Sophie Martin",          role: "Directrice Artistique",          imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-woman-pink-blouse-eyeglasses_176474-14283.jpg"},
        {
          id: "m-3",          name: "David Laurent",          role: "Chef de Production",          imageSrc: "http://img.b2bpic.net/free-photo/young-man-wearing-glasses-casual-t-shirt_176474-14986.jpg"},
      ]}
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",          badge: "Standard",          price: "Sur Devis",          subtitle: "Pour les petits projets et startups.",          buttons: [
            {
              text: "Demander un Devis",              href: "#contact"},
          ],
          features: [
            "Impression Numérique",            "Formats standards",            "Délai standard",            "Support client limité"],
        },
        {
          id: "pro",          badge: "Populaire",          badgeIcon: Sparkles,
          price: "Sur Devis",          subtitle: "Idéal pour les entreprises en croissance.",          buttons: [
            {
              text: "Demander un Devis",              href: "#contact"},
          ],
          features: [
            "Impression Offset & Numérique",            "Formats personnalisés",            "Délai prioritaire",            "Support client dédié",            "Finition spéciale incluse"],
        },
        {
          id: "enterprise",          badge: "Sur Mesure",          price: "Contactez-Nous",          subtitle: "Pour les grands comptes et projets complexes.",          buttons: [
            {
              text: "Contacter l'Équipe",              href: "#contact"},
          ],
          features: [
            "Tous types d'impression",            "Conseil stratégique",            "Gestion de projet",            "Logistique & livraison",            "Support 24/7"],
        },
      ]}
      title="Nos Solutions d'Impression Flexibles"
      description="Choisissez le plan qui correspond le mieux à vos besoins et à votre budget. Qualité supérieure garantie, sans compromis."
    />
  </div>

  <div id="testimonials-section" data-section="testimonials-section">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t-1",          name: "Pauline Bernard",          role: "Directrice Marketing",          company: "Agence Créative",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-smiling-beautiful-adult-businesswoman_1262-1760.jpg"},
        {
          id: "t-2",          name: "Julien Lefèvre",          role: "Gérant de Restaurant",          company: "Le Gastronome",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-businesswoman_23-2149153828.jpg"},
        {
          id: "t-3",          name: "Camille Leroy",          role: "Responsable Événementiel",          company: "Eventz Solutions",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-looking-camera-violet-shirt-looking-beautiful-front-view_176474-15366.jpg"},
        {
          id: "t-4",          name: "Antoine Girard",          role: "Artisan Chocolatier",          company: "Douceurs d'Antoine",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1563.jpg"},
        {
          id: "t-5",          name: "Laura Moreau",          role: "Coordinatrice Projets",          company: "Startup Innovante",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-working-travel-agency_52683-136439.jpg"},
        {
          id: "t-6",          name: "Thomas Dupont",          role: "CEO",          company: "Global Corp",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-multiracial-business-team_1262-21007.jpg"},
      ]}
      title="Ce Que Nos Clients Disent"
      description="La satisfaction de nos clients est notre plus grande fierté. Lisez leurs expériences positives avec Maison d'Imprimeur et découvrez pourquoi ils nous font confiance."
    />
  </div>

  <div id="clients" data-section="clients">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Graphix Pro",        "Foodie Delights",        "Eco Solutions",        "Fashion Hub",        "Edu Future",        "Health First",        "Finance Smart",        "Active Living"]}
      title="Ils Nous Font Confiance"
      description="Nous sommes fiers de collaborer avec une clientèle variée, des petites entreprises aux grandes organisations, pour donner vie à leurs projets d'impression."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq-1",          title: "Quel est le délai de production pour une commande standard ?",          content: "Le délai varie en fonction du type de produit et de la quantité. Pour une commande standard (ex: cartes de visite, flyers), comptez généralement 3 à 5 jours ouvrables après validation du BAT. Pour des projets plus complexes, un délai spécifique vous sera communiqué."},
        {
          id: "faq-2",          title: "Puis-je commander un petit tirage ?",          content: "Oui, grâce à notre service d'impression numérique, nous sommes en mesure de réaliser des petits tirages personnalisés avec une excellente qualité. Contactez-nous pour discuter de vos besoins spécifiques."},
        {
          id: "faq-3",          title: "Proposez-vous des services de design graphique ?",          content: "Absolument ! Notre équipe de designers graphiques est là pour vous aider à créer des visuels percutants et adaptés à vos besoins. Que vous ayez une idée ou que vous partiez de zéro, nous pouvons vous accompagner."},
        {
          id: "faq-4",          title: "Comment puis-je soumettre mes fichiers d'impression ?",          content: "Vous pouvez soumettre vos fichiers via notre plateforme sécurisée en ligne, ou par email pour des fichiers plus petits. Nous acceptons la plupart des formats standards (PDF, AI, EPS, PSD, JPG, TIFF). Des instructions détaillées sont disponibles dans notre section 'Préparation des fichiers'."},
      ]}
      title="Questions Fréquemment Posées"
      description="Trouvez rapidement les réponses à vos interrogations concernant nos services, processus et délais d'impression. Si vous ne trouvez pas votre réponse, n'hésitez pas à nous contacter."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      text="Prêt à démarrer votre projet d'impression ? Notre équipe est à votre écoute pour discuter de vos besoins et vous proposer la meilleure solution personnalisée. N'hésitez pas à nous joindre pour un devis gratuit ou toute question."
      buttons={[
        {
          text: "Demander un Devis Gratuit",          href: "#"},
        {
          text: "Appelez-Nous",          href: "tel:+33123456789"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dwf7EzUzVwGcNnRSm1lnBuhn2w/uploaded-1780312493312-pshenlm3.jpg"
      logoAlt="Logo Maison d'Imprimeur"
      logoText="MAISON D'IMPRIMEUR"
      columns={[
        {
          title: "Services",          items: [
            {
              label: "Design Graphique",              href: "#services"},
            {
              label: "Impression Offset",              href: "#services"},
            {
              label: "Impression Numérique",              href: "#services"},
            {
              label: "Finitions",              href: "#services"},
          ],
        },
        {
          title: "Entreprise",          items: [
            {
              label: "À Propos",              href: "#about"},
            {
              label: "Produits",              href: "#products"},
            {
              label: "Témoignages",              href: "#testimonials-section"},
            {
              label: "FAQ",              href: "#faq"},
          ],
        },
        {
          title: "Suivez-Nous",          items: [
            {
              label: "Facebook",              href: "#"},
            {
              label: "Instagram",              href: "#"},
            {
              label: "LinkedIn",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2024 Maison d'Imprimeur. Tous droits réservés."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}