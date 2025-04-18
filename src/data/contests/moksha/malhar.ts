import getDateFromIST from '~/utils/getDateFromIST'
import type { Contest } from '~/types'

export const malhar: Contest[] = [
  {
    id: 4,
    type: 'team',
    slug: 'battle-of-bands',
    name: 'Battle of Bands',
    subtitle: 'Rock On!',
    badges: ['team'],
    image: {
      src: '/images/contests/generic-poster.png',
    },
    deadline: getDateFromIST('2025-04-23', '23:59:00'),
    description: [
      {
        bold: true,
        p:
          'BATTLE OF BANDS (in collaboration with A.T.M.A Society): DAY 03 [Venue: Main Stage, Time: 1:30p.m]',
      },
      {
        p:
          'A competitive platform where bands battle it out on stage. Witness a thrilling mix of genres, styles, and raw musical talent.',
      },
      {
        p: 'All bands must contain a minimum of three (3) members.',
      },
    ],
    instructions: [
      { heading: 'General Rules:' },
      {
        ul: [
          'Member of one participating band is not allowed to be a member of any other band participating in the event except his own Band.',
          'Only band members on the registration form will be admitted on stage.',
          'All bands agree to have their name, voice, and/or likeness used in any advertising or broadcasting material relating to this contest without compensation or rights to royalties for such use.',
          'Lyrics of performance songs should not contain any obscenities if possible.',
          'Judges can deduct points for any use of obscenities not necessary.',
          'The use of any illegal substances will not be tolerated. If any band member is suspected to be under the influence of an illegal substance, the entire band will be disqualified and the proper authorities will be notified',
          'All band members are required to be present at least 30 minutes prior to performance time to check in with the coordinator. If all band members are not present and ready to set up for performance 15 minutes before going on stage, the band will be disqualified.',
          'All participants are required to be courteous and respectful toward other participating musicians.',
          'No Travelling allowances will be provided.',
          'The competition is open to undergraduate and postgraduate students from recognized colleges and universities.',
          'Participants selected from the online prelims will qualify for the finals.',
          'All participants must carry valid college ID cards for verification(during finals).',
          'Participants must report one hour before their scheduled performance time.',
          'Any kind of indecent language, offensive gestures, or inappropriate behavior will lead to disqualification.',
          'Participants must bring their own instruments during finals',
        ],
      },
      { heading: 'Equipment and Onstage Rules:' },
      {
        ul: [
          'Participating must bring their own instruments except Drum kit. Drumkit will be provided by the Organisers',
          'Band members are responsible for the security of their equipment.',
          'Each band will be given the opportunity to play at least 3 songs.',
          'At least one song must be an original.',
          'There will be a strict time limit of 30 minutes for each band on stage including set up time. Please plan your songs accordingly. You may have one long song and one short song but no more than 30 mins minutes is allowed.',
          'While one band is playing, the next band may start getting ready to set up in the background. However, please do not be disruptive so that the band on stage can be the focus of the judges and the crowd.',
          'Bands must not use pre-recorded sound material. All bands must play live.',
          'The judging system is designed to keep the contest open to all skill levels and song choices while keeping the event fair and competitive.',
        ],
      },
    ],
    allowedTeamSize: { min: 3, max: null },
  },
  {
    id: 5,
    type: 'solo',
    slug: 'mystic-mic',
    name: 'Mystic Mic',
    subtitle: 'Solo Singing Competition',
    badges: ['solo'],
    image: {
      src: '/images/contests/generic-poster.png',
    },
    deadline: getDateFromIST('2025-04-23', '23:59:00'),
    description: [
      {
        p: 'Participants can choose any genre (Classical, Pop, Rock, Bollywood, etc.).',
      },
      {
        p: 'Prelims : 2 minutes . Finals : 5 minutes (including setup time).',
      },
      {
        p: 'Instruments for Background music/karaoke tracks are allowed but must be submitted in advance. No auto-tuning or voice effects are allowed.',
      },
    ],
    instructions: [
      { heading: 'General Guidelines' },
      {
        ul: [
          'The competition is open to undergraduate and postgraduate students from recognized colleges and universities.',
          'Participants selected from the online prelims will qualify for the finals.',
          'All participants must carry valid college ID cards for verification(during finals).',
          'Participants must report one hour before their scheduled performance time.',
          'Any kind of indecent language, offensive gestures, or inappropriate behavior will lead to disqualification.',
          'Participants must bring their own instruments during finals',
        ],
      },
      { heading: 'Judging Criteria:' },
      {
        ul: [
          'Vocal/Instrumental Skill – Clarity, pitch, and technical ability.',
          'Stage Presence – Confidence and engagement with the audience.',
          'Creativity & Originality -Participants who perform their own original compositions in the competition will be awarded extra marks for creativity and originality.',
          'Synchronization (for Bands ) – Cohesion and coordination.',
          'Overall Impact – Audience response and performance quality.',
        ],
      },
      { heading: 'Registration Details:' },
      {
        ul: [
          'Registration can be done by [link]',
          'Registration deadline: 23rd April, 2025',
          'Personal Information Required: Student ID Proof,Address, Institution Details, Category of Participation',
        ],
      },
      { heading: 'Contact Information' },
      {
        ul: [
          'Sucheta Majumdar - 81329 48780',
          'Souvik Pal - 70056 66372',
          'Email: malhar.music.nita@gmail.com',
          'Instagram/Facebook Page: linktr.ee',
        ],
      },
    ],
  },
  {
    id: 6,
    type: 'solo',
    slug: 'melody-war',
    name: 'Melody War',
    subtitle: 'Solo Instrumental',
    badges: ['solo'],
    image: {
      src: '/images/contests/generic-poster.png',
    },
    deadline: getDateFromIST('2025-04-23', '23:59:00'),
    description: [
      {
        p: 'Prelims : 2 minutes. Finals : 5 minutes (including setup time)',
      },
      {
        p: 'Participants must bring their own instruments during finals.',
      },
    ],
    instructions: [
      { heading: 'General Guidelines' },
      {
        ul: [
          'The competition is open to undergraduate and postgraduate students from recognized colleges and universities.',
          'Participants selected from the online prelims will qualify for the finals.',
          'All participants must carry valid college ID cards for verification(during finals).',
          'Participants must report one hour before their scheduled performance time.',
          'Any kind of indecent language, offensive gestures, or inappropriate behavior will lead to disqualification.',
          'Participants must bring their own instruments during finals',
        ],
      },
      { heading: 'Judging Criteria:' },
      {
        ul: [
          'Vocal/Instrumental Skill – Clarity, pitch, and technical ability.',
          'Stage Presence – Confidence and engagement with the audience.',
          'Creativity & Originality -Participants who perform their own original compositions in the competition will be awarded extra marks for creativity and originality.',
          'Synchronization (for Bands ) – Cohesion and coordination.',
          'Overall Impact – Audience response and performance quality.',
        ],
      },
      { heading: 'Registration Details:' },
      {
        ul: [
          'Registration can be done by [link]',
          'Registration deadline: 23rd April, 2025',
          'Personal Information Required: Student ID Proof,Address, Institution Details, Category of Participation',
        ],
      },
      { heading: 'Contact Information' },
      {
        ul: [
          'Sucheta Majumdar - 81329 48780',
          'Souvik Pal - 70056 66372',
          'Email: malhar.music.nita@gmail.com',
          'Instagram/Facebook Page: linktr.ee',
        ],
      },
    ],
  },
  {
    id: 7,
    type: 'solo',
    slug: 'verse-clash',
    name: 'Verse Clash',
    subtitle: 'Freestyle Rap Battle',
    badges: ['solo'],
    image: {
      src: '/images/contests/generic-poster.png',
    },
    deadline: getDateFromIST('2025-04-23', '23:59:00'),
    description: [
      {
        p: 'Prelims : 2 minutes. Finals : 5 minutes(including setup time)',
      },
      {
        p: 'Lyrics improvised at the spot are more prioritized . No physical contacts.excessive vulgarity will be entertained.',
      },
    ],
    instructions: [
      { heading: 'General Guidelines' },
      {
        ul: [
          'The competition is open to undergraduate and postgraduate students from recognized colleges and universities.',
          'Participants selected from the online prelims will qualify for the finals.',
          'All participants must carry valid college ID cards for verification(during finals).',
          'Participants must report one hour before their scheduled performance time.',
          'Any kind of indecent language, offensive gestures, or inappropriate behavior will lead to disqualification.',
          'Participants must bring their own instruments during finals',
        ],
      },
      { heading: 'Judging Criteria:' },
      {
        ul: [
          'Vocal/Instrumental Skill – Clarity, pitch, and technical ability.',
          'Stage Presence – Confidence and engagement with the audience.',
          'Creativity & Originality -Participants who perform their own original compositions in the competition will be awarded extra marks for creativity and originality.',
          'Synchronization (for Bands ) – Cohesion and coordination.',
          'Overall Impact – Audience response and performance quality.',
        ],
      },
      { heading: 'Registration Details:' },
      {
        ul: [
          'Registration can be done by [link]',
          'Registration deadline: 23rd April, 2025',
          'Personal Information Required: Student ID Proof,Address, Institution Details, Category of Participation',
        ],
      },
      { heading: 'Contact Information' },
      {
        ul: [
          'Sucheta Majumdar - 81329 48780',
          'Souvik Pal - 70056 66372',
          'Email: malhar.music.nita@gmail.com',
          'Instagram/Facebook Page: linktr.ee',
        ],
      },
    ],
  },
  {
    id: 8,
    type: 'team',
    slug: 'harmony-showdown',
    name: 'Harmony Showdown',
    subtitle: 'Band Competition',
    badges: ['team'],
    image: {
      src: '/images/contests/generic-poster.png',
    },
    deadline: getDateFromIST('2025-04-23', '23:59:00'),
    description: [
      {
        p: 'A group must consist of max of 6 members.',
      },
      {
        p: 'Prelims : 5 minutes . Final : 20 minutes (including setup time)',
      },
      {
        p: 'Only live music is allowed (no pre-recorded tracks).',
      },
    ],
    instructions: [
      { heading: 'General Guidelines' },
      {
        ul: [
          'The competition is open to undergraduate and postgraduate students from recognized colleges and universities.',
          'Participants selected from the online prelims will qualify for the finals.',
          'All participants must carry valid college ID cards for verification(during finals).',
          'Participants must report one hour before their scheduled performance time.',
          'Any kind of indecent language, offensive gestures, or inappropriate behavior will lead to disqualification.',
          'Participants must bring their own instruments during finals',
        ],
      },
      { heading: 'Judging Criteria:' },
      {
        ul: [
          'Vocal/Instrumental Skill – Clarity, pitch, and technical ability.',
          'Stage Presence – Confidence and engagement with the audience.',
          'Creativity & Originality -Participants who perform their own original compositions in the competition will be awarded extra marks for creativity and originality.',
          'Synchronization (for Bands ) – Cohesion and coordination.',
          'Overall Impact – Audience response and performance quality.',
        ],
      },
      { heading: 'Registration Details:' },
      {
        ul: [
          'Registration can be done by [link]',
          'Registration deadline: 23rd April, 2025',
          'Personal Information Required: Student ID Proof,Address, Institution Details, Category of Participation',
        ],
      },
      { heading: 'Contact Information' },
      {
        ul: [
          'Sucheta Majumdar - 81329 48780',
          'Souvik Pal - 70056 66372',
          'Email: malhar.music.nita@gmail.com',
          'Instagram/Facebook Page: linktr.ee',
        ],
      },
    ],
    allowedTeamSize: { min: 1, max: 6 },
  },
]