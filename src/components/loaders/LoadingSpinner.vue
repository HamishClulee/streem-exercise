<template>
  <div class="w-full h-full flex items-center justify-center">
    <div id="square5">
      <span />
      <span />
      <span />
      <span />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
}
</script>

<style scoped>
#square5 {
  display: block;
}

#square5 span {
  color: white;
  font-family: 'Open Sans Condensed', sans-serif;
  padding: 2px;
  width: 17px;
  height: 17px;
  background-color: #000;
  display: inline-block;
  -webkit-animation: square5 1.4s infinite ease-in-out both;
  animation: square5 1.4s infinite ease-in-out both;
}

#square5 span:nth-child(1) {
  left: 11px;
  border-radius: 50%;
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
  background: #ff7675;
}

#square5 span:nth-child(2) {
  left: 22px;
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
  background: #131e5e;
}

#square5 span:nth-child(3) {
  left: 33px;
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
  background: #131e5e;
}

#square5 span:nth-child(4) {
  left: 44px;
  border-radius: 50%;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
  background: #ff7675;
}

@keyframes square5 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  50% {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
  100% {
    -webkit-transform: rotateX(180deg);
    transform: rotateX(180deg);
    -webkit-transform: rotateX(180deg);
    transform: rotateX(180deg);
  }
}
@-webkit-keyframes square5 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  50% {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
  100% {
    -webkit-transform: rotateX(180deg);
    transform: rotateX(180deg);
  }
}
</style>
