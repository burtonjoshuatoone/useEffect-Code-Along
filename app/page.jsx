"use client";

import Page from "./Apples.jsx";
import Counter from "./Counter.jsx";
import MyInput2 from "./myInput2.jsx";
import MyInput from "./myInput.jsx";
import Form from "./ApricotJam.jsx";
import EditForm from "./EditContact.jsx";
import CachedTodoList from "./CacheValley/App.jsx";
import TransformedTodoList from "./Transform/App.jsx";

export default function Effect() {
  return (
    <>
      <div>
        <Page />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <MyInput />
      </div>
      <div>
        <MyInput2 />
      </div>
      <div>
        <Form />
      </div>
      <div>
        <EditForm />
      </div>
      <div>
        <CachedTodoList />
      </div>
      <div>
        <TransformedTodoList />
      </div>
    </>
  );
}
