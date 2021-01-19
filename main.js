let app = new Vue({
    el: '#app',
    data: {
        title: 'Áo thun nam cổ tròn form rộng thời trang Everest Nhiều Màu',
        url: 'https://www.lazada.vn/products/ao-thun-nam-co-tron-form-rong-thoi-trang-everest-nhieu-mau-i471998965-s894890085.html?spm=a2o4n.searchlistcategory.list.1.2777a4a7qEF9j6&search=1',
        target: '_blank',
        cartNumber: 0,
        price: 150000,
        discountRate: 0.2,
        selectedProduct: 0,
        products: [
            {
                imageUrl: './images/black.jpg',
                quantity: 2,
                textColor: 'Đen',
            },
            {
                imageUrl: './images/blue.jpg',
                quantity: 8,
                textColor: 'Xanh',
            },
            {
                imageUrl: './images/red.jpg',
                quantity: 0,
                textColor: 'Đỏ',
            },
        ],

    },
    computed: {
        formatOriginalPrice() {
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(this.price)
        },

        formatFinalPrice() {
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(this.price * (1 - this.discountRate))
        },
        getProduct() {
            let index = this.selectedProduct;
            return this.products[index]
        }
    },
    methods: {
        onSelectProduct(index) {
            this.selectedProduct = index;
        },
        classActive(index) {
            return {
                active: this.selectedProduct === index,
            }
        },
        onAddToCart() {
            if (this.cartNumber + 1 > this.getProduct.quantity) {
                alert('Out of stock!')
            } else {
                ++this.cartNumber
            }

        }
    }
});


