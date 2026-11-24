# Vrecúško hradných záhad – webová stránka

Jednostránková stránka ku kartovej hre o slovenských hradoch.
Nepotrebuje žiadny server ani databázu: stačí otvoriť `index.html` v prehliadači.

## Čo je v priečinku

| Súbor / priečinok | Čo obsahuje |
|---|---|
| `index.html` | samotná stránka (texty sekcií, vzhľad, hra) |
| `data.js` | **texty všetkých 20 hradov** – indície, legendy, doplňovačky, obrázky, poloha na mape |
| `mapa-slovenska.js` | obrys Slovenska pre mapu (netreba meniť) |
| `obrazky/hrady/` | omaľovánky hradov |
| `obrazky/` (ostatné) | logo, postavy Teo a Zara, nálepky, strany komiksu |
| `fonty/` | písma Bangers a Jost (voľná licencia OFL) |

## Ako upraviť text hradu

1. Otvor `data.js` v akomkoľvek textovom editore (Poznámkový blok, VS Code) alebo priamo na GitHube (ikona ceruzky).
2. Nájdi hrad a zmeň text **medzi úvodzovkami** `"..."`.
3. Ulož. Na GitHube klikni na **Commit changes** – stránka sa aktualizuje približne do minúty.

Pozor: úvodzovky, čiarky a zátvorky okolo textu nechaj tak, ako sú.

## Ako pridať chýbajúcu omaľovánku

Zatiaľ chýbajú obrázky hradov č. 5, 13, 16, 17, 18, 19 a 20.

1. Ulož obrázok ako JPG do priečinka `obrazky/hrady/`, napr. `05-hrad-devin.jpg` (bez diakritiky a medzier).
2. V `data.js` pri danom hrade zmeň `obrazok: null` na `obrazok: "obrazky/hrady/05-hrad-devin.jpg"`.

## Ako zmeniť ostatné texty stránky

Texty sekcií (O hre, Ako sa hrá, Čo nájdeš vo vrecúšku, pätička) sú priamo v `index.html`.
Hľadaj ich podľa nadpisu (Ctrl+F) a meň iba text medzi značkami, napr. `<p>tento text</p>`.

## Zverejnenie zadarmo cez GitHub Pages

1. Na github.com vytvor organizáciu (Your organizations → New organization → plán **Free**),
   napr. `vrecusko-hradnych-zahad`.
2. V organizácii vytvor nový verejný repozitár s názvom presne `vrecusko-hradnych-zahad.github.io`.
3. Klikni na **uploading an existing file** a pretiahni doň **obsah** tohto priečinka (nie priečinok samotný). Potvrď **Commit changes**.
4. V repozitári: **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**.
5. Po 1–2 minútach je stránka na adrese `https://vrecusko-hradnych-zahad.github.io`.

## Odovzdanie správy stránky inému človeku

V organizácii: **People → Invite member** a nastav mu rolu **Owner**.
Adresa stránky zostáva rovnaká, lebo patrí organizácii, nie konkrétnemu človeku.

## Poznámka k zbierke nálepiek

Získané nálepky na mape sa ukladajú iba v prehliadači návštevníka (nikam sa neodosielajú).
Tlačidlo „Začať zbierať odznova“ ich vymaže – hodí sa pred prezentáciou.
