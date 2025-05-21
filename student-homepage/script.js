// This file handles the functionality of the bulletin board.
// It includes functions to add, display, and remove posts, as well as manage user interactions.

document.addEventListener('DOMContentLoaded', function() {
    const postsDiv = document.getElementById('posts');
    const postInput = document.getElementById('postInput');
    const addPostButton = document.getElementById('addPostButton');

    let posts = [];

    function renderPosts() {
        postsDiv.innerHTML = '';
        posts.forEach(function(post) {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.textContent = post;
            postsDiv.appendChild(postElement);
        });
    }

    addPostButton.addEventListener('click', function() {
        const text = postInput.value.trim();
        if (text) {
            posts.unshift(text);
            postInput.value = '';
            renderPosts();
        }
    });

    postInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            addPostButton.click();
        }
    });

    renderPosts();
});