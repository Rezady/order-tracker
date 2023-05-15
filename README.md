petunjuk / flow penggunaan website : 
    - user akan diarahkan halaman delivery. kemudian, user mengisi 3 field yg wajib yaitu email, phone number dan address
    - validasi input terjadi ketika user melakukan onblur setelah mengisi field
    - button summary di page tersebut akan didisabled jika user belum mengisi 3 field tersebut
    - jika user klik "send as dropshipper", maka otomatis nilai dropshipping fee menjadi 5900 dan total summary akan bertambah
    - saat user memasuki halaman payment, user wajib memilih shipment yang tersedia
    - button tetap didisable jika user tidak mengisi shipment
    - setelah user mengisi shipment dan payment, maka section summary akan terupdate sebagaimana semestinya
    - di halaman ini (masih payment page), terdapat tombol back yg akan kembali ke halaman delivery
    - fyi, di setiap halaman terdapat panel indikator yg bekerja menyesuaikan page yg sedang aktif
    - ketika user memasuki halaman finish, terdapat : 
        ~ order id yg digenerate randomm
        ~ button go to homepage yg akan kembali ke halaman step 1 (delivery) dan akan mengembalikan state zustand seperti semula
        ~ summary yang lengkap

petunjuk running app : npm install && npm start

stack yang digunakan : 
    - React
    - React hook form
    - styled component
    - zustand
    - react router dom
    - yup