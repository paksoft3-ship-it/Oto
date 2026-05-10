# ERZ GARAGE Bursa Nilüfer

Next.js App Router tabanlı, SEO odaklı ve Vercel uyumlu oto servis websitesi.

## Kurulum

```bash
npm install
npm run dev
```

Uygulama varsayılan olarak `http://localhost:3000` üzerinde açılır.

## Üretim Build

```bash
npm run build
npm start
```

## Vercel Deploy

1. Projeyi GitHub'a gönderin.
2. Vercel üzerinde yeni proje oluşturun.
3. Environment Variables bölümüne `.env.example` içindeki değişkenleri ekleyin.
4. Deploy edin.

## Ortam Değişkenleri

`.env.example` dosyası:

```env
NEXT_PUBLIC_SITE_URL=https://erzgaragebursa.com
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ID=
NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_LABEL=
NEXT_PUBLIC_GOOGLE_ADS_LEAD_CONVERSION_LABEL=
```

## GTM Entegrasyonu

- `NEXT_PUBLIC_GTM_ID` tanımlanırsa GTM script ve noscript fallback otomatik yüklenir.
- Tanımlanmazsa site GTM olmadan çalışmaya devam eder.

## GTM ile Google Ads Conversion Kurulumu

`window.dataLayer` içine şu event isimleri gönderilir:

- `phone_click`
- `whatsapp_click`
- `directions_click`
- `form_submit_attempt`
- `service_card_click`
- `brand_page_cta_click`

Önerilen eşleştirme:

- `phone_click`: Google Ads telefon dönüşümü
- `whatsapp_click`: lead / mesaj dönüşümü
- `directions_click`: yerel niyet dönüşümü
- `form_submit_attempt`: form lead dönüşümü

GTM içinde ilgili trigger ve tag yapısını bu event isimleri üzerinden kurabilirsiniz.

## İçerik Güncelleme

İşletme bilgileri:

- `src/data/site.ts`

Hizmet sayfaları:

- `src/data/services.ts`

Marka sayfaları:

- `src/data/brands.ts`

Blog içerikleri:

- `src/data/blog.ts`

Genel SSS blokları:

- `src/data/faqs.ts`

## SEO Yapısı

- Tüm sayfalarda Next.js Metadata API kullanılır.
- Canonical URL üretimi `NEXT_PUBLIC_SITE_URL` üzerinden yapılır.
- JSON-LD şemaları `src/lib/seo.ts` ve `src/components/seo/JsonLd.tsx` üzerinden oluşturulur.
- Sitemap: `src/app/sitemap.ts`
- Robots: `src/app/robots.ts`

## Harita ve Geo Bilgileri

Bu alanları güncellemek için:

- `src/data/site.ts` içindeki `directionsUrl`
- `src/data/site.ts` içindeki `geo.latitude`
- `src/data/site.ts` içindeki `geo.longitude`
- `src/data/site.ts` içindeki `location`

## Tasarım ve Görseller

- Placeholder OG görseli: `public/og-image.svg`
- Hero görseli: `public/images/hero-garage.svg`
- Harita placeholder: `public/images/map-placeholder.svg`

## Notlar

- İletişim formu şu an frontend hazırdır, backend entegrasyonu içermez.
- BMW, Mercedes ve Audi için resmi logo kullanılmaz; metin tabanlı anlatım tercih edilir.
# Oto
# Oto
# Auto
