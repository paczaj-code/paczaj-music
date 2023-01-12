export const allArtistQuery: string = `
with SELECT_NAMES AS
    (SELECT artist.id,
            artist.name,
            country.name as country,
            artist_type.name as artist_type,
            CASE
                WHEN strpos(artist.name, 'The ')=1 THEN substring(artist.name,5)
                ELSE artist.name
            END AS sort_names,
            array_agg(tag.name) as tags
     FROM artist
     INNER JOIN country ON country.id = artist.country_id
     INNER JOIN artist_type ON artist.artist_type_id=artist_type.id
     LEFT JOIN artist_tag ON artist_tag.artist_id = artist.id
     LEFT JOIN tag ON tag.id = artist_tag.tag_id
     GROUP BY artist.id,
              artist.name,
              country.name,
              artist_type.name 
               )
SELECt id,
       name,
       country,
       artist_type,
       tags
FROM SELECT_NAMES
ORDER BY LOWER(sort_names);
`;

export const sigleArtistQuery: string = `
SELECT artist.id, artist.name AS artist_name,
    country.name AS country,
    country.iso_3 AS country_code,
    artist_type.name AS artist_type,
    artist.begin_date_year,
    artist.end_date_year,
    artist.wikipedia_suffix,
    array_agg(tag.name) as tags
FROM artist
    INNER JOIN country ON artist.country_id = country.id
    INNER JOIN artist_type ON artist.artist_type_id=artist_type.id
    LEFT JOIN artist_tag ON artist_tag.artist_id = artist.id
    LEFT JOIN tag ON tag.id = artist_tag.tag_id
WHERE artist.id=$1
GROUP BY country.name,
        country.iso_3,
    artist.id,
    artist_type.name,
    artist.begin_date_year,
    artist.end_date_year,
    artist.wikipedia_suffix
`;

export const youtubeQuery: string = `
SELECT youtube_id, title FROM youtube WHERE artist_id=$1;
`;

export const tracksQuery: string = `
SELECT id, name, position, (SELECT concert_milisecond_to_minutes(length)) AS length_minutes 
FROM track 
WHERE release_id=$1
ORDER BY position
        `;

export const releaseQuery: string = `
SELECT release.id, release.name as release_name, artist.name as artist, cover.front_big,
(extract(year from release.first_release_date)::INTEGER) as release_year,
(SELECT concert_milisecond_to_minutes(SUM(track.length))) as total_time
FROm release 
INNER JOIN track ON track.release_id=release.id
INNER JOIN artist ON release.artist_id = artist.id
LEFT JOIN cover ON cover.release_id=release.id
WHERE release.id=$1
GROUP BY release.id, release.name, artist.name,cover.front_big`;

export const databaseStatisticsQuery: string = `
SELECT 
(SELECT COUNT(id) FROM artist) AS artists_qty,
(SELECT COUNT(id) FROM release) AS release_qty,
(SELECT COUNT(id) FROM track) AS track_qty,
(SELECT COUNT(id) FROM track) AS track_qty,
(SELECT COUNT(id) FROM youtube) AS youtube_qty
`;
