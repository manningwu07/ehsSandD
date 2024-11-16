// Modify the datastructure to match the website

// Disclaimers
// DO NOT USE ARRAYS, IF YOU NEED TO, MAKE THE ELEMENTS OBJECTS WITH 1 ATTRBUTES {"paragraph": "insert_text"}[] 
// THIS DOES NOT AFFECT NAVBAR/FOOTER ITEMS
// DOES NOT MOBILE DESIGN ADAPT

// Other helpful things
// src, imageSrc will prompt image uploading
// Links are manually made in the pages (set <Link href ={item.link}>content</Link>)
// It may not render for you when u check it out on the main; thats cuz theres caches. Just trust it works C:
// Updated DataStructure Interface
export interface DataStructure {
  components: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
      link: string;
      cta: string;
    };
  };

  landing: {
    whyJoin: {
      title: string;
      reason: string;
      imageSrc: string;
    };
    whatYouGet: {
      title: string;
      list: {
        paragraph: string;
      }[];
      learnMore: {
        text: string;
        href: string;
      }[];
    };
    testimonials: {
      title: string;
      subtitle: string;
      items: {
        quote: string;
        author: string;
        role: string;
      }[];
    };
    cta: {
      title: string;
      description: string;
      button: {
        text: string;
        href: string;
      };
      imageSrc: string;
    };
  };
  aeroAdvantage: {
    title: string;
    description: string;
    priceText: string;
    locationSection: {
      title: string;
      imageSrc: string;
    };
    teamTitle: string;
    teamMembers: {
      name: string;
      bio: string;
      imageSrc: string;
    }[];
  };
  students: {
    upcomingEvents: {
      date: string;
      title: string;
      description: string;
      time: string;
      buttonText: string;
      details: {
        location: string;
        deadlines: {
          signup: string;
          fees: string;
          drop: string;
        };
        moreInfoLink: string;
        additionalInfo: string;
      };
    }[];
    upcomingDates: {
      date: string;
      event: string;
      type: string;
    }[];
    tournamentInfo: {
      interest: {paragraph: string}[];
      competing: {paragraph: string}[];
      guidelines: {paragraph: string}[];
    };
    resources: {
      href: string;
      text: string;
    }[];
  };
  parents: {
    support: {
      title: string;
      description: string;
      link: string;
    };
    judging: {
      title: string;
      videoDescription: string;
      videoEmbedUrl: string;
      resourcesTitle: string;
      resources: {
        label: string;
        href: string;
      }[];
      trainingVideosTitle: string;
      trainingVideos: string[];
      ballotTitle: string;
      ballotDescription: string;
      ballotImage: string;
      paradigmTitle: string;
      paradigmDescription: string;
      paradigmImage: string;
      tabroomTitle: string;
      tabroomDescription: string;
      tabroomLink: string;
    };
    mentor: {
      title: string;
      videoSrc: string;
      clearanceInstructions: {
        title: string;
        description: string;
      }[];
      additionalLinks: {
        text: string;
        href: string;
      }[];
    };
  };
}
