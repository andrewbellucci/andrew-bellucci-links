import PastProjectListItem from "./PastProjectListItem";
import PrompIcon from "./icons/PrompIcon";
import SneakerbaseIcon from "./icons/SneakerbaseIcon";
import MarbleIcon from "./icons/MarbleIcon";

export default function PastProjectsList() {
  return (
    <ul className="space-y-[15px]">
      <PastProjectListItem
        title="Promp"
        description="Promp was an easy-to-use AI prompt marketplace. It’s the perfect platform for creatives and sellers to make some cash from their unique prompts without giving away it's valuable information. It provides a super user-friendly interface to build prompts, and utilize them without wasting a lick of time, making it a breeze for end-users."
        techDetails={[
          "I used Amazon Web Services for setting everything up and making sure it runs without any hiccups. To handle the communication between server and client, we're using something called tRPC. All of this is written in TypeScript and MySQL to ensure a solid and secure performance.",
          "The visible portions of the platform are built using React and Next.js. These two help make the platform super fast and always up-to-date. The search engine was based on Typesense, which gave us a reliable search.",
          "To wrap things up in a pretty package, I used Tailwind CSS, which allowed me to scale the designs across multiple components without naming conflicts or coming up with naming conventions. It also helped me keep the bundle size of the styles down, which is also a plus.",
        ]}
        images={[
          {
            previewSrc: "/img/promp-market-1-preview.jpg",
            src: "/img/promp-market-1.jpg",
          },
          {
            previewSrc: "/img/promp-playground-1-preview.jpg",
            src: "/img/promp-playground-1.jpg",
          },
          {
            previewSrc: "/img/promp-purchase-1-preview.jpg",
            src: "/img/promp-purchase-1.jpg",
          }
        ]}
      >
        <PrompIcon width={20} height={15} />
      </PastProjectListItem>
      <PastProjectListItem
        title="Marble"
        description="Marble was a cool platform for managing your exclusive online community. It uses tokenization on the Ethereum blockchain. This means members get special tokens that give them exclusive access. It's like having a VIP pass to your favorite club. Plus, it's not just for online communities. We've included features for public and private events too."
        techDetails={[
          "Ethereum and Solidity are used at the heart for the whole tokenization process, letting you manage the access to your digital communities with ease.",
          "AWS had everything hosted and running smoothly, while Golang on the gin framework handle the many interconnecting parts of the project, keeping everything in our microservice architecture fast and reliable.",
          "Just like some of my other projects, Marble uses TypeScript, React, Next.js, Tailwind CSS for styling, and MySQL on the backend of the webapp.",
        ]}
        images={[
          {
            previewSrc: "/img/marble-business-dash-1-preview.jpg",
            src: "/img/marble-business-dash-1.jpg",
          },
          {
            previewSrc: "/img/marble-business-dash-2-preview.jpg",
            src: "/img/marble-business-dash-2.jpg",
          },
          {
            previewSrc: "/img/marble-consumer-dash-1-preview.jpg",
            src: "/img/marble-consumer-dash-1.jpg",
          },
          {
            previewSrc: "/img/marble-consumer-dash-2-preview.jpg",
            src: "/img/marble-consumer-dash-2.jpg",
          },
          {
            previewSrc: "/img/marble-consumer-dash-3-preview.jpg",
            src: "/img/marble-consumer-dash-3.jpg",
          },
          {
            previewSrc: "/img/marble-consumer-dash-4-preview.jpg",
            src: "/img/marble-consumer-dash-4.jpg",
          }
        ]}
      >
        <MarbleIcon width={20} height={20} />
      </PastProjectListItem>
      <PastProjectListItem
        title="Sneakerbase"
        description="Sneakerbase was a comprehensive marketplace for sneaker enthusiasts and casual buyers alike. Its primary function is to enable users to discover a variety of new sneakers, compare market prices, and obtain suggestions for related sneaker styles."
        techDetails={[
          "Built on a microservices architecture using Node.js, the project used a REST API based on Fastify, along with a versatile cron scheduler that manages different tasks such as sneaker discovery, image processing, price scraping, and daily sneaker selections. Service communication is handled by Redis. The backend of the application is powered by MySQL and is written in TypeScript to ensure a robust and scalable product. The search functionality is based on Typesense, which allowed me to create an almost instant search experience.",
          "React and Next.js were used on the frontend to facilitate Server Side Generation (SSG) for rapid page loading, Server Side Rendering (SSR), and Incremental Static Regeneration (ISR), all offering rapid loading experiences. The UI is styled with Tailwind CSS, which allowed me to easily create a lightweight and scalable frontend.",
        ]}
      >
        <SneakerbaseIcon width={20} height={20} />
      </PastProjectListItem>
    </ul>
  );
}