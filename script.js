// script.js

document.addEventListener('DOMContentLoaded', () => {
    const showStreamWishButton = document.getElementById('show-streamwish');
    const showDoodStreamButton = document.getElementById('show-doodstream');
    const streamWishContainer = document.getElementById('streamwish-container');
    const doodStreamContainer = document.getElementById('doodstream-container');
    const buttonContainer = document.getElementById('button-container');
    const disqusThread = document.getElementById('disqus_thread');
    const openCommentsButton = document.getElementById('open-comments');
    const closeCommentsButton = document.getElementById('close-comments');

    if (showStreamWishButton && showDoodStreamButton && streamWishContainer && doodStreamContainer && buttonContainer && disqusThread && openCommentsButton && closeCommentsButton) {
        showStreamWishButton.addEventListener('click', () => {
            streamWishContainer.style.display = 'block';
            doodStreamContainer.style.display = 'none';
            buttonContainer.style.display = 'none';
        });

        showDoodStreamButton.addEventListener('click', () => {
            doodStreamContainer.style.display = 'block';
            streamWishContainer.style.display = 'none';
            buttonContainer.style.display = 'none';
        });

        openCommentsButton.addEventListener('click', () => {
            disqusThread.style.display = 'block';
            if (!window.disqusLoaded) {
                const disqus_config = function () {
                    this.page.url = window.location.href;
                    this.page.identifier = document.title;
                };

                const d = document, s = d.createElement('script');
                s.src = 'https://mrblackweb.disqus.com/embed.js';
                s.setAttribute('data-timestamp', +new Date());
                (d.head || d.body).appendChild(s);
                window.disqusLoaded = true;
            }
        });

        closeCommentsButton.addEventListener('click', () => {
            disqusThread.style.display = 'none';
        });
    } else {
        console.error('One or more elements could not be found in the DOM');
    }
});
