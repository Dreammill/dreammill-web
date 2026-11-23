# dreammill.fi

Dreammill Productionsin kotisivu. Rakennettu [Astrolla](https://astro.build), julkaistaan Cloudflare Pagesissa.

## Uuden projektin lisääminen

Jokainen elokuva tai sarja on yksi tiedosto kansiossa `src/content/projects/`. Kopioi olemassa oleva tiedosto, vaihda nimi ja täytä kentät:

| Kenttä | Mitä siihen tulee |
|---|---|
| `title`, `subtitle` | Nimi ja alaotsikko |
| `year`, `status` | Vuosi; `released`, `upcoming`, `in-production` tai `in-development` |
| `category` | `feature`, `tv`, `documentary`, `short`, `commercial`, `trailer`, `animation`, `music` |
| `logline`, `description` | Lyhyt ja pidempi kuvaus, `fi` ja `en` |
| `credits`, `partners` | Tekijät ja yhteistyökumppanit |
| `poster`, `still` | Kuvat kansiosta `public/media/<projekti>/` |
| `trailer` | YouTube-videon id (osoitteen `watch?v=` jälkeinen osa) |
| `loop` | Lyhyt äänetön videolooppi (.mp4, alle 8 Mt) etusivun taustaksi |
| `featured`, `order` | `featured: true` nostaa etusivun pääosaan; `order` määrää järjestyksen |

Käytännössä riittää, että kerrot Claudelle projektin tiedot ja annat kuvat, niin Claude tekee tiedoston ja avaa muutoksesta pull requestin.

## Kehitys

```sh
npm install
npm run dev     # http://localhost:4321
npm run build   # tulos kansioon dist/
```

## Julkaisu (Cloudflare Pages)

Build command `npm run build`, output `dist`, Node 22. Jokainen haara saa oman esikatseluosoitteen; `main` on tuotanto.
