# React Redux CRUD Todo App

A simple **React** project demonstrating **CRUD operations** on users using **Redux Toolkit**, **Thunk middleware**, and **JSONPlaceholder API**. It includes global **error handling** and a **loading spinner**. Styled with plain CSS.

---

## Features

- List users fetched from JSONPlaceholder
- Add, Edit, Delete users
- Global loading spinner during API calls
- Global error banner for API failures
- Redux Toolkit with multiple reducers (`users` + `global`)
- Async actions handled with `createAsyncThunk`
- Middleware for loading and error management
- Plain CSS styling

---

## Tech Stack

- React 18
- Redux Toolkit
- React-Redux
- Axios
- JSONPlaceholder API
- Plain CSS

---

## Project Structure

```text
user-curd-rtk-thunk/
 ├── package.json
 └── src/
      ├── index.js
      ├── index.css
      ├── App.js
      ├── pages/
      │     └── UsersPage.js
      ├── app/
      │     ├── store.js
      │     └── rootReducer.js
      └── features/
            ├── users/
            │    ├── components/
            │    │     └── UserList.js
            │    ├── services/
            │    │     └── userService.js
            │    ├── slices/
            │    │     └── userSlice.js
            │    └── index.js
            └── global/
                 ├── slices/
                 │     └── globalSlice.js
                 ├── middleware/
                 │     ├── errorMiddleware.js
                 │     └── loadingMiddleware.js
                 ├── components/
                 │     ├── ErrorBanner.js
                 │     └── LoadingSpinner.js
                 └── index.js
```




Folder Overview
src/app/

store.js → Redux store configuration with middleware

rootReducer.js → Combines users and global reducers

src/features/users/

slices/userSlice.js → Redux slice with CRUD async thunks

services/userService.js → Axios API calls to JSONPlaceholder

components/UserList.js → User list and form UI

index.js → Barrel file for exporting slice, service, and component

src/features/global/

slices/globalSlice.js → Global loading and error slice

middleware/errorMiddleware.js → Dispatches error to global slice

middleware/loadingMiddleware.js → Dispatches loading state

components/ErrorBanner.js → Shows API errors

components/LoadingSpinner.js → Shows spinner during API calls

index.js → Barrel file

src/pages/UsersPage.js

Combines UserList, ErrorBanner, and LoadingSpinner

src/index.css

Plain CSS for styling form, user cards, buttons, error banner, and spinner
