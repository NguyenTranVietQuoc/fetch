async function getAllSinhVienAsync() {
    const response = await fetch('https://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien');
    const data = await response.json();
    console.log(data)
};
getAllSinhVienAsync();


async function insertSinhVienAsync(sinhVienOb) { 
    const response = await fetch('https://svcy.myclass.vn/api/SinhVienApi/themSinhVien',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sinhVienOb)
    });
    const data = await response.json();
    console.log(data);
}

let obCreate = {
    "maSinhVien": "10191",
    "tenSinhVien": "asd",
    "loaiSinhVien": "string",
    "diemToan": 10,
    "diemLy": 10,
    "diemHoa": 10,
    "diemRenLuyen": 10,
    "email": "mot@gmail.com",
    "soDienThoai": "07070707"
  }

  insertSinhVienAsync(obCreate);

async function updateSinhVienAsync (id,obUpdate){ 
    const response = await fetch(`https://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=${id}`,{
        method:'PUT',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(obUpdate)
    });
    const data = await response.json();
    console.log(data);
}
let obUpdate = {...obCreate};
obUpdate.tenSinhVien = 'abc'
updateSinhVienAsync(1019,obUpdate)

async function deleteSinhVienAsync(id) {
    const response = await fetch(`https://svcy.myclass.vn/api/SinhVienApi/xoaSinhVien?maSinhVien=${id}`, {
        method:'DELETE'
    });

    const data = await response.json();
    console.log(data);

}

deleteSinhVienAsync(10191)