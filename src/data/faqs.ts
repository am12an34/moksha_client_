export interface Faq {
  question: string
  answer: string
  category?: string
}

const faqs: Faq[] = [
  {
    question: 'What are the dates for Moksha 2024?',
    answer:
      'The 8th edition of Moksha will be held from 2nd February to 4th February. So, buckle up for an incredible voyage with us!',
    category: 'general'
  },
  {
    question: 'Why is registration necessary?',
    answer:
      'Registering on the website will generate a unique Moksha ID . This ID is essential for participation or entry to all the activities going on during Moksha. If you want to register for a competition or collect concert passes, you’ll need to have a Moksha ID.',
  },
  {
    question: 'How do I register for competitions at Moksha?',
    answer:
      'Registration for the competitions can be done through the official website of Moksha by filling in your personal details.',
    category: 'competitions'
  },
  {
    question: 'Who can participate in these competitions? Is there any fee involved for registration?',
    answer: 'Any student can take part in these competitions. There is no registration fee for participation.',
    category: 'competitions'
  },
  {
    question: 'Are on-spot registrations allowed during the fest?',
    answer:
      'On-spot registrations are only allowed for the EDM nights, registration for the competitions is needed to be done before the deadline. We would still suggest that you register online as soon as possible to prevent any unforeseen circumstances. However, on-spot registrations won’t be recorded on the website.',
  },
  {
    question: 'What is the date, time and venue for these competitions?',
    answer:
      'The detailed schedule of the competitions will be released later. Stay tuned to our social media handles and the website for regular updates.',
    category: 'competitions'
  },
  {
    question: 'How can I attend concerts/EDM nights?',
    answer:
      'Anyone having a pass can attend the EDM nights/concerts. The passes can be collected against their unique Moksha ID for which they have to register in the official website.',
    category: 'events'
  },
  {
    question: 'Is the cultural fest open to students from other colleges and universities?',
    answer:
      'It is open to all the students bearing the Moksha ticket. No entry will be provided to anyone who fails to provide it during the entry, even if he/she is a student of NITA.',
    category: 'general'
  },
  {
    question: 'What accommodation options are available for outstation participants?',
    answer:
      'Moksha provides accommodation facilities for outstation participants. Details about accommodation options and booking procedures will be available on our website closer to the event date.',
    category: 'accommodation'
  },
  {
    question: 'Are there any food stalls available during the fest?',
    answer:
      'Yes, there will be a variety of food stalls offering different cuisines throughout the fest. Food coupons can be purchased at designated counters.',
    category: 'facilities'
  },
  {
    question: 'How can I become a volunteer for Moksha?',
    answer:
      'Volunteer registrations are open for NITA students. You can apply through the volunteer registration form available on our website or contact the organizing committee.',
    category: 'participation'
  },
  {
    question: 'What safety measures are in place during the fest?',
    answer:
      'We have a comprehensive security plan with professional security personnel, medical facilities, and emergency response teams to ensure the safety of all participants.',
    category: 'facilities'
  },
]

export default faqs
