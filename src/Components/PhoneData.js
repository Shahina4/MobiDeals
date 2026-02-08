const phoneSpecs = {
  'apple':[
    {
      id:1,
      model: 'iPhone 16 Pro Max',
      price: 129999,
      image: 'https://tse1.mm.bing.net/th/id/OIP.FEPETtXwb2Qxo-zYzvyHGwHaF7?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.7-inch Super Retina XDR OLED",
        processor: "Apple A16 Pro",
        ram: "8GB",
        storage: "256GB",
        camera: "48MP + 12MP + 12MP",
        battery: "4500mAh"
      }
    },
    {
      id:2,
      model: 'iPhone 15',
      price: 79999,
      image: 'https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_SR230,210_CB1169409_QL70_.jpg'/*'https://eshop.hkcsl.com/on/demandware.static/-/Sites-master-hkt-hk/default/dw0b965f3e/images/IP15scol/4019761_1.jpg'*/,
      amount:1,
      specs: {
        display: "6.1-inch Super Retina XDR OLED",
        processor: "Apple A15 Bionic",
        ram: "6GB",
        storage: "128GB",
        camera: "48MP + 12MP",
        battery: "3349mAh"
      }
    },
    {
      id:3,
      model: 'iPhone 14 Plus',
      price: 59999,
      image: 'https://tse3.mm.bing.net/th/id/OIP.e943jRQHTUQBM4LXS9w6mgHaHa?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.7-inch Super Retina XDR OLED",
        processor: "Apple A14 Bionic",
        ram: "6GB",
        storage: "128GB",
        camera: "12MP + 12MP",
        battery: "4325mAh"
      }
    }
  ],

  'samsung':[
    {
      id:4,
      model: 'Galaxy S24 Ultra',
      price: 124999,
      image: 'https://tse2.mm.bing.net/th/id/OIP.NOx55E_YZHelgikGobF9yAHaHa?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.8-inch QHD+ Dynamic AMOLED 2X",
        processor: "Snapdragon 8 Gen 3",
        ram: "12GB",
        storage: "256GB",
        camera: "200MP + 12MP + 10MP + 10MP",
        battery: "5000mAh"
      }
    },
    {
      id:5,
      model: 'Galaxy A55 5G',
      price: 37999,
      image: 'https://tse1.mm.bing.net/th/id/OIP.0wIwm4g6vIaf8JEQ-PzDYgHaHa?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.1-inch FHD+ Dynamic AMOLED 2X",
        processor: "Snapdragon 8 Gen 2",
        ram: "8GB",
        storage: "128GB",
        camera: "50MP + 12MP + 10MP",
        battery: "3900mAh"
      }
    },
    {
      id:6,
      model: 'Galaxy M15',
      price: 14999,
      image: 'https://tse1.mm.bing.net/th/id/OIP.8pSpkXcHMDCkr1m1b08TOQHaJh?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.4-inch FHD+ Super AMOLED",
        processor: "Exynos 1380",
        ram: "8GB",
        storage: "128GB",
        camera: "50MP + 12MP + 5MP",
        battery: "5000mAh"
      }
    }
  ],

  'xiaomi':[
    {
      id:7,
      model: 'Xiaomi 14 Ultra',
      price: 79999,
      image: 'https://tse4.mm.bing.net/th/id/OIP.KXrzdVccxLQQjmdprKoEkgHaHa?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.73-inch QHD+ AMOLED",
        processor: "Snapdragon 8 Gen 3",
        ram: "12GB",
        storage: "256GB",
        camera: "50MP Quad Camera",
        battery: "5000mAh"
      }
    },
    {
      id:8,
      model: 'Xiaomi 14',
      price: 59999,
      image: 'https://tse4.mm.bing.net/th/id/OIP.GX--GfS7DaUc4kqTkDJHRAHaHa?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.73-inch AMOLED",
        processor: "Snapdragon 8 Gen 2",
        ram: "12GB",
        storage: "256GB",
        camera: "50MP Triple Camera",
        battery: "4820mAh"
      }
    },
    {
      id:9,
      model: 'Redmi Note 13',
      price: 17999,
      image: 'https://tse3.mm.bing.net/th/id/OIP.w8Fl_QbIWQf9q_rtDgsMuwHaHa?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.67-inch AMOLED",
        processor: "MediaTek Dimensity 7200 Ultra",
        ram: "8GB",
        storage: "128GB",
        camera: "200MP + 8MP + 2MP",
        battery: "5000mAh"
      } 
    }
  ],

  'huawei':[
    {
      id:10,
      model: 'Pura 80 Pro',
      price: 84999,
      image: 'https://tse3.mm.bing.net/th/id/OIP.XoBwQP1zN-nGww0jTt5y_wHaHa?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.76-inch OLED",
        processor: "Kirin 9010",
        ram: "12GB",
        storage: "256GB",
        camera: "50MP Triple Camera",
        battery: "5000mAh"
      }
    },
    {
      id:11,
      model: 'Pura 70',
      price: 72999,
      image: 'https://tse3.mm.bing.net/th/id/OIP.NYvXzcd5yRQ333Etv_0PcgHaJ3?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.82-inch OLED",
        processor: "Kirin 9000S",
        ram: "12GB",
        storage: "512GB",
        camera: "50MP Triple Camera",
        battery: "5000mAh"
      }
    },
    {
      id:12,
      model: 'Huawei Nova 12',
      price: 25999,
      image: 'https://tse2.mm.bing.net/th/id/OIP.M1gF1SIHqQcwNxvUt60qdQHaHa?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.78-inch OLED",
        processor: "Snapdragon 778G 4G",
        ram: "8GB",
        storage: "256GB",
        camera: "50MP Dual Camera",
        battery: "4500mAh"
      }
    }
  ],

  'oneplus':[
    {
      id:13,
      model: 'OnePlus 13 Pro',
      price: 78999,
      image: 'https://tse1.mm.bing.net/th/id/OIP.6SjKPPAQj2duriHkp_NkdAHaHa?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.7-inch AMOLED",
        processor: "Snapdragon 8 Gen 3",
        ram: "12GB",
        storage: "256GB",
        camera: "50MP Triple Camera",
        battery: "5000mAh"
      }
    },
    {
      id:14,
      model: 'OnePlus 12R',
      price: 43999,
      image: 'https://tse2.mm.bing.net/th/id/OIP.4tmbMWtRXKLs1ZHTYL36dQHaHa?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.78-inch AMOLED",
        processor: "Snapdragon 8 Gen 2",
        ram: "8GB",
        storage: "128GB",
        camera: "50MP + 8MP + 2MP",
        battery: "5500mAh"
      }
    },
    {
      id:15,
      model: 'OnePlus Nord CE 4',
      price: 24999,
      image: 'https://tse4.mm.bing.net/th/id/OIP.4C6iYjHlghzjUsYDDEle9gHaHa?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.7-inch AMOLED",
        processor: "Snapdragon 7 Gen 3",
        ram: "8GB",
        storage: "128GB",
        camera: "50MP + 8MP",
        battery: "5500mAh"
      }
    }
  ],

  'realme':[
    {
      id:16,
      model: 'Realme 15 Pro',
      price: 19999,
      image: 'https://tse2.mm.bing.net/th/id/OIP.FQQzXDbnXYuLDK3nxLAuPQHaHa?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.78-inch AMOLED",
        processor: "MediaTek Dimensity 9200+",
        ram: "12GB",
        storage: "256GB",
        camera: "50MP + 8MP + 2MP",
        battery: "5000mAh"
      }
    },
    {
      id:17,
      model: 'Realme 14',
      price: 16999,
      image: 'https://tse2.mm.bing.net/th/id/OIP.b06LIl8JNxnLsfr--_XBAgHaHa?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.6-inch AMOLED",
        processor: "Snapdragon 7s Gen 2",
        ram: "8GB",
        storage: "128GB",
        camera: "50MP + 8MP",
        battery: "5000mAh"
      }
    },
    {
      id:18,
      model: 'Realme Narzo 70',
      price: 13999,
      image: 'https://tse1.mm.bing.net/th/id/OIP.CB_-LmLb-txTcx7IbOLIyQHaHa?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.6-inch AMOLED",
        processor: "MediaTek Dimensity 6100+",
        ram: "6GB",
        storage: "128GB",
        camera: "64MP + 2MP",
        battery: "5000mAh"
      }
    }
  ],

  'vivo':[
    {
      id:19,
      model: 'Vivo X200',
      price: 48999,
      image: 'https://tse1.mm.bing.net/th/id/OIP.jQZggXEbuOaUZv_mt_EvQAHaHa?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.78-inch AMOLED",
        processor: "Snapdragon 8 Gen 3",
        ram: "12GB",
        storage: "256GB",
        camera: "50MP Quad Camera",
        battery: "5000mAh"
      }
    },
    {
      id:20,
      model: 'Vivo T3 5G',
      price: 16999,
      image: 'https://tse3.mm.bing.net/th/id/OIP.WCp0ZQ8_Sz1RQL4WyBsyPgHaHa?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.78-inch AMOLED",
        processor: "MediaTek Dimensity 8200",
        ram: "8GB",
        storage: "256GB",
        camera: "50MP + 12MP + 8MP",
        battery: "4600mAh"
      }
    },
    {
      id:21,
      model: 'Vivo Y300T',
      price: 12999,
      image: 'https://tse3.mm.bing.net/th/id/OIP.vojPaRis8g6jSFQV-9-wbQAAAA?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.67-inch AMOLED",
        processor: "Snapdragon 695",
        ram: "8GB",
        storage: "128GB",
        camera: "64MP + 2MP",
        battery: "4800mAh"
      }
    }
  ],

  'infinix':[
    {
      id:22,
      model: 'Infinix GT 20 Pro',
      price: 22999,
      image: 'https://tse2.mm.bing.net/th/id/OIP.Jv4bnGS2XPLL46owfuBEbwHaHa?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.78-inch AMOLED",
        processor: "MediaTek Dimensity 920",
        ram: "8GB",
        storage: "256GB",
        camera: "200MP + 13MP + 2MP",
        battery: "4500mAh"
      }
    },
    {
      id:23,
      model: 'Infinix Note 50',
      price: 15999,
      image: 'https://tse4.mm.bing.net/th/id/OIP.si7yihiYfBIr_lEV2dWidAAAAA?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.78-inch AMOLED",
        processor: "MediaTek Helio G99",
        ram: "8GB",
        storage: "128GB",
        camera: "64MP + 2MP",
        battery: "5000mAh"
      } 
    },
    {
      id:24,
      model: 'Infinix Smart 8',
      price: 7999,
      image: 'https://tse2.mm.bing.net/th/id/OIP.4bCyZTXw3uo2sgqEFTVxhwHaJs?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.6-inch IPS LCD",
        processor: "Unisoc T606",
        ram: "4GB",
        storage: "64GB",
        camera: "13MP + AI Lens",
        battery: "5000mAh"
      }
    }
  ],

  'itel':[
    {
      id:25,
      model: 'Itel Zeno 5G',
      price: 10999,
      image: 'https://tse1.mm.bing.net/th/id/OIP.tPnM6m3YlY2X3L4MWgVR0QHaHa?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.78-inch AMOLED",
        processor: "Unisoc Tiger T616",
        ram: "8GB",
        storage: "128GB",
        camera: "50MP + AI Lens",
        battery: "5000mAh"
      }
    },
    {
      id:26,
      model: 'Itel A95',
      price: 8999,
      image: 'https://tse4.mm.bing.net/th/id/OIP.98yeFP1P2M3DPCme2nOlqQHaJ8?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.6-inch IPS LCD",
        processor: "Unisoc T606",
        ram: "4GB",
        storage: "128GB",
        camera: "50MP + AI Lens",
        battery: "5000mAh"
      }
    },
    {
      id:27,
      model: 'Itel Power 55',
      price: 7499,
      image: 'https://tse4.mm.bing.net/th/id/OIP.wVE0jMoLBXhKL9zFGbLniwHaHa?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.6-inch IPS LCD",
        processor: "Unisoc SC9863A1",
        ram: "4GB",
        storage: "64GB",
        camera: "8MP + AI Lens",
        battery: "5000mAh"
      }
    }
  ],

  'oppo':[
    {
      id:28,
      model: 'Oppo Reno 11 Pro',
      price: 42999,
      image: 'https://tse4.mm.bing.net/th/id/OIP.SUs9T4-x08AQ7IfR_ol3rQHaHa?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.82-inch QHD+ AMOLED",
        processor: "Snapdragon 8 Gen 2",
        ram: "12GB",
        storage: "256GB",
        camera: "50MP Triple Camera",
        battery: "5000mAh"
      }
    },
    {
      id:29,
      model: 'Oppo Find X6',
      price: 69999,
      image: 'https://tse3.mm.bing.net/th/id/OIP.FStNZdxuAnBliB48zqFzRQHaHa?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.74-inch AMOLED",
        processor: "Snapdragon 8+ Gen 1",
        ram: "12GB",
        storage: "256GB",
        camera: "64MP + 50MP + 8MP",
        battery: "4700mAh"
      }
    },
    {
      id:30,
      model: 'Oppo A58',
      price: 12999,
      image: 'https://tse2.mm.bing.net/th/id/OIP.aFDqpmdr8S0MH5apmYN4YwHaIR?pid=Api&P=0&h=180',
      amount:1,
      specs: {
        display: "6.43-inch AMOLED",
        processor: "Snapdragon 680",
        ram: "8GB",
        storage: "128GB",
        camera: "50MP + 2MP",
        battery: "5000mAh"
      }
    }
  ]
}
export default phoneSpecs;