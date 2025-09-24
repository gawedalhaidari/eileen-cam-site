
# Comments Box
- Default mode uses **localStorage** (works فورًا، لكنه محلي لكل جهاز).
- لتفعيل التعليقات العامة للجميع، غيّر `COMMENTS_MODE` إلى `"firebase"` في `comments.js`
  واملأ `firebaseConfig` ثم استورد SDK `firebase-app` و`firebase-database` في `index.html`.
- لا توجد خاصية حذف/تعديل؛ كل تعليق يُعرض فورًا مع التاريخ والتقييم (0–5).
