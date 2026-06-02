"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import { Sparkles, Star, CheckCircle, Clock, Award } from "lucide-react";

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
          name: "Timeline",          id: "#timeline-features"},
        {
          name: "Démarche Détaillée",          id: "#detailed-steps"},
        {
          name: "Nouvelles Fonctionnalités",          id: "#features-timeline-cards"},        {
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
      <HeroBillboardScroll
      title="Donnez Vie à Vos Idées avec une Qualité d'Impression Inégalée"
      description="Nous transformons vos visions créatives en réalités tangibles grâce à des techniques d'impression de pointe et un engagement inébranlable envers l'excellence. Chaque projet est une œuvre d'art, méticuleusement conçue et exécutée pour captiver votre public et laisser une impression durable."
      tag="Impression sur Mesure"
      buttons={[
        {
          text: "Découvrir nos Services",          href: "#services"},
        {
          text: "Demander un Devis",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-paint-cans-with-paint_23-2148591312.jpg"
      imageAlt="Atelier d'impression moderne"
      background={{
        variant: "plain"}}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="À Propos de Notre Imprimerie"
      description="Depuis plus de 20 ans, Maison d'Imprimeur est le leader de l'impression sur mesure. Nous combinons tradition et innovation pour des résultats exceptionnels. Notre équipe d'experts est dédiée à la réalisation de vos visions, avec un service client personnalisé et une attention méticuleuse aux détails. Nous nous engageons à offrir des solutions d'impression écologiques et durables."
      metrics={[
        {
          value: "20+",          title: "Années d'Expérience"},
        {
          value: "10K+",          title: "Projets Réalisés"},
        {
          value: "98%",          title: "Satisfaction Client"},
      ]}
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/industrial-printing-machine_23-2151675276.jpg"
      imageAlt="Machine d'impression industrielle"
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

  <div id="timeline-features" data-section="timeline-features">
    <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      title="Notre Processus Simple et Efficace"
      description="Du concept à la livraison, suivez les étapes de votre projet avec Maison d'Imprimeur."
      features={[
        {
          title: "Conception Initial",          description: "Nous écoutons vos idées et vos besoins pour une première esquisse.",          bentoComponent: "timeline",          heading: "Phase 1: Idéation",          subheading: "Votre vision prend forme.",          items: [
            { label: "Brief Client", detail: "Discussion approfondie des besoins" },
            { label: "Proposition de Design", detail: "Création des premières maquettes" },
            { label: "Validation du Concept", detail: "Approbation du design final" }
          ],
          completedLabel: "Concept Validé"
        },
        {
          title: "Préparation à l'Impression",          description: "Optimisation des fichiers pour une qualité maximale.",          bentoComponent: "timeline",          heading: "Phase 2: Pré-presse",          subheading: "La précision avant tout.",          items: [
            { label: "Vérification des Fichiers", detail: "Contrôle technique des documents" },
            { label: "Étalonnage des Couleurs", detail: "Garantie de fidélité colorimétrique" },
            { label: "Bon à Tirer (BAT)", detail: "Dernière validation avant production" }
          ],
          completedLabel: "BAT Approuvé"
        },
        {
          title: "Production et Finition",          description: "Impression et finitions pour un résultat impeccable.",          bentoComponent: "timeline",          heading: "Phase 3: Production",          subheading: "L'art de l'impression.",          items: [
            { label: "Impression", detail: "Utilisation de technologies offset ou numérique" },
            { label: "Finition", detail: "Découpe, pelliculage, gaufrage, etc." },
            { label: "Contrôle Qualité", detail: "Inspection rigoureuse de chaque pièce" }
          ],
          completedLabel: "Prêt à l'Expédition"
        },
        {
          title: "Livraison et Suivi",          description: "Votre commande livrée en temps et en heure.",          bentoComponent: "timeline",          heading: "Phase 4: Livraison",          subheading: "Le succès à votre porte.",          items: [
            { label: "Emballage Sécurisé", detail: "Protection optimale de vos imprimés" },
            { label: "Expédition", detail: "Livraison rapide et fiable" },
            { label: "Satisfaction Client", detail: "Assistance après-vente" }
          ],
          completedLabel: "Projet Terminé"
        }
      ]}
    />
  </div>

  <div id="detailed-steps" data-section="detailed-steps">
    <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Comment Nous Procédons : Les Étapes Détaillées"
      description="Découvrez en profondeur chaque phase de notre collaboration, de la première idée à la livraison finale de votre projet d'impression."
      features={[
        {
          title: "Consultation & Stratégie",          description: "Nous commençons par une écoute attentive de vos objectifs, suivi d'une analyse pour définir la stratégie d'impression la plus adaptée.",          bentoComponent: "timeline",          heading: "Phase 1: Définition du Projet",          subheading: "Vos besoins, notre expertise.",          items: [
            { label: "Analyse des Besoins", detail: "Comprendre votre marché et vos cibles." },
            { label: "Conseil Expert", detail: "Propositions de matériaux et techniques." },
            { label: "Planification Stratégique", detail: "Élaboration d'un calendrier et budget." }
          ],
          completedLabel: "Stratégie Validée"
        },
        {
          title: "Design & Conception",          description: "Nos designers transforment vos concepts en visuels percutants, en assurant une cohérence avec votre identité de marque.",          bentoComponent: "timeline",          heading: "Phase 2: Création Visuelle",          subheading: "L'art de la mise en page.",          items: [
            { label: "Création Graphique", detail: "Développement des éléments visuels." },
            { label: "Maquettes & Révisions", detail: "Présentation et ajustements du design." },
            { label: "Validation Artistique", detail: "Approbation du rendu visuel final." }
          ],
          completedLabel: "Design Approuvé"
        },
        {
          title: "Production & Qualité",          description: "Nos équipements de pointe et notre savoir-faire garantissent une impression de la plus haute qualité, avec des finitions impeccables.",          bentoComponent: "timeline",          heading: "Phase 3: Réalisation Impeccable",          subheading: "La précision à l'œuvre.",          items: [
            { label: "Pré-presse Détaillée", detail: "Vérification et préparation des fichiers." },
            { label: "Impression Avancée", detail: "Utilisation des technologies les plus récentes." },
            { label: "Finitions & Contrôle", detail: "Découpe, assemblage et inspection finale." }
          ],
          completedLabel: "Qualité Assurée"
        },
        {
          title: "Livraison & Support",          description: "Votre commande est livrée en toute sécurité, et notre équipe reste disponible pour toute question post-production.",          bentoComponent: "timeline",          heading: "Phase 4: Succès Garanti",          subheading: "Votre projet, livré à temps.",          items: [
            { label: "Emballage Soigné", detail: "Protection optimale des produits." },
            { label: "Expédition Rapide", detail: "Logistique efficace pour une livraison ciblée." },
            { label: "Suivi Clientèle", detail: "Support après-vente et satisfaction." }
          ],
          completedLabel: "Projet Livré"
        }
      ]}
    />
  </div>

  <div id="features-timeline-cards" data-section="features-timeline-cards">
    <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      title="Nos Prochaines Innovations et Fonctionnalités"
      description="Découvrez la feuille de route de Maison d'Imprimeur et les nouvelles fonctionnalités que nous développerons pour vous."
      features={[
        {
          title: "Intégration IA pour le Design",          description: "Automatisation de la mise en page et suggestions créatives.",          bentoComponent: "timeline",          heading: "Développement IA",          subheading: "Optimisation de votre processus de création.",          items: [
            { label: "Recherche & Développement", detail: "Exploration des modèles d'AI pour le design." },
            { label: "Tests Alpha", detail: "Intégration avec nos outils de conception." },
            { label: "Lancement Beta", detail: "Mise à disposition pour les utilisateurs test." }
          ],
          completedLabel: "Bientôt Disponible"
        },
        {
          title: "Suivi de Production en Temps Réel",          description: "Visualisez l'état de votre commande à chaque étape du processus.",          bentoComponent: "timeline",          heading: "Transparence Accrue",          subheading: "Gardez le contrôle sur votre projet.",          items: [
            { label: "Conception du Tableau de Bord", detail: "Développement de l'interface utilisateur." },
            { label: "Intégration des Capteurs", detail: "Connexion aux machines d'impression." },
            { label: "Déploiement", detail: "Accessible via votre espace client." }
          ],
          completedLabel: "En Cours"
        },
        {
          title: "Nouvelles Options de Matériaux Écologiques",          description: "Élargissement de notre gamme de papiers recyclés et encres végétales.",          bentoComponent: "timeline",          heading: "Engagement Durable",          subheading: "Pour une impression plus respectueuse de l'environnement.",          items: [
            { label: "Sélection des Fournisseurs", detail: "Recherche de partenaires certifiés écologiques." },
            { label: "Tests de Qualité", detail: "Assurance des standards d'impression." },
            { label: "Mise à Disposition", detail: "Ajout des options au catalogue." }
          ],
          completedLabel: "Prévu Q3 2024"
        }
      ]}
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
          id: "p-1",          name: "Cartes de Visite Premium",          price: "À partir de 29€",          imageSrc: "http://img.b2bpic.net/free-psd/opulence-business-card-template-design_23-2152016131.jpg",          priceButtonProps: { text: "Commander", href: "#contact" }},
        {
          id: "p-2",          name: "Flyers Publicitaires",          price: "À partir de 49€",          imageSrc: "http://img.b2bpic.net/free-photo/clipboard-near-blurs-heaps-different-bright-dry-colors_23-2148016427.jpg",          priceButtonProps: { text: "Commander", href: "#contact" }},
        {
          id: "p-3",          name: "Brochures Pliantes",          price: "À partir de 89€",          imageSrc: "http://img.b2bpic.net/free-vector/geometric-business-brochure-blue-tones_23-2147599337.jpg",          priceButtonProps: { text: "Commander", href: "#contact" }},
        {
          id: "p-4",          name: "Affiches Grand Format",          price: "À partir de 129€",          imageSrc: "http://img.b2bpic.net/free-photo/blank-white-advertisement-panel-city_23-2147845889.jpg",          priceButtonProps: { text: "Commander", href: "#contact" }},
        {
          id: "p-5",          name: "Bannières et Roll-ups",          price: "À partir de 149€",          imageSrc: "http://img.b2bpic.net/free-psd/business-corporation-template-design_23-2151405481.jpg",          priceButtonProps: { text: "Commander", href: "#contact" }},
        {
          id: "p-6",          name: "Emballages Personnalisés",          price: "Sur devis",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-woman-preparing-cyber-monday-package_23-2148675033.jpg",          priceButtonProps: { text: "Demander un Devis", href: "#contact" }},
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
              label: "Timeline",              href: "#timeline-features"},
            {
              label: "Produits",              href: "#products"},
            {
            "label": "Témoignages",              "href": "#testimonials-section"
            },
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