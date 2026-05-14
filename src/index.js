import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown';
import Highlight from 'reveal.js/plugin/highlight';
import Zoom from 'reveal.js/plugin/zoom';

let apresentacao = new Reveal({
  transition: "convex",
  backgroundTransition: "zoom",
  plugins: [ Markdown, Highlight, Zoom ]
});
apresentacao.initialize();
