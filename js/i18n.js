const translations = {
  fr: {
    nav: { home: `Accueil`, bio: `Biographie`, calendar: `Calendrier`, recordings: `Enregistrements`, photos: `Photos`, press: `Presse`, news: `Actualités`, contact: `Management` },
    logo: { tagline: `Pianiste` },
    footer: { copyright: `© 2026 Lev. Tous droits réservés.` },
    aria: { openMenu: `Ouvrir le menu` },
    titles: {
      home: `Lev — Pianiste`,
      bio: `Biographie — Lev`,
      calendar: `Calendrier — Lev`,
      recordings: `Enregistrements — Lev`,
      photos: `Photos — Lev`,
      press: `Presse — Lev`,
      news: `Actualités — Lev`,
      contact: `Management & Contact — Lev`
    },
    photos: {
      eyebrow: `Galerie`,
      title: `Photos`
    },
    alerts: {
      newsletterSuccess: `Merci pour votre inscription !`,
      contactSuccess: `Merci pour votre message, nous reviendrons vers vous rapidement.`
    },
    home: {
      hero: {
        eyebrow: `Pianiste classique`,
        title: `Lev`,
        text: `Récitals, concertos et musique de chambre à travers le monde. Découvrez l'actualité, l'agenda et les enregistrements.`,
        cta: `Voir l'agenda`,
        scroll: `Défiler`
      },
      split1: {
        eyebrow: `Nouvel enregistrement`,
        title: `Œuvres tardives — un nouvel album`,
        text: `Un programme consacré aux pages les plus intimes du répertoire romantique, enregistré en concert et en studio.`,
        cta: `Écouter`
      },
      highlights: {
        eyebrow: `À la une`,
        title: `Temps forts`
      },
      card1: { date: `Mars 2027`, title: `Prochain concert`, text: `Une soirée exceptionnelle dans l'une des plus belles salles d'Europe.` },
      card2: { date: `Automne 2026`, title: `Tournée internationale`, text: `Une série de récitals à travers plusieurs pays, avec un programme renouvelé.` },
      card3: { date: `Été 2026`, title: `Festival d'été`, text: `Participation à un festival de musique de chambre reconnu.` },
      split2: {
        eyebrow: `Prochain concert`,
        title: `Concerto — Salle Philharmonique`,
        text: `Date, salle et programme détaillé disponibles dans la rubrique calendrier.`,
        cta: `Consulter le calendrier`
      },
      gallery: { eyebrow: `Galerie`, title: `En images`, alt: `Photo` },
      newsletter: {
        title: `Restez informé`,
        text: `Inscrivez-vous pour recevoir les dernières actualités et dates de concert.`,
        placeholder: `Votre adresse e-mail`,
        submit: `S'inscrire`
      }
    },
    bio: {
      eyebrow: `Portrait`,
      title: `Biographie`,
      formation: {
        h3: `Formation`,
        p1: `Lev Tchefanov est né en 2007 à Moscou, dans une famille de musiciens professionnels, et commence la musique dès l'âge de 4 ans. En 2012, il intègre l'École Centrale de Musique — Académie des Arts du Spectacle, dans la classe de la célèbre pédagogue Kira Alexandrovna Chachkina, première professeure de Mikhaïl Pletnev et de nombreux autres musiciens reconnus. Il poursuit ensuite sa formation pendant plusieurs années auprès de Natalia Viktorovna Bogdanova, responsable du département de piano.`,
        p2: `Il termine l'École Centrale de Musique sous la direction du professeur Andreï Vladimirovitch Limaev, lui-même élève de K. A. Chachkina. Lev est aujourd'hui étudiant en première année au Conservatoire d'État de Moscou Piotr Ilitch Tchaïkovski, dans la classe des professeurs Andreï Pisarev et Nikolaï Lugansky.`
      },
      repertoire: {
        h3: `Répertoire`,
        p1: `Le répertoire de Lev est vaste : il couvre aussi bien les œuvres de l'époque baroque et du classicisme viennois que la création contemporaine. Une large place est occupée par les compositeurs romantiques et avant-gardistes, russes comme d'Europe occidentale, dont l'interprétation lui a valu la reconnaissance d'un public moscovite exigeant.`
      },
      prizes: {
        h3: `Prix et distinctions`,
        intro: `Lev est lauréat de nombreux concours panrusses et internationaux :`,
        li: [
          { year: `2016`, text: `1<sup>er</sup> prix, concours international de piano « Città di Spoleto », Spolète, Italie` },
          { year: `2018–2019`, text: `1<sup>er</sup> prix, « Eserski biseri », Ohrid–Struga, Macédoine du Nord` },
          { year: `2016`, text: `Concours international de piano « La Voie slave », Nessebar, Bulgarie` },
          { year: `2018`, text: `1<sup>er</sup> degré, concours-festival international de l'École Centrale de Musique` },
          { year: `2020`, text: `1<sup>er</sup> prix, 5<sup>e</sup> concours international de musique « Melos », Rome, Italie` },
          { year: `2019`, text: `Festival international de piano Young Classics, Pistoia, Italie` },
          { year: `2017`, text: `1<sup>er</sup> prix, concours-festival international « Golden Stars Rain », Vladimir, Russie` },
          { year: `2018`, text: `Festival international de musique « New Times », Souzdal, Russie` },
          { year: `2015`, text: `1<sup>er</sup> prix, 7<sup>e</sup> festival-concours international « La Lumière de l'étoile de Noël », Kazan, Russie` },
          { year: `2015`, text: `1<sup>er</sup> prix, premier concours musico-artistique « Journée ensoleillée », Crimée, Russie` },
          { year: `2025`, text: `1<sup>er</sup> prix, concours international « Dune baltique », Kaliningrad, Russie` }
        ]
      },
      stats: {
        label1: `Né à Moscou`,
        label2: `Prix internationaux`,
        label3: `Pays visités`,
        label4: `Salles & festivals`
      },
      stage: {
        h3: `Sur scène, en Russie et à l'international`,
        p1: `Il se produit régulièrement dans de nombreuses villes russes — Kazan, Saint-Pétersbourg, Nijni Novgorod, Vladimir, Klin, Koursk, Pouchkino, Stary Oskol, Souzdal, Iaroslavl — ainsi qu'à l'étranger, en Bulgarie, en Grèce, en Italie, en France, en Macédoine, au Luxembourg et en Biélorussie.`,
        p2: `En soliste ou avec orchestre, il s'est produit notamment :`,
        li: [
          `Petite salle et salle Rachmaninov du Conservatoire d'État de Moscou Tchaïkovski`,
          `Salle de concert GES-2`,
          `Grande salle de la Philharmonie de Kaliningrad et cathédrale de Königsberg`,
          `Salle de concert des Pakgauzy et grande salle du Conservatoire, Nijni Novgorod`,
          `Théâtre de l'Ermitage, Saint-Pétersbourg`,
          `Salle de concert de la Maison Pachkov`,
          `Petite et grande salles du Centre culturel « Meridian »`,
          `Salon du livre de la Nouvelle Galerie Tretiakov, lors de la « Nuit des musées »`,
          `Atrium du Musée Pouchkine`,
          `Grande salle de la Philharmonie de Sotchi`,
          `Petite salle de la Philharmonie de Koursk`,
          `Temple de Poséidon (récital en plein air), Grèce`,
          `Théâtre de l'Opéra, Spolète, Italie`,
          `Maison russe à Paris, Maison russe à Luxembourg, domaine Terra Nova`
        ]
      },
      orchestras: {
        h3: `Orchestres, festivals et engagements`,
        p1: `Lev collabore avec plusieurs orchestres de Russie et de Grèce, dont récemment l'Orchestre modèle de la Garde nationale de la Fédération de Russie.`,
        p2: `Il participe au festival Pianissimo (Moscou, Nijni Novgorod, Saint-Pétersbourg), à l'abonnement « Des pays lointains et des gens » de la salle Rachmaninov du Conservatoire de Moscou Tchaïkovski, à Classique sur la mer (Sotchi, 2024), à la Suite de janvier (Klin, 2025) et au Festival Tchaïkovski. Il prend part aux concerts du Fonds caritatif international Vladimir Spivakov ainsi qu'à ceux du fonds « Art Line ».`
      }
    },
    calendar: {
      eyebrow: `Agenda`,
      title: `Calendrier`,
      cta: `Billetterie`,
      events: [
        { date: `14 sept.<br>2026`, title: `Récital — Sonates et Ballades`, place: `Salle Gaveau, Paris, France` },
        { date: `02 oct.<br>2026`, title: `Concerto n°2 — Orchestre Philharmonique`, place: `Konzerthaus, Vienne, Autriche` },
        { date: `19 nov.<br>2026`, title: `Musique de chambre — Trio`, place: `Wigmore Hall, Londres, Royaume-Uni` },
        { date: `08 janv.<br>2027`, title: `Récital d'ouverture de saison`, place: `Philharmonie, Berlin, Allemagne` },
        { date: `22 mars<br>2027`, title: `Tournée nord-américaine`, place: `Carnegie Hall, New York, États-Unis` }
      ]
    },
    recordings: {
      eyebrow: `Discographie`,
      title: `Enregistrements`,
      ecouter: { eyebrow: `Écouter`, title: `Concerto n°2, en concert` },
      rec1: { label: `Album — 2026`, title: `Œuvres tardives` },
      rec2: { label: `Album — 2024`, title: `Sonates` },
      rec3: { label: `Vidéo — Concert live`, title: `Concerto n°2, en concert` },
      rec4: { label: `Album — 2021`, title: `Musique de chambre` },
      videos: { eyebrow: `Vidéos`, title: `Concerts filmés` }
    },
    press: {
      eyebrow: `Revue de presse`,
      title: `Presse`,
      item1: { source: `Le Monde de la Musique — Mars 2026`, quote: `« Une interprétation d'une clarté et d'une intensité rares, portée par une technique impeccable. »` },
      item2: { source: `Gramophone — Janvier 2026`, quote: `« Lev impose un son personnel, entre rigueur et liberté, qui marque durablement l'auditeur. »` },
      item3: { source: `The Strad — Octobre 2025`, quote: `« Un artiste complet, dont le jeu allie profondeur d'analyse et sens du récit musical. »` }
    },
    news: {
      eyebrow: `Journal`,
      title: `Actualités`,
      item1: { date: `12 Juin 2026`, title: `Sortie du nouvel album`, text: `Un nouvel enregistrement consacré aux œuvres tardives du répertoire romantique, disponible dès aujourd'hui.` },
      item2: { date: `03 Mai 2026`, title: `Annonce de la tournée 2027`, text: `Dix villes, cinq pays : découvrez les premières dates de la prochaine tournée internationale.` },
      item3: { date: `21 Mars 2026`, title: `Masterclasse publique`, text: `Une masterclasse ouverte au public autour du répertoire pour piano seul.` }
    },
    contact: {
      eyebrow: `Nous contacter`,
      title: `Management`,
      heading: `Management général`,
      text: `Pour toute demande de booking, presse ou partenariat.`,
      location: `Paris, France`,
      cvDownload: `Télécharger le CV`,
      form: { name: `Nom`, email: `E-mail`, message: `Message`, submit: `Envoyer` }
    }
  },

  en: {
    nav: { home: `Home`, bio: `Biography`, calendar: `Calendar`, recordings: `Recordings`, photos: `Photos`, press: `Press`, news: `News`, contact: `Management` },
    logo: { tagline: `Pianist` },
    footer: { copyright: `© 2026 Lev. All rights reserved.` },
    aria: { openMenu: `Open menu` },
    titles: {
      home: `Lev — Pianist`,
      bio: `Biography — Lev`,
      calendar: `Calendar — Lev`,
      recordings: `Recordings — Lev`,
      photos: `Photos — Lev`,
      press: `Press — Lev`,
      news: `News — Lev`,
      contact: `Management & Contact — Lev`
    },
    photos: {
      eyebrow: `Gallery`,
      title: `Photos`
    },
    alerts: {
      newsletterSuccess: `Thank you for subscribing!`,
      contactSuccess: `Thank you for your message, we will get back to you shortly.`
    },
    home: {
      hero: {
        eyebrow: `Classical pianist`,
        title: `Lev`,
        text: `Recitals, concertos and chamber music around the world. Discover the latest news, tour dates and recordings.`,
        cta: `View the calendar`,
        scroll: `Scroll`
      },
      split1: {
        eyebrow: `New recording`,
        title: `Late Works — a new album`,
        text: `A programme devoted to the most intimate pages of the Romantic repertoire, recorded live and in the studio.`,
        cta: `Listen`
      },
      highlights: {
        eyebrow: `Highlights`,
        title: `Highlights`
      },
      card1: { date: `March 2027`, title: `Next concert`, text: `An exceptional evening in one of Europe's finest concert halls.` },
      card2: { date: `Autumn 2026`, title: `International tour`, text: `A series of recitals across several countries, with a renewed programme.` },
      card3: { date: `Summer 2026`, title: `Summer festival`, text: `Appearance at a renowned chamber music festival.` },
      split2: {
        eyebrow: `Next concert`,
        title: `Concerto — Philharmonic Hall`,
        text: `Date, venue and full programme available in the calendar section.`,
        cta: `View the calendar`
      },
      gallery: { eyebrow: `Gallery`, title: `In pictures`, alt: `Photo` },
      newsletter: {
        title: `Stay informed`,
        text: `Sign up to receive the latest news and concert dates.`,
        placeholder: `Your email address`,
        submit: `Subscribe`
      }
    },
    bio: {
      eyebrow: `Portrait`,
      title: `Biography`,
      formation: {
        h3: `Training`,
        p1: `Lev Tchefanov was born in 2007 in Moscow into a family of professional musicians and began music at the age of 4. In 2012, he entered the Central Music School — Academy of Performing Arts, in the class of the renowned pedagogue Kira Alexandrovna Chachkina, the first teacher of Mikhail Pletnev and many other celebrated musicians. He then continued his training for several years under Natalia Viktorovna Bogdanova, head of the piano department.`,
        p2: `He completed the Central Music School under Professor Andrei Vladimirovich Limaev, himself a former student of K. A. Chachkina. Lev is currently a first-year student at the Moscow Tchaikovsky State Conservatory, in the class of Professors Andrei Pisarev and Nikolai Lugansky.`
      },
      repertoire: {
        h3: `Repertoire`,
        p1: `Lev's repertoire is extensive, spanning works of the Baroque era and Viennese Classicism as well as contemporary composition. A significant place is given to Romantic and avant-garde composers, both Russian and Western European, whose performance has earned him recognition from Moscow's demanding audiences.`
      },
      prizes: {
        h3: `Prizes and awards`,
        intro: `Lev is a prize-winner of numerous all-Russian and international competitions:`,
        li: [
          { year: `2016`, text: `1<sup>st</sup> Prize, "Città di Spoleto" International Piano Competition, Spoleto, Italy` },
          { year: `2018–2019`, text: `1<sup>st</sup> Prize, "Eserski biseri", Ohrid–Struga, North Macedonia` },
          { year: `2016`, text: `"The Slavic Way" International Piano Competition, Nessebar, Bulgaria` },
          { year: `2018`, text: `1<sup>st</sup> Degree, Central Music School International Competition-Festival` },
          { year: `2020`, text: `1<sup>st</sup> Prize, 5<sup>th</sup> "Melos" International Music Competition, Rome, Italy` },
          { year: `2019`, text: `Young Classics International Piano Festival, Pistoia, Italy` },
          { year: `2017`, text: `1<sup>st</sup> Prize, "Golden Stars Rain" International Competition-Festival, Vladimir, Russia` },
          { year: `2018`, text: `"New Times" International Music Festival, Suzdal, Russia` },
          { year: `2015`, text: `1<sup>st</sup> Prize, 7<sup>th</sup> "Light of the Christmas Star" International Festival-Competition, Kazan, Russia` },
          { year: `2015`, text: `1<sup>st</sup> Prize, 1<sup>st</sup> "Sunny Day" Music and Art Competition, Crimea, Russia` },
          { year: `2025`, text: `1<sup>st</sup> Prize, "Baltic Dune" International Competition, Kaliningrad, Russia` }
        ]
      },
      stats: {
        label1: `Born in Moscow`,
        label2: `International prizes`,
        label3: `Countries`,
        label4: `Halls & festivals`
      },
      stage: {
        h3: `On stage, in Russia and abroad`,
        p1: `He performs regularly in numerous Russian cities — Kazan, Saint Petersburg, Nizhny Novgorod, Vladimir, Klin, Kursk, Pushkino, Stary Oskol, Suzdal, Yaroslavl — as well as abroad, in Bulgaria, Greece, Italy, France, Macedonia, Luxembourg and Belarus.`,
        p2: `As a soloist or with orchestra, he has performed notably at:`,
        li: [
          `Small Hall and Rachmaninov Hall of the Moscow Tchaikovsky State Conservatory`,
          `GES-2 Concert Hall`,
          `Grand Hall of the Kaliningrad Philharmonic and Königsberg Cathedral`,
          `Pakgauzy Concert Hall and the Grand Hall of the Conservatory, Nizhny Novgorod`,
          `Hermitage Theatre, Saint Petersburg`,
          `Concert hall of the Pashkov House`,
          `Small and Grand Halls of the "Meridian" Cultural Centre`,
          `Book hall of the New Tretyakov Gallery, during "Museum Night"`,
          `Atrium of the Pushkin Museum`,
          `Grand Hall of the Sochi Philharmonic`,
          `Small Hall of the Kursk Philharmonic`,
          `Temple of Poseidon (open-air recital), Greece`,
          `Opera Theatre, Spoleto, Italy`,
          `Russian House in Paris, Russian House in Luxembourg, Terra Nova estate`
        ]
      },
      orchestras: {
        h3: `Orchestras, festivals and engagements`,
        p1: `Lev collaborates with several orchestras in Russia and Greece, most recently the Model Orchestra of the National Guard of the Russian Federation.`,
        p2: `He takes part in the Pianissimo festival (Moscow, Nizhny Novgorod, Saint Petersburg), the "Distant Lands and Peoples" subscription series at the Rachmaninov Hall of the Moscow Tchaikovsky Conservatory, Classics by the Sea (Sochi, 2024), the January Suite (Klin, 2025) and the Tchaikovsky Festival. He also performs at concerts of the Vladimir Spivakov International Charity Foundation and the "Art Line" foundation.`
      }
    },
    calendar: {
      eyebrow: `Schedule`,
      title: `Calendar`,
      cta: `Tickets`,
      events: [
        { date: `Sep 14<br>2026`, title: `Recital — Sonatas and Ballades`, place: `Salle Gaveau, Paris, France` },
        { date: `Oct 02<br>2026`, title: `Concerto No. 2 — Philharmonic Orchestra`, place: `Konzerthaus, Vienna, Austria` },
        { date: `Nov 19<br>2026`, title: `Chamber Music — Trio`, place: `Wigmore Hall, London, United Kingdom` },
        { date: `Jan 08<br>2027`, title: `Season Opening Recital`, place: `Philharmonie, Berlin, Germany` },
        { date: `Mar 22<br>2027`, title: `North American Tour`, place: `Carnegie Hall, New York, USA` }
      ]
    },
    recordings: {
      eyebrow: `Discography`,
      title: `Recordings`,
      ecouter: { eyebrow: `Listen`, title: `Concerto No. 2, live` },
      rec1: { label: `Album — 2026`, title: `Late Works` },
      rec2: { label: `Album — 2024`, title: `Sonatas` },
      rec3: { label: `Video — Live Concert`, title: `Concerto No. 2, live` },
      rec4: { label: `Album — 2021`, title: `Chamber Music` },
      videos: { eyebrow: `Videos`, title: `Filmed concerts` }
    },
    press: {
      eyebrow: `Press`,
      title: `Press`,
      item1: { source: `Le Monde de la Musique — March 2026`, quote: `"A performance of rare clarity and intensity, carried by an impeccable technique."` },
      item2: { source: `Gramophone — January 2026`, quote: `"Lev asserts a personal sound, between rigour and freedom, that leaves a lasting impression on the listener."` },
      item3: { source: `The Strad — October 2025`, quote: `"A complete artist, whose playing combines analytical depth with a real sense of musical narrative."` }
    },
    news: {
      eyebrow: `News`,
      title: `News`,
      item1: { date: `June 12, 2026`, title: `New Album Release`, text: `A new recording devoted to the late works of the Romantic repertoire, available today.` },
      item2: { date: `May 03, 2026`, title: `2027 Tour Announcement`, text: `Ten cities, five countries: discover the first dates of the upcoming international tour.` },
      item3: { date: `March 21, 2026`, title: `Public Masterclass`, text: `A masterclass open to the public, focused on the solo piano repertoire.` }
    },
    contact: {
      eyebrow: `Get in touch`,
      title: `Management`,
      heading: `General management`,
      text: `For any booking, press or partnership enquiries.`,
      location: `Paris, France`,
      cvDownload: `Download CV`,
      form: { name: `Name`, email: `Email`, message: `Message`, submit: `Send` }
    }
  },

  ru: {
    nav: { home: `Главная`, bio: `Биография`, calendar: `Афиша`, recordings: `Записи`, photos: `Фото`, press: `Пресса`, news: `Новости`, contact: `Менеджмент` },
    logo: { tagline: `Пианист` },
    footer: { copyright: `© 2026 Лев. Все права защищены.` },
    aria: { openMenu: `Открыть меню` },
    titles: {
      home: `Лев — Пианист`,
      bio: `Биография — Лев`,
      calendar: `Афиша — Лев`,
      recordings: `Записи — Лев`,
      photos: `Фото — Лев`,
      press: `Пресса — Лев`,
      news: `Новости — Лев`,
      contact: `Менеджмент и контакты — Лев`
    },
    photos: {
      eyebrow: `Галерея`,
      title: `Фото`
    },
    alerts: {
      newsletterSuccess: `Спасибо за подписку!`,
      contactSuccess: `Спасибо за ваше сообщение, мы скоро с вами свяжемся.`
    },
    home: {
      hero: {
        eyebrow: `Классический пианист`,
        title: `Лев`,
        text: `Сольные концерты, выступления с оркестром и камерная музыка по всему миру. Смотрите новости, афишу и записи.`,
        cta: `Смотреть афишу`,
        scroll: `Прокрутите`
      },
      split1: {
        eyebrow: `Новая запись`,
        title: `Поздние сочинения — новый альбом`,
        text: `Программа, посвящённая самым сокровенным страницам романтического репертуара, записанная на концертах и в студии.`,
        cta: `Слушать`
      },
      highlights: {
        eyebrow: `Главное`,
        title: `Главные события`
      },
      card1: { date: `Март 2027`, title: `Ближайший концерт`, text: `Особенный вечер в одном из красивейших концертных залов Европы.` },
      card2: { date: `Осень 2026`, title: `Международный тур`, text: `Серия сольных концертов в нескольких странах с обновлённой программой.` },
      card3: { date: `Лето 2026`, title: `Летний фестиваль`, text: `Участие в известном фестивале камерной музыки.` },
      split2: {
        eyebrow: `Ближайший концерт`,
        title: `Концерт — Филармонический зал`,
        text: `Дата, зал и подробная программа — в разделе «Афиша».`,
        cta: `Смотреть афишу`
      },
      gallery: { eyebrow: `Галерея`, title: `В фотографиях`, alt: `Фото` },
      newsletter: {
        title: `Будьте в курсе`,
        text: `Подпишитесь, чтобы получать новости и даты концертов.`,
        placeholder: `Ваш адрес электронной почты`,
        submit: `Подписаться`
      }
    },
    bio: {
      eyebrow: `Портрет`,
      title: `Биография`,
      formation: {
        h3: `Образование`,
        p1: `Лев Чефанов родился в 2007 году в Москве, в семье профессиональных музыкантов, и начал заниматься музыкой в возрасте 4 лет. В 2012 году он поступил в Центральную музыкальную школу — Академию исполнительских искусств, в класс известного педагога Киры Александровны Чачкиной, первого педагога Михаила Плетнёва и многих других выдающихся музыкантов. Затем в течение нескольких лет он занимался у Натальи Викторовны Богдановой, заведующей фортепианным отделением.`,
        p2: `Обучение в Центральной музыкальной школе он завершил в классе профессора Андрея Владимировича Лимаева, ученика К. А. Чачкиной. В настоящее время Лев — студент первого курса Московской государственной консерватории имени П. И. Чайковского, класс профессоров Андрея Писарева и Николая Луганского.`
      },
      repertoire: {
        h3: `Репертуар`,
        p1: `Репертуар Льва обширен: он включает как произведения барокко и венского классицизма, так и современную музыку. Значительное место занимают романтические и авангардные композиторы — как русские, так и западноевропейские, — исполнение которых принесло ему признание взыскательной московской публики.`
      },
      prizes: {
        h3: `Награды и премии`,
        intro: `Лев — лауреат многочисленных всероссийских и международных конкурсов:`,
        li: [
          { year: `2016`, text: `1-я премия, Международный конкурс пианистов «Città di Spoleto», Сполето, Италия` },
          { year: `2018–2019`, text: `1-я премия, «Eserski biseri», Охрид–Струга, Северная Македония` },
          { year: `2016`, text: `Международный конкурс пианистов «Славянский путь», Несебыр, Болгария` },
          { year: `2018`, text: `1-я степень, Международный конкурс-фестиваль Центральной музыкальной школы` },
          { year: `2020`, text: `1-я премия, V Международный музыкальный конкурс «Melos», Рим, Италия` },
          { year: `2019`, text: `Международный фестиваль пианистов Young Classics, Пистоя, Италия` },
          { year: `2017`, text: `1-я премия, Международный конкурс-фестиваль «Golden Stars Rain», Владимир, Россия` },
          { year: `2018`, text: `Международный музыкальный фестиваль «New Times», Суздаль, Россия` },
          { year: `2015`, text: `1-я премия, VII Международный фестиваль-конкурс «Свет Рождественской звезды», Казань, Россия` },
          { year: `2015`, text: `1-я премия, I Музыкально-художественный конкурс «Солнечный день», Крым, Россия` },
          { year: `2025`, text: `1-я премия, Международный конкурс «Балтийская дюна», Калининград, Россия` }
        ]
      },
      stats: {
        label1: `Родился в Москве`,
        label2: `Международных премий`,
        label3: `Стран с гастролями`,
        label4: `Залов и фестивалей`
      },
      stage: {
        h3: `На сцене — в России и за рубежом`,
        p1: `Он регулярно выступает во многих городах России — Казани, Санкт-Петербурге, Нижнем Новгороде, Владимире, Клину, Курске, Пушкино, Старом Осколе, Суздале, Ярославле — а также за рубежом: в Болгарии, Греции, Италии, Франции, Македонии, Люксембурге и Беларуси.`,
        p2: `В качестве солиста и в сопровождении оркестра он выступал, в частности:`,
        li: [
          `Малый зал и Рахманиновский зал Московской консерватории имени П. И. Чайковского`,
          `Концертный зал ГЭС-2`,
          `Большой зал Калининградской филармонии и Кафедральный собор`,
          `Концертный зал «Пакгаузы» и Большой зал консерватории, Нижний Новгород`,
          `Театр «Эрмитаж», Санкт-Петербург`,
          `Концертный зал Дома Пашкова`,
          `Малый и Большой залы культурного центра «Меридиан»`,
          `Книжный салон Новой Третьяковской галереи, в рамках «Ночи музеев»`,
          `Атриум Пушкинского музея`,
          `Большой зал Сочинской филармонии`,
          `Малый зал Курской филармонии`,
          `Храм Посейдона (концерт под открытым небом), Греция`,
          `Оперный театр, Сполето, Италия`,
          `Русский дом в Париже, Русский дом в Люксембурге, поместье Terra Nova`
        ]
      },
      orchestras: {
        h3: `Оркестры, фестивали и проекты`,
        p1: `Лев сотрудничает с несколькими оркестрами России и Греции, в том числе в последнее время — с Образцовым оркестром Росгвардии.`,
        p2: `Он участвует в фестивале Pianissimo (Москва, Нижний Новгород, Санкт-Петербург), в абонементе «Из дальних странствий возвратясь» Рахманиновского зала Московской консерватории, в фестивале «Классика у моря» (Сочи, 2024), в «Январских вечерах» (Клин, 2025) и в Фестивале Чайковского. Он выступает на концертах Международного благотворительного фонда Владимира Спивакова, а также фонда «Арт-Лайн».`
      }
    },
    calendar: {
      eyebrow: `Афиша`,
      title: `Афиша`,
      cta: `Билеты`,
      events: [
        { date: `14 сент.<br>2026`, title: `Сольный концерт — Сонаты и Баллады`, place: `Зал Гаво, Париж, Франция` },
        { date: `02 окт.<br>2026`, title: `Концерт №2 — с Филармоническим оркестром`, place: `Концертхаус, Вена, Австрия` },
        { date: `19 нояб.<br>2026`, title: `Камерная музыка — Трио`, place: `Уигмор-холл, Лондон, Великобритания` },
        { date: `08 янв.<br>2027`, title: `Открытие концертного сезона`, place: `Филармония, Берлин, Германия` },
        { date: `22 мар.<br>2027`, title: `Североамериканское турне`, place: `Карнеги-холл, Нью-Йорк, США` }
      ]
    },
    recordings: {
      eyebrow: `Дискография`,
      title: `Записи`,
      ecouter: { eyebrow: `Слушать`, title: `Концерт №2, вживую` },
      rec1: { label: `Альбом — 2026`, title: `Поздние сочинения` },
      rec2: { label: `Альбом — 2024`, title: `Сонаты` },
      rec3: { label: `Видео — концертная запись`, title: `Концерт №2, вживую` },
      rec4: { label: `Альбом — 2021`, title: `Камерная музыка` },
      videos: { eyebrow: `Видео`, title: `Видеозаписи концертов` }
    },
    press: {
      eyebrow: `Пресса`,
      title: `Пресса`,
      item1: { source: `Le Monde de la Musique — март 2026`, quote: `«Исполнение редкой ясности и глубины, подкреплённое безупречной техникой.»` },
      item2: { source: `Gramophone — январь 2026`, quote: `«Лев создаёт неповторимое звучание — на грани строгости и свободы, — которое надолго остаётся в памяти слушателя.»` },
      item3: { source: `The Strad — октябрь 2025`, quote: `«Разносторонний музыкант, в игре которого глубина анализа сочетается с чувством музыкального повествования.»` }
    },
    news: {
      eyebrow: `Новости`,
      title: `Новости`,
      item1: { date: `12 июня 2026`, title: `Выход нового альбома`, text: `Новая запись, посвящённая поздним сочинениям романтического репертуара, уже доступна.` },
      item2: { date: `03 мая 2026`, title: `Анонс турне 2027`, text: `Десять городов, пять стран: первые даты предстоящего международного турне.` },
      item3: { date: `21 марта 2026`, title: `Открытый мастер-класс`, text: `Мастер-класс, открытый для публики, посвящённый репертуару для фортепиано соло.` }
    },
    contact: {
      eyebrow: `Связаться с нами`,
      title: `Менеджмент`,
      heading: `Общий менеджмент`,
      text: `По всем вопросам букинга, прессы и партнёрства.`,
      location: `Париж, Франция`,
      cvDownload: `Скачать резюме`,
      form: { name: `Имя`, email: `Электронная почта`, message: `Сообщение`, submit: `Отправить` }
    }
  }
};

const i18n = {
  translations,
  current: 'fr',

  t(key) {
    const walk = (dict) => key.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), dict);
    return walk(this.translations[this.current]) ?? walk(this.translations.fr);
  },

  apply(lang) {
    if (!this.translations[lang]) return;
    this.current = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const val = this.t(el.getAttribute('data-i18n'));
      if (typeof val === 'string') el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const val = this.t(el.getAttribute('data-i18n-html'));
      if (typeof val === 'string') el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-list]').forEach((el) => {
      const val = this.t(el.getAttribute('data-i18n-list'));
      const idx = parseInt(el.getAttribute('data-i18n-index'), 10);
      if (!Array.isArray(val) || val[idx] === undefined) return;
      const field = el.getAttribute('data-i18n-field');
      const item = field ? val[idx][field] : val[idx];
      if (typeof item === 'string') el.innerHTML = item;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const val = this.t(el.getAttribute('data-i18n-placeholder'));
      if (typeof val === 'string') el.placeholder = val;
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
      const val = this.t(el.getAttribute('data-i18n-aria-label'));
      if (typeof val === 'string') el.setAttribute('aria-label', val);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const val = this.t(el.getAttribute('data-i18n-alt'));
      if (typeof val === 'string') el.alt = val;
    });

    const page = document.body.getAttribute('data-page');
    if (page) {
      const title = this.t('titles.' + page);
      if (typeof title === 'string') document.title = title;
    }

    document.querySelectorAll('.lang-switch button').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    localStorage.setItem('lev_lang', lang);
  },

  init() {
    const saved = localStorage.getItem('lev_lang');
    const lang = this.translations[saved] ? saved : 'fr';
    this.apply(lang);

    document.querySelectorAll('.lang-switch button').forEach((btn) => {
      btn.addEventListener('click', () => this.apply(btn.getAttribute('data-lang')));
    });
  }
};

window.i18n = i18n;

document.addEventListener('DOMContentLoaded', () => i18n.init());
