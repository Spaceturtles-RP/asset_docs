"use client";
import React, { ReactNode } from 'react';

interface MapTileProps {
    src: string;
    alt: string;
    href: string;
}

const MapTile = ({ src, alt, href }: MapTileProps) => (
    <a href={href} className="map-tile-link">
        <img
            src={src}
            alt={alt}
            className="map-tile-img"
        />
    </a>
);

interface MapGridProps {
    children: ReactNode;
}

const MapGrid = ({ children }: MapGridProps) => (
    <div className="map-grid">
        {children}
    </div>
);

export { MapGrid, MapTile };