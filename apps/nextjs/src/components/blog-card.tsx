import { FollowerPointerCard } from "@saasfly/ui/following-pointer";

export function XBlogArticle() {
  return (
    <div className="w-80">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={blogContent.author}
            avatar={blogContent.authorAvatar}
          />
        }
      >
        <div className="relative h-full overflow-hidden transition duration-200 bg-white border group rounded-2xl border-zinc-100 hover:shadow-xl">
          <div className="relative w-full overflow-hidden bg-gray-100 rounded-tl-lg rounded-tr-lg aspect-w-16 aspect-h-10 xl:aspect-w-16 xl:aspect-h-10">
            <img
              src={blogContent.image}
              alt="thumbnail"
              className={`transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl `}
            />
          </div>
          <div className="p-4 ">
            <h2 className="my-4 text-lg font-bold text-zinc-700">
              {blogContent.title}
            </h2>
            <h2 className="my-4 text-sm font-normal text-zinc-500">
              {blogContent.description}
            </h2>
            <div className="flex flex-row items-center justify-between mt-10">
              <span className="text-sm text-gray-500">{blogContent.date}</span>
              <a 
                href={`/blog/how-w3w-delivery-is-evolving-the-delivery-industry-and-marketing`}
                className="relative z-10 block px-6 py-2 text-xs font-bold text-white bg-black rounded-xl"
              >
                Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}

const blogContent = {
  slug: "Making-Sense-of-React-Server-Components",
  author: "Nextify",
  date: "26th March, 2024",
  title: "Making Sense of React Server Components",
  description:
    "So, here's something that makes me feel old: React celebrated its 10th birthday this year!",
  image:
    "https://cdn.sanity.io/images/tpb4obti/production/50c13f886c039225be4e7e99023b8f1e2b4161b9-1792x1024.png",
  authorAvatar:
    "https://pbs.twimg.com/profile_images/1766283284370305025/QKXW5W3M_400x400.jpg",
};

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex items-center space-x-2">
    <img
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="border-2 border-white rounded-full"
    />
    <p>{title}</p>
  </div>
);
