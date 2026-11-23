export type Lang = 'fi' | 'en';

export const t = {
  fi: {
    tagline: 'Elokuvia, sarjoja ja tarinoita, jotka jäävät mieleen.',
    heroKicker: 'Dreammill Productions · Helsinki / Los Angeles',
    heroTitle: 'Tarinoita valkokankaalle',
    heroCta: 'Katso projektit',
    nowKicker: 'Työn alla',
    projects: 'Projektit',
    projectsIntro: 'Elokuvat, sarjat ja dokumentit, joissa olemme olleet tekemässä.',
    selectedWork: 'Asiakastyöt',
    selectedIntro: 'Mainoksia, trailereita ja yritystarinoita yli kahdenkymmenen vuoden ajalta.',
    about: 'Studio',
    aboutText:
      'Dreammill on Harri Haanpään luova mediatalo. Kaksikymmentä vuotta kansainvälisiä elokuvatuotantoja, tv-sarjoja ja mainoselokuvia, aina tarina edellä. Kuvaamme anamorfisilla linsseillä ja viemme projektin ideasta valmiiksi elokuvaksi.',
    channelKicker: 'YouTube-kanava · tulossa',
    channelTitle: 'Peili valkokankaalla',
    channelText:
      'Elokuva-analyysia, jossa elokuvat ovat peili yhteiskunnalle ja katsojalle. Symboliikkaa, valoa ja elokuvan tekemisen käsityötä Fight Clubista Tuntemattomaan sotilaaseen ja Kaurismäkeen. Suomeksi ja englanniksi.',
    channelCta: 'Seuraa kanavaa',
    contact: 'Yhteystiedot',
    contactText: 'Kerro projektistasi. Vastaamme arkisin.',
    watchTrailer: 'Katso traileri',
    playTrailer: 'Toista traileri',
    noTrailer: 'Traileri tulossa',
    credits: 'Tekijät',
    partners: 'Yhteistyössä',
    back: 'Kaikki projektit',
    next: 'Seuraava projekti',
    status: { released: 'Valmis', upcoming: 'Tulossa', 'in-production': 'Tuotannossa', 'in-development': 'Kehitteillä' },
    category: {
      feature: 'Pitkä elokuva', tv: 'TV-sarja', documentary: 'Dokumentti', short: 'Lyhytelokuva',
      commercial: 'Mainos', trailer: 'Traileri', animation: 'Animaatio', music: 'Musiikki',
    },
    langSwitch: 'EN',
    skip: 'Siirry sisältöön',
  },
  en: {
    tagline: 'Films, series and stories that stay with you.',
    heroKicker: 'Dreammill Productions · Helsinki / Los Angeles',
    heroTitle: 'Stories for the big screen',
    heroCta: 'See the projects',
    nowKicker: 'In the works',
    projects: 'Projects',
    projectsIntro: 'Films, series and documentaries we have made.',
    selectedWork: 'Client work',
    selectedIntro: 'Commercials, trailers and brand stories from over twenty years.',
    about: 'Studio',
    aboutText:
      'Dreammill is the creative media house of Harri Haanpää. Twenty years of international film productions, TV series and commercials, always story first. We shoot on anamorphic glass and take a project from idea to finished film.',
    channelKicker: 'YouTube channel · coming soon',
    channelTitle: 'Peili valkokankaalla',
    channelText:
      'Film essays where cinema is a mirror of society and of the viewer. Symbolism, light and the craft of filmmaking, from Fight Club to The Unknown Soldier and Kaurismäki. In Finnish and English.',
    channelCta: 'Follow the channel',
    contact: 'Contact',
    contactText: 'Tell us about your project. We reply on weekdays.',
    watchTrailer: 'Watch trailer',
    playTrailer: 'Play trailer',
    noTrailer: 'Trailer coming soon',
    credits: 'Credits',
    partners: 'With',
    back: 'All projects',
    next: 'Next project',
    status: { released: 'Released', upcoming: 'Coming soon', 'in-production': 'In production', 'in-development': 'In development' },
    category: {
      feature: 'Feature film', tv: 'TV series', documentary: 'Documentary', short: 'Short film',
      commercial: 'Commercial', trailer: 'Trailer', animation: 'Animation', music: 'Music',
    },
    langSwitch: 'FI',
    skip: 'Skip to content',
  },
} as const;

export const projectUrl = (lang: Lang, id: string) =>
  lang === 'fi' ? `/projektit/${id}/` : `/en/projects/${id}/`;
export const homeUrl = (lang: Lang) => (lang === 'fi' ? '/' : '/en/');

export const site = {
  email: 'harri@dreammill.fi',
  phone: '+358 50 350 7598',
  instagram: 'https://www.instagram.com/dreammill_productions/',
  facebook: 'https://fi-fi.facebook.com/DreamMillProductions/',
  youtube: 'https://www.youtube.com/channel/UC3k4BehnS7LeD2dyKP2viBA',
  // Fill in when the channel exists
  peiliChannel: '',
};
