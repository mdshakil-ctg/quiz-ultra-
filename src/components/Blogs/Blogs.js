import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-yellow-100'>
            <div className='p-8 w-[75%] mx-auto'>
            <h2 className='text-4xl font-semibold mb-4'>What is the purpose of react router ?</h2>
            <li className='text-xl'><span className='font-bold'>React Router</span>  is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. We will use React Router to navigate between components.</li>
            </div>
            <div className='p-8 w-[75%] mx-auto'>
            <h2 className='text-4xl font-semibold mb-4'>How does context api works ?</h2>
            <li className='text-xl'><span className='font-bold'>Context</span> provides a way to pass data through the component tree without having to pass props down manually at every level.In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</li>
            <li className='text-xl'>For example, consider a Page component that passes a user and avatarSize prop several levels down so that deeply nested Link and Avatar components can read it:It might feel redundant to pass down the user and avatarSize props through many levels if in the end only the Avatar component really needs it. It’s also annoying that whenever the Avatar component needs more props from the top, you have to add them at all the intermediate levels too.
            One way to solve this issue without context is to pass down the Avatar component itself so that the intermediate components don’t need to know about the user or avatarSize props:</li>
            </div>
            <div className='p-8 w-[75%] mx-auto'>
            <h2 className='text-4xl font-semibold mb-4'>What is the useref hook in react js ?</h2>
            <li className='text-xl'><span className='font-bold'>useRef</span> returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.Essentially, useRef is like a “box” that can hold a mutable value in its .current property.You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with  React will set its .current property to the corresponding DOM node whenever that node changes.However, useRef is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.This works because useRef() creates a plain JavaScript object. The only difference between useRef() and creating a object yourself is that useRef will give you the same ref object on every render.</li>
            </div>
           
        </div>
    );
};

export default Blogs;