import React, { useState } from "react";
import CourseCard from "./CourseCard";
import styles from "./CourseCardList.module.css";

const courses = [
  {
    slug: "figma",
    title: "Learn Figma - UI/UX Design Essential Training",
    lessons: 6,
    students: 198,
    level: "Beginner",
    ratingImage: rating4,
  },
  {
    slug: "ai",
    title: "Introduction to Artificial Intelligence",
    lessons: 8,
    students: 220,
    level: "Intermediate",
    ratingImage: rating4,
  },
  {
    slug: "ml",
    title: "Machine Learning Fundamentals",
    lessons: 10,
    students: 150,
    level: "Intermediate",
    ratingImage: rating4,
  },
  // Add more courses here
];

const additionalCourses = [
  {
    slug: "cyber-security",
    title: "Cybersecurity Essentials",
    lessons: 5,
    students: 120,
    level: "Beginner",
    ratingImage: rating4,
  },
  {
    slug: "data-science",
    title: "Data Science and Analytics",
    lessons: 12,
    students: 250,
    level: "Advanced",
    ratingImage: rating4,
  },
  {
    slug: "iot",
    title: "Internet of Things (IoT) Fundamentals",
    lessons: 7,
    students: 180,
    level: "Intermediate",
    ratingImage: rating4,
  },
  {
    slug: "auto-cad",
    title: "AutoCAD Essentials",
    lessons: 9,
    students: 170,
    level: "Intermediate",
    ratingImage: rating4,
  },
  {
    slug: "catia",
    title: "CATIA Design and Modeling",
    lessons: 8,
    students: 160,
    level: "Intermediate",
    ratingImage: rating4,
  },
  {
    slug: "sap",
    title: "SAP ERP Fundamentals",
    lessons: 10,
    students: 190,
    level: "Intermediate",
    ratingImage: rating4,
  },
  {
    slug: "oracle",
    title: "Oracle Database Administration",
    lessons: 11,
    students: 210,
    level: "Intermediate",
    ratingImage: rating4,
  },
  {
    slug: "big-data",
    title: "Big Data Analytics",
    lessons: 9,
    students: 180,
    level: "Intermediate",
    ratingImage: rating4,
  },
  {
    slug: "java",
    title: "Java Programming for Beginners",
    lessons: 8,
    students: 200,
    level: "Beginner",
    ratingImage: rating4,
  },
  {
    slug: "web-development",
    title: "Web Development Fundamentals",
    lessons: 10,
    students: 220,
    level: "Beginner",
    ratingImage: rating4,
  },
  {
    slug: "power-bi",
    title: "Power BI for Data Visualization",
    lessons: 7,
    students: 150,
    level: "Intermediate",
    ratingImage: rating4,
  },
];

const CourseCardList = () => {
  const [visibleCourses, setVisibleCourses] = useState(3);

  const showMoreCourses = () => {
    // Increment the number of visible courses by 3
    setVisibleCourses((prevVisibleCourses) => prevVisibleCourses + 3);
  };

  return (
    <div className={styles.course_card_list}>
      {[...courses, ...additionalCourses.slice(0, visibleCourses)].map(
        (course) => (
          <CourseCard key={course.slug} {...course} />
        )
      )}
      {visibleCourses < additionalCourses.length && (
        <button onClick={showMoreCourses} className={styles.view_more_button}>
          View More Courses
        </button>
      )}
    </div>
  );
};

export default CourseCardList;
