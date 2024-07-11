const lenguaje = () => { return 'fr' } //Français  

//ALERTES MESSAGES
const smsAvisoRG = () => { return `╰⊱✅⊱ *RÉSULTAT* ⊱✅⊱╮\n\n` }
const smsAvisoAG = () => { return `╰⊱⚠️⊱ *AVERTISSEMENT* ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => { return `╰⊱❕⊱ *INFORMATION* ⊱❕⊱╮\n\n` }
const smsAvisoFG = () => { return `╰⊱❌⊱ *ERREUR* ⊱❌⊱╮\n\n` }
const smsAvisoMG = () => { return `╰⊱❗️⊱ *ACTION MAUVAISE* ⊱❗️⊱╮\n\n` }
const smsAvisoEEG = () => { return `╰⊱📩⊱ *RAPPORT* ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => { return `╰⊱💚⊱ *SUCCÈS* ⊱💚⊱╮\n\n` }

//PARAMETRES DANS LES COMMANDES
const smsRowner = () => { return `\`\`\`¡¡CETTE COMMANDE NE PEUT ÊTRE UTILISÉE QUE PAR MOI EN TANT QUE CRÉATEUR DE BOT!!\`\`\`` }//NUMÉRO DE BOT
const smsOwner = () => { return `\`\`\`¡¡CETTE COMMANDE SEUL MON CRÉATEUR PEUT L\UTILISER!!\`\`\`` }//OWNER
const smsMods = () => { return `\`\`\`¡¡CETTE COMMANDE SEULS LES MODÉRATEURS ET MON CRÉATEUR PEUVENT L'UTILISER!!\`\`\`\`` }//MODÉRATEURS
const smsPremium = () => { return `\`\`\`¡¡CETTE COMMANDE EST UNIQUEMENT DISPONIBLE POUR LES UTILISATEURS PREMIUM ET MON CRÉATEUR(A) !! POUR OBTENIR PREMIUM ACHETEZ UN PASS EN UTILISANT #pass premium\`\`\`` }//UTILISATEURS PREMIUM
const smsGroup = () => { return `\`\`\`¡¡CETTE COMMANDE NE PEUT ÊTRE UTILISÉE QUE DANS LES GROUPES!!\`\`\`` }//PARA GRUPOS
const smsPrivate = () => { return `\`\`\`¡¡CETTE COMMANDE NE PEUT ÊTRE UTILISÉE QUE PAR LE PRIVÉ!!\`\`\`` }//AL PRIVADO
const smsAdmin = () => { return `\`\`\`¡¡ESTE COMANDO SÓLO ES PARA ADMINS!!\`\`\`` }//ADMINS
const smsBotAdmin = () => { return `\`\`\`¡¡J\'AI BESOIN D\'ÊTRE ADMIN POUR QUE VOUS POUVEZ UTILISER CETTE COMMANDE!!\`\`\`` }//BOT CON ADMIN
const smsUnreg = () => { return `\`\`\`¡¡VOUS DEVEZ ÊTRE ENREGISTRÉ POUR UTILISER CETTE COMMANDE, ÉCRIVEZ #verify POUR VOUS INSCRIRE!!\`\`\`` }//VÉRIFIER
const smsRestrict = () => { return `\`\`\`¡¡CETTE COMMANDE EST RESTREINTE PAR MON CRÉATEUR!!\`\`\`` }//COMMANDE RESTREINTE

//MENU LISTA
const smsTime = () => { return `Heure actuelle`}
const smsUptime = () => { return `Courir pendant`}
const smsVersion = () => { return `Version de ${global.packname}`}
const smsTotalUsers = () => { return `Nombre total d'utilisateurs`}
const smsMode = () => { return `Il est en mode`}
const smsModePublic = () => { return `PUBLIQUE`}
const smsModePrivate = () => { return `PRIVÉ`}
const smsBanChats = () => { return `Chat(x) interdit(s)`}
const smsBanUsers = () => { return `Utilisateur(s) banni(s)`}
const smsPareja = () => { return `Couple`}
const smsResultPareja = () => { return `N'a pas de partenaire`}
const smsSaludo = () => { return `👋 !SALUT! BIENVENUE À) 👋`}
const smsDia = () => { return `🌇 Bonjour ⛅`}
const smsTarde = () => { return `🏙️ Bonsoir 🌤️`}
const smsTarde2 = () => { return `🌆 Bonsoir 🌥️`}
const smsNoche = () => { return `🌃 Bonne nuit 💫`}
const smsListaMenu = () => { return `⊹ LISTE DES MENUS ⊹`}
const smsLista1 = () => { return `🌟 INFORMATIONS JOANBOT 🌟`}
const smsLista2 = () => { return `💖 CRÉATEUR 💖`}
const smsLista3 = () => { return `🎁 DONNER 🎁`}
const smsLista4 = () => { return `🚀 VITESSE 🚀`}
const smsLista5 = () => { return `💡 INFORMATIONS SUR LES MENUS 💡`}
const smsLista6 = () => { return `🌀 MENU ENTIER 🌀`}
const smsLista7 = () => { return `🐈 INSTALLER JOANBOT 🥷`}
const smsLista8 = () => { return `🍄 SOYEZ UN SOUS-BOT 🍄`}
const smsLista9 = () => { return `📄 TERMES, CONDITIONS ET CONFIDENTIALITÉ 📄`}
const smsLista10 = () => { return `🌟 AVENTURE 🌟`}
const smsLista11 = () => { return `🏆 TOP MONDIAL 🏆`}
const smsLista12 = () => { return `🏅 UTILISATEURS PREMIUM 🏅`}
const smsLista13 = () => { return `🎟️ ÊTRE UN UTILISATEUR PREMIUM 🎟️`}
const smsLista14 = () => { return `🛣️ MISSIONS QUOTIDIENNES 🛣️`}
const smsLista15 = () => { return `⚗️ MENU RPG ⚗️`}
const smsLista16 = () => { return `🏪 MAGASIN D'ACHAT ET DE VENTE 🏪`}
const smsLista17 = () => { return `🎒 INVENTAIRE 🎒`}
const smsLista18 = () => { return `🌟 MULTIMÉDIA 🌟`}
const smsLista19 = () => { return `📲 MENU TÉLÉCHARGEMENTS 📲`}
const smsLista20 = () => { return `🔍 MENU DE RECHERCHE 🔍`}
const smsLista21 = () => { return `🛰️ MENU DU CONVERTISSEUR 🛰️`}
const smsLista22 = () => { return `🧰 MENU MODIFICATEUR AUDIO 🧰`}
const smsLista22_1 = () => { return `🔩 MENU OUTILS 🔩`}
const smsLista23 = () => { return `🌟 AMUSANT 🌟`}
const smsLista24 = () => { return `🎡 JEUX DYNAMIQUES 🎡`}
const smsLista25 = () => { return `🔊 MENU AUDIO 🔊`}
const smsLista26 = () => { return `🎈 MENU AUTOCOLLANTS ET FILTRES 🎈`}
const smsLista27 = () => { return `✨ MENU EFFETS ET LOGOS ✨`}
const smsLista28 = () => { return `🌅 LOGOSMENU 2 🌅`}
const smsLista29 = () => { return `⛩️ MEMES ALÉATOIRES : ANIME ⛩️`}
const smsLista30 = () => { return `🔞 MENU COMMANDE +18 🔞`}
const smsLista31 = () => { return `🌟 PARAMÈTRES 🌟`}
const smsLista32 = () => { return `🔰 MENU POUR LES GROUPES 🔰`}
const smsLista33 = () => { return `📑 LISTES DISPONIBLES 📑`}
const smsLista34 = () => { return `⚙️ CENTRE DE CONFIGURATION ⚙️`}
const smsLista35 = () => { return `💎 MENU DU PROPRIÉTAIRE 💎`}

//main.js
const smsWelcome = () => { return `*╭┈⊰* @subject *⊰┈ ✦*\n*┊✨ BIENVENUE À)!!*\n┊💖 @user\n┊📄 *LIRE LA DESCRIPTION DU GROUPE*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦*\n${String.fromCharCode(8206).repeat(850)}\n@desc`}
const smsBye = () => { return '*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ @user\n┊ *LE GROUPE NE SAIT PAS, BYE!!* 😎\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*'}
const smsSpromote = () => { return '*@user 𝙄𝙇 𝙀𝙎𝙏 𝙈𝘼𝙄𝙉𝙏𝙀𝙉𝘼𝙉𝙏 𝘼𝘿𝙈𝙄𝙉 𝘿𝘼𝙉𝙎 𝘾𝙀 𝙂𝙍𝙊𝙐𝙋𝙀!!*'}
const smsSdemote = () => { return '*@user 𝘼𝙍𝙍𝙀̂𝙏𝙀𝙕 𝘿\𝙀̂𝙏𝙍𝙀 𝘼𝘿𝙈𝙄𝙉𝙄𝙎𝙏𝙍𝘼𝙏𝙀𝙐𝙍 𝘿𝘼𝙉𝙎 𝘾𝙀 𝙂𝙍𝙊𝙐𝙋𝙀!!*'}
const smsSdesc = () => { return '*𝙇𝘼 𝙉𝙊𝙐𝙑𝙀𝙇𝙇𝙀 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉 𝘿𝙐 𝙂𝙍𝙊𝙐𝙋𝙀 𝙀𝙎𝙏:*\n\n@desc'}
const smsSsubject = () => { return '*𝙇𝙀 𝙉𝙊𝙐𝙑𝙀𝘼𝙐 𝙉𝙊𝙈 𝘿𝙐 𝙂𝙍𝙊𝙐𝙋𝙀 𝙀𝙎𝙏:*\n\n@subject'}
const smsSicon = () => { return '*𝙇𝘼 𝙋𝙃𝙊𝙏𝙊 𝘿𝙀 𝙂𝙍𝙊𝙐𝙋𝙀 𝘼 𝙀́𝙏𝙀́ 𝙈𝙊𝘿𝙄𝙁𝙄𝙀́𝙀!!*'}
const smsSrevoke = () => { return '*𝙈𝘼𝙄𝙉𝙏𝙀𝙉𝘼𝙉𝙏 𝘾\'𝙀𝙎𝙏 𝙇𝙀 𝙉𝙊𝙐𝙑𝙀𝘼𝙐 𝙇𝙄𝙀𝙉 𝘿𝙀 𝙂𝙍𝙊𝙐𝙋𝙀!!*\n\n*@revoke*'}
const smsConexion = () => { return `\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦🟢 𝘾𝙊𝙉𝙉𝙀𝙓𝙄𝙊𝙉 ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠\n│\n│★ 𝘾𝙊𝙉𝙉𝙀𝙓𝙄𝙊𝙉 𝙍𝙀́𝙐𝙎𝙎𝙄𝙀 𝘼𝙑𝙀𝘾 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋  😺\n│\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ ✅ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠`} 
const smsCargando = () => { return `✨ MISE EN CHARGE...\n`} 
const smsCodigoQR = () => { return `\n✅ SCANNEZ LE CODE QR EXPIRE DANS 45 SECONDES ✅`}
const smsConexionOFF = () => { return `\n⚠️ AUCUNE CONNEXION, SUPPRIMER LE DOSSIER ${global.authFile} ET SCANNEZ LE QR CODE ⚠️`}
const smsClearTmp = () => { return `\n╭» 🟢 MULTIMÉDIA 🟢\n│☁ FICHIERS DU DOSSIER TMP SUPPRIMÉS\n╰―――――――――――――――――――✤`} 
const smspurgeSession = () => { return `\n╭» 🔵 ${global.authFile} 🔵\n│☁ SÉANCES NON ESSENTIELLES SUPPRIMÉES\n╰―――――――――――――――――――✤`} 
const smspurgeOldFiles = () => { return `\n╭» 🟠 ARCHIVOS 🟠\n│☁ FICHIERS RÉSIDUELS SUPPRIMÉS\n╰―――――――――――――――――――✤`} 
const smspurgeSessionSB1 = () => { return `\n╭» 🟡 JoanJadiBot 🟡\n│☁ RIEN A SUPPRIMER \n╰―――――――――――――――――――✤`} 
const smspurgeSessionSB2 = () => { return `\n╭» ⚪ JoanJadiBot ⚪\n│☁ FICHIERS NON ESSENTIELS SUPPRIMÉS\n╰―――――――――――――――――――✤`} 
const smspurgeSessionSB3 = () => { return `\n╭» 🔴 JoanJadiBot 🔴\n│☁ UNE ERREUR S'EST PRODUITE\n╰―――――――――――――――――――✤\n`} 
const smspurgeOldFiles1 = () => { return `\n╭» 🟣 ARCHIVE 🟣\n│☁`} 
const smspurgeOldFiles2 = () => { return `SUPPRIMER AVEC SUCCÈS\n╰―――――――――――――――――――✤`} 
const smspurgeOldFiles3 = () => { return `\n╭» 🔴 ARCHIVE 🔴\n│☁`} 
const smspurgeOldFiles4 = () => { return `ÉCHEC DE LA SUPPRESSION\n╰―――――――――――――――――――✤\n`}

//_allantilink.js
const smsTextoYT = () => { return '🥷 𝗦𝘂𝗽𝗲𝗿 𝗝𝗼𝗮𝗻𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 '} 
const smsApagar = () => { return '❌ DÉSACTIVER'} 
const smsEncender = () => { return '✅ ACTIVER'} 
const smsEnlaceTik = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceYt = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙔𝙊𝙐 𝙏𝙐𝘽𝙀 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceTel = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙏𝙀𝙇𝙀𝙂𝙍𝘼𝙈 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceFb = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceIg = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceTw = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙏𝙒𝙄𝙏𝙏𝙀𝙍 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsAllAdmin = () => { return `𝘿𝙀𝘽𝙊 𝘿𝙀 𝙎𝙀𝙍 𝘼𝘿𝙈𝙄𝙉 𝙋𝘼𝙍𝘼 𝙋𝙊𝘿𝙀𝙍 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝘼 𝙄𝙉𝙏𝙍𝙐𝙎𝙊𝙎(𝘼𝙎)`}
const smsSoloOwner = () => { return `𝙀𝙇/𝙇𝘼 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊(𝘼) 𝘿𝙀𝘽𝙀 𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝙀𝙎𝙏𝘼 𝙁𝙐𝙉𝘾𝙄𝙊𝙉\n*#on restrict*`}

//handler.js
const smsCont1 = () => { return `*🔴 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗙𝗔𝗟𝗟𝗔𝗡𝗗𝗢 🔴*`}
const smsCont2 = () => { return `*⚠️ 𝗣𝗟𝗨𝗚𝗜𝗡:*`}
const smsCont3 = () => { return `*⚠️ 𝗨𝗦𝗨𝗔𝗥𝗜𝗢:*`}
const smsCont4 = () => { return `*⚠️ 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:*`}
const smsCont5 = () => { return `*⚠️ 𝗘𝗥𝗥𝗢𝗥:*`}
const smsCont6 = () => { return `*❗ 𝗥𝗘𝗣𝗢𝗥𝗧𝗘 𝗘𝗦𝗧𝗘 𝗠𝗘𝗡𝗦𝗔𝗝𝗘 𝗨𝗦𝗔𝗡𝗗𝗢 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 #reporte 𝗣𝗔𝗥𝗔 𝗦𝗢𝗟𝗨𝗖𝗜𝗢𝗡𝗔𝗥𝗟𝗢*`}
const smsCont7 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*NO TIENE DIAMANTES!! 💎 PUEDE IR A LA TIENDA CON EL COMANDO*`}
const smsCont8 = () => { return ` *DIAMASTE(S) 💎 USADO(S)*`}
const smsCont9 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*NECESITA EL NIVEL ➡️*`}
const smsCont10 = () => { return `*PARA USAR ESTE COMANDO. TÚ NIVEL ACTUAL ES ➡️*`}
const smsCont11 = () => { return `*ACTUALIZA CON EL COMANDO*`}
const smsCont12 = () => { return `UN GRUPO GENIAL!! 😼`}
const smsCont13 = () => { return `ALGUIEN SE UNIÓ !! 🥳`}
const smsCont14 = () => { return `ALGUIEN SE FUE!! 🧐`}
const smsCont15 = () => { return `𝙃𝙊𝙇𝘼`}
const smsCont16 = () => { return `𝙇𝘼𝙎 𝙑𝙄𝘿𝙀𝙊𝙇𝙇𝘼𝙈𝘼𝘿𝘼𝙎 📲`}
const smsCont17 = () => { return `𝙇𝘼𝙎 𝙇𝙇𝘼𝙈𝘼𝘿𝘼𝙎 📞`}
const smsCont18 = () => { return `𝙉𝙊 𝙀𝙎𝙏𝘼𝙉 𝘼𝙐𝙏𝙊𝙍𝙄𝙕𝘼𝘿𝘼𝙎 𝙋𝙊𝙍 𝙇𝙊 𝙌𝙐𝙀 𝙏𝙀𝙉𝘿𝙍𝙀 𝙌𝙐𝙀 𝘽𝙇𝙊𝙌𝙐𝙀𝘼𝙍𝙏𝙀\n\n𝙎𝙄 𝙇𝙇𝘼𝙈𝘼𝙎𝙏𝙀 𝙋𝙊𝙍 𝘼𝘾𝘾𝙄𝘿𝙀𝙉𝙏𝙀 𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝙏𝙀 𝘾𝙊𝙉 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊/𝘼 𝘿𝙀 𝙀𝙎𝙏𝙀 𝘽𝙊𝙏\n𝙎𝙄 𝙀𝙎 𝙐𝙉𝘼 𝘾𝙐𝙀𝙉𝙏𝘼 𝙊𝙁𝙄𝘾𝙄𝘼𝙇 𝘿𝙀 𝙅𝙊𝘼𝙉�𝘽𝙊𝙏 𝘿𝙄𝙍𝙄𝙂𝙀𝙏𝙀 𝘼 𝙇𝘼 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼 𝙋𝙊𝙍 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙋𝘼𝙍𝘼 𝙏𝙍𝘼𝙏𝘼𝙍 𝙎𝙐 𝘾𝘼𝙎𝙊\n*${global.ig}*`}
const smsCont19 = () => { return `𝘼𝙉𝙏𝙄 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍`}
const smsCont20 = () => { return `*┃✤ Nombre:*`}
const smsCont21 = () => { return `*┃✤ Enviando el mensaje eliminado...*`}

//_anti-internacional.js
const smsInt1 = () => { return `𝙀𝙎𝙏𝙀 𝙉𝙐𝙈𝙀𝙍𝙊`}
const smsInt2 = () => { return `𝙉𝙊 𝙀𝙎𝙏𝘼 𝙋𝙀𝙍𝙈𝙄𝙏𝙄𝘿𝙊 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊!!`}

//_antilink.js
const smsAdwa = () => { return `${global.lenguajeGB['smsAvisoEG']()}𝘾𝙊𝙈𝙊 𝙀𝙍𝙀𝙎 𝘼𝘿𝙈𝙄𝙉 𝙀𝙉 𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙉𝙊 𝙎𝙀𝙍𝘼𝙎 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊(𝘼)`}
const smsEnlaceWat = () => { return `${lenguajeGB['smsAvisoAG']()}𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}

//_antilink2.js
const smsEnlaceWatt = () => { return `${lenguajeGB['smsAvisoAG']()}𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝙌𝙐𝙀 𝘾𝙊𝙉𝙏𝙄𝙀𝙉𝙀 𝙃𝙏𝙏𝙋𝙎 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}

//_antispam.js
const smsNoSpam = () => { return `🤨 NO HAGAS SPAM, NO PODRÁ USAR A ${global.packname} POR ${60000 / 1000 - 59} MINUTO`}

//_antispam_.js
const smsNoSpam2 = () => { return `FUE DESBANEADO DESPUÉS DE ${60000 / 1000 - 59} MINUTO. POR FAVOR NO HAGA SPAM!!`}

//Texto
const smsConMenu = () => { return `☘️ 𝗠 𝗘 𝗡 𝗨`} //🟡 NO CAMBIAR 

//Error
const smsMalError = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`OCURRIÓ UN ERROR INESPERADO.\`\`\``}
const smsMalError2 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`SURGIÓ UN INCONVENIENTE. INTENTE DE NUEVO.\`\`\``}
const smsMalError3 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ALGO SALIÓ MAL, REPORTE ESTE COMANDO USANDO:\`\`\`\n`}

//_antitoxic.js
const smsToxic1 = () => { return `𝙉𝙊𝙊!!! 🤬 𝘿𝙀𝘾𝙄𝙍 𝙀𝙎𝙏𝘼 𝙋𝘼𝙇𝘼𝘽𝙍𝘼`}
const smsToxic2 = () => { return `𝙀𝙎𝙏𝘼 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝘼 𝙉𝙊 𝙎𝙀𝘼𝙎 𝙏𝙊𝙓𝙄𝘾𝙊(𝘼)`}
const smsToxic3 = () => { return `*ADVERTENCIA*\n⚠️`}
const smsToxic4 = () => { return `😭 𝙇𝙊 𝙎𝙄𝙀𝙉𝙏𝙊`} //🟡 NO CAMBIAR 
const smsToxic5 = () => { return `☢️ 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝘼𝙉𝙏𝙄𝙏𝙊𝙓𝙄𝘾`} //🟡 NO CAMBIAR 
const smsToxic6 = () => { return `𝙏𝙀 𝙇𝙊 𝘼𝘿𝙑𝙀𝙍𝙏𝙄𝘿 𝙑𝘼𝙍𝙄𝘼𝙎 𝙑𝙀𝘾𝙀𝙎!!`}
const smsToxic7 = () => { return `𝙎𝙐𝙋𝙀𝙍𝘼𝙎𝙏𝙀 𝙇𝘼𝙎 4 𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼𝙎 𝘼𝙃𝙊𝙍𝘼 𝙎𝙀𝙍𝘼𝙎 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊(𝘼) 🙄`}

//Tienda
const eExp = () => { return '⚡ Experiencia' } 
const eDiamante = () => { return '💎 Diamante' } 
const eDiamantePlus = () => { return '💎+ Diamante+' }
const eToken = () => { return '🪙 Token' } 
const eEsmeralda = () => { return '💚 Esmeralda' } 
const eJoya = () => { return '♦️ Joya' }
const eMagia = () => { return '🌀 Magia' } 
const eOro = () => { return '👑 Oro' } 
const eJoanCoins = () => { return '🥷 JoanCoins' }
const eJoanTickers = () => { return '🎫 Joan Tickers' } 
const eEnergia = () => { return '✨ Energía' }
const ePocion = () => { return '🥤 Poción' }
const eAgua = () => { return '💧 Agua' }
const eBasura = () => { return '🗑 Basura' }
const eMadera = () => { return '🪵 Madera' }
const eRoca = () => { return '🪨 Roca' }
const ePiedra = () => { return '🥌 Piedra' }
const eCuerda = () => { return '🕸️ Cuerda' }
const eHierro = () => { return '⛓️ Hierro' }
const eCarbon = () => { return '⚱️ Carbón' }
const eBotella = () => { return '🍶 Botella' }
const eLata = () => { return '🥫 Lata' }
const eCarton = () => { return '🪧 Cartón' } 
const eEletric = () => { return '💡 Electricidad' }
const eBarraOro = () => { return '〽️ Barra de Oro' }
const eOroComun = () => { return '🧭 Oro Común' }
const eZorroG = () => { return '🦊🌫️ Zorro Grande' }
const eBasuraG = () => { return '🗑🌫️ Super Basura' }
const eLoboG = () => { return '🐺🌫️ Super Lobo' }
const eMaderaG = () => { return '🛷🌫️ Super Madera' }
const eEspada = () => { return '⚔️ Espada' }
const eCarnada = () => { return '🪱 Carnada' }
const eBillete = () => { return '💵 Billetes' }
const ePinata = () => { return '🪅 Piñata' }
const eGancho = () => { return '🪝 Gancho' }
const eCanaPescar = () => { return '🎣 Caña de Pescar' } 
const eCComun = () => { return '📦 Caja Común' }
const ePComun = () => { return '🥡 Caja Poco Común' }
const eCMistica = () => { return '🗳️ Caja Mítica' }
const eCMascota = () => { return '📫 Caja de Mascotas' }
const eCJardineria = () => { return '💐 Caja de Jardinería' }
const eClegendaria = () => { return '🎁 Caja Legendaria' } 
const eUva = () => { return '🍇 Uva' }
const eManzana = () => { return '🍎 Manzana' }
const eNaranja = () => { return '🍊 Naranja' }
const eMango = () => { return '🥭 Mango' }
const ePlatano = () => { return '🍌 Platano' } 
const eSUva = () => { return '🌾🍇 Semillas de uva' }
const eSManzana = () => { return '🌾🍎 Semillas de manzana' }
const eSNaranja = () => { return '🌾🍊 Semillas de naranja' }
const eSMango = () => { return '🌾🥭 Semillas de Mango' }
const eSPlatano = () => { return '🌾🍌 Semillas de plátano' } 
const eCentauro = () => { return '🐐 Centauro' }
const eAve = () => { return '🦅 Ave' }
const eGato = () => { return '🐈 Gato' }
const eDragon = () => { return '🐉 Dragón' }
const eZorro = () => { return '🦊 Zorro' }
const eCaballo = () => { return '🐎 Caballo' }
const eFenix = () => { return '🕊️ Fénix' }
const eLobo = () => { return '🐺 Lobo' }
const ePerro = () => { return '🐶 Perro' } 
const eAMascots = () => { return '🍖 Alimento para Mascota' }
const eCCentauro = () => { return '🐐🥩 Comida de Centauro' }
const eCAve = () => { return '🦅🥩 Comida de Ave' }
const eCMagica = () => { return '🌀🥩 Comida Mágica' }
const eCDragon = () => { return '🐉🥩 Comida de Dragón' }
const eACaballo = () => { return '🐎🥩 Alimentos Para Caballo' }
const eCFenix = () => { return '🕊️🥩 Comida de Fénix' } 
//config-on y off.js
const smsWel1 = () => { return `🎉 BIENVENIDA`}
const smsWel2 = () => { return `Mensaje de Bienvenida para nuevos Miembros en Grupos`}
const smsDete1 = () => { return `🔔 AVISOS`}
const smsDete2 = () => { return `Avisos de acciones dentro del Grupo`}
const smsANivel1 = () => { return `🆙 NIVEL AUTOMÁTICO`}
const smsANivel2 = () => { return `Sube de nivel a todos de manera automática; (Aplica recompensas por subir de Nivel)`}
const smsRestri1 = () => { return `⛔ RESTRINGIR`}
const smsRestri2 = () => { return `Habilitar función para agregar o eliminar personas en Grupos`}
const smsLlamar1 = () => { return `🚫 ANTI LLAMADAS`}
const smsLlamar2 = () => { return `Bloquea a Personas que hagan llamadas`}
const smsAntiSp1 = () => { return `🚯 ANTI SPAM`}
const smsAntiSp2 = () => { return `Banear el Uso de Comados cuando alguien realice algún tipo de Spam`}
const smsModP1 = () => { return `🌐 MODO PÚBLICO`}
const smsModP2 = () => { return `Habilitar función para que todos puedan usar JoanBot`}
const smsModAd1 = () => { return `🛂 MODO ADMIN`}
const smsModAd2 = () => { return `Solo los Admins podrán usar JoanBot en Grupos`}
const smsLect1 = () => { return `✅ LECTURA AUTOMÁTICA`}
const smsLect2 = () => { return `Dejar los mensajes o chats como Leídos`}
const smsTempo1 = () => { return `🐈 BOT TEMPORAL`}
const smsTempo2 = () => { return `Función que permite estadía temporalmente en Grupos`}
const smsStik1 = () => { return `🎠 STICKERS`}
const smsStik2 = () => { return `Habilitar el envio automático de Stickers a todos`}
const smsStickA1 = () => { return `🪄 STICKERS AUTOMÁTICOS`}
const smsStickA2 = () => { return `Los vídeos, Gif, imágenes, enlaces jpg o jpeg; Se convertirán en Stickers Automáticamente`}
const smsReacc1 = () => { return `🤡 REACCIÓN `}
const smsReacc2 = () => { return `Habilitar el envio automático de Reacciones a mensajes`}
const smsAudi1 = () => { return `🔊 AUDIOS`}
const smsAudi2 = () => { return `Habilitar el envio automático de Audios a todos`}
const smsModHor1 = () => { return `🔞 MODO HORNY`}
const smsModHor2 = () => { return `Mostrar contenido para Adulto en los Chats`}
const smsAntitoc1 = () => { return `☢️ ANTI TÓXICOS`}
const smsAntitoc2 = () => { return `Enviar Advertencias aquellas personas que insulten`}
const smsModOb1 = () => { return `👀 MODO OBSERVAR`}
const smsModOb2 = () => { return `Permitir que las imágenes, Gif y Vídeos se puedan ver para todos`}
const smsAntiEli1 = () => { return `🗑️ ANTI ELIMINAR`}
const smsAntiEli2 = () => { return `Todo mensaje eliminado será reenviado al Chat o Grupo`}
const smsAntiInt1 = () => { return `🌏 ANTI INTERNACIONAL`}
const smsAntiInt2 = () => { return `Eliminar Números internacionales considerados falsos`}
const smsAntiE1 = () => { return `🔗 ANTI ENLACES`}
const smsAntiE2 = () => { return `Eliminar Personas que envíen enlaces de Grupos de WhatsApp`}
const smsAntiEE1 = () => { return `🔗 ANTI ENLACES 2`}
const smsAntiEE2 = () => { return `Eliminar Personas que envíen enlaces que contengan https`}
const smsAntiTT1 = () => { return `🔗 ANTI TIKTOK`}
const smsAntiTT2 = () => { return `Eliminar Personas que envíen enlaces de TikTok`}
const smsAntiYT1 = () => { return `🔗 ANTI YOUTUBE`}
const smsAn
