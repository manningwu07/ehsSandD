"use client";

import React, { useState, useEffect } from "react";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Search } from "lucide-react";
import ClassCard from "~/components/cards/classCard";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import lecturesJSON from "~/controlContentHere/lectures/lectures.json";


interface Lecture {
    id: number;
    title: string;
    description: string;
    date: string;
    slidesUrl: string;
    videoUrl: string;
    category: string;
  }

const categories: string[] = lecturesJSON.categories;   
const lectures: Lecture[] = lecturesJSON.lectures;

export default function LecturePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredLectures, setFilteredLectures] = useState<Lecture[]>(lectures);

  useEffect(() => {
    const filterLectures = () => {
      return lectures.filter((lecture) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        const dateObj = new Date(lecture.date);
        const year = dateObj.getFullYear().toString();
        const month = dateObj.toLocaleString('en-US', { month: 'long' }).toLowerCase();
        const day = dateObj.getDate().toString();
  
        const matchesText =
          lecture.title.toLowerCase().includes(lowerCaseSearchTerm) ||
          lecture.description.toLowerCase().includes(lowerCaseSearchTerm);
  
        const matchesDate =
          year.includes(lowerCaseSearchTerm) ||
          month.includes(lowerCaseSearchTerm) ||
          day.includes(lowerCaseSearchTerm);
  
        const matchesCategory =
          selectedCategory === "All" || lecture.category === selectedCategory;
  
        return (matchesText || matchesDate) && matchesCategory;
      });
    };
  
    setFilteredLectures(filterLectures());
  }, [searchTerm, selectedCategory]);
  

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-darkPurple p-8 text-white">
        <h1 className="mb-8 text-center text-4xl font-bold text-gold">
          AstroGaels Lectures
        </h1>

        <div className="mb-8 flex flex-col items-center justify-between md:flex-row">
          <div className="relative mb-4 w-full md:mb-0 md:w-1/3">
            <Input
              type="text"
              placeholder="Search lectures..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-purple border-gold pl-10 text-white z-10"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gold" />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${selectedCategory === category ? "bg-gold text-darkPurple" : "border-gold text-gold"} hover:bg-gold hover:text-darkPurple`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredLectures.map((lecture) => (
            <ClassCard key={lecture.id} lecture={lecture} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
