# BIT-Book

## Overview

Books management CRUD project.

## Tech Stack

- **Next.js 14** (Use app router and server action for data mutation)
- **Postgresql** (Database)
- **Tailwind + ShadcnUI** (UI Component)

## Features

1. **New Book Creation Form**: Users can create new books, including image uploading to cloud.

2. **Book Edit and Delete Form**: Users can edit and delete existing books.

3. **Book Listing Page**: Display existing books in a DataTable format that can sort, filter.

4. **Book List JSON API**
   - URL for API endpoint with book list JSON `/api/books`.

## Setup and Installation for locally

Firstly, install dependencies and setup env file like `.env.example`

```bash
npm install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
