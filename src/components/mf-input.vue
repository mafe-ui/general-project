<template>
<div class="mf-input">
    <div class="mf-input-item">
        <span>
            <input class="basic-slide" id="name" type="text" placeholder="Your best name" /><label for="name">Name</label>
        </span>
        </div>
    <div class="mf-input-item">
        <span>
            <input class="clean-slide" id="age" type="text" placeholder="Go for the high score!" /><label for="age">Age</label>
        </span>
    </div>
    <div class="mf-input-item">
        <span>
            <input class="gate" id="class" type="text" placeholder="Wizard!" /><label for="class">Class</label>
        </span>
    </div>
    <div class="mf-input-item">
        <span>
            <input class="skinny" id="english" type="text" placeholder="Do you speak it?" /><label for="english">English</label>
        </span>
    </div>
    <div class="mf-input-item">
        <span>
            <input class="swing" id="artist" type="text" placeholder="BO$" /><label for="artist">Artist</label>
        </span>
    </div>
</div>
</template>

<script>
export default {
    name: 'mf-input',
     props: {
        value: [String, Number],
        anmited:Boolean,
    },
}
</script>

<style lang="scss" scoped>

@mixin epic-sides() {
    // https://codepen.io/MichaelArestad/pen/qltuk
    position: relative;
    z-index: 1;

    &:before {
        position: absolute;
        content: "";
        display: block;
        top: 0;
        left: -rem(5000);
        height: 100%;
        // width: rem(15000);
        z-index: -1;
        @content;
    }
}

.mf-input-item {
    max-width: rem(800);
    margin: 0 auto;
    // padding: rem(60) rem(30);
    // background: #032429;

    @include epic-sides() {
        background: inherit;
    }

    text-align: center;

    &:first-child {
        padding: rem(40) rem(30);
    }

    &:nth-child(2),
    &:nth-child(8),
    &:nth-child(10) {
        // background: #134A46;
    }

    &:nth-child(3),
    &:nth-child(7) {
        // background: #377D6A;
    }

    &:nth-child(4),
    &:nth-child(6) {
        // background: #7AB893;
    }

    &:nth-child(5) {
        // background: #B2E3AF;
    }

    span {
        position: relative;
        display: inline-block;
        margin: rem(30) rem(10);
    }
}

.basic-slide {
    display: inline-block;
    width: rem(215);
    padding: rem(10) 0 rem(10) rem(15);
    font-family: "Open Sans", sans;
    font-weight: 400;
    color: #377D6A;
    background: #efefef;
    border: 0;
    border-radius: rem(3);
    outline: 0;
    text-indent: rem(70); // Arbitrary.
    transition: all .3s ease-in-out;

    &::-webkit-input-placeholder {
        color: #efefef;
        text-indent: 0;
        font-weight: 300;
    }

    +label {
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        padding: rem(10) rem(15);
        text-shadow: 0 rem(1) 0 rgba(19, 74, 70, .4);
        background: #7AB893;
        transition: all .3s ease-in-out;
        border-top-left-radius: rem(3);
        border-bottom-left-radius: rem(3);
    }
}

.basic-slide:focus,
.basic-slide:active {
    color: #377D6A;
    text-indent: 0;
    background: #fff;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    &::-webkit-input-placeholder {
        color: #aaa;
    }

    +label {
        transform: translateX(-100%);
    }
}

.clean-slide {
    position: relative;
    display: inline-block;
    width: rem(215);
    padding: rem(10) 0 rem(10) rem(15);
    font-family: "Open Sans", sans;
    font-weight: 400;
    color: #377D6A;
    background: #efefef;
    border: 0;
    border-radius: rem(3);
    outline: 0;
    text-indent: rem(60); // Arbitrary.
    transition: all .3s ease-in-out;

    &::-webkit-input-placeholder {
        color: #efefef;
        text-indent: 0;
        font-weight: 300;
    }

    +label {
        display: inline-block;
        position: absolute;
        transform: translateX(0);
        top: 0;
        left: 0;
        bottom: 0;
        padding: rem(13) rem(15);
        font-size: rem(11);
        font-weight: 700;
        text-transform: uppercase;
        color: #032429;
        text-align: left;
        text-shadow: 0 rem(1) 0 rgba(255, 255, 255, .4);
        transition: all .3s ease-in-out, color .3s ease-out;
        border-top-left-radius: rem(3);
        border-bottom-left-radius: rem(3);
        overflow: hidden;

        &:after {
            content: "";
            position: absolute;
            top: 0;
            right: 100%;
            bottom: 0;
            width: 100%;
            background: #7AB893;
            z-index: -1;
            transform: translate(0);
            transition: all .3s ease-in-out;
            border-top-left-radius: rem(3);
            border-bottom-left-radius: rem(3);
        }
    }
}

.clean-slide:focus,
.clean-slide:active {
    color: #377D6A;
    text-indent: 0;
    background: #fff;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    &::-webkit-input-placeholder {
        color: #aaa;
    }

    +label {
        color: #fff;
        text-shadow: 0 rem(1) 0 rgba(19, 74, 70, .4);
        transform: translateX(-100%);

        &:after {
            transform: translate(100%);
        }
    }
}

.gate {
    display: inline-block;
    width: rem(215);
    padding: rem(10) 0 rem(10) rem(15);
    font-family: "Open Sans", sans;
    font-weight: 400;
    color: #377D6A;
    background: #efefef;
    border: 0;
    border-radius: rem(3);
    outline: 0;
    text-indent: rem(65); // Arbitrary.
    transition: all .3s ease-in-out;

    &::-webkit-input-placeholder {
        color: #efefef;
        text-indent: 0;
        font-weight: 300;
    }

    +label {
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        padding: rem(10) rem(15);
        text-shadow: 0 rem(1) 0 rgba(19, 74, 70, .4);
        background: #7AB893;
        transition: all .4s ease-in-out;
        border-top-left-radius: rem(3);
        border-bottom-left-radius: rem(3);
        transform-origin: left bottom;
        z-index: 99;

        &:before,
        &:after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            border-radius: rem(3);
            background: #377D6A;
            transform-origin: left bottom;
            transition: all .4s ease-in-out;
            pointer-events: none;
            z-index: -1;
        }

        &:before {
            background: rgba(3, 36, 41, .2);
            z-index: -2;
            right: 20%;
        }
    }
}

span:nth-child(2) .gate {
    text-indent: rem(85);
}

span:nth-child(2) .gate:focus,
span:nth-child(2) .gate:active {
    text-indent: 0;
}

.gate:focus,
.gate:active {
    color: #377D6A;
    text-indent: 0;
    background: #fff;
    border-top-right-radius: rem(3);
    border-bottom-right-radius: rem(3);

    &::-webkit-input-placeholder {
        color: #aaa;
    }

    +label {
        transform: rotate(-66deg);
        border-radius: rem(3);

        &:before {
            transform: rotate(10deg);
        }
    }
}

.skinny {
    display: inline-block;
    width: rem(215);
    padding: rem(10) 0 rem(10) rem(15);
    font-family: "Open Sans", sans;
    font-weight: 400;
    color: #377D6A;
    background: #efefef;
    border: 0;
    border-radius: rem(3);
    outline: 0;
    text-indent: rem(75); // Arbitrary.
    transition: all .3s ease-in-out;

    &::-webkit-input-placeholder {
        color: #efefef;
        text-indent: 0;
        font-weight: 300;
    }

    +label {
        display: inline-block;
        position: absolute;
        transform: translateX(0);
        top: 0;
        left: 0;
        padding: rem(10) rem(15);
        text-shadow: 0 rem(1) 0 rgba(19, 74, 70, .4);
        transition: all .3s ease-in-out;
        border-top-left-radius: rem(3);
        border-bottom-left-radius: rem(3);
        overflow: hidden;

        &:before,
        &:after {
            content: "";
            position: absolute;
            right: 0;
            left: 0;
            z-index: -1;
            transition: all .3s ease-in-out;
        }

        &:before {
            // Skinny bit here
            top: rem(5);
            bottom: rem(5);
            background: #377D6A; // change this to #134A46
            border-top-left-radius: rem(3);
            border-bottom-left-radius: rem(3);
        }

        &:after {
            top: 0;
            bottom: 0;
            background: #377D6A;
        }
    }
}

.skinny:focus,
.skinny:active {
    color: #377D6A;
    text-indent: 0;
    background: #fff;

    &::-webkit-input-placeholder {
        color: #aaa;
    }

    +label {
        transform: translateX(-100%);

        &:after {
            transform: translateX(100%);
        }
    }
}

.slide-up {
    display: inline-block;
    width: rem(215);
    padding: rem(10) 0 rem(10) rem(15);
    font-family: "Open Sans", sans;
    font-weight: 400;
    color: #377D6A;
    background: #efefef;
    border: 0;
    border-radius: rem(3);
    outline: 0;
    text-indent: rem(80); // Arbitrary.
    transition: all .3s ease-in-out;

    &::-webkit-input-placeholder {
        color: #efefef;
        text-indent: 0;
        font-weight: 300;
    }

    +label {
        display: inline-block;
        position: absolute;
        transform: translateX(0);
        top: 0;
        left: 0;
        padding: rem(10) rem(15);
        text-shadow: 0 rem(1) 0 rgba(19, 74, 70, .4);
        transition: all .3s ease-in-out;
        border-top-left-radius: rem(3);
        border-bottom-left-radius: rem(3);
        overflow: hidden;

        &:before,
        &:after {
            content: "";
            position: absolute;
            right: 0;
            left: 0;
            z-index: -1;
            transition: all .3s ease-in-out;
        }

        &:before {
            // Skinny bit here
            top: rem(6);
            left: rem(5);
            right: rem(5);
            bottom: rem(6);
            background: #377D6A; // change this to #134A46
        }

        &:after {
            top: 0;
            bottom: 0;
            background: #377D6A;
        }
    }
}

span:nth-child(1) .slide-up {
    text-indent: rem(105);
}

span:nth-child(3) .slide-up {
    text-indent: rem(125);
}

span:nth-child(1) .slide-up:focus,
span:nth-child(1) .slide-up:active,
span:nth-child(3) .slide-up:focus,
span:nth-child(3) .slide-up:active {
    text-indent: 0;
}

.slide-up:focus,
.slide-up:active {
    color: #377D6A;
    text-indent: 0;
    background: #fff;

    &::-webkit-input-placeholder {
        color: #aaa;
    }

    +label {
        transform: translateY(-100%);

        &:before {
            border-radius: rem(5);
        }

        &:after {
            transform: translateY(100%);
        }
    }
}

.card-slide {
    display: inline-block;
    width: rem(215);
    padding: rem(10) 0 rem(10) rem(15);
    font-family: "Open Sans", sans;
    font-weight: 400;
    color: #377D6A;
    background: #efefef;
    border: 0;
    border-radius: rem(3);
    outline: 0;
    text-indent: rem(115); // Arbitrary.
    transition: all .3s ease-in-out;

    &::-webkit-input-placeholder {
        color: #efefef;
        text-indent: 0;
        font-weight: 300;
    }

    +label {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        padding: rem(10) rem(15);
        text-shadow: 0 rem(1) 0 rgba(19, 74, 70, .4);
        background: #7AB893;
        transition: all .3s ease-in-out;
        border-top-left-radius: rem(3);
        border-bottom-left-radius: rem(3);
        transform-origin: right center;
        transform: perspective(rem(300)) scaleX(1) rotateY(0deg);
    }
}

span:nth-child(2) .card-slide {
    text-indent: rem(55);
}

span:nth-child(3) .card-slide {
    text-indent: rem(150);
}

span:nth-child(2) .card-slide:focus,
span:nth-child(2) .card-slide:active,
span:nth-child(3) .card-slide:focus,
span:nth-child(3) .card-slide:active {
    text-indent: 0;
}

.card-slide:focus,
.card-slide:active {
    color: #377D6A;
    text-indent: 0;
    background: #fff;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    &::-webkit-input-placeholder {
        color: #aaa;
    }

    +label {
        transform: perspective(rem(600)) translateX(-100%) rotateY(80deg);
    }
}

.swing {
    display: inline-block;
    width: rem(215);
    padding: rem(10) 0 rem(10) rem(15);
    font-family: "Open Sans", sans;
    font-weight: 400;
    color: #377D6A;
    background: #efefef;
    border: 0;
    border-radius: rem(3);
    outline: 0;
    text-indent: rem(60); // Arbitrary.
    transition: all .3s ease-in-out;

    &::-webkit-input-placeholder {
        color: #efefef;
        text-indent: 0;
        font-weight: 300;
    }

    +label {
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        padding: rem(10) rem(15);
        text-shadow: 0 rem(1) 0 rgba(19, 74, 70, .4);
        background: #7AB893;
        border-top-left-radius: rem(3);
        border-bottom-left-radius: rem(3);
        transform-origin: rem(2) rem(2);
        transform: rotate(0);
        // There should be a better way
        animation: swing-back .4s 1 ease-in-out;
    }
}

@keyframes swing {
    0% {
        transform: rotate(0);
    }

    20% {
        transform: rotate(116deg);
    }

    40% {
        transform: rotate(60deg);
    }

    60% {
        transform: rotate(98deg);
    }

    80% {
        transform: rotate(76deg);
    }

    100% {
        transform: rotate(82deg);
    }
}

@keyframes swing-back {
    0% {
        transform: rotate(82deg);
    }

    100% {
        transform: rotate(0);
    }
}

.swing:focus,
.swing:active {
    color: #377D6A;
    text-indent: 0;
    background: #fff;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    &::-webkit-input-placeholder {
        color: #aaa;
    }

    +label {
        animation: swing 1.4s 1 ease-in-out;
        transform: rotate(82deg);
    }
}

.balloon {
    // As suggested by https://twitter.com/dbox/status/365888496486985728
    display: inline-block;
    width: rem(215);
    padding: rem(10) 0 rem(10) rem(15);
    font-family: "Open Sans", sans;
    font-weight: 400;
    color: #377D6A;
    background: #efefef;
    border: 0;
    border-radius: rem(3);
    outline: 0;
    text-indent: rem(60); // Arbitrary.
    transition: all .3s ease-in-out;

    &::-webkit-input-placeholder {
        color: #efefef;
        text-indent: 0;
        font-weight: 300;
    }

    +label {
        display: inline-block;
        position: absolute;
        top: rem(8);
        left: 0;
        bottom: rem(8);
        padding: rem(5) rem(15);
        color: #032429;
        font-size: rem(11);
        font-weight: 700;
        text-transform: uppercase;
        text-shadow: 0 rem(1) 0 rgba(19, 74, 70, 0);
        transition: all .3s ease-in-out;
        border-radius: rem(3);
        background: rgba(122, 184, 147, 0);

        &:after {
            position: absolute;
            content: "";
            width: 0;
            height: 0;
            top: 100%;
            left: 50%;
            margin-left: -rem(3);
            border-left: rem(3) solid transparent;
            border-right: rem(3) solid transparent;
            border-top: rem(3) solid rgba(122, 184, 147, 0);
            transition: all .3s ease-in-out;
        }
    }
}

.balloon:focus,
.balloon:active {
    color: #377D6A;
    text-indent: 0;
    background: #fff;

    &::-webkit-input-placeholder {
        color: #aaa;
    }

    +label {
        color: #fff;
        text-shadow: 0 rem(1) 0 rgba(19, 74, 70, .4);
        background: rgba(122, 184, 147, 1);
        transform: translateY(-rem(40));

        &:after {
            border-top: rem(4) solid rgba(122, 184, 147, 1);
        }
    }
}
</style>
