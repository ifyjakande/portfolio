import { Metadata } from 'next'

export const getBaseMetadata = (path: string = '/'): Metadata => ({
  metadataBase: new URL('https://ifeakande.com'),
  alternates: {
    canonical: path,
  },
}) 