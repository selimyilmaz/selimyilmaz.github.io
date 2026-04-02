# 🚀 Ek Ödeme Analiz Sistemi

![Platform](https://img.shields.io/badge/Platform-Web-blue)
![PHP](https://img.shields.io/badge/PHP-8.x-purple)
![Security](https://img.shields.io/badge/Security-XSS%20%26%20CSRF%20%26%20RBAC-green)
![Design](https://img.shields.io/badge/Design-Glassmorphism%20Dark%20%26%20Light-pink)
![Version](https://img.shields.io/badge/Version-5.2-orange)

Sağlık kurumları için geliştirilmiş, güvenli ve modern bir ek ödeme hesaplama ve yönetim platformudur.

---

## 🌟 Özellikler

- **🌗 Premium UI & Dual-Mode:** Koyu ve Aydınlık tema desteği, glassmorphism efektleri ve akışkan animasyonlarla üst segment kullanıcı deneyimi.
- **📈 Vergi Akordiyonu & Detay Modal:** Varsayılan vergi dilimine göre özet gösteren ve tüm dilimler için açılır detay dökümü sunan akıllı modal yapısı.
- **📊 Gelişmiş Grafik Analiz Paneli:** Son 12 ayın veya seçilen tarih aralığının trendini (Teşvik, Taban, Brüt) dinamik olarak takip eden, çoklu veri karşılaştırmalı (`Chart.js`) interaktif dashboard.
- **📉 Fark Ödeme Hesaplama Motoru:** Aktif Çalışma Gün Katsayısı (ACGK) ve birim bazlı kurallara göre (A, A+, E Toplam) otomatik fark hesaplayan hassas modül.
- **⚙️ Merkezi Yönetim:** Ünvanlar, Birim Kuralları, Dönemler ve Kullanıcı Yetkileri artık tek bir "Ayarlar" sayfası altındaki sekmelerden yönetilmektedir.
- **🔐 Akıllı Yetkilendirme (RBAC):** Kullanıcı bazlı menü erişimi ve veri grubu bazlı (Sağlık, Araştırma vb.) kısıtlama ile tam güvenlik.
- **✅ Veri Formatlama & Tutarlılık:** Tüm finansal dökümler için binlik ayıraçlı (`125.000,00 ₺`) okuma modu ve otomatik ACGK sınırlamaları.

---

## 🛠️ Teknik Altyapı

| Katman | Teknoloji |
|--------|-----------|
| Backend | Native PHP 8.x + PDO |
| Veritabanı | MySQL / MariaDB (utf8mb4) |
| Frontend | Vanilla JS, Custom CSS (Açık ve Koyu Destekli) |
| İkonlar | FontAwesome 6 |
| Grafikler | Chart.js with DataLabels |
| Güvenlik | RBAC Auth, CSRF, XSS Protection |

---

## 📁 Sürüm Geçmişi

### v5.2 — 02 Nisan 2026 (Güncel)
- **Hassas Hesaplama Motoru:** Yuvarlama mantığı "her adımda yukarı" (ceil) yerine, hata payını minimize eden standart matematiksel yuvarlama (`round - half up`) sistemine çekildi.
- **UI Hassasiyet Düzenlemesi:** Görüntü kirliliğini önlemek adına modal dökümlerdeki ara puanlar (A Puanı, HNKK) 4 hane yerine 2 hane (`13,23`) formatına getirildi.
- **Fark Hesaplama Layout:** Para birimi simgelerinin (₺) alt satıra kayması engellendi (nowrap), tablolar dar ekranlar için optimize edildi.
- **Dönem Senkronizasyonu:** Tüm modüllerdeki dönem seçim listeleri, veritabanı kayıt sırasına (`id ASC`) göre ve aynı etiket formatıyla ("Yıl — Ay") eşitlendi.
- **Dosya Temizliği:** Migration betikleri, eski yönlendirme dosyaları ve hata ayıklama kodları temizlenerek sistem %100 "dağıtıma hazır" hale getirildi.

### v5.1 — 01 Nisan 2026
- **Vergi Akordiyonu:** Detay modal penceresinde varsayılan vergi dilimine göre özet gösterim ve tüm dilimler için açılır-kapanır detay dökümü eklendi.
- **Gelişmiş Modal Layout:** Taşma sorunlarını gideren dikey yerleşimli metrik kartları ve kurumsal tipografi alt yapısı kuruldu.
- **Sıralama Stratejisi:** Tüm listeleme işlemlerinde veritabanı kayıt sırasına (`id ASC`) göre tam tutarlılık sağlandı.
- **Birim Odaklı Hiyerarşi:** Tablolarda "Birim / Ünvan" hiyerarşisine geçilerek personelin çalıştığı birim ön plana çıkarıldı.
- **Cache Busting:** Tarayıcı önbelleği kaynaklı görüntüleme sorunlarını önlemek için otomatik dosya sürümleme (`v=5.02`) sistemi entegre edildi.

### v4.0 — Mart 2026
- **Dual-Mode UI:** Sağ üst köşeye yerleştirilen premium ikon ile anında Aydınlık/Karanlık mod arası geçiş.
- **Kullanıcı Yönetimi:** Ayarlar panelinden yeni kullanıcı ekleme, silme ve detaylı yetkilendirme (RBAC) sistemi.
- **Merkezi Ayarlar:** Tüm idari parametrelerin tek bir HUB altında sekmeli yapıya taşınması.

### v3.3 — Mart 2026
- **UI Etiket Düzeltmesi:** Arayüzdeki "Kat: undefined" sorunu giderildi.
- **Dual-Key API:** Geriye dönük uyumluluk için `e_puan` ve `e_artis_orani` desteği.
- **Prefix Eşleşme:** Grup-Ünvan katsayı eşleşmesi 3 harfli prefix bazlı hale getirildi.

---

## 🗄️ Veritabanı Şeması

Yüklenecek `veritabani.sql` dosyası; Ünvanlar, Dönemler, Kurallar, Kullanıcılar ve Sistem Ayarları tablolarını içerir. 
- İlk kurulumda varsayılan 'admin' kullanıcısı (Şifre: `123456![alt text](image.png)`) otomatik oluşturulur.
- Mevcut sistemlerin güncellenmesi için `ayarlar` tablosu manuel eklenmeli veya `inc/db.php`'nin otomatik oluşturmasına izin verilmelidir.

---

*Bu proje, sağlık personeli hak edişlerinin şeffaf, hızlı ve hatasız bir şekilde hesaplanması için geliştirilmiştir.*
