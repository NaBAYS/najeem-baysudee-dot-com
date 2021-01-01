<style
  lang="scss"
>
  .logo {
    font-family: 'Source Code Pro', monospace;
    font-size: 1.2rem;

    .letter {
      display: inline-block;
      opacity: 0;
      max-width: 0;
    }
  }
</style>

<template>
  <span class="logo">
    <span class="primary--text">{</span>
    &nbsp;
    <span ref="typed">najeem.baysudee</span>
    <span class="underscore light-blue--text">_</span>
    &nbsp;
    <span class="primary--text">}</span>
  </span>
</template>

<script>
export default {
  methods: {
    /**
     * Wrap element letters in <span> tags
     *
     * @param {Element} el - Element that should have letters wrapped
     */
    wrapLetters: (el) => {
      const exclude = [
        '{',
        '}',
        '_'
      ]
      const rgx = new RegExp(`[${exclude.join('')}]`, 'gi')

      const letters = el.textContent.replace(rgx, '').replace(/\S/g, "<span class='letter'>$&</span>")

      el.innerHTML = letters
    }
  },

  mounted () {
    this.wrapLetters(this.$refs.typed)

    setTimeout(() => {
      anime.timeline().add({
        targets: '.logo .letter',
        maxWidth: '999px',
        opacity: 1,
        easing: 'cubicBezier(.5, .05, .1, .3)',
        duration: 300,
        delay: (el, i) => 70 * (i+1),
        complete: () => {
          anime({
            targets: '.logo .underscore',
            opacity: 0,
            duration: 400,
            easing: 'cubicBezier(.5, .05, .1, .3)',
            direction: 'alternate',
            loop: true,
          })
        }
      })
    }, 600);
  }
}
</script>
