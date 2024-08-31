import { getIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { LinkCta } from "./_components";

const ExternalLinkIcon = getIcon("externalLink");
const EmailIcon = getIcon("email");
const LinkedInIcon = getIcon("linkedIn");
const BlogIcon = getIcon("page");

const Home = () => {
  return (
    <div className="flex flex-col gap-48">
      <div className="bg-accent h-60 relative">
        <div className="absolute h-52 w-52 md:h-60 md:w-60 rounded-full bg-accent -bottom-20 left-1/2 -translate-x-1/2 border-background border-4 overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dxy9lisdq/image/upload/v1725086918/varchasvipandey.com/yum57z41hnx4s0bshtrk.png"
            alt="Varchasvi Pandey"
            height={360}
            width={200}
            className="absolute top-2 left-2"
          />
        </div>
      </div>

      <section className="container flex flex-col gap-2 items-center">
        <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl text-center">
          <strong className="text-primary">Varchasvi</strong> Pandey
        </h1>
        <p className="max-w-80 text-center content-font md:text-base">
          building software across wide range of platforms. Sharing the technical journey with everyone here
        </p>
      </section>

      <section className="flex flex-col md:flex-row md:items-center gap-16 container">
        <div className="flex-1 relative flex justify-end">
          <div className="h-[32rem] w-[24rem] bg-accent relative">
            <Image
              src="https://res.cloudinary.com/dxy9lisdq/image/upload/v1725112089/varchasvipandey.com/v7wzpsnjnsn8snpybaca.jpeg"
              alt="Varchasvi Pandey"
              className="absolute"
              fill
              objectFit="cover"
            />
            <div className="h-[32rem] w-[24rem] bg-secondary absolute top-4 -left-4 -z-10"></div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="content-heading-font">
              i develop <strong className="text-primary">applications</strong>
            </h2>
            <p className="content-font">using industry level technologies, achieving business goals</p>
          </div>

          <section className="w-full flex flex-row gap-8 items-center rounded-xl">
            <div className="shrink-0">
              <Image
                src="https://res.cloudinary.com/dxy9lisdq/image/upload/v1725089231/varchasvipandey.com/efbw5muphounvgw4bvg7.png"
                alt="NextJS"
                width={80}
                height={80}
              />
            </div>
            <div className="shrink-0">
              <Image
                src="https://res.cloudinary.com/dxy9lisdq/image/upload/v1725089232/varchasvipandey.com/vn8dzquziavcvedwhzf8.webp"
                alt="React Native"
                width={80}
                height={80}
              />
            </div>
            <div className="shrink-0">
              <Image
                src="https://res.cloudinary.com/dxy9lisdq/image/upload/v1725089232/varchasvipandey.com/kfwyfctejlwokq1gwhs8.png"
                alt="NestJS"
                width={80}
                height={80}
              />
            </div>
            <div className="shrink-0">
              <Image
                src="https://res.cloudinary.com/dxy9lisdq/image/upload/v1725089580/varchasvipandey.com/nj8skmj6yjlgfpftveqw.png"
                alt="TailwindCSS"
                width={80}
                height={80}
              />
            </div>
            <div className="shrink-0">
              <Image
                src="https://res.cloudinary.com/dxy9lisdq/image/upload/v1725089231/varchasvipandey.com/tvkq0jfobtx3ff0xpfje.png"
                alt="Figma"
                width={80}
                height={80}
              />
            </div>
          </section>

          <section className="flex flex-row gap-8">
            <div className="p-8 flex flex-col gap-4 items-center bg-accent">
              <h3 className="text-primary">years of experience</h3>
              <p className="text-5xl font-semibold text-secondary">4+</p>
            </div>
            <div className="p-8 flex flex-col gap-4 items-center bg-accent">
              <h3 className="text-primary">applications live</h3>
              <p className="text-5xl font-semibold text-secondary">42</p>
            </div>
          </section>
        </div>
      </section>

      <section className="container flex flex-row justify-center">
        <div className="max-w-[50rem] flex flex-row items-center gap-8 p-8 border-2 border-primary/10">
          <div>
            <Image
              src="https://res.cloudinary.com/dxy9lisdq/image/upload/v1725118412/varchasvipandey.com/t3pj8dajqexbbl03gij6.png"
              alt="Alyve Health"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="content-heading-font">
              leading the frontend at <strong className="text-primary">Alyve Health</strong>
            </h3>
            <p className="content-font">we provide cashless experience for preventive care, medical experties and everything in between</p>
            <Button className="self-start" asChild>
              <Link href="https://alyve.health" target="_blank">
                Learn More <ExternalLinkIcon className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container flex md:flex-row items-center gap-8">
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-5xl font-semibold text-primary">connect</h2>
          <p className="content-font">
            collaboration is where the magic happens—build something together, get tailored advice, find a freelance support or just say hi!
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <LinkCta
            href="mailto:developer.varchasvi@gmail.com"
            label={
              <>
                <EmailIcon className="h-6 w-6" /> send me an email
              </>
            }
          />
          <LinkCta
            href="https://linkedin.com/in/varchasvipandey"
            label={
              <>
                <LinkedInIcon className="h-6 w-6" /> connect on LinkedIn
              </>
            }
          />
          <LinkCta
            href="https://medium.com/@varchasvipandey"
            label={
              <>
                <BlogIcon className="h-6 w-6" /> read tech blogs
              </>
            }
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
