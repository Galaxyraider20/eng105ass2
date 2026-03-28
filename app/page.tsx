"use client";

import { useState } from "react";

const photos = [
  "01-obj-19.jpg",
  "02-obj-24.jpg",
  "03-obj-25.jpg",
  "05-obj-32.jpg",
  "06-obj-33.jpg",
  "07-obj-39.jpg",
  "08-obj-40.jpg",
  "09-obj-45.jpg",
  "10-obj-46.jpg",
  "11-obj-52.jpg",
  "12-obj-59.jpg",
  "13-obj-64.jpg",
].map((name, index) => ({
  src: `/photos/web/${name}`,
  alt: `Photo from the A Mountain essay, frame ${index + 1}`,
}));

const photoMap = Object.fromEntries(
  photos.map((photo) => [photo.src.split("/").pop()!, photo]),
);

const pickPhotos = (...names: string[]) =>
  names.map((name) => photoMap[name]).filter(Boolean);

const fixText = (text: string) =>
  text
    .replaceAll("Ã¢â‚¬â„¢", "'")
    .replaceAll("Ã¢â‚¬Ëœ", "'")
    .replaceAll("Ã¢â‚¬Å“", '"')
    .replaceAll("Ã¢â‚¬Â", '"')
    .replaceAll("Ã¢â‚¬â€œ", "-")
    .replaceAll("â€™", "'")
    .replaceAll("â€˜", "'")
    .replaceAll("â€œ", '"')
    .replaceAll("â€", '"')
    .replaceAll("â€“", "-");

function PhotoCard({
  src,
  alt,
  label,
  className,
  imageClassName,
  loading = "lazy",
  onExpand,
}: {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  imageClassName: string;
  loading?: "eager" | "lazy";
  onExpand?: (image: { src: string; alt: string }) => void;
}) {
  return (
    <figure
      className={`photo-card group relative rounded-[1.65rem] border border-white/12 bg-[rgba(22,18,16,0.92)] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.32)] ${className ?? ""}`}
    >
      <div className="overflow-hidden rounded-[1.05rem]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading={loading}
          className={`${imageClassName} w-full rounded-[1.05rem] object-cover transition duration-500 group-hover:scale-[1.04]`}
        />
      </div>

      <button
        type="button"
        aria-label={`Expand ${alt}`}
        onClick={() => onExpand?.({ src, alt })}
        className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[rgba(20,14,10,0.38)] text-stone-100 backdrop-blur-sm transition hover:bg-[rgba(20,14,10,0.58)]"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 3H3v5" />
          <path d="M16 3h5v5" />
          <path d="M21 16v5h-5" />
          <path d="M3 16v5h5" />
          <path d="m3 8 6-5" />
          <path d="m15 3 6 5" />
          <path d="m21 16-6 5" />
          <path d="m9 21-6-5" />
        </svg>
      </button>

      {label ? (
        <figcaption className="px-2 pb-1 pt-3 text-[0.68rem] uppercase tracking-[0.26em] text-stone-500">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}

const sections = [
  {
    number: "01",
    title: "What A Mountain Carries",
    eyebrow: "History",
    copy: [
      `The Tempe Butte, or â€˜A mountainâ€™ is a flat topped hill thatâ€™s near ASU. Interestingly, the big gold A on the mountain didnâ€™t always used to be an A. Initially it was a N, and the "N" became a "T," as Tempe Normal School changed its name to Tempe State Teachers College. Finally it was changed to â€œAâ€ to represent the current name, Arizona state university.`,
    ],
    photos: pickPhotos("02-obj-24.jpg", "01-obj-19.jpg"),
  },
  {
    number: "02",
    title: "The Trail Begins Quietly",
    eyebrow: "Trailhead",
    copy: [
      `The hike starts off near the light rail station, which is quite empty. This photo was taken around 3 am in the night. We can see the very base of the trail and the stuff surrounding it. We can see that everything is very brightly lit up despite it not being in use. The stadium’s light is shining down brightly on the empty field inside it. Same goes for the light rail, which makes its last trip at 11pm. Let us start the climb.`,
    ],
    photos: pickPhotos("03-obj-25.jpg", "05-obj-32.jpg"),
  },
  {
    number: "03",
    title: "Small Signs of Care",
    eyebrow: "Ascent",
    copy: [
      `There is a resting spot so the people who are hiking can catch their breath before continuing. There are also trash cans along the path so people donâ€™t throw their trash on the ground. Despite this, some trash can still be seen along the path! The lower sections of this trail do not have a lot of safety measures, so if someone is not careful, they might end up getting stabbed by cactuses!`,
    ],
    photos: pickPhotos("07-obj-39.jpg", "08-obj-40.jpg"),
  },
  {
    number: "04",
    title: "A Comfort Place",
    eyebrow: "Personal Space",
    copy: [
      `I was always reluctant to come here earlier, because I had heard that it was a very short hike, and I didn’t think it was worth it. But one night I was bored and decided to go for a hike, and I’m really glad I made that choice. I saw a rough path to go higher than the normal trail would allow, and I decided to follow it. I found a really nice spot, with an amazing view. Since then, this space has become a place for me to wind down after a stressful day. It is a very calming experience to just sit there and listen to music while also cooling off after the hike. It has become my comfort place.`,
    ],
    photos: pickPhotos("09-obj-45.jpg", "10-obj-46.jpg"),
  },
  {
    number: "05",
    title: "A Social Summit",
    eyebrow: "Shared View",
    copy: [
      `Surprisingly, this hike is a very social spot. I am surprised by the amount of people who are also here, often hanging out with friends or family. Iâ€™ve noticed this at a lot of varying times! From sunset all the way till 3 am, I always find some people still up here, some taking in the view, while some chatting with their friends. On the right hand side someone is on their phone, with such a beautiful view right in front of them. If you click on the zoom icon on the photo on the right, you can see a baby on a stroller-type mechanism, and their family standing near the edge, talking to people. This shows how people use this spot very differently. Some of them are using it to hang out with their friends, some of them are here for the hike, some of them are here for the amazing view, while some of them are here to spend some alone time. `,
      ],
    photos: pickPhotos("11-obj-52.jpg"),
  },
  {
    number: "06",
    title: "City Lights, Empty Streets",
    eyebrow: "At The Top",
    copy: [
      `Finally, this is the view from the top. There is intense lighting all over the city and it is very bright, even though it is 3 am. Even though the streets are pretty empty, and a lot of people are in their homes sleeping, from the top it looks like the city is bustling because of all the lights! The view is absolutely stunning, which is definitely a part of the reason people visit! On the other side, Tempe town lake is also visible which is a popular hangout spot for students. In conclusion, a mountain acts like an all in one spot where people come to escape the city and be alone, enjoy the view with their friends, or maybe just doing their own thing!`,
    ],
    photos: pickPhotos("12-obj-59.jpg", "01-obj-19.jpg"),
  },
] as const;

function PhotoStrip({
  title,
  images,
  onExpand,
}: {
  title: string;
  images: { src: string; alt: string }[];
  onExpand?: (image: { src: string; alt: string }) => void;
}) {
  const gridClass =
    images.length === 1
      ? "grid-cols-1"
      : images.length === 2
        ? "grid-cols-1 sm:grid-cols-2"
        : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3";

  return (
    <div className={`grid gap-4 ${gridClass}`}>
      {images.map((image, index) => (
        <PhotoCard
          key={`${title}-${image.src}`}
          src={image.src}
          alt={image.alt}
          label={`${title} / frame ${String(index + 1).padStart(2, "0")}`}
          imageClassName="h-[280px] sm:h-[320px]"
          onExpand={onExpand}
          className={`${
            images.length >= 3 && index === 0 ? "sm:col-span-2" : ""
          }`}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const [expandedPhoto, setExpandedPhoto] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <main className="relative overflow-hidden pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04),transparent_18%,transparent_82%,rgba(255,255,255,0.03))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] bg-[radial-gradient(circle_at_top,_rgba(219,150,82,0.18),_transparent_58%)]" />
      <div className="pointer-events-none absolute left-[-8rem] top-80 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(198,126,69,0.12),_transparent_65%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-8rem] top-32 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(162,86,41,0.12),_transparent_65%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-[34rem] h-px bg-[linear-gradient(90deg,transparent,rgba(255,244,230,0.10),transparent)]" />

      <section className="mx-auto flex w-full max-w-7xl flex-col px-6 pb-18 pt-8 sm:px-10 lg:px-12">
        <div className="grid grid-cols-3 items-center border-b border-white/10 pb-4 text-[0.72rem] uppercase tracking-[0.32em] text-stone-400">
          <p>Photo Essay</p>
          <p className="text-center">ENG 105</p>
          <p className="text-right">Tempe, Arizona</p>
        </div>

        <div className="grid items-center gap-10 pb-8 pt-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:pt-18">
          <div className="max-w-3xl space-y-7">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">
                Rachit Miharia
              </p>
              <h1 className="font-[family:var(--font-display)] text-6xl leading-[0.92] text-stone-100 sm:text-7xl lg:text-[7.25rem]">
                A Mountain
              </h1>
              <div className="hero-rule flex items-center gap-4 pt-2">
                <span className="h-px w-24 bg-white/15" />
                <span className="text-[0.7rem] uppercase tracking-[0.28em] text-stone-500">
                  Tempe at night
                </span>
              </div>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-stone-300 sm:text-[1.22rem]">
              A photo essay about a place that can feel public and private at
              the same time: crowded for some people, calming for others, and
              unexpectedly alive even in the middle of the night.
            </p>

            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-md sm:p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-stone-500">
                Thesis Statement
              </p>
              <p className="mt-4 font-[family:var(--font-display)] text-[2rem] leading-tight text-stone-100 sm:text-[2.5rem]">
                While this hike is a social spot for many people, for me
                personally, it is the opposite.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-stone-300">
                When I've had a hard day, I come here alone to cool
                off, and just relax with a nice view and music playing through
                my headphones. This has become by comfort place and through this essay,
                I hope to show you why.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 hidden h-24 w-24 rounded-full border border-white/10 bg-white/6 blur-sm lg:block" />
            <div className="grid grid-cols-2 gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-md">
              {photos.slice(0, 4).map((photo, index) => (
                <PhotoCard
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  imageClassName={index === 0 ? "h-[21rem]" : "h-[12rem]"}
                  onExpand={setExpandedPhoto}
                  className={`rounded-[1.75rem] border-white/14 bg-[rgba(24,19,17,0.94)] ${
                    index === 0 ? "col-span-2" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 pt-2 sm:px-10 lg:px-12">
        {sections.map((section) => (
          <article
            key={section.number}
            className="section-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.24)] backdrop-blur-md sm:p-7 lg:p-8"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,rgba(212,143,79,0.82),rgba(255,214,160,0.38),transparent)]" />
            <div className="pointer-events-none absolute right-6 top-6 h-20 w-20 rounded-full border border-white/6 bg-[radial-gradient(circle,rgba(255,255,255,0.10),transparent_70%)]" />
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-300/20 bg-[linear-gradient(180deg,rgba(90,62,39,0.88),rgba(46,33,23,0.95))] text-lg font-semibold text-amber-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    {section.number}
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-stone-500">
                      {section.eyebrow}
                    </p>
                    <h2 className="mt-2 font-[family:var(--font-display)] text-3xl leading-tight text-stone-100 sm:text-4xl">
                      {section.title}
                    </h2>
                  </div>
                </div>

                <div className="space-y-5 text-[1.02rem] leading-8 text-stone-300 sm:text-[1.08rem]">
                  {section.copy.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="whitespace-pre-line first-letter:mr-1 first-letter:font-[family:var(--font-display)] first-letter:text-4xl first-letter:leading-none first-letter:text-stone-100"
                    >
                      {fixText(paragraph)}
                    </p>
                  ))}
                </div>
              </div>

              <div className="lg:pl-2">
                <PhotoStrip
                  title={section.title}
                  images={section.photos}
                  onExpand={setExpandedPhoto}
                />
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pt-14 sm:px-10 lg:px-12">
        <div className="rounded-[2.5rem] bg-[linear-gradient(135deg,#251913,#3d271b)] px-6 py-12 text-stone-100 shadow-[0_30px_100px_rgba(35,24,18,0.35)] sm:px-10 sm:py-16">
          <p className="text-base uppercase tracking-[0.32em] text-amber-200/80 sm:text-lg">
            Closing Thoughts
          </p>
          <p className="mt-5 w-full font-[family:var(--font-display)] text-2xl leading-tight sm:text-4xl sm:leading-[1.08]">
            Hopefully, through this essay, I've convinced you that this hike can be whatever you want it to be. It doesn't have to just be a hike you do for exercise. For me it is a comfort space, where I relax and listen to music. But for many others, it is a social spot to hangout with your friends and family, or even just spend time on your phone!
          </p>
        </div>
      </section>

      <div
        className={`fixed inset-0 z-50 hidden items-center justify-center bg-[rgba(8,6,5,0.58)] p-6 transition duration-300 md:flex ${
          expandedPhoto
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setExpandedPhoto(null)}
      >
        {expandedPhoto ? (
          <div
            className="relative flex max-w-[min(88vw,64rem)] items-start justify-center rounded-[1.5rem] bg-[rgba(17,12,9,0.74)] p-3 shadow-[0_32px_120px_rgba(0,0,0,0.48)] backdrop-blur-md"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close expanded image"
              onClick={() => setExpandedPhoto(null)}
              className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[rgba(20,14,10,0.55)] text-stone-100 backdrop-blur-sm transition hover:bg-[rgba(20,14,10,0.75)]"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M6 6 18 18" />
                <path d="M18 6 6 18" />
              </svg>
            </button>
            <div className="inline-flex overflow-hidden rounded-[1.1rem] border border-white/14 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_50%),rgba(10,8,6,0.98)] shadow-[0_18px_60px_rgba(0,0,0,0.38)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={expandedPhoto.src}
                alt={expandedPhoto.alt}
                loading="lazy"
                className="block max-h-[82vh] max-w-[calc(88vw-2.5rem)] w-auto object-contain"
              />
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}
