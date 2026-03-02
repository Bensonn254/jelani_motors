import { Helmet } from 'react-helmet-async'

export default function SEO({ 
  title = 'Jelani Motors Kenya | Executive Car Hire',
  description = 'Kenya\'s premier corporate fleet for Nairobi, Kitengela & beyond. Executive & reliable car hire services from board meetings to safari transfers.',
  url = 'https://jelanimotors.co.ke'
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* OpenGraph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=80&auto=format&fit=crop" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=80&auto=format&fit=crop" />
    </Helmet>
  )
}
