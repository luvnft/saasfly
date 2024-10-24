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
  slug: "how-w3w-delivery-is-evolving-the-delivery-industry-and-marketing",
  author: "Wizard of Hahz",
  date: "26th March, 2024",
  title: "How w3w.delivery is Evolving the Delivery Industry and Marketing",
  description:
    "Exploring w3w.delivery's impact on logistics, marketing strategies, and customer engagement.",
  image:
    "https://i.imgur.com/0wjlxLn.jpeg",
  authorAvatar:
    "https://i.imgur.com/75Gk90N.jpeg",
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
