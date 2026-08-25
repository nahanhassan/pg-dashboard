// Add, remove, or reorder panels here. Each one becomes a route + a nav tab.
//
// `embedUrl` must be a Google Sheets "Publish to web" pubhtml link
// (File > Share > Publish to web > Embed), NOT the normal edit/view link.
// It looks like:
//   https://docs.google.com/spreadsheets/d/e/<long-id>/pubhtml?gid=<id>&single=true&widget=true&headers=false
//
// `slug` becomes the URL path, e.g. /sales -> yourapp.vercel.app/sales

export const dashboards = [
  {
    slug: 'garments-combined',
    title: 'Garments Combined',
    description: 'Operational Summary',
    embedUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQkeOwYgRsouLtZQWEzfQun2J8dbbdoQhaQrYbpb9HZuL02PfgqmwXA0Zx-JKzYVLjmmuFhta9Pbd6i/pubhtml?gid=742606655&single=true&widget=true&headers=false'
  },
  {
    slug: 'knitting',
    title: 'Sweater-Knitting',
    description: 'Target & Achievement Analysis',
    embedUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vTRHo2Mb9a4949DGRZHNiqRiHtpGfjNTfYeXoywSowekOgZCd1U8-cEOAE4Du7H0F4Kqwpsmm8DKVxm/pubhtml?widget=true&amp;headers=false'
  },  
  {
    slug: 'linking',
    title: 'Sweater-Linking',
    description: 'Target & Achievement Analysis',
    embedUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vTRHo2Mb9a4949DGRZHNiqRiHtpGfjNTfYeXoywSowekOgZCd1U8-cEOAE4Du7H0F4Kqwpsmm8DKVxm/pubhtml?widget=true&amp;headers=false'
  },
  {
    slug: 'finishing',
    title: 'Sweater-Finishing',
    description: 'Target & Achievement, Inspection, Shipment Schedule',
    embedUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vTRHo2Mb9a4949DGRZHNiqRiHtpGfjNTfYeXoywSowekOgZCd1U8-cEOAE4Du7H0F4Kqwpsmm8DKVxm/pubhtml?gid=200169650&amp;single=true&amp;widget=true&amp;headers=false'
  }
]
