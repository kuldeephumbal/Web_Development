import React, { useEffect } from 'react';

function MyComponent() {
    useEffect(() => {
        const loadEditor = async () => {
            // Load FroalaEditor script dynamically
            const editorScript = document.createElement('script');
            editorScript.src = 'Editor/js/froala_editor.min.js';
            editorScript.async = true;

            // Wait for the script to be loaded
            editorScript.onload = () => {
                const editorInstance = new FroalaEditor('#edit', {
                    enter: FroalaEditor.ENTER_P,
                    placeholderText: null,
                    events: {
                        initialized: function () {
                            const editor = this;
                            this.el.closest('form').addEventListener('submit', function (e) {
                                console.log(editor.$oel.val());
                                e.preventDefault();
                            });
                        }
                    }
                });
            };

            // Append FroalaEditor script to the document body
            document.body.appendChild(editorScript);

             // Load stylesheets dynamically
             const loadStylesheets = (stylesheets) => {
                stylesheets.forEach((href) => {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = href;
                    document.head.appendChild(link);
                });
            };

            // Load other scripts dynamically
            const loadScripts = (scripts) => {
                scripts.forEach((src) => {
                    const script = document.createElement('script');
                    script.src = src;
                    script.async = true;
                    document.body.appendChild(script);
                });
            };

            // Define URLs for stylesheets and JavaScript files
            const stylesheets = [
                'Editor/css/froala_editor.css',
                'Editor/css/plugins/code_view.css',
                'Editor/css/froala_style.css',
                'Editor/css/plugins/image_manager.css',
                'Editor/css/plugins/image.css',
                'Editor/css/plugins/table.css',
                'Editor/css/plugins/video.css'
            ];

            const scripts = [
                'Editor/js/plugins/align.min.js',
                'Editor/js/plugins/code_beautifier.min.js',
                'Editor/js/plugins/code_view.min.js',
                'Editor/js/plugins/draggable.min.js',
                'Editor/js/plugins/image.min.js',
                'Editor/js/plugins/image_manager.min.js',
                'Editor/js/plugins/link.min.js',
                'Editor/js/plugins/lists.min.js',
                'Editor/js/plugins/paragraph_format.min.js',
                'Editor/js/plugins/paragraph_style.min.js',
                'Editor/js/plugins/table.min.js',
                'Editor/js/plugins/video.min.js',
                'Editor/js/plugins/url.min.js',
                'Editor/js/plugins/entities.min.js'
            ];

            // Load stylesheets and JavaScript files
            loadStylesheets(stylesheets);
            loadScripts(scripts);
        };

        // Invoke the function to load the editor
        loadEditor();
    }, []);

    return null; // or whatever JSX you want to return
}

export default MyComponent;
