# ArchiBat - Site Web Vitrine BTP

## 🏗️ Description

ArchiBat est une application web moderne et élégante pour la location d'engins de construction BTP et la vente de matériel. L'application offre une expérience utilisateur exceptionnelle avec un design professionnel et des fonctionnalités avancées.

## ✨ Fonctionnalités

### 🎨 Design & UX
- **Design moderne et élégant** avec palette de couleurs jaune et noire
- **Interface responsive** adaptée à tous les appareils
- **Animations fluides** et transitions sophistiquées
- **Smooth scroll** pour une navigation agréable
- **Cards non arrondies** selon les spécifications

### 🚀 Fonctionnalités Principales
- **Page d'accueil** avec hero section impactante
- **Catalogue d'engins** avec filtres et recherche
- **Système de devis** intégré avec modal interactif
- **Page à propos** avec histoire de l'entreprise
- **Page de contact** avec formulaire et FAQ
- **Navigation intuitive** avec menu responsive

### 🛠️ Technologies Utilisées
- **Vue.js 3** avec Composition API
- **TypeScript** pour la sécurité des types
- **Tailwind CSS** pour le styling
- **Vue Router** pour la navigation
- **Animations CSS** personnalisées

## 🚀 Installation

1. **Cloner le projet**
```bash
git clone <repository-url>
cd btp
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Démarrer le serveur de développement**
```bash
npm run dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:5173
```

## 📁 Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── Navigation.vue   # Barre de navigation
│   ├── HeroSection.vue  # Section hero
│   ├── ServicesSection.vue
│   ├── EquipmentCarousel.vue
│   ├── TestimonialsSection.vue
│   ├── QuoteModal.vue   # Modal de devis
│   ├── Footer.vue
│   └── ScrollToTop.vue
├── views/               # Pages de l'application
│   ├── Home.vue
│   ├── About.vue
│   ├── Equipment.vue
│   └── Contact.vue
├── data/                # Données factices
│   └── mockData.ts
├── composables/         # Composables Vue
│   └── useAnimations.ts
├── router/              # Configuration du routeur
│   └── index.ts
└── style.css           # Styles globaux
```

## 🎨 Palette de Couleurs

- **Primaire (Jaune)** : `#facc15` - `#eab308`
- **Sombre** : `#0f172a` - `#1e293b`
- **Gris** : `#64748b` - `#94a3b8`

## 📱 Responsive Design

L'application est entièrement responsive et s'adapte à :
- **Mobile** (< 768px)
- **Tablet** (768px - 1024px)
- **Desktop** (> 1024px)

## 🚀 Fonctionnalités Avancées

### Système de Devis
- Modal interactif pour demander des devis
- Sélection d'équipements multiples
- Formulaire de contact intégré
- Validation des données

### Animations
- Animations d'entrée au scroll
- Transitions fluides entre les pages
- Effets hover sophistiqués
- Animations de chargement

### Performance
- Lazy loading des images
- Optimisation des animations
- Code splitting automatique
- Bundle optimisé

## 🔧 Scripts Disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Preview de production
npm run preview

# Vérification TypeScript
npm run type-check
```

## 📄 Pages Disponibles

1. **Accueil** (`/`) - Page principale avec hero et services
2. **À propos** (`/about`) - Histoire et équipe de l'entreprise
3. **Engins** (`/equipment`) - Catalogue avec filtres et recherche
4. **Contact** (`/contact`) - Formulaire de contact et informations

## 🎯 Objectifs Atteints

- ✅ Design élégant et professionnel
- ✅ Palette de couleurs jaune et noire
- ✅ Cards non arrondies
- ✅ Animations fluides
- ✅ Smooth scroll
- ✅ Images démonstratives
- ✅ Site dynamique et vivant
- ✅ UX design extraordinaire
- ✅ Système de devis intégré
- ✅ Responsive design

## 🚀 Déploiement

Pour déployer l'application :

1. **Build de production**
```bash
npm run build
```

2. **Déployer le dossier `dist/`** sur votre serveur web

## 📞 Support

Pour toute question ou support technique, contactez l'équipe de développement.

---

**ArchiBat** - Votre partenaire de confiance pour la location d'engins de construction BTP 🏗️