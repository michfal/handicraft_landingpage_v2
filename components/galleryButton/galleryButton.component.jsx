import React from 'react';
import Link from 'next/link';

import { Button } from './galleryButton.styles';

export const GalleryButton = () => {
    return (
        <Button>
            <Link href="/gallery">Moje Prace</Link>
        </Button>
    );
};
