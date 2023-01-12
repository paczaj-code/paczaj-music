import request from 'supertest';
import app from '../src/server';
import { db } from '../src/db/db';
import { releaseQuery, tracksQuery } from '../src/query/query';
import { ReleaseInfoTypes, TrackTypes } from '../src/types/types';

describe('Tests for release endpoint', () => {
  let releaseInfo: ReleaseInfoTypes;
  let tracks: TrackTypes[];
  const releaseId = 1396983;
  beforeEach(async () => {
    releaseInfo = await db.one(releaseQuery, releaseId);
    tracks = await db.any(tracksQuery, releaseId);
  });

  it('should bo proper release info data', async () => {
    const response = await request(app).get(`/api/release/${releaseId}`);
    const result = JSON.parse(response.text);

    expect(result.releaseInfo.id).toEqual(releaseInfo.id);
    expect(result.releaseInfo.artist).toEqual(releaseInfo.artist);
    expect(result.releaseInfo.release_name).toEqual(releaseInfo.release_name);
    expect(result.releaseInfo.release_year).toEqual(releaseInfo.release_year);
    expect(result.releaseInfo.total_time).toEqual(releaseInfo.total_time);
  });

  it('should bo proper traks data', async () => {
    const response = await request(app).get(`/api/release/${releaseId}`);
    const result = JSON.parse(response.text);

    expect(result.tracks.length).toEqual(tracks.length);
    expect(result.tracks[0].id).toEqual(tracks[0].id);
    expect(result.tracks[1].name).toEqual(tracks[1].name);
    expect(result.tracks[2].position).toEqual(tracks[2].position);
    expect(result.tracks[2].length_minutes).toEqual(tracks[2].length_minutes);
  });

  it('should ', async () => {
    const wrongReleaseId = await request(app).get(`/api/release/wfewefwef`);
    // const result = JSON.parse(wrongReleaseId.text);
    const status = wrongReleaseId.status;
    expect(status).toEqual(500);
  });
});
