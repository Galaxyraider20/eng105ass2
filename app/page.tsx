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
      `The hike starts off near the light rail station, which is quite empty. We can see the beginning of the trail and the path which leads to the rest of the hike. The path and the plants are contrasted by the building peeking out in the background with red lights.`,
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
      `For me, this is a space to wind down after a stressful day. Just beyond the railing, there a nice quiet spot where not many people show up. It has a very nice view, almost better than the very top, and it is a very calming experience to just sit there and listen to music while also cooling off after the hike. It has become my comfort place.`,
    ],
    photos: pickPhotos("09-obj-45.jpg", "10-obj-46.jpg"),
  },
  {
    number: "05",
    title: "A Social Summit",
    eyebrow: "Shared View",
    copy: [
      `Surprisingly, this hike is a very social spot. I am sometimes surprised by the amount of people who are also here, often hanging out with friends or family. Iâ€™ve noticed this at a lot of varying times! From sunset all the way till 3 am, I always find some people still up here, some taking in the view, while some chatting with their friends. Surprisingly, some of them are even on their phones, with such a beautiful view right in front!`,
    ],
    photos: pickPhotos("11-obj-52.jpg"),
  },
  {
    number: "06",
    title: "City Lights, Empty Streets",
    eyebrow: "At The Top",
    copy: [
      `Finally, this is the view from the top. There is intense lighting all over the city and it is very bright, almost at 1 am. Even though the streets are pretty empty, and a lot of people are in their homes sleeping, from the top it looks like the city is bustling because of all the lights! On the other side, Tempe town lake is also visible which is a popular hangout spot for students. In conclusion, a mountain acts like an all in one spot where people come to escape the city and enjoy the view with their friends.`,
    ],
    photos: pickPhotos("12-obj-59.jpg", "01-obj-19.jpg"),
  },
] as const;

function PhotoStrip({
  title,
  images,
}: {
  title: string;
  images: { src: string; alt: string }[];
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
        <figure
          key={`${title}-${image.src}`}
          className={`photo-card group overflow-hidden rounded-[1.65rem] border border-white/45 bg-white/72 p-2 shadow-[0_24px_80px_rgba(80,52,24,0.12)] ${
            images.length >= 3 && index === 0 ? "sm:col-span-2" : ""
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="h-[280px] w-full rounded-[1.05rem] object-cover transition duration-500 group-hover:scale-[1.035] sm:h-[320px]"
          />
          <figcaption className="px-2 pb-1 pt-3 text-[0.68rem] uppercase tracking-[0.26em] text-stone-500">
            {title} / frame {String(index + 1).padStart(2, "0")}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function Home() {
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
                Final Reflection
              </p>
              <p className="mt-4 font-[family:var(--font-display)] text-[2rem] leading-tight text-stone-100 sm:text-[2.5rem]">
                While this hike is a social spot for many people, for me
                personally, it is the opposite.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-stone-300">
                I come here alone, or maybe with a very close friend to cool
                off, and just relax with a nice view and music playing through
                my headphones.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 hidden h-24 w-24 rounded-full border border-white/10 bg-white/6 blur-sm lg:block" />
            <div className="grid grid-cols-2 gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-md">
              {photos.slice(0, 4).map((photo, index) => (
                <figure
                  key={photo.src}
                  className={`photo-card overflow-hidden rounded-[1.75rem] border border-white/40 bg-white/70 p-2 ${
                    index === 0 ? "col-span-2" : ""
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    className={`w-full rounded-[1.2rem] object-cover ${
                      index === 0 ? "h-[21rem]" : "h-[12rem]"
                    }`}
                  />
                </figure>
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
                <PhotoStrip title={section.title} images={section.photos} />
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
            While this hike is a social spot for many people, for me
            personally, it is the opposite. I come here alone, or maybe with a
            very close friend to cool off, and just relax with a nice view and
            music playing through my headphones.
          </p>
        </div>
      </section>
    </main>
  );
}
