---
date: "2026-03-10T11:30:00+08:00"
draft: false
title: "স্ক্যান করা PDF না এডিটেবল PDF: কোনটি পাঠাবেন?"
summary: "এডিটেবল PDF পাঠাবেন, নাকি স্ক্যান কপি পাঠাবেন, ঠিক বুঝতে পারছেন না? এই গাইডে ব্যাখ্যা করা হয়েছে কোন পরিস্থিতিতে কোনটি উপযুক্ত, flattened PDF কোথায় কাজে লাগে, আর কোন ভুলগুলো অযথা friction তৈরি করে।"
description: "এডিটেবল PDF পাঠাবেন, নাকি স্ক্যান কপি পাঠাবেন, ঠিক বুঝতে পারছেন না? এই গাইডে ব্যাখ্যা করা হয়েছে কোন পরিস্থিতিতে কোনটি উপযুক্ত, flattened PDF কোথায় কাজে লাগে, আর কোন ভুলগুলো অযথা friction তৈরি করে।"
tags: ["PDF", "স্ক্যান করা PDF", "এডিটেবল PDF", "ডকুমেন্ট ওয়ার্কফ্লো", "সাবমিশন", "প্রক্রিয়া"]
keywords:
  - "স্ক্যান করা PDF না এডিটেবল PDF"
  - "কখন স্ক্যান করা PDF পাঠাবেন"
  - "কখন এডিটেবল PDF পাঠাবেন"
  - "flattened PDF বনাম এডিটেবল PDF"
  - "টেক্সট-ভিত্তিক PDF ও ইমেজ-ভিত্তিক PDF"
---

একই বিকেলে আমি একই ডকুমেন্ট দু’বার পাঠিয়েছি।

একটি কপি গিয়েছিল এমন একজনের কাছে, যাকে এখনও ডকুমেন্টে মন্তব্য করতে হবে এবং এর ভেতর থেকে কিছু সংখ্যা বের করতে হবে। আরেকটি কপি গিয়েছিল submission flow-তে, যেখানে আমার দরকার ছিল শুধু এইটুকু: ফাইলটা যেন final লাগে এবং আর যেন সেটা নাড়াচাড়া করার ইচ্ছা না জাগে।

কনটেন্ট একই ছিল। কাজ আলাদা ছিল। তাই ফাইলও আলাদা হওয়াই স্বাভাবিক।

এই কারণেই “স্ক্যান করা PDF না এডিটেবল PDF?” আসলে ফাইল ফরম্যাটের বিতর্ক নয়। এটা workflow-এর প্রশ্ন: পরের মানুষটিকে এই ডকুমেন্ট নিয়ে এখনো কী করতে হবে?

যদি তাকে এখনও review করতে হয়, quote করতে হয়, data বের করতে হয়, বা content process করতে হয়, তাহলে editable PDF পাঠান। আর যদি ডকুমেন্ট সত্যিই final হয়ে যায় এবং এখন শুধু একটি fixed copy দেওয়াই কাজ হয়, তাহলে scanned বা scan-style PDF বেশি মানানসই।

## ছোট উত্তর

Editable PDF পাঠান যখন প্রাপককে এগুলো করতে হবে:

- টেক্সট খোঁজা, কপি করা বা উদ্ধৃত করা
- comments রাখা, fields পূরণ করা, বা sign করা
- invoice data বের করা বা ফাইলকে অন্য সিস্টেমে পাঠানো
- accessibility tools ব্যবহার করা

Scanned বা scan-style PDF পাঠান যখন:

- ডকুমেন্ট already final
- সামনের পক্ষ স্পষ্টভাবে scanned copy চেয়েছে
- visual consistency, text search-এর চেয়ে বেশি গুরুত্বপূর্ণ
- ফাইল circulate হওয়ার পরে casual edits কমাতে চান

যদি একটি নিয়মই মনে রাখেন, তাহলে সেটি হোক এই: **সবসময় editable master কপি রেখে দিন, আর scan-style ভার্সন শেষ ধাপে তৈরি করুন।**

## শুরুতেই তিনটি আলাদা জিনিসকে এক করে ফেলবেন না

অনেকেই “editable PDF”, “flattened PDF”, আর “scanned PDF”কে একই জিনিস ধরে নেন। আসলে তা নয়।

এই লেখায় **editable PDF** বলতে বোঝানো হয়েছে একটি সাধারণ digital PDF, যেখানে আসল text layer থাকে। সাধারণত আপনি এতে search করতে পারেন, text select করতে পারেন, content copy করতে পারেন, আর অনেক সময় comment, form fill বা sign-ও করতে পারেন। এটি Word document নয়, কিন্তু তা সত্ত্বেও এটি একটি digital document-এর মতো behave করে, ছবির মতো নয়।

**Flattened PDF** অন্য জিনিস। Flatten করার সময় form fields, signatures, comments ও annotations পেজের সঙ্গেই মিশে যায়, যাতে সেগুলো আর interactive object হিসেবে কাজ না করে। তবু text layer অনেক সময় থেকেই যায়, ফলে ফাইল searchable থাকে।

**Scanned PDF** প্রতিটি পেজের ছবির কাছাকাছি। কখনও এতে OCR থাকে, কখনও থাকে না। OCR কাজে লাগে, কিন্তু এটি আসল text layer-এর বিকল্প নয়।

এই পার্থক্য গুরুত্বপূর্ণ। অনেকেই শুধু ডকুমেন্ট “final দেখাক” বলে পুরো ফাইল rasterize করে ফেলেন, অথচ flattened PDF-ই কম ঝামেলায় আসল সমস্যার সমাধান করতে পারত।

## যদি ডকুমেন্টের এখনও কাজ বাকি থাকে, তাহলে editable PDF পাঠান

এটাই হয়তো সবচেয়ে exciting উত্তর নয়, কিন্তু বেশিরভাগ সময় এটিই সঠিক।

যদি প্রাপকের এখনও ফাইলটি review করতে হয়, edits suggest করতে হয়, clauses compare করতে হয়, বা numbers copy করতে হয়, তাহলে text-based PDF-ই ভালো working file। এটি proposals, contract drafts, invoices, policy documents, reports, এবং প্রায় সবকিছুর জন্যই সত্যি, যা এখনও প্রক্রিয়ার মধ্যে রয়েছে।

শুধু searchable হওয়াটাই বড় সুবিধা। কেউ যখন কোনো clause খুঁজবে, invoice number কপি করবে, বা email-এ একটি লাইন quote করবে, তখন scan-look ফাইলটি দ্রুতই ঝামেলায় পরিণত হবে।

এর একটি system side-ও আছে। Finance, procurement, আর document-processing workflows অনেক সময় image-heavy scans-এর তুলনায় clean text-based PDFs-এর সঙ্গে ভালো কাজ করে। কিছু দেখতে বেশি “official” লাগছে বলে সেটি কাজের জন্যও ভালো হবে, এমন নয়।

Accessibility-ও গুরুত্বপূর্ণ। যারা screen reader বা অন্য assistive tools ব্যবহার করেন, তাদের জন্য pure scan অনেক বেশি অসুবিধাজনক হতে পারে।

তাই পরের ধাপ যদি collaboration, review, extraction, reuse বা accessibility হয়, তাহলে editable version-ই পাঠান।

## যদি আপনার আসল দরকার শুধু “final feel”, তাহলে flatten-ই যথেষ্ট হতে পারে

অনেকেই এই ধাপটা এড়িয়ে যান।

প্রায়ই আপনার scanned PDF আসলে দরকার হয় না। আপনি শুধু চান, ডকুমেন্টটি draft-এর মতো behave করা বন্ধ করুক।

হয়তো আপনি চান না signature field এখনও clickable থাকুক। হয়তো comments ফাইলের সঙ্গে চলে যাক, সেটাও চান না। হয়তো Acrobat-এ কেউ fields টানাটানি করুক, সেটাও চান না।

এগুলো সাধারণত flattening-এর সমস্যা, scanning-এর নয়।

Flattened PDF একই সঙ্গে final এবং polished দেখাতে পারে, আর text searchable-ও রাখতে পারে। আপনার আসল দরকার যদি হয় “ফাইল স্থির করা”, “স্ক্যানের মতো দেখানো” নয়, তাহলে flatten অনেক সময় বেশি clean সমাধান।

## ডকুমেন্ট সত্যিই final artifact হয়ে গেলে scanned বা scan-style PDF পাঠান

এমন ভার্সন পাঠানোর ভালো কারণ থাকতে পারে। আসল বিষয় হলো timing।

ডকুমেন্ট সত্যিই শেষ হয়ে গেলে scan-style copy এই পরিস্থিতিতে উপযুক্ত:

- signed agreements যা final copy হিসেবে circulate হবে
- submission packets যেখানে অন্য পক্ষ scanned attachments প্রত্যাশা করছে
- final archives যেখানে একটি stable visual snapshot দরকার
- এমন documents যেগুলো forward, print বা re-upload হওয়ার আগে casual editing-এর শিকার হোক, তা আপনি চান না

এখানে একটি human factor-ও আছে: scan-style PDF দেখামাত্র বোঝায় “এটা final”।

তবে “সহজে edit করা কঠিন” আর “বেশি secure” — এই দুটো এক জিনিস নয়। Scan look casual edits কমাতে পারে, কিন্তু permissions, encryption, digital signature, বা proper redaction-এর বিকল্প নয়।

আপনার চিন্তা যদি sensitive information নিয়ে হয়, তাহলে সেই সমস্যাটাই সরাসরি সমাধান করুন। Scan effect কোনো security policy নয়। যদি এই বিষয়টি আপনার workflow-এর অংশ হয়, তাহলে [কালো বার মানেই রিড্যাকশন নয়](../black-bars-arent-redaction-pdf-redaction-checklist/) লেখাটিও দেখুন।

## কখন scanned PDF ভুল সিদ্ধান্ত

আমি বারবার একই ভুলগুলো দেখি:

- কেউ চাওয়ার আগেই invoice-কে scan করে ফেলা
- এমন কারও কাছে scanned draft পাঠানো, যার এখনও comments দেওয়া বাকি
- শুধু annotations লুকাতে গিয়ে পুরো document rasterize করে ফেলা
- scan look-কে বেশি “official” মনে করা, যদিও এতে search, quote আর processing কঠিন হয়ে যায়

সাধারণত scanned PDF ভুল পছন্দ যখন:

- ডকুমেন্টের এখনও review বাকি
- কারও ভেতর থেকে data copy করতে হবে
- ফাইল accounting বা document software-এ যাবে
- accessibility গুরুত্বপূর্ণ
- আপনি long-term searchability রাখতে চান
- আপনার আসল উদ্দেশ্য শুধু active fields বা comments সরানো

এর মানে এই নয় যে scanned PDF খারাপ। এর মানে শুধু এতটুকু, final delivery file হিসেবে এগুলো ভালো কাজ করে; default working file হিসেবে নয়।

## সাধারণ পরিস্থিতিতে আমি কী পাঠাতাম

প্র্যাকটিক্যালি আমি এভাবে ভাবি:

- **Proposal বা draft agreement:** editable PDF পাঠাতাম। এখনও comments, version comparison আর quoting বাকি থাকে।
- **Signed contract যা দুই পক্ষেই যাবে:** editable master রেখে fixed final copy পাঠাতাম। এখানে flattened PDF বা scan-style PDF — দুটোই মানানসই, বিশেষ করে যদি signed version-টাই পরে circulate হয়। আপনার workflow যদি এরকম হয়, তাহলে [ফ্রিল্যান্স চুক্তির স্ক্যান করা কপি কীভাবে তৈরি করবেন](../create-scanned-copies-of-freelance-contracts/) কাজে লাগতে পারে।
- **Invoice:** আমি clean text-based PDF দিয়ে শুরু করতাম, যদি না client বা portal স্পষ্টভাবে scanned copy চাইত। অনেক accounting workflow heavy image-এর চেয়ে text parse করতেই বেশি স্বচ্ছন্দ। scan সত্যিই দরকার হলে তখনই আলাদা করে বানাতাম। এর জন্য [ডিজিটাল চালান স্ক্যান করা PDF-এ রূপান্তরিত করুন ক্লায়েন্ট জমা দেওয়ার জন্য](../convert-digital-invoices-to-scanned-pdfs/) দেখুন।
- **অস্পষ্ট নির্দেশনার upload portal:** যদি শুধু “PDF” লেখা থাকে, তাহলে আগে clean searchable PDF পাঠাতাম। কেবল স্পষ্টভাবে scan চাইলে scanned version দিতাম।
- **Internal archive:** ডকুমেন্ট গুরুত্বপূর্ণ হলে আমি দুই ভার্সনই রেখে দিতাম। Searchable version পরে কাজে লাগে, fixed visual version-ও লাগে।

## যে workflow সবচেয়ে কম সমস্যা তৈরি করে

বেশিরভাগ সময় সবচেয়ে clean পদ্ধতি “একটা বেছে চিরদিন সেটাই” নয়, বরং এটা:

1. Source document editable অবস্থায় রাখুন।
2. Review, approval ও সাধারণ sharing-এর জন্য একটি clean digital PDF export করুন।
3. Active fields বা annotations সরাতে হলে content final হওয়ার পরে PDF flatten করুন।
4. Final delivery সত্যিই benefit করলে তবেই scanned বা scan-style version তৈরি করুন।
5. File names পরিষ্কার রাখুন, যাতে working copy আর sendable copy গুলিয়ে না যায়।

সহজ file names অনেক কাজ করে:

- `contract-v3-review.pdf`
- `contract-approved-final.pdf`
- `contract-final-scanned.pdf`

ঠিক এখানেই [Look Scanned](https://lookscanned.io) ভালোভাবে বসে। যদি সত্যিই এমন final file দরকার হয় যা আসল স্ক্যানের মতো দেখায়, তাহলে এটি browser-এর ভেতর local processing দিয়ে করা যায়, server-এ document upload না করেই। গুরুত্বপূর্ণ বিষয় শুধু tool নয়, timing-ও: প্রক্রিয়ার শেষে, মাঝখানে নয়।

যদি এই ভার্সনটাই আপনার দরকার হয়, তাহলে [কীভাবে PDF কে স্ক্যান করা দেখাবেন](../make-pdf-look-scanned/) দিয়ে এগোন। আর source file যদি PDF নয়, Office থেকে শুরু হয়, তাহলে ভালো entry point হলো [কীভাবে Word এবং Excel ফাইলগুলিকে স্ক্যান করা PDF-এ রূপান্তর করবেন](../convert-word-excel-to-scanned-pdf/)।

## দুটি ছোট প্রশ্ন, যা বারবার আসে

### Flattened PDF কি scanned PDF-এর মতোই?

না। Flattened PDF text-based এবং searchable থাকতে পারে। Scanned PDF বেশি behave করে page image-এর মতো। যদি আপনার সমস্যা শুধু active fields, comments বা annotations হয়, তাহলে flatten অনেক সময় যথেষ্ট।

### Scanned PDF কি বেশি নিরাপদ?

আসলে না। এটি casual edits কমাতে পারে, কিন্তু proper redaction, access control বা document security-এর বিকল্প নয়। যদি লক্ষ্য security হয়, তাহলে security-ই সরাসরি সামলাতে হবে।

## শেষ কথা

সবচেয়ে ভালো ফাইল সেইটা নয়, যেটা সবচেয়ে বেশি “official” দেখায়। সবচেয়ে ভালো ফাইল সেইটা, যেটা পরের মানুষের জন্য সবচেয়ে কম friction তৈরি করে।

Working file-কে কাজের জন্য সহজ রাখুন। Final file-কে সত্যিই final মনে হতে দিন। এগুলো দুই রকম কাজ, আর সেই কারণেই এদের জন্য দুইটি PDF রাখা একদম স্বাভাবিক।
