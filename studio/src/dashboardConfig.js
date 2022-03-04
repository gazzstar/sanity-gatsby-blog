export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6221c5b125a55088dd9ec0ae",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-hyp1hatk",
                  apiId: "a9ca2e03-762a-47da-b2eb-bf75438378c1",
                },
                {
                  buildHookId: "6221c5b0001ceb731d67a65c",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-yft6ekyo",
                  apiId: "549c4e98-6956-4509-a28e-66e98ac917eb",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/gazzstar/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-yft6ekyo.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
