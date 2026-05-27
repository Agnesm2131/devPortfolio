"use client";

import { useEffect, useState } from "react";
import styles from "./SpotifyWidget.module.css";
import Link from "next/link";
import { settings } from "@/lib/settings";

interface SpotifyData {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
}

export default function SpotifyWidget() {
  const [data, setData] = useState<SpotifyData>({ isPlaying: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const discordId = settings?.spotify?.discordId || "1174296487782531084";

        const res = await fetch(`https://api.lanyard.rest/v1/users/${discordId}`, { cache: 'no-store' });
        const json = await res.json();

        if (json.success && json.data.listening_to_spotify) {
          const spotify = json.data.spotify;
          setData({
            isPlaying: true,
            title: spotify.song,
            artist: spotify.artist,
            album: spotify.album,
            albumImageUrl: spotify.album_art_url,
            songUrl: `https://open.spotify.com/track/${spotify.track_id}`,
          });
        } else {
          setData({ isPlaying: false });
        }
      } catch (err) {
        console.error("Failed to fetch Spotify data from Lanyard");
        setData({ isPlaying: false });
      } finally {
        setLoading(false);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return null;

  return (
    <div className={`${styles.widget} glass-panel`}>
      {data.isPlaying ? (
        <Link href={data.songUrl || "#"} target="_blank" className={styles.container}>
          <div className={styles.albumArt}>
            {data.albumImageUrl ? (
              <img src={data.albumImageUrl} alt={data.album || "Album Art"} width={50} height={50} />
            ) : (
              <div className={styles.placeholderArt}></div>
            )}
            <div className={styles.eq}>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </div>
          </div>
          <div className={styles.songInfo}>
            <span className={styles.nowPlayingText}>Now Playing</span>
            <p className={styles.title}>{data.title}</p>
            <p className={styles.artist}>{data.artist}</p>
          </div>
          <div className={styles.spotifyIcon}>
            <svg viewBox="0 0 24 24" fill="var(--accent-primary)" width="24" height="24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.62 18.66 12.9c.42.18.6.78.301 1.14zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.54-1.02.72-1.56.42z" />
            </svg>
          </div>
        </Link>
      ) : (
        <div className={styles.container}>
          <div className={styles.albumArt}>
            <div className={styles.offlineArt}>
              <svg viewBox="0 0 24 24" fill="#666" width="24" height="24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.62 18.66 12.9c.42.18.6.78.301 1.14zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.54-1.02.72-1.56.42z" />
              </svg>
            </div>
          </div>
          <div className={styles.songInfo}>
            <span className={styles.nowPlayingText}>Spotify</span>
            <p className={styles.title}>Not Playing</p>
          </div>
        </div>
      )}
    </div>
  );
}