'use strict';

import { Subscriber } from "./User.js";

const box = document.querySelector('.box');
const postButton = document.querySelector('.post-button');
const posts = document.querySelector('.posts');
const subscribe = document.querySelector('.subscribe');
const fileInput = document.getElementById('file-upload');


const subscriber = new Subscriber(
    15,
    'Melia Antiqua',
    'kevisqueen317',
    'meilaantiqua@high.com',
    ['Page 1', 'Page 2'],
    ['Kevis', 'High Entia'],
    true
);

const date = new Date();
let day = date.getDay();
let year = date.getFullYear();
let month = date.getMonth();

// Function to handle file selection
const handleFileUpload = () => {
    fileInput.click(); // Trigger file input click when "Browse" is clicked

    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0]; // Get the selected file
        const reader = new FileReader();

        reader.onload = function(event) {
            const fileContent = event.target.result; // Get the content of the selected file
            createPost(fileContent); // Call createPost function with file content
        };

        if (file) {
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    });
};

// Update createPost function to accept fileContent as an argument
const createPost = (fileContent) => {
    const text = box.value;

    if (text.trim() !== '') {
        const post = document.createElement('div');
        const postHeader = document.createElement('div');
        postHeader.classList.add('post-header');
        postHeader.innerHTML = `
            <h3>${subscriber.fullName}</h3>
            <p>${year}/${month}/${day}</p>`;
        const postContent = document.createElement('p');
        postContent.textContent = text;
        post.classList.add('post');

        if (fileContent) {
            const fileNode = document.createElement('img');
            fileNode.src = fileContent;
            post.appendChild(fileNode);
        }

        post.appendChild(postHeader);
        post.appendChild(postContent);
        
        // Prepend the new post as the first child of the '.posts' container
        posts.insertAdjacentElement('afterbegin', post);
        
        box.value = '';

        const createPost = (fileContent) => {
            const text = box.value;
        
            if (text.trim() !== '') {
                posts.appendChild(post);
        
                box.value = '';
            }
        };
        
        // Function to handle the 'Enter' key press event
        const handleEnterKeyPress = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent the default behavior of the 'Enter' key in the input field
                createPost();
            }
        };
        
        // Event listener for the 'Enter' key press in the input field
        box.addEventListener('keydown', handleEnterKeyPress);
    }
};

// Event listener for the 'Browse' button
document.querySelector('.file-input').addEventListener('click', handleFileUpload);

// Event listener for the 'Post' button
postButton.addEventListener('click', createPost);

// Function to display user information in an alert
const displayUserInfo = () => {
    // Get user information using getInfo() method
    const userInfo = subscriber.getInfo();
    
    // Display user information in an alert box
    alert(userInfo);
};

// Event listener for displaying user information when clicking the icon
subscribe.addEventListener('click', displayUserInfo);