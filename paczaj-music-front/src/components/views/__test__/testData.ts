const artistDesc = `John Anthony White (né Gillis; born July 9, 1975), is an American musician, best known as the lead singer and guitarist of the duo the White Stripes. White has enjoyed consistent critical and popular success and is widely credited as one of the key artists in the garage rock revival of the 2000s. He has won 12 Grammy Awards, and three of his solo albums have reached number one on the Billboard charts. Rolling Stone ranked him number 70 on its 2010 list of "The 100 Greatest Guitarists of All Time". David Fricke's 2010 list ranked him at number 17.
After moonlighting in several underground Detroit bands as a drummer, White founded the White Stripes with fellow Detroit native and then-wife Meg White in 1997. Their 2001 breakthrough album, White Blood Cells, brought them international fame with the hit single and accompanying music video "Fell in Love with a Girl". This recognition provided White opportunities to collaborate with famous artists, including Loretta Lynn and Bob Dylan. In 2005, White founded the Raconteurs with Brendan Benson, and in 2009 founded the Dead Weather with Alison Mosshart of the Kills. In 2008, he recorded "Another Way to Die" (the title song for the 2008 James Bond film Quantum of Solace) with Alicia Keys, making them the only duet to perform a Bond song. White has released four solo studio albums, which have garnered wide critical and commercial success.
White is a board member of the Library of Congress' National Recording Preservation Foundation. His record label and studio Third Man Records releases vinyl recordings of his own work as well as that of other artists and local school children. His second studio album, Lazaretto (2014), holds the record for most first-week vinyl sales since 1991. White has an extensive collection of guitars and other instruments and has a preference for vintage items that often have connections to famous blues artists. He is a vocal advocate for analog technology and recording techniques.`;

export const testData = {
  artist_data: {
    country: 'Poland',
    country_code: 'pl',
    begin_date_year: 1999,
    end_date_year: 2020,
    tags: ['punk', 'indie'],
    artist_description: artistDesc,
    wikipedia_link: 'some_link',
    artist_name: 'Artist',
  },
  releases: {
    studio_albums: [
      {
        first_release_date: 2003,
        front_small:
          'https://archive.org/download/mbid-53333ba5-b045-3123-bdd6-70e23a92fbb8/mbid-53333ba5-b045-3123-bdd6-70e23a92fbb8-2981703601_thumb250.jpg',
        id: 148061,
        name: 'Get Born',
      },
      {
        first_release_date: 2009,
        front_small:
          'https://archive.org/download/mbid-537ce572-5c29-45d0-b3c2-d54acdd9dba4/mbid-537ce572-5c29-45d0-b3c2-d54acdd9dba4-32299499242_thumb250.jpg',
        id: 865250,
        name: 'Shaka Rock',
      },
    ],
    extended_plays: [
      {
        first_release_date: 2004,
        front_small: null,
        id: 402612,
        name: 'Cold Hard Bitch',
      },
    ],
    compilations: [
      {
        first_release_date: 2018,
        front_small:
          'https://archive.org/download/mbid-6c60f0b4-28ae-4679-8547-3f9ba6b5c305/mbid-6c60f0b4-28ae-4679-8547-3f9ba6b5c305-22267026325_thumb250.jpg',
        id: 2109442,
        name: 'Are You Gonna Be My Girl',
      },
    ],
  },
  youtube_movies: [
    { title: 'Jet - Are You Gonna Be My Girl', youtube_id: 'tuK6n2Lkza0' },
    { title: "Jet - Look what you've done", youtube_id: 'XD1cxSE25ck' },
  ],
};
