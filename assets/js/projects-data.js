const PROJECTS_DATA = [
  {
    id: 'seedio-prime',
    title: 'SeeDIO PRIME',
    category: 'mobile',
    platforms: ['Android', 'Android TV', 'Android Auto'],
    version: 'v1.42.2',
    status: 'Aktif Dağıtımda',
    tagline: 'Android, TV ve Auto için Native Kotlin Ses Görselleştiricili Radyo Yayını',
    description: 'SeeDIO PRIME, dijital ses ve radyo yayıncılığı dünyasında sıfır kesinti, yüksek donanım ivmelendirmesi ve çoklu ekran desteği sunan yeni nesil bir streaming platformudur. En ayırt edici yanı, Kotlin tarafında yazılıp platform kanalı üzerinden Flutter arayüzüne bağlanan gerçek zamanlı ses spektrum analizörüdür.',
    stack: ['Flutter', 'Dart', 'Kotlin Native', 'just_audio', 'audio_service'],
    accent: '#8B5CF6',
    image: 'assets/img/projects/seedio-00-ozet.png',
    screenshots: [
      'assets/img/projects/seedio-00-ozet.png',
      'assets/img/projects/seedio-A-çubuk-play-pano.png',
      'assets/img/projects/seedio-A-çubuk-play-ikon-dark-1024.png'
    ],
    highlights: [
      'Donanım seviyesinde çalışan gerçek zamanlı Kotlin ses spektrum görselleştiricisi',
      'Android Auto için sürüş güvenliğine uygun sade arayüz kontrolleri',
      'Android TV için uzaktan kumanda D-Pad navigasyon optimizasyonu',
      '18 dilde tam yerelleştirme (i18n) ve 35+ sürümlük kesintisiz geliştirme geçmişi'
    ]
  },
  {
    id: 'seecore',
    title: 'SeeCORE (Monorepo)',
    category: 'system',
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    version: 'v1.0.34',
    status: 'Kurumsal Üretim',
    tagline: 'Açık Onaylı, Uçtan Uca Şifreli Uzak Masaüstü ve Destek Ekosistemi',
    description: 'SeeCORE, kendi barındırdığınız TURN/Sinyal sunucusu üzerinde çalışan kurumsal bir uzaktan destek altyapısıdır. Güvenlik duvarları arkasından bile doğrudan WebRTC oturumu kurarak ekran paylaşımı, çift yönlü klavye/fare kontrolü, pano eşitleme ve dosya transferi sağlar.',
    stack: ['C# / .NET 8', 'Swift', 'Flutter / Dart', 'WebRTC', 'Self-Hosted TURN'],
    accent: '#3B82F6',
    image: 'assets/img/projects/seecore-brand-board.png',
    screenshots: [
      'assets/img/projects/seecore-brand-board.png',
      'assets/img/projects/seecore-logo-dark.png'
    ],
    highlights: [
      '9 haneli dinamik eşleşme kodu veya doğrudan şifre ile açık onaylı oturum akışı',
      'Windows (.NET 8 tek dosya binary), macOS (Native Swift) ve mobil istemciler',
      'Gecikmesiz WebRTC video akışı ve TLS üzerinden güvenli kontrol kanalı',
      'Tüm platformların tek sunucu ve protokolle haberleştiği monorepo yapısı'
    ]
  },
  {
    id: 'ek-odeme-analiz',
    title: 'Ek Ödeme Analiz Sistemi',
    category: 'web',
    platforms: ['Web Platformu'],
    version: 'v18.7.0 / v5.2',
    status: 'Canlıda Kullanılıyor',
    tagline: 'Sağlık Kurumları İçin Hassas Teşvik ve Ek Ödeme Karar Destek Motoru',
    description: 'Üniversite hastaneleri ve sağlık kurumları için geliştirilmiş, 2547 sayılı kanun ve sağlık mevzuatına %100 uyumlu ek ödeme hesaplama platformudur. Personel bazında puan, ACGK ve birim katsayılarını işleyerek şeffaf bordro ve vergi dilimi simülasyonları üretir.',
    stack: ['PHP 8.2+', 'MySQL / MariaDB', 'Tailwind CSS', 'Chart.js', 'RBAC Auth'],
    accent: '#EC4899',
    image: 'assets/img/projects/ek-odeme-logo.png',
    screenshots: [
      'assets/img/projects/ek-odeme-logo.png'
    ],
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
    platforms: ['Android', 'iOS'],
    version: 'v1.6.0',
    status: 'Mobil Üretim',
    tagline: 'Hekimler ve Komisyon Yöneticileri İçin Teşvik Karar Destek Uygulaması',
    description: 'Ek Ödeme Analiz Sistemi’nin sahadaki hekimler ve hastane yönetim komisyonu için geliştirilmiş mobil arayüzüdür. Aylık puan dökümleri, vergi kesintileri ve birim katsayıları anlık olarak mobil ekrana yansıtılır.',
    stack: ['Flutter', 'Dart', 'REST API', 'Secure Storage'],
    accent: '#F43F5E',
    image: 'assets/img/projects/ek-odeme-logo.png',
    screenshots: [
      'assets/img/projects/ek-odeme-logo.png'
    ],
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
    platforms: ['Web (SaaS)'],
    version: 'v4.5.0',
    status: 'Canlıda Kullanılıyor',
    tagline: 'Canlı Piyasa Akışlı, Varlık ve Yatırım Portföyü Yönetim Platformu',
    description: 'FinSee, "param nerede ve ne kadar oldu?" sorusunu tek ekranda yanıtlayan kapsamlı bir kişisel finans platformudur. Banka hesapları, hisse senetleri (BIST), TEFAS fonları, kripto paralar ve düzenli faturaları tek kokpitte toplar.',
    stack: ['PHP 8.1+', 'MySQL', 'Tailwind CSS', 'Chart.js', 'Yahoo Finance API', 'TEFAS API'],
    accent: '#EAB308',
    image: 'assets/img/projects/butce-dashboard-desktop.png',
    screenshots: [
      'assets/img/projects/butce-dashboard-desktop.png',
      'assets/img/projects/butce-stocks-desktop.png',
      'assets/img/projects/butce-crypto-desktop.png',
      'assets/img/projects/butce-bills-desktop.png',
      'assets/img/projects/butce-assets-desktop.png'
    ],
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
    platforms: ['Android'],
    version: 'v1.8.0',
    status: 'Mobil Üretim',
    tagline: 'Stratejik Komutan: HUD Estetiğinde Biyometrik Finans Kokpiti',
    description: 'FinSee platformunun mobil eşlikçisi; uçak kokpitlerinden ilham alan HUD arayüzü, cam efektli kartlar ve biyometrik güvenlik ile servet yönetimini cebinize taşır.',
    stack: ['Flutter', 'Dart', 'Biometrics', 'Glassmorphism UI'],
    accent: '#A855F7',
    image: 'assets/img/projects/finsee-1.png',
    screenshots: [
      'assets/img/projects/finsee-1.png',
      'assets/img/projects/finsee-2.png',
      'assets/img/projects/finsee-3.png',
      'assets/img/projects/finsee-4.png'
    ],
    highlights: [
      'Biyometrik parmak izi / yüz tanıma ile üst düzey finansal gizlilik',
      'Yüksek yoğunluklu HUD / Glassmorphism arayüz dili',
      'Portföy ve fatura verileriyle çift yönlü gerçek zamanlı senkronizasyon'
    ]
  },
  {
    id: 'seeiban',
    title: 'SeeIBAN',
    category: 'mobile',
    platforms: ['Android'],
    version: 'v1.1.8',
    status: 'Üretimde',
    tagline: 'Kamera OCR Okumalı, MOD-97 Doğrulamalı Akıllı IBAN Cüzdanı',
    description: 'SeeIBAN, IBAN kopyalama ve aktarım hatalarını sıfırlamak için geliştirilmiş offline-first bir cüzdandır. Kamerayı dekonta veya ekrana doğrultmanızla birlikte OCR metni okur, MOD-97 sağlama algoritmasıyla kontrol eder ve banka logosunu otomatik eşler.',
    stack: ['Flutter', 'Google ML Kit', 'SQLite', 'MOD-97 Algorithm'],
    accent: '#F97316',
    image: 'assets/img/projects/seeiban-1.png',
    screenshots: [
      'assets/img/projects/seeiban-1.png',
      'assets/img/projects/seeiban-2.png',
      'assets/img/projects/seeiban-3.png',
      'assets/img/projects/seeiban-store.jpg'
    ],
    highlights: [
      'Google ML Kit metin tanıma motoruyla kamera ve galeriden anında IBAN yakalama',
      'MOD-97 algoritması ile yanlış numara girişlerini anında tespit etme',
      'Türkiye’deki 25+ bankanın IBAN şablonu ve logolarını otomatik tanıma',
      'Biyometrik kilit korumalı şifreli yerel SQLite veritabanı ve QR kodla paylaşım'
    ]
  },
  {
    id: 'seemap',
    title: 'SeeMAP',
    category: 'mobile',
    platforms: ['Android', 'Android Auto'],
    version: 'v3.1.5',
    status: 'Üretimde',
    tagline: 'Android Auto Entegrasyonlu, Offline-First Akıllı Konum Defteri',
    description: 'Müşteri adresleri, tarla sınırları ve özel koordinatları kategorize ederek saklayan akıllı harita ekosistemidir. Verileri cihazda Hive veritabanında tutarak internetsiz çalışır, Firebase ile yedekler ve Android Auto ile doğrudan araç ekranında navigasyon başlatır.',
    stack: ['Flutter', 'Hive Database', 'Firebase', 'Android Auto Car App Library'],
    accent: '#10B981',
    image: 'assets/img/projects/seemap_feature_graphic_1779610642435.png',
    screenshots: [
      'assets/img/projects/seemap-1.png',
      'assets/img/projects/seemap-2.png',
      'assets/img/projects/seemap_screenshot_auto_1779610668479.png',
      'assets/img/projects/seemap_screenshot_map_1779610655913.png'
    ],
    highlights: [
      'Android Auto konsolu üzerinden kayıtlı konumlara tek tıkla rota başlatma',
      'Offline-First mimari: Hive veritabanı sayesinde internetsiz tam erişim',
      'Firebase Firestore bulut eşitlemesi ile çoklu cihaz desteği',
      'Gelişmiş POI gruplama, özel notlar ve koordinat dışa aktarma'
    ]
  },
  {
    id: 'seesky',
    title: 'SeeSKY',
    category: 'mobile',
    platforms: ['Android'],
    version: 'v1.23.3',
    status: 'Üretimde',
    tagline: 'Canlı Gökyüzü Animasyonlu, Akıllı Hava Durumu',
    description: 'SeeSKY, hava durumu sayı yığınlarını yaşayan bir gökyüzü deneyimine çevirir. Anlık sensör verilerini analiz motoruyla işleyerek kullanıcıya günlük konuşma dilinde özet hazırlar ("şemsiyeni yanına al, öğleden sonra sağanak var").',
    stack: ['Flutter', 'Dart', 'Pirate Weather API', 'Firebase', 'Custom Canvas'],
    accent: '#06B6D4',
    image: 'assets/img/projects/seesky-logo.png',
    screenshots: [
      'assets/img/projects/seesky-logo.png'
    ],
    highlights: [
      'Bağlamsal ve doğal dilde kişiselleştirilmiş hava durumu özetleri',
      'Güneş, yağmur, kar, fırtına ve gece durumuna göre canlı akan prosedürel animasyonlar',
      '<50ms yanıt süreli hiper yerel hava sensör verisi',
      '10 farklı dilde dinamik arayüz ve yerelleştirme'
    ]
  },
  {
    id: 'doktordesk',
    title: 'DoktorDesk (Monorepo)',
    category: 'system',
    platforms: ['Web Panel', 'Tanıtım Sitesi', 'Mobil (Android/iOS)'],
    version: 'App v1.9.0 / Mobil v0.1.6',
    status: 'Canlı & Monorepo',
    tagline: 'Klinikler İçin Online Randevu, Hasta Onayı ve İletişim Platformu',
    description: 'Klinikler ve muayenehaneler için randevu widget’ı, klinik yönetim paneli ve personel mobil uygulamasını tek bir monorepoda birleştiren sağlık SaaS ekosistemidir.',
    stack: ['PHP 8.2', 'MySQL', 'Bootstrap 5.3', 'Flutter 3.44', 'Riverpod', 'Playwright'],
    accent: '#6366F1',
    image: 'assets/img/projects/finsee-2.png',
    screenshots: [],
    highlights: [
      'Klinik yönetim paneli, süper yönetici ve web sitesi randevu widget entegrasyonu',
      'Flutter ve Riverpod mimarisiyle klinikler için tam özellikli mobil uygulama',
      'Playwright ile otomatik uçtan uca testler ve ekran görüntüsü altyapısı',
      'GitHub Actions ile bağımsız modül sürümleme ve dağıtım CI/CD'
    ]
  },
  {
    id: 'balgoc-web',
    title: 'BAL-GÖÇ Dijital Yönetim',
    category: 'web',
    platforms: ['Web (SaaS)'],
    version: 'v9.27.0',
    status: 'Kurumsal Üretim',
    tagline: 'STK ve Dernekler İçin Üye, Aidat, Sanal POS ve Analitik Platformu',
    description: 'Balkan Göçmenleri Kültür ve Dayanışma Derneği için geliştirilmiş, yüzlerce üyenin aidat, tahsilat, demografik analiz ve bağış süreçlerini merkezileştiren kurumsal SaaS platformu.',
    stack: ['PHP 8.x', 'MySQL', 'Chart.js', 'Sanal POS (3D Secure)', 'SMS Gateway', 'Excel Engine'],
    accent: '#2563EB',
    image: 'assets/img/projects/balgoc-logo.png',
    screenshots: [
      'assets/img/projects/balgoc-logo.png'
    ],
    highlights: [
      'Demografi, yaş piramidi, eğitim düzeyi ve 5 yıllık aidat trend grafikleri',
      '3D Secure Sanal POS ile kredi kartıyla online aidat ve bağış tahsilatı',
      'Otomatik SMS bildirimleri ve toplu Excel veri aktarım motoru'
    ]
  },
  {
    id: 'balgoc-mobil',
    title: 'BAL-GÖÇ Mobil',
    category: 'mobile',
    platforms: ['Android', 'iOS'],
    version: 'v1.1.0',
    status: 'Mobil Üretim',
    tagline: 'BAL-GÖÇ Üyeleri İçin Dijital Kart, Haberler ve Aidat Portalı',
    description: 'Dernek üyelerinin haberleri okuyabildiği, etkinlikleri takip ettiği, aidat borçlarını kredi kartıyla ödeyebildiği ve dijital üye kartını taşıdığı resmi mobil uygulamadır.',
    stack: ['Flutter 3.44+', 'Dart', 'REST API', 'Secure Storage'],
    accent: '#7C3AED',
    image: 'assets/img/projects/balgoc-logo.png',
    screenshots: [
      'assets/img/projects/balgoc-logo.png'
    ],
    highlights: [
      'WordPress kurumsal haberleri ile üye yönetim panelini tek çatı altında birleştirme',
      'Dijital üye kartı ve QR kodlu etkinlik giriş kontrolü',
      'Anlık push bildirimleri ve online aidat ödeme akışı'
    ]
  },
  {
    id: 'tmrtder-web',
    title: 'TMRT-Der Üye ve Evrak Yönetimi',
    category: 'web',
    platforms: ['Web (SaaS)'],
    version: 'v1.4.0',
    status: 'Kurumsal Üretim',
    tagline: 'Radyoteknoloji Derneği İçin Üye, Evrak ve Belge Yönetim Platformu',
    description: 'Türk Medikal Radyoteknoloji Derneği için geliştirilmiş; üye kayıtları, aidat takibi, resmi evrak arşivi ve dinamik belge üretimini sağlayan kurumsal STK platformudur.',
    stack: ['PHP 8.0+', 'MySQL', 'Vanilla CSS Tokens', 'TCPDF Engine'],
    accent: '#0284C7',
    image: 'assets/img/projects/tmrtder-logo.png',
    screenshots: [
      'assets/img/projects/tmrtder-logo.png'
    ],
    highlights: [
      'Radyoloji teknikeri üye sicil ve hastane çalışma yeri hiyerarşisi',
      'QR kodlu ve doğrulama kodlu resmi üyelik ve yetki belgesi üretimi',
      'KVKK uyumlu güvenli evrak arşivleme altyapısı'
    ]
  },
  {
    id: 'tmrtder-mobil',
    title: 'TMRT-Der Mobil',
    category: 'mobile',
    platforms: ['Android', 'iOS'],
    version: 'v1.0.6',
    status: 'Mobil Üretim',
    tagline: 'Radyoloji Camiası İçin Bilgi, Kongre ve Mevzuat Merkezi',
    description: 'Radyoloji teknikerleri için bilgiye erişimi merkezileştiren mobil uygulama. Güncel mevzuat dökümleri, kongre takvimi ve duyuruları tek dokunuşla üyelere iletir.',
    stack: ['Flutter', 'Dart', 'REST API'],
    accent: '#0EA5E9',
    image: 'assets/img/projects/tmrtder-logo.png',
    screenshots: [
      'assets/img/projects/tmrtder-logo.png'
    ],
    highlights: [
      'Entegre harita ile dernek merkezine anında ulaşım ve iletişim',
      'Güncel radyoloji yönetmelikleri ve bilimsel rehber arşivi',
      'Kongre, eğitim ve etkinlik takvimi'
    ]
  },
  {
    id: 'wp-tmrtder-sertifika',
    title: 'TMRT-Der Sertifika Doğrulama & PDF',
    category: 'tools',
    platforms: ['WordPress Plugin'],
    version: 'v1.2.1',
    status: 'Canlı Eklenti',
    tagline: 'T.C. Kimlik / Kod ile Sertifika Doğrulama ve Dinamik PDF Motoru',
    description: 'Dernek eğitim ve sempozyum katılımcılarının sertifikalarını T.C. Kimlik Numarası veya Belge Kodu ile doğrulamasını ve dinamik PDF şablonu üzerinden anında indirip yazdırmasını sağlayan WordPress eklentisidir.',
    stack: ['PHP 7.4+', 'WordPress Core', 'FPDF / TCPDF', 'REST API'],
    accent: '#EAB308',
    image: 'assets/img/projects/tmrtder-logo.png',
    screenshots: [
      'assets/img/projects/tmrtder-logo.png'
    ],
    highlights: [
      'TMRT Altın Sarısı ve Slate modern arayüz tasarımı',
      'Vektörel kalitede dinamik katılımcı sertifikası PDF render sistemi',
      'Sahte belgeleri engelleyen kriptografik doğrulama kodu altyapısı'
    ]
  },
  {
    id: 'kira-takip',
    title: 'Kira & Mülk Yönetim Sistemi',
    category: 'web',
    platforms: ['Web (B2B)'],
    version: 'v3.3.1',
    status: 'Canlıda Kullanılıyor',
    tagline: 'Süzme Sayaç Elektrik Faturalama ve Kiracı Tahsilat Panosu',
    description: 'Gayrimenkul yöneticileri ve mülk sahipleri için Excel karmaşasını bitiren B2B platformudur. Kiracı sözleşmeleri, süzme sayaç elektrik tüketim hesaplaması, gecikme faizi ve resmi PDF faturalandırma işlemlerini otomatikleştirir.',
    stack: ['PHP Vanilla', 'MySQL / MariaDB', 'Tailwind CSS', 'PDF Engine'],
    accent: '#84CC16',
    image: 'assets/img/projects/butce-bills-desktop.png',
    screenshots: [
      'assets/img/projects/butce-bills-desktop.png'
    ],
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
    platforms: ['Android', 'Android Auto', 'Android TV'],
    version: 'v1.1.1',
    status: 'Açık Kaynak',
    tagline: 'Reklamsız, Senkronize Şarkı Sözlü Açık Kaynak Müzik Çalar',
    description: 'Müzik dinlemeyi abonelik duvarları ve reklamlardan kurtaran kurumsal kalitede bir medya oynatıcıdır. LRCLIB entegrasyonuyla şarkı sözlerini satır satır senkronize akıtır; Android Auto ve TV’de akıcı çalışır.',
    stack: ['Flutter', 'Dart', 'just_audio', 'audio_service', 'LRCLIB API'],
    accent: '#F43F5E',
    image: 'assets/img/projects/seeiptv-logo.png',
    screenshots: [],
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
    platforms: ['Android'],
    version: 'v1.2.0',
    status: 'Üretimde',
    tagline: 'Mobil Geliştiriciler İçin Ultra Hızlı ve Modüler Kod Editörü',
    description: 'Mobil cihazlarda kod yazmayı ve düzenlemeyi masaüstü IDE konforuna taşıyan editör ekosistemidir. Akıllı sözcük kaydırma, auto-hide yan panel ve landscape pro moduna sahiptir.',
    stack: ['Flutter', 'Dart', 'Custom Syntax Highlighter', 'Storage API'],
    accent: '#8B5CF6',
    image: 'assets/img/projects/seecore-logo-dark.png',
    screenshots: [],
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
    platforms: ['Android TV', 'Android'],
    version: 'v1.0.0',
    status: 'Üretimde',
    tagline: 'Android TV İçin Google Drive Medya ve Bulut Oynatıcı Merkezi',
    description: 'Android TV ekranlarında Google Drive bulut arşivinizdeki tüm video, müzik ve medya dosyalarını uzaktan kumandayla doğrudan oynatmanızı sağlayan televizyon odaklı medya merkezidir.',
    stack: ['Flutter', 'Dart', 'Google Drive REST API', 'ExoPlayer'],
    accent: '#06B6D4',
    image: 'assets/img/projects/seeiptv-logo.png',
    screenshots: [],
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
    platforms: ['Android'],
    version: 'v3.6.3+25',
    status: 'Üretimde',
    tagline: 'Sarkaç Fiziği ve 3 Ülkeli Kampanya Moduna Sahip Mobil Oyun',
    description: 'Flutter üzerinde sarkaç fiziği ve süpürülmüş çarpışma algoritmalarıyla geliştirilmiş; 3 ülke × 20 bölüm kampanya modu, kral savaşları ve zengin prosedürel çizimlere sahip akıcı bir mobil arcade oyunudur.',
    stack: ['Flutter', 'Dart', 'Pendulum Physics', 'Swept Collision', 'AudioPool'],
    accent: '#F59E0B',
    image: 'assets/img/projects/seemap-logo.png',
    screenshots: [],
    highlights: [
      '60 FPS garantili sarkaç fizik motoru ve süpürülmüş çarpışma tespiti',
      '3 farklı ülke, 60 hikaye bölümü ve epik kral savaşları',
      'Prosedürel grafik çizimleri ve donanım ses sentezleme'
    ]
  }
];
