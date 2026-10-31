/**
 * Selim YILMAZ — Repository & Project Dataset
 * Icon-driven architecture (No heavy screenshot banners, pure high-tech symbols)
 */

const PROJECTS_DATA = [
  {
    id: 'doktordesk',
    title: 'DoktorDesk (Monorepo)',
    category: 'system',
    categoryLabel: 'Klinik & Sağlık SaaS',
    platforms: ['Web Panel', 'Android', 'iOS'],
    version: 'App v1.9.0 / Mobil v0.1.6',
    status: 'Canlı Monorepo',
    tagline: 'Klinikler İçin Online Randevu, Hasta Onayı ve İletişim Platformu',
    description: 'Klinikler ve muayenehaneler için randevu widget’ı, klinik yönetim paneli ve personel mobil uygulamasını tek bir monorepoda birleştiren sağlık SaaS ekosistemidir.',
    stack: ['PHP 8.2', 'MySQL', 'Bootstrap 5.3', 'Flutter 3.44', 'Riverpod', 'Playwright'],
    accent: '#6366F1',
    iconType: 'svg',
    iconSvg: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>',
    iconBg: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(79, 70, 229, 0.1))',
    highlights: [
      'Klinik yönetim paneli, süper yönetici ve web sitesi randevu widget entegrasyonu',
      'Flutter ve Riverpod mimarisiyle klinikler için tam özellikli mobil uygulama',
      'Playwright ile otomatik uçtan uca testler ve ekran görüntüsü altyapısı',
      'GitHub Actions ile bağımsız modül sürümleme ve dağıtım CI/CD'
    ]
  },
  {
    id: 'seecore',
    title: 'SeeCORE (Monorepo)',
    category: 'system',
    categoryLabel: 'Sistem & Uzak Masaüstü',
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    version: 'v1.0.34',
    status: 'Kurumsal Dağıtım',
    tagline: 'Açık Onaylı, Uçtan Uca Şifreli Uzaktan Destek ve Kontrol Monoreposu',
    description: 'SeeCORE, kendi barındırdığınız TURN/Sinyal sunucusu üzerinde çalışan kurumsal bir uzaktan destek altyapısıdır. Güvenlik duvarları arkasından bile doğrudan WebRTC oturumu kurarak ekran paylaşımı, çift yönlü klavye/fare kontrolü, pano eşitleme ve dosya transferi sağlar.',
    stack: ['C# / .NET 8', 'Swift', 'Flutter / Dart', 'WebRTC', 'Self-Hosted TURN'],
    accent: '#3B82F6',
    iconType: 'image',
    iconSrc: 'assets/img/projects/seecore-icon-1024.png',
    iconBg: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.1))',
    highlights: [
      '9 haneli dinamik eşleşme kodu veya doğrudan şifre ile açık onaylı oturum akışı',
      'Windows (.NET 8 tek dosya binary), macOS (Native Swift) ve mobil istemciler',
      'Gecikmesiz WebRTC video akışı ve TLS üzerinden güvenli kontrol kanalı',
      'Tüm platformların tek sunucu ve protokolle haberleştiği monorepo yapısı'
    ]
  },
  {
    id: 'seeiban',
    title: 'SeeIBAN',
    category: 'mobile',
    categoryLabel: 'Fintech & OCR',
    platforms: ['Android'],
    version: 'v1.1.8',
    status: 'Üretimde',
    tagline: 'Kamera OCR Okumalı, MOD-97 Doğrulamalı Akıllı IBAN Cüzdanı',
    description: 'SeeIBAN, IBAN kopyalama ve aktarım hatalarını sıfırlamak için geliştirilmiş offline-first bir cüzdandır. Kamerayı dekonta veya ekrana doğrultmanızla birlikte OCR metni okur, MOD-97 sağlama algoritmasıyla kontrol eder ve banka logosunu otomatik eşler.',
    stack: ['Flutter', 'Google ML Kit', 'SQLite', 'MOD-97 Algorithm'],
    accent: '#F97316',
    iconType: 'image',
    iconSrc: 'assets/img/projects/seeiban-logo.png',
    iconBg: 'linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(234, 88, 12, 0.1))',
    highlights: [
      'Google ML Kit metin tanıma motoruyla kamera ve galeriden anında IBAN yakalama',
      'MOD-97 algoritması ile yanlış numara girişlerini anında tespit etme',
      'Türkiye’deki 25+ bankanın IBAN şablonu ve logolarını otomatik tanıma',
      'Biyometrik kilit korumalı şifreli yerel SQLite veritabanı ve QR cüzdan'
    ]
  },
  {
    id: 'seemap',
    title: 'SeeMAP',
    category: 'mobile',
    categoryLabel: 'Navigasyon & Araç Ekranı',
    platforms: ['Android', 'Android Auto'],
    version: 'v3.1.5',
    status: 'Üretimde',
    tagline: 'Android Auto Entegrasyonlu, Offline-First Akıllı Konum Defteri',
    description: 'Müşteri adresleri, tarla sınırları ve özel koordinatları kategorize ederek saklayan akıllı harita ekosistemidir. Verileri cihazda Hive veritabanında tutarak internetsiz çalışır, Firebase ile yedekler ve Android Auto ile doğrudan araç ekranında navigasyon başlatır.',
    stack: ['Flutter', 'Hive Database', 'Firebase', 'Android Auto Car App Library'],
    accent: '#10B981',
    iconType: 'image',
    iconSrc: 'assets/img/projects/seemap-logo.png',
    iconBg: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.1))',
    highlights: [
      'Android Auto konsolu üzerinden kayıtlı konumlara tek tıkla rota başlatma',
      'Offline-First mimari: Hive veritabanı sayesinde internetsiz tam erişim',
      'Firebase Firestore bulut eşitlemesi ile çoklu cihaz desteği',
      'Gelişmiş POI gruplama, özel notlar ve koordinat dışa aktarma'
    ]
  },
  {
    id: 'seedio-prime',
    title: 'SeeDIO PRIME',
    category: 'mobile',
    categoryLabel: 'Mobil & Streaming',
    platforms: ['Android', 'Android TV', 'Android Auto'],
    version: 'v1.42.2',
    status: 'Canlı Yayında',
    tagline: 'Native Kotlin Ses Görselleştiricili Radyo Streaming Platformu',
    description: 'SeeDIO PRIME, dijital radyo ve ses yayıncılığında sıfır kesinti ve donanım ivmelendirmesi sunan yeni nesil bir streaming ekosistemidir. Kotlin platform kanalıyla Flutter arayüzüne bağlanan gerçek zamanlı ses spektrum analizörüne sahiptir.',
    stack: ['Flutter', 'Dart', 'Kotlin Native', 'just_audio', 'audio_service'],
    accent: '#8B5CF6',
    iconType: 'image',
    iconSrc: 'assets/img/projects/seedio-A-çubuk-play-ikon-dark-1024.png',
    iconBg: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(99, 102, 241, 0.1))',
    highlights: [
      'Donanım seviyesinde çalışan gerçek zamanlı Kotlin ses spektrum görselleştiricisi',
      'Android Auto için sürüş güvenliğine uygun sade arayüz kontrolleri',
      'Android TV için uzaktan kumanda D-Pad navigasyon optimizasyonu',
      '18 dilde tam yerelleştirme (i18n) ve 35+ sürümlük kesintisiz geliştirme'
    ]
  },
  {
    id: 'ek-odeme-analiz',
    title: 'Ek Ödeme Analiz Sistemi',
    category: 'web',
    categoryLabel: 'Sağlık Bilişimi & Finans',
    platforms: ['Web Platformu'],
    version: 'v18.7.0',
    status: 'Üretimde Aktif',
    tagline: 'Sağlık Kurumları İçin Hassas Teşvik ve Ek Ödeme Karar Destek Motoru',
    description: 'Üniversite hastaneleri ve sağlık kurumları için geliştirilmiş, 2547 sayılı kanun ve sağlık mevzuatına %100 uyumlu ek ödeme hesaplama platformudur. Personel bazında puan, ACGK ve birim katsayılarını işleyerek şeffaf bordro ve vergi dilimi simülasyonları üretir.',
    stack: ['PHP 8.2+', 'MySQL / MariaDB', 'Tailwind CSS', 'Chart.js', 'RBAC Auth'],
    accent: '#EC4899',
    iconType: 'image',
    iconSrc: 'assets/img/projects/ek-odeme-logo.png',
    iconBg: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(244, 63, 94, 0.1))',
    highlights: [
      'Aktif Çalışma Gün Katsayısı (ACGK) ve birim kurallarına göre otomatik fark motoru',
      'round - half up matematiksel yuvarlama ile milimetrik finansal tutarlılık',
      'Granüler Rol Tabanlı Yetkilendirme (RBAC) ve sağlık/araştırma veri grupları',
      'Son 12 ayın teşvik, taban ve brüt trendlerini karşılaştıran grafik paneli'
    ]
  },
  {
    id: 'ek-odeme-mobil',
    title: 'Ek Ödeme Analiz Mobil',
    category: 'mobile',
    categoryLabel: 'Mobil Karar Destek',
    platforms: ['Android', 'iOS'],
    version: 'v1.6.0',
    status: 'Kurumsal Mobil',
    tagline: 'Hekimler ve Komisyon Yöneticileri İçin Teşvik Karar Destek Arayüzü',
    description: 'Ek Ödeme Analiz Sistemi’nin sahadaki hekimler ve hastane yönetim komisyonu için geliştirilmiş mobil arayüzüdür. Aylık puan dökümleri, vergi kesintileri ve birim katsayıları anlık olarak mobil ekrana yansıtılır.',
    stack: ['Flutter', 'Dart', 'REST API', 'Secure Storage'],
    accent: '#F43F5E',
    iconType: 'svg',
    iconSvg: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M12 7v4m0 0l-2-2m2 2l2-2"></path></svg>',
    iconBg: 'linear-gradient(135deg, rgba(244, 63, 94, 0.2), rgba(225, 29, 72, 0.1))',
    highlights: [
      'Hekim ve klinik personeli için kişiselleştirilmiş net ek ödeme simülatörü',
      'Birim yöneticileri için dönem bazlı onay ve hiyerarşik kontrol',
      'Güvenli JWT tabanlı kurumsal API entegrasyonu'
    ]
  },
  {
    id: 'butce-finsee',
    title: 'FinSee (Akıllı Bütçe & Portföy)',
    category: 'web',
    categoryLabel: 'Fintech & Varlık Yönetimi',
    platforms: ['Web Platformu'],
    version: 'v4.5.0',
    status: 'Canlıda Kullanılıyor',
    tagline: 'Canlı Piyasa Akışlı, Varlık ve Yatırım Portföyü Yönetim Platformu',
    description: 'FinSee, "param nerede ve ne kadar oldu?" sorusunu tek ekranda yanıtlayan kapsamlı bir kişisel finans platformudur. Banka hesapları, hisse senetleri (BIST), TEFAS fonları, kripto paralar ve düzenli faturaları tek kokpitte toplar.',
    stack: ['PHP 8.1+', 'MySQL', 'Tailwind CSS', 'Chart.js', 'Yahoo Finance API', 'TEFAS API'],
    accent: '#F59E0B',
    iconType: 'svg',
    iconSvg: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>',
    iconBg: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(217, 119, 6, 0.1))',
    highlights: [
      'BIST hisse fiyatları, TEFAS fonları ve kripto varlıklar için canlı veri akışı',
      'Yatırım portföy dağılımı, net değer analizi ve nakit akış tahminleme',
      'Tekrarlayan fatura ve abonelik takibi, yaklaşan ödeme uyarıları',
      'Hafif PHP + Tailwind mimarisiyle sıfır harici sunucu bağımlılığı'
    ]
  },
  {
    id: 'butce-mobil-finsee',
    title: 'FinSee Mobile',
    category: 'mobile',
    categoryLabel: 'Fintech & Mobil',
    platforms: ['Android'],
    version: 'v1.8.0',
    status: 'Mobil Üretim',
    tagline: 'Stratejik Komutan: HUD Estetiğinde Biyometrik Finans Kokpiti',
    description: 'FinSee platformunun mobil eşlikçisi; uçak kokpitlerinden ilham alan HUD arayüzü, cam efektli kartlar ve biyometrik güvenlik ile servet yönetimini cebinize taşır.',
    stack: ['Flutter', 'Dart', 'Biometrics', 'Glassmorphism UI'],
    accent: '#A855F7',
    iconType: 'svg',
    iconSvg: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>',
    iconBg: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(126, 34, 206, 0.1))',
    highlights: [
      'Biyometrik parmak izi / yüz tanıma ile üst düzey finansal gizlilik',
      'Yüksek yoğunluklu HUD / Glassmorphism arayüz dili',
      'Portföy ve fatura verileriyle çift yönlü gerçek zamanlı senkronizasyon'
    ]
  },
  {
    id: 'seesky',
    title: 'SeeSKY',
    category: 'mobile',
    categoryLabel: 'Hava Durumu & Mobil',
    platforms: ['Android'],
    version: 'v1.23.3',
    status: 'Üretimde',
    tagline: 'Canlı Gökyüzü Animasyonlu, Akıllı Hava Durumu Platformu',
    description: 'SeeSKY, hava durumu sayı yığınlarını yaşayan bir gökyüzü deneyimine çevirir. Anlık sensör verilerini analiz motoruyla işleyerek kullanıcıya günlük konuşma dilinde özet hazırlar ("şemsiyeni yanına al, öğleden sonra sağanak var").',
    stack: ['Flutter', 'Dart', 'Pirate Weather API', 'Firebase', 'Custom Canvas'],
    accent: '#06B6D4',
    iconType: 'image',
    iconSrc: 'assets/img/projects/seesky-logo.png',
    iconBg: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(8, 145, 178, 0.1))',
    highlights: [
      'Bağlamsal ve doğal dilde kişiselleştirilmiş hava durumu özetleri',
      'Güneş, yağmur, kar, fırtına ve gece durumuna göre canlı akan prosedürel animasyonlar',
      '<50ms yanıt süreli hiper yerel hava sensör verisi',
      '10 farklı dilde dinamik arayüz ve yerelleştirme'
    ]
  },
  {
    id: 'stk-web',
    title: 'STK & Dernek Dijital Yönetim',
    category: 'web',
    categoryLabel: 'STK & Kurumsal SaaS',
    platforms: ['Web Platformu'],
    version: 'v9.27.0',
    status: 'Kurumsal Üretim',
    tagline: 'STK ve Dernekler İçin Üye, Aidat, Sanal POS ve Analitik Platformu',
    description: 'Sivil toplum kuruluşları, vakıflar ve dernekler için geliştirilmiş; binlerce üyenin aidat, online tahsilat, demografik analiz ve bağış süreçlerini merkezileştiren kurumsal SaaS platformudur.',
    stack: ['PHP 8.x', 'MySQL', 'Chart.js', 'Sanal POS (3D Secure)', 'SMS Gateway', 'Excel Engine'],
    accent: '#2563EB',
    iconType: 'svg',
    iconSvg: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>',
    iconBg: 'linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(29, 78, 216, 0.1))',
    highlights: [
      'Demografi, yaş piramidi, eğitim düzeyi ve 5 yıllık aidat trend grafikleri',
      '3D Secure Sanal POS ile kredi kartıyla online aidat ve bağış tahsilatı',
      'Otomatik SMS bildirimleri ve toplu Excel veri aktarım motoru'
    ]
  },
  {
    id: 'stk-mobil',
    title: 'STK & Dernek Üye Mobil',
    category: 'mobile',
    categoryLabel: 'STK & Mobil',
    platforms: ['Android', 'iOS'],
    version: 'v1.1.0',
    status: 'Mobil Üretim',
    tagline: 'Dernek ve Vakıf Üyeleri İçin Dijital Kart, Haberler ve Aidat Portalı',
    description: 'Dernek ve vakıf üyelerinin kurumsal haberleri okuyabildiği, etkinlikleri takip ettiği, aidat borçlarını kredi kartıyla ödeyebildiği ve dijital üye kartını taşıdığı resmi mobil uygulamadır.',
    stack: ['Flutter 3.44+', 'Dart', 'REST API', 'Secure Storage'],
    accent: '#7C3AED',
    iconType: 'svg',
    iconSvg: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path></svg>',
    iconBg: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(109, 40, 217, 0.1))',
    highlights: [
      'Kurumsal haberler ile üye yönetim panelini tek çatı altında birleştirme',
      'Dijital üye kartı ve QR kodlu etkinlik giriş kontrolü',
      'Anlık push bildirimleri ve online aidat ödeme akışı'
    ]
  },
  {
    id: 'medikal-stk-web',
    title: 'Medikal STK Üye ve Evrak Yönetimi',
    category: 'web',
    categoryLabel: 'Medikal STK Platformu',
    platforms: ['Web Platformu'],
    version: 'v1.4.0',
    status: 'Kurumsal Üretim',
    tagline: 'Sağlık Meslek Dernekleri İçin Üye, Evrak ve Belge Yönetim Platformu',
    description: 'Sağlık ve meslek dernekleri için geliştirilmiş; üye kayıtları, aidat takibi, resmi evrak arşivi ve dinamik belge üretimini sağlayan kurumsal STK platformudur.',
    stack: ['PHP 8.0+', 'MySQL', 'Vanilla CSS Tokens', 'TCPDF Engine'],
    accent: '#0284C7',
    iconType: 'svg',
    iconSvg: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>',
    iconBg: 'linear-gradient(135deg, rgba(2, 132, 199, 0.2), rgba(3, 105, 161, 0.1))',
    highlights: [
      'Sağlık personeli üye sicili ve hastane / kurum çalışma yeri hiyerarşisi',
      'QR kodlu ve doğrulama kodlu resmi üyelik ve yetki belgesi üretimi',
      'KVKK uyumlu güvenli evrak arşivleme altyapısı'
    ]
  },
  {
    id: 'medikal-stk-mobil',
    title: 'Medikal STK Mobil Portalı',
    category: 'mobile',
    categoryLabel: 'Medikal & Mobil',
    platforms: ['Android', 'iOS'],
    version: 'v1.0.6',
    status: 'Mobil Üretim',
    tagline: 'Sağlık Camiası İçin Bilgi, Kongre ve Mevzuat Merkezi',
    description: 'Sağlık profesyonelleri için bilgiye erişimi merkezileştiren mobil uygulama. Güncel mevzuat dökümleri, kongre takvimi ve duyuruları tek dokunuşla üyelere iletir.',
    stack: ['Flutter', 'Dart', 'REST API'],
    accent: '#0EA5E9',
    iconType: 'svg',
    iconSvg: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>',
    iconBg: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(2, 132, 199, 0.1))',
    highlights: [
      'Entegre harita ile dernek merkezine ve etkinlik noktalarına anında ulaşım',
      'Güncel sağlık yönetmelikleri ve bilimsel rehber arşivi',
      'Kongre, eğitim ve etkinlik takvimi'
    ]
  },
  {
    id: 'wp-sertifika-dogrulama',
    title: 'Sertifika Doğrulama & Dinamik PDF Motoru',
    category: 'tools',
    categoryLabel: 'Doğrulama & PDF Motoru',
    platforms: ['WordPress Plugin'],
    version: 'v1.2.1',
    status: 'Canlı Eklenti',
    tagline: 'T.C. Kimlik / Kod ile Sertifika Doğrulama ve Dinamik PDF Motoru',
    description: 'Dernek, kongre ve sempozyum katılımcılarının sertifikalarını T.C. Kimlik Numarası veya Belge Kodu ile doğrulamasını ve dinamik PDF şablonu üzerinden anında indirip yazdırmasını sağlayan WordPress eklentisidir.',
    stack: ['PHP 7.4+', 'WordPress Core', 'FPDF / TCPDF', 'REST API'],
    accent: '#EAB308',
    iconType: 'svg',
    iconSvg: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>',
    iconBg: 'linear-gradient(135deg, rgba(234, 179, 8, 0.2), rgba(202, 138, 4, 0.1))',
    highlights: [
      'Kurumsal Altın Sarısı ve Slate modern arayüz tasarımı',
      'Vektörel kalitede dinamik katılımcı sertifikası PDF render sistemi',
      'Sahte belgeleri engelleyen kriptografik doğrulama kodu altyapısı'
    ]
  },
  {
    id: 'kira-takip',
    title: 'Kira & Mülk Yönetim Sistemi',
    category: 'web',
    categoryLabel: 'Gayrimenkul & B2B SaaS',
    platforms: ['Web Platformu'],
    version: 'v3.3.1',
    status: 'Canlıda Kullanılıyor',
    tagline: 'Süzme Sayaç Elektrik Faturalama ve Kiracı Tahsilat Panosu',
    description: 'Gayrimenkul yöneticileri ve mülk sahipleri için Excel karmaşasını bitiren B2B platformudur. Kiracı sözleşmeleri, süzme sayaç elektrik tüketim hesaplaması, gecikme faizi ve resmi PDF faturalandırma işlemlerini otomatikleştirir.',
    stack: ['PHP Vanilla', 'MySQL / MariaDB', 'Tailwind CSS', 'PDF Engine'],
    accent: '#84CC16',
    iconType: 'svg',
    iconSvg: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>',
    iconBg: 'linear-gradient(135deg, rgba(132, 204, 22, 0.2), rgba(101, 163, 13, 0.1))',
    highlights: [
      'Süzme elektrik sayaç endekslerinden KW/saat bazlı otomatik elektrik faturalama',
      'Tek tıkla resmi döküm PDF fatura ve makbuz üretimi',
      'Nakit akışı, tahsilat durumu ve gecikme uyarı panosu'
    ]
  },
  {
    id: 'seebliss-seemusic',
    title: 'SeeMusic (SeeBliss)',
    category: 'mobile',
    categoryLabel: 'Medya & Açık Kaynak',
    platforms: ['Android', 'Android Auto', 'Android TV'],
    version: 'v1.1.1',
    status: 'Açık Kaynak',
    tagline: 'Reklamsız, Senkronize Şarkı Sözlü Açık Kaynak Müzik Çalar',
    description: 'Müzik dinlemeyi abonelik duvarları ve reklamlardan kurtaran kurumsal kalitede bir medya oynatıcıdır. LRCLIB entegrasyonuyla şarkı sözlerini satır satır senkronize akıtır; Android Auto ve TV’de akıcı çalışır.',
    stack: ['Flutter', 'Dart', 'just_audio', 'audio_service', 'LRCLIB API'],
    accent: '#F43F5E',
    iconType: 'svg',
    iconSvg: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path></svg>',
    iconBg: 'linear-gradient(135deg, rgba(244, 63, 94, 0.2), rgba(225, 29, 72, 0.1))',
    highlights: [
      'Arka planda kesintisiz medya servisi ve kilit ekranı kontrolleri',
      'LRCLIB ile milisaniyelik senkronize şarkı sözü gösterimi',
      'Android Auto ve Android TV uzaktan kumanda desteği'
    ]
  },
  {
    id: 'seeeditor',
    title: 'See Editor Pro (Elite Edition)',
    category: 'tools',
    categoryLabel: 'Geliştirici Aracı & Editör',
    platforms: ['Android'],
    version: 'v1.2.0',
    status: 'Üretimde',
    tagline: 'Mobil Geliştiriciler İçin Ultra Hızlı ve Modüler Kod Editörü',
    description: 'Mobil cihazlarda kod yazmayı ve düzenlemeyi masaüstü IDE konforuna taşıyan editör ekosistemidir. Akıllı sözcük kaydırma, auto-hide yan panel ve landscape pro moduna sahiptir.',
    stack: ['Flutter', 'Dart', 'Custom Syntax Highlighter', 'Storage API'],
    accent: '#8B5CF6',
    iconType: 'svg',
    iconSvg: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>',
    iconBg: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(124, 58, 237, 0.1))',
    highlights: [
      'Küçük ekranlar için optimize akıllı sözcük kaydırma (word wrap)',
      'Yatay modda klavye açıldığında maksimum çalışma alanı sunan Landscape Pro Mode',
      'VS Code tarzı Navigation Rail ve canlı dosya durum çubuğu'
    ]
  },
  {
    id: 'seedrive',
    title: 'SeeDRIVE',
    category: 'tools',
    categoryLabel: 'TV & Bulut Oynatıcı',
    platforms: ['Android TV', 'Android'],
    version: 'v1.0.0',
    status: 'Üretimde',
    tagline: 'Android TV İçin Google Drive Medya ve Bulut Oynatıcı Merkezi',
    description: 'Android TV ekranlarında Google Drive bulut arşivinizdeki tüm video, müzik ve medya dosyalarını uzaktan kumandayla doğrudan oynatmanızı sağlayan televizyon odaklı medya merkezidir.',
    stack: ['Flutter', 'Dart', 'Google Drive REST API', 'ExoPlayer'],
    accent: '#06B6D4',
    iconType: 'svg',
    iconSvg: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>',
    iconBg: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(8, 145, 178, 0.1))',
    highlights: [
      'Google Drive video ve ses arşivini TV ekranında doğrudan akıtma',
      'TV uzaktan kumandası D-Pad optimizasyonlu hızlı ve sade menüler',
      'Bulut klasörlerini medya kategorilerine göre otomatik gruplama'
    ]
  },
  {
    id: 'candy-slicer',
    title: 'CandySlicer Game',
    category: 'tools',
    categoryLabel: 'Mobil Oyun & Fizik Motoru',
    platforms: ['Android'],
    version: 'v3.6.3+25',
    status: 'Üretimde',
    tagline: 'Sarkaç Fiziği ve 3 Ülkeli Kampanya Moduna Sahip Mobil Oyun',
    description: 'Flutter üzerinde sarkaç fiziği ve süpürülmüş çarpışma algoritmalarıyla geliştirilmiş; 3 ülke × 20 bölüm kampanya modu, kral savaşları ve zengin prosedürel çizimlere sahip akıcı bir mobil arcade oyunudur.',
    stack: ['Flutter', 'Dart', 'Pendulum Physics', 'Swept Collision', 'AudioPool'],
    accent: '#F59E0B',
    iconType: 'svg',
    iconSvg: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
    iconBg: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(217, 119, 6, 0.1))',
    highlights: [
      '60 FPS garantili sarkaç fizik motoru ve süpürülmüş çarpışma tespiti',
      '3 farklı ülke, 60 hikaye bölümü ve epik kral savaşları',
      'Prosedürel grafik çizimleri ve donanım ses sentezleme'
    ]
  }
];
