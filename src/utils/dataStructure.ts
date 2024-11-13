// Modify the datastructure to match the website 

// Disclaimers
// DO NOT USE ARRAYS, IF YOU NEED TO, MAKE THE ELEMENTS OBJECTS WITH 1 ATTRBUTES
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
  pages: {
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
      forms: {
        interest: string[];
        competing: string[];
        guidelines: string[];
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
  };
}

// Updated Transformation Function
export function transformFullContent(fullContent: any): DataStructure {
  return {
    components: {
      hero: {
        title: fullContent.components?.hero?.title || "",
        subtitle: fullContent.components?.hero?.subtitle || "",
        description: fullContent.components?.hero?.description || "",
        link: fullContent.components?.hero?.link || "",
        cta: fullContent.components?.hero?.cta || ""
      }
    },
    pages: {
      landing: {
        whyJoin: {
          title: fullContent.pages?.landing?.whyJoin?.title || "",
          reason: fullContent.pages?.landing?.whyJoin?.reason || "",
          imageSrc: fullContent.pages?.landing?.whyJoin?.imageSrc || ""
        },
        whatYouGet: {
          title: fullContent.pages?.landing?.whatYouGet?.title || "",
          list: (fullContent.pages?.landing?.whatYouGet?.list || []).map((item: any) => ({
            paragraph: item.paragraph || ""
          })),
          learnMore: (fullContent.pages?.landing?.whatYouGet?.learnMore || []).map((link: any) => ({
            text: link.text || "",
            href: link.href || ""
          }))
        },
        testimonials: {
          title: fullContent.pages?.landing?.testimonials?.title || "",
          subtitle: fullContent.pages?.landing?.testimonials?.subtitle || "",
          items: (fullContent.pages?.landing?.testimonials?.items || []).map((item: any) => ({
            quote: item.quote || "",
            author: item.author || "",
            role: item.role || ""
          }))
        },
        cta: {
          title: fullContent.pages?.landing?.cta?.title || "",
          description: fullContent.pages?.landing?.cta?.description || "",
          button: {
            text: fullContent.pages?.landing?.cta?.button?.text || "",
            href: fullContent.pages?.landing?.cta?.button?.href || ""
          },
          imageSrc: fullContent.pages?.landing?.cta?.imageSrc || ""
        }
      },
      aeroAdvantage: {
        title: fullContent.pages?.aeroAdvantage?.title || "",
        description: fullContent.pages?.aeroAdvantage?.description || "",
        priceText: fullContent.pages?.aeroAdvantage?.priceText || "",
        locationSection: {
          title: fullContent.pages?.aeroAdvantage?.locationSection?.title || "",
          imageSrc: fullContent.pages?.aeroAdvantage?.locationSection?.imageSrc || ""
        },
        teamTitle: fullContent.pages?.aeroAdvantage?.teamTitle || "",
        teamMembers: (fullContent.pages?.aeroAdvantage?.teamMembers || []).map((member: any) => ({
          name: member.name || "",
          bio: member.bio || "",
          imageSrc: member.imageSrc || ""
        }))
      },
      students: {
        upcomingEvents: (fullContent.pages?.students?.upcomingEvents || []).map((event: any) => ({
          date: event.date || "",
          title: event.title || "",
          description: event.description || "",
          time: event.time || "",
          buttonText: event.buttonText || "",
          details: {
            location: event.details?.location || "",
            deadlines: {
              signup: event.details?.deadlines?.signup || "",
              fees: event.details?.deadlines?.fees || "",
              drop: event.details?.deadlines?.drop || ""
            },
            moreInfoLink: event.details?.moreInfoLink || "",
            additionalInfo: event.details?.additionalInfo || ""
          }
        })),
        upcomingDates: (fullContent.pages?.students?.upcomingDates || []).map((date: any) => ({
          date: date.date || "",
          event: date.event || "",
          type: date.type || ""
        })),
        forms: {
          interest: fullContent.pages?.students?.forms?.interest || [],
          competing: fullContent.pages?.students?.forms?.competing || [],
          guidelines: fullContent.pages?.students?.forms?.guidelines || []
        },
        resources: (fullContent.pages?.students?.resources || []).map((resource: any) => ({
          href: resource.href || "",
          text: resource.text || ""
        }))
      },
      parents: {
        support: {
          title: fullContent.pages?.parents?.support?.title || "",
          description: fullContent.pages?.parents?.support?.description || "",
          link: fullContent.pages?.parents?.support?.link || ""
        },
        judging: {
          title: fullContent.pages?.parents?.judging?.title || "",
          videoDescription: fullContent.pages?.parents?.judging?.videoDescription || "",
          videoEmbedUrl: fullContent.pages?.parents?.judging?.videoEmbedUrl || "",
          resourcesTitle: fullContent.pages?.parents?.judging?.resourcesTitle || "",
          resources: (fullContent.pages?.parents?.judging?.resources || []).map((res: any) => ({
            label: res.label || "",
            href: res.href || ""
          })),
          trainingVideosTitle: fullContent.pages?.parents?.judging?.trainingVideosTitle || "",
          trainingVideos: fullContent.pages?.parents?.judging?.trainingVideos || [],
          ballotTitle: fullContent.pages?.parents?.judging?.ballotTitle || "",
          ballotDescription: fullContent.pages?.parents?.judging?.ballotDescription || "",
          ballotImage: fullContent.pages?.parents?.judging?.ballotImage || "",
          paradigmTitle: fullContent.pages?.parents?.judging?.paradigmTitle || "",
          paradigmDescription: fullContent.pages?.parents?.judging?.paradigmDescription || "",
          paradigmImage: fullContent.pages?.parents?.judging?.paradigmImage || "",
          tabroomTitle: fullContent.pages?.parents?.judging?.tabroomTitle || "",
          tabroomDescription: fullContent.pages?.parents?.judging?.tabroomDescription || "",
          tabroomLink: fullContent.pages?.parents?.judging?.tabroomLink || ""
        },
        mentor: {
          title: fullContent.pages?.parents?.mentor?.title || "",
          videoSrc: fullContent.pages?.parents?.mentor?.videoSrc || "",
          clearanceInstructions: (fullContent.pages?.parents?.mentor?.clearanceInstructions || []).map((inst: any) => ({
            title: inst.title || "",
            description: inst.description || ""
          })),
          additionalLinks: (fullContent.pages?.parents?.mentor?.additionalLinks || []).map((link: any) => ({
            text: link.text || "",
            href: link.href || ""
          }))
        }
      }
    }
  };
}
