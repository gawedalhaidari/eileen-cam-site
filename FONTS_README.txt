# Local fonts (offline)
ضع ملفات الخطوط بصيغة WOFF2 داخل المجلد:
assets/fonts/

الأسماء المتوقعة:
- Cairo.woff2
- Tajawal.woff2
- IBM-Plex-Sans-Arabic.woff2
- Noto-Kufi-Arabic.woff2
- Almarai.woff2
- Changa.woff2
- El-Messiri.woff2
- Amiri.woff2
- Mada.woff2
- Markazi-Text.woff2

بعد النسخ، افتح index.html وسيعمل مُبدّل الخط بلا إنترنت.
يمكن تغيير الخط الافتراضي بتعديل المتغيّر:
:root { --font: "Cairo"; }
