let app = new Vue({
    el: '#app',
    data: {
        number: 0,
        mousePosition: {
            xPosition: 0,
            yPosition: 0,
        },
    },
    methods: {
        onCountClick(number, e) {
            this.number += number;
            console.log(e.target);
        },
        onMouseMove(e) {
            this.mousePosition.xPosition = e.offsetX;
            this.mousePosition.yPosition = e.offsetY;
        },
        handleSubmitForm(e) {
            console.log(e)
        }
    }
});
