import React from 'react';
import Store from './Components/store';

class App extends React.Component {

  render() {
    return (
      <Store
        data={
          [
            {
              name: "PC Components",
              products: [
                {
                  name: "Motherboard",
                  price: 92000,
                  img: "https://images10.newegg.com/ProductImage/13-132-568-03.jpg"
                },
                {
                  name: "Keyboard",
                  price: 1000,
                  img: "https://m.media-amazon.com/images/I/811YM2Go9GL._AC_SX679_.jpg"
                },
                {
                  name: "Mouse",
                  price: 200,
                  img: "https://m.media-amazon.com/images/I/61UxfXTUyvL._AC_UF1000,1000_QL80_.jpg"
                },
                {
                  name: "Hard Disk",
                  price: 500,
                  img: "https://m.media-amazon.com/images/I/61wptHv8cQL._AC_UF894,1000_QL80_.jpg"
                }
              ]
            },
            {
              name: "Mobile Phones",
              products: [
                {
                  name: "iPhone 11",
                  price: 15000,
                  img: "https://cdn.shortpixel.ai/spai/q_glossy+ret_img+to_webp/https://mobizil.com/wp-content/uploads/2019/09/Apple-iPhone-11.jpg"
                },
                {
                  name: "iPhone XR",
                  price: 10000,
                  img: "https://images.macrumors.com/t/HQTzTT5qiJuv1CWielf5TUR40Gs=/1600x0/article-new/2018/09/littleiphonexr.jpg"
                }
              ]
            },
            {
              name: "Fashion",
              products: [
                {
                  name: "T-shirt",
                  price: 200,
                  img: "https://contents.mediadecathlon.com/p2073348/k$1c0d555588837c40b5412a7eaf8f715b/slim-fit-stretch-cotton-fitness-t-shirt.jpg?format=auto&quality=40&f=800x800"
                },
                {
                  name: "Jeans",
                  price: 150,
                  img: "https://spy.com/wp-content/uploads/2022/06/Mott-and-Bow-Mens-Jeans.webp"
                }
              ]
            }
          ]
        }
      />
    );
  }
}

export default App;