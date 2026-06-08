<script setup>
import { withBase } from 'vitepress'
</script>

<template>
  <section class="hero">
    <div class="hero-inner">
      <div class="hero-copy">
        <h1 class="hero-name">MAML</h1>
        <p class="hero-tagline">
          JSON with comments, unquoted keys,
          optional commas, and multiline strings.
        </p>
        <div class="hero-actions">
          <a class="btn btn-primary" :href="withBase('/spec/v0.1')">Read the spec</a>
          <a class="btn btn-alt" :href="withBase('/playground')">Playground</a>
          <a class="btn btn-ghost" href="https://github.com/maml-dev/maml.dev" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
              <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>

      <div class="hero-window" aria-hidden="true">
        <div class="window-bar">
          <span class="dot"></span><span class="dot"></span><span class="dot"></span>
          <span class="window-title">config.maml</span>
        </div>
        <pre class="window-code"><span class="ln-c"># Minimal Abstract Markup Language</span>
<code>{
  <span class="ln-k">project</span>: <span class="ln-s">"MAML"</span>
  <span class="ln-k">tags</span>: [
    <span class="ln-s">"minimal"</span>
    <span class="ln-s">"readable"</span>
  ]

  <span class="ln-c"># Array of objects</span>
  <span class="ln-k">examples</span>: [
    { <span class="ln-k">name</span>: <span class="ln-s">"JSON"</span>, <span class="ln-k">born</span>: <span class="ln-n">2001</span> }
    { <span class="ln-k">name</span>: <span class="ln-s">"MAML"</span>, <span class="ln-k">born</span>: <span class="ln-n">2025</span> }
  ]

  <span class="ln-k">notes</span>: <span class="ln-s">"""</span>
<span class="ln-s">This is a multiline raw strings.</span>
<span class="ln-s">Keeps formatting as-is.</span>
<span class="ln-s">"""</span>
}</code></pre>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: 64px 24px 48px;
}
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--vp-c-divider) 1px, transparent 1px),
    linear-gradient(90deg, var(--vp-c-divider) 1px, transparent 1px);
  background-size: 32px 32px;
  -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 0%, #000 30%, transparent 75%);
  mask-image: radial-gradient(ellipse 80% 70% at 50% 0%, #000 30%, transparent 75%);
  opacity: .5;
  pointer-events: none;
}
.hero-inner {
  position: relative;
  max-width: 1152px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
}

/* ---- copy ---- */
.hero-copy { min-width: 0; }
.hero-name {
  font-weight: 800;
  font-size: 88px;
  line-height: 1;
  letter-spacing: -3px;
  margin: 0 0 20px;
  color: var(--vp-c-text-1);
}
.hero-tagline {
  font-size: 21px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
  margin: 0 0 32px;
  max-width: 30ch;
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 44px;
  padding: 0 22px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  border: 1px solid transparent;
  text-decoration: none;
  transition: transform .12s ease, background .2s ease, border-color .2s ease, opacity .2s ease;
}
.btn:hover { transform: translateY(-1px); }
.btn-primary {
  background: var(--vp-c-text-1);
  color: var(--vp-c-bg) !important;
}
.btn-primary:hover { opacity: .85; }
.btn-alt {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1) !important;
  border-color: var(--vp-c-divider);
}
.btn-alt:hover { border-color: var(--vp-c-text-3); background: var(--vp-c-bg-elv); }
.btn-ghost {
  background: transparent;
  color: var(--vp-c-text-2);
  border-color: var(--vp-c-divider);
}
.btn-ghost:hover { color: var(--vp-c-text-1); border-color: var(--vp-c-text-3); }

/* ---- code window ---- */
.hero-window {
  border-radius: 14px;
  background: #0d0d0f;
  border: 1px solid #1f1f23;
  box-shadow: 0 24px 60px -20px rgba(0,0,0,.55), 0 2px 8px rgba(0,0,0,.3);
  overflow: hidden;
}
.window-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: #141417;
  border-bottom: 1px solid #1f1f23;
}
.dot {
  width: 11px; height: 11px;
  border-radius: 50%;
  background: #3a3a40;
}
.dot:nth-child(1) { background: #4a4a52; }
.window-title {
  margin-left: 8px;
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
  color: #6c6c76;
}

.window-code {
  margin: 0;
  padding: 20px 22px;
  font-family: var(--vp-font-family-mono);
  font-size: 13.5px;
  line-height: 1.7;
  color: #e6e6e9;
  overflow-x: auto;
  tab-size: 2;
}
.window-code code { font-family: inherit; }
.ln-c { color: #5f6066; font-style: italic; }
.ln-k { color: #c9c9d1; }
.ln-s { color: #9aa0a6; }
.ln-n { color: #d6d6db; font-weight: 600; }

@media (max-width: 860px) {
  .hero { padding: 40px 0 32px; }
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .hero-name { font-size: 64px; }
  .hero-tagline { font-size: 18px; max-width: none; }
}
@media (max-width: 420px) {
  .hero-name { font-size: 52px; letter-spacing: -2px; }
}
</style>
