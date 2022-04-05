import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h4>Q:What is context API?</h4>
            <p>Ans:React Context API is a wey to essentially creat global variables that can be passed around in a react app.This is the alternative to "prop drilling",or passing props from grandparentto parent to child,and so on.Context is often touted as a simpler,lighter solution to using Redux for state management.
                in a typical React application,data is passed top-down (parent to child)via props,but this can be cumbersome for certain types of props(e.g. localepreference,UI theme) that are requiredby many components within an application.Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree. </p>
            <h4>Q: What is Semantic Tag?</h4>
            <p>Ans: Semantic HTML elements are those that clearly describe their meaning in a human and machine-readable way.Element such as 'header' ,'footer' ,and 'article' are all considered semantic because they accurately describe the perpose of the element and the type of content thet is inside them.A semantic element clearly describes its meaning to both the browser and the developer.Examples of nonsemantic elements 'div' and 'span' Tells nothing about its content.Clearly defines its content.Browser support.</p>
        </div>
    );
};

export default Blogs;