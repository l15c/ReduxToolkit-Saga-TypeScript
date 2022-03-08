# Feature: Sutdent Management

---

| #   | Page            | Description                                       |
| --- | --------------- | ------------------------------------------------- |
| 1   | Login           | Fake login page                                   |
| 2   | Dashboard       | Dashboard: statistics + top students              |
| 3   | Search students | Allow to search, sort, filter and remove students |
| 4   | Add new student | Add new student                                   |
| 5   | Edit a student  | Update student info                               |

---

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

- <span style="color:orange">Name</span>

  - Text Input
  - Should have at least 2 words
  - Required

- <span style="color:orange">Gender</span>

  - Radio options: Male, Female
  - Required

- <span style="color:orange">Age</span>

  - Number Input
  - Min is 18, Max is 60
  - Optional

- <span style="color:orange">City</span>

  - Select (list loaded from API)
  - Required

- <span style="color:orange">Mark</span>

  - Number Input
  - Optional
  - Min is 0, Max is 10

---

## PLAN

- UI: Material UI
- Routing: React Router DOM
- Form: React Hook Form v7
- Form Validation: Yup
- Http Client: axios

**Routings:**

- <span style="color:orange">/login</span>: Login page
- <span style="color:orange">/admin</span>: Master layout for admin page
- <span style="color:orange">/admin/dashboard</span>: Dashboard
- <span style="color:orange">/admin/students</span>: Search students
- <span style="color:orange">/admin/sutdents/add</span>: Add new student
- <span style="color:orange">/admin/students/:studentId</span>: Update student info

**Form control:**

- InputField
- SelectField
- RadioGroupField

---
