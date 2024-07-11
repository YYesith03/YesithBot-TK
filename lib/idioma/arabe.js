const lenguaje = () => { return 'ar' } //عرب

//إشعارات الرسائل
const smsAvisoRG = () => { return `╰⊱✅⊱ *نتيجة* ⊱✅⊱╮\n\n` }
const smsAvisoAG = () => { return `╰⊱⚠️⊱ *تنبيه قضائي* ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => { return `╰⊱❕⊱ *معلومة* ⊱❕⊱╮\n\n` }
const smsAvisoFG = () => { return `╰⊱❌⊱ *خطأ* ⊱❌⊱╮\n\n` }
const smsAvisoMG = () => { return `╰⊱❗️⊱ *عمل سيء* ⊱❗️⊱╮\n\n` }
const smsAvisoEEG = () => { return `╰⊱📩⊱ *أبلغ عن* ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => { return `╰⊱💚⊱ *النجاح* ⊱💚⊱╮\n\n` }

//المعلمات في الأوامر
const smsRowner = () => { return `\`\`\`¡¡هذا الأمر أنا فقط بصفتي صانع الروبوت يمكنه استخدامه!!\`\`\`` }
const smsOwner = () => { return `\`\`\`¡¡هذا الأمر فقط منشئ المحتوى الخاص بي يمكنه استخدامه!!\`\`\`` }
const smsMods = () => { return `\`\`\`¡¡هذا الأمر فقط للمنسقين ومنشئ المحتوى الخاص بي يمكنهم استخدامه!!\`\`\`` }
const smsPremium = () => { return `\`\`\`¡¡يتوفر هذا الأمر فقط للمستخدمين المتميزين ومنشئ المحتوى الخاص بي!! للحصول على قسط شراء تذكرة باستخدام #pass premium\`\`\`` }
const smsGroup = () => { return `\`\`\`¡¡لا يمكن استخدام هذا الأمر إلا في مجموعات!!\`\`\`` }
const smsPrivate = () => { return `\`\`\`¡¡لا يمكن استخدام هذا الأمر إلا للخصوصية!!\`\`\`` }
const smsAdmin = () => { return `\`\`\`¡¡هذا الأمر مخصص فقط للمشرفين!!\`\`\`` }
const smsBotAdmin = () => { return `\`\`\`¡¡أنا بحاجة إلى أن أكون مشرفًا حتى تتمكن من استخدام هذا الأمر!!\`\`\`` }
const smsUnreg = () => { return `\`\`\`¡¡أنت بحاجة إلى التسجيل لاستخدام هذا الأمر ، نوع #verify للتسجيل!!\`\`\`` }
const smsRestrict = () => { return `\`\`\`¡¡هذا الأمر مقيد من قِبل خالقي!!\`\`\`` }

//قائمة القائمة
const smsTime = () => { return `الوقت الحالي`}
const smsUptime = () => { return `أثناء الجري`}
const smsVersion = () => { return `إصدار ${global.packname}`}
const smsTotalUsers = () => { return `إجمالي المستخدمين`}
const smsMode = () => { return `إنه في الوضع`}
const smsModePublic = () => { return `عام`}
const smsModePrivate = () => { return `خاص`}
const smsBanChats = () => { return `الدردشات المحظورة`}
const smsBanUsers = () => { return `المستخدمون المحظورون`}
const smsPareja = () => { return `شريك`}
const smsResultPareja = () => { return `غير مرتبطة`}
const smsSaludo = () => { return `👋 أهلا! أهلا بك 👋`}
const smsDia = () => { return `🌇 صباح الخير ⛅`}
const smsTarde = () => { return `🏙️ مساء الخير 🌤️`}
const smsTarde2 = () => { return `🌆 مساء الخير 🌥️`}
const smsNoche = () => { return `🌃 طاب مساؤك 💫`}
const smsListaMenu = () => { return `⊹ قائمة القائمة ⊹`}
const smsLista1 = () => { return `🌟 معلومات JOANBOT 🌟`}
const smsLista2 = () => { return `💖 المنشئ 💖`}
const smsLista3 = () => { return `🎁 تبرع: الدعم 🎁`}
const smsLista4 = () => { return `🚀 سرعة 🚀`}
const smsLista5 = () => { return `💡 معلومات القائمة 💡`}
const smsLista6 = () => { return `🌀 قائمة كاملة 🌀`}
const smsLista7 = () => { return `🐈 تثبيت JOANBOT 🐈`}
const smsLista8 = () => { return `🍄 كن SUB BOT 🍄`}
const smsLista9 = () => { return `📄 الشروط والأحكام والخصوصية 📄`}
const smsLista10 = () => { return `🌟 المغامرة والأعلى 🌟`}
const smsLista11 = () => { return `🏆 قمة العالم 🏆`}
const smsLista12 = () => { return `🏅 المستخدمون المتميزون 🏅`}
const smsLista13 = () => { return `🎟️ كن مستخدمًا متميزًا 🎟️`}
const smsLista14 = () => { return `🛣️ البعثات 🛣️`}
const smsLista15 = () => { return `⚗️ قائمة آر بي جي ⚗️`}
const smsLista16 = () => { return `🏪 شراء شراء 🏪`}
const smsLista17 = () => { return `🎒 المخزون 🎒`}
const smsLista18 = () => { return `🌟 الوسائط المتعددة 🌟`}
const smsLista19 = () => { return `📲 تنزيل القائمة 📲`}
const smsLista20 = () => { return `🔍 قائمة البحث 🔍`}
const smsLista21 = () => { return `🛰️ قائمة المحول 🛰️`}
const smsLista22 = () => { return `🧰 قائمة تعديل الصوت 🧰`}
const smsLista22_1 = () => { return `🔩 قائمة الأدوات 🔩`}
const smsLista23 = () => { return `🌟 مرح 🌟`}
const smsLista24 = () => { return `🎡 الألعاب الديناميكية 🎡`}
const smsLista25 = () => { return `🔊 قائمة الصوت 🔊`}
const smsLista26 = () => { return `🎈 قائمة الملصقات والمرشحات 🎈`}
const smsLista27 = () => { return `✨ قائمة التأثيرات والشعارات ✨`}
const smsLista28 = () => { return `🌅 قائمة الشعارات 2 🌅`}
const smsLista29 = () => { return `⛩️ ذكريات و انمي عشوائية ⛩️`}
const smsLista30 = () => { return `🔞 أوامر للبالغين +18 🔞`}
const smsLista31 = () => { return `🌟 الإعدادات 🌟`}
const smsLista32 = () => { return `🔰 قائمة المجموعات 🔰`}
const smsLista33 = () => { return `📑 أنواع القوائم 📑`}
const smsLista34 = () => { return `⚙️ مركز التكوين ⚙️`}
const smsLista35 = () => { return `💎 قائمة المالك 💎`}

//main.js
const smsWelcome = () => { return `*╭┈⊰* @subject *⊰┈ ✦*\n*┊✨ أهلا بك!!*\n┊💖 @user\n┊📄 *اقرأ وصف المجموعة*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦*\n${String.fromCharCode(8206).repeat(850)}\n@desc`}
const smsBye = () => { return '*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ @user\n┊ *غادر المجموعة ، سيعود قريبًا* 😎\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*'}
const smsSpromote = () => { return '*@user أنت الآن مسؤول في هذه المجموعة!!*'}
const smsSdemote = () => { return '*@user لم يعد هناك مشرف في هذه المجموعة!!*'}
const smsSdesc = () => { return '*الوصف الجديد للمجموعة هو:*\n\n@desc'}
const smsSsubject = () => { return '*الاسم الجديد للمجموعة هو:*\n\n@subject'}
const smsSicon = () => { return '*تم تغيير صورة هذه المجموعة!!*'}
const smsSrevoke = () => { return '*الآن هذا هو الرابط الجديد لهذه المجموعة!!*\n\n*@revoke*'}
const smsConexion = () => { return `\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ 🟢 الإتصال ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠\n│\n│★ اتصال ناجح مع WhatsApp  😺\n│\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ ✅ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠`}
const smsCargando = () => { return `😸 جار التحميل...\n`}
const smsCodigoQR = () => { return `\n✅ تنتهي صلاحية رمز QR في 45 ثانية ✅`}
const smsConexionOFF = () => { return `\n⚠️ لا يوجد اتصال ، احذف المجلد ${global.authFile} وامسح رمز الاستجابة السريعة ⚠️`}
const smsClearTmp = () => { return `\n╭» 🟢 الوسائط المتعددة 🟢\n│→ تم حذف الملفات من مجلد TMP\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeSession = () => { return `\n╭» 🔵 ${global.authFile} 🔵\n│→ إنهاء الجلسات غير الأساسية\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeOldFiles = () => { return `\n╭» 🟠 ملفات 🟠\n│→ تم حذف الملفات المتبقية\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeSessionSB1 = () => { return `\n╭» 🟡 JoanJadiBot 🟡\n│→ لا شيء لحذفه \n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeSessionSB2 = () => { return `\n╭» ⚪ JoanJadiBot ⚪\n│→ تم حذف الملفات غير الأساسية\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeSessionSB3 = () => { return `\n╭» 🔴 JoanJadiBot 🔴\n│→ حدث خطأ\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️\n`} 
const smspurgeOldFiles1 = () => { return `\n╭» 🟣 أرشيف 🟣\n│→`} 
const smspurgeOldFiles2 = () => { return `احذفها بنجاح\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeOldFiles3 = () => { return `\n╭» 🔴 أرشيف 🔴\n│→`} 
const smspurgeOldFiles4 = () => { return `فشل في الحذف\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️❌\n`}
const smsConexioncerrar = () => { return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ☹\n┆ ⚠️ تم إغلاق الاتصال، جارٍ إعادة الاتصال....\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ☹`}
const smsConexionperdida = () => { return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ☂\n┆ ⚠️ تم فقدان الاتصال بالخادم، جارٍ إعادة الاتصال....\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ☂`}
const smsConexionreem = () => { return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ✗\n┆ ⚠️ تم استبدال الاتصال، وتم فتح جلسة جديدة أخرى، يرجى إغلاق الجلسة الحالية أولاً.\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ✗`}
const smsConexionreinicio = () => { return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ✓\n┆ ❇️ جاري التوصيل بالخادم...\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ✓`}
const smsConexiontiem = () => { return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ▸\n┆ ⌛ انتهت مهلة الاتصال، جارٍ إعادة الاتصال....\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ▸`}
const smsConexiondescon = (reason, connection) => { return `\n⚠️❗ سبب قطع الاتصال غير معروف: ${reason || ''} >> ${connection || ''}`}
const smsMainBot = () => { return "تم تحديث 'main.js' بنجاح"}

//_allantilink.js
const smsTextoYT = () => { return '😻 ممتاز JoanBot-MD - WhatsApp '}
const smsApagar = () => { return '❌ تعطيل'}
const smsEncender = () => { return '✅ تفعيل'}
const smsEnlaceTik = () => { return `*تم اكتشاف رابط TIKTOK محظور في هذه المجموعة*\n\n*لقد شرعت في حذفك*`}
const smsEnlaceYt = () => { return `*تم اكتشاف رابط YOUTUBE محظور في هذه المجموعة*\n\n*لقد شرعت في حذفك*`}
const smsEnlaceTel = () => { return `*تم اكتشاف رابط TELEGRAM محظور في هذه المجموعة*\n\n*لقد شرعت في حذفك*`}
const smsEnlaceFb = () => { return `*تم اكتشاف رابط FACEBOOK محظور في هذه المجموعة*\n\n*لقد شرعت في حذفك*`}
const smsEnlaceIg = () => { return `*تم اكتشاف رابط INSTAGRAM محظور في هذه المجموعة*\n\n*لقد شرعت في حذفك*`}
const smsEnlaceTw = () => { return `*تم اكتشاف رابط TWITTER محظور في هذه المجموعة*\n\n*لقد شرعت في حذفك*`}
const smsAllAdmin = () => { return `*أحتاج إلى أن أكون مشرفًا لأكون قادرًا على إزالة المتطفلين*`}
const smsSoloOwner = () => { return `*يجب على خالقي تنشيط الوظيفة*\n*#on restrict*`}

//handler.js
const smsCont1 = () => { return `*🔴 فشل الأمر 🔴*`}
const smsCont2 = () => { return `*⚠️ PLUGIN:*`}
const smsCont3 = () => { return `*⚠️المستعمل:*`}
const smsCont4 = () => { return `*⚠️ أمر:*`}
const smsCont5 = () => { return `*⚠️ خطأ:*`}
const smsCont6 = () => { return `*❗ أبلغ عن هذه الرسالة باستخدام الأمر #reporte من أجل حلها*`}
const smsCont7 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*ليس لديها ماسات!! 💎 يمكنك الذهاب إلى المتجر باستخدام الأمر*`}
const smsCont8 = () => { return ` *الماس 💎 تستخدم*`}
const smsCont9 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*بحاجة إلى المستوى ➡️*`}
const smsCont10 = () => { return `*لاستخدام هذا الأمر. المستوى الحالي الخاص بك هو ➡️*`}
const smsCont11 = () => { return `*التحديث باستخدام الأمر*`}
const smsCont12 = () => { return `مجموعة كبيرة!! 😼`}
const smsCont13 = () => { return `انضم شخص ما!! 🥳`}
const smsCont14 = () => { return `بقي شخص ما!! 🧐`}
const smsCont15 = () => { return `*أهلا*`}
const smsCont16 = () => { return `*مكالمات الفيديو* 📲`}
const smsCont17 = () => { return `*المكالمات* 📞`}
const smsCont18 = () => { return `*غير مصرح لهم بذلك ، لذا سأقوم بمنعك*\n\n*إذا تم الاتصال بك عن طريق حادث ، فاتصل بمنشئ هذا الروبوت*`}
const smsCont19 = () => { return `منع الحذف`}
const smsCont20 = () => { return `*┃✤ اسم:*`}
const smsCont21 = () => { return `*┃✤ إرسال الرسالة المحذوفة ...*`}

//_anti-internacional.js
const smsInt1 = () => { return `*هذا العدد*`}
const smsInt2 = () => { return `*غير مسموح به في هذه المجموعة !!*`}

//_antilink.js
const smsAdwa = () => { return `${global.lenguajeGB['smsAvisoEG']()}*نظرًا لأنك مسؤول في هذه المجموعة ، فلن تتم إزالتك*`}
const smsEnlaceWat = () => { return `${lenguajeGB['smsAvisoAG']()}*تم اكتشاف رابط WHATSAPP محظور في هذه المجموعة*\n\n*لقد شرعت في حذفك*`}

//_antilink2.js
const smsEnlaceWatt = () => { return `${lenguajeGB['smsAvisoAG']()}تم اكتشاف ارتباط محظور يحتوي على HTTPS في هذه المجموعة\n\nلقد شرعت في حذفك`}

//_antispam.js
const smsNoSpam = () => { return `🤨 لا تزعجك ، فلن تكون قادرًا على الاستخدام ${global.packname} إلى عن على ${60000 / 1000 - 59} اللحظة`}

//_antispam_.js
const smsNoSpam2 = () => { return `كان غير محظور بعد ${60000 / 1000 - 59} اللحظة. من فضلك لا تزعج !!`}

//نص
const smsConMenu = () => { return `☘️ MENU`}

//خطأ
const smsMalError = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`لقد حدث خطأ غير متوقع.\`\`\``}
const smsMalError2 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`لقد نشأ إزعاج. حاول مرة أخرى.\`\`\``}
const smsMalError3 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`حدث خطأ ما ، أبلغ عن هذا الأمر باستخدام:\`\`\`\n`}

//_antitoxic.js
const smsToxic1 = () => { return `لا !!! 🤬 قل هذه الكلمة`}
const smsToxic2 = () => { return `ممنوع ألا تكون سامة`}
const smsToxic3 = () => { return `*تحذير*\n⚠️`}
const smsToxic4 = () => { return `😭 أنا اسف`}
const smsToxic5 = () => { return `☢️ تعطيل مضاد للسموم`}
const smsToxic6 = () => { return `لقد حذرتك عدة مرات !!`}
const smsToxic7 = () => { return `لقد تجاوزت جميع تحذيرات 4 الآن سيتم التخلص منك 🙄`}

//متجر
const eExp = () => { return '⚡ Experience' } 
const eDiamante = () => { return '💎 Diamond' } 
const eDiamantePlus = () => { return '💎+ Diamond+' }
const eToken = () => { return '🪙 Token' } 
const eEsmeralda = () => { return '💚 Emerald' } 
const eJoya = () => { return '♦️ Jewel' }
const eMagia = () => { return '🌀 Magic' } 
const eOro = () => { return '👑 Gold' } 
const eJoanCoins = () => { return '🐱 JoanCoins' }
const eJoanTickers = () => { return '🎫 Joan Tickers' } 
const eEnergia = () => { return '✨ Energy' }

const ePocion = () => { return '🥤 Potion' }
const eAgua = () => { return '💧 Water' }
const eBasura = () => { return '🗑 Trash' }
const eMadera = () => { return '🪵 Wood' }
const eRoca = () => { return '🪨 Rock' }
const ePiedra = () => { return '🥌 Stone' }
const eCuerda = () => { return '🕸️ String' }
const eHierro = () => { return '⛓️ Iron' }
const eCarbon = () => { return '⚱️ Coal' }
const eBotella = () => { return '🍶 Bottle' }
const eLata = () => { return '🥫 Can' }
const eCarton = () => { return '🪧 Paperboard' } 

const eEletric = () => { return '💡 Electricity' }
const eBarraOro = () => { return '〽️ Gold bar' }
const eOroComun = () => { return '🧭 Common Gold' }
const eZorroG = () => { return '🦊🌫️ Big Fox' }
const eBasuraG = () => { return '🗑🌫️ Super Trash' }
const eLoboG = () => { return '🐺🌫️ Super Wolf' }
const eMaderaG = () => { return '🛷🌫️ Super Wood' }
const eEspada = () => { return '⚔️ Sword' }
const eCarnada = () => { return '🪱 Bait' }
const eBillete = () => { return '💵 Banknotes' }
const ePinata = () => { return '🪅 Pinata' }
const eGancho = () => { return '🪝 Hook' }
const eCanaPescar = () => { return '🎣 Fishing Rod' } 

const eCComun = () => { return '📦 Common Box' }
const ePComun = () => { return '🥡 Uncommon Box' }
const eCMistica = () => { return '🗳️ Mythic Box' }
const eCMascota = () => { return '📫 Pet Box' }
const eCJardineria = () => { return '💐 Gardening Box' }
const eClegendaria = () => { return '🎁 Legendary Box' } 

const eUva = () => { return '🍇 Grape' }
const eManzana = () => { return '🍎 Apple' }
const eNaranja = () => { return '🍊 Orange' }
const eMango = () => { return '🥭 Mango' }
const ePlatano = () => { return '🍌 Banana' } 

const eSUva = () => { return '🌾🍇 Grape seeds' }
const eSManzana = () => { return '🌾🍎 Apple seeds' }
const eSNaranja = () => { return '🌾🍊 Orange seeds' }
const eSMango = () => { return '🌾🥭 Mango Seeds' }
const eSPlatano = () => { return '🌾🍌 Banana seeds' } 

const eCentauro = () => { return '🐐 Centaur' }
const eAve = () => { return '🦅 Bird' }
const eGato = () => { return '🐈 Cat' }
const eDragon = () => { return '🐉 Dragon' }
const eZorro = () => { return '🦊 Fox' }
const eCaballo = () => { return '🐎 Horse' }
const eFenix = () => { return '🕊️ Phoenix' }
const eLobo = () => { return '🐺 Wolf' }
const ePerro = () => { return '🐶 Dog' } 

const eAMascots = () => { return '🍖 Pet Food' }
const eCCentauro = () => { return '🐐🥩 Centaur Food' }
const eCAve = () => { return '🦅🥩 Bird Food' }
const eCMagica = () => { return '🌀🥩 Magic Food' }
const eCDragon = () => { return '🐉🥩 Dragon Food' }
const eACaballo = () => { return '🐎🥩 Horse Food' }
const eCFenix = () => { return '🕊️🥩 Phoenix Food' } 

//info-grupos-lista.js
const smsLisA = () => { return '_*يوجد في هذه المجموعات:*_'}
const smsLisB = () => { return '*⭔ إجمالي المجموعات:*'}
const smsLisC = () => { return '*⋄ تَجَمَّع:*'}
const smsLisD = () => { return '*⋄ ID:*'}
const smsLisE = () => { return '*⋄ مشاركون:*'}

//config-on y off.js
const smsWel1 = () => { return `🎉 أهلا بك`}
const smsWel2 = () => { return `رسالة ترحيب للأعضاء الجدد في المجموعات`}
const smsDete1 = () => { return `🔔 إشعارات`}
const smsDete2 = () => { return `إشعارات الإجراءات داخل المجموعة`}
const smsANivel1 = () => { return `🆙 مستوى ذاتي`}
const smsANivel2 = () => { return `رفع مستوى الجميع تلقائيًا ؛ (يطبق المكافآت على رفع المستوى)`}
const smsRestri1 = () => { return `⛔ لتقييد`}
const smsRestri2 = () => { return `قم بتمكين وظيفة إضافة أو إزالة الأشخاص في المجموعات`}
const smsLlamar1 = () => { return `🚫 المكالمات المضادة`}
const smsLlamar2 = () => { return `حظر الأشخاص الذين يجرون المكالمات`}
const smsAntiSp1 = () => { return `🚯 مكافحة البريد المزعج`}
const smsAntiSp2 = () => { return `حظر استخدام الأوامر عندما يقوم شخص ما بتنفيذ نوع من البريد العشوائي`}
const smsModP1 = () => { return `🌐 الوضع العام`}
const smsModP2 = () => { return `تمكين الوظيفة حتى يتمكن الجميع من استخدام JoanBot`}
const smsModAd1 = () => { return `🛂 وضع المشرف`}
const smsModAd2 = () => { return `سيتمكن المسؤولون فقط من استخدام JoanBot في المجموعات`}
const smsLect1 = () => { return `✅ القراءة التلقائية`}
const smsLect2 = () => { return `اترك الرسائل أو الدردشات كـ "مقروءة"`}
const smsTempo1 = () => { return `🐈 بوت مؤقت`}
const smsTempo2 = () => { return `وظيفة تسمح بالبقاء المؤقت في المجموعات`}
const smsStik1 = () => { return `🎠 ملصقات`}
const smsStik2 = () => { return `تفعيل الإرسال التلقائي للملصقات للجميع`}
const smsStickA1 = () => { return `🪄 ملصقات تلقائية`}
const smsStickA2 = () => { return `مقاطع فيديو أو صور متحركة أو صور أو روابط jpg أو jpeg ؛ سيتم تحويلها إلى ملصقات تلقائيًا`}
const smsReacc1 = () => { return `🤡 تفاعل `}
const smsReacc2 = () => { return `تمكين الإرسال التلقائي للردود على الرسائل`}
const smsAudi1 = () => { return `🔊 صوتي`}
const smsAudi2 = () => { return `تمكين الإرسال التلقائي للتسجيلات الصوتية للجميع`}
const smsModHor1 = () => { return `🔞 الوضع الساخن`}
const smsModHor2 = () => { return `عرض محتوى للبالغين في الدردشات`}
const smsAntitoc1 = () => { return `☢️ مضاد للسموم`}
const smsAntitoc2 = () => { return `إرسال تحذيرات لأولئك الذين يهينون`}
const smsModOb1 = () => { return `👀 وضع المراقبة`}
const smsModOb2 = () => { return `اجعل الصور والصور المتحركة ومقاطع الفيديو قابلة للعرض للجميع`}
const smsAntiEli1 = () => { return `🗑️ منع الحذف`}
const smsAntiEli2 = () => { return `ستتم إعادة توجيه جميع الرسائل المحذوفة إلى الدردشة أو المجموعة`}
const smsAntiInt1 = () => { return `🌏 مضاد دولي`}
const smsAntiInt2 = () => { return `حذف الأرقام الدولية التي تعتبر وهمية`}
const smsAntiE1 = () => { return `🔗 الروابط المضادة`}
const smsAntiE2 = () => { return `احذف الأشخاص الذين يرسلون روابط من مجموعات WhatsApp`}
const smsAntiEE1 = () => { return `🔗 الروابط المضادة 2`}
const smsAntiEE2 = () => { return `قم بإزالة الأشخاص الذين يرسلون روابط تحتوي على https`}
const smsAntiTT1 = () => { return `🔗 أنتي تيك توك`}
const smsAntiTT2 = () => { return `إزالة الأشخاص الذين يرسلون روابط TikTok`}
const smsAntiYT1 = () => { return `🔗 يوتيوب ممنوع`}
const smsAntiYT2 = () => { return `إزالة الأشخاص الذين يرسلون روابط YouTube`}
const smsAntiTEL1 = () => { return `🔗 أنتي تليغرام`}
const smsAntiTEL2 = () => { return `إزالة الأشخاص الذين يرسلون روابط Telegram`}
const smsAntiFB1 = () => { return `🔗 الفيسبوك محظور`}
const smsAntiFB2 = () => { return `قم بإزالة الأشخاص الذين يرسلون روابط Facebook`}
const smsAntiIG1 = () => { return `🔗 مضاد إنستغرام`}
const smsAntiIG2 = () => { return `قم بإزالة الأشخاص الذين يرسلون روابط Instagram`}
const smsAntiTW1 = () => { return `🔗 مضاد للتويتر `}
const smsAntiTW2 = () => { return `إزالة الأشخاص الذين يرسلون روابط Twitter`}
const smsSOLOP1 = () => { return `⚜️ خاص فقط`}
const smsSOLOP2 = () => { return `السماح باستخدامه فقط في الدردشات الخاصة`}
const smsSOLOG1 = () => { return `⚜️ المجموعات فقط`}
const smsSOLOG2 = () => { return `السماح باستخدامه فقط في الدردشات الجماعية`}
const smsConfi1 = () => { return `الإعدادات`}
const smsConfi2 = () => { return `*مرحبا!*`}
const smsConfi3 = () => { return `┃ *حدد خيارًا من القائمة*`}
const smsConfi4 = () => { return `┃ *للبدء في التكوين*`}
const smsConfi5 = () => { return `┃● *إشعارات التكوين:*`}
const smsConfi6 = () => { return `┃ ✅ ⇢ *تم تفعيل الوظيفة*`}
const smsConfi7 = () => { return `┃ ❌ ⇢ *وظيفة معطلة*`}
cons
