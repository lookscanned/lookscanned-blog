+++
date = '2025-01-18T19:15:33+08:00'
draft = false
title = 'Look Scanned משפר את הביצועים ב-60% בעזרת ImageBitmap'
summary = 'גלו איך Look Scanned משפר את הביצועים באמצעות פענוח אסינכרוני ורינדור יעיל עם ImageBitmap, תוך שמירה על תאימות לדפדפנים ישנים'
description = 'גלו איך Look Scanned משפר את הביצועים באמצעות פענוח אסינכרוני ורינדור יעיל עם ImageBitmap, תוך שמירה על תאימות לדפדפנים ישנים'
tags = ['שיפור ביצועים', 'imagebitmap', 'עיבוד תמונות', 'פיתוח אתרים']
+++

בפיתוח אפליקציות אינטרנט מודרניות כמו [Look Scanned](https://lookscanned.io), שיפור ביצועים הוא בעדיפות עליונה, במיוחד בכל הנוגע לעיבוד תמונות. ממשק `ImageBitmap`, אף שטרם זכה לתפוצה רחבה, הוא כלי רב-עוצמה המאפשר שיפור ביצועים משמעותי. במאמר זה נסקור את התכונות העיקריות של `ImageBitmap`, יתרונותיו, וניסיוננו ביישומו במערכת Look Scanned.

## מהו ImageBitmap?

`ImageBitmap` הוא ממשק HTML5 שפותח במיוחד לעיבוד תמונות יעיל. יתרונו המרכזי הוא היכולת לבצע פענוח ועיבוד תמונות מחוץ לתהליך הראשי, מה שמפחית משמעותית את העומס על הרינדור ומשפר את תגובתיות האפליקציה. אובייקט `ImageBitmap` שנוצר ניתן לשימוש ישיר בסביבות רינדור כמו Canvas 2D או WebGL, מה שהופך אותו לפתרון אידיאלי עבור אפליקציות המעבדות תמונות רבות.

## למה בחרנו ב-ImageBitmap?

בעבר, Look Scanned השתמש ב-`Blob` להעברת נתוני תמונות בין פונקציות העיבוד. אולם, `Blob` דורש קידוד ופענוח בכל שימוש, מה שפוגע בביצועים. לעומת זאת, `ImageBitmap` מאפשר גישה ישירה לנתוני התמונה, מייתר את הצורך בשלבים הנוספים הללו ומשפר משמעותית את ביצועי הרינדור.

## פרטי המימוש

בשל הצורך לשמור על תאימות לדפדפנים ישנים, מעבר מלא ל-`ImageBitmap` לא היה אפשרי. לכן, פיתחנו גישה משולבת להבטחת תאימות רחבה. פרטים על תמיכת דפדפנים ניתן למצוא ב-[caniuse.com](https://caniuse.com/createimagebitmap). בנוסף, בגלל מגבלות Safari בנושא Canvas, אנו משתמשים ב-WebAssembly (WASM) לעיבוד תמונות, הדורש `Blob` כפורמט קלט.

בהתחשב בגורמים אלה, פיתחנו פתרון משולב התומך הן ב-`Blob` והן ב-`ImageBitmap`. להלן פרטי המימוש העיקריים:

### טעינה ופענוח תמונות

```typescript
async function loadImage(url): Promise<ImageBitmap | Blob> {
  const response = await fetch(url);
  const blob = await response.blob();
  if (window.createImageBitmap) {
    return createImageBitmap(blob);
  }
  // שימוש ב-Blob כפתרון חלופי
  return blob;
}
```

### שילוב עם WebAssembly

לעיבוד מתקדם, אנו מעבירים `Blob` למודול WASM כדי להבטיח פעילות תקינה בדפדפנים שאינם תומכים ב-`ImageBitmap`. בתהליך זה, אנו מרנדרים תחילה את התמונה ל-Canvas ולאחר מכן משתמשים ב-`canvas.toBlob` ליצירת אובייקט `Blob` הנדרש.

### מערכת רינדור חלופית

```typescript
async function renderImage(canvas, imageUrl) {
  const ctx = canvas.getContext("2d");
  const image = await loadImage(imageUrl);
  if (image instanceof ImageBitmap) {
    ctx.drawImage(image, 0, 0);
  } else {
    const img = new Image();
    img.src = URL.createObjectURL(image);
    img.onload = () => ctx.drawImage(img, 0, 0);
  }
}
```

## התוצאות שהושגו

יישום `ImageBitmap` הצליח להפחית את זמן עיבוד התמונות ב-Look Scanned מ-50 מילישניות ל-20 מילישניות לתמונה. שיפור זה מורגש במיוחד בעיבוד מסמכים סרוקים, ומספק חוויית משתמש חלקה ומהירה באופן משמעותי.

## תובנה מעניינת

במהלך היישום, גילינו תופעה מעניינת: יצירת עותק חדש של `ImageBitmap` לפני העברתו ל-Web Worker משיגה ביצועים טובים יותר מאשר העברת האובייקט המקורי ישירות. ככל הנראה, הדבר נובע מאופטימיזציות פנימיות של הדפדפן לאובייקטים הניתנים להעברה.

## תמיכת דפדפנים

כיום, `ImageBitmap` נתמך באופן נרחב בכל הדפדפנים המודרניים המובילים, כולל הגרסאות העדכניות של Chrome, Firefox, Edge ו-Safari. מידע מפורט על תאימות ניתן למצוא ב[תיעוד של `createImageBitmap` באתר caniuse.com](https://caniuse.com/createimagebitmap).

## סיכום ומבט קדימה

יישום `ImageBitmap` ב-Look Scanned לא רק הביא לשיפור ביצועים משמעותי, אלא גם אפשר פענוח אסינכרוני, רינדור יעיל יותר ושילוב משופר עם Web Workers. אף שתמיכה ב-`Blob` עדיין נדרשת עבור דפדפנים ישנים, המעבר ההדרגתי ל-`ImageBitmap` ימשיך להניב יתרונות משמעותיים לאורך זמן.

בואו לחוות את שיפור הביצועים בעצמכם ב-[Look Scanned](https://lookscanned.io)!
