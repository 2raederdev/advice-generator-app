<template>
  <div class="attribution">
    <p>
      Challenge by&nbsp;<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded with ❤️ by&nbsp;<a href="https://www.linkedin.com/in/dahima/" target="_blank" rel=”noopener” >Daniel Hita</a>.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.attribution { 
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  font-family: $font-family-default;
  font-size: 11px;
  text-align: center; 
  background-color: #fff;
  color: hsl(218, 23%, 16%);;
  display: flex;
  place-content: center;

  p {
    margin: 12px 0;
  
    a {
        color: hsl(228, 45%, 44%);
      }
  }
}
</style>