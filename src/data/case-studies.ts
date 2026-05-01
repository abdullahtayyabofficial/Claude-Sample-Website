import type { CaseStudy } from '@/types'

export const caseStudies: CaseStudy[] = [
  {
    slug: 'cubicle-coworking',
    title: 'From 3 Bookings to Full Capacity in 60 Days',
    client: 'Cubicle Co-Working Space',
    industry: 'Co-Working / Commercial Real Estate',
    thumbnail: '',
    tags: ['Meta Ads', 'Lead Generation', 'Event Marketing', 'Creative Strategy'],
    overview:
      'Cubicle is the only co-working space in its area, targeting freelancers, startups, and IT companies. The goal was to fill private offices, dedicated desks, and the co-working area as quickly as possible — generating passive monthly revenue while positioning Cubicle as the premium yet affordable workspace in the local market.',
    problem:
      'No existing audience, zero organic traction, and a market where workspace decisions are largely word-of-mouth. The brand needed paid media to build awareness and drive immediate bookings from a cold start — simultaneously.',
    strategy:
      'A full-funnel campaign was built across three phases. The Launch & Awareness phase used broad sales campaigns targeting tech and business audiences to generate initial traction. This flowed into a Retargeting & Re-Conversion phase with high-intent campaigns narrowed to warm audiences, improving conversion efficiency and reducing wasted spend. The creative strategy combined direct-selling benefit messaging with announcement-style visuals across static, carousel, video, and UGC formats — matching each funnel stage with the right format.',
    execution:
      'Alongside paid media, a Community PR layer was added: an IT Networking Festival was organized at Cubicle, inviting local business owners and tech professionals to experience the space directly. The event attracted 600+ participants, building brand positioning, partnerships, and organic trust — and placing Cubicle in front of hundreds of potential long-term clients in a single activation.',
    results: [
      { label: 'Booking growth', value: 'From 3 to 25+ bookings in under 60 days — full operational capacity reached' },
      { label: 'Event activation', value: '600+ participants attended the linked IT Networking Festival' },
      { label: 'Brand positioning', value: 'Established Cubicle as the go-to professional co-working space for local business and tech communities' },
      { label: 'ROAS', value: 'Maintained profitable Meta Ads performance with organic social conversions supplementing paid results' },
    ],
    metrics: [
      { label: 'Bookings in 60 Days', value: '25', prefix: '', suffix: '+' },
      { label: 'Event Participants', value: '600', prefix: '', suffix: '+' },
      { label: 'Time to Full Capacity', value: '<60 days' },
    ],
    learnings:
      'Co-working acquisition works best when the digital campaign and the physical experience reinforce each other. The event layer compressed months of trust-building into a single activation — turning a media-buying campaign into a community moment.',
  },
  {
    slug: 'commercial-real-estate-lead-gen',
    title: '1,784+ Qualified Leads in 2 Months on a Fixed Budget',
    client: 'Government-Backed Commercial Real Estate Authority',
    industry: 'Real Estate / Government',
    thumbnail: '',
    tags: ['Meta Ads', 'Google Ads', 'Lead Generation', 'Real Estate'],
    overview:
      'A government-backed commercial real estate development authority in Punjab was responsible for launching and selling large-scale commercial plots — government-supported installment plans, high-credibility locations, and price points starting from PKR 140 lakhs. The challenge: convert an authority brand with no social media presence into a lead generation machine targeting high-intent commercial investors across Pakistan.',
    problem:
      'No existing social media foundation, zero paid campaign history, and zero audience data. Everything had to be built from scratch. At the same time, the primary success metric was high-quality, high-potential lead volume — not just reach or impressions. The brand also had a unique constraint: only two creatives were approved for use across the entire campaign, leaving no room for standard A/B testing.',
    strategy:
      'A multi-platform architecture was built across three distinct project campaigns. Meta was used for demographic-centric targeting, reaching diverse investor profiles through three separate campaign structures: AWT Pulse (broad commercial investors), Business Bay (business-focused investors), and Hospital Plot (niche high-value segment). Google was used to capture high-intent search traffic from investors already researching commercial property. With only two approved creatives, each was engineered to serve dual roles — one assigned to awareness, the other to re-marketing — splitting audiences by qualification stage to extract maximum efficiency from limited creative assets.',
    execution:
      'Campaigns ran simultaneously across all three projects. Meta Pixel and GA4 tracking were configured from the ground up, providing first-party data that fed back into audience refinement throughout the campaign. The government-backed credibility of the brand was made central to all messaging — transforming what could have been a liability (unfamiliarity with the authority) into a trust signal that outperformed private real estate brands in the same market.',
    results: [
      { label: 'AWT Pulse', value: '1,040 leads generated at approximately PKR 200 per lead' },
      { label: 'Business Bay', value: '580+ leads generated at approximately PKR 200 per lead' },
      { label: 'Hospital Plot', value: '202 leads generated at PKR 604 per lead' },
      { label: 'Total leads', value: '1,784+ qualified leads generated across all three projects in 2 months' },
    ],
    metrics: [
      { label: 'Qualified Leads', value: '1,784', prefix: '', suffix: '+' },
      { label: 'Timeframe', value: '2 months' },
      { label: 'Lowest Cost Per Lead', value: '~PKR 200' },
    ],
    learnings:
      'Creative constraints are not always a disadvantage. Being forced to make two creatives carry maximum weight led to more intentional audience segmentation and role assignment per creative — producing results that beat unconstrained campaigns. Government credibility, when properly positioned, is a powerful differentiator in high-consideration purchase categories.',
  },
  {
    slug: 'ffc-prize-distribution',
    title: 'Turning a Single Ceremony into a National Digital Moment',
    client: 'Fauji Fertilizers Company (FFC)',
    industry: 'Agriculture / FMCG',
    thumbnail: '',
    tags: ['YouTube Ads', 'Meta Ads', 'TikTok', 'Brand Awareness'],
    overview:
      'Fauji Fertilizers Company (FFC) is one of Pakistan\'s largest and most recognized agricultural brands. The objective for their Prize Distribution Ceremony was not leads or conversions — it was pure brand dominance: maximum reach across Pakistan, mass audience engagement, and long-term digital asset growth across all major platforms simultaneously.',
    problem:
      'A single offline ceremony needed to become a nationwide digital moment. The campaign had to deliver scale across multiple platforms — YouTube, Meta, and TikTok — each with different audience behavior and creative requirements, while building lasting digital equity (subscribers, followers) beyond just impressions for the duration of the campaign.',
    strategy:
      'A multi-platform, video-first awareness strategy was executed across YouTube, Meta, and TikTok. YouTube anchored the campaign with the majority of the budget, including a 24-hour YouTube Masthead placement — occupying the top of YouTube\'s homepage for all users across Pakistan for a full day, delivering national-scale visibility instantly. Meta handled cross-demographic reach, with video-focused placements building campaign frequency across age groups and regions. TikTok extended the campaign into younger, high-consumption audiences, driving viral-style engagement and amplifying the event\'s cultural footprint.',
    execution:
      'Creative executions were produced in multiple versions — event highlight content and ceremony montages — adapted to each platform\'s native consumption patterns. YouTube content was optimized for depth of engagement (longer watch time). Meta content balanced reach with frequency. TikTok content matched the platform\'s short-form, high-energy viewing behavior. Cross-demographic targeting ensured maximum geographic saturation across Pakistan.',
    results: [
      { label: 'YouTube', value: '~50 million impressions · ~8 million video views · 70,000 new subscribers' },
      { label: 'Meta', value: '~9.7 million impressions · ~8 million video views · +21,300 followers' },
      { label: 'TikTok', value: '~4 million impressions · ~3.9 million video views · +15,000 followers' },
      { label: 'Total', value: '65.8 million+ impressions · 20 million+ video views · 800+ new audience members' },
    ],
    metrics: [
      { label: 'Total Impressions', value: '65.8M', prefix: '', suffix: '+' },
      { label: 'Video Views', value: '20M', prefix: '', suffix: '+' },
      { label: 'YouTube Subscribers Gained', value: '70,000', prefix: '', suffix: '+' },
    ],
    learnings:
      'When the objective is pure brand dominance, budget concentration beats distribution. Anchoring the majority of spend on the YouTube Masthead created a single high-impact moment that carried the credibility of the entire campaign — with Meta and TikTok extending the reach far beyond what any single platform could deliver alone.',
  },
  {
    slug: 'ffc-sona-soil-day',
    title: '7.42M Impressions in 2 Days on a PKR 500,000 Budget',
    client: 'Fauji Fertilizers Company (FFC)',
    industry: 'Agriculture / FMCG',
    thumbnail: '',
    tags: ['YouTube Ads', 'Meta Ads', 'TikTok', 'Brand Awareness'],
    overview:
      'FFC wanted to mark World Soil Day with a meaningful digital presence across Pakistan. The objective was to maximize reach and video views within a controlled budget of PKR 500,000 — spreading an educational, awareness-driven message about soil health to as wide an audience as possible across YouTube, Meta, and TikTok in a 2–3 day window.',
    problem:
      'No premium placements. No large budgets. Just a well-structured, platform-specific campaign built to deliver the most visibility per rupee spent — while ensuring the educational content connected authentically with viewers rather than being skipped.',
    strategy:
      'Budget allocation was structured around platform roles rather than spreading spend evenly. YouTube received the majority of the budget, focusing on reach and video retention — ensuring the message got through to each viewer rather than simply registering an impression. Meta handled cross-demographic and cross-age-group exposure, building frequency without exhausting the remaining budget. TikTok captured the high-consumption, short-form segment with native-style creative matched to platform behavior.',
    execution:
      'Creative content was educational in tone — designed to inform audiences about soil health in a way that felt genuine and worth watching, not promotional. This tone matched the content style preferred by YouTube\'s algorithm and resonated with TikTok\'s audience looking for informative short-form content. The result was an engagement rate of 40%+ and a YouTube engagement rate of 2.8% — a strong signal that the content connected rather than interrupted.',
    results: [
      { label: 'Total reach', value: '7.42 million impressions across YouTube, Meta, and TikTok in 2 days' },
      { label: 'Video views', value: '5.9 million video views across all three platforms' },
      { label: 'Engagement', value: '40%+ overall engagement rate · YouTube engagement rate of 2.8%' },
      { label: 'Audience growth', value: 'YouTube: 4,600+ new subscribers · meaningful follower growth across Meta and TikTok' },
    ],
    metrics: [
      { label: 'Impressions in 2 Days', value: '7.42M', prefix: '', suffix: '' },
      { label: 'Video Views', value: '5.9M', prefix: '', suffix: '' },
      { label: 'Engagement Rate', value: '40', prefix: '', suffix: '%+' },
    ],
    learnings:
      'At limited scale, platform-specific creative and budget role assignment can outperform larger campaigns that spread spend evenly. Educational content — when it genuinely informs rather than promotes — achieves higher engagement and organic amplification than promotional messaging at the same spend level.',
  },
  {
    slug: 'wavebyte-ecommerce',
    title: 'Scaling to PKR 1.5M+ Ad Spend at 5–8x ROAS',
    client: 'Wave Byte',
    industry: 'Ecommerce Services',
    thumbnail: '',
    tags: ['Meta Ads', 'Lead Generation', 'Ecommerce', 'Scaling Strategy'],
    overview:
      'Wave Byte is a UAE-based ecommerce service provider offering complete dropshipping, warehousing, product sourcing, 3PL, and order fulfillment solutions. The primary goal was to generate a continuous flow of qualified leads from aspiring entrepreneurs looking to start their dropshipping journey — while also filling monthly seminars and webinars to convert attendees into paying customers.',
    problem:
      'The business needed a scalable, profitable lead generation system that could grow from minimal daily budgets to significant ad spend without sacrificing lead quality, ROAS, or conversion rate — and that could sustain seminar sign-ups month over month.',
    strategy:
      'A comprehensive paid media structure was built combining campaign architecture, creative testing, audience segmentation, and automation. Message and lead campaigns were launched on Meta Ads targeting aspiring entrepreneurs. A progressive scaling system was implemented, growing daily ad budgets from PKR 1,500 to over PKR 100,000 while maintaining 5–8x ROAS at every growth stage. Multiple creative angles were tested — FOMO Appeal, Benefit Appeal, Educational Hook, and Direct Selling — to identify the strongest performers at each budget level.',
    execution:
      'Creative production was handled in collaboration with content and design teams, producing high-performing static and video creatives that highlighted Wave Byte\'s full e-commerce ecosystem — from store setup to fulfillment. Automated message templates were developed to streamline the lead qualification process at scale, ensuring rapid response times without adding operational overhead. Retargeting layers were built to re-engage warm audiences who had engaged with ads, visited the page, or registered for webinars — keeping the funnel consistently full across multiple budget cycles.',
    results: [
      { label: 'Total ad spend managed', value: 'PKR 1.5M+ managed with sustainable returns at every scaling stage' },
      { label: 'Scaling achievement', value: 'Single campaign scaled to PKR 600K+ profitably; others to PKR 100K+' },
      { label: 'ROAS', value: 'Average 5–8x ROAS maintained with consistent conversion flow through all scaling phases' },
      { label: 'Lead generation', value: 'Hundreds of qualified leads generated, fueling both direct sales and seminar/webinar sign-ups' },
    ],
    metrics: [
      { label: 'Ad Spend Managed', value: '₨1.5M', prefix: '', suffix: '+' },
      { label: 'Average ROAS', value: '5–8x' },
      { label: 'Budget Scaled Per Campaign', value: '₨600K', prefix: '', suffix: '+' },
    ],
    learnings:
      'Sustainable scaling requires a system, not just a budget increase. Progressive budget scaling paired with continuous audience and creative testing — rather than large sudden jumps — kept ROAS stable across every growth stage and prevented the performance cliff that kills most scaling attempts.',
  },
  {
    slug: 'icr-it-centre',
    title: '500+ Student Enrollments Per Peak Batch Season',
    client: 'ICR IT-Centre',
    industry: 'IT Training & Education',
    thumbnail: '',
    tags: ['Meta Ads', 'Lead Generation', 'Education', 'Creative Strategy'],
    overview:
      'ICR IT-Centre is an IT training institute offering skill-based courses including Digital Marketing, Web & App Development, and Graphic Design. The primary requirement was to generate consistent student enrollments batch after batch — while positioning ICR as a credible, affordable, and career-oriented institute, particularly for young students seeking practical skills and job opportunities.',
    problem:
      'The institute needed a structured, always-on enrollment system that could reliably capture student interest across multiple batch cycles — rather than running isolated one-off campaigns that produced inconsistent intake numbers.',
    strategy:
      'A full-funnel campaign execution was built to generate awareness and direct enrollments simultaneously. Campaigns targeted both broad and interest-based audiences with message-based and lead-form ads. The creative and messaging strategy was built around four angles: Pain-Point Appeal (addressing the fear of having no marketable skills), Benefit Appeal (emphasizing practical, affordable, rapid-completion courses), FOMO (limited-time enrollment discounts and batch expiry deadlines), and Social Proof (student testimonials, success stories, and real classroom experiences). Each angle was matched to the correct funnel stage and audience temperature.',
    execution:
      'Creative sets were refreshed each batch cycle to maintain relevance and prevent ad fatigue, while the core offer remained consistent. Audience segmentation ensured new cold audiences and warm retargeting audiences received distinct messaging. Campaign structure was optimized over multiple cycles to keep cost per enrollment predictable and enrollment volume stable — regardless of batch or season.',
    results: [
      { label: 'Consistent batch enrollment', value: '80+ student enrollments per batch generated consistently across multiple cycles' },
      { label: 'Peak season', value: '500+ enrollments achieved during peak enrollment season' },
      { label: 'Brand recognition', value: 'Enhanced local brand recognition and trust, generating organic referrals and walk-in inquiries' },
      { label: 'Campaign efficiency', value: 'Optimized structure maintained predictable cost and stable conversion rates across multiple batch cycles' },
    ],
    metrics: [
      { label: 'Peak Season Enrollments', value: '500', prefix: '', suffix: '+' },
      { label: 'Consistent Batch Average', value: '80', prefix: '', suffix: '+ per batch' },
    ],
    learnings:
      'Education campaigns perform best when messaging evolves with the prospective student\'s journey. Stacking FOMO, social proof, and benefit-led creative across a properly structured funnel — rather than running a single angle to a cold audience — dramatically improves both enrollment volume and cost efficiency per student acquired.',
  },
  {
    slug: 'hardees-qsr',
    title: 'Building an Always-On Online Revenue Engine for a QSR Brand',
    client: 'Quick Service Restaurant (QSR)',
    industry: 'Food & Beverage / Ecommerce',
    thumbnail: '',
    tags: ['Meta Ads', 'Google Ads', 'Ecommerce', 'ROAS Optimisation'],
    overview:
      'A well-known quick service restaurant brand with strong offline presence and an online ordering channel through its website. Before the engagement, the brand was running continuous paid campaigns for brand recall — but with no structured system that was consistently profitable and focused on driving online purchases as a primary outcome.',
    problem:
      'Ad campaigns were running as isolated, one-off bursts for brand awareness. There was no always-on conversion system and no consistent structure for driving online orders at a predictable cost. The goal was to shift from awareness-only to a structured, always-on revenue engine.',
    strategy:
      'A Consistent Sales Campaign Strategy was built around dedicated campaign chains running continuously — creating a steady pipeline of online orders rather than one-off promotional pushes. Smart Audience Architecture was implemented by structuring multiple audience segments: meal-based audiences, campaign-timed audiences, and retargeting-based lookalikes. Meta\'s AI dynamically allocated budget across audience sets in always-on format to maximize conversion efficiency. Meta served as the primary driver for offer-based food promotions and brand discovery; Google captured high-intent search traffic for the brand and its offers.',
    execution:
      'Campaigns were structured to run continuously across weeks, with offer-led creative (seasonal promotions, meal deals) refreshed to maintain engagement while the underlying audience architecture and campaign structure remained stable. Budget allocation between Meta and Google was calibrated per campaign period based on performance data, with Meta consistently delivering stronger direct order volume.',
    results: [
      { label: 'Revenue consistency', value: '4 consecutive months of consistent, compounding revenue growth from online orders' },
      { label: 'ROAS trajectory', value: 'Average ROAS of 4.8x across the campaign duration, with progressive improvement each cycle' },
      { label: 'Campaign structure', value: 'Always-on system replaced isolated one-off campaigns, creating predictable daily order volume' },
      { label: 'Scaling', value: 'ROAS lifted progressively across each campaign period through compound optimisation' },
    ],
    metrics: [
      { label: 'Average ROAS', value: '4.8x' },
      { label: 'Revenue Growth Duration', value: '4 months' },
      { label: 'Primary Platform', value: 'Meta Ads' },
    ],
    learnings:
      'For high-frequency purchase categories like food, always-on campaign structure outperforms campaign bursts in both ROAS and total revenue. The key is building an audience architecture that compounds over time — each cycle feeding better lookalikes and retargeting pools back into the next.',
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}

export function getCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug)
}
