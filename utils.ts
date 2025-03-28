"use server";

import Parser from "rss-parser";

type FeedItem = {
  creator: string;
  title: string;
  link: string;
  pubDate: string;
  content: string; // Assuming content is a string
  contentSnippet: string; // Assuming contentSnippet is available
};

type Feed = {
  items: FeedItem[];
  title: string;
  description: string;
  rssLink: string;
  srcLink: string;
};

const fetchRssContent = async () => {
  let allArticles: Feed; // Initialize articles as an empty object
  try {
    const response = await fetch("https://shreyasr.hashnode.dev/rss.xml");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const body = await response.text();

    const parser = new Parser();
    const feed = await parser.parseString(body);

    allArticles = {
      rssLink: "https://shreyasr.hashnode.dev/rss.xml",
      srcLink: feed.link ?? "",
      title: feed.title ?? "Feed reader",
      description: feed.description ?? "",
      items: feed.items.map((item) => ({
        creator: item.creator || "Unknown",
        title: item.title || "No title",
        link: item.link || "#",
        pubDate: item.pubDate || "",
        content: item.content || "",
        contentSnippet: item.contentSnippet || "",
      })),
    };
  } catch (err: any) {
    console.error(
      `Failed to fetch RSS feed`,
      err || "Unknown error",
    );

    allArticles = {
      items: [],
      title: "",
      description: "",
      rssLink: "",
      srcLink: "",
    }; // handle error by setting empty feed
  }
  return allArticles;
};

export { fetchRssContent };
