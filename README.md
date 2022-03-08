# Feature: Sutdent Management

| #   | Page            | Description                                       |
| --- | --------------- | ------------------------------------------------- |
| 1   | Login           | Fake login page                                   |
| 2   | Dashboard       | Dashboard: statistics + top students              |
| 3   | Search students | Allow to search, sort, filter and remove students |
| 4   | Add new student | Add new student                                   |
| 5   | Edit a student  | Update student info                               |

## LOGIN

- Fake login (click and store token into local storage)

## ADMIN PAGE

This page will have

- Header on top
- Sidebar on the left
- The main content on the right (based on sub-routing)

## DASHBOARD

Statistics

- Students by gender
- Top students
- ...

## SEARCH STUDENTS

Need to support

- Search students by name
- Filter students by city
- Sort by name, score
- Pagination

Fields on student table:

- ID
- Name
- Gender (either Male or Female)
- Age
- City (populate the name of the city)
- Mark
- Actions (Edit/Remove)

A button to go to Add new student page.

## ADD/EDIT STUDENT

**Student form:**

- Name

  - Text Input
  - Should have at least 2 words
  - Required

- Gender

  - Radio options: Male, Female
  - Required

- Age

  - Number Input
  - Min is 18, Max is 60
  - Optional

- City

  - Select (list loaded from API)
  - Required

- Mark

  - Number Input
  - Optional
  - Min is 0, Max is 10

## PLAN

- UI: Material UI
- Routing: React Router DOM
- Form: React Hook Form v7
- Form Validation: Yup
- Http Client: axios

**Routings:**

- **/login**: Login page
- **/admin**: Master layout for admin page
- **/admin/dashboard**: Dashboard
- **/admin/students**: Search students
- **/admin/sutdents/add**: Add new student
- **/admin/students/:studentId**: Update student info

**Form control:**

- InputField
- SelectField
- RadioGroupField
