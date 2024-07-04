// import { UserButton } from "@clerk/nextjs";
import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import Noresult from "@/components/shared/Noresult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import React from "react";
const questions = [
  {
    _id: "1",
    title: "Cascading deletes in SQLAlchemy?",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" },
    ],
    author: {
      _id: "1",
      clerkId: "clerk-1",
      name: "Santhosh",
      picture: "url-to-picture", // Replace with the actual URL
    },
    upvotes: 80,
    views: 100,
    answers: [
      {
        _id: "1",
        content: "Answer 1 content",
        author: {
          _id: "2",
          clerkId: "clerk-2",
          name: "Author 1",
          picture: "url-to-author1-picture", // Replace with the actual URL
        },
        createdAt: new Date("2024-04-01"),
      },
      {
        _id: "2",
        content: "Answer 2 content",
        author: {
          _id: "3",
          clerkId: "clerk-3",
          name: "Author 2",
          picture: "url-to-author2-picture", // Replace with the actual URL
        },
        createdAt: new Date("2024-04-01"),
      },
    ],
    createdAt: new Date("2024-04-01"),
    clerkId: null,
  },
  {
    _id: "2",
    title: "How to center a div",
    tags: [
      { _id: "3", name: "html" },
      { _id: "4", name: "css" },
    ],
    author: {
      _id: "1",
      clerkId: "clerk-1",
      name: "Santhosh",
      picture: "url-to-picture", // Replace with the actual URL
    },
    upvotes: 80,
    views: 100,
    answers: [
      {
        _id: "3",
        content: "Answer 1 content",
        author: {
          _id: "4",
          clerkId: "clerk-4",
          name: "Author 3",
          picture: "url-to-author3-picture", // Replace with the actual URL
        },
        createdAt: new Date("2024-04-01"),
      },
      {
        _id: "4",
        content: "Answer 2 content",
        author: {
          _id: "5",
          clerkId: "clerk-5",
          name: "Author 4",
          picture: "url-to-author4-picture", // Replace with the actual URL
        },
        createdAt: new Date("2024-04-01"),
      },
    ],
    createdAt: new Date("2024-04-01"),
    clerkId: null,
  },
];

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search  for questions..."
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <Noresult
            title="There is no quesiton to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
