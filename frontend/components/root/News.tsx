"use client";

import { CSSProperties, useEffect, useState } from "react";
import Link from "next/link";

import { useLocalStorage } from "@uidotdev/usehooks";
import ClipLoader from "react-spinners/ClipLoader";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import Heading from "../ui/Heading";

type NewsType = {
  title: string;
  content: string;
  url: string;
  imageUrl: string;
  createdAt: Date;
};

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "slate",
};

const News = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [newsItems, setNewsItems] = useLocalStorage<NewsType[]>("newsItems", []);

  useEffect(() => {
    const fetchNewsItems = async () => {
      try {
        if (newsItems.length === 0) {
          setLoading(true);
        }

        const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/api/news");
        const newNewsItems = await res.json();
        setNewsItems(newNewsItems);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsItems();
  }, []);

  return (
    loading ? (
      <ClipLoader
        loading={loading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
      />
    ) : (
      <div>
        <Heading label="お知らせ" />
        <div className="w-11/12 md:w-3/4 lg:w-3/5 xl:w-1/2 mx-auto">
          <List sx={{ width: "100%", bgcolor: "background.paper" }} className="flex flex-col gap-2">
            {newsItems.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map((newsItem) => (
              <ListItem alignItems="flex-start" sx={{ py: 0 }} key={newsItem.title} className="flex flex-col">
                <ListItemText
                  primary={
                    <Typography>
                      ・
                      {newsItem.url ? (
                        <Link href={newsItem.url} target="_blank" className="text-blue-500">
                          {newsItem.title}
                        </Link>
                      ) : (
                        newsItem.title
                      )}
                      （
                      {new Date(newsItem.createdAt).toLocaleString("ja", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                      ）
                    </Typography>
                  }
                />
                <ListItemText
                  sx={{ marginTop: "-5px", paddingLeft: "15px", lineHeight: "0px" }}
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {newsItem.content}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    )
  );
};

export default News;
