import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Zoom from 'reveal.js/plugin/zoom/zoom.esm.js';

let apresentacao = new Reveal({
  transition: "convex",
  backgroundTransition: "zoom",
  plugins: [ Markdown, Highlight, Zoom ]
});
apresentacao.initialize();
