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
    slug: 'sweater',
    title: 'Sweater Dashboard',
    description: 'Only SSIP and PCTL Sweater',
    embedUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vSBK-YsOV6CSggG9KCHTlFhHxOJ9CI0UZ-zW79ZiJUJkic2_r3Byx5tx1HDWISWAI4ZZwYbW4bNd3T0/pubhtml?gid=248940803&amp;single=true&amp;widget=true&amp;headers=false'
  },
    {
    slug: 'garments',
    title: 'Garments Dashboard',
    description: 'Combined Knit & Woven Garments',
    embedUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQkeOwYgRsouLtZQWEzfQun2J8dbbdoQhaQrYbpb9HZuL02PfgqmwXA0Zx-JKzYVLjmmuFhta9Pbd6i/pubhtml?gid=742606655&single=true&widget=true&headers=false'
  }
]
