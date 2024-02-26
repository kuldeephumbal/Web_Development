// import React, { useEffect} from 'react'
// import FroalaEditor from 'froala-editor'
// import 'froala-/css/froalaeditor.pkgd.min.css';
// import 'froalaeditor/css/froala_style.min.css';

// function MyComponent() {
//   const editorRef = useRef(null);

//   useEffect(() => {
//     async function loadEditor() {
//       const editorScript = document.createElement('script');
//       editorScript.src = 'Editor/js/froala_editor.min.js';
//       editorScript.async = true;

//       document.body.appendChild(editorScript);

//       return new Promise((resolve) => {
//         editorScript.onload = () => resolve(editorScript);
//       });
//     }

//     async function initializeEditor() {
//       await loadEditor();

//       const editorInstance = new FroalaEditor(editorRef.current, {
//         enter: FroalaEditor.ENTER_P,
//         placeholderText: null,
//         events: {
//           initialized: function () {
//             const editor = this;
//             this.el.closest('form').addEventListener('submit', (e) => {
//               console.log(editor.html.get());
//               e.preventDefault();
//             });
//           },
//         },
//       });
//     }

//     initializeEditor();
//   }, []);

//   return <textarea id="edit" ref={editorRef} />;
// }

// export default MyComponent;

/* global FroalaEditor */

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
                'Editor/css/froala_style.css',
                // 'Editor/css/plugins/code_view.css',
                // 'Editor/css/plugins/image_manager.css',
                // 'Editor/css/plugins/image.css',
                // 'Editor/css/plugins/table.css',
                // 'Editor/css/plugins/video.css',
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css',
                'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css'
            ];

            const scripts = [
                'Editor/js/plugins/align.min.js',
                'Editor/js/plugins/code_beautifier.min.js',
                // 'Editor/js/plugins/code_view.min.js',
                // 'Editor/js/plugins/draggable.min.js',
                // 'Editor/js/plugins/image.min.js',
                // 'Editor/js/plugins/image_manager.min.js',
                // 'Editor/js/plugins/link.min.js',
                // 'Editor/js/plugins/lists.min.js',
                // 'Editor/js/plugins/paragraph_format.min.js',
                // 'Editor/js/plugins/paragraph_style.min.js',
                // 'Editor/js/plugins/table.min.js',
                // 'Editor/js/plugins/video.min.js',
                // 'Editor/js/plugins/url.min.js',
                // 'Editor/js/plugins/entities.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/xml/xml.min.js'
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
