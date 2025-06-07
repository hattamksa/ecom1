// Product data
const products = [
    {
        id: 1,
        name: "Smartphone XYZ Pro",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 2500000,
        description: "Smartphone terbaru dengan kamera 108MP dan layar AMOLED 6.7 inch.",
        specs: ["Snapdragon 8 Gen 2", "RAM 12GB", "Storage 256GB", "Baterai 5000mAh"],
        category: "elektronik"
    },
    {
        id: 2,
        name: "Laptop ABC Ultra",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 15000000,
        description: "Laptop ultra tipis dengan performa tinggi untuk produktivitas maksimal.",
        specs: ["Intel Core i7", "RAM 16GB", "SSD 1TB", "Display 15.6 inch 4K"],
        category: "elektronik"
    },
    {
        id: 3,
        name: "Headphone Premium",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 1200000,
        description: "Headphone dengan noise cancelling dan kualitas suara premium.",
        specs: ["Bluetooth 5.2", "Noise Cancelling", "Battery Life 30h", "Hi-Res Audio"],
        category: "elektronik"
    },
    {
        id: 4,
        name: "Smart Watch Pro",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 3500000,
        description: "Jam tangan pintar dengan fitur pemantauan kesehatan lengkap.",
        specs: ["Heart Rate Monitor", "GPS", "Water Resistant", "Battery Life 7 days"],
        category: "elektronik"
    },
    {
        id: 5,
        name: "Wireless Earbuds",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 800000,
        description: "Earbuds nirkabel dengan kualitas suara jernih dan bass yang kuat.",
        specs: ["Bluetooth 5.0", "Touch Control", "IPX7 Waterproof", "20h Battery Life"],
        category: "elektronik"
    },
    {
        id: 6,
        name: "Tablet Pro Max",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 8000000,
        description: "Tablet dengan layar besar dan performa tinggi untuk kreativitas dan hiburan.",
        specs: ["10.9 inch Display", "8GB RAM", "256GB Storage", "Apple Pencil Support"],
        category: "elektronik"
    },
    {
        id: 7,
        name: "Kamera DSLR Pro",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 12000000,
        description: "Kamera DSLR profesional dengan sensor full-frame dan resolusi tinggi.",
        specs: ["45MP Full-Frame Sensor", "4K Video", "ISO 100-51200", "Dual Card Slots"],
        category: "elektronik"
    },
    {
        id: 8,
        name: "Speaker Bluetooth Premium",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 1500000,
        description: "Speaker bluetooth dengan suara 360 derajat dan bass yang kuat.",
        specs: ["360° Sound", "Waterproof", "24h Battery Life", "Voice Assistant"],
        category: "elektronik"
    },
    {
        id: 9,
        name: "TV LED 4K 55 inch",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 7500000,
        description: "TV LED dengan resolusi 4K dan smart TV untuk pengalaman menonton terbaik.",
        specs: ["4K Resolution", "Smart TV", "HDR", "Dolby Vision & Atmos"],
        category: "elektronik"
    },
    {
        id: 10,
        name: "Mesin Cuci Otomatis",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 4500000,
        description: "Mesin cuci dengan teknologi inverter dan berbagai program pencucian.",
        specs: ["10kg Capacity", "Inverter Technology", "Multiple Wash Programs", "Energy Efficient"],
        category: "elektronik"
    },
    
    // FOOD - 10 ITEMS
    {
        id: 11,
        name: "Nasi Goreng Spesial",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 25000,
        description: "Nasi goreng dengan telur, ayam, udang, dan sayuran segar.",
        specs: ["Porsi Besar", "Level Pedas Sesuai Selera", "Free Kerupuk", "Free Teh Manis"],
        category: "food"
    },
    {
        id: 12,
        name: "Ayam Bakar Madu",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 35000,
        description: "Ayam bakar dengan bumbu madu yang manis dan gurih.",
        specs: ["1 Potong Dada/Paha", "Sambal Terasi", "Lalapan", "Nasi Putih"],
        category: "food"
    },
    {
        id: 13,
        name: "Sate Ayam Madura",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 30000,
        description: "Sate ayam dengan bumbu kacang khas Madura yang lezat.",
        specs: ["10 Tusuk", "Bumbu Kacang", "Lontong", "Bawang Goreng"],
        category: "food"
    },
    {
        id: 14,
        name: "Mie Goreng Seafood",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 28000,
        description: "Mie goreng dengan berbagai seafood segar seperti udang, cumi, dan kerang.",
        specs: ["Porsi Besar", "Seafood Segar", "Level Pedas Sesuai Selera", "Free Teh Manis"],
        category: "food"
    },
    {
        id: 15,
        name: "Soto Ayam Lamongan",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 22000,
        description: "Soto ayam khas Lamongan dengan kuah bening yang gurih dan suwiran ayam yang lembut.",
        specs: ["Kuah Bening", "Suwiran Ayam", "Koya", "Telur Rebus"],
        category: "food"
    },
    {
        id: 16,
        name: "Rendang Daging Sapi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 40000,
        description: "Rendang daging sapi khas Padang dengan bumbu rempah yang kaya dan daging yang empuk.",
        specs: ["Daging Sapi Pilihan", "Bumbu Rempah", "Tidak Pedas", "Porsi 250gr"],
        category: "food"
    },
    {
        id: 17,
        name: "Gado-Gado Spesial",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 20000,
        description: "Gado-gado dengan berbagai sayuran segar, telur, tahu, tempe, dan bumbu kacang yang lezat.",
        specs: ["Sayuran Segar", "Bumbu Kacang", "Telur Rebus", "Kerupuk Udang"],
        category: "food"
    },
    {
        id: 18,
        name: "Bakso Malang Komplit",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 25000,
        description: "Bakso dengan berbagai varian seperti bakso urat, bakso telur, dan tahu bakso. Disajikan dengan mie dan pangsit.",
        specs: ["Bakso Daging Sapi", "Bakso Urat", "Tahu Bakso", "Mie Kuning"],
        category: "food"
    },
    {
        id: 19,
        name: "Nasi Padang Komplit",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 35000,
        description: "Nasi Padang dengan berbagai lauk seperti rendang, ayam pop, gulai nangka, dan telur balado.",
        specs: ["Rendang", "Ayam Pop", "Gulai Nangka", "Telur Balado"],
        category: "food"
    },
    {
        id: 20,
        name: "Es Teh Manis",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 5000,
        description: "Es teh manis yang segar dan menyegarkan. Cocok untuk menemani hidangan utama.",
        specs: ["Teh Pilihan", "Gula Aren", "Es Batu", "Ukuran Besar"],
        category: "food"
    },
    
    // RUMAH TANGGA - 10 ITEMS
    {
        id: 21,
        name: "Set Panci Stainless 5pcs",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 450000,
        description: "Set panci stainless steel berkualitas tinggi dengan berbagai ukuran untuk kebutuhan memasak sehari-hari.",
        specs: ["5 Ukuran Berbeda", "Anti Karat", "Tahan Panas", "Gagang Ergonomis"],
        category: "rumah-tangga"
    },
    {
        id: 22,
        name: "Blender Multifungsi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 350000,
        description: "Blender multifungsi dengan berbagai kecepatan dan pisau tajam untuk menghaluskan berbagai bahan makanan.",
        specs: ["5 Kecepatan", "Kapasitas 1.5L", "Pisau Stainless", "Mudah Dibersihkan"],
        category: "rumah-tangga"
    },
    {
        id: 23,
        name: "Set Pisau Dapur Premium",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 280000,
        description: "Set pisau dapur premium dengan berbagai ukuran untuk berbagai kebutuhan memasak.",
        specs: ["6 Pisau Berbeda", "Stainless Steel", "Gagang Ergonomis", "Dudukan Kayu"],
        category: "rumah-tangga"
    },
    {
        id: 24,
        name: "Rice Cooker Digital",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 420000,
        description: "Rice cooker digital dengan berbagai program memasak dan fungsi penghangat.",
        specs: ["Kapasitas 1.8L", "10 Program", "Keep Warm", "Anti Lengket"],
        category: "rumah-tangga"
    },
    {
        id: 25,
        name: "Setrika Uap",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 320000,
        description: "Setrika uap dengan teknologi anti lengket dan pengaturan suhu yang presisi.",
        specs: ["Teknologi Uap", "Anti Lengket", "Pengaturan Suhu", "Hemat Energi"],
        category: "rumah-tangga"
    },
    {
        id: 26,
        name: "Vacuum Cleaner Portable",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 550000,
        description: "Vacuum cleaner portable dengan daya sedot kuat dan baterai tahan lama.",
        specs: ["Cordless", "HEPA Filter", "45min Battery Life", "Multi-surface"],
        category: "rumah-tangga"
    },
    {
        id: 27,
        name: "Dispenser Air Panas & Dingin",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 1200000,
        description: "Dispenser air dengan fungsi panas dan dingin, serta desain modern.",
        specs: ["Hot & Cold Water", "Child Safety Lock", "Energy Efficient", "Bottom Loading"],
        category: "rumah-tangga"
    },
    {
        id: 28,
        name: "Kompor Gas 2 Tungku",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 250000,
        description: "Kompor gas 2 tungku dengan api biru dan pengaman ganda.",
        specs: ["2 Tungku", "Api Biru", "Pengaman Ganda", "Stainless Steel"],
        category: "rumah-tangga"
    },
    {
        id: 29,
        name: "Rak Piring Stainless",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 180000,
        description: "Rak piring stainless yang kokoh dan anti karat untuk dapur Anda.",
        specs: ["2 Tingkat", "Anti Karat", "Mudah Dibersihkan", "Kapasitas Besar"],
        category: "rumah-tangga"
    },
    {
        id: 30,
        name: "Teko Listrik",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 150000,
        description: "Teko listrik dengan pemanas cepat dan fitur pengaman.",
        specs: ["Kapasitas 1.7L", "Pemanas Cepat", "Auto Shut-off", "Indikator LED"],
        category: "rumah-tangga"
    },
    
    // KEBUTUHAN SEHARI-HARI - 10 ITEMS
    {
        id: 31,
        name: "Sabun Cuci Piring Lemon",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 15000,
        description: "Sabun cuci piring dengan aroma lemon segar dan formula anti lemak.",
        specs: ["Aroma Lemon", "Anti Lemak", "Isi 800ml", "Ramah Lingkungan"],
        category: "kebutuhan-sehari-hari"
    },
    {
        id: 32,
        name: "Pasta Gigi Keluarga",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 18000,
        description: "Pasta gigi untuk seluruh keluarga dengan perlindungan gigi dan gusi.",
        specs: ["Perlindungan Gigi & Gusi", "Fresh Mint", "Isi 225g", "Anti Plak"],
        category: "kebutuhan-sehari-hari"
    },
    {
        id: 33,
        name: "Deterjen Bubuk",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 25000,
        description: "Deterjen bubuk dengan formula pembersih noda membandel dan wangi tahan lama.",
        specs: ["Anti Noda", "Wangi Tahan Lama", "Isi 1kg", "Untuk Semua Jenis Kain"],
        category: "kebutuhan-sehari-hari"
    },
    {
        id: 34,
        name: "Sampo Anti Ketombe",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 30000,
        description: "Sampo anti ketombe dengan formula yang menjaga kesehatan kulit kepala.",
        specs: ["Anti Ketombe", "Menjaga Kelembaban", "Isi 340ml", "Untuk Semua Jenis Rambut"],
        category: "kebutuhan-sehari-hari"
    },
    {
        id: 35,
        name: "Sabun Mandi Cair",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 22000,
        description: "Sabun mandi cair dengan formula pelembab dan wangi yang menyegarkan.",
        specs: ["Formula Pelembab", "Wangi Lavender", "Isi 450ml", "pH Seimbang"],
        category: "kebutuhan-sehari-hari"
    },
    {
        id: 36,
        name: "Tisu Facial",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 12000,
        description: "Tisu facial lembut dengan 3 lapis untuk kenyamanan maksimal.",
        specs: ["3 Lapis", "Lembut", "Isi 200 lembar", "Tidak Mudah Sobek"],
        category: "kebutuhan-sehari-hari"
    },
    {
        id: 37,
        name: "Sikat Gigi Medium",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 8000,
        description: "Sikat gigi dengan bulu medium dan desain ergonomis untuk membersihkan gigi dengan optimal.",
        specs: ["Bulu Medium", "Desain Ergonomis", "Gagang Anti Slip", "Pembersih Lidah"],
        category: "kebutuhan-sehari-hari"
    },
    {
        id: 38,
        name: "Pembersih Lantai",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 20000,
        description: "Pembersih lantai dengan formula anti bakteri dan wangi yang tahan lama.",
        specs: ["Anti Bakteri", "Wangi Pinus", "Isi 800ml", "Untuk Semua Jenis Lantai"],
        category: "kebutuhan-sehari-hari"
    },
    {
        id: 39,
        name: "Pewangi Pakaian",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 28000,
        description: "Pewangi pakaian dengan aroma bunga yang tahan lama dan formula anti bakteri.",
        specs: ["Aroma Bunga", "Tahan Lama", "Isi 900ml", "Anti Bakteri"],
        category: "kebutuhan-sehari-hari"
    },
    {
        id: 40,
        name: "Handuk Mandi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-12pws_V_freejeI_CTBX4MPmCPbC2_uuQ&s",
        price: 45000,
        description: "Handuk mandi dengan bahan lembut dan daya serap tinggi.",
        specs: ["Ukuran 70x140cm", "Daya Serap Tinggi", "100% Katun", "Anti Bakteri"],
        category: "kebutuhan-sehari-hari"
    }
];
