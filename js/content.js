/* Site content: projects, expertise, skills and background, in fr / en / ar.
   To add or edit a project, change the PROJECTS array below. */

window.PROJECTS = [
  {
    id: "flowmerce",
    name: "Flowmerce",
    featured: true,
    award: true,
    brand: "#2F6BFF",
    cats: ["saas", "ml", "ecommerce"],
    url: "https://flowmerce-web-app.vercel.app",
    domain: "flowmerce-web-app.vercel.app",
    stack: ["React", "Node.js", "API REST", "SQL", "Machine Learning", "Vercel"],
    shots: [
      { src: "assets/img/flowmerce/dashboard.webp", w: 1600, h: 879, kind: "desktop",
        alt: { fr: "Tableau de bord vendeur Flowmerce : commandes suivies, réclamations, taux d'approbation et décisions IA", en: "Flowmerce merchant dashboard: tracked orders, claims, approval rate and AI decisions", ar: "لوحة تحكم البائع في Flowmerce: الطلبيات المتابعة، المطالبات، نسبة القبول وقرارات الذكاء الاصطناعي" } },
      { src: "assets/img/flowmerce/claims.webp", w: 1600, h: 707, kind: "desktop",
        alt: { fr: "Liste des réclamations avec recommandation, score de risque et auto-approbation", en: "Claims list with recommendation, risk score and auto-approval", ar: "قائمة المطالبات مع التوصية ودرجة المخاطرة والقبول التلقائي" } }
    ],
    t: {
      fr: {
        tagline: "SaaS intelligent de gestion des retours e-commerce",
        summary: "Flowmerce aide les marchands algériens à traiter les demandes de retour. Pour chaque demande, l'IA croise la politique de retour du marchand, l'historique du client et un score de risque, puis recommande une décision que le marchand applique ou modifie. C'est mon projet entrepreneurial et le sujet de mon mémoire de Master.",
        features: [
          "Recommandation IA pour chaque réclamation : échange, remboursement ou refus",
          "Approbation manuelle ou automatique selon vos propres règles",
          "Politique de retour configurable : délais, motifs acceptés, solutions, par produit",
          "Intégration par API REST : une boutique envoie ses retours et reçoit un statut",
          "Réseau anti-fraude entre boutiques avec un score de risque client de 0 à 100",
          "Suivi des commandes, notifications e-mail et décisions horodatées",
          "Statistiques des retours par produit, motif et client"
        ]
      },
      en: {
        tagline: "AI-powered SaaS for e-commerce returns",
        summary: "Flowmerce helps Algerian merchants handle return requests. For every request, the AI checks the merchant's return policy, the customer's history and a risk score, then recommends a decision the merchant can apply or change. It is my entrepreneurial project and the subject of my Master's thesis.",
        features: [
          "AI recommendation for every claim: exchange, refund or rejection",
          "Manual or automatic approval based on your own rules",
          "Configurable return policy: deadlines, accepted reasons, resolutions, per product",
          "REST API integration: a store sends its returns and gets a status back",
          "Cross-store anti-fraud network with a 0–100 customer risk score",
          "Order tracking, email notifications and timestamped decisions",
          "Return analytics by product, reason and customer"
        ]
      },
      ar: {
        tagline: "منصة SaaS ذكية لإدارة مرتجعات التجارة الإلكترونية",
        summary: "يساعد Flowmerce التجار الجزائريين على معالجة طلبات الإرجاع. لكل طلب، يقارن الذكاء الاصطناعي سياسة الإرجاع الخاصة بالتاجر وسجل الزبون ودرجة المخاطرة، ثم يقترح قراراً يطبّقه التاجر أو يعدّله. إنه مشروعي الريادي وموضوع مذكرة الماستر.",
        features: [
          "توصية ذكية لكل مطالبة: استبدال أو استرجاع المبلغ أو رفض",
          "قبول يدوي أو تلقائي حسب قواعدك الخاصة",
          "سياسة إرجاع قابلة للضبط: الآجال، الأسباب المقبولة، الحلول، لكل منتج",
          "ربط عبر REST API: يرسل المتجر مرتجعاته ويستقبل حالتها",
          "شبكة لمكافحة الاحتيال بين المتاجر مع درجة مخاطرة للزبون من 0 إلى 100",
          "تتبّع الطلبيات، إشعارات بالبريد الإلكتروني وقرارات مؤرّخة",
          "إحصائيات المرتجعات حسب المنتج والسبب والزبون"
        ]
      }
    }
  },

  {
    id: "flowmerce-ml",
    name: "Flowmerce-ML",
    brand: "#0E7C86",
    cats: ["ml", "saas"],
    note: { key: "projects.internal", href: "#p-flowmerce", linkKey: "projects.seeFlowmerce" },
    stack: ["Python", "Machine Learning", "joblib", "FastAPI", "Docker", "API REST"],
    pipeline: true,
    t: {
      fr: {
        tagline: "Le moteur de machine learning derrière Flowmerce",
        summary: "Flowmerce-ML est le modèle qui évalue chaque demande de retour. Entraîné en Python, sérialisé avec joblib et servi comme une API conteneurisée avec Docker, il renvoie un score de risque et une recommandation que la plateforme Flowmerce utilise en temps réel.",
        features: [
          "Score de fraude de 0 à 100 pour chaque demande de retour",
          "Recommandation de décision basée sur la politique et l'historique du client",
          "Service d'inférence FastAPI déployé dans un conteneur Docker",
          "Repli automatique : si le modèle est indisponible, les dossiers sont relancés toutes les 10 minutes",
          "Seuil d'alerte configurable par chaque marchand"
        ],
        pipeline: ["Demande de retour", "Politique, historique client, signaux de fraude", "Modèle entraîné", "Score de risque et recommandation"]
      },
      en: {
        tagline: "The machine learning engine behind Flowmerce",
        summary: "Flowmerce-ML is the model that scores every return request. Trained in Python, serialised with joblib and served as a containerised Docker API, it returns a risk score and a recommendation that the Flowmerce platform uses in real time.",
        features: [
          "0–100 fraud score for every return request",
          "Decision recommendation based on policy and customer history",
          "FastAPI inference service deployed in a Docker container",
          "Automatic fallback: if the model is unavailable, claims are retried every 10 minutes",
          "Alert threshold configurable by each merchant"
        ],
        pipeline: ["Return request", "Policy, customer history, fraud signals", "Trained model", "Risk score and recommendation"]
      },
      ar: {
        tagline: "محرّك التعلّم الآلي الذي يشغّل Flowmerce",
        summary: "Flowmerce-ML هو النموذج الذي يقيّم كل طلب إرجاع. دُرّب بلغة Python وحُفظ بـ joblib ويُقدَّم كواجهة API داخل حاوية Docker، ويُرجع درجة مخاطرة وتوصية تستعملها منصة Flowmerce في الوقت الفعلي.",
        features: [
          "درجة احتيال من 0 إلى 100 لكل طلب إرجاع",
          "توصية بالقرار بناءً على السياسة وسجل الزبون",
          "خدمة استدلال FastAPI منشورة في حاوية Docker",
          "آلية احتياطية: إذا تعذّر الوصول إلى النموذج، يُعاد إرسال الملفات كل 10 دقائق",
          "عتبة تنبيه قابلة للضبط من طرف كل تاجر"
        ],
        pipeline: ["طلب الإرجاع", "السياسة، سجل الزبون، مؤشرات الاحتيال", "النموذج المدرَّب", "درجة المخاطرة والتوصية"]
      }
    }
  },

  {
    id: "caba-store",
    name: "Caba-Store",
    brand: "#F26B1D",
    cats: ["ecommerce", "mobile"],
    url: "https://caba-store.vercel.app",
    domain: "caba-store.vercel.app",
    stack: ["React", "Node.js", "API REST", "SQL", "Flowmerce API"],
    shots: [
      { src: "assets/img/caba-store/home.webp", w: 1600, h: 749, kind: "desktop",
        alt: { fr: "Page d'accueil Caba-Store : vos produits préférés, livrés chez vous", en: "Caba-Store home page: your favourite products, delivered to you", ar: "الصفحة الرئيسية لـ Caba-Store: منتجاتك المفضلة تصلك إلى باب منزلك" } },
      { src: "assets/img/caba-store/admin.webp", w: 1600, h: 748, kind: "desktop",
        alt: { fr: "Tableau de bord administrateur : produits, clients, commandes, vendeurs et chiffre d'affaires", en: "Admin dashboard: products, customers, orders, sellers and revenue", ar: "لوحة تحكم المدير: المنتجات، الزبائن، الطلبيات، البائعون ورقم الأعمال" } },
      { src: "assets/img/caba-store/mobile.webp", w: 540, h: 1073, kind: "mobile",
        alt: { fr: "Version mobile de Caba-Store avec catégories et navigation basse", en: "Caba-Store mobile view with categories and bottom navigation", ar: "نسخة الهاتف من Caba-Store مع الأصناف وشريط التنقل السفلي" } }
    ],
    t: {
      fr: {
        tagline: "Boutique en ligne multi-vendeurs pour toute l'Algérie",
        summary: "Caba-Store est une boutique e-commerce complète : catalogue par catégories, panier, livraison en 48 heures et paiement à la livraison. Les retours sont gérés automatiquement par Flowmerce via son API, ce qui en fait la première boutique connectée à mon écosystème.",
        features: [
          "Catalogue par catégories, recherche de produits et panier",
          "Paiement à la livraison, livraison en 48 h et retours gratuits sous 14 jours",
          "Espace multi-vendeurs avec abonnements",
          "Tableau de bord administrateur : produits, clients, commandes, chiffre d'affaires, statistiques",
          "Retours traités par Flowmerce via API",
          "Interface multilingue, thème clair et sombre, pensée d'abord pour le mobile"
        ]
      },
      en: {
        tagline: "Multi-vendor online store for all of Algeria",
        summary: "Caba-Store is a complete e-commerce store: catalogue by category, cart, 48-hour delivery and cash on delivery. Returns are handled automatically by Flowmerce through its API, making it the first store connected to my ecosystem.",
        features: [
          "Catalogue by category, product search and cart",
          "Cash on delivery, 48-hour delivery and free returns within 14 days",
          "Multi-vendor space with subscriptions",
          "Admin dashboard: products, customers, orders, revenue, analytics",
          "Returns processed by Flowmerce through its API",
          "Multilingual interface, light and dark themes, mobile-first"
        ]
      },
      ar: {
        tagline: "متجر إلكتروني متعدد البائعين لكل ولايات الجزائر",
        summary: "Caba-Store متجر إلكتروني متكامل: كتالوج حسب الأصناف، سلة مشتريات، توصيل خلال 48 ساعة والدفع عند الاستلام. تُعالَج المرتجعات تلقائياً عبر Flowmerce من خلال واجهته البرمجية، ما يجعله أول متجر مرتبط بمنظومتي.",
        features: [
          "كتالوج حسب الأصناف، بحث عن المنتجات وسلة مشتريات",
          "الدفع عند الاستلام، توصيل خلال 48 ساعة وإرجاع مجاني خلال 14 يوماً",
          "فضاء متعدد البائعين مع اشتراكات",
          "لوحة تحكم للمدير: المنتجات، الزبائن، الطلبيات، رقم الأعمال، الإحصائيات",
          "معالجة المرتجعات عبر واجهة Flowmerce البرمجية",
          "واجهة متعددة اللغات، مظهر فاتح وداكن، مصمّمة للهاتف أولاً"
        ]
      }
    }
  },

  {
    id: "grossiste-pro",
    name: "Grossiste Pro",
    brand: "#00704A",
    cats: ["saas", "mobile"],
    url: "https://grossiste-pro.vercel.app",
    domain: "grossiste-pro.vercel.app",
    stack: ["React", "Node.js", "SQL", "API REST", "Responsive"],
    shots: [
      { src: "assets/img/grossiste-pro/dashboard.webp", w: 1600, h: 747, kind: "desktop",
        alt: { fr: "Tableau de bord Grossiste Pro : chiffre d'affaires et marge brute par période", en: "Grossiste Pro dashboard: revenue and gross margin by period", ar: "لوحة تحكم Grossiste Pro: رقم الأعمال والهامش الإجمالي حسب الفترة" } },
      { src: "assets/img/grossiste-pro/stock.webp", w: 1600, h: 747, kind: "desktop",
        alt: { fr: "Produits et stock avec filtres rupture, expiration sous 3 mois et expirés", en: "Products and stock with out-of-stock, expiring within 3 months and expired filters", ar: "المنتجات والمخزون مع تصفية النفاد، المنتهية خلال 3 أشهر والمنتهية الصلاحية" } },
      { src: "assets/img/grossiste-pro/mobile.webp", w: 540, h: 1073, kind: "mobile",
        alt: { fr: "Espace pré-vendeur mobile : visite client et prise de commande", en: "Mobile pre-sales space: customer visit and order taking", ar: "فضاء البائع المسبق على الهاتف: زيارة الزبون وتسجيل الطلبية" } },
      { src: "assets/img/grossiste-pro/login.webp", w: 1600, h: 739, kind: "desktop",
        alt: { fr: "Écran de connexion Grossiste Pro, accès réservé", en: "Grossiste Pro sign-in screen, restricted access", ar: "شاشة الدخول إلى Grossiste Pro، دخول محصور" } }
    ],
    t: {
      fr: {
        tagline: "Commandes, tournées et livraisons pour les grossistes",
        summary: "Grossiste Pro digitalise le quotidien d'un grossiste en produits alimentaires. L'administration pilote le stock, les commandes et les tournées, tandis que les pré-vendeurs prennent les commandes chez les clients depuis leur téléphone.",
        features: [
          "Chiffre d'affaires et marge brute par jour, semaine, mois ou période personnalisée",
          "Chiffre d'affaires par pré-vendeur",
          "Gestion du stock par lot avec alertes de rupture et de date d'expiration",
          "Planning des tournées et suivi des journées de travail",
          "Espace pré-vendeur mobile : visite client, prise de commande, total en temps réel",
          "Gestion des utilisateurs et des rôles, comptes créés par l'administrateur"
        ]
      },
      en: {
        tagline: "Orders, routes and deliveries for wholesalers",
        summary: "Grossiste Pro digitises the daily work of a food wholesaler. The back office manages stock, orders and delivery routes, while pre-sales reps take orders at customers' shops from their phone.",
        features: [
          "Revenue and gross margin by day, week, month or custom period",
          "Revenue per sales rep",
          "Batch-level stock management with out-of-stock and expiry alerts",
          "Route planning and daily work tracking",
          "Mobile pre-sales space: customer visit, order taking, live total",
          "User and role management, accounts created by the administrator"
        ]
      },
      ar: {
        tagline: "الطلبيات والجولات والتوصيل لتجار الجملة",
        summary: "يرقمن Grossiste Pro العمل اليومي لتاجر جملة في المواد الغذائية. تتحكم الإدارة في المخزون والطلبيات والجولات، بينما يسجّل البائعون المسبقون الطلبيات عند الزبائن من هواتفهم.",
        features: [
          "رقم الأعمال والهامش الإجمالي حسب اليوم أو الأسبوع أو الشهر أو فترة مخصصة",
          "رقم الأعمال لكل بائع مسبق",
          "إدارة المخزون حسب الدفعة مع تنبيهات النفاد وانتهاء الصلاحية",
          "تخطيط الجولات ومتابعة أيام العمل",
          "فضاء البائع المسبق على الهاتف: زيارة الزبون، تسجيل الطلبية، المجموع مباشرة",
          "إدارة المستخدمين والأدوار، والحسابات ينشئها المدير"
        ]
      }
    }
  },

  {
    id: "sellwasl",
    name: "SellWasl",
    brand: "#0A1F5C",
    cats: ["saas", "mobile"],
    url: "https://sell-wasl.vercel.app",
    domain: "sell-wasl.vercel.app",
    stack: ["React", "Node.js", "Leaflet", "OpenStreetMap", "Mobile", "QR code"],
    shots: [
      { src: "assets/img/sellwasl/sectors.webp", w: 1600, h: 744, kind: "desktop",
        alt: { fr: "Secteurs dessinés sur la carte d'Oran pour planifier les visites", en: "Sales sectors drawn on the map of Oran to plan visits", ar: "قطاعات مرسومة على خريطة وهران لتخطيط الزيارات" } },
      { src: "assets/img/sellwasl/dashboard.webp", w: 1600, h: 748, kind: "desktop",
        alt: { fr: "Accueil administrateur : paie du mois, salaires, primes, acomptes et retenues", en: "Admin home: monthly payroll, salaries, bonuses, advances and deductions", ar: "الصفحة الرئيسية للمدير: أجور الشهر، الرواتب، المنح، التسبيقات والاقتطاعات" } },
      { src: "assets/img/sellwasl/mobile-home.webp", w: 540, h: 1073, kind: "mobile",
        alt: { fr: "Application mobile du vendeur : clients du secteur, visites et démarrage de la journée", en: "Sales rep mobile app: sector customers, visits and start of day", ar: "تطبيق البائع على الهاتف: زبائن القطاع، الزيارات وبدء اليوم" } },
      { src: "assets/img/sellwasl/mobile-pairing.webp", w: 540, h: 1073, kind: "mobile",
        alt: { fr: "Association du téléphone par QR code", en: "Pairing the phone with a QR code", ar: "ربط الهاتف عبر رمز QR" } }
    ],
    t: {
      fr: {
        tagline: "Plateforme de pilotage de la force de vente",
        summary: "SellWasl réunit sur une seule plateforme tout ce qu'une entreprise de distribution gère avec ses vendeurs : secteurs, visites, commandes, objectifs et paie. Une application web pour les superviseurs et une application mobile pour les vendeurs sur le terrain.",
        features: [
          "Secteurs dessinés directement sur la carte et planning des visites",
          "Suivi du jour, rapports et statistiques par vendeur et par secteur",
          "Commandes, lignes en attente, quotas et objectifs",
          "Paie intégrée : salaires, primes, acomptes et retenues",
          "Application mobile vendeur : démarrage de la journée, visites, commandes, carte",
          "Association sécurisée du téléphone par QR code et synchronisation des données"
        ]
      },
      en: {
        tagline: "Sales force management platform",
        summary: "SellWasl brings together everything a distribution company manages with its sales reps: sectors, visits, orders, targets and payroll. A web app for supervisors and a mobile app for reps in the field.",
        features: [
          "Sectors drawn directly on the map and visit planning",
          "Daily tracking, reports and analytics by rep and by sector",
          "Orders, pending lines, quotas and targets",
          "Built-in payroll: salaries, bonuses, advances and deductions",
          "Rep mobile app: start of day, visits, orders, map",
          "Secure phone pairing with a QR code and data synchronisation"
        ]
      },
      ar: {
        tagline: "منصة لتسيير فريق المبيعات",
        summary: "يجمع SellWasl في منصة واحدة كل ما تديره مؤسسة توزيع مع بائعيها: القطاعات، الزيارات، الطلبيات، الأهداف والأجور. تطبيق ويب للمشرفين وتطبيق هاتف للبائعين في الميدان.",
        features: [
          "قطاعات تُرسم مباشرة على الخريطة وتخطيط للزيارات",
          "متابعة يومية، تقارير وإحصائيات حسب البائع والقطاع",
          "الطلبيات، الأسطر المعلّقة، الحصص والأهداف",
          "تسيير الأجور: الرواتب، المنح، التسبيقات والاقتطاعات",
          "تطبيق البائع على الهاتف: بدء اليوم، الزيارات، الطلبيات، الخريطة",
          "ربط آمن للهاتف عبر رمز QR ومزامنة البيانات"
        ]
      }
    }
  },

  {
    id: "microtrace",
    name: "MicroTrace Studio",
    brand: "#127A7A",
    cats: ["data"],
    stack: ["Analyse de données", "Statistiques", "Visualisation", "SQL", "Web"],
    stackI18n: {
      en: ["Data analysis", "Statistics", "Visualisation", "SQL", "Web"],
      ar: ["تحليل البيانات", "الإحصاء", "التمثيل البياني", "SQL", "ويب"]
    },
    shots: [
      { src: "assets/img/microtrace/results.webp", w: 1047, h: 1463, kind: "desktop",
        alt: { fr: "Résultats : fréquence de quantification par polymère et concentrations en µg/mL", en: "Results: quantification frequency per polymer and concentrations in µg/mL", ar: "النتائج: تكرار القياس لكل بوليمر والتراكيز بـ µg/mL" } },
      { src: "assets/img/microtrace/projects.webp", w: 1600, h: 740, kind: "desktop",
        alt: { fr: "Liste des projets de recherche et études d'exemple", en: "Research projects list and sample studies", ar: "قائمة المشاريع البحثية والدراسات النموذجية" } }
    ],
    t: {
      fr: {
        tagline: "Plateforme d'analyse des microplastiques dans le sang",
        summary: "MicroTrace Studio est un prototype de recherche qui aide les équipes scientifiques à importer, contrôler et analyser des mesures de microplastiques obtenues par Py-GC/MS. Il calcule automatiquement les statistiques par polymère et produit des graphiques et des rapports prêts à partager.",
        features: [
          "Projets et études partagés entre les membres d'une équipe",
          "Import des mesures, contrôle qualité, spectres et images",
          "Fréquence de quantification par polymère : PE, PET, PMMA, PP, PS",
          "Statistiques par polymère : min, médiane, moyenne, max, seuils LOD et LOQ",
          "Graphiques interactifs, rapport et journal des modifications",
          "Étude d'exemple basée sur des données publiées (Leslie et al., 2022)"
        ]
      },
      en: {
        tagline: "Analysis platform for microplastics in blood",
        summary: "MicroTrace Studio is a research prototype that helps scientific teams import, check and analyse microplastic measurements obtained by Py-GC/MS. It computes per-polymer statistics automatically and produces charts and reports ready to share.",
        features: [
          "Projects and studies shared between team members",
          "Measurement import, quality control, spectra and images",
          "Quantification frequency per polymer: PE, PET, PMMA, PP, PS",
          "Per-polymer statistics: min, median, mean, max, LOD and LOQ thresholds",
          "Interactive charts, report and change log",
          "Sample study based on published data (Leslie et al., 2022)"
        ]
      },
      ar: {
        tagline: "منصة لتحليل الجسيمات البلاستيكية الدقيقة في الدم",
        summary: "MicroTrace Studio نموذج أولي بحثي يساعد الفرق العلمية على استيراد قياسات الجسيمات البلاستيكية الدقيقة المأخوذة بتقنية Py-GC/MS ومراقبتها وتحليلها. يحسب الإحصائيات لكل بوليمر تلقائياً وينتج رسوماً بيانية وتقارير جاهزة للمشاركة.",
        features: [
          "مشاريع ودراسات مشتركة بين أعضاء الفريق",
          "استيراد القياسات، مراقبة الجودة، الأطياف والصور",
          "تكرار القياس لكل بوليمر: PE، PET، PMMA، PP، PS",
          "إحصائيات لكل بوليمر: الأدنى، الوسيط، المتوسط، الأقصى، عتبات LOD وLOQ",
          "رسوم بيانية تفاعلية، تقرير وسجل للتعديلات",
          "دراسة نموذجية مبنية على بيانات منشورة (Leslie et al., 2022)"
        ]
      }
    }
  },

  {
    id: "wassaly",
    name: "Wassaly",
    brand: "#FF7A00",
    cats: ["mobile"],
    stack: ["Mobile", "Google Sign-In", "Géolocalisation", "Messagerie", "AR / FR"],
    stackI18n: {
      en: ["Mobile", "Google Sign-In", "Geolocation", "Messaging", "AR / FR"],
      ar: ["تطبيق هاتف", "Google Sign-In", "تحديد الموقع", "المراسلة", "AR / FR"]
    },
    shots: [
      { src: "assets/img/wassaly/landing.webp", w: 540, h: 1073, kind: "mobile",
        alt: { fr: "Accueil Wassaly : vos colis livrés par des livreurs de votre quartier", en: "Wassaly welcome screen: parcels delivered by couriers from your neighbourhood", ar: "واجهة Wassaly: طرودك يوصلها عمّال توصيل من حيّك" } },
      { src: "assets/img/wassaly/home.webp", w: 540, h: 1073, kind: "mobile",
        alt: { fr: "Publier une course et voir les livreurs à proximité", en: "Post a delivery and see nearby couriers", ar: "نشر طلب توصيل ورؤية عمّال التوصيل القريبين" } },
      { src: "assets/img/wassaly/role.webp", w: 540, h: 1073, kind: "mobile",
        alt: { fr: "Choix du rôle : client ou livreur", en: "Role choice: customer or courier", ar: "اختيار الدور: زبون أو عامل توصيل" } }
    ],
    t: {
      fr: {
        tagline: "Livraison de proximité entre voisins",
        summary: "Wassaly met en relation des clients avec des livreurs de leur quartier. Le client publie une course, les livreurs proches envoient leurs offres, et le client choisit ou négocie. Clients et livreurs utilisent la même application.",
        features: [
          "Publication d'une course en quelques secondes",
          "Offres des livreurs dans un rayon de 10 km, avec négociation",
          "Connexion avec Google et choix du rôle : client ou livreur",
          "Messagerie entre client et livreur, numéro partagé seulement après acceptation",
          "Deux mois gratuits pour les nouveaux livreurs",
          "Interface en arabe et en français, thème clair et sombre"
        ]
      },
      en: {
        tagline: "Neighbourhood delivery app",
        summary: "Wassaly connects customers with couriers from their own neighbourhood. The customer posts a delivery, nearby couriers send offers, and the customer picks one or negotiates. Customers and couriers use the same app.",
        features: [
          "Post a delivery in a few seconds",
          "Offers from couriers within 10 km, with negotiation",
          "Google sign-in and role choice: customer or courier",
          "Customer–courier messaging, phone number shared only after acceptance",
          "Two free months for new couriers",
          "Arabic and French interface, light and dark themes"
        ]
      },
      ar: {
        tagline: "توصيل محلي بين أبناء الحي",
        summary: "يربط Wassaly الزبائن بعمّال توصيل من حيّهم. ينشر الزبون طلب توصيل، فيرسل عمّال التوصيل القريبون عروضهم، ويختار الزبون أو يتفاوض. يستعمل الزبائن وعمّال التوصيل التطبيق نفسه.",
        features: [
          "نشر طلب توصيل في ثوانٍ",
          "عروض من عمّال التوصيل في نطاق 10 كلم مع إمكانية التفاوض",
          "تسجيل الدخول بحساب Google واختيار الدور: زبون أو عامل توصيل",
          "مراسلة بين الزبون وعامل التوصيل، ولا يُشارَك الرقم إلا بعد القبول",
          "شهران مجاناً لعمّال التوصيل الجدد",
          "واجهة بالعربية والفرنسية، مظهر فاتح وداكن"
        ]
      }
    }
  }
];

window.EXPERTISE = [
  { icon: "cloud",
    fr: ["Plateformes SaaS", "Applications multi-utilisateurs avec rôles, tableaux de bord, API et abonnements, prêtes à accueillir de nouveaux clients."],
    en: ["SaaS platforms", "Multi-user applications with roles, dashboards, APIs and subscriptions, ready to onboard new customers."],
    ar: ["منصات SaaS", "تطبيقات متعددة المستخدمين بأدوار ولوحات تحكم وواجهات API واشتراكات، جاهزة لاستقبال زبائن جدد."] },
  { icon: "brain",
    fr: ["Machine learning et IA", "Modèles de scoring et de recommandation, de la préparation des données au déploiement d'une API d'inférence."],
    en: ["Machine learning and AI", "Scoring and recommendation models, from data preparation to deploying an inference API."],
    ar: ["التعلّم الآلي والذكاء الاصطناعي", "نماذج تقييم وتوصية، من تحضير البيانات إلى نشر واجهة API للاستدلال."] },
  { icon: "code",
    fr: ["Développement full-stack", "Front-end React, back-end Node.js et PHP, bases de données SQL et intégrations REST ou SOAP."],
    en: ["Full-stack development", "React front ends, Node.js and PHP back ends, SQL databases and REST or SOAP integrations."],
    ar: ["التطوير الشامل Full-Stack", "واجهات React، خوادم Node.js وPHP، قواعد بيانات SQL وربط عبر REST أو SOAP."] },
  { icon: "phone",
    fr: ["Applications mobiles", "Applications terrain pour vendeurs et livreurs : hors connexion, géolocalisation, QR code, synchronisation."],
    en: ["Mobile apps", "Field apps for sales reps and couriers: offline use, geolocation, QR codes, synchronisation."],
    ar: ["تطبيقات الهاتف", "تطبيقات ميدانية للبائعين وعمّال التوصيل: العمل دون اتصال، تحديد الموقع، رموز QR، المزامنة."] },
  { icon: "chart",
    fr: ["Données et décisionnel", "Modélisation, statistiques et tableaux de bord ; traitement de gros volumes avec Hadoop et Spark."],
    en: ["Data and BI", "Data modelling, statistics and dashboards; large-scale processing with Hadoop and Spark."],
    ar: ["البيانات وذكاء الأعمال", "نمذجة البيانات، الإحصاء ولوحات القيادة؛ معالجة البيانات الضخمة بـ Hadoop وSpark."] },
  { icon: "server",
    fr: ["Cloud et déploiement", "Mise en production sur AWS et Vercel, conteneurs Docker et serveurs Linux."],
    en: ["Cloud and deployment", "Production deployments on AWS and Vercel, Docker containers and Linux servers."],
    ar: ["السحابة والنشر", "النشر على AWS وVercel، حاويات Docker وخوادم Linux."] }
];

window.SKILLS = [
  { fr: "Langages", en: "Languages", ar: "لغات البرمجة",
    items: ["Python", "JavaScript", "PHP", "Java", "C", "C++", "SQL", "Perl"] },
  { fr: "Web et API", en: "Web and APIs", ar: "الويب وواجهات API",
    items: ["React.js", "Node.js", "HTML", "CSS", "REST", "SOAP", "XML, XSD, DTD"] },
  { fr: "Données et IA", en: "Data and AI", ar: "البيانات والذكاء الاصطناعي",
    items: ["Machine Learning", "Hadoop", "Spark", "SQL", "joblib"] },
  { fr: "Cloud et outils", en: "Cloud and tools", ar: "السحابة والأدوات",
    items: ["AWS", "Linux", "Docker", "Vercel", "Git", "Microsoft Office"] }
];

window.TIMELINE = {
  work: [
    { date: { fr: "2025 – aujourd'hui", en: "2025 – present", ar: "2025 – الآن" },
      fr: ["Fondateur et développeur, Flowmerce (SaaS)", "Projet entrepreneurial et mémoire de Master, Oran. Conception et développement d'un système intelligent basé sur l'IA pour la gestion des retours e-commerce. Vainqueur de la 2e édition de ProtoMarket."],
      en: ["Founder and developer, Flowmerce (SaaS)", "Entrepreneurial project and Master's thesis, Oran. Designed and built an AI-based system for e-commerce returns management. Winner of the 2nd edition of ProtoMarket."],
      ar: ["مؤسس ومطوّر، Flowmerce (SaaS)", "مشروع ريادي ومذكرة ماستر، وهران. تصميم وتطوير نظام ذكي قائم على الذكاء الاصطناعي لإدارة مرتجعات التجارة الإلكترونية. الفائز بالطبعة الثانية من ProtoMarket."] },
    { date: { fr: "2023 – aujourd'hui", en: "2023 – present", ar: "2023 – الآن" },
      fr: ["Développeur full-stack indépendant", "Conception et livraison de Caba-Store, Grossiste Pro, SellWasl, Wassaly et MicroTrace Studio pour des commerces, des distributeurs et une équipe de recherche."],
      en: ["Freelance full-stack developer", "Designed and shipped Caba-Store, Grossiste Pro, SellWasl, Wassaly and MicroTrace Studio for retailers, distributors and a research team."],
      ar: ["مطوّر Full-Stack مستقل", "تصميم وإطلاق Caba-Store وGrossiste Pro وSellWasl وWassaly وMicroTrace Studio لفائدة تجار وموزعين وفريق بحث علمي."] },
    { date: { fr: "2025", en: "2025", ar: "2025" },
      fr: ["Application web associative, association AFFAK", "Projet de fin d'études de Licence : application web de gestion pour une association caritative."],
      en: ["Web application for the AFFAK association", "Bachelor's final project: a management web app for a charity."],
      ar: ["تطبيق ويب لجمعية آفاق", "مشروع تخرج الليسانس: تطبيق ويب لتسيير جمعية خيرية."] },
    { date: { fr: "2024 – 2025", en: "2024 – 2025", ar: "2024 – 2025" },
      fr: ["Expérience terrain : pré-vente et caisse", "Pré-vendeur chez Agro Merar (Oran) puis caissier (Mecheria). Cette pratique du terrain a directement inspiré SellWasl et Grossiste Pro."],
      en: ["Field experience: pre-sales and checkout", "Pre-sales rep at Agro Merar (Oran), then cashier (Mecheria). This hands-on experience directly shaped SellWasl and Grossiste Pro."],
      ar: ["خبرة ميدانية: البيع المسبق والصندوق", "بائع مسبق لدى Agro Merar (وهران) ثم أمين صندوق (المشرية). ألهمت هذه التجربة الميدانية مباشرة تطبيقَي SellWasl وGrossiste Pro."] }
  ],
  edu: [
    { date: { fr: "Depuis 2025", en: "Since 2025", ar: "منذ 2025" },
      fr: ["Master Informatique, Systèmes d'Informations et Données (SID)", "Université des Sciences et de la Technologie d'Oran Mohamed Boudiaf (USTO-MB)"],
      en: ["Master's in Computer Science, Information Systems and Data (SID)", "University of Science and Technology of Oran Mohamed Boudiaf (USTO-MB)"],
      ar: ["ماستر إعلام آلي، نظم المعلومات والبيانات (SID)", "جامعة العلوم والتكنولوجيا بوهران محمد بوضياف (USTO-MB)"] },
    { date: { fr: "2023", en: "2023", ar: "2023" },
      fr: ["Licence, Ingénierie des Systèmes d'Information et du Logiciel (ISIL)", "Université des Sciences et de la Technologie d'Oran Mohamed Boudiaf (USTO-MB)"],
      en: ["Bachelor's, Information Systems and Software Engineering (ISIL)", "University of Science and Technology of Oran Mohamed Boudiaf (USTO-MB)"],
      ar: ["ليسانس، هندسة نظم المعلومات والبرمجيات (ISIL)", "جامعة العلوم والتكنولوجيا بوهران محمد بوضياف (USTO-MB)"] },
    { date: { fr: "2018 – 2019", en: "2018 – 2019", ar: "2018 – 2019" },
      fr: ["Année préparatoire en langue russe", "Université nationale d'économie urbaine A.N. Beketov, Kharkiv, Ukraine"],
      en: ["Russian language preparatory year", "A.N. Beketov National University of Urban Economy, Kharkiv, Ukraine"],
      ar: ["سنة تحضيرية في اللغة الروسية", "جامعة بيكيتوف الوطنية للاقتصاد الحضري، خاركيف، أوكرانيا"] }
  ],
  langs: [
    { fr: ["Arabe", "langue maternelle"], en: ["Arabic", "native"], ar: ["العربية", "اللغة الأم"], level: 5 },
    { fr: ["Français", "courant"], en: ["French", "fluent"], ar: ["الفرنسية", "بطلاقة"], level: 4 },
    { fr: ["Anglais", "intermédiaire"], en: ["English", "intermediate"], ar: ["الإنجليزية", "متوسط"], level: 3 },
    { fr: ["Russe", "notions"], en: ["Russian", "basic"], ar: ["الروسية", "أساسيات"], level: 1 }
  ]
};
