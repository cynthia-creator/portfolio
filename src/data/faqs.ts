export type QA = { q: string; a: string }

/**
 * The questions people ask before they email. One list, used by the FAQ
 * accordion on the Contact view (and the legacy long-scroll FAQ section).
 * Five questions, two or three sentences each: the accordion sits in a
 * fixed panel and more than that pushes the email row off the plate.
 */
export const FAQS: QA[] = [
  {
    q: 'What do you do?',
    a: 'I build responsive websites and landing pages, and I offer entry-level virtual assistant support such as email, calendar and spreadsheet help. I also build simple automations and do AI data annotation. I work mainly with solo founders and small teams.',
  },
  {
    q: 'How fast can you start?',
    a: 'It depends on my current workload and the size of the project. Send me the details and I will confirm a realistic start date when I reply.',
  },
  {
    q: 'How much do you charge?',
    a: 'It depends on the work. I can quote per project or by the hour. Tell me what you need and I will send you a clear price before we start.',
  },
  {
    q: 'Where are you based?',
    a: 'I am in Cape Town, South Africa (GMT+2) and work remotely. I am happy to work with clients in other time zones.',
  },
  {
    q: 'What happens after I write?',
    a: 'I will read your message and reply by email. If I need more detail, I will ask a few questions, then suggest next steps and a price.',
  },
]